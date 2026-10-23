# ITIL & ISO/IEC 20000 Study Guide

A structured 7-day (28-hour) self-study course in IT Service Management, with a companion mock exam platform for **ITIL Foundation (Version 5)**.

## What's in this repository

| Path | What it is |
|---|---|
| [`guide/ITIL_ISO20000_Study_Guide.pdf`](guide/ITIL_ISO20000_Study_Guide.pdf) | The study guide, ready to read or print (288 pages) |
| [`guide/ITIL_ISO20000_Study_Guide.docx`](guide/ITIL_ISO20000_Study_Guide.docx) | The same guide as a Word document, for notes and highlighting |
| [`guide/ITIL_ISO20000_Study_Guide.md`](guide/ITIL_ISO20000_Study_Guide.md) | The whole guide as one Markdown file, assembled from `guide/src/` |
| [`guide/src/`](guide/src) | The source of the guide: one Markdown file per chapter and appendix |
| [`guide/build/`](guide/build) | The build script, which assembles the Markdown file and builds the Word and PDF versions, and the PDF stylesheet |
| [`exam-platform/ITIL5_Mock_Exams.html`](exam-platform/ITIL5_Mock_Exams.html) | The mock exam platform. Download it and open it in any browser; it also works offline |
| [`exam-platform/`](exam-platform) | Source code and question bank for the platform, with its build, validation and test scripts |

## The study guide

- **16 chapters and 3 appendices.** ITIL key concepts, the four dimensions, the value system, guiding principles and practices (Chapters 1–8). ITIL v3/2011 and how the versions relate (Chapter 9). **ITIL (Version 5) in depth** (Chapter 10). ISO/IEC 20000-1:2018 clause by clause, with audit and certification (Chapters 11–14). Measurement, reporting and how ITIL and ISO/IEC 20000 fit together (Chapter 15).
- **Every chapter** has learning objectives, key takeaways and end-of-chapter questions. The answers are in Appendix A.
- **The final chapter** (Chapter 16) has understanding questions with full answers, scenario questions with model answers, and a 40-question mock exam.
- **A 7-day plan** of four hours a day, with two tracks for the last two days: one for the ITIL Foundation (Version 5) exam and one covering ITIL and ISO/IEC 20000.

To change the guide, edit the chapter files in [`guide/src/`](guide/src) and run:

```bash
guide/build/build.sh
```

The script joins the chapter files in name order into `guide/ITIL_ISO20000_Study_Guide.md`, then builds the Word and PDF versions from it. It needs [pandoc](https://pandoc.org) and a Chromium-based browser. If the browser isn't on your PATH as `chromium`, set `CHROME` to its path.

## The exam platform

- **10 mock exams of 40 questions** (400 questions in total), weighted like the ITIL Foundation (Version 5) syllabus.
- **Exam mode:** timed (60 minutes, or 75 minutes for candidates sitting the exam in a second language), with question flagging, an answer sheet, and save-and-resume.
- **Practice mode:** untimed, with the answer and explanation after each question. There are also a random mixed exam and topic drills.
- **After each exam:** your score, a pass or fail against 26/40, your score in each syllabus area, a review of every question, and a **PDF of your mistakes** with the correct answers and explanations.
- Your attempt history is kept in your browser.

See [`exam-platform/README.md`](exam-platform/README.md) for details, the question bank format, and how to rebuild the platform.

## Accuracy

The ITIL (Version 5) material was written in 2026 from public descriptions of the new version and its syllabus, much of it from accredited training providers. Where sources disagree, the guide says so. The practice questions are unofficial. Check the official PeopleCert syllabus and ITIL publications before your exam.

## Trademarks

ITIL® is a registered trademark of the PeopleCert group. ISO/IEC 20000 is published by ISO and IEC. This project is not affiliated with PeopleCert, AXELOS, ISO or IEC. The guide explains and paraphrases these sources and does not reproduce the standards or official publications.
