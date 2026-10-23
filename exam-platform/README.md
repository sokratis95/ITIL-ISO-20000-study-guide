# ITIL V5 Mock Exams

An unofficial practice platform for the **ITIL Foundation (Version 5)** exam.

## Use it

Download [`ITIL5_Mock_Exams.html`](ITIL5_Mock_Exams.html) and open it in a browser. The questions, the app and the PDF generator are all inside that one file, so it works offline. Fonts load from Google Fonts when you are online and fall back to system fonts when you are not.

- **Exam mode:** 40 questions in 60 minutes (or 75 minutes with the +25% option), no feedback until you submit, question flagging, an answer-sheet grid, and save and resume.
- **Practice mode:** untimed. Check each answer and read its explanation as you go.
- **Random mixed exam:** a new set of 40 questions from all 400, with the same weighting.
- **Topic drills:** up to 20 questions on one syllabus topic.
- **Results:** your score, pass or fail (26/40), your score in each syllabus area, and a review of every question.
- **PDF of mistakes:** every question you got wrong or left blank, with your answer, the correct answer and an explanation.
- **History:** attempts are saved in your browser's local storage.

Keyboard shortcuts during an exam: **A–D** to answer, **←/→** to move between questions, **F** to flag.

## How each exam is built

Every mock exam follows the marks per syllabus area reported for the PeopleCert ITIL Foundation (Version 5) syllabus:

| Syllabus area | Questions |
|---|---|
| Key ITIL terms and definitions | 12 |
| Four dimensions of product and service management | 4 |
| Product and service lifecycle | 4 |
| ITIL value system (7 guiding principles, 2 governance, 3 continual improvement, 2 management practices, 2 value system components) | 16 |
| Value stream identification, mapping and management | 2 |
| ITIL and AI | 1 |
| ITIL and other frameworks | 1 |
| **Total** | **40** |

## Question bank format

Each file in [`bank/`](bank) holds one exam:

```json
{"id": 1, "items": [
  {"a": "TERMS", "q": "Question text", "o": ["Option A", "Option B", "Option C", "Option D"], "c": 0, "x": "Explanation"}
]}
```

| Field | Meaning |
|---|---|
| `a` | Syllabus area: `TERMS`, `DIMS`, `PSLM`, `VSYS`, `VSTR`, `AI` or `FW` |
| `s` | For `VSYS` questions only, the sub-area: `gp` (guiding principles), `gov` (governance), `ci` (continual improvement), `prac` (management practices) or `sys` (value system components) |
| `q` | Question text. Use `\n` for line breaks in "which two" list questions |
| `o` | Exactly four options |
| `c` | Index (0–3) of the correct option |
| `x` | Explanation shown in practice mode, in the review and in the PDF |

## Edit and rebuild

Requires Node.js and Python 3.

```bash
npm install        # fetches jsPDF 2.5.1
npm run validate   # checks every exam: 40 questions, the weighting, four unique options, no repeated questions
npm run build      # writes ITIL5_Mock_Exams.html and dist/itil5-mock-exams.artifact.html
```

The `dist/` file is a version of the page for publishing as a claude.ai Artifact. It loads jsPDF from cdnjs and, when published with the `downloads`, `db` and `user` capabilities, saves the PDF through the viewer and keeps attempt history in the signed-in user's private storage.

## Third-party code

[jsPDF](https://github.com/parallax/jsPDF) 2.5.1 (MIT licence) is included in the offline build together with its licence header.
