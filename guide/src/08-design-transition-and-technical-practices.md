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

