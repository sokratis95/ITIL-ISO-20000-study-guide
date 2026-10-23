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

