# ITIL® & ISO/IEC 20000 Study Guide

### A structured 7-day (28-hour) self-study course in IT Service Management

**Covers:** ITIL 4 (core content), ITIL (Version 5) in depth (a full chapter on the 2026 version and its Foundation exam), ITIL v3/2011 (the legacy lifecycle and its process names), and ISO/IEC 20000-1:2018 (including Amendment 1:2024) clause by clause. It also covers the rest of the ISO/IEC 20000 family, audit and certification, and service measurement.

---

## About This Guide

**Who it is for.** Anyone who wants a solid, exam-ready understanding of IT service management (ITSM). That includes candidates preparing for ITIL Foundation (Version 5) or ITIL 4 Foundation, candidates for an ISO/IEC 20000 Foundation-level exam (offered by APMG, EXIN, PECB, TÜV and others), and people who need working knowledge for a role in service delivery, service desk, IT operations, IT audit or quality management.

**What it covers.**

| Area | Depth in this guide |
|---|---|
| ITIL key concepts, four dimensions, value system, guiding principles, governance, value chain, continual improvement | Full Foundation depth, plus extra explanation and examples (Chapters 2–5) |
| ITIL practices (all 34) | The most examined practices in depth; the rest at "purpose and key ideas" level (Chapters 6–8) |
| ITIL (Version 5) | **A full chapter (Chapter 10):** the exam blueprint, key terms, the four dimensions of product and service management, the ITIL value system, the product and service lifecycle, value streams, ITIL and AI, other frameworks, and exam strategy |
| ITIL v3/2011 | Lifecycle stages, 26 processes, 4 functions, key models, and a mapping to ITIL 4 (Chapter 9) |
| ISO/IEC 20000-1:2018 | Every clause (4–10) explained in plain language, with what auditors look for (Chapters 11–14) |
| ISO/IEC 20000 family, certification, audits, integration with ITIL and other standards | Working knowledge |
| Metrics, KPIs, availability calculations, reporting | Practical, with worked examples (Chapter 15) |

**Version notes (read this first).**

- **ITIL (Version 5)** was launched by PeopleCert in February 2026. It is a continuation of ITIL 4, not a replacement. It keeps the seven guiding principles, the four dimensions (now *of product and service management*), the value system and the 34 practices (now in two groups). It adds an eight-activity *product and service lifecycle*, a stronger focus on digital products, experience and sustainability, value stream management, and AI guidance. **Chapter 10 covers Version 5 in depth.** If you are taking the Version 5 exam, Chapters 1–8 are still essential because their concepts carry over; Chapter 10 then shows what is new and how the exam is weighted.
- **ITIL 4** was published in February 2019. Most existing training material, tools, job descriptions and published mappings to ISO/IEC 20000 still use its terminology, so Chapters 2–8 teach the shared core using ITIL 4 wording and flag Version 5 differences.
- **ISO/IEC 20000-1:2018** is the current edition of the requirements standard. Amendment 1 (2024) adds climate-change considerations to clauses 4.1 and 4.2. The 2011 edition is covered only where the differences help your understanding.
- **Sources for Version 5.** At the time of writing, much published detail on Version 5 comes from accredited training providers rather than from the official publication. Where sources differ, Chapter 10 says so. Always check wording against the official PeopleCert syllabus and the ITIL (Version 5) publications.

**Copyright and trademarks.** ITIL® is a registered trademark of the PeopleCert group. ISO/IEC 20000 is published jointly by ISO and IEC. This guide explains and paraphrases these sources; it does not reproduce them. Short definitions are quoted only where exams expect you to recognise the exact wording. For authoritative text, use the official ITIL publications and buy the standard from ISO or your national standards body.

---

## How to Use This Guide

1. **Follow the 7-day plan below.** Each day is four hours. Each hour is roughly 50 minutes of study and a 10-minute break.
2. **Each chapter has the same structure:**
   - *Learning objectives*: what you should be able to do afterwards
   - *Content*: explanations, tables, examples and exam tips
   - *Key takeaways*: a one-page summary of the chapter
   - *Check your knowledge*: multiple-choice questions plus short-answer questions. **The answers are in Appendix A.** Answer every question on paper *before* you look, then mark yourself honestly.
3. **Chapter 16 (the final chapter)** has understanding questions with full answers (including a section on Version 5), scenario questions with model answers, and a mixed mock exam with explanations.
4. **Practice exams.** The companion platform *ITIL V5 Mock Exams* is in the `exam-platform` folder of this guide's repository (github.com/sokratis95/itil-iso-20000-study-guide). Open `ITIL5_Mock_Exams.html` in any browser; it also works offline. It has 10 timed mock exams of 40 questions weighted like the Version 5 exam, and after each exam it produces a PDF of your mistakes with the correct answers and explanations.
5. **Appendix B (Glossary)** is your flashcard source. **Appendix C (Quick Reference)** is for your final revision on Day 7 and the morning of any exam.

**Conventions used in this guide**

> **Exam tip:** what examiners like to test and the traps they set.

> **In practice:** how the idea looks in a real organization.

> **Remember:** a short memory aid.

In ISO/IEC 20000 chapters, note the wording used by standards: **"shall"** is a requirement, **"should"** is a recommendation, **"may"** is a permission and **"can"** is a possibility or capability. Only "shall" statements are audited.

**Study techniques that work**

- **Active recall:** close the book and write down everything you remember about a topic, then check. This beats re-reading.
- **Spaced repetition:** revisit each chapter's key takeaways one day, three days and six days after studying it. The plan builds this in.
- **The Feynman technique:** explain a concept aloud as if teaching a new colleague. Where you stumble, you have a gap.
- **A "weak areas" list:** every question you get wrong goes on this list. Re-test it on Day 7.

---

## The 7-Day Study Plan (4 hours per day, 28 hours total)

Days 1–5 are the same for everyone. For Days 6–7, choose a track.

| Day | Hour 1 | Hour 2 | Hour 3 | Hour 4 |
|---|---|---|---|---|
| **Day 1** *ITSM foundations* | Front matter + Chapter 1 | Chapter 2 (sections 2.1–2.4) | Chapter 2 (sections 2.5–2.7) + Chapter 2 questions | Chapter 3 + Chapter 1 and 3 questions |
| **Day 2** *The value system* | 15-min review of Day 1 takeaways, then Chapter 4 (4.1–4.3) | Chapter 4 (guiding principles) | Chapter 4 questions + Chapter 5 (value chain) | Chapter 5 (continual improvement) + Chapter 5 questions |
| **Day 3** *ITIL practices I* | 15-min review of Days 1–2, then Chapter 6 (6.1–6.5) | Chapter 6 (6.6–end) + Chapter 6 questions | Chapter 7 (service desk, incident, problem) | Chapter 7 (requests, monitoring, assets, configuration) |
| **Day 4** *ITIL practices II* | Chapter 7 questions + Chapter 8 (change, release, deployment) | Chapter 8 (SLM, availability, capacity, continuity, catalogue) | Chapter 8 (design, testing, technical practices) + Chapter 8 questions | Chapter 9 + Chapter 9 questions |
| **Day 5** *ITIL (Version 5)* | Chapter 10 (10.1–10.4) | Chapter 10 (10.5–10.6) | Chapter 10 (10.7–10.10) + Chapter 10 questions | Mock exam 1 on the practice platform (60 minutes, timed), then study the PDF of your mistakes |

**Days 6–7, Track A: ITIL Foundation (Version 5) exam** (recommended if this is your exam)

| Day | Hour 1 | Hour 2 | Hour 3 | Hour 4 |
|---|---|---|---|---|
| **Day 6** *Exam practice* | Mock exam 2 (timed) + review the PDF | Re-read the chapters behind your mistakes | Mock exam 3 (timed) + review the PDF | Topic drills on your two weakest areas |
| **Day 7** *Final revision* | Chapter 16, Parts A1 and A3 (ITIL and Version 5 understanding questions) | Mock exam 4 (timed) + review | Chapter 10 key takeaways + Appendix C, sections C.1 and C.2 | Your "weak areas" list, one more topic drill, then rest |

**Days 6–7, Track B: ITIL and ISO/IEC 20000**

| Day | Hour 1 | Hour 2 | Hour 3 | Hour 4 |
|---|---|---|---|---|
| **Day 6** *ISO/IEC 20000* | Chapter 11 + Chapter 11 questions | Chapter 12 + Chapter 12 questions | Chapter 13 (8.1–8.5) | Chapter 13 (8.6–8.7) + Chapter 13 questions |
| **Day 7** *Integration and exam practice* | Chapter 14 + Chapter 14 questions | Chapter 15 + Chapter 15 questions | Chapter 16, Sections A and B | Chapter 16, Section C: mock exam (timed), then Appendix C |

> **Remember:** the questions are part of your study time. They are not an optional extra. Research on learning consistently shows that testing yourself is one of the most effective ways to make knowledge stick.

---

## Table of Contents

**Part I: Foundations of IT Service Management**

- [Chapter 1: Introduction to IT Service Management](#chapter-1-introduction-to-it-service-management)
- [Chapter 2: Key Concepts of Service Management](#chapter-2-key-concepts-of-service-management)
- [Chapter 3: The Four Dimensions of Service Management](#chapter-3-the-four-dimensions-of-service-management)

**Part II: The ITIL Service Value System**

- [Chapter 4: The Service Value System, Guiding Principles and Governance](#chapter-4-the-service-value-system-guiding-principles-and-governance)
- [Chapter 5: The Service Value Chain and Continual Improvement](#chapter-5-the-service-value-chain-and-continual-improvement)

**Part III: ITIL Practices**

- [Chapter 6: General Management Practices](#chapter-6-general-management-practices)
- [Chapter 7: Service Management Practices I: Support and Operations](#chapter-7-service-management-practices-i-support-and-operations)
- [Chapter 8: Design, Transition, Assurance and Technical Practices](#chapter-8-design-transition-assurance-and-technical-practices)
- [Chapter 9: ITIL Across Versions](#chapter-9-itil-across-versions)

**Part IV: ITIL (Version 5)**

- [Chapter 10: ITIL (Version 5) in Depth](#chapter-10-itil-version-5-in-depth)

**Part V: ISO/IEC 20000**

- [Chapter 11: Introduction to ISO/IEC 20000](#chapter-11-introduction-to-isoiec-20000)
- [Chapter 12: Clauses 4 to 7: Context, Leadership, Planning and Support](#chapter-12-clauses-4-to-7-context-leadership-planning-and-support)
- [Chapter 13: Clause 8: Operation of the Service Management System](#chapter-13-clause-8-operation-of-the-service-management-system)
- [Chapter 14: Clauses 9 and 10, Audit and Certification](#chapter-14-clauses-9-and-10-audit-and-certification)

**Part VI: Bringing It Together**

- [Chapter 15: Measurement, Reporting and Integrating ITIL with ISO/IEC 20000](#chapter-15-measurement-reporting-and-integrating-itil-with-isoiec-20000)
- [Chapter 16: Understanding Questions with Answers](#chapter-16-understanding-questions-with-answers)

**Appendices**

- [Appendix A: Answer Key to the End-of-Chapter Questions](#appendix-a-answer-key-to-the-end-of-chapter-questions)
- [Appendix B: Glossary](#appendix-b-glossary)
- [Appendix C: Quick Reference Sheets](#appendix-c-quick-reference-sheets)

---

