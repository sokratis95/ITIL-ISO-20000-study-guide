# Part II: The ITIL Service Value System

---

# Chapter 4: The Service Value System, Guiding Principles and Governance

**Suggested study time:** 2.5 hours (Day 2)

**Learning objectives.** After this chapter you should be able to:

- describe the purpose, inputs, components and outcome of the ITIL Service Value System (SVS)
- explain the nature, use and interaction of the **seven guiding principles**, and apply each one in a scenario
- describe governance and the **evaluate, direct and monitor** activities
- define a *practice* and outline the three practice groups

> **Exam tip:** the guiding principles are the **largest single topic** in the ITIL Foundation exam. Expect several scenario questions of the form "which guiding principle is being applied?" or "which principle would help here?"

---

## 4.1 The Service Value System (SVS)

**Purpose.** The SVS describes how **all the components and activities of the organization work together as a system to enable value creation**. Its aim is to make sure that the organization continually **co-creates value** with all its stakeholders through the use and management of products and services.

### Inputs and outcome

| Element | Meaning |
|---|---|
| **Opportunity** (input) | Options or possibilities to add value for stakeholders or otherwise improve the organization |
| **Demand** (input) | The need or desire for products and services among internal and external consumers |
| **Value** (outcome) | Value for the organization, its customers and other stakeholders |

> **Remember:** **opportunity and demand** go in, and **value** comes out. Opportunity and demand **trigger** activities within the SVS. An organization does not have to act on every opportunity. Opportunities and demand must be **prioritised** against each other.

### The five components of the SVS

```
                ┌──────────────────────────────────────────────┐
                │         SERVICE VALUE SYSTEM (SVS)           │
                │                                              │
 OPPORTUNITY ──►│  Guiding principles                          │
                │  Governance                                  │
                │  Service value chain ──► Products & services │──► VALUE
                │  Practices                                   │
 DEMAND ───────►│  Continual improvement                       │
                └──────────────────────────────────────────────┘
```

| Component | What it provides |
|---|---|
| **Guiding principles** | Recommendations that guide decisions and actions in all circumstances |
| **Governance** | The means by which the organization is directed and controlled |
| **Service value chain** | An operating model of six interconnected activities that turn demand into value (Chapter 5) |
| **Practices** | Sets of organizational resources designed for performing work or accomplishing an objective (Chapters 6–8) |
| **Continual improvement** | A recurring organizational activity, performed at all levels, that keeps the SVS aligned with changing needs (Chapter 5) |

> **Exam tip:** the **four dimensions are *not* a component of the SVS**. They apply **to** the SVS as a whole and to every component. PESTLE, SLAs and the service desk are also not components.

### Why a "system"? Breaking down silos

Many organizations suffer from **silos**. Teams and departments optimise their own work but do not cooperate. Information is hoarded, hand-offs are slow and nobody owns the end-to-end result. Silos make organizations resistant to change and slow to respond.

The SVS architecture is designed to provide **flexibility** and discourage siloed working:

- value chain activities can be combined in many ways through **value streams**, so the organization can respond to different types of demand
- **practices** are not owned by one department. They contribute across the value chain
- shared **guiding principles** and **governance** give everyone a common direction
- **continual improvement** applies everywhere, not only within individual teams

---

## 4.2 The Guiding Principles: Nature and Use

**Guiding principle:** "A recommendation that guides an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure."

Guiding principles are:

- **universal**: they apply to almost any initiative and to all relationships with stakeholder groups
- **enduring**: they stay valid as the organization changes
- **guidance, not rules**: they support good decisions. They are not a step-by-step method

ITIL 4 has **seven** guiding principles. They are compatible with the principles of Agile, Lean, DevOps and other approaches.

| # | Guiding principle | One-line essence |
|---|---|---|
| 1 | **Focus on value** | Everything should link back to value for stakeholders |
| 2 | **Start where you are** | Do not start from scratch. Reuse what already works |
| 3 | **Progress iteratively with feedback** | Work in small steps and learn as you go |
| 4 | **Collaborate and promote visibility** | Work together across boundaries and make work visible |
| 5 | **Think and work holistically** | Nothing stands alone. Manage the whole |
| 6 | **Keep it simple and practical** | Eliminate what adds no value and use the minimum steps |
| 7 | **Optimize and automate** | Use resources to best effect. Optimise before automating |

> **Remember** the order with the phrase **"Very Smart People Collaborate To Keep Organizations"**: **V**alue, **S**tart, **P**rogress, **C**ollaborate, **T**hink holistically, **K**eep it simple, **O**ptimize.

---

## 4.3 Principle 1: Focus on Value

> *"All activities conducted by the organization should link back, directly or indirectly, to value for itself, its customers, and other stakeholders."*

### Key ideas

- **Know who the service consumer is** in each situation. Who are you creating value for?
- **Understand the consumer's perspective of value.** Why do they use the service? What does it help them do? How does it help them achieve their goals? What role do cost and financial consequences play? What risks are involved?
- **Value changes** over time and in different circumstances, so it must be revisited.
- **Customer experience (CX) and user experience (UX)** are an important part of value. Experience includes both the **objective** (functional) and the **subjective** (emotional) aspects of interacting with the service and the provider.

### Applying the principle

- **Know how service consumers use each service.** Understand their outcomes, costs and risks.
- **Encourage a focus on value among all staff**, not just those who deal directly with customers.
- **Focus on value during normal operational activity**, not only during improvement initiatives.
- **Include a focus on value in every step** of any improvement initiative.

> **In practice:** a service desk measured only on "tickets closed per hour" may close tickets quickly without solving users' problems. Focusing on value changes the question to "did the user get back to productive work?" The measures change too, for example first-contact resolution and user satisfaction.

---

## 4.4 Principle 2: Start Where You Are

> *"Do not start from scratch and build something new without considering what is already available to be leveraged."*

### Key ideas

- There is usually a great deal in current services, processes, people and tools that can be **reused or built on**.
- **Assess the current state** by **observing directly** wherever possible. Reports alone can be misleading.
- **Measurement must be used carefully.** It is important, but data can be incomplete or distorted. The act of measuring can affect behaviour and therefore the results. Combine measurements with direct observation.
- Do not let past failures or political views of a team distort the objective assessment.

### Applying the principle

- **Look at what exists as objectively as possible**, using the **customer or desired outcome** as the starting point.
- **When good practices are found** in existing services or methods that can be **replicated or expanded**, do so.
- **Apply your risk management skills** when deciding what to keep and what to change.
- **Recognise that sometimes nothing from the current state can be reused.** Starting fresh is acceptable when it is justified.

> **In practice:** before introducing a new change enablement practice, the team discovers that the network team already runs an effective peer-review process. Instead of imposing a new process, they **extend** the network team's approach to other teams.

---

## 4.5 Principle 3: Progress Iteratively with Feedback

> *"Resist the temptation to do everything at once."*

### Key ideas

- Organise work into **smaller, manageable sections** that can be executed and completed in a timely manner. Even large initiatives should be accomplished **iteratively**.
- Each iteration delivers something of value. Its results are then **re-evaluated** and the next steps adjusted.
- **Feedback** is essential. Seeking and using feedback **before, throughout and after each iteration** keeps actions focused and appropriate, even when circumstances change.
- A **feedback loop** is a situation in which part of the output of an activity is used as new input.
- Iterations can be **time-boxed**, meaning they have fixed durations.

### Applying the principle

- **Comprehend the whole, but do something.** Do not wait for perfect analysis before acting. Avoid analysis paralysis.
- **The ecosystem is constantly changing, so feedback is essential.**
- **Fast does not mean incomplete.** An iteration should deliver a usable result, such as a **minimum viable product (MVP)**, rather than a fragment that is not useful.

> **In practice:** instead of a two-year programme to build a complete service catalogue, the team publishes the ten most-requested services in the first month. It then gathers user feedback and adds services in monthly iterations.

---

## 4.6 Principle 4: Collaborate and Promote Visibility

> *"Working together across boundaries produces results that have greater buy-in, more relevance to objectives, and increased likelihood of long-term success."*

### Key ideas

- **Cooperation and collaboration** are better than silos.
- **Collaborate with the right people in the right roles.** Stakeholders include customers, users, sponsors, developers, operations, suppliers, partners, regulators and anyone else who is affected or can contribute.
- **Communicate to improve understanding and engagement.** Different stakeholders need different messages and levels of detail.
- **Increase urgency through visibility.** When work and its consequences are hidden, people make poor decisions and resist change. Making work visible shows what work is being done, how work flows, where bottlenecks and excess capacity exist, and where waste occurs.
- **Visualisation tools**, such as Kanban boards, dashboards and value stream maps, support visibility.

### Applying the principle

- **Collaboration does not mean consensus.** It is not necessary, or always wise, to get everyone's agreement before proceeding. Someone must still make decisions.
- **Communicate in a way the audience can hear.** Choose the right method and message for each audience.
- **Decisions can only be made on visible data.** Make information visible before making decisions.

> **In practice:** the problem manager invites service desk agents to root cause workshops. The agents' first-hand knowledge of user symptoms shortens the analysis, and their involvement increases their willingness to use the resulting workarounds.

---

## 4.7 Principle 5: Think and Work Holistically

> *"No service, or element used to provide a service, stands alone. The outcomes achieved by the organization and its customers will suffer unless the organization works on the service as a whole, not just on its parts."*

### Key ideas

- Results are delivered through the effective and efficient management and **dynamic integration** of information, technology, organization, people, practices, partners and agreements, all **coordinated** to provide value.
- Changing one element can have unexpected effects elsewhere. Consider the **end-to-end** service and the **four dimensions**.

### Applying the principle

- **Recognise the complexity of the systems.** Different levels of complexity require different approaches. Simple systems can follow fixed rules. Complex systems need experimentation and adaptation.
- **Collaboration is key** to thinking and working holistically.
- **Where possible, look for patterns** in the needs of, and interactions between, system elements.
- **Automation can facilitate working holistically**, for example end-to-end visibility through integrated tools, provided enough resources are available.

> **In practice:** a team speeds up software releases dramatically, but the service desk was never told about the new features and is overwhelmed with "how do I...?" calls. Thinking holistically means including service desk training, knowledge articles and user communication in the release.

---

## 4.8 Principle 6: Keep It Simple and Practical

> *"If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it."*

### Key ideas

- Use the **minimum number of steps** needed to accomplish an objective.
- Use **outcome-based thinking** to produce practical solutions that deliver valuable outcomes.
- **Do not try to design for every exception.** Trying to cover every special case leads to over-complication. Design **rules that handle exceptions generally**.
- **Conflicting objectives** must be balanced. For example, managers may want detailed data for decisions while staff want less form-filling. Agree priorities and find the simplest workable balance.

### Applying the principle

- **Ensure value:** every activity should contribute to value creation.
- **Simplicity is the ultimate sophistication.** Simple solutions are often harder to design but work better.
- **Do fewer things, but do them better.**
- **Respect the time of the people involved.** A process with excessive bureaucracy wastes their time.
- **Easier to understand, more likely to adopt.**
- **Simplicity is the best route to achieving quick wins**, which build momentum and stakeholder support.

> **In practice:** a change request form has 45 fields, and most are never read. Applying this principle reduces it to 12 fields that the change authority actually uses for risk assessment. Compliance improves and lead time drops.

---

## 4.9 Principle 7: Optimize and Automate

> *"Resources of all types, particularly human resources, should be used to their best effect. Eliminate anything that is truly wasteful and use technology to achieve whatever it is capable of. Human intervention should only happen where it really contributes value."*

### Optimisation

**Optimisation** means making something **as effective and useful as it needs to be**. It is not about perfection. The recommended path is:

1. **Understand and agree the context** in which the proposed optimisation exists, including the overall vision and objectives.
2. **Assess the current state** to understand where it can be improved.
3. **Agree what the future state and priorities should be**, focusing on simplification and value.
4. **Ensure the optimisation has the appropriate level of stakeholder engagement and commitment.**
5. **Execute the improvements in an iterative way.**
6. **Continually monitor the impact** of optimisation to identify further opportunities.

### Automation

**Automation** is the use of technology to perform a step or series of steps **correctly and consistently** with limited or no human intervention. It can range from automating simple, frequent and repetitive tasks to complex decisions made through algorithms, AI and machine learning. Standardisation is often needed before automation.

### Applying the principle

- **Simplify and/or optimise before automating.** Automating a poor process only produces bad results faster.
- **Define your metrics** so that you can measure the effect of the optimisation or automation.
- **Use the other guiding principles when applying this one**, especially focus on value, keep it simple and practical, and progress iteratively with feedback.

> **Exam tip:** if a scenario says "the team wants to automate the current process immediately", the correct advice is almost always to **optimise (simplify) first, then automate**.

---

## 4.10 How the Principles Interact

The principles **interact with and depend on each other**. Organizations should use **all** of them and consider which are relevant in each situation. Not every principle is equally critical every time.

| Combination | How they reinforce each other |
|---|---|
| Progress iteratively with feedback + Collaborate and promote visibility | Feedback in each iteration comes from collaborating with stakeholders. Visible progress builds support for the next iteration |
| Keep it simple and practical + Optimize and automate | Simplify first, then optimise and automate the simplified process |
| Focus on value + Keep it simple and practical | Value is the test that decides what to eliminate |
| Think and work holistically + Collaborate and promote visibility | You cannot see the whole system without collaborating across boundaries |
| Start where you are + Progress iteratively with feedback | Assess and reuse what exists, then improve it in small steps |
| Focus on value + Optimize and automate | Automate where it creates value, not just where it is technically possible |

> **Did you know?** The earlier ITIL Practitioner qualification (2016) had **nine** guiding principles. ITIL 4 consolidated them into **seven**.

---

## 4.11 Governance

**Governance** is the means by which an organization is **directed and controlled**.

**Governing body:** "a person or group of people accountable at the highest level for the performance and compliance of the organization." Examples include a board of directors, executive directors and, in smaller organizations, the owner or owners.

### The three governance activities: evaluate, direct, monitor

These come from ISO/IEC 38500, the international standard for the governance of IT.

| Activity | What the governing body does |
|---|---|
| **Evaluate** | Evaluates the organization, its strategy, portfolios and relationships with other parties. Evaluations are repeated as stakeholders' needs and external circumstances change |
| **Direct** | Assigns responsibility for, and directs the preparation and implementation of, **organizational strategy and policies**. Strategies set direction and priorities. Policies set requirements for behaviour across the organization and, where relevant, for suppliers, partners and other stakeholders |
| **Monitor** | Monitors the performance of the organization and its practices, products and services, to ensure that performance conforms to policies and direction |

### Governance in the SVS

- The governing body is accountable for the organization's compliance with policies and external regulations.
- **Practices and value chain activities** must be **aligned with the direction** set by the governing body.
- **Continual improvement** of governance itself is needed. Governance is not "set and forget".
- The way governance is applied depends on the organization. It can be supported by management levels that report to the governing body.

### Governance versus management

| Governance | Management |
|---|---|
| Sets direction and priorities | Plans, builds, runs and monitors activities **within** that direction |
| Evaluates, directs, monitors | Delivers results and reports performance |
| Performed by the governing body | Performed by executives, managers and teams |
| Example: "We will move to cloud-first, and our risk appetite for customer data is low" | Example: "Here is the migration plan, the supplier evaluation and the monthly progress report" |

---

## 4.12 Practices: An Overview

**Practice:** "a set of organizational resources designed for performing work or accomplishing an objective."

A practice is more than a process. It draws on **all four dimensions**: people and skills, information and tools, partners and suppliers, and value streams and processes. A practice usually contributes to **several value chain activities**.

ITIL 4 describes **34 practices** in three groups:

| Group | Number | Examples |
|---|---|---|
| **General management practices** | 14 | Continual improvement, information security management, relationship management, supplier management, risk management, knowledge management |
| **Service management practices** | 17 | Incident management, problem management, change enablement, service desk, service level management, service request management |
| **Technical management practices** | 3 | Deployment management, infrastructure and platform management, software development and management |

The full lists and details are in Chapters 6–8. In ITIL (Version 5) the same 34 practices are regrouped into two groups (see Chapter 10).

---

## Key Takeaways: Chapter 4

- The **SVS** turns **opportunity and demand** into **value**. Its five components are **guiding principles, governance, service value chain, practices and continual improvement**.
- The SVS is designed to provide **flexibility** and break down **silos**.
- The **seven guiding principles** are: **focus on value; start where you are; progress iteratively with feedback; collaborate and promote visibility; think and work holistically; keep it simple and practical; optimize and automate**.
- Principles are **universal and enduring**. They **interact** and should be used together, choosing the ones relevant to the situation.
- Key application phrases to recognise:
  - *Focus on value:* know your consumer; CX and UX
  - *Start where you are:* observe directly; measure carefully; reuse what works; sometimes nothing can be reused
  - *Progress iteratively:* comprehend the whole but do something; fast does not mean incomplete
  - *Collaborate:* collaboration does not mean consensus; decisions need visible data
  - *Holistically:* recognise complexity; look for patterns; automation can help
  - *Keep it simple:* eliminate what adds no value; do fewer things better; quick wins
  - *Optimize and automate:* **optimise before automating**; define metrics
- **Governance:** the governing body **evaluates, directs and monitors**. Management works within that direction.
- A **practice** is a set of organizational resources for performing work. There are **34 practices**: 14 general, 17 service and 3 technical.

---

## Check Your Knowledge: Chapter 4

*Answers are in Appendix A.*

**Multiple choice**

**4.1** What are the inputs to the Service Value System?

- A) Opportunity and demand
- B) Products and services
- C) Value and outcomes
- D) Incidents and changes

**4.2** Which of the following is a component of the Service Value System?

- A) The service value chain
- B) The service desk
- C) PESTLE analysis
- D) Service level agreements

**4.3** What is a *guiding principle*?

- A) A mandatory rule that must be followed in every process
- B) A recommendation that guides an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure
- C) A documented policy approved by the governing body
- D) A step in the continual improvement model

**4.4** Which guiding principle recommends eliminating anything that is truly wasteful and using technology to achieve whatever it is capable of?

- A) Keep it simple and practical
- B) Think and work holistically
- C) Optimize and automate
- D) Focus on value

**4.5** Which guiding principle advises against building something new without considering what is already available to be leveraged?

- A) Progress iteratively with feedback
- B) Start where you are
- C) Focus on value
- D) Collaborate and promote visibility

**4.6** A team plans to redesign the whole service desk operation in a single 18-month project with one delivery at the end. Which guiding principle would recommend breaking the work into smaller deliverables?

- A) Progress iteratively with feedback
- B) Think and work holistically
- C) Start where you are
- D) Optimize and automate

**4.7** "Collaboration does not mean consensus" is a recommendation for applying which guiding principle?

- A) Focus on value
- B) Collaborate and promote visibility
- C) Keep it simple and practical
- D) Think and work holistically

**4.8** A manager wants to automate an existing approval workflow immediately. It has seven approval steps, and four of them add no value. What is the best advice according to the guiding principles?

- A) Automate all seven steps to save time
- B) Simplify and optimise the workflow first, then automate it
- C) Keep the workflow manual to avoid risk
- D) Ask the supplier to redesign it

**4.9** "Recognise the complexity of the systems" is a recommendation for applying which guiding principle?

- A) Think and work holistically
- B) Keep it simple and practical
- C) Progress iteratively with feedback
- D) Start where you are

**4.10** "If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it." Which guiding principle is this?

- A) Optimize and automate
- B) Focus on value
- C) Keep it simple and practical
- D) Start where you are

**4.11** Which guiding principle recommends combining measurement with direct observation, because the act of measuring can affect the results?

- A) Focus on value
- B) Start where you are
- C) Progress iteratively with feedback
- D) Collaborate and promote visibility

**4.12** Which activities are performed by the governing body?

- A) Plan, do, check, act
- B) Evaluate, direct, monitor
- C) Engage, design, deliver
- D) Plan, build, run

**4.13** Which statement about the guiding principles is correct?

- A) Only one principle should be applied at a time
- B) The principles interact with each other and should be considered together, with the most relevant ones chosen for each situation
- C) The principles apply only to improvement initiatives
- D) The principles must be applied in numerical order

**4.14** What is a *practice*?

- A) A set of interrelated activities that transform inputs into outputs
- B) A set of organizational resources designed for performing work or accomplishing an objective
- C) A team within the IT department
- D) A documented procedure for handling incidents

**4.15** Which guiding principle emphasises understanding customer experience (CX) and user experience (UX)?

- A) Focus on value
- B) Think and work holistically
- C) Keep it simple and practical
- D) Optimize and automate

**4.16** A team wants to publish a minimum viable version of a new self-service portal, gather user comments and improve it each month. Which two guiding principles are most clearly being applied?

- A) Start where you are; optimize and automate
- B) Progress iteratively with feedback; focus on value
- C) Keep it simple and practical; think and work holistically
- D) Collaborate and promote visibility; start where you are

**Short answer**

**4.17** Explain how the design of the SVS helps an organization avoid working in silos.

**4.18** You have been asked to introduce problem management. Describe how you would apply *start where you are*.

**4.19** Explain two ways in which *progress iteratively with feedback* and *collaborate and promote visibility* support each other.

**4.20** Explain the difference between governance and management, with an example of each.

---

