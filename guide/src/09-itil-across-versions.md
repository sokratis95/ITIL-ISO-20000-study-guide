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

