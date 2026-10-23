(function () {
  "use strict";

  // ---------- Question bank and syllabus model ----------
  var BANK = window.ITIL5_BANK || [];
  var AREAS = [
    { k: "TERMS", name: "Key ITIL terms and definitions", short: "Key terms", marks: 12 },
    { k: "DIMS", name: "Four dimensions of product and service management", short: "Four dimensions", marks: 4 },
    { k: "PSLM", name: "Product and service lifecycle", short: "Lifecycle", marks: 4 },
    { k: "VSYS", name: "ITIL value system", short: "Value system", marks: 16 },
    { k: "VSTR", name: "Value stream identification, mapping and management", short: "Value streams", marks: 2 },
    { k: "AI", name: "ITIL and AI", short: "AI", marks: 1 },
    { k: "FW", name: "ITIL and other frameworks", short: "Frameworks", marks: 1 }
  ];
  var SUBS = [
    { k: "gp", name: "Guiding principles", n: 7 },
    { k: "gov", name: "Governance", n: 2 },
    { k: "ci", name: "Continual improvement", n: 3 },
    { k: "prac", name: "Management practices", n: 2 },
    { k: "sys", name: "Value system components", n: 2 }
  ];
  var AREA = {}, SUB = {};
  AREAS.forEach(function (a) { AREA[a.k] = a; });
  SUBS.forEach(function (s) { SUB[s.k] = s; });
  var DRILLS = [
    { k: "TERMS", name: "Key ITIL terms and definitions" },
    { k: "DIMS", name: "Four dimensions" },
    { k: "PSLM", name: "Product and service lifecycle" },
    { k: "gp", name: "Guiding principles" },
    { k: "gov", name: "Governance" },
    { k: "ci", name: "Continual improvement" },
    { k: "prac", name: "Management practices" },
    { k: "sys", name: "Value system components" },
    { k: "VSTR", name: "Value streams" },
    { k: "AI", name: "ITIL and AI" },
    { k: "FW", name: "ITIL and other frameworks" }
  ];
  var LETTERS = "ABCD";
  var Q = {};
  BANK.forEach(function (t) {
    t.items.forEach(function (it, i) {
      var id = t.id + "-" + (i + 1);
      Q[id] = { id: id, test: t.id, n: i + 1, a: it.a, s: it.s, q: it.q, o: it.o, c: it.c, x: it.x };
    });
  });
  var ALL_IDS = Object.keys(Q);
  function topicOf(q) { return q.a === "VSYS" ? q.s : q.a; }
  function topicName(q) { return q.a === "VSYS" ? SUB[q.s].name : AREA[q.a].short; }
  function drillName(k) { for (var i = 0; i < DRILLS.length; i++) if (DRILLS[i].k === k) return DRILLS[i].name; return k; }

  // ---------- Small utilities ----------
  function $(s) { return document.querySelector(s); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rnd) {
    rnd = rnd || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function fmtClock(s) { s = Math.max(0, s); return pad2(Math.floor(s / 60)) + ":" + pad2(s % 60); }
  function fmtDur(s) {
    if (s == null) return "-";
    var m = Math.floor(s / 60), r = s % 60;
    return m ? m + " min " + pad2(r) + " s" : r + " s";
  }
  function fmtDate(ts) {
    try {
      return new Date(ts).toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
    } catch (e) { return new Date(ts).toISOString().slice(0, 16).replace("T", " "); }
  }
  var toastTimer = null;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 4200);
  }

  // Browser storage: settings and an unfinished exam (per-device conveniences)
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }
  };
  var settings = Object.assign({ minutes: 60, shuffle: true }, LS.get("itil5.settings", {}));
  function saveSettings() { LS.set("itil5.settings", settings); }

  // ---------- Attempt history: account storage when available, else this browser ----------
  var localStore = {
    kind: "device",
    list: function () { return Promise.resolve(LS.get("itil5.history", [])); },
    add: function (att) { var h = LS.get("itil5.history", []); h.unshift(att); LS.set("itil5.history", h.slice(0, 200)); return Promise.resolve(); }
  };
  var store = localStore;
  var history = [];
  var storeReady = false;
  var hasClaude = !!(window.claude && typeof window.claude.use === "function");
  var downloadsP = hasClaude ? window.claude.use("downloads").catch(function () { return null; }) : Promise.resolve(null);

  function initStore() {
    var ready = Promise.resolve(null);
    if (hasClaude) {
      ready = Promise.all([
        window.claude.use("db").catch(function () { return null; }),
        window.claude.use("user").catch(function () { return null; })
      ]).then(function (r) {
        var db = r[0], user = r[1];
        if (!db || !user) return null;
        return user.id().then(function (uid) {
          if (!uid) return null;
          var col = db.collection("data/users/" + uid);
          return {
            kind: "account",
            list: function () {
              return col.orderBy("finishedAt", "desc").limit(300).get().then(function (snap) {
                return snap.docs.filter(function (d) { return d.exists; })
                  .map(function (d) { return JSON.parse(JSON.stringify(d.data())); })
                  .filter(function (x) { return x && x.kind === "attempt" && x.qids; });
              });
            },
            add: function (att) { return col.doc("att-" + att.id).set(Object.assign({ kind: "attempt" }, att)); }
          };
        });
      }).catch(function () { return null; });
    }
    return ready.then(function (acct) {
      if (acct) store = acct;
      return store.list().catch(function () { store = localStore; return localStore.list(); });
    }).then(function (list) {
      // Keep any attempts made in this visit before storage answered
      var seen = {};
      list.forEach(function (a) { seen[a.id] = true; });
      history = history.filter(function (a) { return !seen[a.id]; }).concat(list);
      history.sort(function (a, b) { return b.finishedAt - a.finishedAt; });
      storeReady = true;
      renderHome();
    });
  }
  function saveAttempt(att) {
    history.unshift(att);
    return store.add(att).catch(function () {
      if (store.kind === "account") {
        store = localStore;
        renderStoreNote();
        toast("Your account history could not be updated, so this attempt was saved in this browser.");
      }
      return localStore.add(att);
    });
  }

  // ---------- Building an exam session ----------
  function randomBlueprint() {
    var ids = [];
    function pick(filter, n) { return shuffle(ALL_IDS.filter(filter)).slice(0, n); }
    AREAS.forEach(function (a) {
      if (a.k !== "VSYS") ids = ids.concat(pick(function (id) { return Q[id].a === a.k; }, a.marks));
    });
    SUBS.forEach(function (s) {
      ids = ids.concat(pick(function (id) { return Q[id].a === "VSYS" && Q[id].s === s.k; }, s.n));
    });
    return shuffle(ids);
  }
  function buildSession(key, mode) {
    var qids, title;
    if (key.indexOf("exam-") === 0) {
      var n = +key.slice(5);
      var ids = [];
      for (var i = 1; i <= 40; i++) ids.push(n + "-" + i);
      qids = shuffle(ids, mulberry32(n * 7919 + 17));
      title = "Mock exam " + n;
    } else if (key === "random") {
      qids = randomBlueprint();
      title = "Random mixed exam";
    } else {
      var tk = key.slice(6);
      qids = shuffle(ALL_IDS.filter(function (id) { return topicOf(Q[id]) === tk; })).slice(0, 20);
      title = "Topic drill: " + drillName(tk);
      mode = "practice";
    }
    var perm = {};
    qids.forEach(function (id) { perm[id] = settings.shuffle ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3]; });
    var limit = mode === "exam" ? settings.minutes * 60 : null;
    var now = Date.now();
    return {
      key: key, title: title, mode: mode, qids: qids, perm: perm,
      answers: {}, flags: {}, checked: {}, current: 0,
      startedAt: now, limitSec: limit, endsAt: limit ? now + limit * 1000 : null, warned: false
    };
  }

  // ---------- Views ----------
  var view = "home";
  function showView(name) {
    view = name;
    $("#view-home").hidden = name !== "home";
    $("#view-exam").hidden = name !== "exam";
    $("#view-result").hidden = name !== "result";
    window.scrollTo(0, 0);
  }

  // ---------- Exam runtime ----------
  var S = null;
  var timerId = null;
  function saveDraft() { if (S && !S.submitting) LS.set("itil5.draft", S); }

  function startSession(sess) {
    S = sess;
    showView("exam");
    renderExamShell();
    renderQuestion();
    startTimer();
    saveDraft();
  }
  function renderExamShell() {
    $("#eb-name").textContent = S.title;
    var badge = $("#eb-mode");
    badge.textContent = S.mode === "exam" ? "Exam" : "Practice";
    badge.className = "mode-badge" + (S.mode === "practice" ? " practice" : "");
    $("#eb-timer").setAttribute("aria-label", S.endsAt ? "Time left" : "Time elapsed");
    $("#q-total").textContent = S.qids.length;
    $("#eb-total").textContent = S.qids.length;
    $("#sm-title").textContent = S.mode === "exam" ? "Submit your exam?" : "Finish this practice session?";
    $("#sm-submit").textContent = S.mode === "exam" ? "Submit exam" : "Finish";
    var omr = $("#omr");
    omr.textContent = "";
    S.qids.forEach(function (id, i) {
      var b = el("button", "", String(i + 1));
      b.type = "button";
      b.addEventListener("click", function () { goTo(i); });
      omr.appendChild(b);
    });
    $("#btn-check").hidden = S.mode !== "practice";
  }
  function renderQuestion() {
    var id = S.qids[S.current], q = Q[id], perm = S.perm[id];
    var revealed = S.mode === "practice" && !!S.checked[id];
    $("#q-index").textContent = S.current + 1;
    $("#q-text").textContent = q.q;
    var box = $("#q-options");
    box.textContent = "";
    perm.forEach(function (orig, pos) {
      var b = el("button", "opt");
      b.type = "button";
      b.setAttribute("role", "radio");
      var chosen = S.answers[id] === orig;
      b.setAttribute("aria-checked", chosen ? "true" : "false");
      b.appendChild(el("span", "bubble", LETTERS[pos]));
      b.appendChild(el("span", "", q.o[orig]));
      if (revealed) {
        b.disabled = true;
        if (orig === q.c) b.classList.add("is-correct");
        else if (chosen) b.classList.add("is-wrong");
      } else {
        b.addEventListener("click", function () { choose(orig); });
      }
      box.appendChild(b);
    });
    var fb = $("#q-feedback");
    if (revealed) {
      var ok = S.answers[id] === q.c;
      fb.hidden = false;
      fb.className = "feedback" + (ok ? "" : " bad");
      fb.textContent = "";
      fb.appendChild(el("b", "", ok ? "Correct." : "Not quite. The correct answer is " + LETTERS[perm.indexOf(q.c)] + "."));
      fb.appendChild(el("p", "", q.x));
    } else {
      fb.hidden = true;
    }
    var fl = $("#btn-flag");
    fl.setAttribute("aria-pressed", S.flags[id] ? "true" : "false");
    fl.textContent = S.flags[id] ? "Flagged" : "Flag for review";
    $("#btn-prev").disabled = S.current === 0;
    $("#btn-next").textContent = S.current === S.qids.length - 1 ? (S.mode === "exam" ? "Review and submit" : "Finish") : "Next";
    if (S.mode === "practice") $("#btn-check").disabled = S.answers[id] == null || revealed;
    updateSheet();
  }
  function updateSheet() {
    var btns = $("#omr").children;
    var answered = 0;
    S.qids.forEach(function (id, i) {
      var b = btns[i], has = S.answers[id] != null;
      if (has) answered++;
      var cls = [];
      if (S.mode === "practice" && S.checked[id]) cls.push(S.answers[id] === Q[id].c ? "right" : "wrong");
      else if (has) cls.push("answered");
      if (S.flags[id]) cls.push("flagged");
      if (i === S.current) cls.push("current");
      b.className = cls.join(" ");
      b.setAttribute("aria-label", "Question " + (i + 1) + (has ? ", answered" : ", not answered") + (S.flags[id] ? ", flagged" : ""));
      if (i === S.current) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
    $("#eb-answered").textContent = answered;
  }
  function choose(orig) {
    var id = S.qids[S.current];
    if (S.mode === "practice" && S.checked[id]) return;
    S.answers[id] = orig;
    saveDraft();
    renderQuestion();
  }
  function goTo(i) {
    if (!S) return;
    S.current = Math.max(0, Math.min(S.qids.length - 1, i));
    saveDraft();
    renderQuestion();
    var sheet = $("#answer-sheet");
    if (window.matchMedia && window.matchMedia("(max-width: 959px)").matches && !sheet.classList.contains("collapsed")) toggleSheet(false);
    $("#q-text").scrollIntoView({ block: "nearest" });
  }
  function toggleFlag() {
    var id = S.qids[S.current];
    if (S.flags[id]) delete S.flags[id]; else S.flags[id] = true;
    saveDraft();
    renderQuestion();
  }
  function checkAnswer() {
    var id = S.qids[S.current];
    if (S.mode !== "practice" || S.answers[id] == null) return;
    S.checked[id] = true;
    saveDraft();
    renderQuestion();
  }
  function toggleSheet(open) {
    var sheet = $("#answer-sheet");
    var willOpen = open != null ? open : sheet.classList.contains("collapsed");
    sheet.classList.toggle("collapsed", !willOpen);
    var t = $("#sheet-toggle");
    t.textContent = willOpen ? "Hide" : "Show";
    t.setAttribute("aria-expanded", willOpen ? "true" : "false");
  }

  function startTimer() { clearInterval(timerId); tick(); timerId = setInterval(tick, 1000); }
  function tick() {
    if (!S) return;
    var clock = $("#eb-timer");
    if (S.endsAt) {
      var left = Math.round((S.endsAt - Date.now()) / 1000);
      clock.textContent = fmtClock(left);
      clock.className = "clock" + (left <= 300 ? " crit" : left <= 600 ? " warn" : "");
      if (left <= 600 && left > 0 && !S.warned) { S.warned = true; toast("10 minutes left."); saveDraft(); }
      if (left <= 0) submit(true, false);
    } else {
      clock.textContent = fmtClock(Math.round((Date.now() - S.startedAt) / 1000));
      clock.className = "clock";
    }
  }

  function openSubmit() {
    var n = S.qids.length, a = 0, f = 0;
    S.qids.forEach(function (id) { if (S.answers[id] != null) a++; if (S.flags[id]) f++; });
    var msg = "You have answered " + a + " of " + n + " questions.";
    if (n - a) msg += " " + (n - a) + " unanswered " + (n - a === 1 ? "question counts" : "questions count") + " as incorrect.";
    if (f) msg += " " + f + " " + (f === 1 ? "question is" : "questions are") + " flagged for review.";
    $("#sm-summary").textContent = msg;
    $("#submit-modal").hidden = false;
    $("#sm-submit").focus();
  }
  function closeSubmit() { $("#submit-modal").hidden = true; }

  function scoreSession(s) {
    var answers = s.qids.map(function (id) { return s.answers[id] == null ? -1 : s.answers[id]; });
    var perm = s.qids.map(function (id) { return s.perm[id].join(""); });
    var score = 0, areas = {}, subs = {};
    s.qids.forEach(function (id, i) {
      var q = Q[id], ok = answers[i] === q.c;
      if (ok) score++;
      var a = areas[q.a] || (areas[q.a] = [0, 0]);
      a[1]++; if (ok) a[0]++;
      if (q.a === "VSYS") { var b = subs[q.s] || (subs[q.s] = [0, 0]); b[1]++; if (ok) b[0]++; }
    });
    var total = s.qids.length, finishedAt = Date.now();
    var passMark = Math.ceil(total * 0.65);
    var used = Math.round((finishedAt - s.startedAt) / 1000);
    if (s.limitSec) used = Math.min(used, s.limitSec);
    return {
      id: finishedAt.toString(36) + Math.random().toString(36).slice(2, 6),
      key: s.key, title: s.title, mode: s.mode,
      startedAt: s.startedAt, finishedAt: finishedAt, usedSec: used, limitSec: s.limitSec,
      qids: s.qids.slice(), answers: answers, perm: perm,
      score: score, total: total, pct: Math.round(score / total * 100), passMark: passMark, passed: score >= passMark,
      areas: areas, subs: subs
    };
  }
  function submit(auto, wantPdf) {
    if (!S || S.submitting) return;
    S.submitting = true;
    clearInterval(timerId); timerId = null;
    closeSubmit();
    var att = scoreSession(S);
    S = null;
    LS.del("itil5.draft");
    saveAttempt(att);
    showResult(att);
    if (auto) toast("Time is up. Your exam has been submitted.");
    if (wantPdf) downloadPdf(att, $("#r-pdf"));
  }
  function exitSession() {
    if (!S) return;
    saveDraft();
    clearInterval(timerId); timerId = null;
    S = null;
    showView("home");
    renderHome();
    toast("Saved. Your timer keeps running while you are away.");
  }

  // ---------- Results ----------
  var R = null, rFilter = "wrong";
  function showResult(att) {
    R = att;
    rFilter = att.score === att.total ? "all" : "wrong";
    showView("result");
    renderResult();
  }
  function areaRows(container, areas, subs) {
    container.textContent = "";
    AREAS.forEach(function (a) {
      var v = areas[a.k];
      if (!v || !v[1]) return;
      container.appendChild(barRow(a.name, v[0], v[1], false));
      if (a.k === "VSYS") {
        SUBS.forEach(function (s) {
          var w = subs && subs[s.k];
          if (w && w[1]) container.appendChild(barRow(s.name, w[0], w[1], true));
        });
      }
    });
  }
  function barRow(label, c, t, indent) {
    var row = el("div", "bar-row");
    if (indent) row.style.paddingLeft = "18px";
    var pct = t ? Math.round(c / t * 100) : 0;
    row.appendChild(el("span", "lbl", label));
    row.appendChild(el("span", "val", c + "/" + t + " · " + pct + "%"));
    var m = el("div", "meter " + (pct >= 65 ? "pass" : "fail"));
    var fill = el("span");
    fill.style.width = pct + "%";
    m.appendChild(fill);
    m.appendChild(el("i"));
    row.appendChild(m);
    return row;
  }
  function renderResult() {
    var att = R;
    $("#r-meta").textContent = (att.mode === "exam" ? "Exam mode" : "Practice mode") + " · " + fmtDate(att.finishedAt);
    $("#r-title").textContent = att.title;
    $("#r-score").textContent = att.score;
    $("#r-of").textContent = "/" + att.total;
    $("#r-pct").textContent = att.pct + "%";
    $("#r-detail").textContent = "Pass mark " + att.passMark + "/" + att.total + " (65%). Time used: " + fmtDur(att.usedSec) + (att.limitSec ? " of " + Math.round(att.limitSec / 60) + " minutes." : ".");
    var st = $("#r-stamp");
    st.textContent = att.passed ? "PASS" : "FAIL";
    st.className = "stamp " + (att.passed ? "pass" : "fail");
    st.setAttribute("aria-label", att.passed ? "Result: pass" : "Result: fail");
    areaRows($("#r-areas"), att.areas, att.subs);
    var wrong = 0;
    att.qids.forEach(function (id, i) { if (att.answers[i] !== Q[id].c) wrong++; });
    $("#tab-wrong").textContent = "Mistakes (" + wrong + ")";
    $("#tab-all").textContent = "All questions (" + att.total + ")";
    $("#tab-wrong").setAttribute("aria-selected", rFilter === "wrong" ? "true" : "false");
    $("#tab-all").setAttribute("aria-selected", rFilter === "all" ? "true" : "false");
    var pdfBtn = $("#r-pdf");
    pdfBtn.dataset.label = wrong ? "Download PDF of my mistakes" : "Download PDF summary";
    pdfBtn.textContent = pdfBtn.dataset.label;
    var list = $("#r-list");
    list.textContent = "";
    var shown = 0;
    att.qids.forEach(function (id, i) {
      var ok = att.answers[i] === Q[id].c;
      if (rFilter === "wrong" && ok) return;
      list.appendChild(reviewItem(att, i));
      shown++;
    });
    if (!shown) list.appendChild(el("li", "", "No mistakes in this attempt. Every answer was correct."));
  }
  function reviewItem(att, i) {
    var id = att.qids[i], q = Q[id], ans = att.answers[i];
    var perm = String(att.perm[i]).split("").map(Number);
    var ok = ans === q.c, skipped = ans < 0;
    var li = el("li", ok ? "" : (skipped ? "skipped" : "wrong"));
    var head = el("div", "rv-head");
    head.appendChild(el("strong", "", "Question " + (i + 1)));
    var chips = el("span");
    chips.style.display = "inline-flex"; chips.style.gap = "6px"; chips.style.flexWrap = "wrap";
    chips.appendChild(el("span", "chip", topicName(q)));
    chips.appendChild(el("span", "chip " + (ok ? "pass" : skipped ? "flagged" : "fail"), ok ? "Correct" : skipped ? "Not answered" : "Incorrect"));
    head.appendChild(chips);
    li.appendChild(head);
    li.appendChild(el("p", "rv-q", q.q));
    var opts = el("ul", "rv-opts");
    perm.forEach(function (orig, pos) {
      var row = el("li", orig === q.c ? "correct" : (orig === ans ? "chosen-wrong" : ""));
      row.appendChild(el("span", "bubble", LETTERS[pos]));
      row.appendChild(el("span", "", q.o[orig]));
      row.appendChild(el("span", "tag", orig === q.c ? (orig === ans ? "Your answer, correct" : "Correct answer") : (orig === ans ? "Your answer" : "")));
      opts.appendChild(row);
    });
    li.appendChild(opts);
    li.appendChild(el("p", "rv-x", q.x));
    return li;
  }

  // ---------- PDF of mistakes ----------
  function getJsPDF() {
    return new Promise(function (resolve) {
      var tries = 0;
      (function wait() {
        if (window.jspdf && window.jspdf.jsPDF) return resolve(window.jspdf.jsPDF);
        if (++tries > 100) return resolve(null);
        setTimeout(wait, 100);
      })();
    });
  }
  function pdfText(s) {
    return String(s)
      .replace(/[  -​  ]/g, " ")
      .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
      .replace(/[–—]/g, "-").replace(/…/g, "...").replace(/•/g, "-")
      .replace(/®/g, "(R)")
      .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "?");
  }
  function buildPdf(att, jsPDF) {
    var doc = new jsPDF({ unit: "pt", format: "a4" });
    var W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight();
    var M = 48, CW = W - M * 2, y = M;
    var C = { ink: [27, 32, 39], muted: [90, 100, 114], ok: [29, 122, 69], bad: [179, 38, 30], flag: [154, 91, 0], accent: [42, 88, 211], rule: [215, 221, 229] };
    function color(c) { doc.setTextColor(c[0], c[1], c[2]); }
    function ensure(h) { if (y + h > H - M - 14) { doc.addPage(); y = M; } }
    function para(text, o) {
      o = o || {};
      var size = o.size || 10.5, indent = o.indent || 0, lh = size * (o.lh || 1.38);
      doc.setFont("helvetica", o.style || "normal");
      doc.setFontSize(size);
      color(o.color || C.ink);
      var lines = [];
      pdfText(text).split("\n").forEach(function (p) { lines = lines.concat(doc.splitTextToSize(p, CW - indent)); });
      lines.forEach(function (ln) { ensure(lh); doc.text(ln, M + indent, y + size); y += lh; });
      y += (o.gap == null ? 4 : o.gap);
    }
    function rule() { ensure(10); doc.setDrawColor(C.rule[0], C.rule[1], C.rule[2]); doc.setLineWidth(0.8); doc.line(M, y + 4, W - M, y + 4); y += 12; }

    para("ITIL Foundation (Version 5) mock exam review", { size: 18, style: "bold", gap: 2 });
    para(att.title + "  |  " + (att.mode === "exam" ? "Exam mode" : "Practice mode") + "  |  " + fmtDate(att.finishedAt), { color: C.muted, gap: 10 });
    para("Score: " + att.score + "/" + att.total + " (" + att.pct + "%)    Result: " + (att.passed ? "PASS" : "FAIL") + " (pass mark " + att.passMark + "/" + att.total + ")    Time used: " + fmtDur(att.usedSec),
      { size: 12, style: "bold", color: att.passed ? C.ok : C.bad, gap: 12 });
    para("Score by syllabus area", { size: 12.5, style: "bold", gap: 4 });
    AREAS.forEach(function (a) {
      var v = att.areas[a.k];
      if (!v || !v[1]) return;
      para(a.name + ":  " + v[0] + "/" + v[1] + " (" + Math.round(v[0] / v[1] * 100) + "%)", { gap: 1, color: v[0] / v[1] >= 0.65 ? C.ink : C.bad });
      if (a.k === "VSYS") SUBS.forEach(function (s) {
        var w = att.subs && att.subs[s.k];
        if (w && w[1]) para("- " + s.name + ":  " + w[0] + "/" + w[1], { indent: 14, gap: 1, size: 10, color: C.muted });
      });
    });
    y += 6; rule();

    var wrong = [];
    att.qids.forEach(function (id, i) { if (att.answers[i] !== Q[id].c) wrong.push(i); });
    para(wrong.length ? "Questions to review (" + wrong.length + ")" : "No mistakes: every answer was correct.", { size: 13, style: "bold", gap: 8 });
    wrong.forEach(function (i) {
      var id = att.qids[i], q = Q[id], ans = att.answers[i];
      var perm = String(att.perm[i]).split("").map(Number);
      ensure(90);
      para("Question " + (i + 1) + "  -  " + (q.a === "VSYS" ? AREA.VSYS.name + ": " + SUB[q.s].name : AREA[q.a].name), { size: 10, style: "bold", color: C.accent, gap: 3 });
      para(q.q, { size: 11, gap: 6 });
      if (ans < 0) para("Your answer: not answered", { color: C.flag, style: "bold", gap: 3 });
      else para("Your answer: " + LETTERS[perm.indexOf(ans)] + ") " + q.o[ans], { color: C.bad, gap: 3 });
      para("Correct answer: " + LETTERS[perm.indexOf(q.c)] + ") " + q.o[q.c], { color: C.ok, style: "bold", gap: 3 });
      para("Explanation: " + q.x, { color: C.muted, gap: 4 });
      rule();
    });
    var pages = doc.getNumberOfPages();
    for (var p = 1; p <= pages; p++) {
      doc.setPage(p);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); color(C.muted);
      doc.text("Unofficial practice material. ITIL(R) is a registered trademark of the PeopleCert group.", M, H - 26);
      doc.text("Page " + p + " of " + pages, W - M, H - 26, { align: "right" });
    }
    return doc.output("blob");
  }
  function pdfName(att) {
    var d = new Date(att.finishedAt);
    var date = d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
    var slug = att.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return "ITIL5-" + slug + "-" + date + "-review.pdf";
  }
  function downloadPdf(att, btn) {
    if (btn) { btn.disabled = true; btn.textContent = "Preparing PDF…"; }
    function done() { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Download PDF"; } }
    return getJsPDF().then(function (jsPDF) {
      if (!jsPDF) { toast("The PDF tool did not load. Check your connection and try again."); return; }
      var blob = buildPdf(att, jsPDF), filename = pdfName(att);
      if (hasClaude) {
        return downloadsP.then(function (dl) {
          if (!dl) { toast("Saving files is not available in this view."); return; }
          return dl.save({ filename: filename, data: blob }).then(function () { toast("PDF saved."); }, function (e) {
            var c = e && e.code;
            if (c === "declined") toast("Download cancelled.");
            else if (c === "rate_limited") toast("A save prompt is already open.");
            else toast("The PDF could not be saved in this view.");
          });
        });
      }
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 3000);
      toast("PDF downloaded.");
    }).catch(function () { toast("Something went wrong while creating the PDF."); }).then(done);
  }

  // ---------- Home ----------
  function renderSettings() {
    $("#time-60").setAttribute("aria-pressed", settings.minutes === 60 ? "true" : "false");
    $("#time-75").setAttribute("aria-pressed", settings.minutes === 75 ? "true" : "false");
    $("#rule-time").textContent = settings.minutes + " minutes";
    $("#opt-shuffle").checked = !!settings.shuffle;
  }
  function renderResume() {
    var d = LS.get("itil5.draft", null), box = $("#resume");
    if (!d || !d.qids || !Q[d.qids[0]]) { box.hidden = true; return; }
    var answered = Object.keys(d.answers || {}).length;
    var txt = "You have an unfinished " + (d.mode === "exam" ? "exam" : "practice session") + ": " + d.title + " (" + answered + "/" + d.qids.length + " answered";
    if (d.endsAt) {
      var left = Math.round((d.endsAt - Date.now()) / 1000);
      txt += left > 0 ? ", " + fmtClock(left) + " left)." : "). Its time has run out.";
      $("#resume-go").textContent = left > 0 ? "Resume" : "Submit and see result";
    } else {
      txt += ").";
      $("#resume-go").textContent = "Resume";
    }
    $("#resume-text").textContent = txt;
    box.hidden = false;
  }
  function attemptsFor(key, mode) { return history.filter(function (h) { return h.key === key && (!mode || h.mode === mode); }); }
  function renderCards() {
    var grid = $("#exam-grid");
    grid.textContent = "";
    BANK.forEach(function (t) {
      var key = "exam-" + t.id;
      var ex = attemptsFor(key, "exam"), pr = attemptsFor(key, "practice");
      var best = ex.reduce(function (m, a) { return Math.max(m, a.score); }, -1);
      var card = el("article", "exam-card");
      var top = el("div", "top");
      top.appendChild(el("span", "exam-no", pad2(t.id)));
      if (ex.length) top.appendChild(el("span", "chip " + (best >= 26 ? "pass" : "fail"), best >= 26 ? "Passed" : "Not passed yet"));
      else if (pr.length) top.appendChild(el("span", "chip", "Practised"));
      card.appendChild(top);
      card.appendChild(el("h3", "", "Mock exam " + t.id));
      var status = ex.length
        ? "Best " + best + "/40 · Last " + ex[0].score + "/40 · " + ex.length + (ex.length === 1 ? " attempt" : " attempts")
        : (pr.length ? "Practised " + pr.length + (pr.length === 1 ? " time" : " times") + ". Not taken in exam mode yet." : "Not taken yet");
      card.appendChild(el("p", "status", status));
      var m = el("div", "meter" + (ex.length ? (best >= 26 ? " pass" : " fail") : ""));
      var fill = el("span"); fill.style.width = (ex.length ? Math.round(best / 40 * 100) : 0) + "%";
      m.appendChild(fill); m.appendChild(el("i"));
      m.setAttribute("role", "img");
      m.setAttribute("aria-label", ex.length ? "Best score " + best + " of 40" : "No score yet");
      card.appendChild(m);
      var actions = el("div", "card-actions");
      var s = el("button", "btn primary", "Start exam"); s.type = "button";
      s.addEventListener("click", function () { begin(key, "exam"); });
      var p = el("button", "btn", "Practice"); p.type = "button";
      p.addEventListener("click", function () { begin(key, "practice"); });
      actions.appendChild(s); actions.appendChild(p);
      card.appendChild(actions);
      grid.appendChild(card);
    });
    // Random mixed exam
    var rnd = el("article", "exam-card special");
    var rt = el("div", "top"); rt.appendChild(el("span", "exam-no", "∞")); rt.appendChild(el("span", "chip", "400-question pool"));
    rnd.appendChild(rt);
    rnd.appendChild(el("h3", "", "Random mixed exam"));
    var rx = attemptsFor("random", "exam");
    rnd.appendChild(el("p", "status", rx.length ? "Taken " + rx.length + (rx.length === 1 ? " time" : " times") + ". Last " + rx[0].score + "/40." : "A new set of 40 questions every time, with the same syllabus weighting."));
    var ra = el("div", "card-actions");
    var rs = el("button", "btn primary", "Start exam"); rs.type = "button";
    rs.addEventListener("click", function () { begin("random", "exam"); });
    var rp = el("button", "btn", "Practice"); rp.type = "button";
    rp.addEventListener("click", function () { begin("random", "practice"); });
    ra.appendChild(rs); ra.appendChild(rp);
    rnd.appendChild(ra);
    grid.appendChild(rnd);
    // Topic drill
    var dr = el("article", "exam-card special");
    var dt = el("div", "top"); dt.appendChild(el("span", "exam-no", "20")); dt.appendChild(el("span", "chip", "Practice"));
    dr.appendChild(dt);
    dr.appendChild(el("h3", "", "Topic drill"));
    var field = el("label", "field");
    field.setAttribute("for", "drill-topic");
    field.appendChild(document.createTextNode("Up to 20 questions on one topic, with answers shown as you go"));
    var sel = el("select"); sel.id = "drill-topic";
    DRILLS.forEach(function (d) {
      var n = ALL_IDS.filter(function (id) { return topicOf(Q[id]) === d.k; }).length;
      var o = el("option", "", d.name + " (" + n + " in pool)"); o.value = d.k; sel.appendChild(o);
    });
    var lastDrill = LS.get("itil5.drill", "gp");
    sel.value = lastDrill;
    sel.addEventListener("change", function () { LS.set("itil5.drill", sel.value); });
    dr.appendChild(field); dr.appendChild(sel);
    var da = el("div", "card-actions");
    var ds = el("button", "btn primary", "Start drill"); ds.type = "button";
    ds.addEventListener("click", function () { begin("drill-" + sel.value, "practice"); });
    da.appendChild(ds);
    dr.appendChild(da);
    grid.appendChild(dr);
  }
  function renderStoreNote() {
    $("#store-note").textContent = !storeReady ? "Loading your history…"
      : store.kind === "account" ? "Your attempts are saved to your account, so they follow you to other devices."
      : "Your attempts are saved in this browser.";
  }
  function renderProgress() {
    renderStoreNote();
    var ex = history.filter(function (h) { return h.mode === "exam"; });
    var tiles = $("#tiles");
    tiles.textContent = "";
    var avg = ex.length ? Math.round(ex.reduce(function (s, a) { return s + a.pct; }, 0) / ex.length) : null;
    var passes = ex.filter(function (a) { return a.passed; }).length;
    var mocks = {};
    ex.forEach(function (a) { if (a.key.indexOf("exam-") === 0 && a.passed) mocks[a.key] = true; });
    [["Exams taken", ex.length ? String(ex.length) : "0"],
     ["Average score", avg == null ? "–" : avg + "%"],
     ["Pass rate", ex.length ? Math.round(passes / ex.length * 100) + "%" : "–"],
     ["Mock exams passed", Object.keys(mocks).length + " of " + BANK.length]].forEach(function (t) {
      var d = el("div", "tile"); d.appendChild(el("b", "", t[1])); d.appendChild(el("span", "", t[0])); tiles.appendChild(d);
    });
    var areas = {}, subs = {};
    ex.forEach(function (a) {
      Object.keys(a.areas || {}).forEach(function (k) { var v = areas[k] || (areas[k] = [0, 0]); v[0] += a.areas[k][0]; v[1] += a.areas[k][1]; });
      Object.keys(a.subs || {}).forEach(function (k) { var v = subs[k] || (subs[k] = [0, 0]); v[0] += a.subs[k][0]; v[1] += a.subs[k][1]; });
    });
    var bars = $("#area-bars");
    if (!ex.length) { bars.textContent = ""; bars.appendChild(el("p", "empty", "Take an exam in exam mode to see which syllabus areas need more work.")); }
    else areaRows(bars, areas, subs);
    var hb = $("#history");
    hb.textContent = "";
    if (!history.length) { hb.appendChild(el("p", "empty", storeReady ? "No attempts yet. Start with Mock exam 1." : "Loading…")); return; }
    var table = el("table"), thead = el("thead"), hr = el("tr");
    ["Date", "Exam", "Score", "Result", ""].forEach(function (h) { hr.appendChild(el("th", "", h)); });
    thead.appendChild(hr); table.appendChild(thead);
    var tb = el("tbody");
    history.slice(0, 12).forEach(function (a) {
      var tr = el("tr");
      tr.appendChild(el("td", "", fmtDate(a.finishedAt)));
      var name = el("td", "", a.title);
      if (a.mode === "practice") { name.appendChild(document.createTextNode(" ")); name.appendChild(el("span", "chip", "Practice")); }
      tr.appendChild(name);
      tr.appendChild(el("td", "num", a.score + "/" + a.total));
      var res = el("td"); res.appendChild(el("span", "chip " + (a.passed ? "pass" : "fail"), a.passed ? "Pass" : "Fail")); tr.appendChild(res);
      var act = el("td");
      var rv = el("button", "btn ghost", "Review"); rv.type = "button";
      rv.addEventListener("click", function () { showResult(a); });
      var pd = el("button", "btn ghost", "PDF"); pd.type = "button"; pd.dataset.label = "PDF";
      pd.addEventListener("click", function () { downloadPdf(a, pd); });
      act.appendChild(rv); act.appendChild(document.createTextNode(" ")); act.appendChild(pd);
      tr.appendChild(act);
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    hb.appendChild(table);
  }
  function renderBlueprint() {
    var ul = $("#blueprint");
    if (ul.children.length) return;
    AREAS.forEach(function (a) {
      var li = el("li");
      li.appendChild(el("span", "", a.name));
      li.appendChild(el("span", "mono", a.marks + (a.marks === 1 ? " question" : " questions")));
      ul.appendChild(li);
    });
    var tot = el("li");
    tot.appendChild(el("strong", "", "Total"));
    tot.appendChild(el("strong", "mono", "40 questions"));
    ul.appendChild(tot);
  }
  function renderHome() {
    renderSettings();
    renderResume();
    renderCards();
    renderProgress();
    renderBlueprint();
  }
  function begin(key, mode) {
    var d = LS.get("itil5.draft", null);
    if (d && d.qids) toast("Your unfinished " + d.title + " was replaced by this new session.");
    startSession(buildSession(key, mode));
  }
  function resumeDraft() {
    var d = LS.get("itil5.draft", null);
    if (!d || !d.qids) return;
    S = d;
    S.submitting = false;
    if (S.endsAt && S.endsAt <= Date.now()) { submit(true, false); return; }
    showView("exam");
    renderExamShell();
    renderQuestion();
    startTimer();
  }

  // ---------- Wiring ----------
  function wire() {
    $("#time-60").addEventListener("click", function () { settings.minutes = 60; saveSettings(); renderSettings(); });
    $("#time-75").addEventListener("click", function () { settings.minutes = 75; saveSettings(); renderSettings(); });
    $("#opt-shuffle").addEventListener("change", function (e) { settings.shuffle = e.target.checked; saveSettings(); });
    $("#resume-go").addEventListener("click", resumeDraft);
    $("#resume-drop").addEventListener("click", function () { LS.del("itil5.draft"); renderResume(); toast("Unfinished session discarded."); });
    $("#btn-prev").addEventListener("click", function () { goTo(S.current - 1); });
    $("#btn-next").addEventListener("click", function () { if (S.current === S.qids.length - 1) openSubmit(); else goTo(S.current + 1); });
    $("#btn-flag").addEventListener("click", toggleFlag);
    $("#btn-check").addEventListener("click", checkAnswer);
    $("#btn-finish").addEventListener("click", openSubmit);
    $("#btn-exit").addEventListener("click", exitSession);
    $("#sheet-toggle").addEventListener("click", function () { toggleSheet(); });
    $("#sm-cancel").addEventListener("click", closeSubmit);
    $("#sm-submit").addEventListener("click", function () { submit(false, $("#sm-pdf").checked); });
    $("#submit-modal").addEventListener("click", function (e) { if (e.target.id === "submit-modal") closeSubmit(); });
    $("#r-pdf").addEventListener("click", function () { if (R) downloadPdf(R, $("#r-pdf")); });
    $("#r-retake").addEventListener("click", function () { if (R) startSession(buildSession(R.key, R.key.indexOf("drill-") === 0 ? "practice" : R.mode)); });
    $("#r-home").addEventListener("click", function () { R = null; showView("home"); renderHome(); });
    $("#tab-wrong").addEventListener("click", function () { rFilter = "wrong"; renderResult(); });
    $("#tab-all").addEventListener("click", function () { rFilter = "all"; renderResult(); });
    document.addEventListener("keydown", function (e) {
      if (!$("#submit-modal").hidden) { if (e.key === "Escape") closeSubmit(); return; }
      if (view !== "exam" || !S || e.ctrlKey || e.metaKey || e.altKey) return;
      var tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      var k = e.key.toLowerCase();
      var idx = "abcd".indexOf(k);
      if (idx < 0 && "1234".indexOf(k) >= 0 && k.length === 1) idx = +k - 1;
      if (idx >= 0) {
        var id = S.qids[S.current];
        if (!(S.mode === "practice" && S.checked[id])) { choose(S.perm[id][idx]); e.preventDefault(); }
      } else if (e.key === "ArrowRight") { if (S.current < S.qids.length - 1) goTo(S.current + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { goTo(S.current - 1); e.preventDefault(); }
      else if (k === "f") { toggleFlag(); e.preventDefault(); }
      else if (e.key === "Enter" && S.mode === "practice" && e.target === document.body) { checkAnswer(); }
    });
    document.addEventListener("visibilitychange", function () { if (!document.hidden && S) tick(); });
  }

  function boot(data) {
    wire();
    try {
      if (window.claude && window.claude.hot && window.claude.hot.snapshot) {
        window.claude.hot.snapshot(function () { return { S: S, R: R, view: view }; });
      }
    } catch (e) { /* hot updates unavailable */ }
    renderHome();
    var d = data || {};
    if (d.S && d.S.qids && Q[d.S.qids[0]]) { LS.set("itil5.draft", d.S); resumeDraft(); }
    else if (d.view === "result" && d.R && d.R.qids) showResult(d.R);
    else showView("home");
    initStore();
  }
  if (window.claude && window.claude.hot && window.claude.hot.ready) window.claude.hot.ready(boot);
  else boot((window.claude && window.claude.hot && window.claude.hot.data) || {});
})();
