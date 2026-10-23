// Builds the exam platform from src/ and bank/:
//   ITIL5_Mock_Exams.html            offline page, jsPDF inlined (open in any browser)
//   dist/itil5-mock-exams.artifact.html  claude.ai Artifact page, jsPDF loaded from cdnjs
const fs = require("fs");
const path = require("path");
const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");

const head = read("src/app_head.html");
const body = read("src/app_body.html");
const app = read("src/app.js");
const bankFiles = fs.readdirSync(path.join(dir, "bank")).filter((f) => /^t\d+\.json$/.test(f)).sort();
const bank = bankFiles.map((f) => JSON.parse(read(path.join("bank", f))));
const bankJs = "window.ITIL5_BANK=" + JSON.stringify(bank).replace(/</g, "\\u003c") + ";";
const jspdfPath = path.join(dir, "node_modules", "jspdf", "dist", "jspdf.umd.min.js");
if (!fs.existsSync(jspdfPath)) {
  console.error("jsPDF not found. Run `npm install` first.");
  process.exit(1);
}
const jspdf = fs.readFileSync(jspdfPath, "utf8").replace(/<\/script/gi, "<\\/script");
const CDN = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>';

const artifact = [head, body, CDN, "<script>" + bankJs + "</script>", "<script>" + app + "</script>"].join("\n");
fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
fs.writeFileSync(path.join(dir, "dist", "itil5-mock-exams.artifact.html"), artifact);

const standalone = [
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
  head,
  "</head><body>",
  body,
  "<script>" + jspdf + "</script>",
  "<script>" + bankJs + "</script>",
  "<script>" + app + "</script>",
  "</body></html>"
].join("\n");
fs.writeFileSync(path.join(dir, "ITIL5_Mock_Exams.html"), standalone);
console.log("questions:", bank.reduce((n, t) => n + t.items.length, 0));
console.log("artifact bytes:", Buffer.byteLength(artifact), "standalone bytes:", Buffer.byteLength(standalone));
