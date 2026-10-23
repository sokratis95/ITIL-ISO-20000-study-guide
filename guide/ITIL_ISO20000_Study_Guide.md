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


# Part I: Foundations of IT Service Management

---

# Chapter 1: Introduction to IT Service Management

**Suggested study time:** 1 hour (Day 1)

**Learning objectives.** After this chapter you should be able to:

- explain what IT service management (ITSM) is and why organizations invest in it
- outline the history of ITIL and ISO/IEC 20000 and how the two relate
- distinguish a *framework*, a *standard* and a *method*, and explain the difference between *guidance* and *requirements*
- recognise the other frameworks and standards that ITSM professionals meet in practice

---

## 1.1 What Is IT Service Management?

Early IT departments were organized around **technology**: a server team, a network team, a database team, a desktop team. Each team managed its own components well, but nobody was clearly responsible for what the business actually experienced. When the payroll run failed, the network team showed that the network was up and the server team showed that the servers were up. The payroll service was still down.

IT service management changes the point of view from *components* to **services**, meaning what the customer actually uses and values. A customer does not want "a mail server, a firewall and 50 GB of storage". They want **to send and receive email reliably, securely and from anywhere**. The components only matter because together they make that outcome possible.

**Definitions you need to know**

- **Service management (ITIL 4):** "a set of specialized organizational capabilities for enabling value for customers in the form of services."
- **Service management (ISO/IEC 20000, paraphrased):** the capabilities and processes used to direct and control an organization's activities and resources so that it can plan, design, transition, deliver and improve services that deliver value.

Two words in the ITIL definition matter:

- **Specialized:** the capabilities are specific to managing services. Examples are restoring service quickly, controlling change risk and agreeing service levels.
- **Organizational:** the capabilities belong to the organization as a whole. They are built from people, processes, information, technology and partners, not from any single team or tool.

### Why organizations invest in ITSM

Almost every organization is now a digital organization. Banks, hospitals, retailers and governments deliver much of their value through technology-enabled services. Good service management brings:

| Benefit | What it looks like in practice |
|---|---|
| Alignment with business needs | IT work is prioritised by business impact, not by which team shouts loudest |
| Predictable, agreed quality | Service levels are defined, measured and reported |
| Faster restoration of service | Incidents are logged, prioritised and resolved through a known path |
| Fewer repeat failures | Problems are analysed and root causes removed |
| Safer change | Changes are assessed for risk and scheduled to avoid conflicts |
| Cost transparency and control | Costs of services are known, so investment decisions are informed |
| Compliance and assurance | Evidence exists to satisfy auditors, regulators and customers |
| Continual improvement | The organization measures itself and gets better over time |
| Better customer and user experience | People get a single point of contact, clear communication and consistent treatment |

> **In practice:** a bank's mobile app is a *service*. It depends on dozens of components: the app itself, APIs, a core banking platform, identity services, networks, cloud hosting and third-party payment providers. Customers judge the bank on whether they can check their balance and make payments, quickly and safely, at 23:00 on a Sunday. ITSM is how the bank makes sure that happens.

---

## 1.2 A Short History of ITIL

ITIL originally stood for **Information Technology Infrastructure Library**. Today it is simply called ITIL.

| Period | Milestone | Key idea introduced |
|---|---|---|
| Late 1980s – mid 1990s | **ITIL v1**: the UK government's Central Computer and Telecommunications Agency (CCTA) produced 30+ books describing how well-run organizations managed IT | Documenting proven practice so that public-sector IT could be managed and bought more consistently |
| 2000–2002 | **ITIL v2**: consolidated mainly into *Service Support* and *Service Delivery*. CCTA became part of the Office of Government Commerce (OGC) | **Processes**: incident, problem, change, configuration, release, service level, availability, capacity, continuity and financial management |
| 2007 | **ITIL v3**: five core books | The **service lifecycle**: Strategy, Design, Transition, Operation, Continual Service Improvement |
| 2011 | **ITIL 2011 edition**: an update of v3 that clarified content and rewrote Service Strategy | Same lifecycle, with 26 processes and 4 functions |
| 2013 | **AXELOS**, a joint venture of the UK Cabinet Office and Capita, took ownership of ITIL | |
| February 2019 | **ITIL 4 Foundation** published, with further ITIL 4 modules and practice guides from 2020 | The **Service Value System**, value **co-creation**, four dimensions, guiding principles, 34 **practices**, and alignment with Agile, Lean and DevOps |
| 2021 | **PeopleCert** acquired AXELOS, and with it ITIL | |
| Early 2026 | **ITIL (Version 5)** | **Product and service** management, an eight-activity lifecycle model, and AI guidance (see Chapters 9 and 10) |

> **Exam tip:** be clear about the main idea of each version: **v2 = processes**, **v3/2011 = lifecycle**, **ITIL 4 = value system and value co-creation through practices**.

---

## 1.3 A Short History of ISO/IEC 20000

| Year | Milestone |
|---|---|
| 1995 | The British Standards Institution (BSI) publishes PD 0005, a code of practice for IT service management |
| 2000 | **BS 15000** published. It is the first formal standard for ITSM, heavily influenced by ITIL. Part 2, a code of practice, followed in 2003 |
| December 2005 | BS 15000 is fast-tracked into the international standards **ISO/IEC 20000-1:2005** (specification) and **ISO/IEC 20000-2:2005** (code of practice) |
| 2011 | **ISO/IEC 20000-1:2011**: a major revision structured around Plan-Do-Check-Act (PDCA), with stronger requirements for governing processes operated by other parties |
| September 2018 | **ISO/IEC 20000-1:2018**: the current edition. It adopts the common high-level structure (Annex SL) used by all ISO management system standards, refers to "the organization" instead of "the service provider", reduces mandatory documentation and adds new requirements such as knowledge, planning the services, demand management and asset management |
| 2024 | **Amendment 1:2024** to ISO/IEC 20000-1:2018: adds a requirement to consider whether **climate change** is a relevant issue (clause 4.1) and notes that interested parties can have climate-related requirements (clause 4.2) |

ISO/IEC 20000 is maintained by the joint ISO and IEC technical committee **ISO/IEC JTC 1/SC 40** (IT service management and IT governance).

> **Remember:** **BS 15000 became ISO/IEC 20000**, just as **BS 7799 became ISO/IEC 27001** (information security) and **BS 25999 became ISO 22301** (business continuity). Exam questions sometimes use these to trap you.

---

## 1.4 Frameworks, Standards and Methods

These three words are often used loosely, but they mean different things.

| Term | Meaning | Examples | Can an organization be *certified* against it? |
|---|---|---|---|
| **Framework** | A structured body of guidance that you *adopt and adapt* to your situation. It describes what good looks like and offers options | ITIL, COBIT, VeriSM | No. Individuals can take ITIL exams, but an organization cannot be "ITIL certified" |
| **Standard (requirements)** | A formally agreed document, published by a recognised body, that sets out **requirements** ("shall") that can be audited objectively | ISO/IEC 20000-1, ISO/IEC 27001, ISO 9001 | Yes, by an accredited certification body |
| **Standard (guidance)** | A formally agreed document that gives **recommendations** ("should") | ISO/IEC 20000-2, ISO/IEC 27002, ISO 31000 | No |
| **Method / methodology** | A more prescriptive, step-by-step way of working with defined roles, products and stages | PRINCE2 (projects), Scrum (product development) | No for the organization; individuals can be certified |

**"Best practice" and "good practice".** ITIL describes practices that have been proven to work across many organizations. Calling them "best practice" does not mean they are the only right answer. It means they are a reliable starting point that you must **adapt** to your context.

---

## 1.5 How ITIL and ISO/IEC 20000 Relate

The simplest way to understand the relationship:

- **ISO/IEC 20000-1 says *what* must be achieved.** It is a set of requirements for a **service management system (SMS)**. An independent auditor can check whether those requirements are met.
- **ITIL describes *how* it can be achieved.** It gives detailed, flexible guidance on practices, principles and ways of working.

> **Remember:** ISO/IEC 20000-1 is like a **building code** that an inspector checks. ITIL is like an **architect's handbook** full of proven designs. You can meet the building code without the handbook, and following the handbook does not by itself prove you meet the code.

Key consequences:

1. **ISO/IEC 20000-1 does not require ITIL.** An organization can conform using ITIL, FitSM, its own processes or a mix.
2. **Using ITIL does not make an organization conformant.** ISO/IEC 20000-1 has specific requirements, for example management review, internal audit, a service management plan and documented policies. These must be demonstrably met.
3. **ITIL makes conformance much easier.** Most ISO/IEC 20000-1 operational requirements in clause 8 correspond closely to ITIL practices. ISO/IEC TR 20000-11 publishes guidance on the relationship between the standard and ITIL.
4. **Certification differs.** ITIL certifies **people** through exams. ISO/IEC 20000-1 certifies an **organization's SMS** for a defined scope.

A full comparison and a clause-to-practice mapping are in Chapter 15.

---

## 1.6 Related Frameworks and Standards

ITSM professionals regularly meet the following. You do not need detail, but you should recognise each one and its purpose.

| Name | Owner | Purpose in one line |
|---|---|---|
| **COBIT 2019** | ISACA | Framework for the **governance and management of enterprise information and technology** |
| **ISO/IEC 27001** | ISO/IEC | Requirements for an **information security management system** (ISMS) |
| **ISO 9001** | ISO | Requirements for a **quality management system** (QMS) |
| **ISO 22301** | ISO | Requirements for a **business continuity management system** |
| **ISO/IEC 38500** | ISO/IEC | Principles for the **governance of IT** by governing bodies: the evaluate, direct and monitor model |
| **ISO 31000** | ISO | Guidelines for **risk management** |
| **ISO 19011** | ISO | Guidelines for **auditing** management systems |
| **Lean** | (Toyota-derived) | Maximising value and eliminating waste in flow |
| **Agile / Scrum** | (Agile Manifesto community) | Iterative, incremental delivery with frequent feedback |
| **DevOps** | (community) | Culture and practices that unite development and operations for fast, reliable delivery |
| **Site Reliability Engineering (SRE)** | (originated at Google) | Running services with software-engineering methods, service level objectives and error budgets |
| **SIAM** (Service Integration and Management) | (community; Scopism and others) | Managing multiple service providers as one integrated ecosystem |
| **VeriSM** | IFDC | Service management approach for the digital age that combines management practices |
| **FitSM** | (EU-funded, open) | Lightweight, free ITSM standard family aligned with ISO/IEC 20000 |
| **IT4IT** | The Open Group | Reference architecture for managing the business of IT |
| **CMMI for Services** | CMMI Institute (ISACA) | Capability and maturity model for service organizations |
| **PRINCE2 / PMBOK Guide** | PeopleCert / PMI | Project management method and body of knowledge |

> **Exam tip:** ITIL 4 explicitly says it can be combined with Agile, Lean, DevOps and others. Expect statements such as "ITIL 4 is compatible with DevOps" to be **true**.

---

## 1.7 Qualifications and Certification at a Glance

**ITIL qualifications (for individuals)**

- **ITIL 4 Foundation:** 40 multiple-choice questions, 60 minutes, closed book, pass mark 65% (26/40). Candidates taking the exam in a second language usually receive extra time.
- **ITIL 4 higher levels:** *Managing Professional* (Create, Deliver and Support; Drive Stakeholder Value; High-velocity IT; Direct, Plan and Improve), *Strategic Leader* (Direct, Plan and Improve; Digital and IT Strategy), *Practice Manager* (practice-specific modules) and *ITIL Master*.
- **ITIL Foundation (Version 5):** launched in early 2026. It is reported to keep the same format (40 questions, 60 minutes, 65% pass mark). Higher-level Version 5 modules are being released progressively. Always confirm on the official PeopleCert site.

**ISO/IEC 20000 certification**

- **Organizations:** certified against ISO/IEC 20000-1 by an **accredited certification body** after a two-stage audit. The certificate is valid for **three years** with periodic surveillance audits (see Chapter 14).
- **Individuals:** training organizations and exam institutes offer qualifications such as *ISO/IEC 20000 Foundation*, *Lead Implementer* and *Lead Auditor*. These are personal qualifications. ISO itself does not certify people or organizations.

---

## Key Takeaways: Chapter 1

- ITSM shifts the focus **from technology components to services and the value they enable**.
- **ITIL** is a flexible framework of guidance. It is now owned by **PeopleCert**, and its versions are v1 → v2 (processes) → v3/2011 (lifecycle) → ITIL 4 (value system) → Version 5 (product and service lifecycle, AI).
- **ISO/IEC 20000-1:2018** is the international **requirements** standard for a **service management system**. It evolved from **BS 15000** and uses the **Annex SL** high-level structure.
- **"Shall" = requirement**, "should" = recommendation, "may" = permission, "can" = possibility.
- **ISO says *what*; ITIL describes *how*.** ITIL helps you conform to ISO/IEC 20000, but it neither replaces nor guarantees conformity.
- **People** obtain ITIL qualifications; **organizations** obtain ISO/IEC 20000-1 certification.

---

## Check Your Knowledge: Chapter 1

*Answer on paper first. The answers are in Appendix A.*

**Multiple choice**

**1.1** Which statement best describes the difference between ITIL and ISO/IEC 20000-1?

- A) ITIL is an international standard, while ISO/IEC 20000-1 is a framework of good practice
- B) ITIL provides adaptable guidance, while ISO/IEC 20000-1 specifies auditable requirements for a service management system
- C) Both are used to certify organizations
- D) Both are owned and published by PeopleCert

**1.2** Who or what can be certified against ISO/IEC 20000-1?

- A) Individual IT professionals
- B) An organization's service management system, for a defined scope
- C) ITSM software tools
- D) Only training providers

**1.3** In an ISO standard, which word indicates a mandatory requirement?

- A) Should
- B) May
- C) Shall
- D) Can

**1.4** ISO/IEC 20000 originated from which national standard?

- A) BS 7799
- B) BS 15000
- C) BS 25999
- D) BS 5750

**1.5** Which ITIL version introduced the Service Value System and the concept of value co-creation?

- A) ITIL v2
- B) ITIL v3
- C) ITIL 2011
- D) ITIL 4

**1.6** Which ITIL version organized its guidance around a five-stage service lifecycle?

- A) ITIL v1
- B) ITIL v2
- C) ITIL v3/2011
- D) ITIL 4

**1.7** Which of the following is a framework for the governance and management of enterprise IT, published by ISACA?

- A) COBIT
- B) VeriSM
- C) SIAM
- D) FitSM

**1.8** Which standard specifies requirements for an information security management system?

- A) ISO 9001
- B) ISO/IEC 27001
- C) ISO 22301
- D) ISO/IEC 38500

**1.9** What is the main reason ITSM shifts the focus from technology to services?

- A) Technology is no longer important to organizations
- B) Customers care about the outcomes they can achieve, not the individual components
- C) Services are always cheaper than technology
- D) International standards forbid a focus on technology

**1.10** Which statement about ISO/IEC 20000-1:2018 is correct?

- A) It requires the organization to adopt ITIL
- B) It uses the same high-level structure as other ISO management system standards
- C) It contains recommendations only, with no requirements
- D) It applies only to external, commercial service providers

**1.11** Who currently owns ITIL?

- A) The UK Cabinet Office
- B) The Office of Government Commerce
- C) PeopleCert
- D) ISO

**1.12** Which of the following is best described as a *method* rather than a framework or a requirements standard?

- A) PRINCE2
- B) ISO/IEC 20000-1
- C) COBIT
- D) ITIL

**Short answer**

**1.13** In your own words, define IT service management and give two benefits it brings to an organization.

**1.14** Explain why an organization that "follows ITIL" is not automatically conformant with ISO/IEC 20000-1.

**1.15** Name two other management system standards that share the Annex SL structure with ISO/IEC 20000-1, and explain why the shared structure is useful.

**1.16** List the main ITIL versions and the key idea each one introduced.

---


# Chapter 2: Key Concepts of Service Management

**Suggested study time:** 1.5–2 hours (Day 1)

**Learning objectives.** After this chapter you should be able to:

- define value, value co-creation, organization, service provider and service consumer
- distinguish the customer, user and sponsor roles
- define product, service and service offering, and name the three components of a service offering
- explain service relationships and the service relationship model
- define outcome, output, cost and risk, and explain how services remove or impose costs and risks
- define utility and warranty and explain why both are needed

> **Exam tip:** this chapter is the **most heavily examined definitions area** of ITIL Foundation. Learn the bold definitions word for word. Examiners often offer four options that differ by only one word.

---

## 2.1 Value and Value Co-creation

**Value:** "the perceived benefits, usefulness, and importance of something."

Three ideas are built into this definition:

1. **Value is perceived.** It is subjective. The same service can be very valuable to one consumer and worthless to another.
2. **Value is not only financial.** Benefits can be convenience, safety, reputation, time saved, compliance or peace of mind.
3. **Value is co-created.** Value is created through active collaboration between providers, consumers and other organizations in the service ecosystem.

**From "delivering value" to "co-creating value"**

Older thinking saw value flowing one way: the provider *delivers* value to a passive consumer. ITIL 4 rejects this. A consumer only gets value if it **actively takes part**. It defines requirements, provides information, makes resources available, uses the service correctly and gives feedback. A training course delivers little value to a student who never attends. A CRM system delivers little value if sales staff do not enter data.

> **Remember:** providers do not *deliver* value. They **facilitate outcomes**, and value is **co-created** with consumers.

### Value for different stakeholders

Value is created for more than just the consumer. The table below gives typical examples.

| Stakeholder | Examples of value they receive |
|---|---|
| **Service consumers** | Benefits achieved; costs and risks optimised |
| **Service provider** | Funding from the consumer; business development; improved image and reputation |
| **Service provider's employees** | Financial and non-financial incentives; career and professional development; a sense of purpose |
| **Society and community** | Employment; taxes; the organization's contribution to the community |
| **Charitable organizations** | Financial and non-financial contributions from commercial organizations |
| **Shareholders** | Financial benefits such as dividends; a sense of assurance and stability |

---

## 2.2 Organizations, Service Providers and Service Consumers

**Organization:** "a person or a group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives."

Organizations range from a single person to large, complex structures such as governments and multinational corporations.

### Service provider and service consumer

- A **service provider** is an organization that provides services to others. It can be an *internal* IT department providing services to other business units, or an *external* company such as a cloud provider or managed service provider.
- A **service consumer** is an organization that receives and uses services.

**The same organization is usually both.** An IT department consumes services from a cloud provider, an internet provider and software vendors. It provides services to the rest of the business, which in turn provides services to its own customers.

### Consumer roles: customer, user and sponsor

ITIL 4 separates three roles within service consumption:

| Role | ITIL 4 definition | In short |
|---|---|---|
| **Customer** | "A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption." | Decides *what* is needed and owns the results |
| **User** | "A person who uses services." | Actually *uses* the service |
| **Sponsor** | "A person who authorizes budget for service consumption." | *Pays* for it, or approves the money |

**Example of different people:** a hospital buys a new patient-scheduling service.

- The **sponsor** is the Chief Financial Officer, who approves the budget.
- The **customer** is the Head of Outpatient Services, who defines the requirements and is accountable for the outcomes.
- The **users** are the receptionists, nurses and doctors who use the system every day. Patients can also be users if they book appointments online.

**Example of one person in all three roles:** you buy a personal mobile phone plan. You choose it (customer), pay for it (sponsor) and use it (user).

> **Exam tip:** a classic question describes a scenario and asks "which role is this person playing?" Ask yourself three questions in turn. Who *pays*? That is the sponsor. Who *defines requirements and is responsible for outcomes*? That is the customer. Who *uses* it? That is the user.

### Other stakeholders

Beyond providers and consumers there are many other stakeholders, such as shareholders, employees, partners, suppliers, regulators, communities and society. Successful service management considers **all** stakeholders' value, not only the paying customer's.

---

## 2.3 Products and Services

### Products

**Product:** "a configuration of an organization's resources designed to offer value for a consumer."

- Resources are configured from the **four dimensions** (Chapter 3): people, information and technology, partners and suppliers, value streams and processes.
- A product is typically complex. The consumer sees only **part** of it. The rest, such as data centres, staff, processes and contracts, remains hidden.
- One product can be the basis of several **service offerings** for different consumer groups.

### Services

**Service:** "a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks."

Read the definition slowly. It contains four key ideas:

1. **Enabling value co-creation:** the service does not create value alone.
2. **Facilitating outcomes:** the customer wants a result, such as paying employees on time, not the technology itself.
3. **Outcomes customers want to achieve:** the customer's perspective defines success.
4. **Without having to manage specific costs and risks:** the customer avoids owning certain costs and risks. A service never removes *all* costs and risks.

> **Exam tip:** the ITIL v3 definition was "a means of delivering value to customers by facilitating outcomes customers want to achieve without the **ownership** of specific costs and risks." ITIL 4 changed *delivering* to **enabling value co-creation**, and *ownership* to **having to manage**. If an option says "delivering value", it is the old definition.

### Service offerings

**Service offering:** "a formal description of one or more services, designed to address the needs of a target consumer group. A service offering may include **goods**, **access to resources**, and **service actions**."

| Component | Meaning | Ownership | Examples |
|---|---|---|---|
| **Goods** | Physical items supplied to the consumer | **Transferred** to the consumer, who becomes responsible for their future use | A mobile phone handset; a laptop that becomes the user's property; a physical server sold to the customer |
| **Access to resources** | The consumer is granted access to resources under agreed terms (time, volume, licence) | **Not transferred**: the provider keeps ownership | Access to a mobile network; cloud storage space; a SaaS application; a software licence |
| **Service actions** | Activities performed by the provider to address a consumer need | Not applicable: these are actions, not things | User support; repairing or replacing equipment; installing software; password resets |

**Worked example: a mobile phone plan**

- *Goods:* the handset, if it is sold to the customer
- *Access to resources:* the mobile network, data allowance and cloud backup space
- *Service actions:* technical support, handset repair and number porting

**Several offerings from one product.** The same mobile product can be packaged as a *Basic* offering (limited data, standard support), a *Business* offering (more data, priority support, device management) or a *Family* offering. Each offering targets a different consumer group.

---

## 2.4 Service Relationships

**Service relationship:** "a cooperation between a service provider and service consumer. Service relationships include **service provision**, **service consumption**, and **service relationship management**."

| Element | Definition | Typical activities |
|---|---|---|
| **Service provision** | "Activities performed by an organization to provide services." | Managing the provider's resources configured to deliver the service; ensuring users can access these resources; fulfilling agreed service actions; managing service performance and continual improvement; supplying goods |
| **Service consumption** | "Activities performed by an organization to consume services." | Managing the consumer's own resources needed to use the service (for example network access and trained staff); service actions performed by users, such as using the provider's resources and requesting service actions; receiving and acquiring goods |
| **Service relationship management** | "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings." | Reviewing service performance together; agreeing changes; handling feedback and complaints; planning future needs |

### The service relationship model

Organizations form **chains** of service relationships:

1. **Organization A** (for example a cloud provider) configures its resources into a **product** and creates **service offerings**.
2. **Organization B** (for example an online retailer) consumes the cloud service. Combined with its own resources, the cloud service creates **new resources** for B: a hosted web shop.
3. B configures those new resources into **its own products and service offerings** for **Organization C**, the retailer's customers.

Every organization in the chain is a **provider and a consumer at the same time**. Value is co-created at each link. The whole network of organizations working together is often called the **service ecosystem** or **value network**.

> **In practice:** when the cloud provider has an outage, the retailer's customers cannot shop. That is why service relationships, including supplier management and agreements, are critical. A provider's quality depends on the quality of its own suppliers.

---

## 2.5 Value: Outcomes, Costs and Risks

To decide whether a service is valuable, consumers weigh the **outcomes** it facilitates against the **costs** and **risks** involved.

### Outputs and outcomes

| Term | ITIL 4 definition | Example |
|---|---|---|
| **Output** | "A tangible or intangible deliverable of an activity." | A monthly sales report; a resolved incident ticket; a deployed release |
| **Outcome** | "A result for a stakeholder enabled by one or more outputs." | The sales director makes better pricing decisions; the user can work again; customers can use a new feature |

> **Remember:** **outputs are what we produce; outcomes are what the stakeholder achieves.** A service provider helps the consumer achieve outcomes by producing outputs. A service can produce perfect outputs and still fail to deliver the outcome, for example a report delivered on time that nobody can use.

### Costs

**Cost:** "the amount of money spent on a specific activity or resource."

From the consumer's perspective, services involve two kinds of cost:

| Type | Examples |
|---|---|
| **Costs removed** from the consumer (part of the value proposition) | Cost of staff, hardware, software, facilities or expertise the consumer no longer needs to own |
| **Costs imposed** on the consumer (the cost of using the service) | The price paid to the provider; training users; network connectivity; procurement and contract management; integration effort |

### Risks

**Risk:** "a possible event that could cause harm or loss, or make it more difficult to achieve objectives. Can also be defined as uncertainty of outcome, and can be used in the context of measuring the probability of positive outcomes as well as negative outcomes."

| Type | Examples |
|---|---|
| **Risks removed** from the consumer | Failure of the consumer's own server hardware; lack of skilled staff; outdated technology |
| **Risks imposed** on the consumer | A security breach at the provider affecting the consumer's data; provider outage; vendor lock-in; dependency on the provider's financial health |

**How the consumer helps reduce risk.** Because value is co-created, the consumer also contributes to reducing risk by:

- actively taking part in **defining requirements** and clarifying the required outcomes
- clearly communicating **critical success factors** and **constraints**
- making sure the provider has **access to the consumer's resources** it needs, such as data, people and systems

> **Remember:** a service is valuable when it facilitates the desired **outcomes** while **optimising** costs and risks. It does not need to eliminate them.

---

## 2.6 Utility and Warranty

To facilitate outcomes, a service must offer both **utility** and **warranty**.

| | **Utility** | **Warranty** |
|---|---|---|
| **ITIL 4 definition** | "The functionality offered by a product or service to meet a particular need." | "Assurance that a product or service will meet agreed requirements." |
| **In short** | *What the service does* | *How the service performs* |
| **Phrase** | **Fit for purpose** | **Fit for use** |
| **Typical aspects** | Features, functions, supported tasks, removal of constraints | **Availability**, **capacity**, **security**, **continuity** and performance levels |
| **Typically documented in** | Service descriptions and requirements | Service level agreements (SLAs) |

**Worked example: a video-conferencing service**

- *Utility:* users can schedule meetings, join by video or phone, share screens and record meetings.
- *Warranty:* 99.9% availability during business hours, up to 500 concurrent participants, end-to-end encryption, and recovery within four hours if a data centre fails.

**Why both are needed.** A service with excellent features that is constantly down has utility but no warranty, so it is useless. A service that is always available but cannot do what users need has warranty but no utility, so it is also useless. **Value requires both.**

> **Exam tip:** "fit for **purpose**" is **utility**. "Fit for **use**" is **warranty**. A handy memory aid: *U*tility answers "what can yo*U* do?", and *W*arranty answers "*W*ill it work when I need it?"

---

## 2.7 Bringing It Together: A Worked Example

A mid-sized law firm moves from running its own email servers to a cloud email service.

| Concept | Application |
|---|---|
| **Service provider** | The cloud email company |
| **Service consumer** | The law firm |
| **Sponsor** | The managing partner who approves the subscription budget |
| **Customer** | The IT manager, who defined the requirements (security, archiving for legal retention, mobile access) and owns the outcome |
| **Users** | Lawyers and support staff |
| **Service offering** | "Business Premium" plan: *access to resources* (mailboxes, 100 GB storage, archiving) and *service actions* (24/7 support, migration assistance). There are no goods |
| **Outputs** | Mailboxes provisioned; emails delivered |
| **Outcomes** | Lawyers communicate securely with clients from anywhere; the firm meets its legal record-retention obligations |
| **Costs removed** | Server hardware, licences, backup infrastructure and the time of an email administrator |
| **Costs imposed** | Subscription fee, migration effort, staff training and better internet connectivity |
| **Risks removed** | Failure of ageing in-house servers; having only one person with email knowledge |
| **Risks imposed** | Dependency on the provider; data-residency concerns; provider outages |
| **Utility** | Email, calendar, archiving, eDiscovery and mobile access |
| **Warranty** | 99.9% availability SLA, encryption, geo-redundant data centres and a 1-hour recovery point objective |
| **Service relationship management** | Quarterly service reviews between the IT manager and the provider's account manager |

---

## Key Takeaways: Chapter 2

- **Value** is "the perceived benefits, usefulness, and importance of something". It is subjective and is **co-created** through active collaboration.
- **Service consumer roles:** the **customer** defines requirements and owns outcomes, the **user** uses the service and the **sponsor** authorises budget. One person can hold several roles.
- **Product:** a configuration of an organization's resources designed to offer value. **Service:** enables value co-creation by facilitating outcomes, without the customer having to manage specific costs and risks.
- **Service offering** = **goods** (ownership transferred) + **access to resources** (ownership not transferred) + **service actions**.
- **Service relationship** = service provision + service consumption + service relationship management. Organizations are both providers and consumers in chains of relationships.
- **Output** = a deliverable. **Outcome** = a result for a stakeholder enabled by outputs.
- Services **remove** some costs and risks and **impose** others. Value means optimising these against outcomes.
- **Utility** = fit for purpose, *what it does*. **Warranty** = fit for use, *how it performs*: availability, capacity, security and continuity. **Both are required** for value.

---

## Check Your Knowledge: Chapter 2

*Answers are in Appendix A.*

**Multiple choice**

**2.1** What is the ITIL 4 definition of *value*?

- A) The perceived benefits, usefulness, and importance of something
- B) The amount of money a consumer is willing to pay for a service
- C) The functionality offered by a product or service to meet a particular need
- D) Assurance that a product or service will meet agreed requirements

**2.2** Which role defines the requirements for a service and takes responsibility for the outcomes of service consumption?

- A) User
- B) Sponsor
- C) Customer
- D) Supplier

**2.3** A department head approves the budget for a new HR system but will never use it. Which role is the department head playing?

- A) Customer
- B) Sponsor
- C) User
- D) Service provider

**2.4** What is a *service offering*?

- A) A configuration of an organization's resources designed to offer value for a consumer
- B) A formal description of one or more services, designed to address the needs of a target consumer group
- C) A documented agreement between a service provider and a customer
- D) A cooperation between a service provider and a service consumer

**2.5** An employee is given a mobile phone that becomes their personal property. Which component of a service offering is this?

- A) Goods
- B) Access to resources
- C) Service action
- D) Utility

**2.6** Which is the correct definition of an *outcome*?

- A) A tangible or intangible deliverable of an activity
- B) A result for a stakeholder enabled by one or more outputs
- C) The functionality offered by a service
- D) A possible event that could cause harm or loss

**2.7** Which of the following is an example of a risk *imposed* on a consumer by a service?

- A) Failure of the consumer's own server hardware
- B) A lack of skilled staff to run the consumer's own infrastructure
- C) A security breach at the provider that exposes the consumer's data
- D) Ageing technology in the consumer's own data centre

**2.8** What is *warranty*?

- A) The functionality offered by a product or service to meet a particular need
- B) Assurance that a product or service will meet agreed requirements
- C) The perceived benefits, usefulness, and importance of something
- D) A result for a stakeholder enabled by one or more outputs

**2.9** Which of the following describes the *utility* of a video-conferencing service?

- A) The service is available 99.9% of the time during business hours
- B) The service allows users to schedule meetings, join by video and share screens
- C) The service supports up to 500 concurrent participants
- D) The service can be recovered within four hours after a disaster

**2.10** What is *service relationship management*?

- A) Activities performed by an organization to provide services
- B) Activities performed by an organization to consume services
- C) Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings
- D) Activities performed by a supplier to manage its own contracts

**2.11** Which statement about value is correct according to ITIL 4?

- A) Value is delivered by the provider to a passive consumer
- B) Value is co-created through active collaboration between providers, consumers and other organizations
- C) Value is defined only by the service provider
- D) Value is always measured in financial terms

**2.12** Which is the correct ITIL 4 definition of a *product*?

- A) A means of enabling value co-creation by facilitating outcomes that customers want to achieve
- B) A configuration of an organization's resources designed to offer value for a consumer
- C) A collection of goods sold to a customer
- D) A version of a service made available for use

**2.13** How can service consumers help reduce the risks of a service?

- A) By refusing to share information about their business with the provider
- B) By actively participating in the definition of requirements and clearly communicating critical success factors and constraints
- C) By transferring all of their risks to the provider through the contract
- D) By paying a higher price for the service

**Short answer**

**2.14** Distinguish an *output* from an *outcome* using an example from your own work or studies.

**2.15** Explain how one person can be customer, user and sponsor at the same time. Then give an example in which the three roles are held by three different people.

**2.16** Describe the three components of a service offering for a "managed laptop" service provided by an IT department to employees.

**2.17** Explain, with an example, why both utility and warranty are needed for a service to create value.

---


# Chapter 3: The Four Dimensions of Service Management

**Suggested study time:** 1 hour (Day 1)

**Learning objectives.** After this chapter you should be able to:

- name and describe the four dimensions of service management
- explain why all four must be considered in a balanced way
- describe the external (PESTLE) factors that influence the dimensions
- use the RACI model to clarify responsibilities
- distinguish a value stream from a process

---

## 3.1 Why Four Dimensions?

Organizations often fail at service management because they focus on **one aspect**, usually technology, and neglect the others. A new ITSM tool will not improve anything if staff are not trained, processes are not redesigned and suppliers are not aligned.

ITIL 4 describes **four dimensions** that must be considered **for every service and for the Service Value System (SVS) as a whole**:

| # | Dimension | Core question |
|---|---|---|
| 1 | **Organizations and people** | *Who* does the work, how are they organised, and what culture do they work in? |
| 2 | **Information and technology** | *What* information, knowledge and technology are needed? |
| 3 | **Partners and suppliers** | *Which* other organizations are involved, and how? |
| 4 | **Value streams and processes** | *How* do the parts work together to create value? |

All four are affected by **external factors** (PESTLE, Section 3.6). Neglecting any dimension can cause a service to underperform or fail.

> **Remember** the four dimensions with the phrase **"O-I-P-V": Our Information Partners create Value**.
> *Organizations and people, Information and technology, Partners and suppliers, Value streams and processes.*

---

## 3.2 Dimension 1: Organizations and People

This dimension covers:

- **formal organizational structures**: teams, reporting lines, the systems of authority and communication
- **culture**: shared values and attitudes, such as trust, transparency, collaboration and willingness to learn from failure
- **roles and responsibilities**
- **staffing and competencies**: the right number of people with the right skills, knowledge and behaviour
- **leadership and management styles**

### Key points

- The **complexity of organizations** is growing. The structure and management style must make sure that the way work is organised supports the creation of value.
- A **culture of trust and transparency** encourages people to raise issues, escalate early and suggest improvements without fear.
- **Every person** in the organization should clearly understand how their work contributes to creating value for the organization, its customers and other stakeholders.
- Staff increasingly need **broad general knowledge combined with deep specialist knowledge**, often called a **"T-shaped" profile**. The vertical bar of the T is depth in one area. The horizontal bar is breadth across related areas, including collaboration and business understanding.
- **Leaders** promote values and set the example, for example by supporting a blameless approach to reviewing failures.

### Clarifying responsibility: the RACI model

A **RACI matrix** assigns, for each activity, who is:

| Letter | Role | Meaning |
|---|---|---|
| **R** | **Responsible** | Does the work. There can be several |
| **A** | **Accountable** | Owns the outcome and signs off. There must be **exactly one** per activity |
| **C** | **Consulted** | Gives input before or during the work (two-way communication) |
| **I** | **Informed** | Is kept up to date (one-way communication) |

**Example: major incident handling**

| Activity | Service desk analyst | Major incident manager | Technical team | Service owner | Customer relationship manager |
|---|---|---|---|---|---|
| Log and classify the incident | **R** | A | | I | |
| Coordinate the response | I | **A/R** | C | C | I |
| Diagnose and fix | | A | **R** | C | |
| Communicate with the customer | C | A | | C | **R** |
| Post-incident review | C | **A/R** | R | C | I |

> **Exam tip:** the most commonly tested RACI rule is **only one "A" per activity**. Accountability that is shared ends up belonging to nobody.

### Typical ITSM roles

- **Service owner:** accountable for a specific service across its whole lifecycle
- **Practice (process) owner:** accountable for a practice being fit for purpose, for its design and for its improvement
- **Practice (process) manager:** responsible for day-to-day operational management of a practice
- **Practitioner:** carries out the practice's activities, for example a service desk agent
- **Service level manager, relationship manager, change authority, incident manager, problem manager** and similar specialist roles

---

## 3.3 Dimension 2: Information and Technology

This dimension covers **the information and knowledge** needed to manage services **and the technologies** that support service management. It applies both to the services being managed and to service management itself.

### Information

Key questions:

- What information is managed by the services? For example customer records or medical data.
- What supporting information and knowledge are needed to deliver and manage the services?
- How will information and knowledge assets be protected, managed, archived and disposed of?

Common challenges relate to the **availability, reliability, accessibility, timeliness, accuracy and relevance** of information.

### Technology

Technologies that support **service management** include:

- workflow management and ticketing systems
- knowledge bases
- inventory, asset and configuration management systems
- communication systems, such as chat, collaboration and telephony
- analytical, reporting and monitoring tools
- increasingly, **artificial intelligence (AI)**, **machine learning**, **automation**, **mobile** solutions, **cloud computing** and collaboration tools

### Factors that influence technology choices

| Factor | Example question |
|---|---|
| **Compatibility** with the existing architecture | Will the new tool integrate with our CMDB and identity system? |
| **Regulatory and compliance** requirements | Can personal data be stored in this cloud region under data-protection law? |
| **Culture** | Is the organization ready to trust AI-generated answers? Do staff resist new tools? |
| **Nature of the business** | A bank has a low tolerance for risk; a start-up may accept more risk for speed |
| **Viability** | Will this technology still be supported in five years? Does it create vendor lock-in? |
| **Security** | Does it meet our information security requirements? |

> **In practice:** a hospital wants to use a cloud-based chatbot for patient appointment queries. The *information* questions concern patient data, consent and retention. The *technology* questions concern integration with the scheduling system, accuracy of AI answers and availability. The decision is shaped by regulation, culture and risk tolerance.

---

## 3.4 Dimension 3: Partners and Suppliers

This dimension covers an organization's **relationships with other organizations** that are involved in the design, development, deployment, delivery, support and continual improvement of services. It includes the **contracts and other agreements** between them.

### Forms of cooperation

Relationships range along a spectrum:

| Formal supplier relationship | ←→ | Partnership |
|---|---|---|
| Formal contracts | | Flexible agreements |
| Clear separation of responsibilities | | Shared goals and risks |
| Focus on transactions and price | | Focus on collaboration and joint value |
| Example: buying commodity laptops | | Example: co-developing a product with a strategic partner |

### Factors that influence an organization's supplier strategy

ITIL 4 lists these factors. Learn them, because they are often examined.

| Factor | Example |
|---|---|
| **Strategic focus** | We want to concentrate on our core competency, banking, so we outsource data-centre operations |
| **Corporate culture** | Some organizations historically prefer to keep everything in-house |
| **Resource scarcity** | We cannot hire enough cloud security specialists, so we contract a specialist firm |
| **Cost concerns** | It is cheaper to buy the service than to build and run it ourselves |
| **Subject matter expertise** | A supplier has expertise we would take years to develop |
| **External constraints** | Government regulation or policy restricts or requires certain sourcing, such as data sovereignty |
| **Demand patterns** | Seasonal or highly variable demand makes on-demand cloud capacity attractive |

### Service integration and management (SIAM)

When many suppliers contribute to a service, someone must **coordinate them as one ecosystem**. **SIAM** uses a **service integrator** to manage end-to-end service delivery across multiple suppliers. The integrator can be internal, external or a hybrid. It owns cross-supplier processes such as incident coordination and handles disputes between suppliers.

---

## 3.5 Dimension 4: Value Streams and Processes

This dimension describes **how the various parts of the organization work in an integrated and coordinated way** to enable value creation through products and services. It defines activities, workflows, controls and procedures.

### Value streams

**Value stream:** "a series of steps an organization undertakes to create and deliver products and services to consumers."

- A value stream is **end-to-end** and **customer-focused**. It starts with **demand or an opportunity** and ends with **value**.
- It usually **crosses organizational boundaries** and combines several practices.
- Value streams can be mapped to find **waste**, delays and bottlenecks, and then optimised, for example through automation, removing hand-offs or reordering steps.

### Processes

**Process:** "a set of interrelated or interacting activities that transform inputs into outputs. Processes define the sequence of actions and their dependencies."

- Processes are often detailed in **procedures**, which say *who* does *what*, and **work instructions**, which give detailed step-by-step guidance on *how* a task is done.
- Useful process characteristics carried over from earlier ITIL versions: a process is **measurable**, delivers **specific results**, has **customers** or stakeholders, and **responds to a specific trigger**.

### Value stream versus process

| | Value stream | Process |
|---|---|---|
| Scope | End-to-end, from demand to value | A defined set of activities, often within one practice |
| Focus | The consumer's journey and the value created | Transforming inputs into outputs efficiently and consistently |
| Boundaries | Crosses teams, practices and organizations | Usually has a defined owner and scope |
| Example | "New employee is productive on day one": from HR request to a working laptop, accounts and training | "Service request fulfilment" or "account provisioning" |

> **In practice:** in an onboarding value stream, HR raises the request (**demand**). IT plans the equipment, buys or allocates a laptop, creates accounts, configures access and delivers training. The value is a **productive new employee from day one**. Many practices contribute: service request management, IT asset management, information security management, service desk and supplier management.

Key questions for this dimension:

- What is the generic delivery model for the service, and how does it work?
- What are the value streams involved in delivering the agreed outputs?
- Who, or what, performs the required actions?

---

## 3.6 External Factors: PESTLE

Service providers operate within a changing environment. The **PESTLE** model describes the external factors that constrain or influence all four dimensions:

| Factor | Examples relevant to IT services |
|---|---|
| **P**olitical | Government digital policies; sanctions affecting suppliers; public-sector procurement rules |
| **E**conomic | Recession reducing budgets; exchange rates affecting cloud costs; inflation in salaries |
| **S**ocial | Remote and hybrid working; expectations of 24/7 mobile access; digital skills of users |
| **T**echnological | AI, cloud, automation and 5G; rapid obsolescence of platforms |
| **L**egal | Data protection (for example GDPR); accessibility law; employment law; software licensing |
| **E**nvironmental | Energy consumption of data centres; e-waste rules; climate-related reporting (now reflected in ISO/IEC 20000-1 Amendment 1:2024) |

---

## 3.7 Applying All Four Dimensions: An Example

An organization introduces a **chatbot** on its service desk.

| Dimension | Considerations |
|---|---|
| **Organizations and people** | Will analysts fear job losses? Who owns and trains the chatbot? What new skills are needed, such as conversation design and knowledge curation? How do we keep a human-centred culture? |
| **Information and technology** | Is the knowledge base accurate and up to date? Does the chatbot integrate with the ticketing tool and identity system? How is personal data protected? |
| **Partners and suppliers** | Which vendor provides the chatbot platform? What are the contract terms, SLAs and exit arrangements? Who supports the AI model? |
| **Value streams and processes** | Which requests can it fully resolve? How does it hand over to a human, with context? How do incident and request workflows change? |
| **External (PESTLE)** | Legal rules on AI transparency and data protection; social acceptance of chatbots; accessibility requirements |

If any row is ignored, the project is at risk. A technically perfect chatbot with an outdated knowledge base, for example, will frustrate users.

---

## Key Takeaways: Chapter 3

- The four dimensions are **Organizations and people**, **Information and technology**, **Partners and suppliers** and **Value streams and processes**.
- They apply to **every service** and to the **SVS as a whole**, and must be considered in a **balanced** way.
- **Organizations and people:** structures, culture, roles, competencies and leadership. **RACI** has exactly **one Accountable** per activity.
- **Information and technology:** the information and knowledge needed, plus the technology that supports services and service management. Choices are shaped by compatibility, regulation, culture, nature of the business and viability.
- **Partners and suppliers:** relationships range from formal supply to partnership. Supplier strategy is influenced by **strategic focus, corporate culture, resource scarcity, cost concerns, subject matter expertise, external constraints and demand patterns**. **SIAM** integrates multiple suppliers.
- **Value streams and processes:** a **value stream** is the series of steps to create and deliver products and services to consumers. A **process** transforms inputs into outputs.
- **PESTLE** external factors influence all four dimensions.

---

## Check Your Knowledge: Chapter 3

*Answers are in Appendix A.*

**Multiple choice**

**3.1** Which of the following lists the four dimensions of service management?

- A) People, process, products, partners
- B) Organizations and people; information and technology; partners and suppliers; value streams and processes
- C) Strategy, design, transition, operation
- D) Plan, improve, engage, deliver and support

**3.2** Which dimension includes roles and responsibilities, culture, and staffing and competencies?

- A) Value streams and processes
- B) Partners and suppliers
- C) Organizations and people
- D) Information and technology

**3.3** Which dimension includes workflow management systems, knowledge bases and artificial intelligence?

- A) Information and technology
- B) Organizations and people
- C) Value streams and processes
- D) Partners and suppliers

**3.4** An organization outsources its cloud security monitoring because it cannot recruit enough qualified specialists. Which factor influencing supplier strategy does this illustrate?

- A) Corporate culture
- B) Demand patterns
- C) Resource scarcity
- D) External constraints

**3.5** Which dimension focuses on how the various parts of the organization work in an integrated and coordinated way to enable value creation?

- A) Organizations and people
- B) Value streams and processes
- C) Partners and suppliers
- D) Information and technology

**3.6** What does PESTLE stand for?

- A) People, Environment, Systems, Technology, Leadership, Ethics
- B) Political, Economic, Social, Technological, Legal, Environmental
- C) Planning, Execution, Support, Testing, Launch, Evaluation
- D) Political, Ethical, Strategic, Technical, Legal, Economic

**3.7** What is a *value stream*?

- A) A set of interrelated or interacting activities that transform inputs into outputs
- B) A series of steps an organization undertakes to create and deliver products and services to consumers
- C) A documented agreement between a provider and a consumer
- D) A financial forecast of the value of a service

**3.8** What is a *process*?

- A) A set of interrelated or interacting activities that transform inputs into outputs
- B) A series of steps an organization undertakes to create and deliver products and services to consumers
- C) A team of people with specialist skills
- D) A tool that automates workflow

**3.9** Which statement about the four dimensions is correct?

- A) They apply only to new services
- B) They should be considered for every service and for the SVS as a whole
- C) The information and technology dimension is always the most important
- D) They are only relevant to external service providers

**3.10** In a RACI matrix, how many roles should be *Accountable* for a single activity?

- A) None
- B) Exactly one
- C) At least two, for resilience
- D) As many as are responsible

**3.11** Which of the following best describes SIAM?

- A) A method of software development
- B) An approach to managing multiple suppliers in an integrated way, often through a service integrator
- C) A model for calculating availability
- D) A technique for root cause analysis

**3.12** An organization buys a powerful new ITSM tool, but incident resolution times do not improve. Staff were not trained and workflows were not redesigned. What is the most likely explanation?

- A) The tool was configured incorrectly
- B) The organization focused on one dimension and neglected the organizations and people, and value streams and processes, dimensions
- C) The partners and suppliers dimension is irrelevant to incident management
- D) Incident management cannot be improved with tools

**Short answer**

**3.13** Explain the difference between a value stream and a process, giving an example of each.

**3.14** An organization is launching a self-service portal for users. List one important consideration for each of the four dimensions.

**3.15** List at least five factors that influence an organization's supplier strategy.

**3.16** Give one example for each PESTLE factor that could affect an IT service provider.

---


# Part II: The ITIL Service Value System

---

# Chapter 4: The Service Value System, Guiding Principles and Governance

**Suggested study time:** 2.5 hours (Day 2)

**Learning objectives.** After this chapter you should be able to:

- describe the purpose, inputs, components and outcome of the ITIL Service Value System (SVS)
- explain the nature, use and interaction of the **seven guiding principles**, and apply each one in a scenario
- describe governance and the **evaluate, direct and monitor** activities
- define a *practice* and outline the three practice groups

> **Exam tip:** the guiding principles are the **largest single topic** in the ITIL Foundation exam. Expect several scenario questions of the form "which guiding principle is being applied?" or "which principle would help here?"

---

## 4.1 The Service Value System (SVS)

**Purpose.** The SVS describes how **all the components and activities of the organization work together as a system to enable value creation**. Its aim is to make sure that the organization continually **co-creates value** with all its stakeholders through the use and management of products and services.

### Inputs and outcome

| Element | Meaning |
|---|---|
| **Opportunity** (input) | Options or possibilities to add value for stakeholders or otherwise improve the organization |
| **Demand** (input) | The need or desire for products and services among internal and external consumers |
| **Value** (outcome) | Value for the organization, its customers and other stakeholders |

> **Remember:** **opportunity and demand** go in, and **value** comes out. Opportunity and demand **trigger** activities within the SVS. An organization does not have to act on every opportunity. Opportunities and demand must be **prioritised** against each other.

### The five components of the SVS

```
                ┌──────────────────────────────────────────────┐
                │         SERVICE VALUE SYSTEM (SVS)           │
                │                                              │
 OPPORTUNITY ──►│  Guiding principles                          │
                │  Governance                                  │
                │  Service value chain ──► Products & services │──► VALUE
                │  Practices                                   │
 DEMAND ───────►│  Continual improvement                       │
                └──────────────────────────────────────────────┘
```

| Component | What it provides |
|---|---|
| **Guiding principles** | Recommendations that guide decisions and actions in all circumstances |
| **Governance** | The means by which the organization is directed and controlled |
| **Service value chain** | An operating model of six interconnected activities that turn demand into value (Chapter 5) |
| **Practices** | Sets of organizational resources designed for performing work or accomplishing an objective (Chapters 6–8) |
| **Continual improvement** | A recurring organizational activity, performed at all levels, that keeps the SVS aligned with changing needs (Chapter 5) |

> **Exam tip:** the **four dimensions are *not* a component of the SVS**. They apply **to** the SVS as a whole and to every component. PESTLE, SLAs and the service desk are also not components.

### Why a "system"? Breaking down silos

Many organizations suffer from **silos**. Teams and departments optimise their own work but do not cooperate. Information is hoarded, hand-offs are slow and nobody owns the end-to-end result. Silos make organizations resistant to change and slow to respond.

The SVS architecture is designed to provide **flexibility** and discourage siloed working:

- value chain activities can be combined in many ways through **value streams**, so the organization can respond to different types of demand
- **practices** are not owned by one department. They contribute across the value chain
- shared **guiding principles** and **governance** give everyone a common direction
- **continual improvement** applies everywhere, not only within individual teams

---

## 4.2 The Guiding Principles: Nature and Use

**Guiding principle:** "A recommendation that guides an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure."

Guiding principles are:

- **universal**: they apply to almost any initiative and to all relationships with stakeholder groups
- **enduring**: they stay valid as the organization changes
- **guidance, not rules**: they support good decisions. They are not a step-by-step method

ITIL 4 has **seven** guiding principles. They are compatible with the principles of Agile, Lean, DevOps and other approaches.

| # | Guiding principle | One-line essence |
|---|---|---|
| 1 | **Focus on value** | Everything should link back to value for stakeholders |
| 2 | **Start where you are** | Do not start from scratch. Reuse what already works |
| 3 | **Progress iteratively with feedback** | Work in small steps and learn as you go |
| 4 | **Collaborate and promote visibility** | Work together across boundaries and make work visible |
| 5 | **Think and work holistically** | Nothing stands alone. Manage the whole |
| 6 | **Keep it simple and practical** | Eliminate what adds no value and use the minimum steps |
| 7 | **Optimize and automate** | Use resources to best effect. Optimise before automating |

> **Remember** the order with the phrase **"Very Smart People Collaborate To Keep Organizations"**: **V**alue, **S**tart, **P**rogress, **C**ollaborate, **T**hink holistically, **K**eep it simple, **O**ptimize.

---

## 4.3 Principle 1: Focus on Value

> *"All activities conducted by the organization should link back, directly or indirectly, to value for itself, its customers, and other stakeholders."*

### Key ideas

- **Know who the service consumer is** in each situation. Who are you creating value for?
- **Understand the consumer's perspective of value.** Why do they use the service? What does it help them do? How does it help them achieve their goals? What role do cost and financial consequences play? What risks are involved?
- **Value changes** over time and in different circumstances, so it must be revisited.
- **Customer experience (CX) and user experience (UX)** are an important part of value. Experience includes both the **objective** (functional) and the **subjective** (emotional) aspects of interacting with the service and the provider.

### Applying the principle

- **Know how service consumers use each service.** Understand their outcomes, costs and risks.
- **Encourage a focus on value among all staff**, not just those who deal directly with customers.
- **Focus on value during normal operational activity**, not only during improvement initiatives.
- **Include a focus on value in every step** of any improvement initiative.

> **In practice:** a service desk measured only on "tickets closed per hour" may close tickets quickly without solving users' problems. Focusing on value changes the question to "did the user get back to productive work?" The measures change too, for example first-contact resolution and user satisfaction.

---

## 4.4 Principle 2: Start Where You Are

> *"Do not start from scratch and build something new without considering what is already available to be leveraged."*

### Key ideas

- There is usually a great deal in current services, processes, people and tools that can be **reused or built on**.
- **Assess the current state** by **observing directly** wherever possible. Reports alone can be misleading.
- **Measurement must be used carefully.** It is important, but data can be incomplete or distorted. The act of measuring can affect behaviour and therefore the results. Combine measurements with direct observation.
- Do not let past failures or political views of a team distort the objective assessment.

### Applying the principle

- **Look at what exists as objectively as possible**, using the **customer or desired outcome** as the starting point.
- **When good practices are found** in existing services or methods that can be **replicated or expanded**, do so.
- **Apply your risk management skills** when deciding what to keep and what to change.
- **Recognise that sometimes nothing from the current state can be reused.** Starting fresh is acceptable when it is justified.

> **In practice:** before introducing a new change enablement practice, the team discovers that the network team already runs an effective peer-review process. Instead of imposing a new process, they **extend** the network team's approach to other teams.

---

## 4.5 Principle 3: Progress Iteratively with Feedback

> *"Resist the temptation to do everything at once."*

### Key ideas

- Organise work into **smaller, manageable sections** that can be executed and completed in a timely manner. Even large initiatives should be accomplished **iteratively**.
- Each iteration delivers something of value. Its results are then **re-evaluated** and the next steps adjusted.
- **Feedback** is essential. Seeking and using feedback **before, throughout and after each iteration** keeps actions focused and appropriate, even when circumstances change.
- A **feedback loop** is a situation in which part of the output of an activity is used as new input.
- Iterations can be **time-boxed**, meaning they have fixed durations.

### Applying the principle

- **Comprehend the whole, but do something.** Do not wait for perfect analysis before acting. Avoid analysis paralysis.
- **The ecosystem is constantly changing, so feedback is essential.**
- **Fast does not mean incomplete.** An iteration should deliver a usable result, such as a **minimum viable product (MVP)**, rather than a fragment that is not useful.

> **In practice:** instead of a two-year programme to build a complete service catalogue, the team publishes the ten most-requested services in the first month. It then gathers user feedback and adds services in monthly iterations.

---

## 4.6 Principle 4: Collaborate and Promote Visibility

> *"Working together across boundaries produces results that have greater buy-in, more relevance to objectives, and increased likelihood of long-term success."*

### Key ideas

- **Cooperation and collaboration** are better than silos.
- **Collaborate with the right people in the right roles.** Stakeholders include customers, users, sponsors, developers, operations, suppliers, partners, regulators and anyone else who is affected or can contribute.
- **Communicate to improve understanding and engagement.** Different stakeholders need different messages and levels of detail.
- **Increase urgency through visibility.** When work and its consequences are hidden, people make poor decisions and resist change. Making work visible shows what work is being done, how work flows, where bottlenecks and excess capacity exist, and where waste occurs.
- **Visualisation tools**, such as Kanban boards, dashboards and value stream maps, support visibility.

### Applying the principle

- **Collaboration does not mean consensus.** It is not necessary, or always wise, to get everyone's agreement before proceeding. Someone must still make decisions.
- **Communicate in a way the audience can hear.** Choose the right method and message for each audience.
- **Decisions can only be made on visible data.** Make information visible before making decisions.

> **In practice:** the problem manager invites service desk agents to root cause workshops. The agents' first-hand knowledge of user symptoms shortens the analysis, and their involvement increases their willingness to use the resulting workarounds.

---

## 4.7 Principle 5: Think and Work Holistically

> *"No service, or element used to provide a service, stands alone. The outcomes achieved by the organization and its customers will suffer unless the organization works on the service as a whole, not just on its parts."*

### Key ideas

- Results are delivered through the effective and efficient management and **dynamic integration** of information, technology, organization, people, practices, partners and agreements, all **coordinated** to provide value.
- Changing one element can have unexpected effects elsewhere. Consider the **end-to-end** service and the **four dimensions**.

### Applying the principle

- **Recognise the complexity of the systems.** Different levels of complexity require different approaches. Simple systems can follow fixed rules. Complex systems need experimentation and adaptation.
- **Collaboration is key** to thinking and working holistically.
- **Where possible, look for patterns** in the needs of, and interactions between, system elements.
- **Automation can facilitate working holistically**, for example end-to-end visibility through integrated tools, provided enough resources are available.

> **In practice:** a team speeds up software releases dramatically, but the service desk was never told about the new features and is overwhelmed with "how do I...?" calls. Thinking holistically means including service desk training, knowledge articles and user communication in the release.

---

## 4.8 Principle 6: Keep It Simple and Practical

> *"If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it."*

### Key ideas

- Use the **minimum number of steps** needed to accomplish an objective.
- Use **outcome-based thinking** to produce practical solutions that deliver valuable outcomes.
- **Do not try to design for every exception.** Trying to cover every special case leads to over-complication. Design **rules that handle exceptions generally**.
- **Conflicting objectives** must be balanced. For example, managers may want detailed data for decisions while staff want less form-filling. Agree priorities and find the simplest workable balance.

### Applying the principle

- **Ensure value:** every activity should contribute to value creation.
- **Simplicity is the ultimate sophistication.** Simple solutions are often harder to design but work better.
- **Do fewer things, but do them better.**
- **Respect the time of the people involved.** A process with excessive bureaucracy wastes their time.
- **Easier to understand, more likely to adopt.**
- **Simplicity is the best route to achieving quick wins**, which build momentum and stakeholder support.

> **In practice:** a change request form has 45 fields, and most are never read. Applying this principle reduces it to 12 fields that the change authority actually uses for risk assessment. Compliance improves and lead time drops.

---

## 4.9 Principle 7: Optimize and Automate

> *"Resources of all types, particularly human resources, should be used to their best effect. Eliminate anything that is truly wasteful and use technology to achieve whatever it is capable of. Human intervention should only happen where it really contributes value."*

### Optimisation

**Optimisation** means making something **as effective and useful as it needs to be**. It is not about perfection. The recommended path is:

1. **Understand and agree the context** in which the proposed optimisation exists, including the overall vision and objectives.
2. **Assess the current state** to understand where it can be improved.
3. **Agree what the future state and priorities should be**, focusing on simplification and value.
4. **Ensure the optimisation has the appropriate level of stakeholder engagement and commitment.**
5. **Execute the improvements in an iterative way.**
6. **Continually monitor the impact** of optimisation to identify further opportunities.

### Automation

**Automation** is the use of technology to perform a step or series of steps **correctly and consistently** with limited or no human intervention. It can range from automating simple, frequent and repetitive tasks to complex decisions made through algorithms, AI and machine learning. Standardisation is often needed before automation.

### Applying the principle

- **Simplify and/or optimise before automating.** Automating a poor process only produces bad results faster.
- **Define your metrics** so that you can measure the effect of the optimisation or automation.
- **Use the other guiding principles when applying this one**, especially focus on value, keep it simple and practical, and progress iteratively with feedback.

> **Exam tip:** if a scenario says "the team wants to automate the current process immediately", the correct advice is almost always to **optimise (simplify) first, then automate**.

---

## 4.10 How the Principles Interact

The principles **interact with and depend on each other**. Organizations should use **all** of them and consider which are relevant in each situation. Not every principle is equally critical every time.

| Combination | How they reinforce each other |
|---|---|
| Progress iteratively with feedback + Collaborate and promote visibility | Feedback in each iteration comes from collaborating with stakeholders. Visible progress builds support for the next iteration |
| Keep it simple and practical + Optimize and automate | Simplify first, then optimise and automate the simplified process |
| Focus on value + Keep it simple and practical | Value is the test that decides what to eliminate |
| Think and work holistically + Collaborate and promote visibility | You cannot see the whole system without collaborating across boundaries |
| Start where you are + Progress iteratively with feedback | Assess and reuse what exists, then improve it in small steps |
| Focus on value + Optimize and automate | Automate where it creates value, not just where it is technically possible |

> **Did you know?** The earlier ITIL Practitioner qualification (2016) had **nine** guiding principles. ITIL 4 consolidated them into **seven**.

---

## 4.11 Governance

**Governance** is the means by which an organization is **directed and controlled**.

**Governing body:** "a person or group of people accountable at the highest level for the performance and compliance of the organization." Examples include a board of directors, executive directors and, in smaller organizations, the owner or owners.

### The three governance activities: evaluate, direct, monitor

These come from ISO/IEC 38500, the international standard for the governance of IT.

| Activity | What the governing body does |
|---|---|
| **Evaluate** | Evaluates the organization, its strategy, portfolios and relationships with other parties. Evaluations are repeated as stakeholders' needs and external circumstances change |
| **Direct** | Assigns responsibility for, and directs the preparation and implementation of, **organizational strategy and policies**. Strategies set direction and priorities. Policies set requirements for behaviour across the organization and, where relevant, for suppliers, partners and other stakeholders |
| **Monitor** | Monitors the performance of the organization and its practices, products and services, to ensure that performance conforms to policies and direction |

### Governance in the SVS

- The governing body is accountable for the organization's compliance with policies and external regulations.
- **Practices and value chain activities** must be **aligned with the direction** set by the governing body.
- **Continual improvement** of governance itself is needed. Governance is not "set and forget".
- The way governance is applied depends on the organization. It can be supported by management levels that report to the governing body.

### Governance versus management

| Governance | Management |
|---|---|
| Sets direction and priorities | Plans, builds, runs and monitors activities **within** that direction |
| Evaluates, directs, monitors | Delivers results and reports performance |
| Performed by the governing body | Performed by executives, managers and teams |
| Example: "We will move to cloud-first, and our risk appetite for customer data is low" | Example: "Here is the migration plan, the supplier evaluation and the monthly progress report" |

---

## 4.12 Practices: An Overview

**Practice:** "a set of organizational resources designed for performing work or accomplishing an objective."

A practice is more than a process. It draws on **all four dimensions**: people and skills, information and tools, partners and suppliers, and value streams and processes. A practice usually contributes to **several value chain activities**.

ITIL 4 describes **34 practices** in three groups:

| Group | Number | Examples |
|---|---|---|
| **General management practices** | 14 | Continual improvement, information security management, relationship management, supplier management, risk management, knowledge management |
| **Service management practices** | 17 | Incident management, problem management, change enablement, service desk, service level management, service request management |
| **Technical management practices** | 3 | Deployment management, infrastructure and platform management, software development and management |

The full lists and details are in Chapters 6–8. In ITIL (Version 5) the same 34 practices are regrouped into two groups (see Chapter 10).

---

## Key Takeaways: Chapter 4

- The **SVS** turns **opportunity and demand** into **value**. Its five components are **guiding principles, governance, service value chain, practices and continual improvement**.
- The SVS is designed to provide **flexibility** and break down **silos**.
- The **seven guiding principles** are: **focus on value; start where you are; progress iteratively with feedback; collaborate and promote visibility; think and work holistically; keep it simple and practical; optimize and automate**.
- Principles are **universal and enduring**. They **interact** and should be used together, choosing the ones relevant to the situation.
- Key application phrases to recognise:
  - *Focus on value:* know your consumer; CX and UX
  - *Start where you are:* observe directly; measure carefully; reuse what works; sometimes nothing can be reused
  - *Progress iteratively:* comprehend the whole but do something; fast does not mean incomplete
  - *Collaborate:* collaboration does not mean consensus; decisions need visible data
  - *Holistically:* recognise complexity; look for patterns; automation can help
  - *Keep it simple:* eliminate what adds no value; do fewer things better; quick wins
  - *Optimize and automate:* **optimise before automating**; define metrics
- **Governance:** the governing body **evaluates, directs and monitors**. Management works within that direction.
- A **practice** is a set of organizational resources for performing work. There are **34 practices**: 14 general, 17 service and 3 technical.

---

## Check Your Knowledge: Chapter 4

*Answers are in Appendix A.*

**Multiple choice**

**4.1** What are the inputs to the Service Value System?

- A) Opportunity and demand
- B) Products and services
- C) Value and outcomes
- D) Incidents and changes

**4.2** Which of the following is a component of the Service Value System?

- A) The service value chain
- B) The service desk
- C) PESTLE analysis
- D) Service level agreements

**4.3** What is a *guiding principle*?

- A) A mandatory rule that must be followed in every process
- B) A recommendation that guides an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure
- C) A documented policy approved by the governing body
- D) A step in the continual improvement model

**4.4** Which guiding principle recommends eliminating anything that is truly wasteful and using technology to achieve whatever it is capable of?

- A) Keep it simple and practical
- B) Think and work holistically
- C) Optimize and automate
- D) Focus on value

**4.5** Which guiding principle advises against building something new without considering what is already available to be leveraged?

- A) Progress iteratively with feedback
- B) Start where you are
- C) Focus on value
- D) Collaborate and promote visibility

**4.6** A team plans to redesign the whole service desk operation in a single 18-month project with one delivery at the end. Which guiding principle would recommend breaking the work into smaller deliverables?

- A) Progress iteratively with feedback
- B) Think and work holistically
- C) Start where you are
- D) Optimize and automate

**4.7** "Collaboration does not mean consensus" is a recommendation for applying which guiding principle?

- A) Focus on value
- B) Collaborate and promote visibility
- C) Keep it simple and practical
- D) Think and work holistically

**4.8** A manager wants to automate an existing approval workflow immediately. It has seven approval steps, and four of them add no value. What is the best advice according to the guiding principles?

- A) Automate all seven steps to save time
- B) Simplify and optimise the workflow first, then automate it
- C) Keep the workflow manual to avoid risk
- D) Ask the supplier to redesign it

**4.9** "Recognise the complexity of the systems" is a recommendation for applying which guiding principle?

- A) Think and work holistically
- B) Keep it simple and practical
- C) Progress iteratively with feedback
- D) Start where you are

**4.10** "If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it." Which guiding principle is this?

- A) Optimize and automate
- B) Focus on value
- C) Keep it simple and practical
- D) Start where you are

**4.11** Which guiding principle recommends combining measurement with direct observation, because the act of measuring can affect the results?

- A) Focus on value
- B) Start where you are
- C) Progress iteratively with feedback
- D) Collaborate and promote visibility

**4.12** Which activities are performed by the governing body?

- A) Plan, do, check, act
- B) Evaluate, direct, monitor
- C) Engage, design, deliver
- D) Plan, build, run

**4.13** Which statement about the guiding principles is correct?

- A) Only one principle should be applied at a time
- B) The principles interact with each other and should be considered together, with the most relevant ones chosen for each situation
- C) The principles apply only to improvement initiatives
- D) The principles must be applied in numerical order

**4.14** What is a *practice*?

- A) A set of interrelated activities that transform inputs into outputs
- B) A set of organizational resources designed for performing work or accomplishing an objective
- C) A team within the IT department
- D) A documented procedure for handling incidents

**4.15** Which guiding principle emphasises understanding customer experience (CX) and user experience (UX)?

- A) Focus on value
- B) Think and work holistically
- C) Keep it simple and practical
- D) Optimize and automate

**4.16** A team wants to publish a minimum viable version of a new self-service portal, gather user comments and improve it each month. Which two guiding principles are most clearly being applied?

- A) Start where you are; optimize and automate
- B) Progress iteratively with feedback; focus on value
- C) Keep it simple and practical; think and work holistically
- D) Collaborate and promote visibility; start where you are

**Short answer**

**4.17** Explain how the design of the SVS helps an organization avoid working in silos.

**4.18** You have been asked to introduce problem management. Describe how you would apply *start where you are*.

**4.19** Explain two ways in which *progress iteratively with feedback* and *collaborate and promote visibility* support each other.

**4.20** Explain the difference between governance and management, with an example of each.

---


# Chapter 5: The Service Value Chain and Continual Improvement

**Suggested study time:** 1.5–2 hours (Day 2)

**Learning objectives.** After this chapter you should be able to:

- describe the purpose of each of the six service value chain activities
- explain the main inputs and outputs that flow between value chain activities
- explain how value streams combine value chain activities and practices
- describe the seven steps of the continual improvement model and the role of the continual improvement register

---

## 5.1 The Service Value Chain

The **service value chain** is the central element of the SVS. It is an **operating model** that outlines the key activities needed to respond to demand and facilitate value through the creation and management of products and services.

### The six value chain activities

| Activity | Purpose (learn these) |
|---|---|
| **Plan** | To ensure a **shared understanding of the vision, current status and improvement direction** for all four dimensions and all products and services across the organization |
| **Improve** | To ensure **continual improvement** of products, services and practices across all value chain activities and the four dimensions of service management |
| **Engage** | To provide a good **understanding of stakeholder needs**, transparency, and continual engagement and good **relationships with all stakeholders** |
| **Design and transition** | To ensure that products and services **continually meet stakeholder expectations for quality, costs and time to market** |
| **Obtain/build** | To ensure that **service components are available when and where they are needed**, and meet agreed specifications |
| **Deliver and support** | To ensure that services are **delivered and supported according to agreed specifications** and stakeholders' expectations |

> **Remember:** "**PIE DOD**": **P**lan, **I**mprove, **E**ngage, **D**esign and transition, **O**btain/build, **D**eliver and support.

```
             ┌────────── PLAN ──────────┐
             │                          │
 DEMAND ──► ENGAGE ◄──► DESIGN &       OBTAIN/   ◄──►  DELIVER &  ──► VALUE
             │         TRANSITION     BUILD            SUPPORT
             │                          │
             └───────── IMPROVE ────────┘
     (every activity can interact with every other activity)
```

### Key characteristics

- The activities are **interconnected**. Each activity can exchange inputs and outputs with any other. There is **no fixed sequence**.
- Each activity **transforms inputs into outputs** using **practices**, internal and external resources, and other activities.
- **Engage** is the main interface with stakeholders outside the organization, including customers, users and suppliers. The value chain receives **demand** through **engage** and returns **value** through it.
- Every activity uses a **combination of practices**. No single practice belongs to only one activity.

> **Exam tip:** the phrase "**when and where they are needed**" belongs to **obtain/build**. "**Quality, costs and time to market**" belongs to **design and transition**. "**Shared understanding of the vision, current status and improvement direction**" belongs to **plan**. These phrases are the most frequently tested value chain wording.

---

## 5.2 Each Activity in More Detail

### Plan

| Key inputs | Key outputs |
|---|---|
| Policies, requirements and constraints from the **governing body** | Strategic, tactical and operational **plans** |
| Consolidated demands and opportunities from **engage** | **Portfolio decisions** for design and transition |
| Value chain performance information, improvement status reports and improvement initiatives from **improve** | **Architectures and policies** for design and transition |
| Knowledge and information about new and changed products and services from **design and transition** and **obtain/build** | **Improvement opportunities** for improve |
| Knowledge and information about third-party service components from **engage** | **Product and service portfolio** for engage; contract and agreement requirements for engage |

### Improve

| Key inputs | Key outputs |
|---|---|
| Product and service performance information from **deliver and support** | **Improvement initiatives** for all value chain activities |
| Stakeholder feedback from **engage** | Value chain performance information for plan and the governing body |
| Performance information and improvement opportunities from **all activities** | Improvement status reports for all activities |
| Knowledge and information about new and changed products and services from **design and transition** and **obtain/build** | Contract and agreement requirements for engage; service performance information for design and transition |

### Engage

| Key inputs | Key outputs |
|---|---|
| Product and service portfolio from **plan** | Consolidated demands and opportunities for plan |
| High-level **demand** for services and products from internal and external customers | Product and service requirements for design and transition |
| Detailed requirements from customers | User support tasks for deliver and support |
| **Requests and feedback** from customers | Improvement opportunities and stakeholder feedback for improve |
| **Incidents, service requests and feedback** from users | Change or project initiation requests for obtain/build |
| Information on the completion of user support tasks from **deliver and support** | Contract and agreement requirements for design and transition and for obtain/build |
| Marketing opportunities from current and potential customers and users | Knowledge and information about third-party service components for all activities |
| Cooperation opportunities and feedback from partners and suppliers | Service performance reports for customers |
| Contract and agreement requirements from all activities | |
| Knowledge and information about new and changed products and services from **design and transition** and **obtain/build** | |
| Knowledge and information about third-party service components from suppliers and partners | |
| Product and service performance information from **deliver and support** | |
| Improvement initiatives and status reports from **improve** | |

### Design and transition

| Key inputs | Key outputs |
|---|---|
| Portfolio decisions from **plan** | Requirements and specifications for **obtain/build** |
| Architectures and policies from **plan** | **New and changed products and services** for deliver and support |
| Product and service requirements from **engage** | Knowledge and information about new and changed products and services for all activities |
| Improvement initiatives from **improve** | Performance information and improvement opportunities for improve |
| Service performance information from **deliver and support** and **improve** | Contract and agreement requirements for engage |
| Service components from **obtain/build** | |
| Knowledge and information about third-party service components from **engage** | |
| Contract and agreement requirements from **engage** | |

### Obtain/build

| Key inputs | Key outputs |
|---|---|
| Architectures and policies from **plan** | **Service components** for design and transition, and for deliver and support |
| Contract and agreement requirements from **engage** | Knowledge and information about new and changed service components for all activities |
| Goods and services provided by **external and internal suppliers and partners** | Contract and agreement requirements for engage |
| Requirements and specifications from **design and transition** | Performance information and improvement opportunities for improve |
| Improvement initiatives from **improve** | |
| Change requests from **deliver and support** and **engage** | |
| Knowledge and information about new and changed products and services from **design and transition** | |

### Deliver and support

| Key inputs | Key outputs |
|---|---|
| New and changed products and services from **design and transition** | **Services delivered** to customers and users |
| Service components from **obtain/build** | Information on the **completion of user support tasks** for engage |
| Improvement initiatives from **improve** | **Product and service performance information** for engage and improve |
| Improvement status reports from **improve** | Improvement opportunities for improve |
| **User support tasks** from **engage** | Contract and agreement requirements for engage |
| Knowledge and information about new and changed service components and services from **design and transition** and **obtain/build** | **Change requests** for obtain/build |
| Knowledge and information about third-party service components from **engage** | Service performance information for design and transition |

> **Exam tip:** you do not need to memorise every input and output. Know the **purpose** of each activity and a few **distinctive** inputs and outputs. For example: *governing body policies* go into **plan**; *incidents and service requests from users* come in through **engage**; *goods and services from suppliers* go into **obtain/build**; *new and changed products and services* flow from **design and transition** to **deliver and support**.

---

## 5.3 Value Streams: Putting the Value Chain to Work

A **value stream** (Chapter 3) is a specific **combination of value chain activities and practices** designed for a particular scenario. The value chain is the generic model. Value streams are its **concrete applications**.

### Example 1: restoring a live service after a user reports an incident

| Step | Value chain activity | Practices used |
|---|---|---|
| User contacts the service desk about a failure | **Engage** | Service desk, incident management |
| The issue is logged, classified, matched to a known error and the workaround is applied, or it is escalated | **Deliver and support** | Incident management, knowledge management, problem management |
| A fix requires replacing a faulty component | **Obtain/build** | IT asset management, supplier management, change enablement |
| The fix is tested and released | **Design and transition** | Service validation and testing, release management, deployment management |
| The service is restored and the user confirms | **Deliver and support** → **Engage** | Incident management, service desk |
| Trends are reviewed to prevent recurrence | **Improve** | Problem management, continual improvement |

### Example 2: developing a new feature requested by a customer

| Step | Value chain activity | Practices used |
|---|---|---|
| Customer requests a new mobile feature | **Engage** | Relationship management, business analysis |
| The request is assessed against strategy and the portfolio | **Plan** | Portfolio management, strategy management |
| The feature is designed with users | **Design and transition** | Service design, architecture management |
| The feature is coded and tested | **Obtain/build** | Software development and management, service validation and testing |
| The feature is released and deployed | **Design and transition** | Change enablement, release management, deployment management |
| Users adopt the feature with support | **Deliver and support** | Service desk, incident management |
| Feedback is collected and next steps planned | **Engage** → **Improve** | Relationship management, continual improvement |

> **Remember:** the **same activity can appear several times** in a value stream. The order is determined by the **scenario**, not by the model.

---

## 5.4 Continual Improvement

Continual improvement appears in ITIL 4 in **three places**:

1. as a **component of the SVS**, a recurring organizational activity at all levels
2. as the **improve** activity in the service value chain
3. as a **general management practice** (Chapter 6)

It takes place **in all areas of the organization and at all levels**, from strategic to operational. Everyone contributes to continual improvement, although some organizations also have a dedicated team.

### The continual improvement model

The model provides a structured approach to improvement. It is **iterative** and can be applied to anything from the whole organization to a single process or service.

| Step | Question | What happens |
|---|---|---|
| 1 | **What is the vision?** | Define the vision and objectives of the initiative, aligned with the organization's **vision, mission, goals and objectives**. Understand the business context |
| 2 | **Where are we now?** | Conduct a **baseline assessment** of the current state: services, practices, the four dimensions, culture and capabilities. Measure objectively |
| 3 | **Where do we want to be?** | Define the **target state** with **measurable targets**, based on the vision and the gap analysis. Typically uses **critical success factors (CSFs)** and **key performance indicators (KPIs)** |
| 4 | **How do we get there?** | Define the **improvement plan**. This may be a single initiative or a series of iterations. Consider options, risks and resources |
| 5 | **Take action** | **Execute the plan**, often iteratively, for example through Agile sprints or a project. Remain open to change and manage risks |
| 6 | **Did we get there?** | **Measure** results against the targets. Check that the expected **value** has been achieved, not only that the plan was executed |
| 7 | **How do we keep the momentum going?** | **Embed** the change, through organizational change management, communication and recognition. Celebrate success, record lessons learned and identify the next opportunities. If targets were missed, analyse why and plan further improvement |

> **Remember:** after step 6, if the targets were *not* reached, the organization loops back to earlier steps to understand why. After step 7, the cycle starts again with new opportunities. Improvement never ends.

**Example: improving the service desk**

1. *Vision:* "Users get their issues resolved quickly and positively at the first contact," which supports the company goal of employee productivity.
2. *Current state:* first-contact resolution is 48%, satisfaction is 3.2 out of 5 and the knowledge base is outdated.
3. *Target:* first-contact resolution of 65% and satisfaction of 4.0 within six months.
4. *Plan:* refresh the 50 most-used knowledge articles, add remote-assist tooling and train agents on the top ten issues, in three monthly iterations.
5. *Take action:* deliver iteration 1, gather feedback and adjust.
6. *Measure:* after six months, first-contact resolution is 62% and satisfaction is 4.1. Satisfaction met its target, while first-contact resolution narrowly missed and is analysed.
7. *Momentum:* publish results, recognise contributors, embed knowledge article ownership in job descriptions and log new improvement ideas.

### The continual improvement register (CIR)

A **continual improvement register** is a database or structured document used to **track and manage improvement ideas** from identification through to final action.

- Ideas are **recorded, prioritised, assessed** and progressed.
- There can be several CIRs, at organizational, team and practice levels.
- It provides **visibility**, an application of *collaborate and promote visibility*.

### Approaches that support continual improvement

Organizations often combine methods such as **Lean** (waste reduction and flow), **Agile** (iterative delivery), **DevOps** (fast feedback between development and operations), **Six Sigma**, the **Deming cycle (PDCA)**, **SWOT analysis**, **balanced scorecards**, **maturity assessments** and **value stream mapping**. ITIL recommends a **small number of key methods** chosen to suit the organization, rather than adopting many at once.

---

## 5.5 The SVS in Action: Putting Chapters 4 and 5 Together

| SVS component | How it shows up in a real improvement, for example "reduce change failures" |
|---|---|
| **Opportunity and demand** | Business complaints about outages caused by failed changes |
| **Governance** | The board directs a lower risk appetite for customer-facing services and monitors progress |
| **Guiding principles** | *Start where you are* (analyse the last 50 failed changes); *keep it simple* (simplify the change form); *optimize and automate* (automated testing in the pipeline) |
| **Value chain** | **Plan** (prioritise), **Improve** (initiative), **Design and transition** (new test approach), **Deliver and support** (monitor results) |
| **Practices** | Change enablement, service validation and testing, deployment management, problem management |
| **Continual improvement** | The CI model guides the initiative and the CIR tracks it |
| **Value** | Fewer outages, faster safe change and higher customer trust |

---

## Key Takeaways: Chapter 5

- The **service value chain** has six activities: **plan, improve, engage, design and transition, obtain/build, deliver and support**. They are interconnected and have **no fixed order**.
- Purpose wording to recognise:
  - **Plan:** shared understanding of vision, current status and improvement direction
  - **Improve:** continual improvement of products, services and practices
  - **Engage:** understanding of stakeholder needs, transparency and good relationships
  - **Design and transition:** meet expectations for **quality, costs and time to market**
  - **Obtain/build:** components available **when and where needed**, meeting specifications
  - **Deliver and support:** delivered and supported according to agreed specifications
- **Engage** is the interface for demand, requests, incidents and feedback.
- **Value streams** are specific combinations of value chain activities and practices for a scenario.
- Continual improvement is an **SVS component**, a **value chain activity** and a **practice**. It happens at **all levels**.
- **Continual improvement model:** vision → where are we now → where do we want to be → how do we get there → take action → did we get there → how do we keep the momentum going.
- The **CIR** tracks improvement ideas from identification to action.

---

## Check Your Knowledge: Chapter 5

*Answers are in Appendix A.*

**Multiple choice**

**5.1** What is the purpose of the *obtain/build* value chain activity?

- A) To ensure that service components are available when and where they are needed, and meet agreed specifications
- B) To ensure that products and services continually meet stakeholder expectations for quality, costs and time to market
- C) To ensure that services are delivered and supported according to agreed specifications
- D) To provide a good understanding of stakeholder needs

**5.2** What is the purpose of the *design and transition* value chain activity?

- A) To ensure a shared understanding of the vision, current status and improvement direction
- B) To ensure that products and services continually meet stakeholder expectations for quality, costs and time to market
- C) To ensure continual improvement of products, services and practices
- D) To ensure that service components are available when and where they are needed

**5.3** Which value chain activity ensures a shared understanding of the vision, current status and improvement direction for all four dimensions and all products and services?

- A) Improve
- B) Engage
- C) Plan
- D) Design and transition

**5.4** Which value chain activity is the main point of interaction with users who report incidents and make service requests?

- A) Deliver and support
- B) Engage
- C) Plan
- D) Obtain/build

**5.5** Which statement about the service value chain is correct?

- A) The activities must always be performed in the order plan, engage, design and transition, obtain/build, deliver and support, improve
- B) Each activity can interact with any other activity, and value streams combine activities in different sequences
- C) Each practice belongs to exactly one value chain activity
- D) Only the deliver and support activity creates value

**5.6** Which value chain activity receives policies, requirements and constraints from the governing body as a key input?

- A) Plan
- B) Engage
- C) Improve
- D) Deliver and support

**5.7** Which step of the continual improvement model involves a baseline assessment?

- A) What is the vision?
- B) Where are we now?
- C) Where do we want to be?
- D) Did we get there?

**5.8** Which step of the continual improvement model defines measurable targets?

- A) Where are we now?
- B) Where do we want to be?
- C) How do we get there?
- D) Take action

**5.9** What is the purpose of a *continual improvement register* (CIR)?

- A) To record all incidents and their resolutions
- B) To track and manage improvement ideas from identification through to final action
- C) To record changes approved by the change authority
- D) To store configuration items and their relationships

**5.10** Who is responsible for continual improvement in an organization?

- A) Only the continual improvement team
- B) Only the governing body
- C) Everyone in the organization, although a dedicated team may lead and coordinate
- D) External consultants

**5.11** In which step of the continual improvement model is the organization most likely to use organizational change management to embed the change and celebrate success?

- A) How do we get there?
- B) Take action
- C) Did we get there?
- D) How do we keep the momentum going?

**5.12** Which value chain activity has *new and changed products and services* from design and transition as a key input?

- A) Plan
- B) Engage
- C) Deliver and support
- D) Improve

**Short answer**

**5.13** Describe a value stream for "a user requests and receives a new software application". Name the value chain activities involved, in order, and at least one practice used at each step.

**5.14** Explain the difference between the service value chain and a value stream.

**5.15** Explain why step 6 of the continual improvement model ("Did we get there?") checks *value* and not only completion of the plan.

**5.16** Name the three ways in which continual improvement appears in ITIL 4.

---


# Part III: ITIL Practices

---

# Chapter 6: General Management Practices

**Suggested study time:** 2 hours (Day 3)

**Learning objectives.** After this chapter you should be able to:

- list the 34 ITIL practices by group
- recall the **purpose** of the four Foundation-examinable general management practices: continual improvement, information security management, relationship management and supplier management
- explain the **continual improvement practice** in detail
- describe the purpose and key ideas of the other ten general management practices

---

## 6.1 The 34 ITIL 4 Practices

| General management practices (14) | Service management practices (17) | Technical management practices (3) |
|---|---|---|
| Architecture management | Availability management | Deployment management |
| **Continual improvement** ★ | Business analysis | Infrastructure and platform management |
| **Information security management** ☆ | Capacity and performance management | Software development and management |
| Knowledge management | **Change enablement** ★ (formerly "change control") | |
| Measurement and reporting | **Incident management** ★ | |
| Organizational change management | **IT asset management** ☆ | |
| Portfolio management | **Monitoring and event management** ☆ | |
| Project management | **Problem management** ★ | |
| **Relationship management** ☆ | **Release management** ☆ | |
| Risk management | Service catalogue management | |
| Service financial management | **Service configuration management** ☆ | |
| Strategy management | Service continuity management | |
| **Supplier management** ☆ | Service design | |
| Workforce and talent management | **Service desk** ★ | |
| | **Service level management** ★ | |
| | **Service request management** ★ | |
| | Service validation and testing | |

★ = examined at Foundation in **detail** (7 practices). ☆ = examined for **purpose** only (the remaining 8 of the 15 Foundation practices). **Deployment management** (technical) is also a ☆ purpose-only practice.

> **Exam tip:** the ITIL 4 Foundation exam expects you to **recall the purpose of 15 practices** and **explain 7 practices in detail**. The 15 are: continual improvement, information security management, relationship management, supplier management, IT asset management, monitoring and event management, release management, service configuration management, deployment management, change enablement, incident management, problem management, service request management, service desk and service level management. The 7 in detail are: **continual improvement, change enablement, incident management, problem management, service request management, service desk and service level management**.

### Practices are more than processes

In the ITIL 4 practice guides, each practice is described through **all four dimensions**: its processes and value stream contribution, its roles and competencies, the information and technology it needs, and the partners and suppliers involved. Each guide also defines **practice success factors (PSFs)** and key metrics. A practice contributes to **several value chain activities**, so it is not tied to one stage.

---

## 6.2 Continual Improvement ★

**Purpose:** "to align the organization's practices and services with changing business needs through the ongoing improvement of products, services, and practices, or any element involved in the management of products and services."

### Key activities

- **Encouraging** continual improvement across the organization
- **Securing time and budget** for continual improvement
- **Identifying and logging** improvement opportunities
- **Assessing and prioritising** improvement opportunities
- **Making business cases** for improvement action
- **Planning and implementing** improvements
- **Measuring and evaluating** improvement results
- **Coordinating** improvement activities across the organization

### Key points

- **Everyone is responsible** for continual improvement. Organizations may also have a **dedicated team** to lead, coordinate and promote it. Its members act as coaches and champions.
- Improvement should be part of **everyone's job**, and time must be explicitly allowed for it. If people are always busy with urgent operational work, improvement never happens.
- Use **a small number of key improvement methods** that suit the organization and its improvement types, rather than many methods at once. Common methods and techniques include Lean, Agile and DevOps approaches, **SWOT analysis**, **balanced scorecard reviews**, **maturity assessments**, gap analysis and **benchmarking**.
- **Suppliers and partners** contribute too. Contracts should include requirements for **measurement, reporting and improvement**.
- The **continual improvement register (CIR)** records and tracks improvement ideas.
- **Improvement initiatives often use the continual improvement model** (Chapter 5) and must be **driven by value**.
- Improvements are made to **all four dimensions**, not just processes and tools.

> **In practice:** a mature organization holds a monthly "improvement review". Each team presents its top CIR items. Leadership allocates a fixed proportion of capacity to improvement work, for example 10–20% of each sprint, and results are made visible on a dashboard.

---

## 6.3 Information Security Management ☆

**Purpose:** "to protect the information needed by the organization to conduct its business."

This includes understanding and managing risks to:

| Aspect | Meaning | Example control |
|---|---|---|
| **Confidentiality** | Information is accessible only to those authorised | Encryption, access control |
| **Integrity** | Information is accurate, complete and protected from unauthorised change | Checksums, change control, segregation of duties |
| **Availability** | Information is accessible when needed | Redundancy, backups, DDoS protection |
| **Authentication** | Making sure someone is who they claim to be | Passwords, multi-factor authentication (MFA), certificates |
| **Non-repudiation** | Making sure someone cannot deny that they took an action | Digital signatures, audit logs |

### Key points

- Security requires a **balance of prevention, detection and correction**:
  - **Prevention:** stopping incidents from happening, for example patching and firewalls
  - **Detection:** quickly identifying incidents that cannot be prevented, for example intrusion detection and log monitoring
  - **Correction:** recovering from incidents, for example restoring from backup and revoking credentials
- Security also requires **balancing protection against innovation**. Overly restrictive controls push people to find workarounds and stifle the organization.
- Security involves **all four dimensions**: people and culture, information and technology, suppliers, and processes. Policies, procedures and controls must be understood by everyone. Security awareness training is essential.
- It is often implemented through an **information security management system (ISMS)**, typically aligned with **ISO/IEC 27001**.

---

## 6.4 Relationship Management ☆

**Purpose:** "to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels."

It includes the **identification, analysis, monitoring and continual improvement of relationships** with and between stakeholders.

### Key activities

- Identifying, analysing and understanding **stakeholders' needs, drivers and priorities**
- Making sure **priorities for new or changed services** are established and articulated
- Making sure stakeholders' **complaints and escalations** are handled well
- Making sure the organization's products and services **facilitate value** for stakeholders
- **Mediating conflicting stakeholder requirements**
- Building trust, measuring satisfaction and **fostering long-term partnership**

### Key points

- Relationship management works at **strategic and tactical** levels. Operational interactions, such as individual tickets, are handled by other practices like the service desk and service level management.
- The **business relationship manager (BRM)** is a common role. It acts as a strategic partner to business units: it understands their goals and brings IT opportunities to them.
- In ITIL v3 the equivalent process was **business relationship management** (Service Strategy). In ISO/IEC 20000-1:2018 it is clause **8.3.2**.

---

## 6.5 Supplier Management ☆

**Purpose:** "to ensure that the organization's suppliers and their performances are managed appropriately to support the seamless provision of quality products and services."

This includes creating **closer, more collaborative relationships with key suppliers** to uncover and realise new value and reduce the risk of failure.

### Key activities

- Creating a **single point of visibility and control** to ensure consistency
- Maintaining a **supplier strategy, policy, and contract management information**
- **Negotiating and agreeing contracts** and arrangements
- **Managing relationships and contracts** with internal and external suppliers
- **Managing supplier performance**

### The supplier management lifecycle

1. **Supplier planning:** define the sourcing strategy and requirements.
2. **Evaluation and selection:** assess capability, financial stability, references, security and culture fit.
3. **Negotiation and contracting:** agree scope, service levels, price, responsibilities and exit terms.
4. **Categorisation and relationship management:** for example *strategic*, *tactical*, *operational* or *commodity* suppliers, each with appropriate attention.
5. **Performance management:** run regular reviews against service level targets and handle disputes.
6. **Renewal or termination:** review the ongoing need, value and alternatives, and manage exit and transition.

### Sourcing models

| Model | Description |
|---|---|
| **Insourcing** | Using internal resources to design, develop, deliver and maintain services |
| **Outsourcing** | Using an external supplier to provide services or service components |
| **Single-source or partnership** | One supplier provides all services, often as a close partner |
| **Multi-sourcing** | Several suppliers provide different parts of the service. This usually requires **SIAM** to integrate them |

> **Exam tip:** supplier management deals with **suppliers**, the organizations that provide goods and services *to* us. Relationship management deals mainly with **stakeholders**, especially customers and business units. Do not confuse them.

---

## 6.6 The Other Ten General Management Practices

These are not examined in detail at Foundation level, but you need them for real-world understanding, higher-level exams and ISO/IEC 20000 mapping.

### Architecture management

**Purpose:** to provide an understanding of all the different elements that make up an organization and how those elements interrelate, enabling the organization to achieve its current and future objectives effectively.

It covers these architecture domains: **business**, **service**, **information systems** (data and applications), **technology** and **environmental** (the external context). It produces a *current-state* architecture, a *target-state* architecture and a *roadmap* between them.

### Knowledge management

**Purpose:** to maintain and improve the effective, efficient and convenient use of information and knowledge across the organization.

- **DIKW model:** **D**ata (raw facts) → **I**nformation (data in context) → **K**nowledge (information combined with experience and judgement) → **W**isdom (applying knowledge to make good decisions).
- **Explicit knowledge** can be written down, as in manuals and articles. **Tacit knowledge** lives in people's heads and experience and is hard to document. It is shared through mentoring, collaboration and communities of practice.
- Knowledge must be **relevant, accurate, accessible and current**. Outdated knowledge is dangerous.
- **Knowledge-Centered Service (KCS)** is a popular method in which knowledge articles are captured and improved as part of handling each issue.

### Measurement and reporting

**Purpose:** to support good decision-making and continual improvement by **decreasing the levels of uncertainty**.

- It collects relevant data on objects of measurement, assesses it and reports in a way that supports decisions.
- Key concepts include **critical success factors (CSFs)**, the conditions that must be met for an objective to succeed, and **key performance indicators (KPIs)**, the metrics used to evaluate success. See Chapter 15.
- Beware: measurement changes behaviour, and what gets measured gets managed. Badly chosen metrics drive the wrong behaviour.

### Organizational change management

**Purpose:** to ensure that changes in an organization are smoothly and successfully implemented, and that lasting benefits are achieved by managing the **human aspects** of the changes.

- It addresses resistance, sponsorship, communication, training, stakeholder management and reinforcement.
- It is distinct from **change enablement**, which manages the risk of changes to services and technology.
- It often uses models such as Kotter's eight steps or ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement).

> **Exam tip:** **organizational change management** deals with **people** and the human side of change. **Change enablement** deals with **changes to services and configuration items**. The names are similar, so read questions carefully.

### Portfolio management

**Purpose:** to ensure that the organization has the **right mix of programmes, projects, products and services** to execute the organization's strategy within its funding and resource constraints.

- Portfolios include the **product and service portfolio**, the **project portfolio** and the **customer portfolio**.
- The **service portfolio** (an ITIL v3 concept that is still widely used) has three parts:
  - **Service pipeline:** services under consideration or in development
  - **Service catalogue:** live services and those available for deployment
  - **Retired services:** services that have been phased out

### Project management

**Purpose:** to ensure that all the organization's projects are successfully delivered.

- It covers planning, delegating, monitoring and maintaining control of all aspects of a project, and keeping the people involved motivated.
- Approaches include **waterfall**, which is sequential and suits stable, well-known requirements, and **Agile**, which is iterative and suits uncertain or evolving requirements.

### Risk management

**Purpose:** to ensure that the organization **understands and effectively handles risks**.

The risk management cycle:

1. **Identify** risks: what could happen, and why?
2. **Assess** risks: **likelihood** × **impact**, often on a risk matrix.
3. **Treat** risks. There are four classic options:

| Option | Meaning | IT example |
|---|---|---|
| **Avoid** | Stop the activity that creates the risk | Do not launch an insecure legacy feature |
| **Reduce (mitigate)** | Lower the likelihood or impact | Add redundancy; apply patches |
| **Transfer (share)** | Move the impact to a third party | Cyber insurance; outsourcing to a provider with liability clauses |
| **Accept** | Consciously accept the risk, usually with monitoring | Accept a minor risk where the cost of the control exceeds the benefit |

4. **Monitor and review** risks and controls, usually through a **risk register**.

**Risk appetite** is the amount of risk an organization is willing to accept in pursuit of its objectives. It is set by the governing body. ISO 31000 provides guidelines.

### Service financial management

**Purpose:** to support the organization's strategies and plans for service management by ensuring that the organization's **financial resources and investments are being used effectively**.

| Activity | Description |
|---|---|
| **Budgeting / costing** | Predicting and controlling the spending of money. Defines the cost of services |
| **Accounting** | Tracking actual spending against budgets, by service, customer or cost centre |
| **Charging** | Recovering costs from customers. This is **optional** for internal providers |

Related concepts:

- **CAPEX** (capital expenditure, such as buying servers) versus **OPEX** (operational expenditure, such as cloud subscriptions and salaries)
- **Total cost of ownership (TCO)**: all costs over an asset's life, including acquisition, operation, support and disposal
- **Chargeback** (internal customers are actually billed) versus **showback** (costs are reported to customers but not billed)

### Strategy management

**Purpose:** to formulate the goals of the organization and adopt the courses of action and allocation of resources necessary for achieving those goals.

It establishes the organization's **vision, mission, objectives and strategic position**, analyses the environment (for example with PESTLE and SWOT), and ensures that the strategy is implemented, reviewed and adjusted.

### Workforce and talent management

**Purpose:** to ensure that the organization has the **right people with the appropriate skills and knowledge and in the correct roles** to support its business objectives.

It covers workforce planning, recruitment, onboarding, learning and development, performance management, succession planning, competency frameworks, culture and employee engagement.

---

## 6.7 General Management Practices and Their ITIL v3 Equivalents

| ITIL 4 general management practice | Closest ITIL v3/2011 process | ISO/IEC 20000-1:2018 clause |
|---|---|---|
| Continual improvement | Seven-step improvement process (CSI) | 10.2 Continual improvement |
| Information security management | Information security management | 8.7.3 Information security management |
| Relationship management | Business relationship management | 8.3.2 Business relationship management |
| Supplier management | Supplier management | 8.3.4 Supplier management, 8.2.3 Control of parties |
| Service financial management | Financial management for IT services | 8.4.1 Budgeting and accounting for services |
| Portfolio management | Service portfolio management | 8.2 Service portfolio |
| Strategy management | Strategy management for IT services | 4 Context, 5 Leadership, 6 Planning |
| Knowledge management | Knowledge management | 7.6 Knowledge |
| Measurement and reporting | (CSI measurement and reporting) | 9.1 Monitoring and measurement, 9.4 Service reporting |
| Risk management | (integrated in several processes) | 6.1 Actions to address risks and opportunities |
| Workforce and talent management | (not a process) | 7.1 Resources, 7.2 Competence, 7.3 Awareness |
| Architecture management | (partly design coordination) | (no direct clause) |
| Organizational change management | (not a process; covered in Service Transition guidance) | 7.3 Awareness, 7.4 Communication |
| Project management | (Transition planning and support, partly) | 8.5.2 Service design and transition, partly |

---

## Key Takeaways: Chapter 6

- ITIL 4 has **34 practices**: **14 general**, **17 service** and **3 technical** management practices.
- **Foundation:** know the **purpose of 15** practices, and **7 in detail**.
- **Continual improvement** purpose: *align practices and services with changing business needs through ongoing improvement*. Everyone contributes. Use a small number of methods, and include suppliers.
- **Information security management** purpose: *protect the information needed by the organization to conduct its business*. It covers confidentiality, integrity, availability, authentication and non-repudiation, balancing prevention, detection and correction.
- **Relationship management** purpose: *establish and nurture links between the organization and its stakeholders at strategic and tactical levels*.
- **Supplier management** purpose: *ensure suppliers and their performances are managed appropriately to support the seamless provision of quality products and services*.
- **Risk treatment:** avoid, reduce, transfer, accept. **Organizational change management** handles the human side of change and is *not* change enablement.
- **Service financial management:** budgeting, accounting and (optionally) charging.

---

## Check Your Knowledge: Chapter 6

*Answers are in Appendix A.*

**Multiple choice**

**6.1** What is the purpose of the *information security management* practice?

- A) To protect the information needed by the organization to conduct its business
- B) To ensure that accurate information about the configuration of services is available
- C) To ensure that the organization's suppliers are managed appropriately
- D) To ensure that services achieve agreed and expected performance

**6.2** What is the purpose of the *relationship management* practice?

- A) To set clear business-based targets for service levels
- B) To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels
- C) To capture demand for incident resolution and service requests
- D) To manage the human aspects of organizational change

**6.3** What is the purpose of the *supplier management* practice?

- A) To ensure that the organization's suppliers and their performances are managed appropriately to support the seamless provision of quality products and services
- B) To negotiate the lowest possible price for all goods and services
- C) To establish and nurture links with customers
- D) To plan and manage the full lifecycle of all IT assets

**6.4** What is the purpose of the *continual improvement* practice?

- A) To ensure that the organization's projects are successfully delivered
- B) To align the organization's practices and services with changing business needs through the ongoing improvement of products, services, and practices
- C) To reduce the likelihood and impact of incidents
- D) To maximize the number of successful changes

**6.5** Which of the following is a key activity of the continual improvement practice?

- A) Authorising emergency changes
- B) Making business cases for improvement action
- C) Logging and classifying incidents
- D) Negotiating supplier contracts

**6.6** Which aspect of information security ensures that a person cannot deny having performed an action?

- A) Confidentiality
- B) Integrity
- C) Authentication
- D) Non-repudiation

**6.7** How many improvement methods does ITIL recommend an organization should use?

- A) As many as possible, to cover every situation
- B) Exactly one, used for every improvement
- C) A small number of key methods appropriate to the organization and the types of improvement it handles
- D) Only the methods prescribed by ISO/IEC 20000

**6.8** Which practice has the purpose of ensuring that the organization understands and effectively handles risks?

- A) Information security management
- B) Risk management
- C) Service continuity management
- D) Change enablement

**6.9** Which practice supports good decision-making and continual improvement by decreasing the levels of uncertainty?

- A) Knowledge management
- B) Measurement and reporting
- C) Strategy management
- D) Business analysis

**6.10** Which practice focuses on the *human aspects* of changes so that lasting benefits are achieved?

- A) Change enablement
- B) Organizational change management
- C) Release management
- D) Workforce and talent management

**6.11** An organization buys cyber-insurance to cover the financial impact of a data breach. Which risk treatment option is this?

- A) Avoid
- B) Reduce
- C) Transfer
- D) Accept

**6.12** Which practice ensures that the organization has the right mix of programmes, projects, products and services to execute its strategy within its funding and resource constraints?

- A) Portfolio management
- B) Project management
- C) Service financial management
- D) Strategy management

**6.13** An experienced engineer "just knows" how to recover a legacy system but has never written it down. What kind of knowledge is this?

- A) Explicit knowledge
- B) Tacit knowledge
- C) Data
- D) Information

**6.14** Which practice ensures that the organization has the right people with the appropriate skills and knowledge, in the correct roles?

- A) Workforce and talent management
- B) Relationship management
- C) Organizational change management
- D) Service desk

**6.15** In information security management, which combination of controls should an organization balance?

- A) Prevention, detection and correction
- B) Planning, building and running
- C) Avoidance, acceptance and transfer
- D) Evaluation, direction and monitoring

**Short answer**

**6.16** Explain the difference between relationship management and supplier management.

**6.17** List five key activities of the continual improvement practice.

**6.18** Describe the four risk treatment options, with an IT example of each.

**6.19** Explain the difference between *chargeback* and *showback*, and give one reason why an internal IT provider might choose each.

---


# Chapter 7: Service Management Practices I: Support and Operations

**Suggested study time:** 3 hours (Day 3 and the start of Day 4)

**Learning objectives.** After this chapter you should be able to:

- explain the **service desk**, **incident management**, **problem management** and **service request management** practices in detail
- recall the purpose of **monitoring and event management**, **IT asset management** and **service configuration management**
- define incident, problem, known error, workaround, service request, event, IT asset and configuration item
- prioritise incidents using impact and urgency
- distinguish incidents, problems, service requests and events

---

## 7.1 Service Desk ★

**Purpose:** "to capture demand for incident resolution and service requests. It should also be the entry point and single point of contact for the service provider with all of its users."

### Key points

- The service desk has a **major influence on user experience** and on how the service provider is perceived. For many users, the service desk *is* IT.
- With increased automation and self-service, the service desk focuses more on **supporting people and the business** than on purely technical issues. Simple, repetitive tasks are automated. Humans handle complex, sensitive and high-value interactions.
- Service desk staff need **empathy and emotional intelligence**. They must understand the user's situation and the business impact, not only the technical symptom.
- The service desk does **not** need to be highly technical. It needs a **broad understanding of the wider organization**, its business processes and its users, and it must be able to engage the right teams.
- It is the **single point of contact (SPOC)** for users. This does not mean a single physical place. It means one coordinated entry point.

### Channels of access

| Channel | Notes |
|---|---|
| **Phone calls** | Including interactive voice response (IVR), conference calls and voice recognition |
| **Service portals and mobile apps** | Supported by service and request catalogues and knowledge bases |
| **Live chat and chatbots** | Chatbots handle common requests and can hand over to humans |
| **Email** | For logging and updating, and for follow-up surveys and confirmations. Unstructured emails can be hard to triage |
| **Walk-in service desks** | For example "tech bars" and genius-bar style help points |
| **Text and social media messaging** | Useful for notifications and for sharing images or screenshots |
| **Public and corporate social media and discussion forums** | For contacting the provider and for peer-to-peer support |

### Service desk structures

| Model | Description | Pros and cons |
|---|---|---|
| **Local** | Located at or near the users it supports | Close to users and their language and culture. Expensive if there are many sites |
| **Centralized** | One service desk for the whole organization | Economies of scale and consistency. Less local knowledge |
| **Virtual** | Agents work from multiple, distributed locations (including home) but appear to users as **one service desk** | Flexible and resilient. Requires sophisticated technology and strong coordination |
| **Follow-the-sun** | Desks in different time zones hand over work to provide 24/7 coverage | Global coverage without night shifts. Hand-offs must be managed well |

> **Exam tip:** ITIL 4 Foundation states that a **virtual service desk** allows agents to work from multiple, geographically dispersed locations and **requires more sophisticated supporting technology**, with more complex routing and escalation.

### Supporting technology

- **Intelligent telephony systems:** computer-telephony integration (CTI), IVR and automatic call distribution
- **Workflow systems** for routing and escalation
- **Workforce management and resource planning systems**
- **Knowledge base**
- **Call recording and quality control**
- **Remote access tools**
- **Dashboards and monitoring tools**
- **Configuration management systems**

### Skills and competencies

- Customer service skills, **empathy** and **emotional intelligence**
- **Incident analysis and prioritisation**
- **Effective communication**, both verbal and written
- A broad understanding of the business, services and technology

### Useful service desk metrics

**First contact resolution (FCR)**, **average speed to answer (ASA)**, **abandonment rate**, **customer satisfaction (CSAT)**, **percentage resolved by the service desk**, **cost per contact**, and contacts handled by self-service. Organizations that **"shift left"** move resolution as close to the user as possible: self-service first, then the service desk, then specialist teams.

---

## 7.2 Incident Management ★

**Purpose:** "to minimize the negative impact of incidents by restoring normal service operation as quickly as possible."

**Incident:** "an unplanned interruption to a service or reduction in the quality of a service."

> **Remember:** a service that is merely **degraded**, for example slow, is also an incident. Restoring service is the goal, **not** finding the root cause. Root cause belongs to problem management.

### Key points

1. **Every incident should be logged and managed** so that it is resolved within a time that meets the expectations of the customer and user. **Target resolution times** are agreed, documented and communicated, so that expectations are realistic.
2. **Incidents are prioritised** based on an **agreed classification**, so that incidents with the highest business impact are resolved first.
3. **Different types of incident need different handling.** Low-impact incidents should be managed efficiently so they do not consume too many resources. Higher-impact incidents may need more resources and more complex management. There are usually **separate processes for major incidents** and for **information security incidents**.
4. **Incident records** should contain the symptoms, business impact, affected configuration items (CIs), actions completed and actions planned, each with a timestamp and the names of the people involved.
5. **Tools** should link incidents to CIs, changes, problems, known errors and other knowledge. This allows quick matching of incidents to known errors and workarounds. Modern tools use **AI and machine learning** to classify incidents and suggest resolutions.
6. **Collaboration** is essential. Information must flow freely between the service desk, support teams, suppliers and users.

### Who resolves incidents?

| Resolver | When |
|---|---|
| **Users themselves** | Through self-help, using known error records, knowledge articles or automated fixes |
| **The service desk** | For incidents that can be resolved with available knowledge and tools |
| **Support teams** | For more complex incidents that require specialist skills |
| **Suppliers or partners** | When the incident lies in a component they support |
| **Temporary teams ("swarming")** | For complex incidents that need several skills at once |
| **Disaster recovery plans** | In extreme cases, as part of service continuity management |

**Swarming** is a technique in which many different stakeholders **work together initially** until it becomes clear which of them is best placed to continue, and which can move on to other tasks. It replaces slow, linear escalation from one tier to the next.

### Prioritisation: impact and urgency

- **Impact:** the effect on the business, such as how many users or services are affected, financial loss, safety and reputation.
- **Urgency:** how quickly the business needs a resolution, for example whether a workaround exists or a deadline is approaching.
- **Priority** is derived from impact and urgency.

| Impact ↓ / Urgency → | **High** | **Medium** | **Low** |
|---|---|---|---|
| **High** (many users or a critical service) | **P1 – Critical** | P2 – High | P3 – Medium |
| **Medium** (a department or an important function) | P2 – High | P3 – Medium | P4 – Low |
| **Low** (a single user, with a workaround) | P3 – Medium | P4 – Low | P5 – Planning |

*Example targets an organization might agree:* P1: response in 15 minutes and resolution in 4 hours. P2: 30 minutes and 8 hours. P3: 4 hours and 3 working days. These numbers are illustrative only. ITIL does not prescribe them.

### A typical incident workflow

1. **Detection or report:** by a user, through monitoring and event management, or by staff.
2. **Logging:** all incidents are recorded, with a timestamp.
3. **Categorisation:** by service, CI or type.
4. **Prioritisation:** by impact and urgency.
5. **Initial diagnosis:** check the knowledge base and known errors, and apply a workaround if one is available.
6. **Escalation, if needed.** **Functional escalation** passes the incident to a team with more specialist skills. **Hierarchical escalation** informs or involves management, for example when a target is at risk or extra resources are needed.
7. **Investigation and diagnosis.**
8. **Resolution and recovery**, which may require a change.
9. **Closure:** confirm with the user, finalise categorisation and update the record.

### Major incidents

A **major incident** has a significant business impact and needs an immediate, coordinated response. Typical features:

- a **separate procedure** with shorter timescales
- a designated **major incident manager**
- a dedicated, frequent **communication** plan for users, customers and management
- **swarming** and close supplier involvement
- a **major incident review** (post-incident review) after resolution, to capture lessons and identify improvements and problems

### Relationships with other practices

| Practice | Interface |
|---|---|
| Problem management | Recurring or major incidents trigger problem investigation. Known errors and workarounds help resolve incidents faster |
| Change enablement | A fix may require a change, often an emergency change. Failed changes can cause incidents |
| Service configuration management | CI data helps diagnosis and impact assessment |
| Knowledge management | Articles support resolution, and resolutions create knowledge |
| Monitoring and event management | Events can automatically create incidents |
| Service level management | Resolution targets come from SLAs, and incident data feeds SLA reports |
| Information security management | Security incidents follow specific procedures |
| Service continuity management | Disasters are handled through continuity plans |

---

## 7.3 Problem Management ★

**Purpose:** "to reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors."

### Key definitions

| Term | ITIL 4 definition |
|---|---|
| **Problem** | "A cause, or potential cause, of one or more incidents." |
| **Known error** | "A problem that has been analysed and has not been resolved." |
| **Workaround** | "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. Some workarounds reduce the likelihood of incidents." |

> **Remember:** **incidents** affect users and services *now*. **Problems** are their *causes*. Incident management restores service. Problem management prevents recurrence and reduces impact.

### The three phases of problem management

| Phase | What happens |
|---|---|
| **Problem identification** | Problems are found by **trend analysis of incident records**; **detection of duplicate and recurring issues** by users, service desk and technical support staff; identifying, **during major incident management**, a risk that the incident could recur; analysing information from **suppliers and partners**; and analysing information from internal **software developers, test teams and project teams** |
| **Problem control** | **Problem analysis**, and **documenting workarounds and known errors**. Problems are **prioritised for analysis based on the risk they pose**, meaning their potential impact and probability. Analysis should consider **all four dimensions**: causes are often a combination of factors, not just technology. Workarounds are documented in problem records at any stage. They do not need to wait for analysis to be complete. Early workarounds are reviewed and improved as analysis continues |
| **Error control** | **Manages known errors**. It identifies potential **permanent solutions**, which may result in a **change request**, but **only if this can be justified in terms of cost, risks and benefits**. It **regularly re-assesses** known errors that are not resolved, taking into account the overall impact on customers, the availability and cost of permanent resolutions, and the effectiveness of workarounds. It may also improve workarounds |

> **Exam tip:** a **known error is a problem that has been analysed but not resolved**. It is not "a problem with a known solution". Also note that error control raises a **change request**. Problem management does **not** implement fixes itself. The fix is made through **change enablement**.

### Reactive and proactive problem management

- **Reactive:** triggered by incidents that have already happened, for example after a major incident or a cluster of repeat incidents.
- **Proactive:** identifies potential problems **before** incidents occur, for example through trend analysis, supplier warnings, vulnerability reports and test results.

### Root cause analysis techniques

| Technique | How it works |
|---|---|
| **5 Whys** | Ask "why?" repeatedly, typically five times, until the root cause emerges |
| **Ishikawa (fishbone) diagram** | Group possible causes into categories (people, process, technology, suppliers, environment and so on) |
| **Kepner-Tregoe** | A structured analysis of what *is* and *is not* affected, to narrow down the cause |
| **Fault tree analysis** | Logic tree of the events that lead to a failure |
| **Pareto analysis** | Find the "vital few" causes that create most incidents (the 80/20 rule) |
| **Timeline / chronological analysis** | Build an exact sequence of events to find what changed |

### Relationships with other practices

| Practice | Interface |
|---|---|
| **Incident management** | The practices are distinct but closely linked. Incident data is the main input to problem identification. Known errors and workarounds help incident resolution |
| **Risk management** | Problems are risks: they are identified, assessed and treated in the same way |
| **Change enablement** | Permanent fixes are implemented through changes. Problem management also investigates **failed changes** as possible causes |
| **Knowledge management** | Known errors and workarounds are knowledge that must be available to the service desk and users |
| **Continual improvement** | Problem management finds improvement opportunities in all four dimensions, and these go into the CIR |

### Skills

Problem management needs **analytical and technical skills**, but also an understanding of the **whole service**, **collaboration** and the ability to work with **suppliers**. Many problems lie in supplier components or in the interplay of several teams.

> **In practice:** users report VPN disconnections every Monday morning. These are three incidents a week, each fixed by reconnecting, so they look like a minor nuisance. Problem identification spots the trend. Problem control analyses it and documents a workaround: connect after 09:15. A known error record is created. Analysis finds that a weekly certificate-revocation list update overloads the VPN gateway. Error control raises a change request to reschedule the update. Once the change succeeds, the problem is closed and the known error is retired.

---


## 7.4 Service Request Management ★

**Purpose:** "to support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner."

**Service request:** "a request from a user or a user's authorized representative that initiates a service action which has been agreed as a normal part of service delivery."

> **Remember:** a service request is **normal**. Nothing is broken. An incident means something is **not** working as it should. This is why they are handled by separate practices, even if the same tool and service desk record both.

### Types of service request

| Type | Examples |
|---|---|
| **Request for a service delivery action** | Provide a report; replace a toner cartridge |
| **Request for information** | How do I create a shared document? What are the service desk's hours? |
| **Request for provision of a resource or service** | Provide a phone or laptop to a user; provide a virtual server for a development team |
| **Request for access to a resource or service** | Give a user access to a file share or an application |
| **Feedback, compliments and complaints** | A complaint about a new interface; a compliment to the support team |

### Key points

- Fulfilment can involve **changes to services or their components**. These are usually **standard changes**: pre-authorised, low-risk and well understood.
- Some requests need **authorisation** under financial, information security or other policies. Others need none.
- Each request type should have a **predefined, agreed workflow**. Requests can be very simple, such as a password reset, or complex, such as onboarding a new employee. **Workflow templates** can be reused, so new request types can be added to the catalogue quickly.
- Requests are typically offered through a **service request catalogue**, usually on a **self-service portal**.

### Guidelines for successful service request management

1. Service requests and their fulfilment should be **standardised and automated to the greatest degree possible**.
2. **Policies** should establish which service requests will be fulfilled with **limited or no additional approvals**, so that fulfilment can be streamlined.
3. **Users' expectations about fulfilment times** should be clearly set, based on what the organization can realistically deliver.
4. **Opportunities for improvement** should be identified and implemented to produce faster fulfilment times and take advantage of automation.
5. **Policies and workflows** should be included for documenting and **redirecting** any requests that are submitted as service requests but should actually be managed as **incidents or changes**.

---

## 7.5 Monitoring and Event Management ☆

**Purpose:** "to systematically observe services and service components, and record and report selected changes of state identified as events. This practice identifies and prioritizes infrastructure, services, business processes, and information security events, and establishes the appropriate response to those events, including responding to conditions that could lead to potential faults or incidents."

**Event:** "any change of state that has significance for the management of a service or other configuration item (CI)." Events are usually recognised through **notifications** created by an IT service, a CI or a monitoring tool.

### Monitoring versus event management

- **Monitoring** focuses on the **systematic observation** of services and CIs to detect conditions of potential significance. It should be **automated** wherever possible. It can be **active**, where tools poll components, or **passive**, where components send notifications.
- **Event management** focuses on **recording and managing** those monitored changes of state that are defined as **events**. It determines their significance and identifies and starts the correct control action.

### Types of event

| Type | Meaning | Examples | Typical response |
|---|---|---|---|
| **Informational** | No action required, but useful for analysis | User logged in; nightly backup completed successfully | Log and analyse trends |
| **Warning** | Allows action to be taken **before** any negative impact occurs | Disk 80% full; response time approaching its threshold | Investigate or act proactively, for example clear space |
| **Exception** | A **breach of an established norm** has been identified. Action is required, and the business may already be affected | Server down; payment API returning errors; disk 100% full | Usually create an **incident** automatically |

### Key activities

- Plan **what** to monitor and **why**, linked to service and business needs. Avoid "monitor everything and drown in alerts".
- Define **thresholds** and rules for each event type.
- **Filter and correlate** events to reduce noise. AI-based operations (**AIOps**) increasingly helps here.
- Define and **automate responses**: create an incident, run a script, notify a team or trigger a change.
- Integrate with **incident**, **problem**, **availability**, **capacity and performance**, **information security** and **change enablement** practices.

---

## 7.6 IT Asset Management ☆

**Purpose:** "to plan and manage the full lifecycle of all IT assets, to help the organization:

- maximize value
- control costs
- manage risks
- support decision-making about purchase, re-use, retirement, and disposal of assets
- meet regulatory and contractual requirements."

**IT asset:** "any financially valuable component that can contribute to the delivery of an IT product or service."

### Scope

The scope typically covers hardware, software, networking, cloud services and client devices. In some organizations it also includes non-IT assets, such as buildings or information, when these have financial value and contribute to IT services.

### The IT asset lifecycle

**Plan → Request → Procure → Receive and deploy → Operate and maintain (move, add, change) → Retire → Dispose.**

Secure **data destruction** and **environmentally compliant disposal** are important final steps.

### Key points

- ITAM requires accurate **inventory information**, kept in an **asset register**, and regular **audits** to verify it.
- **Software asset management (SAM)** is a critical subset. It manages **licence compliance**, which is a serious financial and legal risk, as well as usage, renewals and vendor audits.
- ITAM supports **financial management** (cost and depreciation), **security** (unknown assets are unprotected assets), **change enablement** and **service configuration management**.

### Assets versus configuration items

| | Example |
|---|---|
| **Both an asset and a CI** | A production database server, which has financial value and must be controlled to deliver a service |
| **Asset but not necessarily a CI** | A spare laptop in the storeroom, or a monitor, if the organization does not manage it as a CI |
| **CI but not an asset** | An SLA document, a service design document or a business process, which must be controlled but has no financial value as an asset |

> **Exam tip:** **IT asset management** is about **financial value and lifecycle**: cost, licences, depreciation and disposal. **Service configuration management** is about **configuration and relationships**: how CIs are configured and depend on each other to deliver services.

---

## 7.7 Service Configuration Management ☆

**Purpose:** "to ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed. This includes information on how CIs are configured and the relationships between them."

**Configuration item (CI):** "any component that needs to be managed in order to deliver an IT service."

### Key terms

| Term | Meaning |
|---|---|
| **Configuration record** | A record containing the details of a CI. Each configuration record documents the lifecycle of a single CI |
| **Configuration management database (CMDB)** | A database used to store configuration records throughout their lifecycle |
| **Configuration management system (CMS)** | A set of tools, data and information used to support service configuration management. A CMS can include one or more CMDBs and federated data sources |
| **Relationships / service maps** | How CIs depend on each other. For example, the payroll service depends on an application, which depends on a database, which runs on a server in a data centre |
| **Baseline** | An agreed, reviewed snapshot of a configuration that is used as a reference point, for example before a release |

### Key points

- CIs can be **hardware, software, networks, buildings, people, suppliers, documentation**, and even **services** themselves.
- Configuration information is used by many practices:
  - **change enablement**, for impact and risk assessment of changes
  - **incident and problem management**, for diagnosis and finding affected services
  - **service level management**, availability and continuity, to understand dependencies
  - **financial management, IT asset management and information security management**
- **Collect only what is valuable.** The cost of collecting and maintaining configuration information must be **balanced against the value** it brings. Too much detail becomes impossible to keep accurate. Too little makes it useless.
- Accuracy is maintained by linking **every change** to configuration record updates, by **automated discovery** tools, and by regular **verification and audit**.
- ITIL v3 called this practice **service asset and configuration management (SACM)**. Its activities were planning, identification, control, status accounting, and verification and audit.

> **In practice:** before patching a database server, the change manager checks the CMS. It shows that the server supports the online shop, the warehouse system and the customer portal. The change is scheduled for the lowest-traffic window, and all three service owners are informed.

---

## 7.8 Comparing Events, Incidents, Problems, Service Requests and Changes

| | **Event** | **Incident** | **Problem** | **Service request** | **Change** |
|---|---|---|---|---|---|
| **What it is** | A significant change of state | An unplanned interruption or reduction in quality | A cause, or potential cause, of incidents | A user request for a normal, agreed service action | Addition, modification or removal of anything that could affect services |
| **Is something broken?** | Not necessarily | **Yes**, or it is degraded | Something will cause, or has caused, breakage | **No** | Not necessarily |
| **Goal** | Detect and respond | **Restore** service quickly | **Prevent** and reduce impact | **Fulfil** efficiently and in a user-friendly way | **Control risk** and enable value |
| **Example** | Disk 80% full (warning) | Email is down for the finance team | A memory leak in the email server software | "Please give me access to the HR folder" | Upgrade the email server software |
| **Practice** | Monitoring and event management | Incident management | Problem management | Service request management | Change enablement |

---

## Key Takeaways: Chapter 7

- **Service desk:** *captures demand for incident resolution and service requests*. It is the **entry point and single point of contact** for all users. It needs empathy and business understanding, uses many channels, and can be local, centralized, virtual or follow-the-sun.
- **Incident management:** *minimises the negative impact of incidents by restoring normal service operation as quickly as possible*. Log every incident, **prioritise by agreed classification (impact and urgency)**, use separate handling for major and security incidents, use **swarming** for complex cases and link records to CIs, problems and known errors.
- **Problem management:** *reduces the likelihood and impact of incidents* by identifying causes and managing **workarounds** and **known errors**. Its phases are **problem identification → problem control → error control**. A **known error is a problem that has been analysed and not resolved**. Fixes are made via **change requests** when they are justified by cost, risk and benefit.
- **Service request management:** handles **pre-defined, user-initiated** requests that are a **normal part of service delivery**. Standardise and automate, set realistic expectations and use policies for approvals.
- **Monitoring and event management:** systematically observes services and records significant **events**. The event types are **informational, warning and exception**.
- **IT asset management:** manages the **full lifecycle** of IT assets for value, cost, risk, decisions and compliance. An IT asset is a **financially valuable component**.
- **Service configuration management:** makes accurate **CI and relationship** information available when and where needed. Balance detail against value.

---

## Check Your Knowledge: Chapter 7

*Answers are in Appendix A.*

**Multiple choice**

**7.1** What is the purpose of the *service desk* practice?

- A) To restore normal service operation as quickly as possible
- B) To capture demand for incident resolution and service requests, and to be the entry point and single point of contact for the service provider with all of its users
- C) To handle all pre-defined, user-initiated service requests
- D) To set clear business-based targets for service levels

**7.2** Which statement about the service desk is correct?

- A) Service desk staff must be highly technical experts
- B) The service desk should understand the wider organization, its business processes and its users, and needs empathy and emotional intelligence
- C) The service desk must always be located in a single physical location
- D) With automation, the service desk is no longer needed

**7.3** What is an *incident*?

- A) A cause, or potential cause, of one or more incidents
- B) An unplanned interruption to a service or reduction in the quality of a service
- C) Any change of state that has significance for the management of a service
- D) A request from a user that initiates a service action

**7.4** What is the purpose of *incident management*?

- A) To reduce the likelihood and impact of incidents by identifying their causes
- B) To minimize the negative impact of incidents by restoring normal service operation as quickly as possible
- C) To capture demand for incident resolution
- D) To ensure that incidents never occur

**7.5** Which technique involves many different stakeholders working together initially, until it becomes clear which of them is best placed to continue?

- A) Escalation
- B) Swarming
- C) Triage
- D) Follow-the-sun

**7.6** How should incidents be prioritised?

- A) In the order in which they are reported
- B) Based on an agreed classification, so that incidents with the highest business impact are resolved first
- C) Based on the seniority of the person reporting
- D) Based on which support team is available

**7.7** What is a *known error*?

- A) A problem that has been analysed and has not been resolved
- B) An incident that has been resolved
- C) A problem with a permanent solution that has already been implemented
- D) An error in the service desk procedures

**7.8** Which phase of problem management includes performing trend analysis of incident records?

- A) Problem identification
- B) Problem control
- C) Error control
- D) Incident control

**7.9** Which phase of problem management includes problem analysis and documenting workarounds and known errors?

- A) Problem identification
- B) Problem control
- C) Error control
- D) Change control

**7.10** Which activity is part of *error control*?

- A) Detecting duplicate and recurring issues
- B) Identifying potential permanent solutions, which may result in a change request
- C) Logging and classifying incidents
- D) Approving changes

**7.11** What is a *workaround*?

- A) A permanent fix for a problem
- B) A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available
- C) A change implemented without authorisation
- D) A known error that has been closed

**7.12** What is the purpose of *service request management*?

- A) To support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner
- B) To capture demand for incident resolution and service requests
- C) To minimize the negative impact of incidents
- D) To maximize the number of successful changes

**7.13** Which of the following is a *service request*?

- A) The finance application crashes whenever a report is printed
- B) A user asks for access to the marketing team's shared folder
- C) The website responds very slowly for all customers
- D) A server's disk failure causes the payroll service to stop

**7.14** Which is a recommended guideline for service request management?

- A) Every service request should require approval by senior management
- B) Service requests and their fulfilment should be standardized and automated to the greatest degree possible
- C) Service requests should be handled as incidents
- D) Fulfilment times should not be communicated to users

**7.15** What is the purpose of *monitoring and event management*?

- A) To systematically observe services and service components, and record and report selected changes of state identified as events
- B) To ensure accurate information about CIs is available when and where needed
- C) To protect the information needed by the organization
- D) To make new and changed services available for use

**7.16** A monitoring tool reports that a disk is 80% full. A threshold of 95% is defined as critical. What type of event is this?

- A) Informational
- B) Warning
- C) Exception
- D) Incident

**7.17** What is an *IT asset*?

- A) Any component that needs to be managed in order to deliver an IT service
- B) Any financially valuable component that can contribute to the delivery of an IT product or service
- C) A version of a service made available for use
- D) A database used to store configuration records

**7.18** What is the purpose of *service configuration management*?

- A) To plan and manage the full lifecycle of all IT assets
- B) To ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed
- C) To move new or changed components to live environments
- D) To systematically observe services and service components

**7.19** What is a *configuration item*?

- A) Any component that needs to be managed in order to deliver an IT service
- B) Any financially valuable component
- C) Any change of state that has significance for the management of a service
- D) A record of a service request

**7.20** Users report that the email service is working but is much slower than usual. How should this be handled?

- A) As a service request, because email still works
- B) As an incident, because it is a reduction in the quality of a service
- C) As a problem, because the cause is unknown
- D) It should not be recorded until email stops working

**Short answer**

**7.21** Explain the difference between incident management and problem management, and describe two ways in which they interact.

**7.22** Using impact and urgency, suggest a priority for each of the following and justify it: (a) online payments are failing for all customers; (b) one user cannot print, but other printers nearby work; (c) the CEO's laptop is broken an hour before a board presentation, and a spare laptop is available.

**7.23** List the five types of service request, with an example of each.

**7.24** Explain why the level of detail held about configuration items should be balanced against the value of that information.

---


# Chapter 8: Design, Transition, Assurance and Technical Practices

**Suggested study time:** 3 hours (Day 4)

**Learning objectives.** After this chapter you should be able to:

- explain **change enablement** and **service level management** in detail
- recall the purpose of **release management** and **deployment management**
- describe the types of change, the change authority and the change schedule
- describe the four deployment approaches
- explain the requirements for good SLAs and the sources of SLM information
- describe the purpose and key ideas of availability, capacity and performance, service continuity, service catalogue, service design, business analysis, and service validation and testing
- describe the three technical management practices

---

## 8.1 Change Enablement ★

**Purpose:** "to maximize the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule."

> **A note on names:** the 2019 ITIL 4 Foundation book calls this practice **change control**. The ITIL 4 practice guides renamed it **change enablement**, the name used in current exams and in ITIL (Version 5). ITIL v3 called it **change management**, and so does ISO/IEC 20000-1 (clause 8.5.1). They are the same practice.

**Change:** "the addition, modification, or removal of anything that could have a direct or indirect effect on services."

### Scope

Each organization defines the scope of change enablement. It typically includes all **IT infrastructure, applications, documentation, processes, supplier relationships**, and anything else that might directly or indirectly affect a product or service.

It is **not** the same as **organizational change management**, which manages the **people** side of organizational change (Chapter 6).

### The core balance

Change enablement balances two needs:

1. the need to make **beneficial changes** that deliver additional value
2. the need to **protect customers and users** from the adverse effects of changes

Too much control creates bureaucracy and delay. Too little leads to failed changes and outages.

### Change authority

**Change authority:** "a person or group responsible for authorizing a change."

- It is essential to assign the **correct change authority to each type of change**, so that change enablement is both **efficient and effective**.
- In high-velocity organizations, authority is often **decentralised**. Low-risk changes can be authorised by **peer review** or by **automated checks** in a deployment pipeline.
- In ITIL v3, a **Change Advisory Board (CAB)** commonly advised the change manager, and an **Emergency CAB (ECAB)** handled emergencies. ITIL 4 does not make a CAB mandatory. A CAB-like group can still advise on high-risk changes, but it should not become a bottleneck for every change.

### The three types of change

| Type | Description | Authorisation | Examples |
|---|---|---|---|
| **Standard** | **Low-risk, pre-authorised** changes that are well understood and fully documented | **Pre-authorised.** They can be implemented without additional authorisation. A **full risk assessment** is done when the standard change procedure is **created or modified**, not every time it is used | Adding memory to a server using an approved procedure; installing approved software on a laptop; resetting a firewall rule from a template. They are often initiated as **service requests** |
| **Normal** | Changes that need to be **scheduled, assessed and authorised** following a process | **Change models** define who assesses and authorises each kind of change. **Low-risk** normal changes are authorised by someone who can make rapid decisions, often with **automation**. **Very major** changes may need authority as high as the **management board** | Upgrading a database platform; launching a new service; changing a core network |
| **Emergency** | Changes that **must be implemented as soon as possible**, for example to resolve an incident or implement a security patch | An **expedited** process. There may be a **separate emergency change authority**, typically a small number of senior managers who understand the business risks | Applying a critical security patch to an exploited vulnerability; an urgent fix for a P1 incident |

**More on emergency changes (frequently examined):**

- They are **not typically included in the change schedule** in advance.
- As far as possible, they should be subject to the **same testing, assessment and authorisation** as normal changes.
- It may be acceptable to **defer some documentation** until after implementation.
- Sometimes the change must be implemented with **less testing** because of time constraints. This is an explicit, accepted risk.

**How normal changes start.** A normal change is initiated by creating a **change request**. This can happen manually or **automatically**. In organizations with automated DevOps pipelines, much of the change enablement process may be automated.

### The change schedule

**Change schedule:** used "to help plan changes, assist in communication, avoid conflicts, and assign resources. It can also be used after changes have been deployed to provide information needed for incident management, problem management, and improvement planning."

> **In practice:** when a P1 incident starts, the first question the incident team asks is often "**what changed?**" The change schedule answers it. Many incidents are caused by recent changes.

### A typical normal change workflow

1. **Submit** a change request: what will change, why, the risks and the backout plan.
2. **Record** and filter it, rejecting incomplete or impractical requests.
3. **Assess:** risk, impact on services and CIs (using the CMS), resources, timing and business benefit.
4. **Authorise:** by the appropriate change authority.
5. **Schedule**, avoiding conflicts and business-critical periods.
6. **Build and test**, including **remediation (backout) plans**.
7. **Implement or deploy**, coordinated with release and deployment management.
8. **Review:** was it successful, and were there any unexpected effects? Close the change.

### Change enablement across the value chain

| Value chain activity | Contribution |
|---|---|
| **Plan** | Changes to portfolios, policies and practices |
| **Improve** | Many improvements require changes, and change data reveals improvement opportunities |
| **Engage** | Customers and users may need to be consulted about, or informed of, changes |
| **Design and transition** | Many changes come from new or changed services |
| **Obtain/build** | Changes to components |
| **Deliver and support** | Changes can affect live services. Support staff need change information |

### Useful metrics

Change **success rate**; number of changes causing incidents (the **change failure rate**); percentage of **emergency** changes; number of **unauthorised** changes; change **lead time**; backlog of change requests.

---

## 8.2 Release Management ☆

**Purpose:** "to make new and changed services and features available for use."

**Release:** "a version of a service or other configuration item, or a collection of configuration items, that is made available for use."

### Key points

- A release can include many **infrastructure and application components** that work together. It can also include **documentation**, **training** for users or staff, **updated processes or tools**, and any other required components. Components can come from internal teams or external suppliers.
- **Release planning** decides what goes into a release and when. A **release schedule** documents the timing of releases, agreed with customers and stakeholders.
- **Release post-implementation reviews** capture lessons for future releases.
- In **waterfall** environments, releases tend to be large and infrequent, and release and deployment usually happen together.
- In **Agile and DevOps** environments, releases are small and frequent, and are often **automated**. Release and deployment can be **separated**. Components may be deployed to production well before the release, for example hidden behind **feature toggles**, and then "released" by switching them on for users.

> **Remember:** **deployment** moves components into an environment, which is a *technical* step. **Release** makes features and services **available for use**, which is a *service and business* step. They can happen at different times.

---

## 8.3 Deployment Management ☆ (Technical Management Practice)

**Purpose:** "to move new or changed hardware, software, documentation, processes, or any other component to live environments. It may also be involved in deploying components to other environments for testing or staging."

### The four deployment approaches

| Approach | Description | When it fits |
|---|---|---|
| **Phased deployment** | Components are deployed to **only part of the production environment at a time**, for example one office, region or user group, then others | Reducing risk; learning from early adopters |
| **Continuous delivery** | Components are **integrated, tested and deployed when they are needed**, providing **frequent opportunities for customer feedback loops** | Agile and DevOps product teams with automated pipelines |
| **Big bang deployment** | Components are deployed to **all targets at the same time** | When dependencies prevent old and new versions from running side by side |
| **Pull deployment** | New or changed software is made available in a **controlled repository**, and **users download it to their own devices when they choose** | User-controlled timing. It can integrate with **service request management**, so users request software only when needed |

### Key points

- Deployment management works closely with **release management** and **change enablement**. In some organizations the three are combined. ITIL v3 had a single **release and deployment management** process.
- Components should be deployed from **controlled sources**, such as an approved software repository. ITIL v3 called this the **definitive media library (DML)**. This ensures that only authorised, tested versions reach production.
- Automation through CI/CD pipelines and infrastructure as code is now common. It improves speed and consistency.

---

## 8.4 Service Level Management ★

**Purpose:** "to set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets."

**Service level agreement (SLA):** "a documented agreement between a service provider and a customer that identifies both services required and the expected level of service."

### What SLM does

- Provides **end-to-end visibility** of the organization's services.
- Establishes a **shared view of the services and target service levels** with customers.
- Ensures the organization meets the defined service levels through the **collection, analysis, storage and reporting** of relevant metrics.
- Performs **service reviews** to ensure the current set of services continues to meet the needs of the organization and its customers.
- Captures and reports on **service issues**, including performance against defined service levels.

### The "watermelon effect" and the requirements for good SLAs

Traditional SLAs often measured narrow operational metrics, such as server uptime, rather than what customers experience. The result is the **watermelon effect**: green on the outside, because all SLA targets are met, and **red on the inside**, because customers are unhappy.

ITIL 4 sets out **key requirements for successful SLAs**:

1. They must be **related to a defined "service" in the service catalogue**. Otherwise they are just individual metrics without a purpose.
2. They should relate to **defined outcomes**, not simply operational metrics. This can be achieved with **balanced bundles of metrics**, such as customer satisfaction and business outcomes.
3. They should reflect an **"agreement"**, meaning genuine engagement and discussion between the provider and the consumer. All stakeholders should be involved, including partners, sponsors, users and customers.
4. They must be **simply written** and easy to understand and use for all parties.

> **Exam tip:** a scenario where "all SLA targets are met, but the customer is dissatisfied" points to the **watermelon effect**. The fix is SLAs based on **outcomes and customer experience** that are genuinely **agreed** with the customer.

### Engagement and listening

SLM requires a focus on **engagement and listening** to the requirements, issues, concerns and daily needs of customers.

| Source of information | What it involves |
|---|---|
| **Customer engagement** | Initial listening, discovery and information capture, on which to base metrics, measurement and ongoing progress discussions. Good questions include: *What does your work involve? How does technology help you? What are your key business times, areas, people and activities? What differentiates a good day from a bad day for you? What are your goals and objectives this year? What is the best measure of your success? How do you measure our services? What should we improve, and what should we stop doing?* |
| **Customer feedback** | Collected from multiple sources, formally and informally, including **surveys** (event-based, such as after a ticket is closed, and periodic) and **key business-related measures** agreed between provider and consumer |
| **Operational metrics** | Low-level indicators of operational activities, such as system availability, incident response and fix times, change and request completion times, and system response times |
| **Business metrics** | Any business activity the customer considers useful or valuable and uses to gauge the success of the service. Examples: ATM availability in a bank; the ability to complete a critical business function, such as booking a flight, end to end |

### Skills and competencies

**Relationship management**, **business liaison**, **business analysis**, and **commercial and supplier management**. A service level manager must understand the business as well as the technology.

### Agreement structures (ITIL v3 concepts still used widely)

| Term | Meaning |
|---|---|
| **Service-based SLA** | One SLA covers one service for all customers who use it |
| **Customer-based SLA** | One SLA covers all services used by one customer group |
| **Multi-level SLA** | Layers: a corporate level for all customers, a customer level, then a service level |
| **Service level requirements (SLR)** | The customer's requirements for a service, used to negotiate the SLA |
| **Operational level agreement (OLA)** | An agreement between the provider and **another part of the same organization** that supports the delivery of services, for example the network team. ISO/IEC 20000-1 calls these agreements with **internal suppliers** |
| **Underpinning contract (UC)** | A contract with an **external supplier** that supports the provider's delivery of services |
| **Experience level agreement (XLA)** | A newer practice that sets targets for **user experience and outcomes**, such as sentiment and productivity, alongside technical metrics. It is a response to the watermelon effect |

> **In practice:** a hospital's SLA for its clinical records system promises 99.9% availability. Clinicians still complain. Engagement reveals that their real pain is a **12-second login delay** at every ward computer. Adding an outcome-focused measure, "time from badge tap to patient record on screen", turns the SLA from green-but-useless into something that reflects value.

---


## 8.5 Availability Management

**Purpose:** to ensure that services deliver agreed levels of availability to meet the needs of customers and users.

**Availability:** the ability of an IT service or other configuration item to perform its agreed function when required.

### Key concepts

| Concept | Meaning |
|---|---|
| **Availability %** | (Agreed service time − downtime) ÷ agreed service time × 100. See Chapter 15 for worked examples |
| **Reliability** | How long a service or CI can perform without interruption. Measured by **MTBF**, the mean time between failures |
| **Maintainability** | How quickly and effectively a service or CI can be restored after a failure. Measured by **MTRS**, the mean time to restore service |
| **Serviceability** | The ability of a **third-party supplier** to meet the terms of its contract, for example its availability and response commitments |
| **Vital business function (VBF)** | A business function that is critical to the organization's success. Availability investment should focus here |
| **Single point of failure (SPOF)** | A component whose failure alone causes service failure. Eliminating SPOFs through redundancy is a key design technique |

### Key activities

- Agreeing **availability requirements and targets** with customers, typically in SLAs.
- **Designing for availability**: redundancy, clustering, fault tolerance, removal of SPOFs and automatic failover.
- **Monitoring, measuring and reporting** availability.
- **Analysing unavailability**, for example with component failure impact analysis (CFIA) or fault tree analysis, and planning improvements.
- Considering the **end-to-end, user-perceived** availability, not just component uptime.

---

## 8.6 Capacity and Performance Management

**Purpose:** to ensure that services achieve agreed and expected performance, satisfying current and future demand in a cost-effective way.

- **Performance** is a measure of what is achieved or delivered, for example response time or transactions per second.
- **Capacity** is the maximum throughput a CI or service can deliver.

### Key activities

- **Monitoring** performance and capacity utilisation.
- **Analysing** trends, and **modelling and forecasting** future demand, for example for seasonal peaks or a new marketing campaign.
- **Capacity planning:** making sure capacity is available just in time, without wasteful over-provisioning.
- **Tuning and optimisation** of performance.
- **Demand management:** influencing demand, for example with off-peak scheduling, pricing or quotas.

ITIL v3 described three levels: **business capacity management** (future business needs), **service capacity management** (end-to-end service performance) and **component capacity management** (individual technology components).

> **In practice:** cloud "auto-scaling" is capacity management automated in real time. It still needs human planning for cost limits, architecture limits such as database licences, and peak forecasting.

---

## 8.7 Service Continuity Management

**Purpose:** to ensure that the availability and performance of a service are maintained at sufficient levels **in case of a disaster**. The practice provides a framework for building **organizational resilience**, with the capability of producing an effective response that safeguards the interests of key stakeholders and the organization's reputation, brand and value-creating activities.

**Disaster:** a sudden, unplanned event that causes great damage or serious loss to an organization.

### Key concepts

| Concept | Meaning |
|---|---|
| **Business impact analysis (BIA)** | Identifies **vital business functions** and their dependencies, and evaluates the impact of their loss over time, financially, legally and reputationally |
| **Recovery time objective (RTO)** | The **maximum acceptable time** after a disruption before a service must be restored |
| **Recovery point objective (RPO)** | The **maximum acceptable data loss**, measured in time. It is the point to which data must be restored. An RPO of 1 hour means backups or replication must ensure no more than 1 hour of data is lost |
| **Risk assessment** | Identifies threats such as fire, flood, cyber-attack, pandemic and supplier failure, together with their likelihood and impact |
| **Continuity / disaster recovery (DR) plans** | Documented procedures for **invoking** continuity, recovering services and returning to normal |
| **Invocation** | The formal decision to put the continuity plan into action |
| **Testing** | Walk-throughs, simulations and full fail-over tests. Plans are tested regularly and after major changes |

### Recovery options

These range from **cold standby**, where facilities exist but equipment must be installed, which is slow and cheap, through **warm standby**, which is partially equipped, to **hot standby or active-active** sites, which are immediate and expensive. **The tighter the RTO and RPO, the more expensive the solution.** The BIA justifies the cost.

**Relationship to business continuity management (BCM).** Service continuity management supports the organization's wider **business continuity** management, which covers the whole business, including people, premises and suppliers. The standard for BCM is **ISO 22301**.

---

## 8.8 Service Catalogue Management

**Purpose:** to provide a single source of consistent information on all services and service offerings, and to ensure that it is available to the relevant audience.

### Catalogue views

| View | Audience | Content |
|---|---|---|
| **User view** (request catalogue) | Users | Requests users can make, how to make them and expected fulfilment times |
| **Customer view** | Customers and sponsors | Service descriptions, service levels, prices or costs, and how to order |
| **Technical (IT) view** | Internal teams | Supporting services, components, dependencies and responsible teams |

ITIL v3 distinguished the **business service catalogue**, which is customer-facing, from the **technical service catalogue**, which is supporting.

The service catalogue is part of the **service portfolio**, which comprises the pipeline, the catalogue and retired services. It is the foundation for **SLM**: SLAs must relate to services in the catalogue.

---

## 8.9 Service Design

**Purpose:** to design products and services that are **fit for purpose, fit for use**, and that can be delivered by the organization and its ecosystem. This includes planning and organising people, partners and suppliers, information, communication, technology and practices for new or changed products and services, and the interaction between the organization and its customers.

### Key ideas

- Designs must cover **all four dimensions**, not just technology.
- **Design thinking**, which is human-centred, iterative and experimental, is a key approach. Its typical steps are *empathise → define → ideate → prototype → test*.
- **Customer experience (CX) and user experience (UX) design**, including customer journey mapping.
- **Lean and Agile design**: small experiments, prototypes and minimum viable products.
- Designing for **warranty** (availability, capacity, security, continuity) as well as **utility**.

ITIL v3 described the **four Ps of service design** (people, processes, products and partners) and a **service design package (SDP)** that documented all aspects of a service for transition.

---

## 8.10 Business Analysis

**Purpose:** to analyse a business or some element of it, define its associated needs, and recommend solutions to address these needs and/or solve a business problem, which must facilitate value creation for stakeholders.

### Key ideas

- Eliciting, analysing, documenting and validating **requirements**.
- **Functional requirements** describe *what* the solution must do, which corresponds to **utility**. **Non-functional requirements** describe *how well* it must do it, such as performance, security and availability, which corresponds to **warranty**.
- Typical techniques: stakeholder analysis, process modelling, user stories, use cases, prototyping and **MoSCoW prioritisation** (**M**ust have, **S**hould have, **C**ould have, **W**on't have this time).

---

## 8.11 Service Validation and Testing

**Purpose:** to ensure that new or changed products and services meet defined requirements.

### Key ideas

- **Service validation** establishes the **quality and acceptance criteria**, based on the service requirements for utility and warranty.
- **Testing** checks whether the product or service meets those criteria. A **test strategy** defines the overall approach, environments and responsibilities.
- Common test types:
  - **functional** testing (utility)
  - **performance and load** testing, and **security** testing (warranty)
  - **usability** testing
  - **integration** and **regression** testing
  - **user acceptance testing (UAT)**
  - **operational acceptance testing (OAT)**: can operations support and run it?
- **Automated testing** and "shift-left" testing, which tests early and often in the pipeline, are central in DevOps.
- ITIL v3 used the **service V-model**, in which each level of requirements and design has a matching level of testing.

---

## 8.12 Technical Management Practices

### Deployment management

See Section 8.3. It is the only technical practice whose purpose is examined at Foundation level.

### Infrastructure and platform management

**Purpose:** to oversee the infrastructure and platforms used by an organization. When carried out properly, this practice enables the monitoring of technology solutions available to the organization, including solutions from third parties.

**Cloud computing essentials**

| Service model | The consumer manages... | The provider manages... | Example |
|---|---|---|---|
| **IaaS** (Infrastructure as a Service) | Operating systems, applications and data | Physical hardware, storage, networking and virtualisation | Virtual machines in a public cloud |
| **PaaS** (Platform as a Service) | Applications and data | Everything below: runtime, OS and infrastructure | Managed database or application hosting |
| **SaaS** (Software as a Service) | Only their data and configuration | The whole application stack | Cloud email, CRM |

- **Deployment models:** public, private, community and hybrid cloud.
- **Essential characteristics of cloud** (from the NIST definition): **on-demand self-service**, **broad network access**, **resource pooling**, **rapid elasticity** and **measured service**.
- Modern practices: **infrastructure as code**, containers, orchestration and automated provisioning.

### Software development and management

**Purpose:** to ensure that applications meet internal and external stakeholder needs, in terms of functionality, reliability, maintainability, compliance and auditability.

- The scope includes solution architecture and design, software development, testing, management of **code repositories**, package creation, **version control**, and the **maintenance** of applications through bug fixes, patches and upgrades.
- Approaches include **waterfall**, **Agile** and **DevOps** with **continuous integration / continuous delivery (CI/CD)** pipelines.
- Software can be developed in-house, by partners, or bought as commercial off-the-shelf (COTS) or SaaS products. All of them need management throughout their lifecycle.

---

## Key Takeaways: Chapter 8

- **Change enablement** (also called change control): *maximises the number of successful changes* by assessing risk, authorising changes and managing the **change schedule**.
  - **Standard** changes are low-risk and **pre-authorised**. They are risk-assessed when the procedure is created or modified.
  - **Normal** changes are scheduled, assessed and authorised through **change models**. Low-risk ones are authorised rapidly, often automatically. Major ones may need board-level authority.
  - **Emergency** changes are implemented ASAP through an **expedited** process with a possible **separate change authority**. Documentation can be deferred, testing may be reduced, and they are not usually on the schedule in advance.
  - The **change authority** is the person or group who authorises a change. Match the authority to the change type.
- **Release management:** *makes new and changed services and features available for use*. **Deployment management:** *moves components to live (and other) environments*. The two can be **decoupled**.
- **Deployment approaches:** **phased, continuous delivery, big bang and pull**.
- **Service level management:** *sets clear business-based targets for service levels* and manages delivery against them. Good SLAs are linked to a **catalogued service**, **outcome-based**, **genuinely agreed** and **simply written**. Avoid the **watermelon effect**. SLM information comes from **customer engagement, customer feedback, operational metrics and business metrics**.
- **Availability** (MTBF, MTRS, SPOFs), **capacity and performance** (current and future demand, cost-effectively), **service continuity** (disasters; BIA, RTO, RPO), **service catalogue** (a single source of consistent information), **service design** (fit for purpose and use; design thinking), **business analysis** (needs and solutions), **service validation and testing** (meets defined requirements).
- **Technical practices:** deployment management, infrastructure and platform management (IaaS, PaaS, SaaS), and software development and management.

---

## Check Your Knowledge: Chapter 8

*Answers are in Appendix A.*

**Multiple choice**

**8.1** What is the purpose of the *change enablement* practice?

- A) To make new and changed services and features available for use
- B) To maximize the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule
- C) To move new or changed components to live environments
- D) To ensure that changes in an organization are smoothly implemented by managing human aspects

**8.2** What is a *change*?

- A) The addition, modification, or removal of anything that could have a direct or indirect effect on services
- B) Any request from a user for a new service
- C) A version of a service made available for use
- D) An unplanned interruption to a service

**8.3** Which type of change is low-risk, pre-authorised, well understood and fully documented?

- A) Normal change
- B) Emergency change
- C) Standard change
- D) Major change

**8.4** When should a full risk assessment be performed for a standard change?

- A) Every time the change is implemented
- B) When the procedure for the standard change is created or modified
- C) Never, because standard changes have no risk
- D) Only after the change has failed

**8.5** Which statement about emergency changes is correct?

- A) They must be added to the change schedule at least one week in advance
- B) They never require testing
- C) It may be acceptable to defer some documentation until after implementation, and there may be a separate change authority
- D) They must always be authorised by the full management board

**8.6** For which purposes is the *change schedule* used?

- A) Only to record emergency changes
- B) To help plan changes, assist in communication, avoid conflicts and assign resources, and later to provide information for incident management, problem management and improvement planning
- C) To record the configuration of all CIs
- D) To track user satisfaction with changes

**8.7** What is a *change authority*?

- A) A person or group responsible for authorizing a change
- B) The person who requests a change
- C) The team that implements a change
- D) A document describing approved changes

**8.8** Which statement about the authorisation of *normal* changes is correct?

- A) All normal changes must be authorised by a Change Advisory Board
- B) Low-risk normal changes are typically authorised by someone who can make rapid decisions, often using automation, while very major changes may need authority as high as the management board
- C) Normal changes never require authorisation
- D) Normal changes are always authorised by the service desk

**8.9** What is the purpose of *release management*?

- A) To make new and changed services and features available for use
- B) To move new or changed hardware and software to live environments
- C) To ensure that new or changed products and services meet defined requirements
- D) To authorise changes

**8.10** What is the purpose of *deployment management*?

- A) To make new and changed services and features available for use
- B) To move new or changed hardware, software, documentation, processes, or any other component to live environments
- C) To plan and manage the full lifecycle of IT assets
- D) To maximise the number of successful changes

**8.11** Which deployment approach makes new software available in a controlled repository, so that users download it to their own devices when they choose?

- A) Phased deployment
- B) Big bang deployment
- C) Continuous delivery
- D) Pull deployment

**8.12** An organization deploys a new application to the sales office first, then to finance, then to everyone else. Which deployment approach is this?

- A) Phased deployment
- B) Pull deployment
- C) Big bang deployment
- D) Continuous delivery

**8.13** What is the purpose of *service level management*?

- A) To set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets
- B) To establish and nurture links with stakeholders at strategic and tactical levels
- C) To ensure that services deliver agreed levels of availability
- D) To provide a single source of consistent information on all services

**8.14** What is a *service level agreement*?

- A) A contract between a service provider and an external supplier
- B) A documented agreement between a service provider and a customer that identifies both services required and the expected level of service
- C) An internal agreement between two IT teams
- D) A list of all services offered by a provider

**8.15** Which is a key requirement for a successful SLA according to ITIL 4?

- A) It should contain as many technical metrics as possible
- B) It should be related to a defined service in the service catalogue and relate to defined outcomes, not simply operational metrics
- C) It should be written by the service provider without customer involvement
- D) It should be written in technical language for IT specialists

**8.16** A bank measures the percentage of time its ATMs can dispense cash as part of its service reviews. Which type of SLM information source is this?

- A) Operational metrics
- B) Business metrics
- C) Customer feedback
- D) Customer engagement

**8.17** Which skills and competencies are most relevant to service level management?

- A) Software coding and testing
- B) Relationship management, business liaison, business analysis, and commercial and supplier management
- C) Network engineering and data-centre operations
- D) Financial auditing and tax accounting

**8.18** What is the purpose of *service continuity management*?

- A) To ensure that the availability and performance of a service are maintained at sufficient levels in case of a disaster
- B) To ensure that services deliver agreed levels of availability during normal operation
- C) To restore normal service operation as quickly as possible after an incident
- D) To protect the information needed by the organization

**8.19** What does a *recovery point objective* (RPO) of four hours mean?

- A) The service must be restored within four hours
- B) No more than four hours of data may be lost
- C) The continuity plan must be tested every four hours
- D) Backups take four hours to complete

**8.20** What is the purpose of *service validation and testing*?

- A) To ensure that new or changed products and services meet defined requirements
- B) To design products and services that are fit for purpose and fit for use
- C) To analyse a business and recommend solutions
- D) To authorise changes for deployment

**8.21** Which practice provides a single source of consistent information on all services and service offerings, and ensures that it is available to the relevant audience?

- A) Service level management
- B) Service catalogue management
- C) Service configuration management
- D) Relationship management

**Short answer**

**8.22** Compare standard, normal and emergency changes. For each, give an example and explain how it is authorised.

**8.23** Explain the difference between release management and deployment management, and how they can be decoupled in a DevOps environment.

**8.24** Explain the "watermelon effect" and describe two ways in which service level management can avoid it.

**8.25** Explain RTO and RPO, and how they influence the choice of recovery option.

---


# Chapter 9: ITIL Across Versions

**Suggested study time:** 1.5 hours (Day 4)

**Why this chapter matters.** Many organizations, tools, job descriptions and ISO/IEC 20000 documents still use **ITIL v3/2011 terminology**, such as "change management", "request fulfilment", "service transition" and "CAB". ISO/IEC 20000-1 is organised around **processes** that map closely to v3. Meanwhile, **ITIL (Version 5)** was released in 2026. To work in ITSM you need to move comfortably between all three.

**Learning objectives.** After this chapter you should be able to:

- describe the five stages of the ITIL v3/2011 service lifecycle and their processes and functions
- explain key v3 models still in common use
- map v3 processes to ITIL 4 practices
- summarise the main changes introduced in ITIL (Version 5)

---

## 9.1 The ITIL v3/2011 Service Lifecycle

ITIL v3 (2007) and its 2011 update organized guidance into **five lifecycle stages**, each with its own book. **Continual Service Improvement** wraps around the other four.

| Stage | Purpose (paraphrased) | Processes |
|---|---|---|
| **Service Strategy** | Decide **which services** to offer, to whom and how to differentiate them, and manage them as strategic assets | Strategy management for IT services; **Service portfolio management**; **Financial management for IT services**; **Demand management**; **Business relationship management** *(5)* |
| **Service Design** | **Design** new or changed services, and the processes, technology, measurement and architecture needed to deliver them | **Design coordination**; **Service catalogue management**; **Service level management**; **Availability management**; **Capacity management**; **IT service continuity management**; **Information security management**; **Supplier management** *(8)* |
| **Service Transition** | **Build, test and deploy** services into operation safely, managing risk and knowledge | **Transition planning and support**; **Change management**; **Service asset and configuration management (SACM)**; **Release and deployment management**; **Service validation and testing**; **Change evaluation**; **Knowledge management** *(7)* |
| **Service Operation** | **Deliver and support** services day to day at agreed levels | **Event management**; **Incident management**; **Request fulfilment**; **Problem management**; **Access management** *(5)* |
| **Continual Service Improvement (CSI)** | **Improve** services and processes continually | **Seven-step improvement process** *(1)* |

**Total: 26 processes.**

### The four functions (Service Operation)

A **function** is a team or group of people and the tools they use to carry out one or more processes or activities.

| Function | Role |
|---|---|
| **Service desk** | Single point of contact for users |
| **Technical management** | Technical expertise and management of the IT infrastructure |
| **Application management** | Management of applications throughout their lifecycle |
| **IT operations management** | Day-to-day operational activities. It has two parts: **IT operations control**, such as the operations bridge, job scheduling, backup and printing, and **facilities management**, such as data centres, power and cooling |

> **Remember:** **26 processes and 4 functions.** Stages and process counts: **5-8-7-5-1** (Strategy, Design, Transition, Operation, CSI).

---

## 9.2 Key ITIL v3 Models and Concepts Still in Use

### The process model

v3 described every process with **inputs**, **activities**, **outputs** and **triggers**. It added **controls**, such as a process owner, policy, objectives, documentation and feedback, and **enablers**, which are resources and capabilities. A process is characterised as **measurable**, delivering **specific results**, having **customers**, and **responding to a specific trigger**.

### Service portfolio

A service portfolio has three parts: the **service pipeline**, which holds proposed and in-development services; the **service catalogue**, which holds live and available services; and **retired services**.

### The four Ps of service design

**People, Processes, Products** (services, technology and tools) and **Partners** (suppliers, manufacturers and vendors). This model is the ancestor of ITIL 4's four dimensions.

### The five aspects of service design

1. Service solutions for new or changed services
2. Management information systems and tools, especially the service portfolio
3. Technology architectures and management architectures
4. The processes required
5. Measurement methods and metrics

### The seven Rs of change management

When assessing a change request, ask these questions:

1. Who **raised** the change?
2. What is the **reason** for the change?
3. What is the **return** required from the change?
4. What are the **risks** involved in the change?
5. What **resources** are required to deliver the change?
6. Who is **responsible** for the build, test and implementation of the change?
7. What is the **relationship** between this change and other changes?

### CAB and ECAB

The **Change Advisory Board (CAB)** is a group that advises the change manager on the assessment, prioritisation and scheduling of changes. The **Emergency CAB (ECAB)** is a smaller group for emergency changes.

### Configuration management terms

**CMS** (configuration management system), **CMDB** (configuration management database), **DML** (definitive media library, the secure store of authorised software versions), **baselines**, and **SKMS** (service knowledge management system, the overall knowledge environment).

### The service V-model

Each level of requirements and design on the left side of the "V" corresponds to a level of testing and validation on the right side:

- business requirements ↔ service acceptance testing
- service requirements ↔ service operational readiness testing
- solution design ↔ integration testing
- component design ↔ component testing

### Service Operation balances

Operations must balance:

- **internal (technology) vs external (business) focus**
- **stability vs responsiveness**
- **cost vs quality**
- **reactive vs proactive** working

### The CSI approach and the Deming cycle

The CSI approach used six questions: *What is the vision? Where are we now? Where do we want to be? How do we get there? Did we get there? How do we keep the momentum going?* ITIL 4's continual improvement model added an explicit **"Take action"** step to make **seven**.

The **Deming cycle** (**Plan-Do-Check-Act**, PDCA) underpinned CSI. PDCA was also the structure of ISO/IEC 20000-1:2011.

### The seven-step improvement process

1. **Identify the strategy for improvement:** the vision, business needs and goals.
2. **Define what you will measure.**
3. **Gather the data.**
4. **Process the data.**
5. **Analyse the information and data.**
6. **Present and use the information.**
7. **Implement the improvement.**

### Types of metrics (v3 CSI)

- **Technology metrics:** component availability and performance
- **Process metrics:** CSFs, KPIs and activity metrics for processes
- **Service metrics:** end-to-end service results

---

## 9.3 Mapping ITIL v3/2011 Processes to ITIL 4 Practices

| ITIL v3/2011 process or function | ITIL 4 practice |
|---|---|
| Strategy management for IT services | Strategy management |
| Service portfolio management | Portfolio management |
| Financial management for IT services | Service financial management |
| Demand management | Capacity and performance management, plus relationship management. ITIL 4 has no separate demand management practice |
| Business relationship management | Relationship management |
| Design coordination | Service design, plus project and architecture management |
| Service catalogue management | Service catalogue management |
| Service level management | Service level management |
| Availability management | Availability management |
| Capacity management | Capacity and performance management |
| IT service continuity management | Service continuity management |
| Information security management | Information security management |
| Supplier management | Supplier management |
| Transition planning and support | Project management, change enablement, release management |
| Change management | Change enablement (change control) |
| Change evaluation | Change enablement, plus service validation and testing |
| Service asset and configuration management | Service configuration management, plus IT asset management |
| Release and deployment management | Release management, plus deployment management |
| Service validation and testing | Service validation and testing |
| Knowledge management | Knowledge management |
| Event management | Monitoring and event management |
| Incident management | Incident management |
| Request fulfilment | Service request management |
| Problem management | Problem management |
| Access management | Information security management. Access is often fulfilled through service request management |
| Seven-step improvement process | Continual improvement |
| Service desk (function) | Service desk |
| Technical, application and IT operations management (functions) | Infrastructure and platform management; software development and management; plus elements of several practices |

### The conceptual shift from v3 to ITIL 4

| ITIL v3/2011 | ITIL 4 |
|---|---|
| Service **lifecycle** with sequential stages | **Service Value System** and a flexible **value chain** |
| **Processes and functions** | **Practices** that span all four dimensions |
| Provider **delivers** value | Value is **co-created** |
| Service "without the **ownership** of specific costs and risks" | Service "without the customer having to **manage** specific costs and risks" |
| The four Ps of design | **Four dimensions** of service management |
| Limited links with Agile and DevOps | Explicit integration with **Agile, Lean and DevOps** |
| CAB-centric change management | **Change enablement**, with decentralised and automated authorisation |

---

## 9.4 ITIL (Version 5): What Changed in 2026

> **Source note.** ITIL (Version 5) was launched by PeopleCert in early 2026. This section is a short overview; **Chapter 10 covers Version 5 in depth**, including its exam. The summary below is based on published overviews and training-provider material available at the time of writing. **Before an exam, check the official ITIL Foundation (Version 5) syllabus** for the exact terminology and learning outcomes.

### What carries over from ITIL 4

- The **seven guiding principles**, which are reported to be unchanged
- The **four dimensions**, now described as the four dimensions of **product and service management**, with similar content
- The **34 practices**, now regrouped (see below)
- The core concepts of **value, co-creation, outcomes, costs, risks, utility and warranty**
- **Continual improvement**
- The Foundation exam format is reported as **40 multiple-choice questions, 60 minutes and a 65% pass mark**, closed book

### What is new or renamed

| ITIL 4 | ITIL (Version 5) |
|---|---|
| **Service Value System (SVS)** | **ITIL Value System** |
| Four dimensions of **service** management | Four dimensions of **product and service** management |
| **Service value chain** (6 activities) | **Product and Service Lifecycle Model (PSLM)**, with **eight** activities: **Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support**. They are explicitly **non-linear and iterative**. Insights from Support, for example, feed directly back into Discover and Design |
| Practices in **three** groups (general, service, technical) | Practices reported to be in **two** groups, **general management** and **product and service management**. The separate **technical management** group is removed and its practices are absorbed |
| AI mentioned as a technology | AI is treated as central. There is AI governance, ethics and risk guidance, and an **AI Capability Model** with six capabilities: **Creation, Curation, Clarification, Cognition, Communication and Coordination** (reported as sitting in the information and technology dimension) |
| Focus on IT-enabled **services** | Focus on **digital product and service management**, covering the full lifecycle of digital products as well as services |

### How the ITIL 4 value chain relates to the Version 5 lifecycle

This is an approximate correspondence to help your understanding. It is the author's interpretation, not an official mapping.

| ITIL 4 value chain activity | Closest ITIL (Version 5) lifecycle activities |
|---|---|
| Plan, and the strategic part of Engage | **Discover** |
| Design and transition | **Design**, **Transition** |
| Obtain/build | **Acquire** (build, buy or partner decisions for technology, talent and suppliers), **Build** |
| Deliver and support | **Operate**, **Deliver**, **Support** |
| Improve | Continual improvement across **all** activities |

### What this means for your studies

- **Chapters 1–8 remain essential.** Principles, dimensions, key concepts and practices carry over.
- For a Version 5 exam, add the **PSLM activities**, the **AI Capability Model** and the new terminology to your revision.
- ITIL 4 certifications remain valid. ITIL 4 and Version 5 are expected to coexist during a transition period.
- **ISO/IEC 20000-1 is unaffected.** It is technology- and framework-neutral, and still maps to practices regardless of ITIL version.

---

## 9.5 ITIL Versions Side by Side

| | **ITIL v2** | **ITIL v3/2011** | **ITIL 4** | **ITIL (Version 5)** |
|---|---|---|---|---|
| Released | 2000–2002 | 2007 / 2011 | 2019 | 2026 |
| Organizing idea | Processes | Service lifecycle | Service Value System | ITIL Value System, Product and Service Lifecycle |
| Core building block | Processes, plus the service desk function | 26 processes + 4 functions | 34 practices | 34 practices, regrouped |
| Operating model | – | 5 stages | Service value chain (6 activities) | PSLM (8 activities) |
| Value concept | Implicit | Value delivered to customers | Value co-created | Value co-created across products and services |
| Agile and DevOps | No | Limited | Integrated | Integrated |
| AI | No | No | Mentioned | Central, with an AI Capability Model |

---

## Key Takeaways: Chapter 9

- **ITIL v3/2011:** 5 stages (Strategy, Design, Transition, Operation, CSI), **26 processes** (5-8-7-5-1) and **4 functions** (service desk, technical management, application management, IT operations management).
- Useful v3 models include the **four Ps of design**, the **seven Rs of change**, **CAB/ECAB**, **CMS/CMDB/DML**, the **service V-model**, **PDCA** and the **seven-step improvement process**.
- Most v3 processes map one-to-one to ITIL 4 practices. Key renames: *change management → change enablement*, *request fulfilment → service request management*, *event management → monitoring and event management*, *SACM → service configuration management + IT asset management*, *release and deployment management → release management + deployment management*.
- **ITIL (Version 5)** (2026) keeps the guiding principles, dimensions and practices. It introduces the **ITIL Value System**, the eight-activity **Product and Service Lifecycle Model** (Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support) and an **AI Capability Model**. Always check the official syllabus.

---

## Check Your Knowledge: Chapter 9

*Answers are in Appendix A.*

**Multiple choice**

**9.1** How many stages does the ITIL v3/2011 service lifecycle have?

- A) Four
- B) Five
- C) Six
- D) Seven

**9.2** In ITIL v3/2011, which lifecycle stage contains incident management, problem management and request fulfilment?

- A) Service Design
- B) Service Transition
- C) Service Operation
- D) Continual Service Improvement

**9.3** In ITIL v3/2011, which lifecycle stage contains change management and service asset and configuration management?

- A) Service Strategy
- B) Service Design
- C) Service Transition
- D) Service Operation

**9.4** In ITIL v3/2011, which lifecycle stage contains service level management, availability management and supplier management?

- A) Service Design
- B) Service Strategy
- C) Service Operation
- D) Service Transition

**9.5** Which of the following is one of the four *functions* in ITIL v3/2011?

- A) Incident management
- B) Service desk
- C) Change management
- D) Problem management

**9.6** What are the "four Ps" of service design in ITIL v3?

- A) People, processes, products, partners
- B) Plan, perform, produce, protect
- C) Policy, process, procedure, practice
- D) Perspective, position, plan, pattern

**9.7** Which of the following is *not* one of the "seven Rs" of change management?

- A) Who raised the change?
- B) What is the return required from the change?
- C) What is the revenue of the requester's department?
- D) What resources are required to deliver the change?

**9.8** Which ITIL 4 practice corresponds most closely to the ITIL v3 process *request fulfilment*?

- A) Service desk
- B) Service request management
- C) Incident management
- D) Change enablement

**9.9** What is the first step of the ITIL v3 seven-step improvement process?

- A) Gather the data
- B) Identify the strategy for improvement
- C) Define what you will measure
- D) Implement the improvement

**9.10** According to published overviews, what replaced the ITIL 4 service value chain in ITIL (Version 5)?

- A) The service lifecycle with five stages
- B) The Product and Service Lifecycle Model
- C) The continual improvement model
- D) The Deming cycle

**9.11** Which ITIL 4 element is reported to have carried over unchanged into ITIL (Version 5)?

- A) The seven guiding principles
- B) The service value chain
- C) The name "Service Value System"
- D) The three practice groups

**9.12** Which of the following is *not* one of the eight activities of the ITIL (Version 5) Product and Service Lifecycle Model, as reported in published overviews?

- A) Discover
- B) Acquire
- C) Engage
- D) Operate

**Short answer**

**9.13** Why do many ISO/IEC 20000 practitioners still use ITIL v3 process names?

**9.14** Map five ITIL v3/2011 processes to their ITIL 4 practices.

**9.15** Describe the main conceptual shift from ITIL v3/2011 to ITIL 4.

**9.16** List the seven steps of the ITIL v3 seven-step improvement process.

---


# Part IV: ITIL (Version 5)

---

# Chapter 10: ITIL (Version 5) in Depth

**Suggested study time:** 3 hours (Day 5)

**Learning objectives.** After this chapter you should be able to:

- explain why ITIL (Version 5) was created and what carries over from ITIL 4
- describe the Foundation (Version 5) exam and how its marks are spread across the syllabus
- define the key terms emphasised in Version 5, including digital products, experience and sustainability
- explain the four dimensions of product and service management
- explain the ITIL value system in Version 5: guiding principles, governance, management practices and continual improvement
- describe the eight activities of the product and service lifecycle and apply them to scenarios
- identify, map and manage value streams, including core and enabling value streams and the effect of complexity
- distinguish AI, generative AI and agentic AI, describe the AI Capability Model and explain why AI governance matters
- explain how ITIL works with other frameworks, such as DevOps, Agile, Lean and PRINCE2

> **Source note (important).** ITIL (Version 5) was published in 2026. Several details in this chapter come from accredited training providers' summaries of the official syllabus and publication, because the official texts were not openly available when this guide was written. Where sources disagree, the chapter says so. Before your exam, check exact wording against the official PeopleCert syllabus.

---

## 10.1 Why Version 5? From Service Management to Digital Product and Service Management

Most organizations now create value through **digital products and services**: mobile apps, online platforms, data services, connected devices and, increasingly, AI. Three developments shaped Version 5:

1. **Products and services have converged.** Product management (discovering needs, owning a roadmap, building features) and service management (delivering, operating and supporting) often grew up in separate teams with separate methods. Consumers do not see that split. They experience one thing: the app, the help they get, the reliability, the way it feels to use.
2. **Experience and sustainability matter as much as function.** A product can meet every technical target and still lose customers because it is frustrating to use. Customers, employees and regulators also expect organizations to consider environmental and social impact.
3. **AI is changing both what organizations offer and how they work.** AI appears inside products, such as recommendations and virtual agents, and inside management work, such as ticket routing, anomaly detection and code generation.

Version 5 responds by framing ITIL as **digital product and service management**: managing products and services together, across one lifecycle, with experience, sustainability and responsible AI built in.

### Products and services: two sides of the same coin

- A **product** is a configuration of an organization's resources designed to offer value for a consumer. It is what the organization creates, buys, configures and runs.
- A **service** is how consumers get value from it. It enables value co-creation by facilitating the outcomes they want, without them having to manage specific costs and risks.

Managing the two separately creates gaps. A product team ships features that support teams were never prepared for. A service team proudly reports 99.9% uptime while users struggle with a confusing interface. Version 5 manages both **across the same lifecycle**, so decisions about features, operation, support and experience are made together.

### A continuation, not a replacement

| Element | ITIL 4 | ITIL (Version 5) |
|---|---|---|
| Scope | Service management | **Digital product and service management** |
| Value system | Service value system (SVS) | **ITIL value system**, with the same five components |
| Operating model | Service value chain: 6 activities | **Product and service lifecycle: 8 activities** (Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support) |
| Guiding principles | 7 | **The same 7** |
| Four dimensions | Of service management | Of **product and service** management, with AI content added |
| Practices | 34 practices in 3 groups | 34 **management practices** in **2** groups |
| Quality | Utility and warranty | Utility, warranty, **experience** and **sustainability** |
| Value streams | Mainly in higher-level modules | A **Foundation syllabus area**: identification, mapping, management and complexity |
| AI | Mentioned as a technology | **ITIL and AI**: definitions, the AI Capability Model and AI governance |
| Foundation exam | 40 questions, 60 minutes, 65% | 40 questions, 60 minutes, 65% |

> **Exam tip:** many Version 5 questions test what **did not change**: the core definitions, the guiding principles and the four dimensions. If you mastered Chapters 2–5, you already hold most of the marks. This chapter adds the new material and the new emphasis.

---

## 10.2 The Foundation (Version 5) Exam and the Qualification Scheme

### Exam format

| Item | ITIL Foundation (Version 5) |
|---|---|
| Questions | 40 multiple choice, each with four options and one correct answer |
| Time | 60 minutes. Candidates taking the exam in a language that is not their first language are usually given extra time (check with your exam provider) |
| Pass mark | 26 of 40 (65%) |
| Format | Closed book |
| Marking | No negative marking, so answer every question |
| Prerequisites | None. Accredited training is recommended but not required, so self-study candidates can sit the exam |

### Syllabus weighting

Several accredited training providers report the following distribution, citing the PeopleCert Foundation (Version 5) syllabus published in February 2026:

| Syllabus area | Marks | Share | Where to study it |
|---|---|---|---|
| Key ITIL terms and definitions | 12 | 30% | Section 10.3 and Chapter 2 |
| Four dimensions of product and service management | 4 | 10% | Section 10.4 and Chapter 3 |
| Product and service lifecycle | 4 | 10% | Section 10.6 |
| ITIL value system | 16 | 40% | Section 10.5 and Chapters 4–6 |
| Value stream identification, mapping and management | 2 | 5% | Section 10.7 |
| ITIL and AI | 1 | 2.5% | Section 10.8 |
| ITIL and other frameworks | 1 | 2.5% | Section 10.9 |
| **Total** | **40** | **100%** | |

The same sources report that about **40% of questions test recall** (Bloom's level 1: remember) and **60% test understanding** (level 2: understand). Expect many short scenarios that ask you to pick the guiding principle, dimension or lifecycle activity being described.

> **Remember:** **"Terms and the value system make 28."** Key terms (12) plus the value system (16) are 70% of the exam, so they deserve 70% of your revision time.

### The Version 5 qualification scheme (as reported)

- **Foundation** is the entry point for everyone.
- **Advanced modules** follow. Reported titles include *ITIL Product*, *ITIL Service*, *ITIL Strategy* and *ITIL Experience*, with a *Transformation* module shared by the pathways. Sources describe nine core modules leading to four designations.
- **ITIL AI Governance (Version 5)** is an optional extension module with no prerequisite. It is reported to be open book, with 40 questions in 90 minutes and a 70% pass mark, which is different from Foundation.
- **ITIL 4 certifications remain valid.** ITIL 4 and Version 5 coexist during the transition.

Check the PeopleCert site for current module names and dates, which vary between sources.

---

## 10.3 Key Terms and Definitions (12 Marks)

The core definitions are the same as in ITIL 4 (Chapter 2). Version 5 presents the consumer roles as **roles**, and refers to **products and services** together. Learn the wording closely, because examiners offer options that differ by one or two words.

### The core definitions

| Term | Definition (key wording) |
|---|---|
| **Value** | The perceived benefits, usefulness and importance of something. Value is **co-created** by providers, consumers and other stakeholders |
| **Organization** | A person or a group of people that has its own functions with responsibilities, authorities and relationships to achieve its objectives |
| **Product** | A configuration of an organization's resources designed to offer value for a consumer |
| **Service** | A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks |
| **Service offering** | A formal description of one or more services, designed to address the needs of a target consumer group. It may include **goods** (ownership transferred), **access to resources** (ownership not transferred) and **service actions** (activities performed by the provider) |
| **Service relationship** | A cooperation between a service provider and a service consumer. It includes **service provision**, **service consumption** and **service relationship management** |
| **Customer** | The role that defines the requirements for products and services and takes responsibility for the outcomes of service consumption |
| **User** | The role that uses services |
| **Sponsor** | The role that authorises the budget for service consumption |
| **Output** | A tangible or intangible deliverable of an activity |
| **Outcome** | A result for a stakeholder enabled by one or more outputs |
| **Cost** | The amount of money spent on a specific activity or resource. Services **remove** some costs from consumers and **impose** others |
| **Risk** | A possible event that could cause harm or loss, or make it more difficult to achieve objectives. It can also mean uncertainty of outcome. Services remove some risks and impose others |
| **Utility** | The functionality offered by a product or service to meet a particular need: *fit for purpose* |
| **Warranty** | Assurance that a product or service will meet agreed requirements: *fit for use* (availability, capacity, security, continuity) |

### Digital products and services

"Product" keeps its definition in Version 5. A **digital product** is simply a product whose value depends mainly on digital technology, such as an app, a platform, a data service or an AI model. Digital products change quickly, are often built and run by the same teams, and depend heavily on suppliers such as cloud and SaaS providers. That is why Version 5 manages them across one continuous lifecycle rather than in separate project and operations phases.

### Experience

Version 5 treats **experience** as a central part of value:

- **User experience (UX):** the sum of the functional and emotional interactions a user has with a product or service and its provider.
- **Customer experience (CX):** the same idea across the customer's whole journey, including choosing, buying, onboarding, using and getting support.
- **Employee experience (EX):** how employees experience their tools, services and work environment. Poor internal services reduce productivity just as poor customer services lose customers.

**Why it matters.** Experience explains the *watermelon effect* (Chapter 8): green technical metrics, red user sentiment. Experience is measured through feedback and behaviour, for example satisfaction and effort scores, sentiment, task completion and adoption, not only through system metrics. **Experience level agreements (XLAs)** set targets for experience outcomes, such as "90% of new employees rate onboarding as easy", alongside traditional SLA targets.

### Sustainability

**Sustainability** considers the **environmental, social and economic** impact of products and services. In Version 5 it is considered **throughout the lifecycle**, not as a separate topic:

- *Design:* energy-efficient architectures, accessible and inclusive design
- *Acquire:* suppliers with renewable energy and ethical labour practices
- *Operate:* efficient use of capacity; switching off idle resources
- *Retirement:* secure, responsible disposal and recycling of equipment

> **In practice:** this links to ISO/IEC 20000-1 Amendment 1:2024 (Chapter 11), which requires organizations to consider whether climate change is a relevant issue for their service management system.

### Quality: four aspects to balance

| Aspect | The question it answers | Example: a video-conferencing service |
|---|---|---|
| **Utility** | What does it do? | Meetings, screen sharing, recording |
| **Warranty** | Will it work when needed, at the scale needed, securely? | 99.9% availability, 1,000 participants, encryption |
| **Experience** | How does it feel to use? | Joining a meeting takes one click; users feel confident |
| **Sustainability** | What is its wider impact? | Data centres on renewable energy; long-lived hardware |

### Terms you may meet in scenario questions

These operational terms (Chapters 7 and 8) appear in many scenarios: **incident** (an unplanned interruption or reduction in quality), **problem** (a cause or potential cause of incidents), **known error** (a problem that has been analysed and not resolved), **workaround**, **change**, **event**, **service request**, **service level agreement**, **configuration item**, **IT asset** and **release**.

> **Exam tip:** in role questions, ask *who pays* (sponsor), *who defines requirements and owns the outcomes* (customer) and *who uses* (user). In quality questions, features are **utility**, reliability and capacity are **warranty**, feelings and ease of use are **experience**, and environmental or social impact is **sustainability**.

---

## 10.4 The Four Dimensions of Product and Service Management (4 Marks)

The four dimensions keep their names and meaning (Chapter 3). They are now called the four dimensions of **product and service management**, and Version 5 adds emphasis in each.

| Dimension | What it covers | Version 5 emphasis |
|---|---|---|
| **Organizations and people** | Structures, culture, roles and responsibilities, competencies, leadership | How **AI changes roles and skills**; trust and human oversight of AI; cross-functional **product teams**; employee experience |
| **Information and technology** | The information and knowledge needed, and the technologies that support products, services and their management | The **ITIL AI Capability Model** is described in this dimension. Data quality for AI. Technology choices: cloud, platforms, AI services, compatibility, compliance, viability |
| **Partners and suppliers** | Relationships with other organizations, contracts, sourcing strategy, SIAM | **Ecosystems** of cloud, SaaS and AI vendors; supplier onboarding and offboarding during **Transition**; sustainable and ethical supply chains |
| **Value streams and processes** | Activities, workflows, controls and procedures, and how they combine to create value | **Value stream identification, mapping and management** is now a syllabus area of its own (Section 10.7) |

**External factors (PESTLE)** still influence all four dimensions: political, economic, social, technological, legal and environmental. The legal and environmental factors are especially visible in Version 5, through AI regulation and sustainability expectations.

**Balance.** All four dimensions apply to **every product and service** and to the **value system as a whole**. Neglecting one, for example buying an AI tool without training people or redesigning workflows, makes products and services underperform.

> **Exam tip:** "Which dimension includes the AI Capability Model?" The answer is **information and technology**. "Staff fear AI will replace them" is a problem in **organizations and people**.

---

## 10.5 The ITIL Value System (16 Marks)

### 10.5.1 What the value system is

The **ITIL value system** describes how all the components and activities of an organization work together as a system to enable value creation. It is the Version 5 name for the ITIL 4 service value system.

```
              ┌───────────────────────── ITIL VALUE SYSTEM ─────────────────────────┐
              │  Guiding principles · Governance · Continual improvement            │
 OPPORTUNITY ►│                                                                     │► VALUE
 DEMAND      ►│  Lifecycle activities: Discover · Design · Acquire · Build ·        │
              │  Transition · Operate · Deliver · Support (combined in value streams)│
              │                                                                     │
              │  Management practices: 34 sets of organizational resources          │
              └─────────────────────────────────────────────────────────────────────┘
```

- **Inputs:** **opportunity** (options or possibilities to add value or improve the organization) and **demand** (the need or desire for products and services among internal and external consumers).
- **Outcome:** **value** for the organization, its customers and other stakeholders.
- **Five components:** guiding principles, governance, the value chain (the activities that turn demand into value), management practices and continual improvement.
- **Purpose of the design:** flexibility and integration, so that teams work across boundaries instead of in **silos**.

> **A note on terminology.** Sources describe the operating model in slightly different words. Some call the eight lifecycle activities the new "ITIL value chain". Others present the product and service lifecycle alongside a simplified value chain. For the exam, know three things: the value system turns opportunity and demand into value; its components work together flexibly; and the lifecycle activities are combined into value streams and supported by practices.

> **Exam tip:** the **four dimensions are not a component** of the value system. They apply *to* the value system and to every component. PESTLE, SLAs and the service desk are not components either.

### 10.5.2 The guiding principles (unchanged)

The seven guiding principles are the same as in ITIL 4 and are covered in detail in Chapter 4. They carry a large share of the value system marks, usually as scenarios.

| Principle | Key idea | Phrases examiners use |
|---|---|---|
| **Focus on value** | Everything links back to value for stakeholders | Know who the consumer is; customer and user experience; value in normal operations as well as improvements |
| **Start where you are** | Do not start from scratch without assessing what exists | Observe directly; measure carefully; reuse what works; sometimes nothing can be reused |
| **Progress iteratively with feedback** | Work in small, valuable steps and adjust | Comprehend the whole but do something; fast does not mean incomplete; feedback loops |
| **Collaborate and promote visibility** | Work across boundaries and make work visible | Collaboration does not mean consensus; communicate so the audience can hear; decisions need visible data |
| **Think and work holistically** | Nothing stands alone; manage the whole | Recognise complexity; collaboration is key; look for patterns; automation helps |
| **Keep it simple and practical** | Remove what adds no value | Use the minimum steps; do fewer things better; respect people's time; quick wins |
| **Optimize and automate** | Use resources to best effect | Simplify and optimise before automating; define metrics; humans only where they add value |

> **In practice: the principles applied to AI.** *Focus on value:* adopt AI where it improves outcomes or experience, not because it is fashionable. *Start where you are:* check your data and knowledge quality before training or deploying AI. *Optimize and automate:* simplify a process before handing it to an AI agent. *Collaborate and promote visibility:* tell people when they are dealing with AI.

### 10.5.3 Governance

- The **governing body** is the person or group accountable at the highest level for the organization's performance and compliance, such as a board of directors.
- Governance works through **evaluate** (the organization, its strategy and environment), **direct** (strategies and policies) and **monitor** (performance and conformance).
- **Governance sets direction; management works within it.** The board approving an AI policy is governance. A team leader allocating tickets is management.
- **AI governance** applies evaluate, direct and monitor to AI: assessing AI risks and opportunities, setting policies on acceptable use, assigning accountability, defining human oversight and monitoring how AI behaves. Accountability stays with people and, ultimately, with the governing body.
- Governance arrangements should themselves be **continually improved**.

### 10.5.4 Management practices

A **management practice** is a set of organizational resources designed for performing work or accomplishing an objective. Each practice draws on **all four dimensions**: people and skills, information and technology, partners and suppliers, and value streams and processes. A process is only one part of a practice.

**Two groups.** Version 5 keeps all **34** practices and organizes them in **two** groups instead of three:

| Group | Number | Examples reported in published overviews |
|---|---|---|
| **General management practices** | 12 | Strategy management, risk management, relationship management, supplier management, workforce and talent management, continual improvement |
| **Product and service management practices** | 22 | Incident management, problem management, change enablement, service request management, service desk, service level management, monitoring and event management, service continuity management, knowledge management, plus the former technical practices (deployment management, infrastructure and platform management, software development and management) |

The numbers add up neatly. ITIL 4 had 14 general, 17 service and 3 technical practices. The 17 service management practices, the 3 former technical practices and 2 practices moved from the general group make the 22 product and service management practices, which leaves 12 general management practices. Knowledge management is reported as one of the practices that moved. Check the official publication for the complete list.

**The role of practices in the value system.** Practices provide the capabilities that lifecycle activities and value streams use. A single practice contributes to several activities. Supplier management, for example, supports Acquire, Transition, Operate and Support.

**ITIL practice guides.** Each practice is described in a practice guide with a common structure: the purpose and key concepts; how the practice contributes to value streams and lifecycle activities; guidance for each of the four dimensions (processes, roles and competencies, information and technology, partners and suppliers); **practice success factors**; and **key metrics**. The benefits are a consistent structure, practical guidance that organizations **adopt and adapt**, and support for assessing and improving capability. Updated Version 5 practice guides are expected during 2026.

> **Exam tip:** reports indicate that Foundation (Version 5) tests what a management practice is, the **two groups**, how practices support the value system, and the structure and benefits of practice guides. **Detailed practice workflows are reported to be out of scope.** You should still recognise the purposes of the central practices in Chapters 6–8, because they appear in scenarios.

### 10.5.5 Continual improvement

Continual improvement is a **component of the value system** and also a **general management practice**. It happens at all levels and is everyone's responsibility.

- **The continual improvement model** keeps its seven-step logic: *What is the vision? Where are we now? Where do we want to be? How do we get there? Take action. Did we get there? How do we keep the momentum going?* Some sources report slightly revised wording for the last two steps in Version 5, with more emphasis on keeping improvements relevant over time. The logic is unchanged.
- The **continual improvement register (CIR)** records, prioritises and tracks improvement ideas.
- Improvements are **driven by value**, consider **all four dimensions** and use a **small number of methods** that suit the organization, such as Lean, Agile, SWOT and value stream mapping.
- In Version 5, **value stream management** (Section 10.7) is a natural partner of continual improvement, because it makes the flow of value measurable and therefore improvable.

---


## 10.6 The Product and Service Lifecycle (4 Marks)

### 10.6.1 The eight activities

The product and service lifecycle describes how digital products and services are discovered, designed, obtained, built, transitioned, operated, delivered and supported. The descriptions below paraphrase published explanations of each activity. The example follows one product: a bank's new **automatic savings feature** in its mobile app.

| Activity | Focus | Typical work | Example |
|---|---|---|---|
| **Discover** | Identify needs, demand signals and opportunities, and align them with strategy **before committing resources** | User and market research, analysis of support and usage data, business cases, prioritisation | Research shows that young customers want automatic savings goals, and a business case is approved |
| **Design** | Turn validated needs into **specifications, architectures and prototypes**, covering utility, warranty, experience, supportability and sustainability | Service and experience design, architecture, prototyping, acceptance criteria, non-functional requirements | A clickable prototype is tested with 20 customers, and performance and security requirements are agreed |
| **Acquire** | Obtain the **components** needed, including technology, supplier services and **people**, through build, buy or partner decisions | Sourcing decisions, supplier selection, contracts, licences, hiring or contracting skills | The bank buys a savings-rules engine from a fintech partner and contracts two specialists |
| **Build** | **Create, configure and test** the solution before it goes live | Development, configuration, integration, automated testing | Developers integrate the engine with the app, and automated tests run in the pipeline |
| **Transition** | **Move** new or changed products and services **into the live environment** in a controlled way, with related arrangements such as supplier onboarding or offboarding | Change enablement, release and deployment planning, readiness checks, rollback plans, training support teams | The feature is deployed behind a feature toggle and the service desk is briefed |
| **Operate** | **Run** live products and services to agreed **performance and reliability** targets | Monitoring, maintenance, patching, capacity management | The platform team watches response times during month-end peaks |
| **Deliver** | Make products and services **available and usable for consumers** as agreed, including onboarding and the quality of delivery | Access, onboarding, communication, fulfilling agreed requests, managing experience | The feature is switched on for all customers with in-app guidance |
| **Support** | **Help users** and **restore normal operation** when something goes wrong, and feed what is learned back into the product | Service desk, incident and problem handling, knowledge, feedback analysis | Customers ask how goals work; a notification fault is fixed; insights go back to Discover and Design |

> **Remember** the order with **"Do Dogs Always Bark? They Only Defend Strangers."** **D**iscover, **D**esign, **A**cquire, **B**uild, **T**ransition, **O**perate, **D**eliver, **S**upport. The order helps you remember the list, but it is **not** a fixed sequence (see 10.6.2).

### 10.6.2 Key characteristics

- **Non-linear and interconnected.** The activities are not phases performed once in strict order. They interact, run in parallel and feed each other. Support insights flow into Discover and Design. A defect found in Operate sends work back to Build and then Transition.
- **Versions overlap.** While version 2 of a product is being operated, delivered and supported, version 3 can be in design or build.
- **Build or buy, the lifecycle applies.** An organization that buys everything as SaaS still discovers needs, designs how the product will be used, acquires it, configures and tests it (Build), transitions it, operates it, delivers it and supports it.
- **Combined into value streams.** Organizations combine lifecycle activities into **value streams** for specific scenarios, such as "launch a new feature" or "restore service to a user".
- **Supported by practices.** Management practices provide the capabilities each activity needs (see 10.6.4).

### 10.6.3 From the ITIL 4 value chain to the Version 5 lifecycle

This mapping is approximate and is meant to help understanding. It is not an official one-to-one conversion.

| ITIL 4 value chain activity | Where the work sits in Version 5 |
|---|---|
| Plan | **Discover**, together with governance and strategy direction |
| Engage | Spread across **Discover** (understanding needs), **Deliver** (consumer interaction and onboarding) and **Support** (user help) |
| Design and transition | **Design** and **Transition** |
| Obtain/build | **Acquire** and **Build** |
| Deliver and support | **Operate**, **Deliver** and **Support** |
| Improve | **Continual improvement** across all activities |

> **Exam tip:** in "which list contains only lifecycle activities" questions, watch for ITIL 4 terms used as distractors: **Plan, Engage, Obtain/build, Improve**. ITIL v3 stage names such as Strategy and Operation are also distractors.

### 10.6.4 Practices across the lifecycle

| Activity | Practices that typically contribute |
|---|---|
| Discover | Strategy management, portfolio management, business analysis, relationship management |
| Design | Service design, architecture management, business analysis, information security management |
| Acquire | Supplier management, IT asset management, workforce and talent management, service financial management |
| Build | Software development and management, infrastructure and platform management, service validation and testing |
| Transition | Change enablement, release management, deployment management, knowledge management, organizational change management |
| Operate | Monitoring and event management, capacity and performance management, availability management, infrastructure and platform management |
| Deliver | Service request management, service level management, service catalogue management, relationship management |
| Support | Service desk, incident management, problem management, knowledge management, continual improvement |

### 10.6.5 Telling similar activities apart

| Pair | How to tell them apart |
|---|---|
| **Discover vs Design** | Discover asks *"Is this worth doing, and for whom?"* Design asks *"How exactly will it work and feel?"* |
| **Acquire vs Build** | Acquire *obtains* components, suppliers and people. Build *creates, configures and tests* the solution |
| **Transition vs Deliver** | Transition *moves* a new or changed product into the live environment. Deliver makes it *available and usable* for consumers as agreed |
| **Operate vs Support** | Operate keeps the live product *running to targets* (technical health). Support *helps people* and restores service when something goes wrong |

---

## 10.7 Value Streams: Identification, Mapping and Management (2 Marks)

### 10.7.1 What a value stream is

A **value stream** is a series of steps an organization undertakes to create and deliver products and services to consumers. It starts with a **trigger** (demand or an opportunity) and ends with **value realised by a consumer**. It usually crosses teams, practices and sometimes organizations, and it combines lifecycle activities in the order that the scenario needs.

| Type | Serves | Examples |
|---|---|---|
| **Core value stream** | **External** consumers directly | A customer orders and receives a product; a customer's fault is fixed; a new feature reaches customers |
| **Enabling value stream** | **Internal** consumers, so that the core value streams can work | Hiring and onboarding staff; provisioning developer environments; paying suppliers |

### 10.7.2 Identifying value streams

1. Start with a **consumer** and the **outcome** they want.
2. Find the **trigger**: what demand or opportunity starts the flow?
3. Follow the work through every **step, team and hand-off** until the consumer gets the value.
4. Set **boundaries**: a clear start and end.
5. Give it a name that describes the value, usually a verb and a noun, such as "restore service for a user" or "onboard a new customer".

### 10.7.3 Mapping a value stream

Value stream mapping is a Lean technique that visualises the flow of work so that waste becomes visible.

1. **Map the current (as-is) state:** steps, owners, hand-offs, queues, information flows, and the time spent working and waiting at each step.
2. **Analyse it:** where does work wait? Where is there rework? Which approvals or steps add no value?
3. **Design the future (to-be) state:** fewer hand-offs, removed waste, automation where it helps.
4. **Plan and implement improvements iteratively**, then **measure** the results.

The people who **do the work** across all the teams involved should map it together, keeping the consumer's outcome in view.

### 10.7.4 Flow metrics

| Metric | Meaning |
|---|---|
| **Lead time** | Total elapsed time from the consumer's request (the trigger) until value is delivered, including waiting |
| **Process time** | Time when work is actually being done on the item (also called touch time) |
| **Wait time** | Time the item spends waiting in queues or for approvals: lead time minus process time |
| **Flow efficiency** | Process time ÷ lead time × 100% |
| **% complete and accurate (%C&A)** | How often a step's output can be used by the next step without correction or rework |

**Worked example.** A new-laptop request passes through five steps. The work itself takes 4 hours in total (approval 0.25 h, ordering 0.5 h, imaging 1.5 h, delivery 1 h, handover 0.75 h), but the request takes 5 working days (40 working hours) from request to handover.

- Flow efficiency = 4 ÷ 40 = **10%**. For 90% of the time, the request is waiting.
- Making technicians work faster barely helps. Removing the approval queue, keeping pre-imaged laptops in stock and offering pull-based self-service do.

**Common types of waste:** waiting, unnecessary hand-offs, rework, approvals that add no value (over-processing), unused talent, unnecessary task switching, and features nobody uses (overproduction).

### 10.7.5 Complexity and value streams

Version 5 recognises that value streams operate in different **complexity contexts**. Published descriptions use the categories **ordered**, **complex**, **chaotic** and **confused**, drawing on the Cynefin framework.

| Context | What it looks like | Suitable approach |
|---|---|---|
| **Ordered** | Cause and effect are known or can be analysed; work is repeatable | Standard procedures, good practice, planned improvement cycles such as plan-do-check-act; good candidates for automation |
| **Complex** | Cause and effect are clear only in hindsight | Small, safe-to-fail experiments, short feedback loops, adapt as you learn |
| **Chaotic** | No clear cause and effect, and the situation is getting worse | **Act first to stabilise**, then assess and respond |
| **Confused** | It is not yet clear which context applies | First establish which context you are in, then choose the approach |

### 10.7.6 Value stream management

Mapping is a snapshot. **Value stream management** keeps measuring and improving the flow over time. It sets clear ownership of each value stream, makes flow visible (for example on boards and dashboards), tracks flow metrics, and feeds improvements into the continual improvement register. It links the lifecycle, the practices and continual improvement around what the consumer actually experiences.

> **Exam tip:** know the definition, the difference between **core** and **enabling** value streams, the purpose of mapping (making waste, delays and bottlenecks visible), how to calculate flow efficiency, and which approach suits which complexity context.

---

## 10.8 ITIL and AI (1 Mark)

### 10.8.1 Key definitions

| Term | Meaning |
|---|---|
| **Artificial intelligence (AI)** | Technology that enables machines to perform tasks that normally need human intelligence, such as learning, reasoning, recognising patterns and understanding language |
| **Machine learning** | A type of AI in which systems learn patterns from data instead of following only explicit rules |
| **Generative AI** | AI that **creates new content**, such as text, images, code or summaries, based on patterns learned from data |
| **Agentic AI** | AI systems (agents) that can **plan and take actions** towards goals, for example by calling tools or running workflow steps, **with a degree of autonomy and limited human intervention** |
| **AI maturity** | How far an organization has moved from isolated experiments towards managed, governed and value-driven use of AI |

> **Remember:** **generative AI *creates*; agentic AI *acts*.** The more an AI system can act on its own, the stronger its governance and human oversight must be.

### 10.8.2 The ITIL AI Capability Model (the "6C" model)

The model, described in the **information and technology** dimension, names six capabilities that AI can provide. It helps organizations understand and classify AI use cases, and match their risks and controls to what the AI actually does. It does not prescribe specific technologies. Published sources agree on the six names but describe each in slightly different words.

| Capability | What the AI does | Example in product and service management |
|---|---|---|
| **Creation** | Generates new content | Drafts knowledge articles, release notes, test cases or code |
| **Curation** | Selects, organises and maintains data, content and knowledge | Keeps the knowledge base and service catalogue accurate; flags outdated or duplicate articles |
| **Clarification** | Makes information and reasoning understandable | Summarises a long incident history for a manager; explains why it made a recommendation |
| **Cognition** | Analyses, reasons, predicts and supports decisions | Predicts failures from monitoring data; classifies and routes tickets |
| **Communication** | Interacts with people and systems, often in natural language | Virtual agents that answer users; translation |
| **Coordination** | Orchestrates tasks, workflows and other agents | Routes work between teams and AI agents; sequences the steps of an automated workflow |

### 10.8.3 AI governance

AI governance applies **evaluate, direct and monitor** to the use of AI:

- **Policies** on acceptable use: what AI may and may not do, and with which data.
- **Accountability:** people remain accountable for outcomes, even when AI acts.
- **Human oversight and decision boundaries:** which decisions AI may take alone, which need human approval, and how humans can intervene.
- **Risk management** for bias, inaccurate output (hallucinations), privacy, security, intellectual property and regulatory compliance.
- **Transparency:** people should know when they are dealing with AI, and important decisions should be explainable.
- **Monitoring and improvement** of AI behaviour and outcomes over time.

### 10.8.4 AI across the lifecycle

| Activity | Examples of AI support |
|---|---|
| Discover | Analysing demand signals, reviews and support data for opportunities |
| Design | Generating prototypes and design options |
| Acquire | Comparing supplier offers and contracts |
| Build | Coding assistants; generating tests |
| Transition | Assessing the risk of changes; drafting release communications |
| Operate | Anomaly detection and predictive monitoring (AIOps) |
| Deliver | Personalised onboarding; proactive notifications |
| Support | Virtual agents; suggested resolutions for agents; knowledge curation |

---

## 10.9 ITIL and Other Frameworks (1 Mark)

ITIL is designed to be **adopted and adapted** and to work alongside other approaches. Statements claiming that ITIL and another framework are incompatible, or that one replaces the other, are almost always wrong.

| Framework | What it is | How it complements ITIL |
|---|---|---|
| **DevOps** | Culture and practices that unite development and operations for fast, reliable delivery | Automation, CI/CD pipelines and shared ownership fit Build, Transition and Operate. ITIL change enablement allows automated authorisation of low-risk changes in pipelines |
| **Agile** (for example Scrum) | Iterative, incremental delivery with frequent feedback | Matches *progress iteratively with feedback*; suits Discover, Design and Build |
| **Lean** | Maximising value by improving flow and removing waste | The basis of value stream mapping and of *keep it simple and practical* |
| **PRINCE2** | A structured project management method | Supports project management when new or changed products are delivered through projects |
| **SRE** (site reliability engineering) | Engineering approach to reliability, using service level objectives and error budgets | Complements Operate and Support, and service level management |
| **COBIT** | Framework for the governance and management of enterprise information and technology | Strengthens governance; ITIL gives more detail on managing products and services |
| **ISO/IEC 20000-1** | Certifiable requirements standard for a service management system | ITIL guidance helps organizations meet its requirements (Chapters 11–15) |
| **ISO/IEC 27001** | Certifiable requirements standard for an information security management system | Complements the information security management practice |

---

## 10.10 Exam Strategy for ITIL Foundation (Version 5)

### How to read the questions

- **Underline the key word:** CORRECT, BEST, MOST, FIRST or NOT. "BEST describes" means more than one option may be partly true.
- **Missing-word questions** usually test a definition. Recall the full definition before you look at the options.
- **"Which two" list questions:** decide which statements are true *before* reading the option pairs, then pick the pair that matches.
- **Scenario questions:** ask yourself what is being tested. Is it a guiding principle, a dimension, a lifecycle activity, a role or a quality aspect? Then match the key phrase.

### Version 5 traps to watch for

1. ITIL 4 value chain terms (Plan, Engage, Obtain/build, Improve) offered as lifecycle activities.
2. "Three practice groups." Version 5 has **two**: general management, and product and service management.
3. The four dimensions offered as a value system component.
4. The AI Capability Model placed in the wrong dimension. It belongs to **information and technology**.
5. Governance and management confused. Governance **evaluates, directs and monitors**; management runs the work.
6. Utility, warranty, experience and sustainability confused.
7. Operate, Deliver and Support confused (see 10.6.5).
8. Core and enabling value streams confused. Core serves **external** consumers; enabling serves **internal** ones.
9. Flow efficiency calculated as lead time ÷ process time. It is **process time ÷ lead time**.
10. Generative AI and agentic AI confused. Generative AI **creates**; agentic AI **acts**.

### Time and tactics

- 40 questions in 60 minutes is **90 seconds per question**. Answer the easy ones, flag the hard ones and come back.
- There is **no negative marking**, so never leave a question blank.
- Change an answer only if you find a clear reason. First instincts based on a known definition are usually right.

### Practice plan

Use the companion **ITIL V5 Mock Exams** platform (see "How to Use This Guide"): take at least four timed mock exams, study the PDF of mistakes after each one, and use topic drills for your two weakest areas. Aim to score **30/40 or better consistently** before booking or sitting the real exam.

---

## Key Takeaways: Chapter 10

- **Version 5 is a continuation of ITIL 4.** The core definitions, the seven guiding principles, the four dimensions, the five value system components and the 34 practices carry over. The scope widens to **digital product and service management**.
- **Exam:** 40 questions, 60 minutes, 26 to pass, closed book, no negative marking. Marks: **terms 12, dimensions 4, lifecycle 4, value system 16, value streams 2, AI 1, frameworks 1**. About 60% of questions test understanding.
- **Quality** has four aspects: **utility** (what it does), **warranty** (whether it works when needed), **experience** (how it feels to use) and **sustainability** (environmental, social and economic impact). **XLAs** target experience outcomes.
- **Four dimensions of product and service management:** organizations and people (including AI's effect on roles), information and technology (where the **AI Capability Model** sits), partners and suppliers, and value streams and processes.
- **ITIL value system:** opportunity and demand in, value out. Guiding principles, governance (evaluate, direct, monitor), the value chain and lifecycle activities, **34 management practices in two groups** (12 general, 22 product and service management), and continual improvement.
- **Product and service lifecycle:** **Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support.** It is non-linear, applies whether you build or buy, and is combined into value streams supported by practices.
- **Value streams:** core (external consumers) and enabling (internal consumers). Map the current state, find waste, design the future state and improve iteratively. **Flow efficiency = process time ÷ lead time.** The approach depends on whether the context is ordered, complex, chaotic or confused.
- **AI:** generative AI creates, agentic AI acts. The six Cs are **creation, curation, clarification, cognition, communication and coordination**. **AI governance** sets policies, accountability, human oversight and monitoring.
- **Other frameworks:** ITIL works with DevOps, Agile, Lean, PRINCE2, SRE, COBIT and the ISO standards. It is adopted and adapted, never "either/or".

---

## Check Your Knowledge: Chapter 10

*Answers are in Appendix A.*

**Multiple choice**

**10.1** Which statement BEST describes ITIL (Version 5) compared with ITIL 4?

- A) It replaces all ITIL 4 concepts with a new framework
- B) It is a continuation that keeps the core concepts, guiding principles, dimensions, value system and 34 practices, and adds a product and service lifecycle, value streams and AI guidance
- C) It applies only to organizations that build their own software
- D) It removes the guiding principles and replaces them with the lifecycle

**10.2** What are the format and pass mark of the ITIL Foundation (Version 5) exam?

- A) 60 questions, 90 minutes, pass mark 70%
- B) 50 questions, 60 minutes, pass mark 50%
- C) 40 questions, 90 minutes, open book
- D) 40 questions, 60 minutes, pass mark 26 of 40 (65%)

**10.3** Which syllabus area carries the MOST marks in the Foundation (Version 5) exam?

- A) The ITIL value system
- B) The product and service lifecycle
- C) ITIL and AI
- D) Value stream identification, mapping and management

**10.4** Which list shows the four aspects of quality that Version 5 asks organizations to balance?

- A) Cost, time, scope and quality
- B) Plan, do, check and act
- C) Utility, warranty, experience and sustainability
- D) Availability, capacity, security and continuity

**10.5** What is the main focus of an experience level agreement (XLA)?

- A) Penalties paid by suppliers
- B) The experience and outcomes that users and customers perceive
- C) Server uptime and network latency only
- D) The internal reporting lines of the provider

**10.6** In which dimension of product and service management is the ITIL AI Capability Model described?

- A) Organizations and people
- B) Partners and suppliers
- C) Value streams and processes
- D) Information and technology

**10.7** Which list contains ONLY components of the ITIL value system?

- A) Guiding principles, governance, management practices, continual improvement
- B) The four dimensions, PESTLE, service level agreements, governance
- C) Utility, warranty, experience, sustainability
- D) Discover, Engage, Improve, Plan

**10.8** Into which groups are the ITIL (Version 5) management practices organized?

- A) General management, service management and technical management
- B) Strategic, tactical and operational
- C) General management, and product and service management
- D) Development and operations

**10.9** In which group are the practices that ITIL 4 classed as technical management practices, such as deployment management, now found?

- A) General management practices
- B) Product and service management practices
- C) A new AI practices group
- D) They were removed from ITIL

**10.10** A team compares several cloud providers, selects one and negotiates the contract terms. Which lifecycle activity is this?

- A) Acquire
- B) Discover
- C) Build
- D) Operate

**10.11** A platform team monitors a live product and applies routine maintenance to keep it within its agreed reliability targets. Which lifecycle activity is this?

- A) Design
- B) Transition
- C) Support
- D) Operate

**10.12** A new feature is switched on for all customers, with in-app guidance so that they can start using it. Which lifecycle activity is this?

- A) Build
- B) Discover
- C) Deliver
- D) Acquire

**10.13** Which statement about the product and service lifecycle is CORRECT?

- A) The activities are interconnected, can happen in parallel, and are combined into value streams for specific scenarios
- B) The activities must always be completed in order, from Discover to Support
- C) The lifecycle applies only when the organization develops its own software
- D) Each product can only be in one activity at a time

**10.14** Which two Version 5 lifecycle activities cover the work of the ITIL 4 "obtain/build" value chain activity?

- A) Discover and Design
- B) Acquire and Build
- C) Transition and Operate
- D) Deliver and Support

**10.15** An organization's payroll process makes sure that staff are paid, so that they can keep delivering services to external customers. How is this value stream BEST classified?

- A) A core value stream
- B) A governance value stream
- C) A retired value stream
- D) An enabling value stream

**10.16** A value stream has a lead time of 30 hours, and work is actively done on it for 3 hours. What is its flow efficiency?

- A) 90%
- B) 33%
- C) 10%
- D) 3%

**10.17** A value stream faces a new kind of problem whose causes only become clear in hindsight. Which approach is MOST suitable?

- A) Follow a fixed procedure without deviation
- B) Run small, safe-to-fail experiments, learn from the feedback and adapt
- C) Act at once without any assessment, as in a crisis
- D) Wait until a complete solution has been designed

**10.18** Which statement BEST distinguishes agentic AI from generative AI?

- A) Agentic AI can plan and take actions towards goals with limited human intervention, while generative AI creates content
- B) Agentic AI only produces images, while generative AI only produces text
- C) Agentic AI does not need governance, while generative AI does
- D) There is no difference between them

**10.19** An AI tool summarises a 200-message incident thread so that a manager can understand it in one minute. Which capability of the AI Capability Model does this MAINLY show?

- A) Coordination
- B) Creation
- C) Curation
- D) Clarification

**10.20** Which statement about ITIL and DevOps is CORRECT?

- A) DevOps replaces ITIL in organizations that use cloud services
- B) ITIL requires a change advisory board meeting for every change, which is incompatible with DevOps
- C) They are complementary; for example, ITIL change enablement allows low-risk changes to be authorised automatically in DevOps pipelines
- D) ITIL applies only to operations teams and DevOps only to developers

**Short answer**

**10.21** Explain what is meant by "products and services are two sides of the same coin", and why Version 5 manages both across one lifecycle.

**10.22** Describe each of the eight lifecycle activities in one sentence, using an example from a service you know.

**10.23** Explain how flow efficiency is calculated, what a low value tells you, and two ways to improve it.

**10.24** Explain why governance matters even more for agentic AI than for generative AI, and name three AI governance controls.

---


# Part V: ISO/IEC 20000

---

# Chapter 11: Introduction to ISO/IEC 20000

**Suggested study time:** 1.5 hours (Day 5)

**Learning objectives.** After this chapter you should be able to:

- explain the purpose and applicability of ISO/IEC 20000-1:2018
- describe the parts of the ISO/IEC 20000 family and other related standards
- describe the clause structure of ISO/IEC 20000-1 and its link to the Annex SL high-level structure
- define the key terms of the standard and spot where they differ from ITIL
- summarise the main changes from the 2011 to the 2018 edition, and Amendment 1:2024

> **A reminder on copyright.** This chapter and the next three paraphrase and explain the requirements. They do not reproduce the standard's text. For implementation or audit, always work from an official copy of ISO/IEC 20000-1.

---

## 11.1 What Is ISO/IEC 20000-1?

ISO/IEC 20000-1:2018, *Information technology — Service management — Part 1: Service management system requirements*, is the international standard that specifies **requirements for an organization to establish, implement, maintain and continually improve a service management system (SMS)**.

The requirements cover the **planning, design, transition, delivery and improvement of services** to meet agreed service requirements and **deliver value** for customers, users and the organization.

### Key characteristics

- **Generic:** the requirements apply to **all organizations**, whatever their type or size and whatever services they deliver. Examples are an internal IT department, an outsourcing company, a cloud provider, a university, a bank's shared services centre or a government agency.
- **Internal or external:** customers can be inside the same organization or external.
- **Framework-neutral:** it does not prescribe methods, tools or frameworks. ITIL, FitSM, COBIT or an organization's own processes can all be used to meet the requirements.
- **Auditable:** it uses "**shall**" statements that can be independently audited and certified.
- **Not only for IT:** although its origins are in IT, the 2018 edition can be applied to any service that is managed through an SMS.

### Who uses the standard?

The standard itself lists a range of intended users, which can be summarised as:

- **customers** who want assurance about the quality of the services they receive
- **customers** who want a consistent approach to the service lifecycle from all their providers, including those in a **supply chain**
- **organizations** that want to **demonstrate** their capability for planning, designing, transitioning, delivering and improving services
- **organizations** that want to **monitor, measure and review** their SMS and services
- **organizations** that want to **improve** services through an effective SMS
- **auditors and assessors** that perform **conformity assessments** against the requirements
- **training and advisory** providers in service management

### Applicability: no exclusions

ISO/IEC 20000-1:2018 is explicit about two points:

1. **Exclusion of any requirement in clauses 4 to 10 is not acceptable** when an organization claims conformity. This applies whatever the nature of the organization. In this respect the standard is stricter than ISO 9001, which permits justified non-applicability.
2. **Other parties can be involved.** External suppliers, internal suppliers and customers can operate processes or provide services and components. However, the organization **retains accountability** and must **demonstrate control** of them (clause 8.2.3). Conformity **cannot** be demonstrated if other parties **provide or operate all** of the services, service components or processes within the SMS scope. In other words, an organization cannot outsource everything and keep only a contract manager.

> **Exam tip:** a classic exam trap is "an organization can be certified even if it excludes problem management because it has few incidents." This is **false**. No requirement in clauses 4–10 can be excluded. The organization can, however, **scale** how it meets each requirement to its size and complexity. **Scope** is limited by choosing which services, locations and customers are in scope, not by excluding requirements.

---

## 11.2 The ISO/IEC 20000 Family and Related Standards

| Document | Title (paraphrased) | Type |
|---|---|---|
| **ISO/IEC 20000-1:2018** | Service management system **requirements** | Requirements: the **only certifiable** part |
| **ISO/IEC 20000-2:2019** | **Guidance on the application** of service management systems, explaining how to meet Part 1 | Guidance |
| **ISO/IEC 20000-3:2019** | Guidance on **scope definition and applicability** of Part 1 | Guidance |
| **ISO/IEC TS 20000-5:2022** | **Implementation guidance** for Part 1, such as phased implementation | Technical specification |
| **ISO/IEC 20000-6:2017** | Requirements for **bodies providing audit and certification** of service management systems | Requirements for certification bodies |
| **ISO/IEC 20000-7:2019** | Guidance on **integrating and correlating** ISO/IEC 20000-1 with **ISO 9001** and **ISO/IEC 27001** | Guidance |
| **ISO/IEC 20000-10:2018** | **Concepts and vocabulary** for the family | Guidance |
| **ISO/IEC TR 20000-11:2021** | Guidance on the **relationship between ISO/IEC 20000-1 and ITIL** | Technical report |
| **ISO/IEC TR 20000-12:2016** | Guidance on the relationship with **CMMI for Services** | Technical report |

*Editions are those current at the time of writing. Check the ISO catalogue for the latest status.*

**Related standards you should recognise**

| Standard | Relevance to an SMS |
|---|---|
| **ISO/IEC 27001** | Information security management system. It links to clause 8.7.3 |
| **ISO/IEC 27013** | Guidance on the **integrated implementation** of ISO/IEC 27001 and ISO/IEC 20000-1 |
| **ISO 9001** | Quality management system |
| **ISO 22301** | Business continuity management system. It links to clause 8.7.2 |
| **ISO 31000** | Risk management guidelines. It links to clause 6.1 |
| **ISO/IEC 38500** | Governance of IT |
| **ISO 19011** | Guidelines for **auditing** management systems. It is used for internal audits |
| **ISO/IEC 17021-1** | Requirements for bodies certifying management systems. It is used together with ISO/IEC 20000-6 |

---

## 11.3 Structure of ISO/IEC 20000-1:2018

ISO/IEC 20000-1:2018 follows the **Annex SL high-level structure (HLS)** that is shared by all ISO management system standards, including ISO 9001, ISO/IEC 27001, ISO 22301, ISO 14001 and ISO 45001. ISO has since renamed it the "harmonized structure". This shared structure makes **integrated management systems** much easier to build.

| Clause | Title | What it covers |
|---|---|---|
| 0 | Introduction | Background and the purpose of the standard. *No requirements* |
| 1 | Scope | What the standard covers, and the rule that no requirements may be excluded |
| 2 | Normative references | None |
| 3 | Terms and definitions | Common management system terms and service management terms |
| **4** | **Context of the organization** | Internal and external issues, interested parties, SMS scope, and establishing the SMS |
| **5** | **Leadership** | Top management commitment, the service management policy, and roles, responsibilities and authorities |
| **6** | **Planning** | Risks and opportunities, objectives, and the **service management plan** |
| **7** | **Support of the SMS** | Resources, competence, awareness, communication, documented information and knowledge |
| **8** | **Operation of the SMS** | All the service management processes, in **seven** groups (Chapter 13) |
| **9** | **Performance evaluation** | Monitoring and measurement, internal audit, management review and service reporting |
| **10** | **Improvement** | Nonconformity and corrective action, and continual improvement |

### Clause 8 at a glance

| Sub-clause | Group | Processes and areas |
|---|---|---|
| 8.1 | Operational planning and control | |
| 8.2 | **Service portfolio** | Service delivery; plan the services; control of parties involved in the service lifecycle; service catalogue management; asset management; configuration management |
| 8.3 | **Relationship and agreement** | Business relationship management; service level management; supplier management |
| 8.4 | **Supply and demand** | Budgeting and accounting for services; demand management; capacity management |
| 8.5 | **Service design, build and transition** | Change management; service design and transition; release and deployment management |
| 8.6 | **Resolution and fulfilment** | Incident management; service request management; problem management |
| 8.7 | **Service assurance** | Service availability management; service continuity management; information security management |

### The PDCA logic behind the structure

The 2018 edition no longer presents PDCA explicitly, as the 2011 edition did, but the HLS still follows its logic:

| PDCA | Clauses |
|---|---|
| **Plan** | 4 Context, 5 Leadership, 6 Planning, 7 Support |
| **Do** | 8 Operation |
| **Check** | 9 Performance evaluation |
| **Act** | 10 Improvement |

---

## 11.4 Key Terms in ISO/IEC 20000-1:2018 (Paraphrased)

| Term | Meaning in the standard | Note compared with ITIL |
|---|---|---|
| **Organization** | The person or group that has its own functions, responsibilities and authorities, and that operates the SMS | The 2011 edition said "**service provider**"; the 2018 edition says "**the organization**" |
| **Service** | A means of delivering value for the customer by facilitating the outcomes the customer wants to achieve | Similar to ITIL v3 wording |
| **Service management** | The capabilities and processes used to direct and control the organization's activities and resources for the planning, design, transition, delivery and improvement of services to deliver value | |
| **Service management system (SMS)** | A management system that directs and controls the organization's service management activities. It includes policies, objectives, plans, processes, documented information and resources | |
| **Customer** | An organization, or part of one, that receives one or more services | Customers can be internal or external |
| **User** | An individual or group that interacts with, or benefits from, a service | |
| **Interested party** | A person or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity | Equivalent to ITIL's "stakeholder" |
| **External supplier** | Another party outside the organization that enters into a **contract** to contribute to the planning, design, transition, delivery or improvement of services, components or processes | For example a cloud provider or telecoms carrier |
| **Internal supplier** | Part of a larger organization that is **outside the scope of the SMS** and has a **documented agreement** with the organization to contribute to services, components or processes | For example the corporate HR, facilities or network department of the same group. ITIL calls such an agreement an **OLA** |
| **Service component** | A part of a service that, combined with other elements, delivers a complete service | Infrastructure, applications, licences, information, documentation and supporting services |
| **Service requirement** | The needs of customers, users and the organization related to the services and the SMS that are stated or obligatory | |
| **Service level agreement (SLA)** | A documented agreement between the organization and the customer that identifies services and their agreed performance | It can also be used with internal suppliers |
| **Service level target** | A specific, measurable characteristic of a service that the organization commits to | For example "99.5% availability" or "P1 resolved in 4 hours" |
| **Service catalogue** | Documented information about the services an organization provides to its customers | |
| **Incident** | An unplanned interruption to a service, a reduction in the quality of a service, **or an event that has not yet impacted the service** to the customer or user | **Broader than ITIL.** It includes "near misses" |
| **Problem** | The cause of one or more actual or potential incidents | |
| **Known error** | A problem that has an **identified root cause or a method of reducing or eliminating its impact** on a service | Wording differs from ITIL ("analysed and not resolved"), but the idea is the same |
| **Service request** | A request for information, advice, access to a service, or a **pre-approved change** | It includes pre-approved (standard) changes |
| **Change** | The addition, modification or removal of anything that could affect services | |
| **Release** | A collection of one or more new or changed services or service components **deployed into the live environment** as a result of one or more changes | |
| **Configuration item (CI)** | An element that needs to be controlled in order to deliver one or more services | |
| **Configuration information** | Information about CIs | The 2018 edition uses this term rather than requiring a "CMDB" |
| **Asset** | An item, thing or entity that has potential or actual value to an organization | |
| **Availability** | The ability of a service or service component to perform its required function at an agreed time or over an agreed period | |
| **Service continuity** | The capability to deliver a service without interruption, or with consistent availability as agreed | |
| **Information security** | The preservation of the **confidentiality, integrity and availability** of information | |
| **Transition** | The activities involved in moving a new or changed service to or from the live environment | |
| **Top management** | The person or group who directs and controls an organization at the highest level | |
| **Documented information** | Information that must be controlled and maintained, together with its medium | It replaces the separate "documents" and "records" of the 2011 edition |
| **Nonconformity** | Non-fulfilment of a requirement | |
| **Corrective action** | Action to eliminate the cause of a nonconformity and to prevent it from recurring | |
| **Continual improvement** | A recurring activity to enhance performance | |
| **Value** | Importance, benefit or usefulness | |

> **Remember:** **planned intervals.** The standard often says "at planned intervals" without giving a frequency. The **organization decides** how often, for example monthly SLA reviews, annual continuity tests or quarterly configuration audits. It must then **follow its own plan** and keep evidence.

---

## 11.5 Key Concepts of the Standard

### The service lifecycle

The standard covers the full lifecycle of services: **planning → design → transition → delivery → improvement**.

### "Other parties" in the service lifecycle

| Type of other party | Example | How it is controlled |
|---|---|---|
| **External supplier** | A cloud hosting company | **Contract** (8.3.4.1) |
| **Internal supplier** | The group's central network team, outside the SMS scope | **Documented agreement** (8.3.4.2) |
| **Customer acting as a supplier** | A customer that provides its own data-centre facilities or first-line support | **Documented agreement** (8.3.4.2) |

### Value

The 2018 edition introduces **value** explicitly. For example, top management must ensure that **what constitutes value** for the organization and its customers is determined (clause 5.1). This is a direct link to ITIL 4's focus on value.

### Documented information

The standard requires certain information to be **maintained**, meaning kept up to date, for example the policy and plans. Other information must be **retained**, meaning kept as evidence or records, for example audit results. The 2018 edition significantly **reduced** the amount of mandatory documentation compared with 2011. Clause 7.5.4 lists the minimum SMS documented information (Chapter 12).

---

## 11.6 What Changed from the 2011 to the 2018 Edition

| Area | 2011 edition | 2018 edition |
|---|---|---|
| Structure | Its own structure, based on PDCA | **Annex SL high-level structure** (clauses 4–10) |
| Main actor | "Service provider" | "**The organization**" |
| Other parties | "Governance of processes operated by other parties" | "**Control of parties involved in the service lifecycle**" (8.2.3) |
| Documentation | Many mandatory documents and records | **Reduced** documentation requirements. "Documented information" |
| New requirements | | **Knowledge** (7.6), **plan the services** (8.2.2), **demand management** (8.4.2), **asset management** (8.2.5), explicit **risks and opportunities** (6.1) and **value** |
| Process split | Incident and service request management combined | **Separate** incident management (8.6.1) and service request management (8.6.2) |
| Catalogue | Part of SLM | **Service catalogue management** as its own requirement (8.2.4) |
| Availability and continuity | "Service continuity and availability management" combined | **Separate** 8.7.1 availability and 8.7.2 continuity |
| Information security | A separate process group | Part of **service assurance** (8.7.3) |
| Complaints | Within business relationship management | Still in **business relationship management** (8.3.2) |
| Service reporting | Under service delivery processes | Moved to **performance evaluation** (9.4) |
| Release and deployment | Under control processes | Within **service design, build and transition** (8.5.3) |
| Management representative | Required | No longer named. Roles and authorities are assigned by top management (5.3) |
| Preventive action | A separate requirement | Replaced by **risk-based thinking** (6.1) |

Organizations certified to the 2011 edition had a **three-year transition period**, ending in 2021, to move to the 2018 edition.

---

## 11.7 Amendment 1:2024: Climate Action Changes

In 2024 ISO amended many management system standards, including ISO/IEC 20000-1:2018, to address **climate change**:

- **Clause 4.1** now requires the organization to **determine whether climate change is a relevant issue** for its context.
- **Clause 4.2** adds a note that **relevant interested parties can have requirements related to climate change**.

This does **not** require a climate programme in every organization. It requires the organization to **consider** the question and act if climate change is relevant, for example data-centre energy use, extreme-weather risks to service continuity, or customer sustainability requirements. Auditors will look for evidence that the question was considered.

---

## 11.8 Benefits of ISO/IEC 20000-1 Certification

| For the organization | For customers and other interested parties |
|---|---|
| Independent proof of service management capability, which is often a **tender requirement** | **Assurance** of consistent, controlled service quality |
| A **common language** and consistent processes across teams and locations | Clear **agreements** (SLAs) and service reporting |
| Better **control of suppliers** and outsourced components | Confidence that **risks** (continuity, security) are managed |
| **Continual improvement** driven by audits and management reviews | Transparent **complaint handling** and escalation |
| Alignment with **ISO/IEC 27001, ISO 9001 and ISO 22301** through the HLS | Easier **supplier selection** and due diligence |
| A stronger culture of **accountability** and measurement | |

---

## Key Takeaways: Chapter 11

- **ISO/IEC 20000-1:2018** specifies requirements to **establish, implement, maintain and continually improve an SMS**. It is the **only certifiable part** of the family.
- It is **generic**, **framework-neutral** and applies to **internal and external** providers.
- **No exclusions** of requirements in **clauses 4–10**. Scope is set by services, customers and locations, not by excluding requirements. Other parties may be involved, but the organization **retains accountability** and **cannot have others provide or operate everything**.
- Family: **Part 2** application guidance, **Part 3** scope, **Part 5** implementation, **Part 6** certification bodies, **Part 7** integration with ISO 9001 and ISO/IEC 27001, **Part 10** vocabulary, **Part 11** relationship with ITIL, **Part 12** relationship with CMMI-SVC.
- **Annex SL structure:** clauses **4 Context, 5 Leadership, 6 Planning, 7 Support, 8 Operation, 9 Performance evaluation, 10 Improvement**.
- **Clause 8** has seven groups: **8.1 planning and control**, **8.2 service portfolio**, **8.3 relationship and agreement**, **8.4 supply and demand**, **8.5 design, build and transition**, **8.6 resolution and fulfilment**, **8.7 service assurance**.
- Term differences from ITIL: an ISO **incident** includes events not yet impacting service. A **service request** includes pre-approved changes. "**The organization**" replaces "service provider".
- **Amendment 1:2024:** consider **climate change** in 4.1 and 4.2.

---

## Check Your Knowledge: Chapter 11

*Answers are in Appendix A.*

**Multiple choice**

**11.1** What does ISO/IEC 20000-1:2018 specify?

- A) Guidance on how to implement ITIL practices
- B) Requirements for an organization to establish, implement, maintain and continually improve a service management system
- C) Requirements for bodies that certify service management systems
- D) Vocabulary for service management

**11.2** Which part of the ISO/IEC 20000 family gives guidance on scope definition and applicability of Part 1?

- A) Part 2
- B) Part 3
- C) Part 6
- D) Part 10

**11.3** Which part of the ISO/IEC 20000 family specifies requirements for bodies providing audit and certification of SMSs?

- A) Part 1
- B) Part 3
- C) Part 6
- D) Part 11

**11.4** Which part provides the concepts and vocabulary of the ISO/IEC 20000 family?

- A) Part 2
- B) Part 7
- C) Part 10
- D) Part 12

**11.5** Which document gives guidance on the relationship between ISO/IEC 20000-1 and ITIL?

- A) ISO/IEC 20000-2
- B) ISO/IEC 20000-7
- C) ISO/IEC TR 20000-11
- D) ISO/IEC 27013

**11.6** An organization does not want to implement capacity management because its services are small. Can it still claim conformity to ISO/IEC 20000-1:2018?

- A) Yes, if it documents a justification for the exclusion
- B) Yes, if the certification body agrees
- C) No. Exclusion of any requirement in clauses 4 to 10 is not acceptable, although the organization can scale how it meets the requirement
- D) Yes, because clause 8 requirements are optional

**11.7** In ISO/IEC 20000-1:2018, what term is used for the entity that operates the SMS?

- A) The service provider
- B) The organization
- C) The supplier
- D) The customer

**11.8** Which clause of ISO/IEC 20000-1:2018 contains the requirements for incident management, change management and service level management?

- A) Clause 6
- B) Clause 7
- C) Clause 8
- D) Clause 9

**11.9** How does the ISO/IEC 20000-1 definition of *incident* differ from the ITIL 4 definition?

- A) It excludes reductions in service quality
- B) It also includes an event that has not yet impacted the service to the customer or user
- C) It only covers security events
- D) It is identical

**11.10** Which of the following is *not* one of the types of "other party" described in ISO/IEC 20000-1?

- A) External supplier
- B) Internal supplier
- C) Customer acting as a supplier
- D) User

**11.11** Which clauses of ISO/IEC 20000-1:2018 were changed by Amendment 1:2024 to address climate change?

- A) Clauses 8.7.1 and 8.7.2
- B) Clauses 4.1 and 4.2
- C) Clauses 9.2 and 9.3
- D) Clause 10.2 only

**11.12** Which statement about other parties in ISO/IEC 20000-1:2018 is correct?

- A) The organization can transfer accountability for SMS requirements to its suppliers
- B) The organization retains accountability, must demonstrate control of other parties, and cannot claim conformity if other parties provide or operate all services, service components or processes in scope
- C) Other parties are not allowed to operate any processes in the SMS scope
- D) Only external suppliers need to be controlled

**11.13** Which term in the 2018 edition replaces the separate concepts of "documents" and "records" from the 2011 edition?

- A) Configuration information
- B) Documented information
- C) Knowledge
- D) Service reports

**Short answer**

**11.14** List clauses 4 to 10 of ISO/IEC 20000-1:2018, and give one example of what each requires.

**11.15** Explain what an *internal supplier* is, with an example, and how it is controlled compared with an *external supplier*.

**11.16** Name four significant changes between the 2011 and 2018 editions of ISO/IEC 20000-1.

**11.17** Give three benefits of ISO/IEC 20000-1 certification for (a) an internal IT department and (b) an outsourcing company bidding for contracts.

---


# Chapter 12: Clauses 4 to 7: Context, Leadership, Planning and Support

**Suggested study time:** 2.5 hours (Day 5)

**Learning objectives.** After this chapter you should be able to:

- explain the requirements of clauses 4 (context), 5 (leadership), 6 (planning) and 7 (support) of ISO/IEC 20000-1:2018
- write an SMS scope statement
- list the contents of the service management plan and the mandatory SMS documented information
- describe the evidence an auditor would expect for each clause

**How to read this chapter.** Each clause has three parts: **what the standard requires** (paraphrased), **what it means in practice**, and **audit evidence**, meaning what an auditor will typically ask to see.

---

## 12.1 Clause 4: Context of the Organization

### 4.1 Understanding the organization and its context

**Requirement (paraphrased).** Determine the **external and internal issues** that are relevant to the organization's purpose and that affect its ability to achieve the intended outcomes of the SMS. **Amendment 1:2024:** also determine **whether climate change is a relevant issue**.

**In practice**

| Internal issues | External issues |
|---|---|
| Culture and values; organizational structure | Laws and regulations, such as data protection and sector rules |
| Staff skills and capacity; budget | Customers' markets and expectations |
| Existing processes, tools and technology | Competitors and the supplier landscape |
| Strategy and governance | Technology trends, such as cloud and AI |
| Previous audit results and known weaknesses | Economic, social and environmental factors, including climate |

Tools such as **PESTLE** and **SWOT** are commonly used.

**Audit evidence.** A documented context analysis or issues register that is reviewed periodically, typically as an input to **management review** (9.3). Evidence that the climate-change question was considered.

### 4.2 Understanding the needs and expectations of interested parties

**Requirement (paraphrased).** Determine the **interested parties** relevant to the SMS and the services, and their **relevant requirements**. **Amendment 1:2024** notes that interested parties can have **climate-related requirements**.

**In practice.** Interested parties include customers, users, top management, employees, suppliers (external and internal), regulators, shareholders, the parent company, auditors and sometimes the public. Their requirements can be contractual (SLAs), legal, regulatory or expectations, for example "24/7 support" or "data must remain in the EU".

**Audit evidence.** An interested-party register listing each party, its requirements and how they are addressed, for example through SLAs, policies or controls.

### 4.3 Determining the scope of the SMS

**Requirement (paraphrased).** Determine the **boundaries and applicability** of the SMS, considering the issues (4.1) and the requirements (4.2). The scope must be available as **documented information** and stated in terms of the **services in scope** and the **name of the organization** that manages and delivers them.

**In practice.** ISO/IEC 20000-3 gives guidance. A good scope statement identifies:

- **who:** the organization or organizational unit, and its location or locations
- **what:** the services in scope
- **for whom:** the customers, internal or external

> **Example scope statement:** "The service management system of *Acme IT Services Ltd* for the management and delivery of *managed desktop, service desk and cloud hosting services* to *external business customers*, provided from its *Athens and Thessaloniki* service centres."

**Pitfalls.** Scopes that are too vague, such as "all IT services". Scopes that exclude the hard parts, which is not allowed if those parts are integral to the services. Scopes where other parties provide **all** of the services.

**Audit evidence.** A documented scope statement that matches reality, the service catalogue and the certificate.

### 4.4 Service management system

**Requirement (paraphrased).** **Establish, implement, maintain and continually improve** an SMS, including the processes needed and their interactions, in accordance with the requirements of the standard.

**Audit evidence.** The SMS exists as a coherent system: processes are defined, interfaces between them are understood, and there is evidence of operation and improvement.

---

## 12.2 Clause 5: Leadership

### 5.1 Leadership and commitment

**Requirement (paraphrased).** **Top management** must demonstrate leadership and commitment to the SMS by, among other things:

- making sure the **service management policy and objectives** are established and compatible with the organization's strategic direction
- making sure the **service management plan** is created, implemented and maintained to support the policy, the objectives and the service requirements
- making sure **appropriate levels of authority** exist for making decisions about the SMS and the services
- making sure that **what constitutes value** for the organization and its customers is **determined** *(an explicit 2018 addition)*
- making sure there is **control of other parties** involved in the service lifecycle
- making sure SMS requirements are **integrated into the organization's business processes**
- making sure the **resources** needed are available
- **communicating** the importance of effective service management, of meeting service requirements and of conforming to the SMS requirements
- making sure the SMS **achieves its intended outcomes**
- **directing and supporting people** to contribute to the effectiveness of the SMS
- **promoting continual improvement**
- **supporting other management roles** to demonstrate leadership in their areas

**In practice.** Top management cannot delegate commitment. Auditors interview them directly. A frequent finding is "top management unaware of SMS objectives or performance".

**Audit evidence.** Management review minutes, approved policy and plan, resource decisions, communications from leadership, and interviews with top management.

### 5.2 Policy

**5.2.1 Establishing the service management policy.** Top management must establish a service management policy that:

- is **appropriate to the purpose** of the organization
- provides a **framework for setting** service management **objectives**
- includes a **commitment to satisfy applicable requirements**
- includes a **commitment to continual improvement** of the SMS and the services

**5.2.2 Communicating the service management policy.** The policy must be:

- **available as documented information**
- **communicated** within the organization
- **available to interested parties**, as appropriate

> **Remember: policy versus plan.** The **policy** is a short statement of **intent and commitment** ("why and what we commit to"). The **plan** (6.3) describes **how** the SMS will be run: services, resources, responsibilities, technology and measurement.

### 5.3 Organizational roles, responsibilities and authorities

**Requirement (paraphrased).** Top management must make sure that **responsibilities and authorities** for relevant roles are **assigned and communicated**. In particular it must assign responsibility and authority for:

- making sure the SMS **conforms** to the requirements of the standard
- **reporting** on the performance of the SMS and the services to top management

**In practice.** The 2011 edition required a named "management representative". The 2018 edition does not, but most organizations still appoint an **SMS manager**, **process owners** and **service owners**, often documented in RACI charts and role descriptions.

**Audit evidence.** Role descriptions, an organization chart, appointment letters or a RACI chart, and interviews showing that people understand their roles.

---

## 12.3 Clause 6: Planning

### 6.1 Actions to address risks and opportunities

**Requirement (paraphrased).** When planning the SMS, consider the issues (4.1) and requirements (4.2), and determine the **risks and opportunities** that need to be addressed in order to:

- give assurance that the SMS can **achieve its intended outcomes**
- **prevent or reduce undesired effects**
- **achieve continual improvement**

The organization must determine and **document**:

- risks related to **the organization**
- risks related to **not meeting the service requirements**
- risks related to the **involvement of other parties** in the service lifecycle
- the **impact on customers** of risks and opportunities for the SMS and the services
- **risk acceptance criteria**
- the **approach to be taken for the management of risks**

It must then plan **actions** to address risks and opportunities, and their **priority**. It must also plan how to **integrate and implement** those actions in SMS processes and how to **evaluate their effectiveness**.

**In practice.** A **risk register** (likelihood × impact, owner, treatment, status), a risk methodology often based on **ISO 31000**, and defined risk acceptance criteria, for example "risks scoring above 15 must be treated". Treatment options include avoiding the risk, taking the risk to pursue an opportunity, removing its source, changing the likelihood or consequences, sharing it, or retaining it by informed decision.

**Pitfalls.** A risk register that only contains information security risks, or that is never reviewed. Forgetting **supplier risks**. Risk acceptance criteria that are not defined.

**Audit evidence.** The documented risk methodology and acceptance criteria, the risk register with SMS, service and supplier risks, treatment plans and evidence of review.

### 6.2 Service management objectives and planning to achieve them

**Requirement (paraphrased).** Establish **service management objectives** at relevant functions and levels. The objectives must:

- be **consistent with the service management policy**
- be **measurable**
- take into account **applicable requirements**
- be **monitored**, **communicated** and **updated** as appropriate
- be retained as **documented information**

When planning how to achieve the objectives, the organization must determine **what will be done**, **what resources** are required, **who will be responsible**, **when it will be completed** and **how the results will be evaluated**.

> **Example objective:** "Increase first-contact resolution at the service desk from 55% to 70% by 31 December. *Owner:* Service Desk Manager. *Actions:* knowledge base refresh and agent training. *Measured:* monthly in the service report."

### 6.3 Plan the service management system

**Requirement (paraphrased).** Create, implement and maintain a **service management plan**. Planning must consider the service management policy, the objectives, the risks and opportunities, the service requirements and the requirements of the standard.

The plan must **contain or include a reference to**:

| # | Content |
|---|---|
| a | The **list of services** |
| b | **Known limitations** that can affect the SMS and the services |
| c | **Obligations**, such as relevant policies, standards, legal, regulatory and contractual requirements, and how they apply to the SMS and the services |
| d | **Authorities and responsibilities** for the SMS and the services |
| e | The **human, technical, information and financial resources** needed to operate the SMS and the services |
| f | The **approach to working with other parties** involved in the service lifecycle |
| g | The **technology used to support** the SMS |
| h | **How the effectiveness** of the SMS and the services will be **measured, audited, reported and improved** |

**In practice.** The service management plan is often a single "SMS manual" or plan document that references other documents, such as the service catalogue, the supplier list and the tool architecture.

**Audit evidence.** The plan itself, evidence that it is up to date (version control and review dates), and evidence that it is followed in practice.

---

## 12.4 Clause 7: Support of the Service Management System

### 7.1 Resources

**Requirement (paraphrased).** Determine and provide the **human, technical, information and financial resources** needed to establish, implement, maintain and continually improve the SMS, and to operate the services so that they meet service requirements and objectives.

**Audit evidence.** Budgets, staffing plans, tool inventories and capacity evidence. Auditors also look for symptoms of under-resourcing, such as incident backlogs, overdue audits and unreviewed risks.

### 7.2 Competence

**Requirement (paraphrased).** The organization must:

- determine the **necessary competence** of people whose work affects the performance of the SMS and the services
- make sure they are **competent** on the basis of appropriate **education, training or experience**
- where applicable, take **actions to acquire** the necessary competence, such as training, mentoring, reassignment or hiring, and **evaluate the effectiveness** of those actions
- **retain documented information** as evidence of competence

**Audit evidence.** A competence or skills matrix, training records, certificates such as ITIL or ISO/IEC 20000 qualifications, onboarding records, and evidence that the effectiveness of training was evaluated.

### 7.3 Awareness

**Requirement (paraphrased).** People doing work under the organization's control must be aware of:

- the **service management policy**
- the **service management objectives**
- the **services** relevant to their work
- their **contribution** to the effectiveness of the SMS, including the benefits of improved performance
- the **implications of not conforming** with SMS requirements

**Audit evidence.** Induction materials, intranet pages, awareness sessions and interviews. An auditor may ask a service desk agent, "What is your service management policy, and how does your work contribute to it?"

### 7.4 Communication

**Requirement (paraphrased).** Determine the internal and external communications relevant to the SMS and the services, including:

- **on what** it will communicate
- **when** to communicate
- **with whom** to communicate
- **how** to communicate
- **who** communicates

**In practice.** A communication plan or matrix: monthly service reports to customers, quarterly service reviews, major incident notifications, change schedule publication and staff newsletters.

### 7.5 Documented information

**7.5.1 General.** The SMS must include the documented information **required by the standard**, plus the documented information the organization determines is **necessary for the effectiveness** of the SMS. The extent can differ between organizations because of their size, the complexity of their processes and the competence of their people.

**7.5.2 Creating and updating.** When creating and updating documented information, ensure appropriate:

- **identification and description**, for example title, date, author and reference number
- **format** (language, software version, graphics) and **media** (paper or electronic)
- **review and approval** for suitability and adequacy

**7.5.3 Control of documented information.** Documented information must be controlled so that it is:

- **available and suitable for use**, where and when it is needed
- **adequately protected**, for example from loss of confidentiality, improper use or loss of integrity

Control activities include: **distribution, access, retrieval and use**; **storage and preservation**, including preservation of legibility; **control of changes** (version control); **retention and disposition**. Documented information of **external origin**, such as vendor manuals and customer contracts, must be identified and controlled as well.

**7.5.4 Service management system documented information.** This is a key list to learn. The SMS documented information must include:

| # | Mandatory documented information |
|---|---|
| a | The **scope** of the SMS |
| b | The **policy and objectives** for service management |
| c | The **service management plan** |
| d | The **change management policy**, the **information security policy** and the **service continuity plan(s)** |
| e | The **processes** of the organization's SMS |
| f | **Service requirements** |
| g | **Service catalogue(s)** |
| h | **Service level agreement(s)** |
| i | **Contracts with external suppliers** |
| j | **Agreements with internal suppliers or customers acting as a supplier** |
| k | **Procedures** where required by the standard, for example the documented procedure for major incidents |
| l | **Records** needed to demonstrate evidence of conformity to the requirements of the standard and of the organization's SMS |

> **Remember:** the **three named policies or plans** in 7.5.4(d): the **change management policy**, the **information security policy** and the **service continuity plan**. Add the **service management policy** (5.2) and the **service management plan** (6.3), and you have the five "headline" documents of an SMS.

### 7.6 Knowledge

**Requirement (paraphrased).** *(New in 2018)* Determine and **maintain the knowledge** necessary to support the operation of the SMS and the services. The knowledge must be relevant, maintained and made available to the extent necessary.

**In practice.** Knowledge bases, known error databases, runbooks, lessons-learned records from major incident reviews, and supplier documentation. This is the ISO counterpart of ITIL's **knowledge management** practice.

---

## 12.5 Summary: Clauses 4–7 and Typical Evidence

| Clause | Typical evidence |
|---|---|
| 4.1 Context | Context or issues analysis (PESTLE/SWOT), including the climate consideration |
| 4.2 Interested parties | Interested-party register with requirements |
| 4.3 Scope | Documented scope statement (services and organization name) |
| 4.4 SMS | Process framework and interaction map |
| 5.1 Leadership | Management review minutes; top management interviews |
| 5.2 Policy | Approved, communicated service management policy |
| 5.3 Roles | Role descriptions, RACI, appointments |
| 6.1 Risks and opportunities | Risk methodology, acceptance criteria, risk register, treatment plans |
| 6.2 Objectives | Measurable objectives with owners, dates and progress tracking |
| 6.3 SMS plan | Service management plan containing or referencing items a–h |
| 7.1 Resources | Budgets, staffing, tools |
| 7.2 Competence | Skills matrix, training and certification records |
| 7.3 Awareness | Induction, awareness campaigns, interviews |
| 7.4 Communication | Communication plan or matrix |
| 7.5 Documented information | Document control procedure, version history, the 7.5.4 documents |
| 7.6 Knowledge | Knowledge base, known error records, lessons learned |

---

## Key Takeaways: Chapter 12

- **Clause 4:** determine **issues** (including climate change, under Amendment 1) and **interested parties' requirements**; document the **scope** in terms of **services** and the **organization's name**; establish the SMS.
- **Clause 5:** **top management** must lead. This includes making sure **value is determined** and **other parties are controlled**. The **policy** commits to satisfying requirements and to continual improvement, and is documented, communicated and available. **Roles** must be assigned, including responsibility for conformity and for reporting performance.
- **Clause 6:** risks related to **the organization, not meeting service requirements and other parties**; the **impact on customers**, **risk acceptance criteria** and a risk management approach. **Measurable objectives** with what, resources, who, when and how evaluated. A **service management plan** containing or referencing services, limitations, obligations, authorities, resources, the approach to other parties, technology and measurement.
- **Clause 7:** **resources** (human, technical, information, financial); **competence** with evidence; **awareness** (policy, objectives, services, contribution, implications of nonconformity); **communication** (what, when, with whom, how, who); **documented information** controls; mandatory list **7.5.4 a–l**; **knowledge** (new in 2018).

---

## Check Your Knowledge: Chapter 12

*Answers are in Appendix A.*

**Multiple choice**

**12.1** Which clause requires the organization to determine external and internal issues relevant to its purpose and to the intended outcomes of its SMS?

- A) 4.1
- B) 4.3
- C) 6.1
- D) 9.3

**12.2** How must the scope of the SMS be stated?

- A) In terms of the number of users and devices
- B) In terms of the services in scope and the name of the organization managing and delivering them
- C) In terms of the ITIL practices adopted
- D) In terms of the processes excluded

**12.3** Which of the following is a top management responsibility that was explicitly added in ISO/IEC 20000-1:2018?

- A) Personally approving every change
- B) Ensuring that what constitutes value for the organization and its customers is determined
- C) Appointing a management representative
- D) Performing internal audits

**12.4** The service management policy must include a commitment to:

- A) Use ITIL practices
- B) Satisfy applicable requirements and continually improve the SMS and the services
- C) Achieve 99.9% availability for all services
- D) Obtain certification within one year

**12.5** Which of the following risks must be determined and documented according to clause 6.1?

- A) Only information security risks
- B) Risks related to the organization, to not meeting the service requirements, and to the involvement of other parties in the service lifecycle
- C) Only risks identified by the certification body
- D) Only financial risks

**12.6** Which statement about service management objectives is correct?

- A) They must be consistent with the service management policy and be measurable
- B) They must be approved by the certification body
- C) They must be kept confidential from staff
- D) They are only required at board level

**12.7** Which of the following is *not* required content of the service management plan in clause 6.3?

- A) The list of services
- B) Known limitations that can affect the SMS and the services
- C) The approach to working with other parties involved in the service lifecycle
- D) The names and contact details of all users

**12.8** Which of the following is *not* listed as mandatory SMS documented information in clause 7.5.4?

- A) The change management policy
- B) Service level agreements
- C) A RACI matrix for every activity
- D) Contracts with external suppliers

**12.9** Which clause requires people to be aware of the service management policy and of the implications of not conforming with SMS requirements?

- A) 7.2 Competence
- B) 7.3 Awareness
- C) 7.4 Communication
- D) 5.2 Policy

**12.10** According to clause 7.4, which of the following must the organization determine for its communications?

- A) Only the communication tools used
- B) On what, when, with whom, how, and who communicates
- C) Only communications with customers
- D) Only communications with the certification body

**12.11** Which of the following is a control activity for documented information in clause 7.5.3?

- A) Control of changes, such as version control
- B) Publishing all documents on the public website
- C) Printing all documents
- D) Deleting all records after one year

**12.12** Which requirement was newly introduced in the 2018 edition to make sure the organization determines and maintains the knowledge needed to support the SMS and services?

- A) 7.2 Competence
- B) 7.6 Knowledge
- C) 8.2.6 Configuration management
- D) 9.4 Service reporting

**12.13** Which types of resources must the organization determine and provide under clause 7.1?

- A) Human, technical, information and financial
- B) Only human resources
- C) Only technical resources
- D) Hardware and software only

**12.14** Which three documents are named together in clause 7.5.4(d)?

- A) Service catalogue, SLA and supplier contract
- B) Change management policy, information security policy and service continuity plan(s)
- C) Capacity plan, availability plan and release plan
- D) Service management policy, service management plan and scope

**Short answer**

**12.15** Write an SMS scope statement for a fictional organization that provides service desk and cloud hosting services to hospitals from two locations.

**12.16** List at least eight items of mandatory SMS documented information from clause 7.5.4.

**12.17** Describe four things an auditor would check regarding competence (clause 7.2).

**12.18** Explain the difference between the service management policy (5.2) and the service management plan (6.3).

---


# Chapter 13: Clause 8: Operation of the Service Management System

**Suggested study time:** 3 hours (Day 6)

**Learning objectives.** After this chapter you should be able to:

- describe the requirements of every sub-clause of clause 8 of ISO/IEC 20000-1:2018
- explain which changes must be managed through service design and transition rather than through change management alone
- describe the requirements for major incidents, known errors, release acceptance, continuity testing and information security controls
- relate each clause 8 requirement to the ITIL practices you studied in Chapters 6–8

> **Study tip:** for every sub-clause, ask yourself three questions. *What must be done? What must be documented or recorded? What happens "at planned intervals"?* Auditors use exactly these three questions.

---

## 13.1 Overview of Clause 8

```
8.1  Operational planning and control
8.2  SERVICE PORTFOLIO ............ delivery • plan services • control of other parties •
                                    service catalogue • asset mgmt • configuration mgmt
8.3  RELATIONSHIP & AGREEMENT ..... business relationship mgmt • service level mgmt •
                                    supplier mgmt (external / internal)
8.4  SUPPLY & DEMAND .............. budgeting & accounting • demand mgmt • capacity mgmt
8.5  DESIGN, BUILD & TRANSITION ... change mgmt • service design & transition •
                                    release & deployment mgmt
8.6  RESOLUTION & FULFILMENT ...... incident mgmt • service request mgmt • problem mgmt
8.7  SERVICE ASSURANCE ............ availability • continuity • information security
```

The standard **does not dictate how processes are named or organized**. An organization can combine requirements, for example "incident and request management", or split them, for example "release management" and "deployment management". It can also use ITIL practices, as long as every requirement is demonstrably met.

---

## 13.2 Clause 8.1: Operational Planning and Control

**Requirement (paraphrased).** Plan, implement and control the processes needed to meet the SMS requirements and to carry out the actions from clause 6, by:

- establishing **criteria** for the processes
- **controlling** the processes in line with those criteria
- keeping **documented information** to the extent needed to be confident that the processes have been carried out as planned

The organization must also **control planned changes**, **review the consequences of unintended changes** and act to mitigate adverse effects. It must make sure that processes operated by **other parties** are controlled (see 8.2.3).

**In practice.** Process descriptions with inputs, outputs, roles, KPIs and controls; operating calendars; process performance reviews.

---

## 13.3 Clause 8.2: Service Portfolio

### 8.2.1 Service delivery

**Requirement (paraphrased).** The organization must coordinate the **activities and resources needed to deliver the services**, in line with its plans and the agreed service requirements. This includes the contributions of other parties. This sub-clause is the "glue" that makes the processes of clause 8 work together as one delivery system.

### 8.2.2 Plan the services

**Requirement (paraphrased).**

- **Determine and document service requirements** for **existing services**, **new services** and **changes to services**.
- Take into account the requirements of the SMS, the organization's capabilities and its constraints.
- **Determine the criticality of services**, based on the needs of the organization, customers, users and other interested parties.
- **Manage dependencies and duplication** between services.
- **Propose changes** to services where needed, and prioritise them, considering business needs, service requirements, risks and resources. Proposals then follow change management (8.5.1).

**In practice.** A **service portfolio** process that includes service requirements documents, a service criticality classification such as Gold, Silver and Bronze, dependency maps and a prioritised pipeline of service changes. Links to ITIL: **portfolio management**, **business analysis** and **service design**.

### 8.2.3 Control of parties involved in the service lifecycle

**Requirement (paraphrased).**

- The organization **retains accountability** for the requirements of the standard and for the services, even when other parties are involved.
- Other parties include **external suppliers**, **internal suppliers** and **customers acting as a supplier**.
- **Other parties must not provide or operate all** of the services, service components or processes in scope.
- Determine and apply **criteria for evaluating and selecting** other parties.
- Determine **which services, service components and processes** (or parts of processes) are **provided or operated by other parties**.
- **Integrate** the services, components and processes provided by other parties with those of the organization.
- Define and apply **controls** appropriate to each case, for example: requirements for the service components; **measurement and evaluation of the performance** of processes operated by other parties; and contracts or agreements (8.3.4).

> **Exam tip:** a scenario says "the service desk is outsourced, so incident management is the supplier's problem." This is **wrong**. The organization must still **demonstrate control**, through measurement, reviews and integration of the supplier-operated process into the SMS. Accountability is **never** transferred.

**Audit evidence.** A list of outsourced or other-party services, components and processes; supplier selection criteria and evaluations; performance reports; integration points such as a shared incident tool and joint reviews.

### 8.2.4 Service catalogue management

**Requirement (paraphrased).**

- Create and maintain **one or more service catalogues**.
- The catalogue includes information for the organization, customers, users and other interested parties that describes the **services**, their **intended outcomes** and the **dependencies between services**.
- Provide **appropriate access** to the catalogue to customers, users and other interested parties.

**In practice.** A customer-facing service catalogue with service descriptions, service levels, how to request and who to contact. It is often published on the self-service portal. It may also have an internal technical view showing dependencies.

### 8.2.5 Asset management

**Requirement (paraphrased).** Ensure that **assets used to deliver services are managed** so that they meet the **service requirements** and the organization's **obligations**, such as legal, regulatory and contractual requirements identified in the service management plan.

**In practice.** Software licence compliance (SAM), hardware lifecycle management, secure disposal and data-protection obligations for assets holding personal data. Link to ITIL: **IT asset management**.

### 8.2.6 Configuration management

**Requirement (paraphrased).**

- **Define the types of CI** to be managed. Services must be classified as CIs.
- **Record** configuration information to a **level of detail appropriate to the criticality and type of services**. Configuration information must include:
  - a **unique identification**
  - the **type** of CI
  - a **description** of the CI
  - its **relationship with other CIs**
  - its **status**
- **Control CIs.** Changes to CIs must be **traceable and auditable** to maintain the integrity of CIs and configuration information.
- Configuration information is updated when changes are deployed (8.5.3).
- **Verify** the accuracy of configuration information **at planned intervals**. Record and act on any deficiencies found.
- Make configuration information **available to other service management activities** as appropriate, and **control access** to it.

> **Remember:** the five mandatory pieces of configuration information. **"I-T-D-R-S": Identification, Type, Description, Relationships, Status.**

**Audit evidence.** A CI type model, CMDB or other configuration records, a link between change records and CI updates, configuration audit or verification reports, and corrective actions for discrepancies.

---

## 13.4 Clause 8.3: Relationship and Agreement

### 8.3.1 General

This sub-clause sets the context for managing the relationships between the organization, its **customers**, **users** and **other parties** through **agreements**. The specific requirements follow in 8.3.2–8.3.4.

### 8.3.2 Business relationship management

**Requirement (paraphrased).**

- **Identify and document** the customers, users and other interested parties of the services.
- **Designate one or more individuals** responsible for managing **customer relationships** and maintaining **customer satisfaction**.
- Establish **communication arrangements** with customers.
- Understand **changes in customer needs**, for example new or changed service requirements and changes in the customer's business environment.
- **At planned intervals**, review **performance trends and outcomes** of the services with customers.
- **At planned intervals**, **measure customer satisfaction**, for example based on a representative sample. **Analyse** the results and **identify improvement opportunities**.
- **Service complaints** must be **recorded, investigated, acted upon, reported and formally closed**. Where a complaint is not resolved through normal channels, **escalation** must be available.

> **Exam tip:** in ISO/IEC 20000-1:2018, **complaints** are handled in **business relationship management (8.3.2)**, not in incident management.

**Audit evidence.** A customer list with named relationship managers, service review minutes, satisfaction surveys and their analysis, a complaints log showing records through to formal closure, and the escalation path.

### 8.3.3 Service level management

**Requirement (paraphrased).**

- **Agree** with the customer the **services to be delivered**.
- Establish **one or more SLAs** with the customer, based on the documented service requirements. An SLA includes the **services**, the **service level targets**, the **workload characteristics** (for example volumes and limits) and any **exceptions**.
- **At planned intervals**, **monitor, review, report and evaluate**:
  - **performance against the service level targets**
  - **actual and periodic changes in workload** compared with the workload characteristics in the SLA
- Where service level targets are **not met**, **identify improvement opportunities**.

**In practice.** SLAs with measurable targets, such as "P1 incidents resolved within 4 hours, 95% of the time" or "availability 99.8% during business hours". Monthly service reports and quarterly service reviews. The **workload characteristics** clause matters: an SLA for 500 users may not hold if the customer grows to 2,000 users without a review.

**Audit evidence.** Signed or approved SLAs, service reports comparing actual performance with targets, workload trend reports, service review minutes and improvement actions for breaches.

### 8.3.4 Supplier management

#### 8.3.4.1 Management of external suppliers

**Requirement (paraphrased).**

- **Designate one or more individuals** responsible for managing the **relationship, contracts and performance** of each external supplier.
- For each external supplier, agree a **documented contract** that includes or references:
  - the **scope** of the services, service components or processes to be provided or operated by the supplier
  - the **requirements** to be met by the supplier
  - **service level targets** or other contractual obligations
  - the **authorities and responsibilities** of the organization and the supplier
- Make sure the contract is **aligned** with the SLAs and service requirements it supports, so that supplier commitments enable the organization to meet its own targets.
- Agree the **interfaces** between the organization and the supplier, for example how incidents are passed between them.
- **At planned intervals**, **monitor the performance** of the supplier and **review the contract** against current requirements.
- **Record and manage disputes** between the organization and the supplier through to closure, and manage changes to contracts in a controlled way.

#### 8.3.4.2 Management of internal suppliers and customers acting as a supplier

**Requirement (paraphrased).**

- Develop, agree and maintain a **documented agreement** with each internal supplier, and with each customer acting as a supplier. The agreement defines the **service level targets**, other **commitments**, **activities** and **interfaces** between the parties.
- **At planned intervals**, **monitor performance** against the agreement and review it, managing changes and disputes.

> **Remember:** **external supplier → contract**; **internal supplier or customer acting as a supplier → documented agreement** (an OLA in ITIL terms). Both must be monitored at planned intervals.

**Audit evidence.** A supplier register with owners, contracts and agreements, supplier performance reports, contract review records, a disputes log, and evidence that supplier targets support SLA targets.

---


## 13.5 Clause 8.4: Supply and Demand

### 8.4.1 Budgeting and accounting for services

**Requirement (paraphrased).**

- **Budget and account** for services, or groups of services, in line with the organization's **financial management policies and processes**.
- Budget costs so as to enable effective **financial control and decision-making** for services.
- **At planned intervals**, **monitor and report actual costs against the budget**, **review financial forecasts** and **manage costs**.

**Note.** **Charging** for services is **not required** by the standard. Many internal providers do not charge. If an organization does charge, its charging approach should be defined and transparent.

**Link to ITIL:** service financial management.

### 8.4.2 Demand management

**Requirement (paraphrased).**

- **At planned intervals**, **determine and analyse current and forecast demand** for services.
- **Monitor and report** on the **demand for, and consumption of**, services.

**In practice.** Demand forecasts from customers' business plans, for example store openings, new hires or marketing campaigns. Usage trends and patterns of business activity. Demand management is a **new requirement in the 2018 edition**. It feeds capacity management (8.4.3) and budgeting (8.4.1).

### 8.4.3 Capacity management

**Requirement (paraphrased).**

- **Determine, document and maintain capacity requirements** for **human, technical, information and financial resources**, taking into account the service and performance requirements.
- **Plan capacity**, including:
  - current and **forecast capacity** based on **demand** (8.4.2)
  - the **expected impact on capacity** of agreed service level targets, of changes, and of new or changed services
  - predicted changes, for example new technology or business growth
- **Provide sufficient capacity** to meet the agreed capacity and performance requirements.
- **At planned intervals**, **monitor capacity utilisation**, **analyse capacity and performance data**, and **identify opportunities to improve performance**.

> **Exam tip:** ISO/IEC 20000-1 capacity covers **people, information and money**, not just servers and bandwidth. "The service desk has too few agents for the forecast call volume" is a **capacity** issue.

---

## 13.6 Clause 8.5: Service Design, Build and Transition

This group decides **which route a change takes**:

```
                        Request for change (RFC) recorded and classified (8.5.1.2)
                                          │
              ┌───────────────────────────┴────────────────────────────┐
              │                                                        │
   Meets criteria for "potential major impact",            All other changes
   OR is a new service, a removal of a service,                        │
   OR a transfer of a service                                          │
              │                                                        │
              ▼                                                        ▼
   8.5.2 SERVICE DESIGN AND TRANSITION                  8.5.1.3 CHANGE MANAGEMENT ACTIVITIES
   (plan → design → build & transition)                 (assess → approve → schedule →
              │                                          build & test → deploy → review)
              └──────────────► 8.5.3 RELEASE AND DEPLOYMENT MANAGEMENT ◄──┘
```

Changes routed through 8.5.2 are **still changes**, governed by the change management policy. The difference is that they receive the fuller **service design and transition** treatment.

### 8.5.1 Change management

#### 8.5.1.1 Change management policy

**Requirement (paraphrased).** Establish a **change management policy** that defines at least:

- the **CIs under the control** of change management
- the **criteria for identifying changes with the potential to have a major impact** on services or customers

**In practice.** The policy also normally defines the **categories of change**, such as standard (pre-approved), normal and emergency, the authorisation levels for each category, and how **emergency changes** are handled. Auditors expect to see emergency changes clearly defined and controlled. The change management policy is one of the **named mandatory documents** in 7.5.4(d).

#### 8.5.1.2 Change management initiation

**Requirement (paraphrased).**

- **Requests for change**, including proposals to **add, remove or transfer services**, must be **recorded and classified**.
- Changes are managed through **service design and transition (8.5.2)** when they involve:
  - **new services**
  - **changes to services that meet the criteria for potential major impact**
  - the **removal of a service**
  - the **transfer of a service**, either from the organization to a customer or other party, or from a customer or other party to the organization
- **All other changes** follow the change management activities (8.5.1.3).

**Note.** The standard's definition of a **service request** includes a **pre-approved change**. Pre-approved (standard) changes can therefore be fulfilled through **service request management**.

#### 8.5.1.3 Change management activities

**Requirement (paraphrased).**

- **Assess and decide** on requests for change, considering the **risks**, the **potential impact** on services, customers and the SMS, **service requirements**, **business benefits**, **technical feasibility** and **financial impact**.
- Decisions are made by **people or groups with the appropriate authority**. **Customers and interested parties** are involved in decision-making where appropriate.
- **Approved changes** are **prepared, verified and, where possible, tested**.
- **Proposed deployment dates** and other deployment details are **communicated to interested parties**. This is the **schedule of change**.
- **Activities to reverse or remedy an unsuccessful change** are **planned and, where possible, tested**.
- **Unsuccessful changes are reversed or remedied.**
- Changes are **reviewed for effectiveness** after deployment, and actions are taken where needed.
- **At planned intervals**, change records are **analysed to detect trends**. Results and conclusions are recorded and **improvement opportunities** are identified.

**Audit evidence.** The change policy, change records with risk assessment and authorisation, a published schedule of change, backout plans, post-implementation reviews, and trend analysis, for example of failed changes or emergency change percentages.

### 8.5.2 Service design and transition

#### 8.5.2.1 Plan new or changed services

**Requirement (paraphrased).** Planning uses the **service requirements** determined in 8.2.2. It contains or references:

- **authorities and responsibilities** for the design, build and transition activities
- **activities** to be performed by the organization or other parties, with **timescales**
- **human, technical, information and financial resources**
- **dependencies** on other services
- the **testing** needed for the new or changed services
- **service acceptance criteria**
- the **intended outcomes** of delivering the new or changed services, **expressed in measurable terms**

**Removal of a service:** planning also covers the **date(s) of removal** and the **archiving, disposal or transfer of data, documented information and service components**.

**Transfer of a service:** planning also covers the **date(s) of transfer** and the **activities** needed to transfer the service.

#### 8.5.2.2 Design

**Requirement (paraphrased).** **Design and document** new or changed services to meet the service requirements. The design includes, as appropriate:

- the **authorities and responsibilities** of the parties involved in delivering the service
- **requirements for changes** to **human, technical, information and financial resources**
- requirements for appropriate **training**
- **new or changed agreements and contracts**, aligned with the changes in service requirements
- **changes to the SMS**
- the **impact on other services**
- **updates to the service catalogue**

#### 8.5.2.3 Build and transition

**Requirement (paraphrased).**

- **Build and test** the new or changed services.
- **Verify** them against the **service acceptance criteria** before **deployment** through release and deployment management (8.5.3).
- After the transition is complete, **report to interested parties on the outcomes achieved** compared with the **intended outcomes**.

> **In practice:** a company launches a new customer portal. The service design and transition plan names the project manager and service owner, the supplier activities, the budget, and dependencies on the identity and payment services. It includes performance and security testing, acceptance criteria such as "page load under 2 seconds at 1,000 concurrent users" and "zero critical vulnerabilities", and measurable intended outcomes such as "30% of orders placed online within six months". Six months after go-live, a report compares actual against intended outcomes.

### 8.5.3 Release and deployment management

**Requirement (paraphrased).**

- **Define release types**, including **emergency releases**, their **frequency** and **how they are managed**.
- **Plan the deployment** of new or changed services and service components into the live environment. Planning is **coordinated with change management** and references the related **requests for change**, **known errors** and **problems** being resolved by the release. It includes **deployment dates**, **deliverables** and **deployment methods**.
- **Releases are verified against documented acceptance criteria and approved before deployment.** If the criteria are not met, the organization **decides on the necessary actions** and on whether to deploy.
- Maintain the **integrity of hardware, software and other service components** during deployment.
- **Monitor the success or failure of releases**, including **incidents related to a release in the period following deployment**. **Analyse** the results and record the conclusions.
- Make information about the **success or failure of releases** and **future release dates** available to other service management activities, such as incident and service request management.
- Update **configuration information** to reflect deployed releases (link to 8.2.6).

**Good practice (not explicitly required).** Taking a **baseline of affected CIs** before deployment, so that rollback is possible. Deploying from a controlled source, such as a definitive media library or artifact repository.

**Audit evidence.** A release policy or definitions, release plans linked to change requests, acceptance test records and go/no-go decisions, deployment records, early-life support and post-release incident analysis, and updated CMDB records.

---


## 13.7 Clause 8.6: Resolution and Fulfilment

### 8.6.1 Incident management

**Requirement (paraphrased).** Incidents must be:

1. **recorded and classified**
2. **prioritised**, taking into account **impact and urgency**
3. **escalated**, if needed
4. **resolved**
5. **closed**

**Incident records** are **updated with the actions taken**. Information security incidents are handled according to 8.7.3.3. Known error information supports resolution.

**Major incidents**

- The organization must **determine the criteria** for identifying a **major incident**.
- Major incidents are **classified and managed according to a documented procedure**.
- **Top management is informed** of major incidents.
- **A person is designated** as responsible for **managing** each major incident.
- After the agreed service has been **restored**, major incidents are **reported and reviewed** to **identify opportunities for improvement**.

> **Remember:** the **major incident procedure** is one of the few **documented procedures** that the standard explicitly requires.

### 8.6.2 Service request management

**Requirement (paraphrased).** Service requests must be:

1. **recorded and classified**
2. **prioritised**
3. **fulfilled**
4. **closed**

**Service request records** are **updated with the actions taken**. **Instructions for fulfilling service requests** are made **available to the people involved** in fulfilment.

### 8.6.3 Problem management

**Requirement (paraphrased).**

- **Analyse data and trends on incidents** to **identify problems**.
- Undertake **root cause analysis** and determine potential actions to **prevent the occurrence or recurrence of incidents**.
- Problems must be **recorded and classified**, **prioritised**, **escalated** if needed, **resolved** if possible, and **closed**. Problem records are **updated with the actions taken**.
- **Changes needed to resolve problems** are managed in line with the **change management policy**.
- Where the **root cause has been identified but the problem has not been permanently resolved**, determine **actions to reduce or eliminate the impact** of the problem on services, for example workarounds. **Known errors are recorded.**
- **Up-to-date information on known errors and problem resolutions** is made **available to other service management activities**, such as incident management.
- **At planned intervals**, the **effectiveness of problem resolution** is **monitored, reviewed and reported**.

> **ISO and ITIL compared:** both require identifying problems from incident trends, root cause analysis, workarounds, recording known errors, sharing them with incident management, and making fixes through change. ISO adds **periodic review of the effectiveness of problem resolution**.

---

## 13.8 Clause 8.7: Service Assurance

### 8.7.1 Service availability management

**Requirement (paraphrased).**

- **At planned intervals**, **assess and document risks** to service availability.
- **Determine the service availability requirements and targets**, taking into account business requirements, service requirements, SLAs and risks. **Document** them.
- **Monitor service availability**, **record** the results and **compare them with the targets**.
- **Investigate unplanned non-availability** and take the necessary actions.

### 8.7.2 Service continuity management

**Requirement (paraphrased).**

- **At planned intervals**, **assess and document risks** to service continuity.
- **Determine the service continuity requirements**, taking into account business requirements, service requirements, SLAs and risks.
- **Establish, implement and maintain service continuity plan(s)** that include or reference:
  - the **criteria and responsibilities for invoking** service continuity
  - the **procedures to be implemented in the event of a major loss of service**
  - the **targets for the availability** of the service when the continuity plan is invoked
  - the **service requirements**
  - the **procedures for restoring normal working conditions**
- The service continuity plan(s) and **contact lists** must be **accessible when access to the normal service locations is prevented**.
- **Test** the plan(s) against the continuity requirements **at planned intervals** and **after major changes** to the service environment.
- **Record the results** of tests. Conduct **reviews after each test and after any invocation**. **Act on any deficiencies**.
- When the plan is invoked, **report** on the **reason**, the **impact** and the **recovery**.

> **Exam tip:** ISO/IEC 20000-1 does not require **business** continuity management for the whole organization. It requires **service** continuity for the services in scope. ISO 22301 covers business continuity.

### 8.7.3 Information security management

#### 8.7.3.1 Information security policy

**Requirement (paraphrased).**

- **Top management**, or a person delegated with the appropriate authority, must **approve an information security policy**.
- The policy takes into account the **service requirements**, the requirements of the SMS, **legal and regulatory requirements**, and **contractual obligations**.
- The policy is **communicated** to relevant people in the organization and, as appropriate, to **customers and suppliers**.
- It is one of the **named mandatory documents** in 7.5.4(d).

#### 8.7.3.2 Information security controls

**Requirement (paraphrased).**

- **At planned intervals**, **assess and document information security risks** to the SMS and the services.
- **Determine, implement and operate information security controls** that support the policy and address the identified risks. **Document the decisions** about controls.
- **Agree and implement controls** that address information security risks related to **external organizations**, such as suppliers and customers.
- **Monitor and review the effectiveness** of the controls and take the necessary actions.

#### 8.7.3.3 Information security incidents

**Requirement (paraphrased).**

- Information security incidents are **managed using the incident management procedures**, with a **priority based on the information security risks**.
- They are **analysed by type, volume and impact** on the SMS, the services and interested parties.
- They are **reported and reviewed** to identify opportunities for improvement.

> **In practice:** organizations certified to **ISO/IEC 27001** usually meet 8.7.3 easily by referencing their ISMS risk assessment, Statement of Applicability and controls. **ISO/IEC 27013** gives guidance on integrating the two standards.

---

## 13.9 Clause 8 Summary: ISO Requirement, ITIL Practice and Key Evidence

| ISO/IEC 20000-1:2018 | Main ITIL 4 practice(s) | Key documented information or evidence |
|---|---|---|
| 8.1 Operational planning and control | (value chain: plan) | Process definitions, criteria and controls |
| 8.2.1 Service delivery | All delivery practices | Operational records |
| 8.2.2 Plan the services | Portfolio management, business analysis | **Service requirements**, criticality, dependencies |
| 8.2.3 Control of other parties | Supplier management | Other-party list, selection criteria, performance evaluations |
| 8.2.4 Service catalogue management | Service catalogue management | **Service catalogue(s)** |
| 8.2.5 Asset management | IT asset management | Asset register, licence records |
| 8.2.6 Configuration management | Service configuration management | CI records (ID, type, description, relationships, status), verification records |
| 8.3.2 Business relationship management | Relationship management | Customer list, satisfaction results, **complaint records** |
| 8.3.3 Service level management | Service level management | **SLAs**, service reports, workload reviews |
| 8.3.4 Supplier management | Supplier management | **Contracts**, **agreements**, performance reviews, disputes |
| 8.4.1 Budgeting and accounting | Service financial management | Budgets, cost reports, forecasts |
| 8.4.2 Demand management | Capacity and performance management, relationship management | Demand forecasts, consumption reports |
| 8.4.3 Capacity management | Capacity and performance management | Capacity requirements and plans, utilisation reports |
| 8.5.1 Change management | Change enablement | **Change policy**, change records, schedule of change, trend analysis |
| 8.5.2 Service design and transition | Service design, service validation and testing, project management | Plans, designs, acceptance criteria, outcome reports |
| 8.5.3 Release and deployment management | Release management, deployment management | Release definitions, plans, acceptance records, post-release monitoring |
| 8.6.1 Incident management | Incident management, service desk | Incident records, **major incident procedure**, major incident reviews |
| 8.6.2 Service request management | Service request management, service desk | Request records, fulfilment instructions |
| 8.6.3 Problem management | Problem management | Problem and known error records, effectiveness reviews |
| 8.7.1 Availability management | Availability management | Availability requirements, targets, risk assessments, reports |
| 8.7.2 Service continuity management | Service continuity management | **Continuity plan(s)**, test results, reviews |
| 8.7.3 Information security management | Information security management | **Information security policy**, risk assessments, controls, security incident analysis |

---

## Key Takeaways: Chapter 13

- **8.2 Service portfolio:** plan services (requirements, **criticality**, dependencies); **control other parties**, where accountability stays with the organization and outsourcing everything is not allowed; **service catalogue** (services, outcomes, dependencies); **asset management** (obligations such as licences); **configuration management** (I-T-D-R-S, traceable changes, verification at planned intervals).
- **8.3 Relationship and agreement:** **BRM**, including named relationship owners, satisfaction measurement and **complaints** through to formal closure with escalation; **SLM**, with SLAs covering services, targets, **workload characteristics** and exceptions, reviewed at planned intervals; **suppliers**: external suppliers through **contracts** and internal suppliers through **documented agreements**.
- **8.4 Supply and demand:** **budgeting and accounting** (charging is optional); **demand** forecasts; **capacity** covering human, technical, information and financial resources.
- **8.5 Design, build and transition:** a **change policy** (CIs in scope and major-impact criteria); new services, major-impact changes, **removals and transfers** go through **service design and transition**; change decisions by an appropriate authority; **remediation** planned and tested where possible; **trend analysis**. **Releases** are verified against acceptance criteria before deployment and monitored afterwards for related incidents.
- **8.6 Resolution and fulfilment:** incidents recorded, classified, prioritised (impact and urgency), escalated, resolved and closed. **Major incidents** need defined criteria, a **documented procedure**, top management informed, a responsible person and a review. Service requests have fulfilment instructions. Problem management covers trend analysis, RCA, **known errors** shared with others, and effectiveness reviews.
- **8.7 Service assurance:** **availability** (risks, targets, monitoring, investigating unplanned non-availability); **continuity** (plans accessible offsite, **tested at planned intervals and after major changes**, reviewed after tests and invocations); **information security** (policy approved by top management, risk-based controls, security incidents handled through incident management).

---

## Check Your Knowledge: Chapter 13

*Answers are in Appendix A.*

**Multiple choice**

**13.1** According to ISO/IEC 20000-1:2018, which of the following must be managed through *service design and transition* (8.5.2)?

- A) All changes, without exception
- B) New services, changes with the potential for major impact, removal of a service, and transfer of a service
- C) Only emergency changes
- D) Only changes requested by customers

**13.2** Which information must configuration information for each CI include?

- A) Purchase price, warranty date and supplier
- B) Unique identification, type of CI, description, relationship with other CIs, and status
- C) The name of the user and their manager
- D) The incident history only

**13.3** Which clause requires service complaints to be recorded, investigated, acted upon, reported and formally closed?

- A) 8.6.1 Incident management
- B) 8.3.2 Business relationship management
- C) 8.3.3 Service level management
- D) 10.1 Nonconformity and corrective action

**13.4** According to clause 8.3.3, what does an SLA include?

- A) Only availability targets
- B) The services, service level targets, workload characteristics and exceptions
- C) The supplier's internal procedures
- D) The organization's financial statements

**13.5** How must the organization formalise its relationships with external suppliers and with internal suppliers?

- A) Verbal agreements for both
- B) Documented contracts with external suppliers, and documented agreements with internal suppliers and customers acting as suppliers
- C) SLAs for both
- D) No formal arrangements are required for internal suppliers

**13.6** Which statement about capacity management in ISO/IEC 20000-1:2018 is correct?

- A) It applies only to servers and storage
- B) Capacity requirements cover human, technical, information and financial resources
- C) Capacity is reviewed only when an incident occurs
- D) Capacity management is optional

**13.7** Which of the following is a requirement for *major incidents*?

- A) They are managed according to a documented procedure, top management is informed, a person is designated to manage them, and they are reviewed after service is restored
- B) They are handled only by the external supplier
- C) They do not need to be recorded
- D) They must be reported to the certification body within 24 hours

**13.8** What must problem management do when the root cause of a problem has been identified but the problem has not been permanently resolved?

- A) Close the problem
- B) Determine actions to reduce or eliminate its impact on services, record a known error, and make the information available
- C) Escalate it to the certification body
- D) Ignore it until another incident occurs

**13.9** How must information security incidents be managed according to clause 8.7.3.3?

- A) Outside the SMS, by the security team only
- B) Using the incident management procedures, with a priority based on the information security risks
- C) Only through the change management process
- D) Only when reported by customers

**13.10** When must service continuity plans be tested?

- A) Only once, before certification
- B) At planned intervals and after major changes to the service environment
- C) Only after a real disaster
- D) Every day

**13.11** What must happen to a release before deployment?

- A) It must be approved by every user
- B) It must be verified against documented acceptance criteria and approved
- C) It must be deployed to all environments simultaneously
- D) Nothing; verification takes place after deployment

**13.12** Which statement about charging for services is correct according to ISO/IEC 20000-1:2018?

- A) Charging is mandatory for all services
- B) Charging is not required. The standard requires budgeting and accounting for services
- C) Charging must be based on usage
- D) Charging is required only for external customers

**13.13** What does clause 8.4.2 (demand management) require?

- A) At planned intervals, determine and analyse current and forecast demand for services, and monitor and report on demand and consumption
- B) Reduce demand for all services
- C) Approve every user request personally
- D) Forecast demand only when capacity is exceeded

**13.14** Who must approve the information security policy?

- A) Any member of staff
- B) Top management, or a person with the appropriate delegated authority
- C) The certification body
- D) The external supplier

**13.15** Which of the following is required by clause 8.2.2 (plan the services)?

- A) Determining the criticality of services and managing dependencies and duplication between services
- B) Purchasing an ITSM tool
- C) Outsourcing at least one service
- D) Charging customers for services

**13.16** Which of the following is a requirement of clause 8.2.3 (control of parties involved in the service lifecycle)?

- A) The organization transfers its accountability to its suppliers
- B) The organization determines and applies criteria for the evaluation and selection of other parties
- C) All processes must be operated by other parties
- D) Other parties are excluded from the SMS scope

**13.17** After a release has been deployed, what must the organization monitor as part of release and deployment management?

- A) The share price of the supplier
- B) Incidents related to the release in the period following deployment
- C) Only the time taken to deploy
- D) The number of users who downloaded the release notes

**Short answer**

**13.18** Describe the route each of the following takes under clauses 8.5.1 and 8.5.2: (a) the removal of a legacy service; (b) a minor patch to an internal application; (c) a pre-approved password reset.

**13.19** List the items that service continuity plans must include or reference under clause 8.7.2.

**13.20** An organization outsources its service desk to an external company. Explain how it can demonstrate control under clause 8.2.3.

**13.21** Identify four elements that ISO/IEC 20000-1 problem management (8.6.3) and the ITIL problem management practice have in common.

---


# Chapter 14: Clauses 9 and 10, Audit and Certification

**Suggested study time:** 1.5 hours (Day 6)

**Learning objectives.** After this chapter you should be able to:

- explain the requirements of clause 9 (monitoring and measurement, internal audit, management review, service reporting) and clause 10 (nonconformity and corrective action, continual improvement)
- distinguish correction, corrective action and risk-based prevention
- describe the ISO/IEC 20000-1 certification process, audit types and finding categories
- outline a practical implementation roadmap and the most common audit findings

---

## 14.1 Clause 9: Performance Evaluation

### 9.1 Monitoring, measurement, analysis and evaluation

**Requirement (paraphrased).** The organization must determine:

- **what** needs to be monitored and measured
- the **methods** for monitoring, measurement, analysis and evaluation, so that the results are valid
- **when** monitoring and measuring are performed
- **when** the results are analysed and evaluated

It must **retain documented information** as evidence of the results, and **evaluate the performance and effectiveness of the SMS** and the services.

**In practice.** A measurement framework that links objectives to KPIs, data sources, frequencies and owners. Typical examples are SLA attainment, change success rate, first-contact resolution, customer satisfaction and audit closure rate. See Chapter 15 for the design of metrics.

### 9.2 Internal audit

**Requirement (paraphrased).**

- Conduct **internal audits at planned intervals** to determine whether the SMS:
  - **conforms** to the organization's **own requirements** for its SMS **and** to the **requirements of ISO/IEC 20000-1**
  - is **effectively implemented and maintained**
- Plan, establish, implement and maintain an **audit programme**, covering frequency, methods, responsibilities, planning requirements and reporting. The programme must take into account the **importance of the processes** concerned and the **results of previous audits**.
- Define the **audit criteria and scope** for each audit.
- **Select auditors and conduct audits so that they are objective and impartial.** Auditors should not audit their own work.
- **Report** the audit results to **relevant management**.
- **Retain documented information** as evidence of the audit programme and the audit results.

**Guidance:** **ISO 19011** provides guidelines for auditing management systems.

> **In practice:** a common approach is a **rolling three-year audit programme**. Every clause and process is audited at least once per certification cycle, and high-risk or previously weak areas are audited every year. The service desk manager can audit change management but not the service desk.

### 9.3 Management review

**Requirement (paraphrased).** **Top management** must **review the SMS and the services at planned intervals** to ensure their continuing **suitability, adequacy and effectiveness**.

**Inputs** to the management review include consideration of:

- the **status of actions** from previous management reviews
- **changes in external and internal issues** relevant to the SMS (link to 4.1)
- information on the **performance and effectiveness of the SMS**, including trends in:
  - **nonconformities and corrective actions**
  - **monitoring and measurement results**
  - **audit results**
- **opportunities for continual improvement**
- **customer feedback and feedback from other interested parties**
- the **adequacy of resources**
- the **performance of the services**
- the **effectiveness of actions taken to address risks and opportunities** (link to 6.1)
- changes to the needs and expectations of interested parties and to service requirements

**Outputs** include **decisions** on **continual improvement opportunities** and on any **need for changes to the SMS and the services**, including resource needs.

**Retain documented information** as evidence of the results of management reviews, for example minutes and action lists.

> **Exam tip:** **management review is performed by top management.** An SMS manager reviewing their own processes is not a management review. If top management never attends, that is a typical **major** finding.

### 9.4 Service reporting

**Requirement (paraphrased).**

- Determine the **requirements for reports** and their **purpose**.
- Produce reports on the **performance and effectiveness of the services** at planned intervals, using information from the delivery of the services and from SMS activities.
- Service reporting must include **trends**.
- **Make decisions and take actions** based on the findings in service reports, and **communicate** the agreed actions to relevant interested parties.

**In practice.** Monthly service reports per customer or SLA showing performance against targets, major incidents, changes, capacity, customer satisfaction, trends over the last 12 months, and agreed actions. A report that nobody acts on does not satisfy 9.4.

---

## 14.2 Clause 10: Improvement

### 10.1 Nonconformity and corrective action

**Requirement (paraphrased).** When a **nonconformity** occurs, the organization must:

1. **react** to the nonconformity: take action to **control and correct** it, and **deal with the consequences**
2. **evaluate the need for action to eliminate the cause(s)**, so that it does not recur or occur elsewhere, by:
   - **reviewing** the nonconformity
   - **determining its causes**
   - determining whether **similar nonconformities exist** or could potentially occur
3. **implement** any action needed
4. **review the effectiveness** of any corrective action taken
5. **make changes to the SMS**, if necessary

Corrective actions must be **appropriate to the effects** of the nonconformities encountered. The organization must **retain documented information** as evidence of the **nature** of the nonconformities, the **actions** taken and the **results** of corrective actions.

### Correction, corrective action and prevention

| Term | Meaning | Example: the continuity plan was not tested this year |
|---|---|---|
| **Correction** | Fixing the immediate nonconformity | Schedule and perform the overdue test now |
| **Corrective action** | Eliminating the **cause** to prevent **recurrence** | The root cause was that no one owned the test schedule. Assign an owner, add the test to the compliance calendar with reminders and add it to the management review dashboard |
| **Prevention (risk-based thinking)** | Acting **before** a nonconformity occurs | Through 6.1 risk assessment, identify that other annual activities have the same weakness and add them to the calendar too |

> **Remember:** the 2018 edition has **no separate "preventive action" clause**. Prevention is achieved through **risk-based planning (6.1)** and continual improvement.

### 10.2 Continual improvement

**Requirement (paraphrased).**

- **Continually improve** the **suitability, adequacy and effectiveness** of the SMS and the services.
- **Determine evaluation criteria** to apply to **opportunities for improvement**, to decide whether they are applicable.
- Manage the approved improvement activities. This typically includes:
  - setting **targets** for improvements in, for example, quality, value, capability, cost, productivity, resource utilisation and risk reduction
  - **prioritising** improvements
  - **planning and implementing** them
  - **measuring** results against the targets and **reporting** on the implemented improvements

**Link to ITIL:** the continual improvement practice, the CIR and the continual improvement model (Chapters 5 and 6).

---

## 14.3 Audit Fundamentals

### Types of audit

| Type | Performed by | Example |
|---|---|---|
| **First-party** | The organization itself | The **internal audit** required by 9.2 |
| **Second-party** | A party with an interest in the organization, usually a **customer** auditing its **supplier** | A bank audits its outsourcing provider against contract terms |
| **Third-party** | An **independent certification body** | The ISO/IEC 20000-1 certification audit |

### Key audit terms

| Term | Meaning |
|---|---|
| **Audit criteria** | The requirements the audit compares against: the standard, policies, procedures and contracts |
| **Audit evidence** | Records, statements of fact and other verifiable information |
| **Audit scope** | The extent and boundaries of the audit: services, locations, processes and period |
| **Sampling** | Examining a representative selection, for example 15 change records out of 600 |
| **Audit trail** | Following a real case through linked records and processes |
| **Finding** | The result of evaluating evidence against criteria: conformity or nonconformity |

### Categories of finding (as typically used by certification bodies)

| Category | Meaning | Example | Consequence |
|---|---|---|---|
| **Major nonconformity** | The **absence** or **total breakdown** of a required process or requirement, or a situation that raises **significant doubt** that the SMS can achieve its intended outcomes | No management reviews have ever been held; no internal audit programme exists; the continuity plan has never been tested | **Certification cannot be granted, or is suspended,** until correction and corrective action have been verified |
| **Minor nonconformity** | A **single or isolated lapse** that does not by itself indicate a breakdown of the system | One of 15 sampled changes lacks a documented backout plan | A **corrective action plan** must be accepted. Effectiveness is verified at the next audit |
| **Observation / opportunity for improvement (OFI)** | Not a nonconformity, but a potential weakness or improvement idea | The SLA review is held, but the minutes do not show trends | No mandatory action, but the organization should consider it |

### Typical audit techniques

- **Document review:** policies, plans, SLAs, contracts and records.
- **Interviews:** top management, process owners and practitioners. "Show me" is better than "tell me".
- **Observation:** watching the service desk handle calls, or watching a change advisory meeting.
- **Sampling and audit trails:** for example, start from a **major incident** and trace it to the **problem** record, the **known error**, the **change request** for the fix, the **release** that deployed it, the **CMDB update** and the **major incident review** report. One trail tests the integration of six processes.

---

## 14.4 The Certification Process

### Who is involved

- **Accreditation bodies** are national bodies that accredit certification bodies. Examples are UKAS (UK), ANAB (USA), DAkkS (Germany), COFRAC (France), ACCREDIA (Italy) and ESYD (Greece). They are members of the **International Accreditation Forum (IAF)**.
- **Certification bodies (CBs)** audit and certify organizations. They are accredited against **ISO/IEC 17021-1** and **ISO/IEC 20000-6**.
- The **organization** seeking certification.

> **Remember:** **ISO itself does not certify anyone.** It publishes standards. Certification is performed by independent, ideally **accredited**, certification bodies.

### The certification cycle

| Step | What happens |
|---|---|
| 1. **Preparation** | Implement the SMS. Run it long enough to produce records, typically several months. Complete at least **one internal audit** cycle and **one management review** |
| 2. **Optional pre-assessment** | An informal gap audit by the CB or a consultant |
| 3. **Stage 1 audit** | Reviews **documentation and readiness**: scope, policies, the service management plan, the processes, internal audit and management review evidence, and understanding of requirements. It identifies concerns that could become nonconformities and plans Stage 2 |
| 4. **Stage 2 audit** | Evaluates the **implementation and effectiveness** of the SMS on site or remotely, through interviews, observation, sampling and audit trails |
| 5. **Findings and corrective action** | Major nonconformities must be corrected and verified. Corrective action plans for minor nonconformities must be accepted |
| 6. **Certification decision** | Made by the CB, by people **independent of the audit team** |
| 7. **Certificate** | Valid for **three years**. It states the **scope** of the certification |
| 8. **Surveillance audits** | At least **once a year** in years 1 and 2. The first surveillance takes place within 12 months of the certification decision. These audits sample parts of the SMS and always cover key elements such as internal audit, management review, corrective actions and complaints |
| 9. **Recertification audit** | Before the certificate expires, a full reassessment that starts a new three-year cycle |

---

## 14.5 Implementing ISO/IEC 20000-1: A Practical Roadmap

| Phase | Key activities |
|---|---|
| **1. Commit** | Obtain **top management commitment** and sponsorship. Appoint an SMS manager. Agree the business case |
| **2. Scope** | Define the **scope** (services, customers, locations), using ISO/IEC 20000-3 |
| **3. Gap analysis** | Assess the current state against **every requirement** of clauses 4–10. This is "start where you are" in action |
| **4. Plan** | Write the implementation plan. Define the **policy**, **objectives**, **risk methodology** and **service management plan** |
| **5. Design and document** | Design or adapt processes, using ITIL as guidance. Produce the 7.5.4 documented information: catalogue, SLAs, contracts, change policy, information security policy and continuity plan |
| **6. Tools and integration** | Configure the ITSM tool, CMDB, monitoring and reporting |
| **7. Train and communicate** | Competence (7.2), awareness (7.3) and communication (7.4) |
| **8. Operate** | Run the processes and generate records. Hold service reviews. Test continuity |
| **9. Check** | Measure (9.1), run internal audits (9.2), hold a management review (9.3) and produce service reports (9.4) |
| **10. Improve** | Raise corrective actions (10.1) and improvements (10.2) |
| **11. Certify** | Stage 1 and Stage 2 audits, then surveillance |

> **In practice:** **progress iteratively with feedback** applies to ISO implementation too. Many organizations start with a **narrow scope**, such as one service for one customer from one site, certify it, then extend the scope at surveillance or recertification audits.

### The most common audit findings (learn from others' mistakes)

1. **Management review** missing required inputs, or top management not involved.
2. **Internal audit programme** not covering all clauses and processes, or auditors auditing their own work.
3. **Risk assessment** missing supplier risks or the risk of not meeting service requirements, or **risk acceptance criteria** undefined.
4. **SLAs** without measurable targets or workload characteristics, or not reviewed at planned intervals.
5. **Supplier contracts** missing service level targets, responsibilities or interfaces. No supplier performance reviews.
6. **Continuity plans** not tested, or not re-tested after major changes.
7. **Configuration information** inaccurate, not verified, or missing relationships.
8. **Change trend analysis** never performed. Remediation plans missing.
9. **Customer satisfaction** not measured. **Complaints** not formally closed.
10. **Competence evidence** missing for key roles.
11. **Known errors** not made available to the service desk.
12. **Service reports** produced but no **decisions or actions** recorded.

---

## Key Takeaways: Chapter 14

- **9.1:** decide what, how and when to monitor and measure. Retain evidence. Evaluate the performance and effectiveness of the SMS.
- **9.2 Internal audit:** at planned intervals, against **both** the organization's own requirements **and** the standard. An **audit programme** based on process importance and previous results. **Objective, impartial** auditors. Results reported to management. Use **ISO 19011**.
- **9.3 Management review:** by **top management**, at planned intervals. It has defined inputs (previous actions, issues, performance trends, audits, feedback, resources, service performance, risk actions and others) and outputs (improvement decisions and changes).
- **9.4 Service reporting:** defined requirements, **trends**, and **decisions and actions** communicated.
- **10.1:** react → evaluate causes → act → review effectiveness → change the SMS if needed. **Correction ≠ corrective action.** Prevention comes through **risk-based thinking** (6.1).
- **10.2:** continual improvement of suitability, adequacy and effectiveness, with **evaluation criteria** for improvement opportunities.
- **Audits:** first-party (internal), second-party (customer) and third-party (certification). Findings are **major nonconformity**, **minor nonconformity** and **observation/OFI**.
- **Certification:** **Stage 1** (documentation and readiness), then **Stage 2** (implementation and effectiveness), a decision by independent CB staff, a **3-year certificate**, **annual surveillance** and **recertification**. ISO does not certify. Accredited CBs do.

---

## Check Your Knowledge: Chapter 14

*Answers are in Appendix A.*

**Multiple choice**

**14.1** Which clause requires internal audits at planned intervals?

- A) 9.1
- B) 9.2
- C) 9.3
- D) 10.1

**14.2** How must internal auditors be selected and audits conducted?

- A) So that each process owner audits their own process
- B) So that the objectivity and impartiality of the audit process are ensured
- C) Only by external consultants
- D) Only by top management

**14.3** Who conducts the management review?

- A) The internal auditor
- B) The certification body
- C) Top management
- D) The service desk manager

**14.4** Which of the following is an input to the management review?

- A) Customer feedback and feedback from other interested parties
- B) The personal opinions of the auditor
- C) The certification body's financial statements
- D) The organization's marketing plan only

**14.5** Which statement about service reporting (9.4) is correct?

- A) Reports need only show the current month
- B) Service reporting must include trends, and decisions and actions based on report findings must be taken and communicated
- C) Service reports are only for the certification body
- D) Service reporting is optional

**14.6** When a nonconformity is identified, what must the organization do first?

- A) Wait for the next management review
- B) React by taking action to control and correct it, and deal with the consequences
- C) Inform the certification body
- D) Change the scope of the SMS

**14.7** What is the difference between a *correction* and a *corrective action*?

- A) There is no difference
- B) A correction fixes the immediate nonconformity. A corrective action eliminates its cause to prevent recurrence
- C) A correction is performed by auditors. A corrective action is performed by top management
- D) A corrective action is only required for minor nonconformities

**14.8** How long is an ISO/IEC 20000-1 certificate normally valid?

- A) One year, with no surveillance audits
- B) Three years, with surveillance audits at least annually
- C) Five years
- D) Indefinitely

**14.9** What is the main focus of a Stage 1 certification audit?

- A) A detailed evaluation of the effectiveness of every process
- B) A review of documentation and readiness for the Stage 2 audit
- C) Issuing the certificate
- D) Surveillance of corrective actions

**14.10** Which finding is most likely to be classified as a *major* nonconformity?

- A) One of 20 sampled incident records has an incorrect category
- B) No management review has ever been carried out
- C) A suggestion to improve the layout of service reports
- D) A single training record is missing its date

**14.11** Which bodies accredit certification bodies?

- A) ISO
- B) National accreditation bodies, such as UKAS or DAkkS
- C) PeopleCert
- D) The organization's customers

**14.12** A bank audits its IT outsourcing provider against their contract. What type of audit is this?

- A) First-party
- B) Second-party
- C) Third-party
- D) Certification

**14.13** Which standard provides guidelines for auditing management systems?

- A) ISO 9001
- B) ISO 19011
- C) ISO 31000
- D) ISO/IEC 38500

**14.14** Which of the following does clause 10.2 require?

- A) Implementing every improvement suggestion immediately
- B) Determining evaluation criteria to apply to opportunities for improvement to determine their applicability
- C) Outsourcing continual improvement to a consultant
- D) Improving only after a major nonconformity

**Short answer**

**14.15** List at least six inputs to the management review.

**14.16** Describe the ISO/IEC 20000-1 certification cycle, from preparation to recertification.

**14.17** An auditor finds that the service continuity plan, which states "tested annually", has not been tested for two years. Classify the finding and describe a suitable correction, root cause analysis and corrective action.

**14.18** Describe an audit trail an auditor could follow to test how incident, problem, change, release and configuration management are integrated.

---


# Part VI: Bringing It Together

---

# Chapter 15: Measurement, Reporting and Integrating ITIL with ISO/IEC 20000

**Suggested study time:** 1.5 hours (Day 7)

**Learning objectives.** After this chapter you should be able to:

- distinguish CSFs, KPIs, metrics and measurements, and design SMART, balanced measures
- calculate availability, MTBF, MTRS and MTBSI, and the availability of serial and parallel components
- select suitable KPIs for the main practices
- design an effective service report
- compare ITIL and ISO/IEC 20000 and map ISO clauses to ITIL components and practices
- explain how integrated management systems work

---

## 15.1 Measurement Fundamentals

### Why measure? The "four reasons"

This classic ITIL v3 CSI idea is still useful:

1. **Validate:** check that previous decisions were correct.
2. **Direct:** set direction for activities, based on targets.
3. **Justify:** provide evidence that a course of action is required, for example a business case.
4. **Intervene:** identify the point at which corrective action is needed.

### The measurement hierarchy

| Term | Meaning | Example |
|---|---|---|
| **Objective** | What we want to achieve | "Users get back to work quickly when something breaks" |
| **Critical success factor (CSF)** | A condition that **must be met** for the objective to succeed | "Incidents are resolved quickly and effectively" |
| **Key performance indicator (KPI)** | A **metric** used to evaluate success in meeting an objective or CSF | "% of P1 incidents resolved within 4 hours" |
| **Metric** | A **measurement or calculation** that is monitored or reported | "Number of P1 incidents this month"; "mean time to restore" |
| **Measurement** | A single data point | "This P1 took 3 h 12 min to resolve" |

Organizations typically have **2–4 KPIs per CSF** and **a small number of CSFs per objective**. Too many metrics dilute attention.

### Characteristics of good measures

- **SMART:** **S**pecific, **M**easurable, **A**chievable, **R**elevant, **T**ime-bound.
- **Balanced:** combine **efficiency** (speed, cost), **effectiveness** (quality, outcome), **compliance** and **value or experience** (satisfaction).
- **Leading and lagging:**
  - A **lagging** indicator measures results after the fact, for example "number of change-related incidents".
  - A **leading** indicator predicts future performance, for example "% of changes with a completed risk assessment and backout plan".
- **Actionable:** someone owns the measure and can act on it.

### Useful measurement models

- **Goal-Question-Metric (GQM):** start from the **goal**, ask what **questions** would show whether it is being achieved, then choose **metrics** that answer them.
- **Balanced scorecard:** four perspectives:
  - **financial**, for example cost per ticket
  - **customer**, for example satisfaction and SLA attainment
  - **internal process**, for example change success rate
  - **learning and growth**, for example staff certification and knowledge article creation
- **Baselines:** you cannot show improvement without a starting point. This links to "Where are we now?" in the continual improvement model and to "start where you are".

### Measurement pitfalls

| Pitfall | Example | Remedy |
|---|---|---|
| **Goodhart's law** ("when a measure becomes a target, it ceases to be a good measure") | Agents close tickets prematurely to hit "average handling time" | Pair speed metrics with quality metrics such as reopen rate and satisfaction |
| **Watermelon metrics** | All SLA targets green, customers unhappy | Outcome-based and experience-based measures (Chapter 8) |
| **Vanity metrics** | "We handled 10,000 tickets!" More tickets may mean more failures | Measure outcomes and trends, not just volumes |
| **Too many metrics** | A 40-page monthly report nobody reads | A few KPIs per CSF, with dashboards and exception reporting |
| **No action** | A report is produced but there are no decisions | ISO/IEC 20000-1 9.4 requires decisions and actions based on reports |

---

## 15.2 Availability Calculations (Worked Examples)

### Core formulas

> **Availability (%) = (Agreed service time − Downtime) ÷ Agreed service time × 100**

- **AST** is the period during which the service is agreed to be available, for example 24×7, or Monday to Friday 08:00–18:00.
- **Downtime** is the time the service is unavailable **within the AST**. Downtime outside agreed hours does not count, unless the SLA says so.

| Metric | Formula | Meaning |
|---|---|---|
| **MTBF** (mean time between failures) | Total uptime ÷ number of failures | **Reliability**: how long the service runs between failures |
| **MTRS** (mean time to restore service) | Total downtime ÷ number of failures | **Maintainability**: how fast service is restored |
| **MTBSI** (mean time between service incidents) | AST ÷ number of failures = MTBF + MTRS | The average cycle from one failure to the next |

### Example 1: a 24×7 service

The month has 30 days, so AST = 30 × 24 = **720 hours**. There were two outages, of **2 h** and **1.5 h**, giving total downtime = **3.5 h**.

Availability = (720 − 3.5) ÷ 720 × 100 = **99.51%**

### Example 2: business hours only

AST is Monday to Friday 08:00–18:00, which is 10 h per day over 22 working days = **220 hours**. One outage lasted 1 h during business hours. Another lasted 3 h on Saturday night, outside the AST, so it does not count.

Availability = (220 − 1) ÷ 220 × 100 = **99.55%**

### Example 3: MTBF, MTRS and MTBSI

The AST is 720 h. There were **3 failures**, with downtime of 1 h, 2 h and 3 h, giving total downtime = **6 h**. Uptime = 714 h.

- MTBF = 714 ÷ 3 = **238 h**
- MTRS = 6 ÷ 3 = **2 h**
- MTBSI = 720 ÷ 3 = **240 h**. Check: MTBF + MTRS = 238 + 2 = 240 ✓
- Availability = 714 ÷ 720 = **99.17%**

### Example 4: components in series

All components must work. A web tier (99.9%), an application tier (99.5%) and a database (99.8%) are chained together:

A = 0.999 × 0.995 × 0.998 = **0.9920, or 99.20%**

> **Remember:** in series, **end-to-end availability is always lower than the weakest component**. This is why "every component met its target" can still mean the service missed its target.

### Example 5: redundant components in parallel

Either component is sufficient. Two clustered servers each have 99% availability:

A = 1 − (1 − 0.99) × (1 − 0.99) = 1 − 0.0001 = **0.9999, or 99.99%**

> **Remember:** **redundancy** (parallel) raises availability dramatically. It is the main technique for removing single points of failure.

### Downtime allowances (24×7 service)

| Availability target | Maximum downtime per year (8,760 h) | Maximum downtime per 30-day month (720 h) |
|---|---|---|
| 99% | 87.6 hours | 7.2 hours |
| 99.5% | 43.8 hours | 3.6 hours |
| 99.9% ("three nines") | 8.76 hours | 43.2 minutes |
| 99.95% | 4.38 hours | 21.6 minutes |
| 99.99% ("four nines") | 52.6 minutes | 4.32 minutes |
| 99.999% ("five nines") | 5.26 minutes | about 26 seconds |

---

## 15.3 Example KPIs by Practice

| Practice | Example KPIs |
|---|---|
| **Service desk** | First-contact resolution (FCR); average speed to answer (ASA); abandonment rate; customer satisfaction (CSAT); % of contacts via self-service; cost per contact |
| **Incident management** | Mean time to restore service (MTRS); % of incidents resolved within SLA target, by priority; incident backlog; reopen rate; number of major incidents |
| **Problem management** | Number of problems with root cause identified; number of known errors published; % of incidents matched to known errors; reduction in repeat incidents; average age of open problems |
| **Change enablement** | Change success rate; change failure rate (changes causing incidents); % of emergency changes; number of unauthorised changes; change lead time |
| **Service request management** | % of requests fulfilled within target; average fulfilment time; % of requests fully automated; user satisfaction |
| **Service level management** | % of SLA targets met; number of SLA breaches; % of SLAs reviewed on time; customer satisfaction with services |
| **Availability management** | Availability % versus target; MTBF; MTRS; number of SPOFs removed |
| **Capacity and performance** | Resource utilisation versus threshold; number of capacity-related incidents; forecast accuracy |
| **Service continuity** | % of plans tested on schedule; test success rate; actual versus target RTO and RPO in tests |
| **Information security** | Number of security incidents by severity; time to patch critical vulnerabilities; % of staff trained; audit findings |
| **Supplier management** | % of supplier targets met; number of supplier-caused incidents; contract reviews on time |
| **Release and deployment** | Deployment frequency; % of releases deployed without incident; post-release incidents in the first 30 days; rollback rate |
| **Service configuration management** | CMDB accuracy rate from audits; % of changes with CI updates; % of incidents linked to CIs |
| **Continual improvement** | Number of improvements implemented; % of CIR items progressed; value delivered by improvements |

**The DORA metrics** come from DevOps research and are widely used for software delivery performance:

- **deployment frequency**
- **lead time for changes**
- **change failure rate**
- **time to restore service** after a failed deployment

---

## 15.4 Designing Effective Service Reports

### Know your audiences

| Audience | Needs | Format |
|---|---|---|
| **Executives and sponsors** | Value, risks, trends, decisions needed | One-page summary, traffic lights, trends |
| **Customers and service owners** | SLA performance, major incidents, changes, improvement plans | Monthly service report plus a quarterly review |
| **Operational teams** | Detailed real-time performance and queues | Live dashboards |

### Outline of a good monthly service report

1. **Executive summary:** overall status, key messages and decisions requested.
2. **Performance against SLA targets**, with **12-month trends**.
3. **Major incidents:** impact, cause, actions and status of problem records.
4. **Changes and releases:** delivered, failed and upcoming (the schedule of change).
5. **Workload and capacity:** volumes against the workload characteristics in the SLA.
6. **Customer satisfaction and complaints.**
7. **Risks and issues**, including supplier performance.
8. **Improvement actions:** CIR status and results.
9. **Agreed actions and decisions** from the last review, and their status.

Good reports are **accurate, timely, concise, focused on the audience, trend-based and action-oriented**. This last point directly satisfies **ISO/IEC 20000-1 clause 9.4**.

---

## 15.5 Integrating ITIL and ISO/IEC 20000

### Side-by-side comparison

| | **ITIL 4 / ITIL (Version 5)** | **ISO/IEC 20000-1:2018** |
|---|---|---|
| **Nature** | Framework of guidance and good practice | International standard of **requirements** |
| **Owner** | PeopleCert | ISO and IEC (JTC 1/SC 40) |
| **Language** | Descriptive and flexible ("organizations should consider...") | Normative ("the organization **shall**...") |
| **Answers** | **How** to manage services well | **What** must be achieved and evidenced |
| **Certification** | **Individuals**, through exams | **Organizations**, through audits of their SMS |
| **Adoption** | Adopt and adapt what fits | **All requirements in clauses 4–10 apply** within the scope |
| **Breadth** | Very broad: 34 practices, culture, Agile, DevOps, value streams, CX | Focused minimum requirements for an SMS |
| **Management system elements** | Governance, continual improvement | Explicit **policy, objectives, SMS plan, documented information control, internal audit, management review, corrective action** |
| **Evidence** | Not required | **Records and documented information** required |

### How ITIL helps you meet ISO/IEC 20000-1

- ITIL practices provide the **process content** for almost all of **clause 8**: incident, problem, change, SLM, configuration and the rest.
- ITIL's **SVS, governance and continual improvement** support clauses **5, 6 and 10**.
- ITIL's **four dimensions** help with **resources, competence and knowledge** (clause 7) and with the **control of suppliers** (8.2.3, 8.3.4).
- **ISO/IEC TR 20000-11** gives guidance on using ITIL to meet the requirements.

### What ISO/IEC 20000-1 demands that "doing ITIL" does not guarantee

1. A documented **scope**, **service management policy**, **objectives** and **service management plan**.
2. **Documented information control**, and the **mandatory documents and records** in 7.5.4.
3. **Risk assessment** with **acceptance criteria**, including the risks of other parties.
4. **Activities "at planned intervals"** that really happen and are recorded: SLA reviews, supplier reviews, satisfaction measurement, configuration verification, continuity tests, change trend analysis, problem effectiveness reviews.
5. An **internal audit programme** with impartial auditors.
6. **Management reviews** by **top management**, with the required inputs and outputs.
7. Formal **nonconformity and corrective action** handling.
8. Demonstrable **control of other parties**, with **no outsourcing of everything**.
9. **Specific process requirements**, for example a **documented major incident procedure**, complaints formally closed, and continuity plans accessible offsite and tested after major changes.

### What ITIL offers beyond ISO/IEC 20000-1

The guiding principles; value streams; customer and user experience; the integration of Agile, Lean and DevOps; organizational change management; workforce and talent management; architecture management; business analysis; service design and design thinking; and detailed practice guidance on roles, competencies and tools. In Version 5, it also offers AI governance and the Product and Service Lifecycle Model.

### Mapping ISO/IEC 20000-1:2018 clauses to ITIL 4

| ISO/IEC 20000-1:2018 clause | ITIL 4 components and practices |
|---|---|
| 4.1 Context | Strategy management; PESTLE (external factors); risk management |
| 4.2 Interested parties | Key concepts (stakeholders, value for stakeholders); relationship management |
| 4.3 Scope | Portfolio management; service catalogue management |
| 4.4 SMS | The **Service Value System** as a whole |
| 5.1 Leadership | **Governance** (evaluate, direct, monitor); guiding principles (focus on value) |
| 5.2 Policy | Governance; strategy management |
| 5.3 Roles | Organizations and people dimension; workforce and talent management |
| 6.1 Risks and opportunities | Risk management |
| 6.2 Objectives | Strategy management; measurement and reporting |
| 6.3 SMS plan | Value chain activity **plan**; portfolio management; architecture management |
| 7.1 Resources | All four dimensions; workforce and talent management; infrastructure and platform management |
| 7.2 Competence and 7.3 Awareness | Workforce and talent management; organizational change management |
| 7.4 Communication | Relationship management; organizational change management |
| 7.5 Documented information | Knowledge management; information and technology dimension |
| 7.6 Knowledge | Knowledge management |
| 8.1 Operational planning and control | Value chain (plan); practices |
| 8.2.2 Plan the services | Portfolio management; business analysis; service design |
| 8.2.3 Control of other parties | Supplier management; partners and suppliers dimension |
| 8.2.4 Service catalogue | Service catalogue management |
| 8.2.5 Asset management | IT asset management |
| 8.2.6 Configuration management | Service configuration management |
| 8.3.2 Business relationship management | Relationship management |
| 8.3.3 Service level management | Service level management |
| 8.3.4 Supplier management | Supplier management |
| 8.4.1 Budgeting and accounting | Service financial management |
| 8.4.2 Demand management | Capacity and performance management; relationship management |
| 8.4.3 Capacity management | Capacity and performance management |
| 8.5.1 Change management | Change enablement |
| 8.5.2 Service design and transition | Service design; service validation and testing; project management; value chain (design and transition) |
| 8.5.3 Release and deployment | Release management; deployment management |
| 8.6.1 Incident management | Incident management; service desk |
| 8.6.2 Service request management | Service request management; service desk |
| 8.6.3 Problem management | Problem management |
| 8.7.1 Availability management | Availability management |
| 8.7.2 Service continuity | Service continuity management |
| 8.7.3 Information security | Information security management |
| 9.1 Monitoring and measurement | Measurement and reporting; monitoring and event management |
| 9.2 Internal audit | (Governance: monitor; risk management). Not a dedicated ITIL practice |
| 9.3 Management review | Governance; continual improvement |
| 9.4 Service reporting | Measurement and reporting; service level management |
| 10.1 Nonconformity and corrective action | Continual improvement; problem management (similar logic) |
| 10.2 Continual improvement | **Continual improvement** (SVS component, value chain activity and practice) |

---

## 15.6 Integrated Management Systems

Because ISO/IEC 20000-1, ISO/IEC 27001, ISO 9001 and ISO 22301 share the **Annex SL** structure, organizations often run **one integrated management system (IMS)**.

| Shared element | Implemented once for all standards |
|---|---|
| Context, interested parties and scope (clause 4) | One context and interested-party analysis, with scope statements per standard |
| Leadership and policies (clause 5) | Aligned policies, often an integrated policy plus specific ones |
| Risk management (clause 6) | One risk methodology covering service, security, quality and continuity risks |
| Support (clause 7) | One document control system, one competence and training system and one communication plan |
| Internal audit and management review (clause 9) | Combined audit programme and combined management review |
| Corrective action and improvement (clause 10) | One nonconformity and CIR process |

**Specific links**

- **ISO/IEC 27001** ↔ 8.7.3 information security management. **ISO/IEC 27013** gives guidance on integrated implementation.
- **ISO 22301** ↔ 8.7.2 service continuity.
- **ISO 9001** ↔ customer satisfaction, complaints and quality of service.
- **ISO/IEC 20000-7** gives guidance on integrating ISO/IEC 20000-1 with ISO 9001 and ISO/IEC 27001.

> **In practice:** a managed service provider holding ISO 9001, ISO/IEC 27001 and ISO/IEC 20000-1 typically undergoes **combined audits**, saving time and cost. Staff see one management system, not three bureaucracies.

---

## Key Takeaways: Chapter 15

- An **objective** leads to **CSFs** (what must go right), which lead to **KPIs** (how we know), which are made up of **metrics** and **measurements**. Keep measures **SMART**, **balanced**, **actionable** and few.
- **Availability = (AST − downtime) ÷ AST.** **MTBF** = uptime ÷ failures (reliability). **MTRS** = downtime ÷ failures (maintainability). **MTBSI** = AST ÷ failures = MTBF + MTRS.
- **Series:** multiply the availabilities, so the result is lower than the weakest component. **Parallel:** 1 − the product of the unavailabilities, so availability is much higher.
- **99.9%** allows about **43 minutes per month** or **8.76 hours per year** on a 24×7 service.
- Good **service reports** show **trends** and lead to **decisions and actions** (ISO 9.4).
- **ITIL** is guidance for individuals and describes *how*. **ISO/IEC 20000-1** is requirements for organizations and states *what* must be evidenced. ITIL covers most of clause 8. ISO adds **management system disciplines**: policy, plan, documented information, risk criteria, audits, management review, corrective action and "planned intervals".
- The shared **Annex SL** structure enables **integrated management systems** with ISO/IEC 27001, ISO 9001 and ISO 22301.

---

## Check Your Knowledge: Chapter 15

*Answers are in Appendix A.*

**Multiple choice**

**15.1** What is a *critical success factor* (CSF)?

- A) A metric used to evaluate success
- B) A condition that must be met for an objective to be achieved
- C) A single data point
- D) A financial target

**15.2** What is a *key performance indicator* (KPI)?

- A) A metric used to evaluate success in meeting an objective or CSF
- B) A condition that must be met for an objective to succeed
- C) A document describing a service
- D) A type of audit finding

**15.3** A 24×7 service had 6 hours of downtime in a 30-day month. What was its availability?

- A) 99.92%
- B) 99.17%
- C) 98.33%
- D) 97.50%

**15.4** What is the approximate maximum downtime in a 30-day month for a 24×7 service with a 99.9% availability target?

- A) 4.3 minutes
- B) 43.2 minutes
- C) 7.2 hours
- D) 8.76 hours

**15.5** Two components, each 99% available, are connected **in series**, so that both must work. What is the combined availability?

- A) 99.99%
- B) 99.00%
- C) 98.01%
- D) 98.99%

**15.6** Two redundant components, each 95% available, operate **in parallel**, so that either is sufficient. What is the combined availability?

- A) 90.25%
- B) 95.00%
- C) 99.75%
- D) 99.95%

**15.7** What does MTRS measure?

- A) Reliability: the average time a service runs between failures
- B) Maintainability: the average time taken to restore a service after a failure
- C) Serviceability: the supplier's contractual performance
- D) The average time between service incidents

**15.8** Which statement best describes the relationship between ITIL and ISO/IEC 20000-1?

- A) ISO/IEC 20000-1 requires the use of ITIL
- B) ITIL guidance can be used to help meet the requirements of ISO/IEC 20000-1, but adopting ITIL does not by itself demonstrate conformity
- C) ITIL certification of staff automatically certifies the organization
- D) They are unrelated

**15.9** Which ISO/IEC 20000-1 requirement is *least* covered by ITIL practice guidance?

- A) Incident management
- B) Service level management
- C) Internal audit of the management system against the standard's requirements
- D) Change management

**15.10** A service desk measured only on "average handling time" starts closing calls before issues are resolved. Which concept does this illustrate?

- A) Goodhart's law: when a measure becomes a target, it ceases to be a good measure
- B) The Deming cycle
- C) Pareto analysis
- D) Swarming

**15.11** Which of the following is a **leading** indicator for change enablement?

- A) Number of incidents caused by changes last month
- B) Percentage of changes with a completed risk assessment and tested backout plan
- C) Number of failed changes last quarter
- D) Total downtime caused by changes this year

**15.12** Which document gives guidance on the integrated implementation of ISO/IEC 27001 and ISO/IEC 20000-1?

- A) ISO/IEC 27013
- B) ISO/IEC 20000-3
- C) ISO 19011
- D) ISO/IEC 38500

**Short answer**

**15.13** A service has an agreed service time of 200 hours in a month. It failed 4 times, with total downtime of 10 hours. Calculate its availability, MTBF, MTRS and MTBSI.

**15.14** Define two CSFs for incident management, and two KPIs for each.

**15.15** Explain three things that ISO/IEC 20000-1 requires which an organization "using ITIL" might not have in place.

**15.16** Outline the sections of a monthly service report for a customer, and explain how it would satisfy clause 9.4.

---


# Chapter 16: Understanding Questions with Answers

**Suggested study time:** 3 hours (Day 7)

This final chapter tests **understanding**, not just recall. It has three sections:

- **Section A: Understanding questions.** "Why" and "explain" questions, each with a full answer. Cover the answer, say or write your own answer, then compare.
- **Section B: Scenario questions.** Realistic situations with model answers that apply ITIL and ISO/IEC 20000 together.
- **Section C: Mock exam.** 40 multiple-choice questions in 60 minutes, with an answer key and explanations.

> **How to get the most from this chapter:** do not read the answers first. For each question, spend 2–3 minutes on your own answer, even a rough one in bullet points. Then read the model answer and note what you missed. Add any gaps to your "weak areas" list.

---

## Section A: Understanding Questions

### Part A1: ITIL Concepts

**A1. Why does ITIL 4 say value is "co-created" rather than "delivered"? Give an example of what happens when the consumer does not take part.**

**Answer.** Value is the *perceived* benefit, usefulness and importance of something, so it only exists when the consumer actually achieves outcomes. Providers can offer resources and perform actions, but the consumer must contribute too. It defines requirements, provides information and access, uses the service properly, adopts new ways of working and gives feedback. For example, a company buys a sophisticated CRM service, but the sales team keeps using spreadsheets and never enters customer data. The provider has delivered everything it promised, yet **no value** is created. ITIL therefore treats value as the joint result of provider and consumer activity: **co-creation**. This shapes practice. Engagement, relationship management, training and adoption support become part of service management, not optional extras.

---

**A2. A service removes some costs and risks from the consumer and imposes others. Using a cloud-hosting example, explain how a consumer decides whether the service is valuable.**

**Answer.** The consumer weighs the **outcomes** facilitated against the **costs and risks**, both removed and imposed. In a move from an in-house data centre to cloud hosting, the outcomes are scalable capacity, faster deployment and global reach. **Costs removed** include hardware purchases, data-centre space and power, and hardware maintenance staff. **Costs imposed** include subscription fees, migration effort, staff retraining and network upgrades. **Risks removed** include hardware failure, capacity shortfalls and ageing facilities. **Risks imposed** include provider outages, vendor lock-in, data-residency issues and dependency on the provider's security. The service is valuable if, *from the consumer's perspective*, the outcomes plus the costs and risks removed outweigh the costs and risks imposed. Because value is perceived, two consumers can reach different conclusions about the same service. A bank with strict data-residency rules may reject a service that a start-up finds ideal.

---

**A3. Explain the difference between a product, a service and a service offering, using a single example.**

**Answer.** Take a broadband company. Its **product** is the configuration of its resources: its network, staff, processes, billing systems and partner agreements, designed to offer value. The consumer sees only part of this. The **service** is the means by which the consumer achieves outcomes, such as working and streaming from home, without having to manage the costs and risks of running a network. The **service offerings** are formal descriptions of packages for target consumer groups, built from the product. A "Home Basic" offering might contain *goods* (a router that becomes the customer's property), *access to resources* (100 Mbps connectivity) and *service actions* (phone support). A "Business Pro" offering from the same product adds a static IP address, 1 Gbps and 4-hour on-site repair. One product, many offerings, each enabling a service relationship.

---

**A4. Why are both utility and warranty needed? Is one more important than the other?**

**Answer.** **Utility** (fit for purpose) is what the service does: its functionality. **Warranty** (fit for use) is the assurance that it will meet agreed requirements: availability, capacity, security and continuity. A service with excellent features that is constantly unavailable, slow or insecure cannot be relied on to achieve outcomes. A perfectly reliable service that lacks the required functions does not help the consumer either. Value comes from the **combination**, so neither is inherently more important. In practice the balance depends on context. For a safety-critical hospital system, warranty aspects such as availability and integrity may dominate design decisions. For an experimental marketing tool, utility and speed of change may matter more. Requirements work, through business analysis and service design, should capture both functional (utility) and non-functional (warranty) requirements.

---

**A5. Why should the four dimensions be applied to the SVS as a whole, and not only to individual services?**

**Answer.** The SVS is the organization's entire operating system for creating value. If only individual services are considered, systemic weaknesses go unnoticed: a culture that punishes mistakes, a fragmented toolset, over-dependence on one supplier, or value streams that cross ten hand-offs. These affect every service. Applying the four dimensions to the SVS ensures the organization has the right **structures, culture and skills** (organizations and people), **information and tools** (information and technology), **supplier strategy and integration** (partners and suppliers) and **end-to-end workflows** (value streams and processes) to run *all* services. Doing so also prevents the common failure of concentrating on one dimension, typically buying technology, while neglecting the others.

---

**A6. How does the design of the SVS let an organization respond to very different kinds of demand without becoming rigid?**

**Answer.** The SVS does not prescribe a fixed sequence. Its **service value chain** consists of six generic activities that can be combined in any order and as often as needed, through **value streams** designed for specific scenarios. Restoring a failed service, onboarding an employee and developing a new product are three different value streams using the same building blocks. **Practices** are reusable sets of resources that contribute to many activities. **Guiding principles** and **governance** give consistent direction without dictating detailed steps, and **continual improvement** constantly adapts the system. This flexibility, combined with shared direction, lets the organization respond to stable and volatile demand alike and discourages siloed working.

---

**A7. Why are the guiding principles described as "universal and enduring"? Why do they not conflict with Agile or DevOps?**

**Answer.** They are **universal** because they apply to almost any initiative, organization type, team and relationship, from a two-person start-up to a government ministry and from a tool selection to a cultural transformation. They are **enduring** because they remain valid whatever changes occur in goals, strategies, structures or technology. They are not tied to a particular method or era. They do not conflict with Agile or DevOps because they **share the same roots**. "Progress iteratively with feedback" mirrors Agile iteration. "Optimize and automate" and "think and work holistically" mirror DevOps automation and systems thinking. "Focus on value" and "keep it simple and practical" mirror Lean's elimination of waste. ITIL 4 was deliberately designed to integrate with these approaches.

---

**A8. What is the difference between "keep it simple and practical" and "optimize and automate", and why does the order in which they are applied matter?**

**Answer.** *Keep it simple and practical* is about **eliminating** steps, processes, metrics or actions that do not contribute to value and using the minimum necessary. *Optimize and automate* is about making what remains **as effective and useful as it needs to be**, then using technology to perform it consistently with minimal human intervention. The order matters because **automating a wasteful or complicated process locks in the waste**. It also makes the waste harder to change and produces bad outcomes faster. The recommended path is to simplify first, then optimise, then automate, while defining metrics to check the effect. Example: an approval workflow with seven sign-offs, four of them pointless, should be reduced to three before being automated in a workflow tool.

---

**A9. "Collaboration does not mean consensus." Why is this important?**

**Answer.** *Collaborate and promote visibility* encourages involving the right stakeholders, sharing information and working across boundaries. This brings better ideas, buy-in and relevance. If collaboration were taken to mean *everyone must agree*, decisions would stall, the loudest objector would gain a veto, and initiatives would be watered down until they were useless. ITIL clarifies that collaboration means **genuine involvement and transparency**, while **decisions remain the responsibility of the appropriate people**. A change authority, for instance, consults service owners and users but still makes the decision, even if not everyone agrees. Visibility also helps here: when data and reasoning are transparent, people more readily accept decisions they would not have chosen themselves.

---

**A10. How do governance and the guiding principles work together in the SVS?**

**Answer.** **Governance** sets *direction and control*. The governing body evaluates the organization and its environment, directs through strategies and policies, and monitors performance and compliance. The **guiding principles** shape *how* people make decisions and act within that direction, at every level, every day. Governance provides the "what we are aiming for and the boundaries", such as risk appetite, compliance obligations and strategic priorities. The principles provide the "how we behave while getting there". The governing body itself should also apply the principles. For example, it should *focus on value* when evaluating portfolios, *collaborate and promote visibility* in reporting, and *progress iteratively* with major transformations.

---

**A11. Why does the service value chain have no fixed sequence?**

**Answer.** Real work does not follow a single linear path. Handling a password reset touches engage and deliver and support. Building a new product may loop repeatedly through engage, design and transition, obtain/build and improve. A major incident may require obtain/build, to replace hardware, in the middle of deliver and support. A fixed sequence would force unnecessary steps on simple work and restrict complex work. ITIL v3's lifecycle was often misread as sequential, which encouraged siloed "phase" teams. By making the activities interconnected and letting **value streams** define the order for each scenario, ITIL 4 supports both simple and complex work, as well as Agile iteration.

---

**A12. How does a value stream differ from a process, and why do both matter?**

**Answer.** A **value stream** is the end-to-end series of steps from **demand to value** for a consumer, for example "customer reports a fault → customer is working again". It crosses teams, practices and sometimes organizations. A **process** is a defined set of interrelated activities that transforms inputs into outputs, such as "incident categorisation and prioritisation", usually within one practice. Value streams matter because they show the **customer's experience** and expose delays, hand-offs and waste between teams, which are invisible when each team optimises only its own process. Processes matter because they make individual steps **consistent, controlled and measurable**. Good service management optimises processes **in the context of** the value streams they serve.

---

**A13. Why does continual improvement appear in three places in ITIL 4?**

**Answer.** Improvement must happen at every level and in every area, so ITIL embeds it structurally. (1) As an **SVS component**, continual improvement is a recurring organizational activity that applies to the whole system, including governance and practices. (2) As the **improve value chain activity**, it is an operational activity that receives performance data and feedback from all other activities and produces improvement initiatives. (3) As a **general management practice**, it provides the resources, methods (such as the continual improvement model and the CIR), roles and techniques that make improvement happen. Placing it in all three ensures improvement is neither a one-off project nor the job of a single team.

---

**A14. Why is the distinction between incident management and problem management important? What goes wrong if they are merged?**

**Answer.** The two practices have **different goals and time horizons**. Incident management aims to **restore service as quickly as possible**, often with a workaround, because every minute of disruption costs the business. Problem management aims to **find and remove causes** and reduce future impact. That takes careful analysis, which may take days or weeks. If they are merged, one of two failures usually happens. Either restoration is delayed while staff hunt for root causes, which makes outages longer. Or, more commonly, urgent firefighting crowds out analysis, so the same incidents recur indefinitely. Keeping them distinct, but closely **linked** through incident trend data, known errors and workarounds, lets the organization both restore quickly *and* steadily reduce incident volumes.

---

**A15. Why do known error records matter so much to the service desk?**

**Answer.** A known error record documents a problem that has been analysed but not yet resolved. It usually includes the symptoms, the cause and a **workaround**. When a user reports matching symptoms, the service desk can recognise the issue immediately, apply the workaround and restore service at **first contact**. It does not need to escalate to specialist teams or rediscover the solution. This improves resolution time, first-contact resolution and user satisfaction, and it frees specialists for real problem-solving. It also improves data. Linking new incidents to the known error shows the true impact of the problem, which supports error control decisions about whether a permanent fix is justified. ISO/IEC 20000-1 (8.6.3) explicitly requires known error information to be made available to other activities such as incident management.

---

**A16. Why are standard changes pre-authorised, and why is this safe?**

**Answer.** Many changes are **frequent, low-risk, well understood and fully documented**, such as installing approved software or adding a user to a group. Assessing and authorising each one individually would waste effort and slow the business without reducing risk. With standard changes, the **risk assessment and authorisation are done once**, when the procedure is created or modified. After that, each instance can proceed without further authorisation. This is safe because the procedure itself was assessed, the change is repeatable, and any deviation from the defined procedure means it is no longer a standard change and must follow the normal path. Monitoring the success rate of standard changes provides assurance that the classification remains valid.

---

**A17. What role does the change schedule play during incident investigation?**

**Answer.** Many incidents are caused, directly or indirectly, by recent changes. When an incident occurs, especially a major one, one of the first questions is "**what changed?**" The change schedule shows which changes were implemented recently and which are planned, on which services and CIs, and by whom. Investigators can quickly correlate the start of the incident with a recent change, decide whether to **back it out**, and avoid deploying further planned changes that could make things worse. After the event, problem management uses the same information to identify change-related causes, and continual improvement uses it to improve change practices.

---

**A18. Why do SLAs based purely on operational metrics often lead to customer dissatisfaction?**

**Answer.** Operational metrics, such as server uptime, ticket response times and network latency, measure the **parts**. Customers experience the **whole service** and care about **outcomes**: can they complete their work, serve their customers, meet their deadlines? Every component can meet its target while the end-to-end service is slow, unreliable at critical moments or hard to use. The SLA report is then green while the customer is unhappy: the **watermelon effect**. ITIL 4 therefore recommends SLAs that relate to defined **services**, include **outcome-based and experience measures** in balanced bundles, are **genuinely agreed** through engagement and listening, and are **simply written**. That way SLA performance and customer perception move together.

---

**A19. Why separate release management from deployment management?**

**Answer.** **Deployment** is the technical act of moving components into an environment. **Release** is making new or changed functionality **available for use** by users. Separating them gives flexibility and reduces risk. Code can be deployed to production frequently and safely, often automatically, while the features remain hidden behind feature toggles. They are then released when the business is ready: after training, at a marketing launch, or gradually to a percentage of users through canary or "dark" launches. If something goes wrong, the feature can be switched off without redeploying. This decoupling is central to DevOps and continuous delivery. ITIL 4 reflects it by treating release management (a service management practice) and deployment management (a technical management practice) as separate practices.

---

**A20. Why should a CMDB not try to contain "everything"?**

**Answer.** Every CI and attribute recorded must be **kept accurate** through updates with every change, discovery and verification, and that costs effort. If the scope is too broad or too detailed, the data inevitably decays. Inaccurate configuration data is dangerous because people trust it when assessing change impact or diagnosing incidents. ITIL and ISO/IEC 20000-1 both say the level of detail should be **appropriate to the value**: ISO says "appropriate to the criticality and type of services". The organization should record the CIs, attributes and **relationships** that its practices actually need, especially change impact assessment, incident diagnosis and service mapping. It should then expand gradually ("progress iteratively") and use automation to keep the data current.

---

**A21. Why does ITIL emphasise empathy and business understanding for the service desk, rather than deep technical skill?**

**Answer.** The service desk is the **single point of contact** and shapes how users perceive the entire provider. Users usually contact it when they are frustrated or under pressure. Agents who show **empathy and emotional intelligence**, understand the business impact and communicate clearly can calm the situation, set realistic expectations and engage the right resources. With automation and self-service handling simple, repetitive requests, the issues reaching humans are increasingly complex, sensitive or business-critical. Here, judgement and communication matter more than technical depth. Specialist knowledge remains available through support teams, knowledge bases and swarming.

---

**A22. How does problem management relate to risk management?**

**Answer.** A problem is a **cause or potential cause** of incidents, which makes it, in effect, a **risk** to services. Problem management can therefore use risk management techniques. It **identifies** problems through trend analysis and supplier information, **assesses** them by likelihood and impact so they can be prioritised for analysis, and **treats** them. Treatment means **reducing** impact with workarounds, **removing** the cause with a change, or **accepting** a known error when a permanent fix is not justified by cost, risk and benefit. Error control's regular re-assessment of known errors is a form of risk **monitoring**. Proactive problem management, which acts on potential problems before incidents occur, is risk management in its purest form.

---


### Part A2: ISO/IEC 20000 Concepts

**A23. What does "the organization retains accountability" mean in practice when other parties are involved in delivering services?**

**Answer.** It means the organization **cannot pass responsibility for meeting customer requirements to its suppliers**, whether through an outsourcing contract or through internal agreements. If an outsourced data centre fails, the customer holds the organization responsible, and so does the auditor. In practice the organization must: decide which services, components and processes other parties provide or operate; select those parties against defined criteria; put **contracts** (external) or **documented agreements** (internal, or customers acting as suppliers) in place with clear targets, responsibilities and interfaces; **integrate** their work into the SMS, for example through shared incident handling, the change process and configuration data; **measure and review** their performance at planned intervals; and manage disputes. It also **cannot outsource everything**. The standard does not allow conformity if other parties provide or operate all of the services, components or processes in scope.

---

**A24. Why does ISO/IEC 20000-1 not allow requirements to be excluded, and how do small organizations cope with that?**

**Answer.** Every requirement in clauses 4–10 contributes to an SMS that can **reliably deliver services that meet requirements**. Excluding one, such as problem management or continuity, would leave a gap in that assurance. Allowing exclusions would also make certificates hard to compare, because two "certified" organizations could have very different capabilities. Small organizations cope through **proportionality**. The standard specifies *what* must be achieved, not *how*. A 15-person provider might run problem management as a monthly 1-hour review of incident trends, keep its CMDB in a well-controlled spreadsheet, test continuity through an annual tabletop exercise, and combine roles. What matters is that each requirement is met effectively, at an appropriate scale, and evidenced. The organization limits its burden through the **scope**, meaning which services, customers and locations are included, not by excluding requirements.

---

**A25. Why does the standard require both a service management policy and a service management plan?**

**Answer.** They serve different purposes and audiences. The **policy** (5.2) is top management's short statement of **intent and commitment**. It is appropriate to the organization's purpose, provides a framework for objectives, commits to meeting requirements and to continual improvement, and is communicated to staff and made available to interested parties. It sets the tone and direction. The **plan** (6.3) is the **operational blueprint**. It lists the services, known limitations, obligations, authorities, resources, the approach to other parties, supporting technology, and how effectiveness will be measured, audited, reported and improved. Without a policy, the SMS lacks direction and leadership commitment. Without a plan, good intentions are not turned into an organized, resourced management system.

---

**A26. What is the purpose of "at planned intervals", and how does an auditor assess it?**

**Answer.** Many requirements must be performed **periodically**, not continuously and not only when something goes wrong: reviewing SLAs and supplier performance, measuring customer satisfaction, verifying configuration information, testing continuity plans, analysing change trends, reviewing problem resolution effectiveness, internal audits and management reviews. The standard does not set frequencies because the right interval depends on the organization's risk, size and context. Instead the organization must **decide the interval, document it** (for example in the service management plan, process documents or a compliance calendar), and **follow it**. An auditor checks that intervals are defined, that they are reasonable for the risks involved, and that **records prove the activities happened on schedule**. "We review supplier performance annually" is acceptable if it is justified and evidenced. "We review when we have time" is not.

---

**A27. Why must new services, major-impact changes, the removal of services and the transfer of services go through service design and transition (8.5.2) rather than through change management alone?**

**Answer.** These changes affect the **service as a whole** and its relationships with customers, users, suppliers and other services. They therefore need more than a risk assessment and approval. They need **planning**: authorities, activities, timescales, resources, dependencies, testing, acceptance criteria and measurable intended outcomes. They need **design**: resources, training, agreements and contracts, SMS changes, impact on other services and catalogue updates. They need **build and transition** with verification against acceptance criteria and a report on outcomes achieved. A **removal** also needs decisions about archiving or disposing of data and components. A **transfer** to or from another party needs dates and transfer activities. Without this structured treatment, critical aspects such as contracts, training, data handling or support arrangements are easily missed. These changes are still governed by the change management policy. They simply receive the fuller design and transition process.

---

**A28. Why does ISO/IEC 20000-1 require SLAs to include workload characteristics?**

**Answer.** Service level targets are only achievable within certain **workload assumptions**: number of users, transaction volumes, call volumes, data sizes and peak patterns. A service desk sized to answer 95% of calls within 30 seconds for 1,000 users cannot keep that promise for 3,000 users without more resources. By documenting the workload characteristics and **monitoring actual and periodic changes in workload against them** (8.3.3), the organization can detect growth early, trigger capacity planning (8.4.3) and budget changes (8.4.1), and renegotiate targets or resources with the customer. Without them, SLA breaches become disputes over blame instead of an agreed signal to act.

---

**A29. Why are service complaints handled within business relationship management rather than incident management?**

**Answer.** A complaint is an expression of **dissatisfaction with the service or the provider**: its quality, communication, attitude or value. It is not necessarily a technical interruption. Complaints therefore say something about the **relationship** and about customer satisfaction, both of which BRM is responsible for (8.3.2). Placing complaints there makes sure they are recorded, investigated, acted on, reported and **formally closed**, with **escalation** if they are not resolved through normal channels. It also makes sure they feed into satisfaction analysis and improvement, instead of being lost as just another ticket. A complaint *about* an incident, for example "you took three days to fix my laptop", may lead to incident or problem actions, but the complaint itself is managed as part of the relationship.

---

**A30. Why does ISO/IEC 20000-1 include human, information and financial resources within capacity management?**

**Answer.** Services depend on more than technology. A service can fail to meet its targets because there are too few skilled agents at peak times, because a key specialist leaves, because data storage or information-processing capacity is insufficient, or because the budget cannot fund needed expansion. Treating capacity as purely technical, meaning servers and bandwidth, leaves these risks unmanaged. By requiring capacity requirements and planning for **human, technical, information and financial** resources, the standard links capacity management to workforce planning, knowledge, budgeting and demand forecasting. That gives a realistic, holistic view of whether the organization can meet current and future demand. This is similar to ITIL's "think and work holistically" and the four dimensions.

---

**A31. What is the difference between internal audit and management review?**

**Answer.** **Internal audit** (9.2) is an **independent, evidence-based check** of whether the SMS **conforms** to the organization's own requirements and to ISO/IEC 20000-1, and whether it is **effectively implemented and maintained**. It is performed by objective, impartial auditors following an audit programme, and it produces findings reported to management. **Management review** (9.3) is **top management's strategic evaluation** of whether the SMS and the services remain **suitable, adequate and effective**. It considers a broad set of inputs, including audit results but also performance trends, customer feedback, resources, risks and changes in context. It produces **decisions** about improvements and changes. In short, audit provides **assurance and findings**, and management review uses them, together with other inputs, to make **decisions**.

---

**A32. Explain the sequence nonconformity → correction → cause analysis → corrective action → effectiveness review. Why is the last step necessary?**

**Answer.** When a nonconformity is found, the organization first **reacts**. It **corrects** the immediate problem and deals with its consequences, so that damage is contained. Next it **analyses the causes** and checks whether similar nonconformities exist or could occur elsewhere, because fixing only the symptom guarantees recurrence. It then implements **corrective action** to eliminate the cause, changing the SMS if necessary. Finally it **reviews the effectiveness** of that action. This last step is essential because many corrective actions, such as "retrain staff" or "remind people", feel productive but do not actually remove the cause. Only by checking later, for example by sampling records after three months, does the organization know whether the problem has truly gone. Auditors routinely check this step, and a missing effectiveness review is a common finding.

---

**A33. How does risk-based thinking replace "preventive action" in the 2018 edition?**

**Answer.** The 2011 edition had a separate requirement for **preventive action**, meaning action to stop *potential* nonconformities from occurring. In practice it was often a weak afterthought. The 2018 edition, following Annex SL, builds prevention into **planning**. Clause 6.1 requires the organization to determine risks and opportunities, document risks related to the organization, service requirements and other parties, define acceptance criteria, and plan and integrate actions into its processes. Prevention therefore becomes **systematic and proactive**, built into how the SMS is designed and run, instead of an occasional exercise. Continual improvement (10.2) and service assurance processes such as availability, continuity and security risk assessments reinforce this.

---

**A34. Why does ISO/IEC 20000-1:2018 require top management to ensure that "what constitutes value" for the organization and its customers is determined?**

**Answer.** An SMS can be perfectly compliant and still deliver little that customers care about, for example by tracking dozens of process metrics while missing what matters to the business. Requiring top management to make sure **value is determined** ties the SMS to its purpose. Services, objectives, SLAs, improvement priorities and resources should all reflect what the organization and its customers actually value. These might be reliability during trading hours, speed of change, regulatory compliance, cost efficiency or user experience. This reflects the industry's broader move, seen in ITIL 4's "focus on value", from process compliance to value outcomes. It also makes top management accountable for that alignment.

---

**A35. How do ISO/IEC 20000-1 and ISO/IEC 27001 complement each other?**

**Answer.** ISO/IEC 20000-1 covers the **whole SMS**: how services are planned, agreed, delivered, supported and improved, including a requirement-level treatment of information security (8.7.3). ISO/IEC 27001 provides a **comprehensive information security management system**, with a detailed risk assessment and treatment methodology and a full reference set of security controls. Organizations with both can use the ISMS to meet 8.7.3 in depth. Service management processes such as change, incident, configuration, supplier and continuity management in turn support many 27001 controls. Because both use the **Annex SL structure**, they can share context analysis, risk methodology, document control, internal audits, management reviews and corrective action processes. **ISO/IEC 27013** and **ISO/IEC 20000-7** give guidance on integration.

---

**A36. Explain the relationship between ITIL and ISO/IEC 20000 to a manager in two or three sentences.**

**Answer.** "ISO/IEC 20000-1 is the international standard that defines **what** a well-run service management system must achieve, and an independent auditor can certify our organization against it. ITIL is the world's most widely used **guidance** on **how** to achieve good service management, and our people can be qualified in it. We use ITIL to design and run our practices, and ISO/IEC 20000-1 to prove, through audit, that our system meets an internationally recognised standard."

---


### Part A3: ITIL (Version 5) Concepts

**A37. Why did ITIL widen its scope from "service management" to "digital product and service management"?**

**Answer.** Organizations now create most of their value through digital products, such as apps, platforms and data services, and consumers experience the product and the service around it as one thing. When product teams (which build features) and service teams (which run and support them) work separately, gaps appear. Features are released that support teams cannot support, operations reports green uptime while users struggle, and nobody owns the end-to-end experience. Version 5 manages products and services together across **one lifecycle**, so that decisions about what to build, how to run it, how to deliver it and how to support it are aligned around the consumer's outcomes and experience. It also reflects the growing importance of experience, sustainability and AI in digital work.

---

**A38. What is the difference between the Operate, Deliver and Support activities, and why does Version 5 separate them?**

**Answer.** **Operate** keeps the live product running to its agreed performance and reliability targets through monitoring, maintenance, patching and capacity work. Its focus is the technical health of the product. **Deliver** makes the product or service available and usable for consumers as agreed, through access, onboarding, communication and quality of delivery. Its focus is the consumer receiving the service. **Support** helps users and restores normal operation when something goes wrong, then feeds lessons back into the product. Its focus is people who need help. ITIL 4 grouped all three under "deliver and support". Separating them makes each kind of work visible and owned. A product can be running perfectly (Operate) yet be poorly onboarded (Deliver), or have excellent onboarding while users still struggle to get help (Support).

---

**A39. Why is the product and service lifecycle described as non-linear? Give an example.**

**Answer.** The eight activities are not phases that each happen once, in order. They interconnect, run in parallel and feed each other in whatever order the work needs. Different versions of a product also sit in different activities at the same time. For example, version 2 of a mobile app is being operated, delivered and supported. Support notices that many users abandon one screen, and that insight goes straight to **Design** for version 3. Meanwhile, a security defect found in **Operate** sends a fix back through **Build** and **Transition** within days. A strict sequence would slow all of this down. A non-linear lifecycle lets organizations respond quickly and learn continuously.

---

**A40. How do value streams relate to the lifecycle activities and to the management practices?**

**Answer.** The **lifecycle activities** are the generic building blocks of the work. A **value stream** is a specific combination of those activities, in the order a particular scenario needs, that takes a trigger, such as demand or an opportunity, to value for a consumer. Examples are "restore service for a user" and "launch a new feature". **Management practices** provide the capabilities used within each step: people and skills, information and tools, suppliers, and processes. For example, the value stream "a customer reports a fault and is working again" uses Support and Operate, perhaps Build and Transition for a fix, and draws on the service desk, incident management, problem management, change enablement and deployment management practices.

---

**A41. Why is flow efficiency often more revealing than the speed of individual steps?**

**Answer.** Consumers experience the **lead time**: how long it takes from their request to the result. Most of that time is usually spent **waiting** between steps, in queues, approvals and hand-offs, not in the work itself. Flow efficiency (process time ÷ lead time) shows how much of the lead time is real work. A value stream with 10% flow efficiency spends 90% of its time waiting, so making each step faster barely changes what the consumer experiences. Removing waits, unnecessary approvals and hand-offs improves lead time much more. This is why value stream mapping measures waiting as carefully as working time.

---

**A42. Why does Version 5 add experience and sustainability to utility and warranty?**

**Answer.** Utility (what a product does) and warranty (whether it works reliably, securely and at scale) remain essential, but they no longer explain whether consumers perceive value. Two products with equal utility and warranty can differ completely in how easy and pleasant they are to use, and consumers choose, adopt and recommend on that basis. This is **experience**, measured through feedback and behaviour, and targeted through XLAs. **Sustainability** reflects the environmental, social and economic impact that customers, employees and regulators increasingly care about, such as energy use, ethical supply chains and responsible disposal. Balancing all four aspects gives a more complete picture of quality and value.

---

**A43. What is the purpose of the ITIL AI Capability Model, and how does it support AI governance?**

**Answer.** The model describes six things AI can do: **creation, curation, clarification, cognition, communication and coordination**. It gives organizations a shared language for understanding and classifying AI use cases, instead of treating "AI" as one thing. This matters for governance because risks depend on what the AI does. Creation raises questions of accuracy and intellectual property. Cognition used for decisions raises fairness and explainability. Coordination by autonomous agents raises questions of control and accountability. By identifying which capabilities a use case relies on, an organization can tailor its policies, human oversight, controls and monitoring to the actual risks. The model is described in the information and technology dimension and does not prescribe specific technologies.

---

**A44. Why does the complexity context of a value stream change how you manage and improve it?**

**Answer.** Different contexts need different approaches. In **ordered** contexts, cause and effect are known, so standard procedures, planned improvement cycles and automation work well. In **complex** contexts, outcomes can only be understood in hindsight, so detailed upfront plans fail. Small, safe-to-fail experiments with fast feedback work better. In **chaotic** situations, the first priority is to act and stabilise; analysis comes after. When the context is **confused**, you must first work out which context applies. Applying a fixed procedure to a complex problem, or endless experiments to routine work, wastes effort and harms outcomes. Recognising the context is part of *think and work holistically*.

---


## Section B: Scenario Questions with Model Answers

*For each scenario, write your own answer first, then compare it with the model answer. The model answers are not the only correct ones. Look for the principles they apply.*

---

**B1. Black Friday outage**

*An online retailer's web shop crashes at 10:00 on Black Friday, its busiest day. Customers cannot check out. Monitoring shows database connections exhausted. Two days earlier, a change increased the number of application servers. The CEO is calling the IT director every 15 minutes.*

**Questions.** (a) How should the incident be handled? (b) What happens after service is restored? (c) Which ISO/IEC 20000-1 requirements apply? (d) What should be improved for next year?

**Model answer.**

- **(a) Handling.**
  - It is a **major incident**: high impact and high urgency, P1. Invoke the **documented major incident procedure** (ISO 8.6.1).
  - Appoint a **major incident manager** and inform **top management**. Set up a regular communication rhythm, for example updates every 30 minutes to the CEO and business, so the CEO does not have to keep calling.
  - Use **swarming**: database, application, network and supplier experts work together.
  - Check the **change schedule**. The recent change that increased the application servers is a prime suspect, because more servers means more database connections.
  - Restore service quickly, for example by increasing the database connection limit as an **emergency change** or by rolling back the change. Record all actions with timestamps.
- **(b) After restoration.**
  - Hold a **major incident review** (ISO 8.6.1) to capture the timeline, decisions, communication effectiveness and lessons.
  - Raise a **problem record**: the root cause may be a capacity design flaw combined with an incomplete change impact assessment. Document the workaround as a **known error** until a permanent fix is deployed through **change enablement**.
- **(c) ISO requirements.** 8.6.1 (major incident criteria, procedure, top management informed, responsible person, review); 8.5.1 (emergency change, change review, failed-change remediation); 8.6.3 (problem and known error); 8.4.2 and 8.4.3 (demand forecasting for peak trading and capacity planning, which were evidently inadequate); 8.7.1 (investigation of unplanned non-availability); 8.3.3 (SLA breach reporting); and possibly 10.1 if a process nonconformity is found, for example if the change was not properly assessed.
- **(d) Improvements.**
  - **Demand management**: business events such as Black Friday should feed **capacity** planning and **load testing** (service validation and testing).
  - The **change risk assessment** for the connection pool should consult the configuration information about dependencies.
  - Put in place a **change freeze** policy or extra scrutiny before peak periods.
  - Set up **monitoring** warning events on database connection usage.
  - Log these items in the **CIR** and track them through the continual improvement model.

---

**B2. The email migration that overwhelmed the service desk**

*A company migrated 3,000 users to a new cloud email platform over one weekend. Technically the migration succeeded, with all mailboxes moved. On Monday, the service desk received four times its normal call volume: users could not find archived emails, mobile devices stopped syncing, and the shared calendar worked differently. Satisfaction dropped sharply.*

**Questions.** Which ITIL guiding principles and practices were neglected, and what should have been done?

**Model answer.**

- **Think and work holistically.** The project focused on the *technical* deployment and neglected the other dimensions: **organizations and people** (training and communication), **information** (knowledge articles for the service desk) and **value streams** (how users actually work with archives, mobile and calendars).
- **Focus on value.** For users, value means "I can do my work", not "my mailbox was moved".
- **Progress iteratively with feedback.** A **phased deployment** with a pilot group would have revealed the mobile and calendar issues before all 3,000 users were affected.
- **Collaborate and promote visibility.** The service desk should have been involved early. It knows which questions users will ask.
- **Practices involved:**
  - **Release management**: the release should include documentation, training and support arrangements, not just components.
  - **Deployment management**: a phased approach.
  - **Service validation and testing**: user acceptance testing with real usage scenarios.
  - **Knowledge management**: FAQs and known issues published before go-live.
  - **Organizational change management**: communication, training and champions.
  - **Service desk**: extra staffing for **early-life support**.
  - **Change enablement**: the impact assessment should cover users and support load.
- In ISO terms this was a change with potential major impact, so it should have gone through **8.5.2 service design and transition**. That route plans training (8.5.2.2), defines acceptance criteria and measurable intended outcomes, and reports outcomes after transition.

---

**B3. The watermelon contract**

*An IT outsourcing provider has met every SLA target for 12 months: 99.95% server availability, 95% of tickets responded to within 15 minutes and 98% of changes successful. The customer has nevertheless given notice that it will retender the contract, saying "IT is slowing our business down."*

**Questions.** Explain what is happening and what the provider should do.

**Model answer.**

- This is the **watermelon effect**: green metrics, red customer experience. The SLA measures **operational outputs**, such as server uptime and ticket *response*, not **outcomes**, such as end-to-end application performance, *resolution* time, the speed of delivering business requests and user experience.
- **Service level management** actions:
  - Re-engage through **customer engagement**. Ask: "What differentiates a good day from a bad day? What slows you down?"
  - Add **business metrics** (for example orders processed per hour and time to onboard a new employee) and **customer feedback** measures (satisfaction and sentiment) to create a **balanced bundle**.
  - Make sure SLAs are linked to **services in the catalogue**, are **genuinely agreed** and are **simply written**. Consider **experience level agreements (XLAs)**.
- **Relationship management.** The provider lacked strategic and tactical relationship building. Appoint a relationship manager, understand the customer's business drivers and bring proposals, not just reports.
- **ISO/IEC 20000-1.** BRM (8.3.2) requires **measuring customer satisfaction** at planned intervals, **reviewing performance trends and outcomes** with customers, and understanding **changes in customer needs**. Any of these, if missing, would be a nonconformity. Management review (9.3) should consider customer feedback. **Focus on value** (5.1, "what constitutes value") was evidently not determined.

---

**B4. Certification with outsourced components**

*A company with 60 IT staff wants ISO/IEC 20000-1 certification within six months. Its infrastructure runs in a public cloud, its service desk is outsourced to a managed service provider (MSP), and the parent company's central network team provides connectivity. The CIO suggests "excluding the outsourced parts from the scope".*

**Questions.** Advise the CIO on scope, control of other parties and the timeline.

**Model answer.**

- **Scope.** The scope is defined by **services, customers and locations**, not by excluding requirements. The organization cannot exclude requirements in clauses 4–10. Because it delivers the services to customers, the outsourced components are **part of those services** and must be **controlled**, not excluded. ISO/IEC 20000-3 gives scope guidance.
- **Control of other parties (8.2.3):**
  - Identify the **other parties**. The cloud provider and the MSP are **external suppliers**, controlled by **contracts** (8.3.4.1). The parent's network team is an **internal supplier**, controlled by a **documented agreement** (8.3.4.2).
  - Ensure contracts and agreements define the scope, requirements, **service level targets**, responsibilities, authorities and **interfaces**.
  - **Integrate** the MSP's incident and request handling into the SMS: shared tool or data, escalation paths, problem and change interfaces.
  - **Measure and review** supplier performance at planned intervals.
  - Include supplier risks in the **risk assessment** (6.1).
  - The organization **retains accountability** and must still operate meaningful parts of the SMS itself, because other parties cannot provide or operate everything.
- **Timeline.** Six months is ambitious but possible for a well-organized 60-person team if the scope is focused. The sequence would be:
  1. Gap analysis.
  2. Policy, plan and documented information.
  3. Processes operating for at least a few months to generate **records**.
  4. At least one **internal audit** cycle and a **management review** by top management before Stage 2.
  5. Stage 1, then Stage 2.
- Consider starting with a **narrow scope**, for example one key service, and extending later. This applies *progress iteratively with feedback* and *start where you are*.

---

**B5. The zero-day patch**

*A critical vulnerability is announced in the VPN appliance used by 5,000 remote staff. It is being actively exploited. The vendor releases a patch at 16:00. The next change advisory meeting is in six days.*

**Questions.** How should this change be handled under ITIL and ISO/IEC 20000-1?

**Model answer.**

- This is an **emergency change**: it must be implemented as soon as possible to address a security risk.
- Use the **expedited process** and the **emergency change authority**, typically a small group of senior managers who understand the business risk, such as the CIO, the CISO and the service owner. Do not wait six days.
- Assess the risk quickly: the risk of exploitation versus the risk of the patch causing an outage. Test as far as time allows, for example on one appliance or in a lab. Prepare a **remediation (backout) plan** (ISO 8.5.1.3).
- **Communicate** to users and the service desk, for example "VPN may disconnect briefly at 20:00". **Documentation may be completed after implementation.**
- Treat it as part of **information security management** (8.7.3): manage the vulnerability, and if exploitation is suspected, handle it as an **information security incident** through incident management with security-based priority.
- Afterwards: **review the change**, record it properly, and update **configuration information** (firmware version). **Change trend analysis** should check whether emergency patching is frequent. If it is, consider a pre-approved **standard change** model for vendor security patches.

---

**B6. The CMDB nobody trusts**

*An audit of a sample of configuration records finds 40% are inaccurate: wrong owners, missing relationships and decommissioned servers still recorded. Change managers no longer use the CMDB for impact analysis.*

**Questions.** What are the likely causes, and how should the organization fix the situation?

**Model answer.**

- **Likely causes.**
  - The scope is too broad: the CMDB tried to record everything.
  - There is no link between **change enablement** and CI updates.
  - There is no automated **discovery**.
  - Ownership of configuration data is unclear.
  - **Verification at planned intervals** (ISO 8.2.6) is not happening.
- **Fixing it.**
  - **Start where you are.** Identify which data *is* accurate and which practices actually need what data.
  - **Focus on value** and **keep it simple.** Reduce the scope to the CIs and relationships needed for change impact analysis, incident diagnosis and service mapping of critical services. Record the minimum attributes: ISO's identification, type, description, relationships and status.
  - **Optimize and automate.** Implement discovery and reconciliation tools, *after* defining the data model.
  - Make **CI updates a mandatory step** in change closure and in release and deployment (ISO 8.5.3).
  - Assign **CI owners**. Run **regular verification and audits**, record discrepancies and correct them.
  - **Progress iteratively.** Fix one critical service at a time and measure accuracy as a KPI.
- Under ISO, the audit result should be handled as a **nonconformity** (10.1), with correction, root cause analysis, corrective action and an effectiveness review.

---

**B7. Classifying internal audit findings**

*The internal audit finds: (1) the last management review did not consider customer feedback or the adequacy of resources; (2) one of eight external supplier contracts has no service level targets; (3) two of 20 sampled normal changes have no recorded approval.*

**Questions.** How serious is each finding, and what should be done?

**Model answer.**

- **(1) Management review missing required inputs (9.3).** The review happened, but it was incomplete. This is typically a **minor nonconformity**. It would become major if reviews were not happening at all or top management was absent. *Correction:* hold a supplementary review covering the missing inputs. *Corrective action:* adopt a standard management review agenda template that lists all required inputs, and have the SMS manager check completeness beforehand.
- **(2) A supplier contract without service level targets (8.3.4.1).** This is an isolated lapse, so it is a **minor nonconformity**. However, check whether that supplier is critical, because the risk could then be higher. *Correction:* agree targets with the supplier and amend the contract. *Corrective action:* use a contract checklist or template covering scope, requirements, targets, responsibilities and interfaces, and add contract review to the supplier management cycle.
- **(3) 10% of sampled changes lack approval (8.5.1.3).** This could indicate a **systemic** control weakness. If unapproved changes are routine, it may be **major**. A small number with an identifiable cause could be **minor**. *Investigate:* were they really unapproved, or were approvals simply not recorded? Did the tool allow the approval step to be bypassed? *Corrective action:* enforce approval steps in the tool workflow, retrain staff, monitor "changes without approval" as a KPI, and analyse whether any of these changes caused incidents.
- For all three, record the nonconformities, causes, actions and results (10.1), review effectiveness later, and report to management review.

---

**B8. "Let's automate onboarding!"**

*New employees currently wait an average of eight working days for their laptop, accounts and access. The process involves 14 hand-offs between HR, IT, security, facilities and managers. A team proposes buying a workflow automation tool and automating the existing process within a month.*

**Questions.** What advice would you give, using the guiding principles?

**Model answer.**

- **Optimize before automating.** Automating 14 hand-offs would only automate the waste.
- **Focus on value.** The outcome is "a new employee productive from day one", so measure lead time to productivity, not task completion.
- **Start where you are.** Map the current **value stream** end to end, measuring wait times versus work times, and find which steps work well.
- **Keep it simple and practical.** Remove non-value-adding approvals and duplicate data entry. Create **standard bundles**, for example "sales starter kit" and "developer kit", as **pre-approved service requests** or standard changes. Trigger IT work automatically from the HR hire event.
- **Collaborate and promote visibility.** Involve HR, security, facilities and hiring managers. Make the flow visible, for example on a Kanban board.
- **Think and work holistically.** Consider people (who owns the onboarding value stream?), information (role-based access models), suppliers (laptop delivery lead times) and processes.
- **Progress iteratively with feedback.** Pilot the redesigned flow with one department and then extend it.
- **Then optimize and automate** with the workflow tool, and **define metrics** such as lead time, first-day readiness and new-joiner satisfaction.
- **Practices:** service request management, IT asset management, information security management (access), supplier management, service catalogue management and relationship management.

---

**B9. Merging after an acquisition**

*Company A, which is ISO/IEC 20000-1 certified, acquires Company B, which is not certified and has its own service desk, tools and processes. The board wants a single IT organization within a year and wants to keep the certificate.*

**Questions.** How should the integration be approached?

**Model answer.**

- **Start where you are.** Assess both organizations objectively. Company B may have better practices in some areas, such as automation or customer focus. Do not assume A's way is always best.
- **Focus on value.** Prioritise integration steps that matter to customers and users, such as a single service desk contact point, consistent SLAs and no drop in service.
- **Collaborate and promote visibility.** Run joint design teams and communicate transparently with staff, who will be anxious. This is **organizational change management** and **workforce and talent management**.
- **Progress iteratively.** Integrate in phases, for example a common front door first, then tools, then processes.
- **Think and work holistically.** Cover culture, contracts with B's suppliers (now **other parties**), information (data migration, CMDB) and value streams.
- **ISO/IEC 20000-1.**
  - Treat the integration as a **change with potential major impact**: plan, design and transition it through **8.5.2**.
  - Update the **context** (4.1), **interested parties** (4.2) and **risks** (6.1).
  - Keep the existing **scope** and certificate for A's services. Plan a **scope extension** to include B's services once B's processes are integrated and operating, with records, internal audits and management review coverage.
  - Inform the **certification body** of the significant change. It may audit the extended scope at a surveillance or special audit.

---

**B10. One application, 30% of incidents**

*A government agency's incident data shows that 30% of all incidents relate to a single legacy case-management application. Most are resolved by restarting a service. Replacing the application would cost €2 million. The vendor offers a patch that may fix a memory leak for €40,000.*

**Questions.** How should problem management handle this, and how do the cost and benefit considerations work?

**Model answer.**

- **Problem identification.** **Trend analysis** of incident records, effectively a **Pareto analysis**, has already identified the problem. Record and prioritise it. With 30% of incidents involved, its risk and impact are high.
- **Problem control.**
  - Analyse the cause with the vendor. Restarts "fixing" the issue suggests a memory or resource leak.
  - Document the **workaround** (a controlled restart, possibly automated as a scheduled standard change in quiet hours) and create a **known error** record so the service desk can resolve incidents immediately.
  - Consider all four dimensions. For example, users may trigger the leak through a particular usage pattern.
- **Error control.**
  - Evaluate permanent solutions: the €40,000 patch, or the €2 million replacement.
  - Error control raises a **change request** only where it is **justified in terms of cost, risk and benefit**.
  - The patch looks clearly justified. Calculate the cost of the incidents (agent time, user downtime and the reputational impact on public services) against €40,000.
  - Implement the patch through **change enablement**, with testing (**service validation and testing**) and a backout plan.
  - Re-assess the known error regularly. If the patch fails, the replacement becomes a portfolio and business case decision (**portfolio management**, **service financial management**). Record it in the **CIR**.
- **ISO 8.6.3.** Trend analysis, root cause analysis, known errors made available to incident management, changes made in line with the change policy, and **monitoring the effectiveness of problem resolution**, for example checking that incident volume for the application drops after the patch.

---


## Section C: Mock Exam (40 Questions, 60 Minutes)

**Instructions.** Set a timer for **60 minutes**. Answer all 40 questions without looking at the book. Questions 1–26 cover ITIL and questions 27–40 cover ISO/IEC 20000. The pass mark used by ITIL Foundation is **65% (26/40)**. Aim for **at least 30/40** before a real exam. The answer key and explanations follow the exam.

---

**1.** Which is the ITIL 4 definition of a *service*?

- A) A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks
- B) A configuration of an organization's resources designed to offer value for a consumer
- C) A formal description of one or more services, designed to address the needs of a target consumer group
- D) A cooperation between a service provider and a service consumer

**2.** Which role authorises budget for service consumption?

- A) User
- B) Sponsor
- C) Customer
- D) Service provider

**3.** A company subscribes to a service that includes cloud storage space for its files. Which component of a service offering is the storage space?

- A) Goods
- B) Service action
- C) Access to resources
- D) Utility

**4.** Which of the following describes the *warranty* of a payroll service?

- A) The service calculates tax deductions automatically
- B) The service supports 2,000 concurrent users during month-end processing
- C) The service produces payslips in PDF format
- D) The service allows managers to approve overtime

**5.** Which dimension of service management includes the contracts and agreements between an organization and the other organizations involved in delivering its services?

- A) Organizations and people
- B) Information and technology
- C) Partners and suppliers
- D) Value streams and processes

**6.** What are the inputs to the Service Value System?

- A) Opportunity and demand
- B) Value and outcomes
- C) Products and services
- D) Practices and processes

**7.** Which guiding principle recommends observing the current state directly wherever possible, because measurement alone can be misleading?

- A) Focus on value
- B) Keep it simple and practical
- C) Start where you are
- D) Think and work holistically

**8.** Which guiding principle recommends that a workflow should be simplified and optimised *before* it is automated?

- A) Optimize and automate
- B) Start where you are
- C) Focus on value
- D) Collaborate and promote visibility

**9.** "Collaboration does not mean consensus" is guidance for applying which principle?

- A) Think and work holistically
- B) Focus on value
- C) Progress iteratively with feedback
- D) Collaborate and promote visibility

**10.** "Comprehend the whole, but do something" is guidance for applying which principle?

- A) Keep it simple and practical
- B) Progress iteratively with feedback
- C) Start where you are
- D) Optimize and automate

**11.** What is the purpose of the *engage* value chain activity?

- A) To ensure a shared understanding of the vision, current status and improvement direction
- B) To ensure that services are delivered and supported according to agreed specifications
- C) To ensure that service components are available when and where they are needed
- D) To provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders

**12.** Which value chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?

- A) Design and transition
- B) Deliver and support
- C) Obtain/build
- D) Plan

**13.** Which statement about the continual improvement model is correct?

- A) It can only be used for large organizational transformations
- B) It provides a structured, iterative approach that can be applied at any level, starting with "What is the vision?"
- C) It must only be used by a dedicated improvement team
- D) It ends permanently after the step "Did we get there?"

**14.** What is the purpose of the *incident management* practice?

- A) To minimize the negative impact of incidents by restoring normal service operation as quickly as possible
- B) To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents
- C) To capture demand for incident resolution and service requests
- D) To ensure that no incidents ever occur

**15.** How should incidents be prioritised?

- A) In the order in which they are received
- B) According to the seniority of the user
- C) Based on an agreed classification, so that incidents with the highest business impact are resolved first
- D) According to which support team has the shortest queue

**16.** What is a *known error*?

- A) An incident that cannot be resolved
- B) A cause of one or more incidents
- C) A solution that reduces the impact of an incident
- D) A problem that has been analysed and has not been resolved

**17.** Which phase of problem management identifies potential permanent solutions that may result in a change request?

- A) Problem identification
- B) Error control
- C) Problem control
- D) Incident control

**18.** Which of the following is the best example of a *standard change*?

- A) Adding memory to a server using a documented, pre-authorised procedure that has been assessed as low-risk
- B) Upgrading the core banking platform to a new major version
- C) Applying an urgent patch to stop an active cyber-attack
- D) Migrating the data centre to a new hosting provider

**19.** What is a *change authority*?

- A) The person who requests a change
- B) The team that builds and tests a change
- C) A schedule of planned changes
- D) A person or group responsible for authorizing a change

**20.** What is the purpose of the *service request management* practice?

- A) To capture demand for incident resolution and service requests
- B) To restore normal service operation as quickly as possible
- C) To support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner
- D) To maximize the number of successful service and product changes

**21.** Which statement about the service desk is correct?

- A) Service desk staff must be highly technical specialists in all technologies
- B) It should be the entry point and single point of contact for the service provider with all of its users, and it needs empathy and an understanding of the business
- C) It must always be located in a single physical location
- D) It should only handle telephone calls

**22.** What is the purpose of the *service level management* practice?

- A) To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels
- B) To ensure that services deliver agreed levels of availability
- C) To provide a single source of consistent information on all services and service offerings
- D) To set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets

**23.** What is the purpose of the *monitoring and event management* practice?

- A) To systematically observe services and service components, and record and report selected changes of state identified as events
- B) To ensure that accurate information about CIs is available when and where it is needed
- C) To protect the information needed by the organization to conduct its business
- D) To move new or changed components to live environments

**24.** What is the purpose of the *IT asset management* practice?

- A) To ensure that accurate and reliable information about the configuration of services is available
- B) To make new and changed services and features available for use
- C) To plan and manage the full lifecycle of all IT assets
- D) To protect the information needed by the organization

**25.** What is the purpose of the *service configuration management* practice?

- A) To plan and manage the full lifecycle of all IT assets
- B) To ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed
- C) To systematically observe services and service components
- D) To move new or changed hardware and software to live environments

**26.** What is the purpose of the *release management* practice?

- A) To move new or changed hardware, software, documentation, processes, or any other component to live environments
- B) To maximize the number of successful service and product changes
- C) To ensure that new or changed products and services meet defined requirements
- D) To make new and changed services and features available for use

**27.** Against which part of the ISO/IEC 20000 series can an organization be certified?

- A) ISO/IEC 20000-1
- B) ISO/IEC 20000-2
- C) ISO/IEC 20000-10
- D) ISO/IEC TR 20000-11

**28.** A small organization wants to exclude service continuity management (8.7.2) from its SMS because it has never had a disaster. Can it still claim conformity to ISO/IEC 20000-1:2018?

- A) Yes, if it documents a justification
- B) Yes, if its customers agree
- C) No. Exclusion of any requirement in clauses 4 to 10 is not acceptable
- D) Yes, because clause 8 requirements are optional

**29.** What must the SMS scope statement include?

- A) The number of employees in the organization
- B) The services in scope and the name of the organization managing and delivering them
- C) The ITIL practices that have been adopted
- D) The requirements that have been excluded

**30.** Which of the following is mandatory SMS documented information according to clause 7.5.4?

- A) An ITIL maturity assessment
- B) An organization chart for the whole company
- C) A list of all users
- D) The service continuity plan(s)

**31.** Which of the following is a responsibility of top management according to clause 5.1?

- A) Approving every normal change personally
- B) Performing all internal audits
- C) Ensuring that what constitutes value for the organization and its customers is determined
- D) Designing the CMDB data model

**32.** Which of the following must be managed through *service design and transition* (8.5.2)?

- A) Resetting a user's password
- B) The removal of a service
- C) Replacing a printer toner cartridge
- D) Adding a user to a distribution list

**33.** What does clause 8.3.4.1 require for each external supplier?

- A) A verbal agreement is sufficient
- B) Only a purchase order is required
- C) The supplier becomes responsible for meeting the SMS requirements
- D) A documented contract that includes or references the scope, requirements, service level targets or other obligations, and the authorities and responsibilities of both parties

**34.** Which information must be recorded for configuration items according to clause 8.2.6?

- A) Unique identification, type, description, relationship with other CIs, and status
- B) Purchase price and depreciation
- C) User satisfaction scores
- D) Incident counts only

**35.** According to clause 8.6.1, who must be informed of major incidents?

- A) The certification body
- B) All users
- C) Top management
- D) External suppliers only

**36.** When must service continuity plans be tested?

- A) Only before the certification audit
- B) At planned intervals and after major changes to the service environment
- C) Only after a disaster has occurred
- D) Testing is optional

**37.** What must internal audits determine according to clause 9.2?

- A) Only the financial performance of the services
- B) Only whether ITIL is being used
- C) Only whether suppliers comply with their contracts
- D) Whether the SMS conforms to the organization's own requirements and to the requirements of ISO/IEC 20000-1, and is effectively implemented and maintained

**38.** Who performs the management review?

- A) Top management
- B) The internal auditor
- C) The certification body
- D) The customers

**39.** Which finding is most likely to be classified as a *major* nonconformity at a certification audit?

- A) One incident record has the wrong category
- B) There are minor typographical errors in the change management policy
- C) No internal audit has ever been performed
- D) The auditor suggests adding a dashboard to the service report

**40.** In ISO/IEC 20000-1:2018, which term replaced "service provider" from the 2011 edition?

- A) The supplier
- B) The organization
- C) The customer
- D) The service owner

---


### Mock Exam: Answer Key and Explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **A** | B is a product, C a service offering and D a service relationship. |
| 2 | **B** | The sponsor authorises budget. The customer defines requirements and the user uses the service. |
| 3 | **C** | Ownership of cloud storage is not transferred, so it is access to resources. |
| 4 | **B** | Capacity is a warranty aspect. A, C and D are functionality, which is utility. |
| 5 | **C** | Partners and suppliers. |
| 6 | **A** | Opportunity and demand go in, and value comes out. |
| 7 | **C** | Start where you are: observe directly and use measurement carefully. |
| 8 | **A** | Optimize and automate: simplify and optimise before automating. |
| 9 | **D** | Collaborate and promote visibility. |
| 10 | **B** | Progress iteratively with feedback. |
| 11 | **D** | A is plan, B is deliver and support, and C is obtain/build. |
| 12 | **C** | Obtain/build: "when and where they are needed". |
| 13 | **B** | The model applies at all levels, is iterative and starts with the vision. Improvement never permanently ends. |
| 14 | **A** | B is problem management and C is the service desk. |
| 15 | **C** | Agreed classification based on business impact, typically impact and urgency. |
| 16 | **D** | A known error is a problem that has been analysed and not resolved. B defines a problem and C a workaround. |
| 17 | **B** | Error control may raise a change request when justified by cost, risk and benefit. |
| 18 | **A** | Low-risk, documented, pre-authorised. C is an emergency change. B and D are normal changes. |
| 19 | **D** | The person or group responsible for authorising a change. |
| 20 | **C** | A is the service desk. |
| 21 | **B** | The single point of contact, which needs empathy and business understanding. |
| 22 | **D** | A is relationship management, B availability management and C service catalogue management. |
| 23 | **A** | B is service configuration management, C information security and D deployment. |
| 24 | **C** | A is service configuration management and B release management. |
| 25 | **B** | A is IT asset management. |
| 26 | **D** | A is deployment management. |
| 27 | **A** | Only Part 1 contains certifiable requirements. |
| 28 | **C** | No exclusions in clauses 4–10. The organization scales its continuity management to its size instead. |
| 29 | **B** | Services in scope plus the name of the organization. |
| 30 | **D** | 7.5.4(d) names the service continuity plan(s). |
| 31 | **C** | Determining value is an explicit 5.1 responsibility. |
| 32 | **B** | Removal of a service is routed to 8.5.2. The others are service requests or standard changes. |
| 33 | **D** | A documented contract with these elements. Accountability stays with the organization. |
| 34 | **A** | I-T-D-R-S: identification, type, description, relationships and status. |
| 35 | **C** | Top management. |
| 36 | **B** | At planned intervals and after major changes. |
| 37 | **D** | Conformity to both sets of requirements, plus effective implementation and maintenance. |
| 38 | **A** | Top management. |
| 39 | **C** | The total absence of a required element (9.2) is a major nonconformity. A and B are minor, and D is an OFI. |
| 40 | **B** | "The organization". |

### Interpreting your score

| Score | Interpretation | Next step |
|---|---|---|
| **36–40** | Excellent: exam-ready | Light revision of Appendix C on exam day |
| **30–35** | Good: likely to pass | Revise the chapters behind each wrong answer. Redo those chapters' questions |
| **26–29** | Borderline pass | Spend another day on the weak chapters. Re-read the key takeaways for all chapters. Retake the mock exam after 48 hours |
| **Below 26** | Not yet ready | Repeat the study plan for weak areas, focusing on definitions (Chapters 2, 4, 5, 7, 8) and clause structure (Chapters 11–13) |

**Map your mistakes to chapters:** Q1–4 → Chapter 2; Q5 → Chapter 3; Q6–10 → Chapter 4; Q11–13 → Chapter 5; Q14–26 → Chapters 6–8; Q27–30 → Chapters 11–12; Q31 → Chapter 12; Q32–36 → Chapter 13; Q37–39 → Chapter 14; Q40 → Chapter 11.

---

### Final Words

You have now covered the core of ITIL 4 (and what changed in Version 5), the clauses of ISO/IEC 20000-1:2018, and how the two fit together in practice. In the final hours before an exam:

1. Read **Appendix C** (quick reference) twice.
2. Re-test only your **"weak areas"** list.
3. Recite aloud: the **7 guiding principles**, the **4 dimensions**, the **6 value chain activities**, the **7 continual improvement steps**, the **3 types of change**, the **3 phases of problem management**, the **clause 4–10 titles** and the **seven clause 8 groups**.
4. In the exam, read every word of each question. Watch for "**NOT**", "**BEST**", "**MOST**" and "**FIRST**", and eliminate the clearly wrong options before choosing.

Good luck.

---


# Appendix A: Answer Key to the End-of-Chapter Questions

**How to use this answer key.**

- Mark your answers honestly. For multiple-choice questions, give yourself **1 point** per correct answer.
- For short-answer questions, compare your answer with the **model answer**. Give yourself **full credit** if you covered the key points, even in different words, and **half credit** if you covered some of them.
- Score each chapter as a percentage. **Below 70%** means: re-read the chapter's key takeaways, revisit the sections behind the wrong answers, and retest after 24 hours.
- Write every missed concept on your **"weak areas"** list for Day 7.

---


## Answers: Chapter 1

| Q | Answer | Explanation |
|---|---|---|
| 1.1 | **B** | ITIL is guidance that you adopt and adapt. ISO/IEC 20000-1 sets out "shall" requirements that can be audited. |
| 1.2 | **B** | Certification applies to an organization's SMS for a defined scope. People take ITIL or ISO/IEC 20000 *training* exams, which are personal qualifications rather than ISO certification. |
| 1.3 | **C** | "Shall" is a requirement. "Should" is a recommendation, "may" is a permission and "can" is a possibility. |
| 1.4 | **B** | BS 15000 became ISO/IEC 20000. BS 7799 became ISO/IEC 27001, BS 25999 became ISO 22301, and BS 5750 was the forerunner of ISO 9001. |
| 1.5 | **D** | ITIL 4 (2019) introduced the SVS and value co-creation. |
| 1.6 | **C** | v3 (2007) and the 2011 edition were built around Strategy, Design, Transition, Operation and CSI. |
| 1.7 | **A** | COBIT is ISACA's governance and management framework. |
| 1.8 | **B** | ISO/IEC 27001 covers the ISMS. ISO 9001 is quality, ISO 22301 is business continuity and ISO/IEC 38500 is IT governance principles. |
| 1.9 | **B** | Value comes from the outcomes customers achieve. Components matter only because they enable those outcomes. |
| 1.10 | **B** | ISO/IEC 20000-1:2018 follows the Annex SL high-level structure. It does not require ITIL, and it applies to internal and external providers alike. |
| 1.11 | **C** | PeopleCert acquired AXELOS, and with it ITIL, in 2021. |
| 1.12 | **A** | PRINCE2 is a prescriptive project management method. |

**1.13 (model answer).** ITSM is the set of specialised organizational capabilities used to deliver and manage IT-enabled services so that they create value for customers. Benefits include faster restoration of service, fewer repeat incidents, safer change, agreed and measurable service levels, cost transparency, compliance evidence and better customer experience. Any two are acceptable.

**1.14 (model answer).** ITIL is guidance that organizations adapt selectively. ISO/IEC 20000-1 contains specific, auditable requirements, for example a documented service management policy, a service management plan, internal audits, management reviews, documented information and control of other parties. Following ITIL does not guarantee that each requirement is met or that there is *evidence* that it is met. Conformity must be demonstrated against every "shall" in clauses 4–10.

**1.15 (model answer).** Examples are ISO 9001, ISO/IEC 27001, ISO 22301, ISO 14001 and ISO 45001. Because they share the same clause structure (context, leadership, planning, support, operation, performance evaluation, improvement), core terms and much common text, organizations can build one **integrated management system**. That allows shared processes for document control, internal audit, management review and corrective action, so effort and audit time are reduced.

**1.16 (model answer).** v1 (late 1980s–1990s) documented proven practice. v2 (2000–2002) focused on processes in Service Support and Service Delivery. v3 (2007) and the 2011 edition introduced the five-stage service lifecycle. ITIL 4 (2019) introduced the Service Value System, value co-creation, the four dimensions, the guiding principles and 34 practices. ITIL (Version 5) (2026) introduced product and service management, the Product and Service Lifecycle Model and AI guidance.


## Answers: Chapter 2

| Q | Answer | Explanation |
|---|---|---|
| 2.1 | **A** | B is a price. C is utility. D is warranty. |
| 2.2 | **C** | The customer defines requirements and owns the outcomes. |
| 2.3 | **B** | Authorising budget is the sponsor role. |
| 2.4 | **B** | A defines a product, C an SLA and D a service relationship. |
| 2.5 | **A** | Goods are supplied with ownership transferred. Access to resources keeps ownership with the provider. |
| 2.6 | **B** | A is the definition of an output. |
| 2.7 | **C** | A, B and D are risks the service *removes* from the consumer. |
| 2.8 | **B** | A is utility. |
| 2.9 | **B** | Features are utility. Availability, capacity and recoverability (A, C, D) are warranty. |
| 2.10 | **C** | A is service provision and B is service consumption. |
| 2.11 | **B** | ITIL 4 is built on value **co-creation**. |
| 2.12 | **B** | A is the definition of a service. D is close to the definition of a release. |
| 2.13 | **B** | Consumers contribute through active participation in defining requirements and outcomes, communicating critical success factors and constraints, and giving the provider access to the consumer resources it needs. |

**2.14 (model answer).** An output is what an activity produces. An outcome is the result a stakeholder achieves because of that output. Example: the service desk resets a password (output: a reset account), so the user can log in and finish a client proposal on time (outcome). Another example: a monthly report (output) lets the manager identify a cost overrun and correct it (outcome).

**2.15 (model answer).** One person holds all three roles when they choose, pay for and use a service personally, for example someone buying a personal streaming subscription. Three different people: in a company buying a CRM system, the CFO approves budget (**sponsor**), the sales director defines requirements and is accountable for outcomes (**customer**) and sales representatives use it daily (**users**).

**2.16 (model answer).** *Goods:* none if the laptop stays company property. If ownership is transferred, the laptop itself, or accessories such as a headset given to the employee, would be goods. *Access to resources:* the company laptop, which is loaned and not owned; the corporate network, VPN, software licences and cloud storage. *Service actions:* set-up and imaging, software installation, repairs and replacement, security patching and service desk support.

**2.17 (model answer).** Utility (fit for purpose) is what the service does. Warranty (fit for use) is how well it performs: availability, capacity, security and continuity. An online banking service that offers every feature but is down every evening has utility without warranty, so customers cannot get value. A service that is always available but cannot make payments has warranty without utility. Customers achieve their desired outcomes only when both are present.


## Answers: Chapter 3

| Q | Answer | Explanation |
|---|---|---|
| 3.1 | **B** | A is the ITIL v3 "4 Ps" of service design. C is the v3 lifecycle stages. D is part of the service value chain. |
| 3.2 | **C** | Organizations and people. |
| 3.3 | **A** | Information and technology. |
| 3.4 | **C** | The shortage of specialists is resource scarcity. |
| 3.5 | **B** | Value streams and processes. |
| 3.6 | **B** | Political, Economic, Social, Technological, Legal, Environmental. |
| 3.7 | **B** | A is the definition of a process. |
| 3.8 | **A** | A process transforms inputs into outputs. |
| 3.9 | **B** | All four dimensions apply to every service and to the SVS, with balanced attention. |
| 3.10 | **B** | Exactly one Accountable per activity. |
| 3.11 | **B** | SIAM is service integration and management. |
| 3.12 | **B** | Technology alone does not deliver results. People, skills and redesigned processes are also required. |

**3.13 (model answer).** A **value stream** is the end-to-end series of steps that turns demand into value for a consumer, usually crossing teams and practices. Example: "a customer reports a fault and is working again", or "a new feature goes from idea to customers". A **process** is a defined set of interrelated activities that transforms inputs into outputs, usually within one practice. Example: the incident logging and classification process, or the change authorisation process. Value streams typically combine several processes and practices.

**3.14 (model answer).** *Organizations and people:* who owns portal content, training for staff and users, and encouraging staff to promote the portal. *Information and technology:* an accurate request catalogue and knowledge articles, integration with the ITSM tool, single sign-on and mobile access. *Partners and suppliers:* the portal vendor's licence, SLA and support; suppliers that fulfil some requests. *Value streams and processes:* request workflows and approvals, automation of fulfilment and how portal requests reach fulfilment teams.

**3.15 (model answer).** Strategic focus, corporate culture, resource scarcity, cost concerns, subject matter expertise, external constraints (regulation or policy) and demand patterns.

**3.16 (model answer).** *Political:* a government "cloud-first" policy. *Economic:* budget cuts during a recession. *Social:* demand for hybrid working. *Technological:* generative AI changing support models. *Legal:* data-protection law restricting where data is stored. *Environmental:* targets to reduce data-centre energy use. Other valid examples are acceptable.


## Answers: Chapter 4

| Q | Answer | Explanation |
|---|---|---|
| 4.1 | **A** | Opportunity and demand go in, and value comes out. |
| 4.2 | **A** | The service value chain is one of the five SVS components. The service desk is a practice, not a component in its own right. |
| 4.3 | **B** | Guiding principles are recommendations, not mandatory rules. |
| 4.4 | **C** | This is the core statement of optimize and automate. |
| 4.5 | **B** | Start where you are. |
| 4.6 | **A** | Progress iteratively with feedback: resist the temptation to do everything at once. |
| 4.7 | **B** | Collaborate and promote visibility. |
| 4.8 | **B** | Optimise before automating. Automating waste only makes waste faster. |
| 4.9 | **A** | Think and work holistically. |
| 4.10 | **C** | Keep it simple and practical. |
| 4.11 | **B** | Start where you are recommends observing directly and using measurement carefully. |
| 4.12 | **B** | Evaluate, direct, monitor, as in ISO/IEC 38500. |
| 4.13 | **B** | The principles interact and should be considered together. |
| 4.14 | **B** | A is the definition of a process. |
| 4.15 | **A** | Focus on value includes CX and UX. |
| 4.16 | **B** | Small usable increments with user feedback is progress iteratively with feedback, delivering value early to users is focus on value. |

**4.17 (model answer).** The SVS is designed as an integrated system rather than a set of departments. Value chain activities can be combined flexibly into value streams that cross teams. Practices contribute across the whole value chain rather than belonging to one team. Shared guiding principles and governance give everyone the same direction and decision criteria, and continual improvement applies at every level. Together these encourage collaboration, shared information and end-to-end ownership, and they discourage local optimisation.

**4.18 (model answer).** First observe how problems are currently handled, directly and not only through reports. Check whether teams already do informal root cause analysis, whether incident data exists to support trend analysis, and whether any team keeps a list of known errors. Use the desired outcome, fewer repeat incidents, as the reference point. Reuse what works, for example extending a good post-incident review format to all teams. Assess the risks of change. Accept that some elements, such as unreliable data, may not be reusable and need to be rebuilt.

**4.19 (model answer).** (1) Each iteration needs **feedback**, and that feedback comes from **collaborating** with users, customers and staff. (2) Making iteration results **visible**, through demos and dashboards, builds trust and stakeholder buy-in for the next iteration. It also creates urgency where progress is slow. (3) Visible work in progress helps teams choose the next most valuable iteration. Any two points are sufficient.

**4.20 (model answer).** **Governance** is how the organization is directed and controlled. The governing body **evaluates**, **directs** (strategy and policies) and **monitors** performance and conformance. Example: the board approves a cloud-first strategy and a low risk appetite for customer data. **Management** plans, builds, runs and monitors activities within that direction and reports back. Example: the IT director produces a migration plan, selects suppliers and reports monthly progress against the board's direction.


## Answers: Chapter 5

| Q | Answer | Explanation |
|---|---|---|
| 5.1 | **A** | "When and where they are needed" is obtain/build. B is design and transition. |
| 5.2 | **B** | Quality, costs and time to market. |
| 5.3 | **C** | Plan. |
| 5.4 | **B** | Engage is the interface with users and other stakeholders. Incident *resolution* takes place in deliver and support. |
| 5.5 | **B** | The activities have no fixed order. Value streams combine them in different ways, and practices contribute to several activities. |
| 5.6 | **A** | Governing body policies, requirements and constraints are a key input to plan. |
| 5.7 | **B** | Where are we now? is the baseline assessment. |
| 5.8 | **B** | Where do we want to be? sets measurable targets. |
| 5.9 | **B** | The CIR tracks improvement ideas from identification to final action. |
| 5.10 | **C** | Continual improvement is everyone's responsibility. |
| 5.11 | **D** | Embedding the change and sustaining momentum. |
| 5.12 | **C** | Deliver and support receives new and changed products and services from design and transition. |

**5.13 (model answer).**

1. **Engage:** the user submits the request on the self-service portal (service desk, service request management).
2. **Plan:** if the software is new to the organization, check it against the approved portfolio and architecture (portfolio management, architecture management). Standard catalogue items skip this step.
3. **Obtain/build:** buy or allocate a licence (IT asset management, supplier management).
4. **Design and transition:** package the software and deploy it to the user's device, as a standard change if pre-authorised (deployment management, change enablement, release management).
5. **Deliver and support:** the user uses the application and support is available (service request management, service desk).
6. **Engage:** confirm fulfilment and collect satisfaction feedback (service desk).
7. **Improve:** analyse request volumes and lead times (continual improvement, measurement and reporting).

**5.14 (model answer).** The **service value chain** is the generic operating model of six interconnected activities that any service organization performs. A **value stream** is a specific series of steps for a particular scenario, such as handling an incident or launching a feature. It combines value chain activities and practices in the sequence that scenario requires. The value chain describes *what kinds of activity exist*. A value stream describes *how they are combined to create value in one case*.

**5.15 (model answer).** An initiative can be executed exactly as planned and still fail to deliver the intended improvement. For example, a new tool may be implemented on time while user satisfaction stays the same. ITIL's focus on value requires checking that the **measurable targets and expected value** were achieved. If they were not, the organization learns why and adjusts, instead of declaring success because the activities were completed.

**5.16 (model answer).** (1) As one of the five components of the SVS. (2) As the **improve** activity of the service value chain. (3) As the **continual improvement** general management practice.


## Answers: Chapter 6

| Q | Answer | Explanation |
|---|---|---|
| 6.1 | **A** | B is service configuration management, C is supplier management and D is capacity and performance management. |
| 6.2 | **B** | A is SLM, C is the service desk and D is organizational change management. |
| 6.3 | **A** | Supplier management is about managed performance and seamless quality, not just the lowest price. |
| 6.4 | **B** | A is project management, C is problem management and D is change enablement. |
| 6.5 | **B** | Making business cases for improvement action is a key activity. The other options belong to other practices. |
| 6.6 | **D** | Non-repudiation. |
| 6.7 | **C** | A small number of key methods. |
| 6.8 | **B** | Risk management. |
| 6.9 | **B** | Measurement and reporting decreases uncertainty. |
| 6.10 | **B** | Organizational change management covers the people side. Change enablement manages the risk of changes to services and technology. |
| 6.11 | **C** | Insurance transfers or shares the impact. |
| 6.12 | **A** | Portfolio management. |
| 6.13 | **B** | Tacit knowledge is held in people's experience and is hard to document. |
| 6.14 | **A** | Workforce and talent management. |
| 6.15 | **A** | Information security balances prevention, detection and correction. D is the set of governance activities. |

**6.16 (model answer).** **Relationship management** establishes and nurtures links with **stakeholders**, mainly customers and business units, at strategic and tactical levels. It understands their needs, priorities and satisfaction and mediates conflicting requirements. **Supplier management** makes sure that **suppliers**, the organizations that provide goods and services *to* us, and their performance are managed. It covers supplier strategy, contracts, negotiation and performance reviews. The first looks towards the consumers of our services. The second looks towards the providers we depend on.

**6.17 (model answer).** Any five of: encouraging CI across the organization; securing time and budget for CI; identifying and logging improvement opportunities; assessing and prioritising them; making business cases for improvement action; planning and implementing improvements; measuring and evaluating results; coordinating improvement activities across the organization.

**6.18 (model answer).** **Avoid:** stop the risky activity, for example decommission an unsupported operating system instead of exposing it to the internet. **Reduce:** lower the likelihood or impact, for example add a second data centre, patch regularly or use MFA. **Transfer (share):** move the impact to another party, for example cyber-insurance or a managed service contract with penalties. **Accept:** consciously tolerate a low risk where the controls would cost more than the risk, for example accepting the brief unavailability of a non-critical internal wiki, while monitoring it.

**6.19 (model answer).** **Chargeback** means internal customers are actually billed for the services they consume. It encourages responsible consumption, because people use less when they pay, and it makes costs visible. **Showback** means consumption and costs are reported to customers without billing them. It creates cost awareness without the administrative overhead and internal friction of billing, which can suit organizations where IT is centrally funded.


## Answers: Chapter 7

| Q | Answer | Explanation |
|---|---|---|
| 7.1 | **B** | A is incident management, C is service request management and D is SLM. |
| 7.2 | **B** | The service desk needs empathy, emotional intelligence and a broad understanding of the business. It need not be highly technical, it can be virtual, and it remains essential. |
| 7.3 | **B** | A defines a problem, C an event and D a service request. |
| 7.4 | **B** | A is the purpose of problem management. |
| 7.5 | **B** | Swarming. |
| 7.6 | **B** | Prioritise by agreed classification based on business impact, typically impact and urgency. |
| 7.7 | **A** | A known error has been analysed but not resolved. |
| 7.8 | **A** | Problem identification includes trend analysis. |
| 7.9 | **B** | Problem control. |
| 7.10 | **B** | Error control identifies permanent solutions that may lead to change requests, and re-assesses known errors. |
| 7.11 | **B** | A workaround reduces or eliminates impact while there is no full resolution yet. |
| 7.12 | **A** | B is the service desk. |
| 7.13 | **B** | Access requests are pre-defined service requests. A, C and D are incidents. |
| 7.14 | **B** | Standardise and automate as much as possible. |
| 7.15 | **A** | B is service configuration management. |
| 7.16 | **B** | A warning allows action before a negative impact occurs. |
| 7.17 | **B** | A defines a CI. |
| 7.18 | **B** | A is IT asset management and C is deployment management. |
| 7.19 | **A** | Any component that needs to be managed to deliver an IT service. |
| 7.20 | **B** | A degradation is "a reduction in the quality of a service", so it is an incident. |

**7.21 (model answer).** **Incident management** restores normal service as quickly as possible and minimises the impact of incidents. It deals with symptoms *now*. **Problem management** identifies the actual and potential *causes* of incidents and manages workarounds and known errors, to reduce how often incidents happen and how much damage they do. Interactions: (1) incident records, especially recurring and major incidents, are the main input to problem identification; (2) problem management supplies **workarounds and known error records** that the service desk and incident teams use to resolve incidents faster; (3) a major incident review may raise a problem record.

**7.22 (model answer).** (a) **High impact, high urgency → P1 (critical).** All customers and revenue are affected immediately. Use the major incident procedure. (b) **Low impact, low urgency → P4 or P5 (low).** One user is affected, and a workaround (another printer) exists. (c) **Impact is limited to one user but is significant, and urgency is high → P2 or P3 depending on local rules.** The deadline creates urgency. Because a spare laptop exists, the workaround is to swap the laptop immediately. Many organizations have VIP rules, but ITIL's principle is to prioritise by agreed business impact and urgency, not by seniority alone.

**7.23 (model answer).** (1) **Service delivery action:** replace a toner cartridge. (2) **Information:** "how do I book a meeting room?" (3) **Provision of a resource or service:** a new laptop or a virtual machine. (4) **Access to a resource or service:** access to a shared folder or application. (5) **Feedback, compliments and complaints:** praising an agent, or complaining about portal usability.

**7.24 (model answer).** Configuration information costs money and effort to collect, store, verify and keep accurate. Every change must update it. Recording too much detail makes the data impossible to keep current, and inaccurate data is worse than none because people make wrong impact assessments based on it. Recording too little makes it useless for impact analysis, diagnosis and planning. The organization should therefore record only the CIs, attributes and relationships whose value justifies the cost, focusing on what change, incident, problem and other practices actually need.


## Answers: Chapter 8

| Q | Answer | Explanation |
|---|---|---|
| 8.1 | **B** | A is release management, C is deployment management and D is organizational change management. |
| 8.2 | **A** | B is a service request, C a release and D an incident. |
| 8.3 | **C** | Standard change. |
| 8.4 | **B** | The risk assessment is done when the standard change procedure is created or modified, not every time it is used. |
| 8.5 | **C** | Emergency changes use an expedited process. Documentation may be deferred, a separate authority may exist and they are not normally on the schedule in advance. |
| 8.6 | **B** | The change schedule supports planning, communication, conflict avoidance and resource allocation, and later supports incident, problem and improvement work. |
| 8.7 | **A** | The person or group responsible for authorising a change. |
| 8.8 | **B** | Change models define authority. A CAB is not mandatory in ITIL 4. |
| 8.9 | **A** | Make services and features available for use. |
| 8.10 | **B** | Move components to live, and other, environments. |
| 8.11 | **D** | Pull deployment. |
| 8.12 | **A** | Phased deployment. |
| 8.13 | **A** | B is relationship management, C is availability management and D is service catalogue management. |
| 8.14 | **B** | A is an underpinning contract and C is an OLA (an agreement with an internal supplier). |
| 8.15 | **B** | SLAs must relate to catalogued services and to outcomes, be genuinely agreed and be simply written. |
| 8.16 | **B** | The customer values this business activity as a measure of success, so it is a business metric. |
| 8.17 | **B** | These are the SLM skills listed by ITIL 4. |
| 8.18 | **A** | B is availability management and C is incident management. |
| 8.19 | **B** | RPO is the maximum tolerable data loss. A describes the RTO. |
| 8.20 | **A** | B is service design and C is business analysis. |
| 8.21 | **B** | Service catalogue management. |

**8.22 (model answer).**

- **Standard change:** low-risk, well understood, fully documented and **pre-authorised**. It is risk-assessed and authorised once, when the procedure is created or modified, then implemented without further authorisation. It is often triggered as a service request. Example: installing approved software on a laptop.
- **Normal change:** must be **scheduled, assessed and authorised** through a process. **Change models** define the change authority. Low-risk normal changes are authorised quickly by a peer or by automated pipeline checks. High-risk changes are authorised by senior management, up to the board. Example: upgrading the core database platform.
- **Emergency change:** must be implemented **as soon as possible**, for example to fix a P1 incident or apply a critical security patch. It uses an **expedited** assessment and authorisation, often by a small separate emergency change authority. Testing may be reduced, documentation may be deferred, and it is not normally on the change schedule in advance.

**8.23 (model answer).** **Deployment management** moves new or changed components, such as software, hardware, documentation and processes, into live or other environments. It is a technical activity. **Release management** makes new or changed services and features **available for use**. It is a decision about when users get the value. In DevOps, code is often **deployed continuously** to production but kept hidden, for example behind feature toggles or a "dark launch". It is **released** later by switching it on for some or all users, independently of the deployment.

**8.24 (model answer).** The watermelon effect occurs when SLA reports are **green**, because all technical targets are met, while customers feel the service is **red**, because they are dissatisfied. It happens because SLAs measure narrow operational metrics rather than outcomes and experience. SLM can avoid it by: (1) basing SLAs on **customer outcomes and business metrics**, for example "orders processed end to end" rather than server uptime; (2) using **balanced bundles of metrics** that include **customer satisfaction and feedback**; (3) genuinely **engaging and listening** to customers, so that targets are agreed and reviewed regularly; (4) introducing experience-level measures (XLAs). Any two are sufficient.

**8.25 (model answer).** The **RTO** is the maximum acceptable time before a service must be restored after a disruption. The **RPO** is the maximum acceptable data loss, measured in time. Tight objectives require expensive solutions: a near-zero RTO and RPO needs hot standby or active-active sites with synchronous replication. Looser objectives, such as an RTO of 72 hours and an RPO of 24 hours, can be met with cheaper options such as warm or cold standby and daily backups. The **business impact analysis** sets the objectives so that cost matches business need.


## Answers: Chapter 9

| Q | Answer | Explanation |
|---|---|---|
| 9.1 | **B** | Strategy, Design, Transition, Operation and CSI. |
| 9.2 | **C** | Service Operation. |
| 9.3 | **C** | Service Transition. |
| 9.4 | **A** | Service Design. |
| 9.5 | **B** | The service desk is a function. The other options are processes. |
| 9.6 | **A** | People, processes, products and partners. D is the "4 Ps" of *strategy*. |
| 9.7 | **C** | The seven Rs are raised, reason, return, risks, resources, responsible and relationship. |
| 9.8 | **B** | Service request management. |
| 9.9 | **B** | Identify the strategy for improvement. |
| 9.10 | **B** | The Product and Service Lifecycle Model (PSLM). |
| 9.11 | **A** | The seven guiding principles. The SVS is renamed the ITIL Value System, and practices are regrouped. |
| 9.12 | **C** | The eight activities are Discover, Design, Acquire, Build, Transition, Operate, Deliver and Support. "Engage" belongs to the ITIL 4 value chain. |

**9.13 (model answer).** ISO/IEC 20000-1 describes requirements in terms of **processes**: change management, release and deployment management, incident management, service request management, problem management and so on. These names and boundaries are very close to the ITIL v3/2011 processes, on which earlier editions of the standard were based. Many organizations also built their ITSM systems and documentation during the v3 era. Using v3 names keeps documents, audits and tools aligned with the standard's terminology.

**9.14 (model answer).** Any five, for example: change management → change enablement; request fulfilment → service request management; event management → monitoring and event management; SACM → service configuration management and IT asset management; release and deployment management → release management and deployment management; business relationship management → relationship management; IT service continuity management → service continuity management; financial management for IT services → service financial management.

**9.15 (model answer).** ITIL v3 organized guidance around a **sequential service lifecycle** of five stages, made up of **processes and functions**, with the provider *delivering* value. ITIL 4 replaced this with a flexible **Service Value System** and value chain. Activities can be combined in any order through value streams. **Practices** draw on all **four dimensions**, and value is **co-created** with consumers. ITIL 4 also integrated Agile, Lean and DevOps, and added guiding principles and governance as SVS components.

**9.16 (model answer).** (1) Identify the strategy for improvement. (2) Define what you will measure. (3) Gather the data. (4) Process the data. (5) Analyse the information and data. (6) Present and use the information. (7) Implement the improvement.


## Answers: Chapter 10

| Q | Answer | Explanation |
|---|---|---|
| 10.1 | **B** | Version 5 is a continuation. The core concepts, principles, dimensions, value system and practices carry over, and new material is added. |
| 10.2 | **D** | 40 questions, 60 minutes, 26 to pass, closed book. Option A resembles no ITIL Foundation exam, and the AI Governance extension module has its own, different format. |
| 10.3 | **A** | The value system carries 16 of 40 marks. Key terms carry 12. |
| 10.4 | **C** | Utility, warranty, experience and sustainability. Option D lists the aspects of warranty. |
| 10.5 | **B** | XLAs target experience outcomes, alongside technical SLA targets. |
| 10.6 | **D** | The AI Capability Model is described in the information and technology dimension. |
| 10.7 | **A** | The five components are guiding principles, governance, the value chain, management practices and continual improvement. The four dimensions apply to the value system but are not a component. |
| 10.8 | **C** | Two groups. Option A is the ITIL 4 grouping. |
| 10.9 | **B** | The separate technical group was removed, and its practices sit with the product and service management practices. |
| 10.10 | **A** | Obtaining supplier services through selection and contracting is Acquire. |
| 10.11 | **D** | Running the live product to agreed targets is Operate. |
| 10.12 | **C** | Making the product available and usable for consumers, including onboarding, is Deliver. |
| 10.13 | **A** | The lifecycle is non-linear, applies whether you build or buy, and its activities are combined into value streams. Versions can overlap. |
| 10.14 | **B** | Obtain/build is divided into Acquire (obtaining components, suppliers and people) and Build (creating, configuring and testing). |
| 10.15 | **D** | Payroll serves internal consumers so that the core value streams can work, so it is an enabling value stream. |
| 10.16 | **C** | 3 ÷ 30 = 10%. The item spends 90% of its lead time waiting. |
| 10.17 | **B** | In a complex context, cause and effect are clear only in hindsight, so experimentation and feedback work best. Option C fits a chaotic context. |
| 10.18 | **A** | Generative AI creates content. Agentic AI acts towards goals with some autonomy, which increases the need for governance. |
| 10.19 | **D** | Making information understandable, for example by summarising or explaining, is clarification. |
| 10.20 | **C** | ITIL and DevOps are complementary. ITIL assigns the appropriate change authority to each type of change, including automated authorisation of low-risk changes. |

**10.21 (model answer).** A **product** is what the organization configures from its resources, such as an app, a platform or a device. A **service** is how consumers get value from it, by facilitating their outcomes without them having to manage specific costs and risks. Consumers experience the two as one thing: the features, the reliability, the help they get and how it feels to use. When products and services are managed separately, gaps appear. Features are shipped that support teams cannot support, or uptime is reported while users struggle. Managing both across **one lifecycle**, from Discover to Support, aligns decisions about features, operation, support, experience and sustainability, so that value is co-created consistently.

**10.22 (model answer).** Example: a food-delivery app.

- **Discover:** analyse customer feedback and orders, and find that customers want group ordering.
- **Design:** create a prototype and specifications for group ordering, including performance, accessibility and supportability requirements.
- **Acquire:** decide to buy a payment-splitting service from a partner, and contract a UX designer.
- **Build:** develop and integrate the feature and run automated tests.
- **Transition:** deploy the feature into the live environment with change approval, a rollback plan and a briefing for support teams.
- **Operate:** monitor performance during Friday-evening peaks and apply fixes and capacity changes.
- **Deliver:** release the feature to all customers with in-app onboarding.
- **Support:** help customers who have problems splitting a bill, fix incidents, and feed insights back to Discover and Design.

**10.23 (model answer).** **Flow efficiency = process time ÷ lead time × 100%.** Process time is the time spent actually working on an item. Lead time is the total time from request to delivery. A **low** value, such as 10%, means most of the lead time is **waiting**, in queues, for approvals or between hand-offs, rather than working. Improvements: remove or automate approvals that add little value; reduce hand-offs by combining steps or using cross-functional teams; limit work in progress; keep standard items ready, such as pre-imaged laptops; and offer self-service. Any two are sufficient.

**10.24 (model answer).** **Generative AI** produces content that a person usually reviews before it is used. **Agentic AI** can **take actions** on its own, such as changing configurations, approving requests or calling other systems. Its errors can therefore have direct effects before anyone notices, and accountability can become unclear. Governance must be stronger as autonomy increases. Controls (any three): **policies** defining acceptable AI use and data; **clear human accountability** for outcomes; **decision boundaries** and **human approval** for high-impact actions; **monitoring and logging** of AI actions, with the ability to intervene or stop the agent; **risk assessment** for bias, errors, security and privacy; **transparency**, so that users know they are dealing with AI; and regular **review and improvement** of AI behaviour.


## Answers: Chapter 11

| Q | Answer | Explanation |
|---|---|---|
| 11.1 | **B** | Part 1 contains the SMS requirements. C is Part 6 and D is Part 10. |
| 11.2 | **B** | Part 3. |
| 11.3 | **C** | Part 6, used together with ISO/IEC 17021-1. |
| 11.4 | **C** | Part 10. |
| 11.5 | **C** | ISO/IEC TR 20000-11. ISO/IEC 27013 is about integrating ISO/IEC 27001 with ISO/IEC 20000-1. |
| 11.6 | **C** | No exclusions are allowed in clauses 4–10. Each requirement is met proportionately to the organization's size and complexity. |
| 11.7 | **B** | "The organization". The 2011 edition said "service provider". |
| 11.8 | **C** | Clause 8, Operation. |
| 11.9 | **B** | The ISO definition includes events that have not yet impacted the service. |
| 11.10 | **D** | Users are not "other parties" involved in delivering the service. |
| 11.11 | **B** | Clause 4.1 (determine whether climate change is relevant) and clause 4.2 (interested parties' climate requirements). |
| 11.12 | **B** | Accountability stays with the organization, and outsourcing everything is not allowed. |
| 11.13 | **B** | Documented information. |

**11.14 (model answer).**

- **4 Context of the organization:** determine internal and external issues and interested parties' requirements, and define the SMS scope.
- **5 Leadership:** top management establishes the service management policy and objectives and assigns roles.
- **6 Planning:** address risks and opportunities, set objectives and create the service management plan.
- **7 Support:** provide resources, ensure competence and awareness, control documented information and maintain knowledge.
- **8 Operation:** operate the processes, for example incident management, change management and SLM.
- **9 Performance evaluation:** monitor and measure, carry out internal audits, management reviews and service reporting.
- **10 Improvement:** handle nonconformities and corrective actions, and improve continually.

**11.15 (model answer).** An **internal supplier** is part of the **same larger organization** but **outside the scope of the SMS**, and it contributes to the services under a **documented agreement**. Example: the corporate network department of a group supports the IT services of a subsidiary whose SMS is certified. The control mechanism is a **documented agreement** (ITIL: an OLA) defining service level targets, commitments, activities and interfaces. Performance is monitored at planned intervals (8.3.4.2). An **external supplier** is a separate legal entity controlled through a **contract** (8.3.4.1).

**11.16 (model answer).** Any four of: adoption of the **Annex SL** structure; "**the organization**" instead of "service provider"; **reduced documentation** ("documented information"); new requirements for **knowledge**, **planning the services**, **demand management** and **asset management**; **control of parties** involved in the service lifecycle replacing governance of processes operated by other parties; **separate** incident and service request management; **separate** availability and continuity management; service catalogue management as its own requirement; service reporting moved to clause 9.4; **risk-based** planning replacing preventive action; an explicit focus on **value**.

**11.17 (model answer).** (a) **Internal IT department:** demonstrates control and value to the business and to regulators; creates consistent processes and a common language; improves supplier control and continual improvement through audits and management reviews. (b) **Outsourcing company:** meets tender requirements, since many contracts demand ISO/IEC 20000-1; differentiates it from competitors; gives clients independent assurance and reduces their due-diligence effort; integrates with ISO/IEC 27001 and ISO 9001 certifications.


## Answers: Chapter 12

| Q | Answer | Explanation |
|---|---|---|
| 12.1 | **A** | 4.1 Understanding the organization and its context. |
| 12.2 | **B** | Services in scope plus the name of the organization. |
| 12.3 | **B** | Determining value is explicit in 5.1. The management representative was a 2011 requirement that has been removed. |
| 12.4 | **B** | The policy commits to satisfying applicable requirements and to continual improvement. |
| 12.5 | **B** | These are the three named risk areas in 6.1. |
| 12.6 | **A** | Objectives must be consistent with the policy, measurable, monitored, communicated and updated. |
| 12.7 | **D** | User contact details are not part of the plan. |
| 12.8 | **C** | A RACI matrix is useful but not mandatory. |
| 12.9 | **B** | 7.3 Awareness. |
| 12.10 | **B** | On what, when, with whom, how and who. |
| 12.11 | **A** | Control of changes (version control) is listed in 7.5.3. |
| 12.12 | **B** | 7.6 Knowledge. |
| 12.13 | **A** | Human, technical, information and financial resources. |
| 12.14 | **B** | 7.5.4(d) names the change management policy, the information security policy and the service continuity plan(s). |

**12.15 (model answer).** "The service management system of *MedCloud Services S.A.* for the management and delivery of *service desk and cloud hosting services* to its *hospital customers*, provided from its *Athens head office and Patras data centre*." A good answer names the **organization**, the **services**, the **customers** and the **locations**.

**12.16 (model answer).** (a) SMS scope; (b) service management policy and objectives; (c) service management plan; (d) change management policy, information security policy and service continuity plan(s); (e) SMS processes; (f) service requirements; (g) service catalogue(s); (h) SLAs; (i) contracts with external suppliers; (j) agreements with internal suppliers and customers acting as a supplier; (k) procedures required by the standard; (l) records needed to demonstrate conformity.

**12.17 (model answer).** Any four of: (1) the competence **required** for each relevant role has been **determined**, for example in role profiles or a skills matrix; (2) people **are competent** based on education, training or experience; (3) **actions** have been taken to close gaps, such as training, mentoring or hiring; (4) the **effectiveness** of those actions has been **evaluated**, for example through tests or performance reviews; (5) **documented evidence** is retained, such as certificates and training records.

**12.18 (model answer).** The **service management policy** is a short, top-management statement of **intent and commitment**. It is appropriate to the organization's purpose, provides a framework for objectives, commits to satisfying requirements and to continual improvement, and is communicated and available to interested parties. The **service management plan** is the **operational blueprint** for running the SMS. It contains or references the list of services, known limitations, obligations, authorities and responsibilities, resources, the approach to other parties, supporting technology, and how effectiveness will be measured, audited, reported and improved. The policy says *what we commit to and why*. The plan says *how we will do it*.


## Answers: Chapter 13

| Q | Answer | Explanation |
|---|---|---|
| 13.1 | **B** | These are the categories routed to 8.5.2. All other changes follow 8.5.1.3. |
| 13.2 | **B** | Identification, type, description, relationships and status (I-T-D-R-S). |
| 13.3 | **B** | Complaints are part of business relationship management. |
| 13.4 | **B** | Services, targets, workload characteristics and exceptions. |
| 13.5 | **B** | External suppliers need a contract (8.3.4.1). Internal suppliers and customers acting as suppliers need a documented agreement (8.3.4.2). |
| 13.6 | **B** | Capacity covers human, technical, information and financial resources. |
| 13.7 | **A** | All four are requirements of 8.6.1. |
| 13.8 | **B** | Reduce or eliminate impact, record known errors and share the information. |
| 13.9 | **B** | Use incident management procedures, prioritised by information security risk. |
| 13.10 | **B** | At planned intervals and after major changes. |
| 13.11 | **B** | Verified against documented acceptance criteria and approved. If the criteria are not met, the organization decides on the action to take. |
| 13.12 | **B** | Budgeting and accounting are required. Charging is not. |
| 13.13 | **A** | Determine and analyse demand at planned intervals, and monitor and report consumption. |
| 13.14 | **B** | Top management, or a person with delegated authority. |
| 13.15 | **A** | Criticality, dependencies and duplication. |
| 13.16 | **B** | Selection and evaluation criteria. Accountability is never transferred. |
| 13.17 | **B** | Incidents related to the release after deployment. |

**13.18 (model answer).** (a) **Removal of a legacy service:** recorded and classified as a request for change, then managed through **service design and transition (8.5.2)**. The plan covers removal dates and the archiving, disposal or transfer of data, documented information and components. Deployment of the removal is handled through release and deployment management. (b) **Minor patch:** recorded and classified. It does not meet the major-impact criteria, so it follows the **change management activities (8.5.1.3)**: assessment, approval by the appropriate authority, testing, scheduling, remediation planning, deployment and review. (c) **Pre-approved password reset:** a **pre-approved change** fulfilled as a **service request** (8.6.2). It is recorded, classified, prioritised, fulfilled and closed using documented fulfilment instructions.

**13.19 (model answer).** The criteria and responsibilities for **invoking** continuity; the **procedures** for a major loss of service; **availability targets** while the plan is invoked; the **service requirements**; and the **procedures for restoring normal working conditions**. The plan(s) and contact lists must also be **accessible** when normal locations are unavailable.

**13.20 (model answer).** The organization **retains accountability**. It can demonstrate control by: (1) applying **selection and evaluation criteria** when choosing the supplier; (2) a **documented contract** defining scope, requirements, service level targets such as speed of answer and first-contact resolution, and responsibilities and interfaces (8.3.4.1); (3) **integrating** the supplier's incident and request handling into the SMS, for example through a shared ITSM tool, common categorisation and escalation paths to internal teams; (4) **measuring and evaluating** the supplier's performance at planned intervals through reports and service reviews; (5) a designated **supplier manager**, dispute management and contract reviews; (6) including the outsourced process in **internal audits** and **management review**.

**13.21 (model answer).** Any four of: (1) identifying problems from **incident data and trends**; (2) **root cause analysis**; (3) **workarounds** to reduce impact when no permanent fix exists; (4) **recording known errors**; (5) making known error information available to **incident management**; (6) implementing permanent fixes through **change management or change enablement**; (7) prioritising problems by impact or risk.


## Answers: Chapter 14

| Q | Answer | Explanation |
|---|---|---|
| 14.1 | **B** | 9.2 Internal audit. |
| 14.2 | **B** | Objectivity and impartiality. Auditors must not audit their own work. |
| 14.3 | **C** | Top management. |
| 14.4 | **A** | Customer and interested-party feedback is a required input. |
| 14.5 | **B** | Trends, decisions and actions, communicated to interested parties. |
| 14.6 | **B** | React: control, correct and deal with the consequences. |
| 14.7 | **B** | A correction fixes the symptom. A corrective action removes the cause. |
| 14.8 | **B** | Three years, with at least annual surveillance audits. |
| 14.9 | **B** | Documentation and readiness. Stage 2 evaluates implementation and effectiveness. |
| 14.10 | **B** | The total absence of a required element is a major nonconformity. A and D are minor. C is an OFI. |
| 14.11 | **B** | National accreditation bodies. ISO does not certify or accredit. |
| 14.12 | **B** | A customer auditing its supplier is a second-party audit. |
| 14.13 | **B** | ISO 19011. |
| 14.14 | **B** | Evaluation criteria for improvement opportunities. |

**14.15 (model answer).** Any six of: status of actions from previous reviews; changes in external and internal issues; SMS performance and effectiveness, including trends in nonconformities and corrective actions, monitoring and measurement results, and audit results; opportunities for continual improvement; customer and interested-party feedback; adequacy of resources; performance of the services; effectiveness of actions taken to address risks and opportunities; changes in interested parties' needs and in service requirements.

**14.16 (model answer).** (1) **Prepare:** implement the SMS, operate it to generate records, and complete at least one internal audit and one management review. (2) Optional **pre-assessment**. (3) **Stage 1:** review documentation, scope and readiness, and plan Stage 2. (4) **Stage 2:** evaluate implementation and effectiveness through interviews, observation, sampling and audit trails. (5) **Address findings:** majors are corrected and verified, and corrective action plans for minors are accepted. (6) **Certification decision** by independent CB staff. (7) **Certificate** valid for three years. (8) **Surveillance audits** at least annually in years one and two. (9) **Recertification audit** before expiry, starting a new cycle.

**14.17 (model answer).** **Classification:** the continuity plan exists but the required testing has broken down over two years, so the SMS is not demonstrating continuity capability. Most certification bodies would treat this as a **major** nonconformity against 8.7.2. If it were an isolated slip, such as a test a few weeks late, it could be minor. **Correction:** schedule and perform the continuity test immediately, record the results, review them and fix any deficiencies. **Root cause analysis:** for example, use 5 whys. The test had no named owner. It was not on any compliance calendar. Staff turnover removed the person who used to remember it. Management review did not monitor overdue SMS activities. **Corrective action:** assign an owner. Put all "planned interval" activities (tests, audits, reviews) on an SMS compliance calendar with automated reminders. Add an "overdue SMS activities" item to the management review inputs. Check whether other periodic activities have the same weakness. Later, **review the effectiveness** of the actions.

**14.18 (model answer).** Select a recent **major incident** from the incident tool. Check its classification, prioritisation, escalation, communication to top management and the **major incident review**. Follow the link to the **problem record**: was root cause analysis done, and was a **known error** recorded and made available to the service desk? Follow the problem to the **change request** for the permanent fix: was a risk assessment done, approved by the right authority, tested, with a remediation plan, and placed on the schedule? Follow the change to the **release record**: was it verified against acceptance criteria, and were post-release incidents monitored? Finally, check that the **configuration information** for the affected CIs was updated. Each link shows whether the processes are integrated or work in silos.


## Answers: Chapter 15

| Q | Answer | Explanation |
|---|---|---|
| 15.1 | **B** | A describes a KPI. |
| 15.2 | **A** | A KPI is a metric that evaluates success against an objective or CSF. |
| 15.3 | **B** | (720 − 6) ÷ 720 = 0.99167, or 99.17%. |
| 15.4 | **B** | 720 h × 0.001 = 0.72 h = 43.2 minutes. |
| 15.5 | **C** | 0.99 × 0.99 = 0.9801, or 98.01%. |
| 15.6 | **C** | 1 − (0.05 × 0.05) = 1 − 0.0025 = 0.9975, or 99.75%. |
| 15.7 | **B** | MTRS measures maintainability. MTBF measures reliability (A). |
| 15.8 | **B** | ITIL helps, but conformity must be demonstrated against each requirement. |
| 15.9 | **C** | Internal audit of the SMS is a management system requirement, not a dedicated ITIL practice. |
| 15.10 | **A** | Goodhart's law. Balance speed metrics with quality and outcome metrics. |
| 15.11 | **B** | It predicts future change success. The others measure results after the fact (lagging). |
| 15.12 | **A** | ISO/IEC 27013. |

**15.13 (model answer).**

- **Availability** = (200 − 10) ÷ 200 × 100 = **95%**
- **MTBF** = uptime ÷ failures = 190 ÷ 4 = **47.5 hours**
- **MTRS** = downtime ÷ failures = 10 ÷ 4 = **2.5 hours**
- **MTBSI** = AST ÷ failures = 200 ÷ 4 = **50 hours**. Check: 47.5 + 2.5 = 50 ✓

**15.14 (model answer).** **CSF 1: "Restore service quickly and minimise business impact."** KPIs: % of incidents resolved within target by priority; mean time to restore service (MTRS); number of SLA breaches due to incidents. **CSF 2: "Maintain user satisfaction and confidence in support."** KPIs: post-incident user satisfaction score; reopen rate; % of incidents resolved at first contact. Other sensible CSF and KPI pairs are acceptable.

**15.15 (model answer).** Any three of: (1) a documented **scope**, **service management policy**, **objectives** and **service management plan**; (2) **control of documented information** and the mandatory 7.5.4 documents and records; (3) a documented **risk approach with acceptance criteria**, including risks of other parties; (4) **internal audits** against the standard with impartial auditors; (5) **management reviews by top management** with the defined inputs; (6) formal **nonconformity and corrective action** records; (7) evidence that activities required **"at planned intervals"** actually took place, such as SLA reviews, supplier reviews, continuity tests, configuration verification and satisfaction surveys; (8) demonstrable **control of other parties**.

**15.16 (model answer).** Sections: executive summary; SLA performance against targets with 12-month **trends**; major incidents and problem status; changes and releases, including the upcoming schedule; workload against the SLA workload characteristics; customer satisfaction and complaints; risks, issues and supplier performance; improvement actions; agreed decisions and actions, with owners and dates. It satisfies 9.4 because the report requirements and purpose are defined with the customer, performance and effectiveness are reported using SMS and delivery data, **trends** are included, and **decisions and actions** based on the findings are recorded and **communicated** to interested parties.


# Appendix B: Glossary

*Tags show where a term is mainly used: **[ITIL 4]**, **[ITIL v3]**, **[ITIL 5]**, **[ISO]** (ISO/IEC 20000-1) or **[General]**. ISO definitions are paraphrased. Use this glossary to make flashcards: put the term on the front and the definition on the back.*

| Term | Definition |
|---|---|
| **Access to resources** [ITIL 4] | A component of a service offering: the consumer is granted access to the provider's resources under agreed terms, without ownership being transferred |
| **Accreditation body** [ISO] | A national body (such as UKAS, ANAB or DAkkS) that accredits certification bodies as competent and impartial |
| **Agentic AI** [ITIL 5] | AI systems that can plan and take actions towards goals, for example by calling tools or running workflow steps, with a degree of autonomy and limited human intervention |
| **AI Capability Model** [ITIL 5] | The ITIL (Version 5) model of six AI capabilities (creation, curation, clarification, cognition, communication and coordination), described in the information and technology dimension (Chapter 10) |
| **AI governance** [ITIL 5] | Applying evaluate, direct and monitor to the use of AI: policies, accountability, human oversight and decision boundaries, risk management, transparency and monitoring |
| **Annex SL / high-level structure (HLS)** [ISO] | The common clause structure (4 Context to 10 Improvement), core text and terms shared by ISO management system standards. It is now also called the "harmonized structure" |
| **Asset** [ISO] | An item, thing or entity that has potential or actual value to an organization |
| **Audit programme** [ISO] | The planned set of audits over a period, defining frequency, methods, responsibilities, planning requirements and reporting |
| **Availability** [ITIL 4 / ISO] | The ability of a service or component to perform its agreed function when required |
| **Availability management** [ITIL 4] | The practice that ensures services deliver agreed levels of availability to meet the needs of customers and users |
| **Baseline** [General] | An agreed, reviewed snapshot used as a reference point: for measurement, in "where are we now?", or for configuration, as a known-good configuration |
| **Big bang deployment** [ITIL 4] | Deploying new or changed components to all targets at the same time |
| **Business impact analysis (BIA)** [General] | The analysis that identifies vital business functions and dependencies and the impact of their loss over time. It sets RTOs and RPOs |
| **Business relationship management** [ISO / ITIL v3] | Managing relationships with customers, including satisfaction, service reviews and complaints (ISO 8.3.2) |
| **Capacity** [General] | The maximum throughput that a CI or service can deliver. In ISO it covers human, technical, information and financial resources |
| **Capacity and performance management** [ITIL 4] | The practice that ensures services achieve agreed and expected performance, satisfying current and future demand cost-effectively |
| **Change** [ITIL 4 / ISO] | The addition, modification or removal of anything that could have a direct or indirect effect on services |
| **Change Advisory Board (CAB)** [ITIL v3] | A group that advises on the assessment, prioritisation and scheduling of changes. It is not mandatory in ITIL 4 |
| **Change authority** [ITIL 4] | A person or group responsible for authorising a change |
| **Change enablement (change control)** [ITIL 4] | The practice that maximises the number of successful service and product changes by assessing risk, authorising changes and managing the change schedule |
| **Change schedule** [ITIL 4] | A calendar used to plan changes, assist communication, avoid conflicts and assign resources. It also supports incident, problem and improvement work |
| **Complete and accurate (%C&A)** [General] | A value stream metric: how often a step's output can be used by the next step without correction or rework |
| **Complexity contexts** [ITIL 5] | Ordered, complex, chaotic and confused: how predictable a value stream's work is. Each needs a different approach (procedures, experiments, stabilising action, or first establishing the context) |
| **Configuration item (CI)** [ITIL 4 / ISO] | Any component that needs to be managed (ISO: controlled) in order to deliver an IT service |
| **Configuration management database (CMDB)** [ITIL] | A database used to store configuration records throughout their lifecycle |
| **Configuration management system (CMS)** [ITIL] | The set of tools, data and information that supports service configuration management |
| **Continual improvement** [ITIL 4 / ISO] | A recurring activity at all levels to improve products, services, practices and the SMS. It is an SVS component, a value chain activity and a practice |
| **Continual improvement register (CIR)** [ITIL 4] | A database or structured document used to track and manage improvement ideas from identification to final action |
| **Continuous delivery** [ITIL 4] | A deployment approach in which components are integrated, tested and deployed when needed, giving frequent feedback opportunities |
| **Core value stream** [ITIL 5] | A value stream that delivers products and services directly to external consumers |
| **Correction** [ISO] | Action to fix an identified nonconformity in the immediate term |
| **Corrective action** [ISO] | Action to eliminate the cause of a nonconformity and prevent it from recurring |
| **Cost** [ITIL 4] | The amount of money spent on a specific activity or resource |
| **Critical success factor (CSF)** [General] | A condition that must be met for an objective to be achieved |
| **Customer** [ITIL 4] | A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption. **[ISO]**: an organization, or part of one, that receives a service |
| **Customer experience (CX)** [ITIL 4] | The sum of functional and emotional interactions with a service and service provider as perceived by a service consumer |
| **Demand** [ITIL 4] | An input to the SVS: the need or desire for products and services among internal and external consumers |
| **Demand management** [ISO 8.4.2] | Determining and analysing current and forecast demand, and monitoring and reporting demand and consumption |
| **Deming cycle (PDCA)** [General] | Plan-Do-Check-Act: a four-stage cycle for continual improvement |
| **Deployment management** [ITIL 4] | The technical practice that moves new or changed hardware, software, documentation, processes or other components to live (and other) environments |
| **Digital product and service management** [ITIL 5] | The scope of ITIL (Version 5): managing digital products and services together across one lifecycle, from discovery to support |
| **Disaster** [General] | A sudden, unplanned event that causes great damage or serious loss to an organization |
| **Documented information** [ISO] | Information that must be controlled and maintained, together with its medium. It replaces "documents and records" |
| **Emergency change** [ITIL 4] | A change that must be implemented as soon as possible, through an expedited assessment and authorisation process |
| **Employee experience (EX)** [ITIL 5] | How employees experience their tools, services and work environment |
| **Enabling value stream** [ITIL 5] | A value stream that serves internal consumers so that core value streams can work, for example hiring or onboarding staff |
| **Error control** [ITIL 4] | The problem management phase that manages known errors, identifies permanent solutions (possibly raising change requests) and re-assesses known errors |
| **Event** [ITIL 4] | Any change of state that has significance for the management of a service or other CI. Types are informational, warning and exception |
| **Experience level agreement (XLA)** [General] | An agreement that sets targets for the experience and outcomes people perceive, used alongside technical SLA targets |
| **External supplier** [ISO] | Another party outside the organization that contributes to services under a contract |
| **Flow efficiency** [General] | Process time ÷ lead time × 100%: the share of the lead time spent actually working on an item |
| **Four dimensions** [ITIL 4] | Organizations and people; information and technology; partners and suppliers; value streams and processes. In ITIL 5 they are the four dimensions "of product and service management" |
| **Function** [ITIL v3] | A team or group of people and the tools they use to carry out processes or activities, for example the service desk |
| **Generative AI** [ITIL 5] | AI that creates new content, such as text, images, code or summaries, based on patterns learned from data |
| **Goods** [ITIL 4] | A component of a service offering: physical items whose ownership is transferred to the consumer |
| **Governance** [ITIL 4] | The means by which an organization is directed and controlled: evaluate, direct, monitor |
| **Governing body** [ITIL 4] | A person or group accountable at the highest level for the performance and compliance of the organization |
| **Guiding principle** [ITIL 4] | A recommendation that guides an organization in all circumstances, regardless of changes in its goals, strategies, type of work or management structure |
| **Impact** [General] | The effect of an incident or change on the business, such as users, services, money or reputation. It is used with urgency to set priority |
| **Incident** [ITIL 4] | An unplanned interruption to a service or a reduction in the quality of a service. **[ISO]** adds: or an event that has not yet impacted the service |
| **Incident management** [ITIL 4] | The practice that minimises the negative impact of incidents by restoring normal service operation as quickly as possible |
| **Information security** [ISO] | The preservation of the confidentiality, integrity and availability of information |
| **Information security management** [ITIL 4] | The practice that protects the information needed by the organization to conduct its business |
| **Interested party** [ISO] | A person or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity (a stakeholder) |
| **Internal audit** [ISO 9.2] | An audit conducted by or for the organization, at planned intervals, to check conformity and effective implementation of the SMS |
| **Internal supplier** [ISO] | Part of a larger organization, outside the SMS scope, that contributes to services under a documented agreement |
| **IT asset** [ITIL 4] | Any financially valuable component that can contribute to the delivery of an IT product or service |
| **IT asset management** [ITIL 4] | The practice that plans and manages the full lifecycle of all IT assets |
| **ITIL Value System** [ITIL 5] | The ITIL (Version 5) name for what ITIL 4 called the Service Value System |
| **Key performance indicator (KPI)** [General] | A metric used to evaluate success in meeting an objective or CSF |
| **Knowledge management** [ITIL 4] | The practice that maintains and improves the effective, efficient and convenient use of information and knowledge across the organization |
| **Known error** [ITIL 4] | A problem that has been analysed and has not been resolved. **[ISO]**: a problem with an identified root cause or a method of reducing or eliminating its impact |
| **Lead time** [General] | The total elapsed time from a consumer's request until value is delivered, including waiting |
| **Major / minor nonconformity** [Audit] | Major: absence or breakdown of a requirement, or significant doubt about the SMS achieving its outcomes. Minor: an isolated lapse |
| **Major incident** [General] | An incident with significant business impact that needs an immediate, coordinated response and its own procedure |
| **Management practice** [ITIL 5] | The Version 5 term for a practice: a set of organizational resources designed for performing work or accomplishing an objective. There are 34, in two groups: general management (12) and product and service management (22) |
| **Management review** [ISO 9.3] | A review by top management, at planned intervals, of the continuing suitability, adequacy and effectiveness of the SMS and services |
| **Monitoring and event management** [ITIL 4] | The practice that systematically observes services and components, and records and reports selected changes of state identified as events |
| **MTBF** [General] | Mean time between failures: uptime ÷ number of failures. It measures reliability |
| **MTBSI** [General] | Mean time between service incidents: agreed service time ÷ number of failures, which equals MTBF + MTRS |
| **MTRS** [General] | Mean time to restore service: downtime ÷ number of failures. It measures maintainability |
| **Nonconformity** [ISO] | Non-fulfilment of a requirement |
| **Normal change** [ITIL 4] | A change that must be scheduled, assessed and authorised following a process, with change models defining the authority |
| **Operational level agreement (OLA)** [ITIL] | An agreement between a service provider and another part of the same organization. In ISO terms this is an agreement with an internal supplier |
| **Opportunity** [ITIL 4] | An input to the SVS: options or possibilities to add value for stakeholders or otherwise improve the organization |
| **Organization** [ITIL 4] | A person or a group of people that has its own functions with responsibilities, authorities and relationships to achieve its objectives. **[ISO]**: the entity operating the SMS |
| **Outcome** [ITIL 4] | A result for a stakeholder enabled by one or more outputs |
| **Output** [ITIL 4] | A tangible or intangible deliverable of an activity |
| **PESTLE** [General] | Political, Economic, Social, Technological, Legal and Environmental external factors |
| **Phased deployment** [ITIL 4] | Deploying to only part of the production environment at a time |
| **Planned intervals** [ISO] | Frequencies determined by the organization for periodic activities, which must then be followed and evidenced |
| **Practice** [ITIL 4] | A set of organizational resources designed for performing work or accomplishing an objective. ITIL 4 has 34 practices |
| **Priority** [General] | The relative importance of an incident, problem or change, usually based on impact and urgency |
| **Problem** [ITIL 4] | A cause, or potential cause, of one or more incidents |
| **Problem control** [ITIL 4] | The problem management phase covering problem analysis and documenting workarounds and known errors |
| **Problem identification** [ITIL 4] | The problem management phase that finds problems through trend analysis, recurring issues, major incidents and information from suppliers and developers |
| **Problem management** [ITIL 4] | The practice that reduces the likelihood and impact of incidents by identifying their actual and potential causes and managing workarounds and known errors |
| **Process** [ITIL 4] | A set of interrelated or interacting activities that transform inputs into outputs |
| **Process time** [General] | The time when work is actually being done on an item (also called touch time) |
| **Product** [ITIL 4] | A configuration of an organization's resources designed to offer value for a consumer |
| **Product and Service Lifecycle Model (PSLM)** [ITIL 5] | The eight interconnected, non-linear activities of the ITIL (Version 5) lifecycle: Discover, Design, Acquire, Build, Transition, Operate, Deliver and Support (Chapter 10) |
| **Pull deployment** [ITIL 4] | Making software available in a controlled repository for users to download when they choose |
| **RACI** [General] | Responsible, Accountable, Consulted, Informed: a responsibility matrix with exactly one "A" per activity |
| **Recovery point objective (RPO)** [General] | The maximum acceptable data loss, expressed as time |
| **Recovery time objective (RTO)** [General] | The maximum acceptable time before a service is restored after a disruption |
| **Relationship management** [ITIL 4] | The practice that establishes and nurtures the links between the organization and its stakeholders at strategic and tactical levels |
| **Release** [ITIL 4] | A version of a service or other CI, or a collection of CIs, that is made available for use. **[ISO]**: changed services or components deployed into the live environment |
| **Release management** [ITIL 4] | The practice that makes new and changed services and features available for use |
| **Risk** [ITIL 4] | A possible event that could cause harm or loss, or make it more difficult to achieve objectives. It can also be defined as uncertainty of outcome |
| **Risk acceptance criteria** [ISO] | Criteria that define which risks can be accepted without further treatment |
| **Service** [ITIL 4] | A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks |
| **Service action** [ITIL 4] | A component of a service offering: an activity the provider performs to address a consumer need |
| **Service catalogue** [ITIL / ISO] | Structured, documented information about the services, and service offerings, available to customers |
| **Service component** [ISO] | A part of a service that, combined with other elements, delivers the complete service |
| **Service consumption** [ITIL 4] | Activities performed by an organization to consume services |
| **Service continuity** [ISO] | The capability to deliver a service without interruption, or with consistent availability as agreed |
| **Service desk** [ITIL 4] | The practice that captures demand for incident resolution and service requests, and is the entry point and single point of contact for all users |
| **Service level agreement (SLA)** [ITIL 4] | A documented agreement between a service provider and a customer that identifies both the services required and the expected level of service |
| **Service level management** [ITIL 4] | The practice that sets clear business-based targets for service levels and ensures delivery is assessed, monitored and managed against them |
| **Service level target** [ISO] | A specific, measurable characteristic of a service that the organization commits to |
| **Service management** [ITIL 4] | A set of specialised organizational capabilities for enabling value for customers in the form of services |
| **Service management plan** [ISO 6.3] | The documented plan that contains or references the services, limitations, obligations, authorities, resources, the approach to other parties, technology and measurement for the SMS |
| **Service management policy** [ISO 5.2] | Top management's documented statement of commitment and direction for service management |
| **Service management system (SMS)** [ISO] | The management system that directs and controls the organization's service management activities |
| **Service offering** [ITIL 4] | A formal description of one or more services, designed for a target consumer group. It may include goods, access to resources and service actions |
| **Service portfolio** [ITIL] | The complete set of services: pipeline, catalogue and retired services |
| **Service provision** [ITIL 4] | Activities performed by an organization to provide services |
| **Service relationship** [ITIL 4] | A cooperation between a service provider and a service consumer, including service provision, service consumption and service relationship management |
| **Service relationship management** [ITIL 4] | Joint activities of the provider and consumer to ensure continual value co-creation based on agreed and available service offerings |
| **Service request** [ITIL 4] | A request from a user or their authorised representative that initiates a service action agreed as a normal part of service delivery. **[ISO]** includes pre-approved changes |
| **Service request management** [ITIL 4] | The practice that supports agreed service quality by handling pre-defined, user-initiated service requests effectively and in a user-friendly way |
| **Service value chain** [ITIL 4] | The operating model of six activities: plan, improve, engage, design and transition, obtain/build, deliver and support |
| **Service Value System (SVS)** [ITIL 4] | How all components and activities of the organization work together to enable value creation. Its components are guiding principles, governance, the service value chain, practices and continual improvement |
| **SIAM** [General] | Service integration and management: an approach to managing multiple suppliers as one integrated ecosystem |
| **Sponsor** [ITIL 4] | A person who authorises budget for service consumption |
| **Standard change** [ITIL 4] | A low-risk, pre-authorised change that is well understood and fully documented |
| **Sustainability** [ITIL 5] | The environmental, social and economic impact of products and services, considered throughout the lifecycle |
| **Swarming** [ITIL 4] | A technique in which many stakeholders work together on an issue initially, until it is clear who is best placed to continue |
| **Top management** [ISO] | The person or group who directs and controls the organization at the highest level |
| **Transition** [ISO] | The activities involved in moving a new or changed service to or from the live environment |
| **Underpinning contract** [ITIL v3] | A contract with an external supplier that supports the provider's delivery of services |
| **Urgency** [General] | How quickly a resolution is needed by the business |
| **User** [ITIL 4] | A person who uses services |
| **User experience (UX)** [ITIL 5] | The sum of the functional and emotional interactions a user has with a product or service and its provider |
| **Utility** [ITIL 4] | The functionality offered by a product or service to meet a particular need: "fit for purpose" |
| **Value** [ITIL 4] | The perceived benefits, usefulness and importance of something |
| **Value stream** [ITIL 4] | A series of steps an organization undertakes to create and deliver products and services to consumers |
| **Value stream management** [ITIL 5] | Continually measuring and improving the flow of value through a value stream, with clear ownership and visible flow metrics |
| **Value stream mapping** [General] | A Lean technique that visualises the steps, hand-offs, waiting and working times of a value stream to reveal waste and bottlenecks |
| **Warranty** [ITIL 4] | Assurance that a product or service will meet agreed requirements: "fit for use" |
| **Watermelon effect** [General] | SLA metrics are green while the customer experience is red |
| **Workaround** [ITIL 4] | A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available |
| **Workload characteristics** [ISO 8.3.3] | The volumes and patterns of demand that the SLA targets assume, for example the number of users or transactions |

---


# Appendix C: Quick Reference Sheets

*Use these sheets for your final revision on Day 7 and on the morning of any exam.*

---

## C.1 ITIL 4 on One Page

**Key definitions**

| Term | Definition (key words) |
|---|---|
| Value | Perceived **benefits, usefulness, importance** |
| Service | Enabling **value co-creation** by facilitating **outcomes**, without the customer having to **manage** specific **costs and risks** |
| Product | **Configuration of resources** designed to offer value |
| Service offering | **Formal description** of services for a target group: **goods** + **access to resources** + **service actions** |
| Customer / user / sponsor | **Defines requirements and owns outcomes** / **uses** / **authorises budget** |
| Output / outcome | **Deliverable** of an activity / **result for a stakeholder** |
| Utility / warranty | **Fit for purpose**: what it does / **fit for use**: availability, capacity, security, continuity |
| Service relationship | **Provision** + **consumption** + **service relationship management** |

**The four dimensions:** Organizations and people · Information and technology · Partners and suppliers · Value streams and processes. They are influenced by **PESTLE**.

**SVS:** *Opportunity and demand* → [guiding principles · governance · service value chain · practices · continual improvement] → *value*

**The seven guiding principles and their key phrases**

| Principle | Remember |
|---|---|
| Focus on value | Know the consumer; CX and UX; value in every step |
| Start where you are | Observe directly; measure carefully; reuse; sometimes nothing can be reused |
| Progress iteratively with feedback | Comprehend the whole but do something; fast ≠ incomplete; feedback loops |
| Collaborate and promote visibility | Collaboration ≠ consensus; communicate so the audience can hear; decisions need visible data |
| Think and work holistically | Recognise complexity; collaboration is key; look for patterns; automation helps |
| Keep it simple and practical | Eliminate what adds no value; do fewer things better; respect people's time; quick wins |
| Optimize and automate | **Optimise before automating**; define metrics; use the other principles |

**Governance:** **Evaluate → Direct → Monitor**

**Service value chain: purpose keywords**

| Activity | Keywords |
|---|---|
| Plan | **Shared understanding** of vision, current status and improvement direction |
| Improve | **Continual improvement** of products, services and practices |
| Engage | **Understanding of stakeholder needs**, transparency, good relationships |
| Design and transition | **Quality, costs, time to market** |
| Obtain/build | Components available **when and where needed** |
| Deliver and support | Delivered and supported **according to agreed specifications** |

**The continual improvement model:** Vision? → Where are we now? → Where do we want to be? → How do we get there? → Take action → Did we get there? → How do we keep the momentum going?

**The 15 Foundation practices: purpose keywords** (★ = detail)

| Practice | Purpose keywords |
|---|---|
| ★ Continual improvement | **Align** practices and services with **changing business needs** |
| Information security management | **Protect the information** needed to conduct business |
| Relationship management | **Establish and nurture links** with stakeholders at **strategic and tactical** levels |
| Supplier management | Suppliers and their **performances managed** for **seamless** quality |
| IT asset management | **Full lifecycle** of IT assets: value, cost, risk, decisions, compliance |
| Monitoring and event management | **Systematically observe**, record and report **changes of state** (events) |
| Release management | Make new and changed services and features **available for use** |
| Service configuration management | **Accurate and reliable** configuration information **when and where needed** |
| Deployment management | **Move** components **to live** (and other) environments |
| ★ Change enablement | **Maximise successful changes**: assess risk, authorise, manage the schedule |
| ★ Incident management | **Minimise negative impact**, **restore** normal service **ASAP** |
| ★ Problem management | **Reduce likelihood and impact** by identifying causes; manage **workarounds and known errors** |
| ★ Service request management | Handle **pre-defined, user-initiated** requests **effectively and user-friendly** |
| ★ Service desk | **Capture demand** for incidents and requests; **single point of contact** |
| ★ Service level management | **Clear business-based targets**; assess, monitor and manage against them |

**Key lists**

- **Change types:** standard (pre-authorised) · normal (change models; low risk is rapid or automated, major goes to the board) · emergency (expedited; separate authority; documentation can be deferred)
- **Problem phases:** identification → control → error control (a change request only if cost, risk and benefit justify it)
- **Deployment approaches:** phased · continuous delivery · big bang · pull
- **Event types:** informational · warning · exception
- **SLM information sources:** customer engagement · customer feedback · operational metrics · business metrics
- **Good SLAs:** linked to a catalogued **service** · **outcome**-based · genuinely **agreed** · **simply written**
- **Service desk channels:** phone · portal and app · chat and chatbot · email · walk-in · text and social messaging · social media and forums
- **Incident resolvers:** users (self-help) · service desk · support teams · suppliers · swarming · DR plans
- **Supplier strategy factors:** strategic focus · corporate culture · resource scarcity · cost concerns · subject matter expertise · external constraints · demand patterns
- **Service request types:** service delivery action · information · provision of a resource · access · feedback, compliments and complaints
- **The 34 practices:** 14 general · 17 service · 3 technical

---

## C.2 ITIL (Version 5) on One Page

| Topic | Remember |
|---|---|
| **Exam** | 40 questions · 60 minutes · 26 to pass (65%) · closed book · no negative marking |
| **Marks** | Terms 12 · Four dimensions 4 · Lifecycle 4 · Value system 16 · Value streams 2 · AI 1 · Frameworks 1 |
| **Scope** | Digital product and service management; a continuation of ITIL 4 |
| **Quality** | Utility (what it does) · Warranty (will it work when needed) · Experience (how it feels) · Sustainability (wider impact) |
| **Value system** | Opportunity + demand → value. Guiding principles, governance, value chain, management practices, continual improvement |
| **Practices** | 34 management practices in **two** groups: general management (12) and product and service management (22) |
| **Lifecycle** | Discover · Design · Acquire · Build · Transition · Operate · Deliver · Support. Non-linear, combined into value streams |
| **Look-alikes** | Discover = worth doing? · Design = how will it work? · Acquire = obtain · Build = create and test · Transition = move into live · Operate = keep running · Deliver = make available and usable · Support = help and restore |
| **Value streams** | Core (external consumers) vs enabling (internal). Map as-is → analyse → design to-be → improve. Flow efficiency = process time ÷ lead time |
| **Complexity** | Ordered → procedures · Complex → experiments · Chaotic → act to stabilise · Confused → establish the context first |
| **AI** | Generative AI creates; agentic AI acts. 6Cs: creation, curation, clarification, cognition, communication, coordination (information and technology dimension). AI governance: policies, accountability, oversight, monitoring |
| **Frameworks** | Works with DevOps, Agile, Lean, PRINCE2, SRE, COBIT, ISO/IEC 20000 and ISO/IEC 27001: adopt and adapt |

**ITIL v3/2011 quick facts:** 5 stages (Strategy, Design, Transition, Operation, CSI) · 26 processes (5-8-7-5-1) and 4 functions · the four Ps of design (people, processes, products, partners) · the seven Rs of change (raised, reason, return, risks, resources, responsible, relationship) · the seven-step improvement process.

---

## C.3 ISO/IEC 20000-1:2018 Clause Tree

```
4  CONTEXT OF THE ORGANIZATION
   4.1 Organization and its context (+ climate change, Amd 1:2024)
   4.2 Needs & expectations of interested parties (+ climate note)
   4.3 Scope of the SMS (services + organization name)
   4.4 Service management system
5  LEADERSHIP
   5.1 Leadership and commitment (incl. determining VALUE, control of other parties)
   5.2 Policy  (5.2.1 establish · 5.2.2 communicate)
   5.3 Roles, responsibilities and authorities
6  PLANNING
   6.1 Actions to address risks and opportunities
   6.2 Service management objectives and planning to achieve them
   6.3 Plan the service management system (service management plan)
7  SUPPORT OF THE SMS
   7.1 Resources  7.2 Competence  7.3 Awareness  7.4 Communication
   7.5 Documented information (7.5.1 general · 7.5.2 create/update · 7.5.3 control · 7.5.4 SMS documented info)
   7.6 Knowledge
8  OPERATION OF THE SMS
   8.1 Operational planning and control
   8.2 Service portfolio: 8.2.1 delivery · 8.2.2 plan the services · 8.2.3 control of parties ·
       8.2.4 service catalogue mgmt · 8.2.5 asset mgmt · 8.2.6 configuration mgmt
   8.3 Relationship and agreement: 8.3.1 general · 8.3.2 business relationship mgmt ·
       8.3.3 service level mgmt · 8.3.4 supplier mgmt (8.3.4.1 external · 8.3.4.2 internal & customer-as-supplier)
   8.4 Supply and demand: 8.4.1 budgeting & accounting · 8.4.2 demand mgmt · 8.4.3 capacity mgmt
   8.5 Service design, build and transition: 8.5.1 change mgmt (policy · initiation · activities) ·
       8.5.2 service design & transition (plan · design · build & transition) · 8.5.3 release & deployment mgmt
   8.6 Resolution and fulfilment: 8.6.1 incident mgmt · 8.6.2 service request mgmt · 8.6.3 problem mgmt
   8.7 Service assurance: 8.7.1 availability · 8.7.2 continuity · 8.7.3 information security
       (8.7.3.1 policy · 8.7.3.2 controls · 8.7.3.3 incidents)
9  PERFORMANCE EVALUATION
   9.1 Monitoring, measurement, analysis and evaluation
   9.2 Internal audit   9.3 Management review   9.4 Service reporting
10 IMPROVEMENT
   10.1 Nonconformity and corrective action   10.2 Continual improvement
```

---

## C.4 Mandatory SMS Documented Information (7.5.4)

1. Scope of the SMS
2. Policy and objectives for service management
3. Service management plan
4. **Change management policy**, **information security policy** and **service continuity plan(s)**
5. Processes of the SMS
6. Service requirements
7. Service catalogue(s)
8. SLA(s)
9. Contracts with external suppliers
10. Agreements with internal suppliers and customers acting as a supplier
11. Procedures required by the standard, for example the **major incident** procedure
12. Records needed to demonstrate conformity

**Other key items to evidence:** context and interested-party analysis · risk approach, acceptance criteria and register · competence records · configuration information · release type definitions · audit programme and results · management review results · service reports · nonconformity and corrective action records.

---

## C.5 "At Planned Intervals" Checklist

| Clause | Activity performed at planned intervals |
|---|---|
| 8.2.6 | Verify the accuracy of configuration information |
| 8.3.2 | Review service performance trends and outcomes with customers; measure customer satisfaction |
| 8.3.3 | Monitor, review, report and evaluate SLA performance and workload |
| 8.3.4 | Monitor supplier performance; review contracts and agreements |
| 8.4.1 | Monitor and report actual costs against budget; review forecasts |
| 8.4.2 | Determine and analyse current and forecast demand |
| 8.4.3 | Monitor capacity utilisation; analyse capacity and performance data |
| 8.5.1.3 | Analyse change records to detect trends |
| 8.6.3 | Monitor, review and report the effectiveness of problem resolution |
| 8.7.1 | Assess and document risks to availability |
| 8.7.2 | Assess continuity risks; **test continuity plans** (also after major changes) |
| 8.7.3.2 | Assess information security risks |
| 9.2 | Internal audits |
| 9.3 | Management reviews |
| 9.4 | Service reports |

---

## C.6 Formula Sheet

| Measure | Formula |
|---|---|
| Availability % | (AST − downtime) ÷ AST × 100 |
| MTBF (reliability) | Uptime ÷ number of failures |
| MTRS (maintainability) | Downtime ÷ number of failures |
| MTBSI | AST ÷ number of failures = MTBF + MTRS |
| Series availability | A₁ × A₂ × … × Aₙ |
| Parallel availability | 1 − (1 − A₁) × (1 − A₂) × … |
| Downtime allowed (24×7, 30 days) | 99% ≈ 7.2 h · 99.5% ≈ 3.6 h · **99.9% ≈ 43.2 min** · 99.99% ≈ 4.3 min |
| Downtime allowed (24×7, year) | 99% ≈ 87.6 h · **99.9% ≈ 8.76 h** · 99.99% ≈ 52.6 min · 99.999% ≈ 5.3 min |
| Priority | Impact × urgency (matrix) |
| Risk | Likelihood × impact |

---

## C.7 Twenty Classic Exam Traps

1. **The four dimensions are not an SVS component.** The components are principles, governance, value chain, practices and continual improvement.
2. **Value is co-created**, not "delivered". "Delivering value" is the ITIL v3 wording.
3. A service means not having to **manage** costs and risks, not "without ownership". It also does not remove *all* costs and risks.
4. **Utility = fit for purpose** (functionality). **Warranty = fit for use** (availability, capacity, security, continuity).
5. **Sponsor = budget. Customer = requirements and outcomes. User = uses.**
6. **Goods** transfer ownership. **Access to resources** does not.
7. **Optimise before you automate.**
8. **Collaboration does not mean consensus.**
9. **Obtain/build = "when and where needed"**. **Design and transition = "quality, costs and time to market"**.
10. **A known error** is a problem that has been **analysed and not resolved**, not "a problem with a solution".
11. **Problem management does not implement fixes.** It raises change requests in **error control**, when justified.
12. **Standard changes** are risk-assessed **when the procedure is created or modified**, not every time.
13. **Emergency changes** can defer documentation and may have a separate change authority. They are not normally on the change schedule in advance.
14. **A CAB is not mandatory** in ITIL 4. Match the **change authority** to the change type.
15. **The service desk** needs **empathy and business understanding**, not deep technical expertise.
16. **A degraded (slow) service is an incident.** A request for access is a **service request**.
17. **ISO/IEC 20000-1: no exclusions** of requirements in clauses 4–10. Scope is set by services, customers and locations.
18. **Accountability cannot be outsourced**, and other parties cannot provide or operate everything (8.2.3).
19. **Complaints are part of business relationship management** (8.3.2), and **removal or transfer of a service** goes through **service design and transition** (8.5.2).
20. **ISO does not certify.** Accredited certification bodies do. **Management review = top management.** Internal auditors must be **impartial**.

---

*End of the study guide. Good luck with your studies and your exams.*

