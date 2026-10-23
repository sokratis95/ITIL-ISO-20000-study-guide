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

