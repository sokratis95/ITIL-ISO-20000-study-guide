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

