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

