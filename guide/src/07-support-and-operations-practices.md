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

