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

