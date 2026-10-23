import json, glob, os, sys, collections

BLUEPRINT = {"TERMS": 12, "DIMS": 4, "PSLM": 4, "VSYS": 16, "VSTR": 2, "AI": 1, "FW": 1}
SUB = {"gp": 7, "gov": 2, "ci": 3, "prac": 2, "sys": 2}
here = os.path.dirname(os.path.abspath(__file__))
seen = {}
ok = True
for path in sorted(glob.glob(os.path.join(here, "bank", "t*.json"))):
    with open(path, encoding="utf-8") as f:
        try:
            t = json.load(f)
        except Exception as e:
            print(f"{os.path.basename(path)}: JSON ERROR {e}")
            ok = False
            continue
    items = t["items"]
    areas = collections.Counter(i["a"] for i in items)
    subs = collections.Counter(i.get("s") for i in items if i["a"] == "VSYS")
    letters = collections.Counter("ABCD"[i["c"]] for i in items)
    problems = []
    if len(items) != 40:
        problems.append(f"{len(items)} questions")
    if dict(areas) != BLUEPRINT:
        problems.append(f"areas {dict(areas)}")
    if dict(subs) != SUB:
        problems.append(f"vsys subs {dict(subs)}")
    for n, i in enumerate(items, 1):
        if len(i["o"]) != 4 or not (0 <= i["c"] <= 3):
            problems.append(f"q{n} options/answer invalid")
        if len(set(i["o"])) != 4:
            problems.append(f"q{n} duplicate options")
        for k in ("q", "x"):
            if not i.get(k):
                problems.append(f"q{n} missing {k}")
        key = i["q"].strip().lower()
        if key in seen:
            problems.append(f"q{n} duplicates {seen[key]}")
        seen[key] = f"t{t['id']}q{n}"
        bad = [ch for ch in i["q"] + "".join(i["o"]) + i["x"] if ord(ch) > 255 and ch not in "‘’“”–—…•€"]
        if bad:
            problems.append(f"q{n} non-latin chars {set(bad)}")
    print(f"test {t['id']:>2}: {len(items)} q | letters {dict(sorted(letters.items()))} | " + ("OK" if not problems else "; ".join(problems)))
    ok = ok and not problems
print("ALL OK" if ok else "ISSUES FOUND")
