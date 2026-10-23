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

