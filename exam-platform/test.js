// Smoke test of the offline build in headless Chromium: takes mock exam 1 in exam mode, submits it and
// downloads the PDF, then checks practice mode, save and resume, a topic drill and the phone layout.
// Run `npm run build` first. Set CHROME to a Chrome or Chromium binary to use it instead of Playwright's own.
// Screenshots and the downloaded PDF are saved in test-output/.
const fs = require("fs");
const path = require("path");
const dir = __dirname;
const pageFile = path.join(dir, "ITIL5_Mock_Exams.html");
const out = path.join(dir, "test-output");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (e) {
  console.error("Playwright not found. Run `npm install` first.");
  process.exit(1);
}
if (!fs.existsSync(pageFile)) {
  console.error("ITIL5_Mock_Exams.html not found. Run `npm run build` first.");
  process.exit(1);
}
fs.mkdirSync(out, { recursive: true });

const bank = fs.readdirSync(path.join(dir, "bank")).filter((f) => /^t\d+\.json$/.test(f))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, "bank", f), "utf8")));
const aiQuestions = bank.reduce((n, t) => n + t.items.filter((q) => q.a === "AI").length, 0);

let failed = 0;
const check = (ok, what) => {
  console.log((ok ? "ok    " : "FAIL  ") + what);
  if (!ok) failed++;
};

(async () => {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  // Google Fonts requests fail when offline; the page then uses system fonts.
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g/.test(m.text())) errors.push("console: " + m.text()); });
  await page.goto("file://" + pageFile);
  await page.waitForTimeout(800);
  const cards = await page.locator("#exam-grid .exam-card:not(.special)").count();
  check(cards === bank.length, `home page lists ${cards} mock exams (the bank has ${bank.length})`);
  await page.screenshot({ path: path.join(out, "home.png") });

  // Exam mode on mock exam 1: answer 30 questions with "A", flag one, then submit
  await page.locator("#exam-grid .exam-card").first().getByRole("button", { name: "Start exam" }).click();
  await page.waitForTimeout(200);
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press("a");
    if (i === 3) await page.keyboard.press("f");
    await page.keyboard.press("ArrowRight");
  }
  const answered = await page.textContent("#eb-answered");
  check(answered === "30", `exam bar shows ${answered} questions answered`);
  await page.screenshot({ path: path.join(out, "exam.png") });
  await page.click("#btn-finish");
  const download = page.waitForEvent("download", { timeout: 15000 });
  await page.click("#sm-submit");
  const dl = await download;
  const pdfPath = path.join(out, dl.suggestedFilename());
  await dl.saveAs(pdfPath);
  const pdf = fs.readFileSync(pdfPath);
  const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  check(pdf.subarray(0, 5).toString() === "%PDF-" && pages > 0, `submitting downloads a ${pages}-page PDF of mistakes`);
  await page.waitForTimeout(300);
  const score = +(await page.textContent("#r-score"));
  const of = await page.textContent("#r-of");
  const stamp = await page.textContent("#r-stamp");
  const mistakes = +(/\((\d+)\)/.exec(await page.textContent("#tab-wrong")) || [])[1];
  check(of === "/40" && score + mistakes === 40, `result is ${score}${of} with ${mistakes} mistakes`);
  check(stamp === (score >= 26 ? "PASS" : "FAIL"), `result is marked ${stamp}`);
  await page.screenshot({ path: path.join(out, "result.png") });

  // Back home: the attempt should be in the history
  await page.click("#r-home");
  await page.waitForTimeout(200);
  const rows = await page.locator("#history tbody tr").count();
  check(rows === 1, `history lists ${rows} attempt(s)`);

  // Practice mode on mock exam 2: answer, check, see feedback, then leave and get offered a resume
  await page.locator("#exam-grid .exam-card").nth(1).getByRole("button", { name: "Practice" }).click();
  await page.keyboard.press("b");
  await page.click("#btn-check");
  check(await page.isVisible("#q-feedback"), "practice mode shows the answer and explanation");
  await page.click("#btn-exit");
  await page.waitForTimeout(200);
  check(await page.isVisible("#resume"), "leaving practice mode offers to resume");

  // Topic drill
  await page.selectOption("#drill-topic", "AI");
  await page.getByRole("button", { name: "Start drill" }).click();
  const drillTotal = +(await page.textContent("#q-total"));
  check(drillTotal === Math.min(20, aiQuestions), `ITIL and AI drill has ${drillTotal} questions`);

  // Phone layout: no sideways scrolling on the home page or during an exam
  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const mp = await m.newPage();
  mp.on("pageerror", (e) => errors.push("mobile pageerror: " + e.message));
  const overflow = () => mp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  await mp.goto("file://" + pageFile);
  await mp.waitForTimeout(500);
  const homeOverflow = await overflow();
  check(homeOverflow === 0, `phone: home page overflows by ${homeOverflow}px`);
  await mp.screenshot({ path: path.join(out, "mobile-home.png") });
  await mp.locator("#exam-grid .exam-card").first().getByRole("button", { name: "Start exam" }).click();
  await mp.waitForTimeout(200);
  const examOverflow = await overflow();
  check(examOverflow === 0, `phone: exam screen overflows by ${examOverflow}px`);
  await mp.screenshot({ path: path.join(out, "mobile-exam.png") });

  check(errors.length === 0, errors.length ? "page errors: " + errors.join("; ") : "no page errors");
  await browser.close();
  console.log(failed ? `${failed} check(s) failed` : "All checks passed");
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error("TEST FAILED", e);
  process.exit(1);
});
