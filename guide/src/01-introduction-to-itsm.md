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

