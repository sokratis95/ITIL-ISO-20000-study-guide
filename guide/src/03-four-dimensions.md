# Chapter 3: The Four Dimensions of Service Management

**Suggested study time:** 1 hour (Day 1)

**Learning objectives.** After this chapter you should be able to:

- name and describe the four dimensions of service management
- explain why all four must be considered in a balanced way
- describe the external (PESTLE) factors that influence the dimensions
- use the RACI model to clarify responsibilities
- distinguish a value stream from a process

---

## 3.1 Why Four Dimensions?

Organizations often fail at service management because they focus on **one aspect**, usually technology, and neglect the others. A new ITSM tool will not improve anything if staff are not trained, processes are not redesigned and suppliers are not aligned.

ITIL 4 describes **four dimensions** that must be considered **for every service and for the Service Value System (SVS) as a whole**:

| # | Dimension | Core question |
|---|---|---|
| 1 | **Organizations and people** | *Who* does the work, how are they organised, and what culture do they work in? |
| 2 | **Information and technology** | *What* information, knowledge and technology are needed? |
| 3 | **Partners and suppliers** | *Which* other organizations are involved, and how? |
| 4 | **Value streams and processes** | *How* do the parts work together to create value? |

All four are affected by **external factors** (PESTLE, Section 3.6). Neglecting any dimension can cause a service to underperform or fail.

> **Remember** the four dimensions with the phrase **"O-I-P-V": Our Information Partners create Value**.
> *Organizations and people, Information and technology, Partners and suppliers, Value streams and processes.*

---

## 3.2 Dimension 1: Organizations and People

This dimension covers:

- **formal organizational structures**: teams, reporting lines, the systems of authority and communication
- **culture**: shared values and attitudes, such as trust, transparency, collaboration and willingness to learn from failure
- **roles and responsibilities**
- **staffing and competencies**: the right number of people with the right skills, knowledge and behaviour
- **leadership and management styles**

### Key points

- The **complexity of organizations** is growing. The structure and management style must make sure that the way work is organised supports the creation of value.
- A **culture of trust and transparency** encourages people to raise issues, escalate early and suggest improvements without fear.
- **Every person** in the organization should clearly understand how their work contributes to creating value for the organization, its customers and other stakeholders.
- Staff increasingly need **broad general knowledge combined with deep specialist knowledge**, often called a **"T-shaped" profile**. The vertical bar of the T is depth in one area. The horizontal bar is breadth across related areas, including collaboration and business understanding.
- **Leaders** promote values and set the example, for example by supporting a blameless approach to reviewing failures.

### Clarifying responsibility: the RACI model

A **RACI matrix** assigns, for each activity, who is:

| Letter | Role | Meaning |
|---|---|---|
| **R** | **Responsible** | Does the work. There can be several |
| **A** | **Accountable** | Owns the outcome and signs off. There must be **exactly one** per activity |
| **C** | **Consulted** | Gives input before or during the work (two-way communication) |
| **I** | **Informed** | Is kept up to date (one-way communication) |

**Example: major incident handling**

| Activity | Service desk analyst | Major incident manager | Technical team | Service owner | Customer relationship manager |
|---|---|---|---|---|---|
| Log and classify the incident | **R** | A | | I | |
| Coordinate the response | I | **A/R** | C | C | I |
| Diagnose and fix | | A | **R** | C | |
| Communicate with the customer | C | A | | C | **R** |
| Post-incident review | C | **A/R** | R | C | I |

> **Exam tip:** the most commonly tested RACI rule is **only one "A" per activity**. Accountability that is shared ends up belonging to nobody.

### Typical ITSM roles

- **Service owner:** accountable for a specific service across its whole lifecycle
- **Practice (process) owner:** accountable for a practice being fit for purpose, for its design and for its improvement
- **Practice (process) manager:** responsible for day-to-day operational management of a practice
- **Practitioner:** carries out the practice's activities, for example a service desk agent
- **Service level manager, relationship manager, change authority, incident manager, problem manager** and similar specialist roles

---

## 3.3 Dimension 2: Information and Technology

This dimension covers **the information and knowledge** needed to manage services **and the technologies** that support service management. It applies both to the services being managed and to service management itself.

### Information

Key questions:

- What information is managed by the services? For example customer records or medical data.
- What supporting information and knowledge are needed to deliver and manage the services?
- How will information and knowledge assets be protected, managed, archived and disposed of?

Common challenges relate to the **availability, reliability, accessibility, timeliness, accuracy and relevance** of information.

### Technology

Technologies that support **service management** include:

- workflow management and ticketing systems
- knowledge bases
- inventory, asset and configuration management systems
- communication systems, such as chat, collaboration and telephony
- analytical, reporting and monitoring tools
- increasingly, **artificial intelligence (AI)**, **machine learning**, **automation**, **mobile** solutions, **cloud computing** and collaboration tools

### Factors that influence technology choices

| Factor | Example question |
|---|---|
| **Compatibility** with the existing architecture | Will the new tool integrate with our CMDB and identity system? |
| **Regulatory and compliance** requirements | Can personal data be stored in this cloud region under data-protection law? |
| **Culture** | Is the organization ready to trust AI-generated answers? Do staff resist new tools? |
| **Nature of the business** | A bank has a low tolerance for risk; a start-up may accept more risk for speed |
| **Viability** | Will this technology still be supported in five years? Does it create vendor lock-in? |
| **Security** | Does it meet our information security requirements? |

> **In practice:** a hospital wants to use a cloud-based chatbot for patient appointment queries. The *information* questions concern patient data, consent and retention. The *technology* questions concern integration with the scheduling system, accuracy of AI answers and availability. The decision is shaped by regulation, culture and risk tolerance.

---

## 3.4 Dimension 3: Partners and Suppliers

This dimension covers an organization's **relationships with other organizations** that are involved in the design, development, deployment, delivery, support and continual improvement of services. It includes the **contracts and other agreements** between them.

### Forms of cooperation

Relationships range along a spectrum:

| Formal supplier relationship | ←→ | Partnership |
|---|---|---|
| Formal contracts | | Flexible agreements |
| Clear separation of responsibilities | | Shared goals and risks |
| Focus on transactions and price | | Focus on collaboration and joint value |
| Example: buying commodity laptops | | Example: co-developing a product with a strategic partner |

### Factors that influence an organization's supplier strategy

ITIL 4 lists these factors. Learn them, because they are often examined.

| Factor | Example |
|---|---|
| **Strategic focus** | We want to concentrate on our core competency, banking, so we outsource data-centre operations |
| **Corporate culture** | Some organizations historically prefer to keep everything in-house |
| **Resource scarcity** | We cannot hire enough cloud security specialists, so we contract a specialist firm |
| **Cost concerns** | It is cheaper to buy the service than to build and run it ourselves |
| **Subject matter expertise** | A supplier has expertise we would take years to develop |
| **External constraints** | Government regulation or policy restricts or requires certain sourcing, such as data sovereignty |
| **Demand patterns** | Seasonal or highly variable demand makes on-demand cloud capacity attractive |

### Service integration and management (SIAM)

When many suppliers contribute to a service, someone must **coordinate them as one ecosystem**. **SIAM** uses a **service integrator** to manage end-to-end service delivery across multiple suppliers. The integrator can be internal, external or a hybrid. It owns cross-supplier processes such as incident coordination and handles disputes between suppliers.

---

## 3.5 Dimension 4: Value Streams and Processes

This dimension describes **how the various parts of the organization work in an integrated and coordinated way** to enable value creation through products and services. It defines activities, workflows, controls and procedures.

### Value streams

**Value stream:** "a series of steps an organization undertakes to create and deliver products and services to consumers."

- A value stream is **end-to-end** and **customer-focused**. It starts with **demand or an opportunity** and ends with **value**.
- It usually **crosses organizational boundaries** and combines several practices.
- Value streams can be mapped to find **waste**, delays and bottlenecks, and then optimised, for example through automation, removing hand-offs or reordering steps.

### Processes

**Process:** "a set of interrelated or interacting activities that transform inputs into outputs. Processes define the sequence of actions and their dependencies."

- Processes are often detailed in **procedures**, which say *who* does *what*, and **work instructions**, which give detailed step-by-step guidance on *how* a task is done.
- Useful process characteristics carried over from earlier ITIL versions: a process is **measurable**, delivers **specific results**, has **customers** or stakeholders, and **responds to a specific trigger**.

### Value stream versus process

| | Value stream | Process |
|---|---|---|
| Scope | End-to-end, from demand to value | A defined set of activities, often within one practice |
| Focus | The consumer's journey and the value created | Transforming inputs into outputs efficiently and consistently |
| Boundaries | Crosses teams, practices and organizations | Usually has a defined owner and scope |
| Example | "New employee is productive on day one": from HR request to a working laptop, accounts and training | "Service request fulfilment" or "account provisioning" |

> **In practice:** in an onboarding value stream, HR raises the request (**demand**). IT plans the equipment, buys or allocates a laptop, creates accounts, configures access and delivers training. The value is a **productive new employee from day one**. Many practices contribute: service request management, IT asset management, information security management, service desk and supplier management.

Key questions for this dimension:

- What is the generic delivery model for the service, and how does it work?
- What are the value streams involved in delivering the agreed outputs?
- Who, or what, performs the required actions?

---

## 3.6 External Factors: PESTLE

Service providers operate within a changing environment. The **PESTLE** model describes the external factors that constrain or influence all four dimensions:

| Factor | Examples relevant to IT services |
|---|---|
| **P**olitical | Government digital policies; sanctions affecting suppliers; public-sector procurement rules |
| **E**conomic | Recession reducing budgets; exchange rates affecting cloud costs; inflation in salaries |
| **S**ocial | Remote and hybrid working; expectations of 24/7 mobile access; digital skills of users |
| **T**echnological | AI, cloud, automation and 5G; rapid obsolescence of platforms |
| **L**egal | Data protection (for example GDPR); accessibility law; employment law; software licensing |
| **E**nvironmental | Energy consumption of data centres; e-waste rules; climate-related reporting (now reflected in ISO/IEC 20000-1 Amendment 1:2024) |

---

## 3.7 Applying All Four Dimensions: An Example

An organization introduces a **chatbot** on its service desk.

| Dimension | Considerations |
|---|---|
| **Organizations and people** | Will analysts fear job losses? Who owns and trains the chatbot? What new skills are needed, such as conversation design and knowledge curation? How do we keep a human-centred culture? |
| **Information and technology** | Is the knowledge base accurate and up to date? Does the chatbot integrate with the ticketing tool and identity system? How is personal data protected? |
| **Partners and suppliers** | Which vendor provides the chatbot platform? What are the contract terms, SLAs and exit arrangements? Who supports the AI model? |
| **Value streams and processes** | Which requests can it fully resolve? How does it hand over to a human, with context? How do incident and request workflows change? |
| **External (PESTLE)** | Legal rules on AI transparency and data protection; social acceptance of chatbots; accessibility requirements |

If any row is ignored, the project is at risk. A technically perfect chatbot with an outdated knowledge base, for example, will frustrate users.

---

## Key Takeaways: Chapter 3

- The four dimensions are **Organizations and people**, **Information and technology**, **Partners and suppliers** and **Value streams and processes**.
- They apply to **every service** and to the **SVS as a whole**, and must be considered in a **balanced** way.
- **Organizations and people:** structures, culture, roles, competencies and leadership. **RACI** has exactly **one Accountable** per activity.
- **Information and technology:** the information and knowledge needed, plus the technology that supports services and service management. Choices are shaped by compatibility, regulation, culture, nature of the business and viability.
- **Partners and suppliers:** relationships range from formal supply to partnership. Supplier strategy is influenced by **strategic focus, corporate culture, resource scarcity, cost concerns, subject matter expertise, external constraints and demand patterns**. **SIAM** integrates multiple suppliers.
- **Value streams and processes:** a **value stream** is the series of steps to create and deliver products and services to consumers. A **process** transforms inputs into outputs.
- **PESTLE** external factors influence all four dimensions.

---

## Check Your Knowledge: Chapter 3

*Answers are in Appendix A.*

**Multiple choice**

**3.1** Which of the following lists the four dimensions of service management?

- A) People, process, products, partners
- B) Organizations and people; information and technology; partners and suppliers; value streams and processes
- C) Strategy, design, transition, operation
- D) Plan, improve, engage, deliver and support

**3.2** Which dimension includes roles and responsibilities, culture, and staffing and competencies?

- A) Value streams and processes
- B) Partners and suppliers
- C) Organizations and people
- D) Information and technology

**3.3** Which dimension includes workflow management systems, knowledge bases and artificial intelligence?

- A) Information and technology
- B) Organizations and people
- C) Value streams and processes
- D) Partners and suppliers

**3.4** An organization outsources its cloud security monitoring because it cannot recruit enough qualified specialists. Which factor influencing supplier strategy does this illustrate?

- A) Corporate culture
- B) Demand patterns
- C) Resource scarcity
- D) External constraints

**3.5** Which dimension focuses on how the various parts of the organization work in an integrated and coordinated way to enable value creation?

- A) Organizations and people
- B) Value streams and processes
- C) Partners and suppliers
- D) Information and technology

**3.6** What does PESTLE stand for?

- A) People, Environment, Systems, Technology, Leadership, Ethics
- B) Political, Economic, Social, Technological, Legal, Environmental
- C) Planning, Execution, Support, Testing, Launch, Evaluation
- D) Political, Ethical, Strategic, Technical, Legal, Economic

**3.7** What is a *value stream*?

- A) A set of interrelated or interacting activities that transform inputs into outputs
- B) A series of steps an organization undertakes to create and deliver products and services to consumers
- C) A documented agreement between a provider and a consumer
- D) A financial forecast of the value of a service

**3.8** What is a *process*?

- A) A set of interrelated or interacting activities that transform inputs into outputs
- B) A series of steps an organization undertakes to create and deliver products and services to consumers
- C) A team of people with specialist skills
- D) A tool that automates workflow

**3.9** Which statement about the four dimensions is correct?

- A) They apply only to new services
- B) They should be considered for every service and for the SVS as a whole
- C) The information and technology dimension is always the most important
- D) They are only relevant to external service providers

**3.10** In a RACI matrix, how many roles should be *Accountable* for a single activity?

- A) None
- B) Exactly one
- C) At least two, for resilience
- D) As many as are responsible

**3.11** Which of the following best describes SIAM?

- A) A method of software development
- B) An approach to managing multiple suppliers in an integrated way, often through a service integrator
- C) A model for calculating availability
- D) A technique for root cause analysis

**3.12** An organization buys a powerful new ITSM tool, but incident resolution times do not improve. Staff were not trained and workflows were not redesigned. What is the most likely explanation?

- A) The tool was configured incorrectly
- B) The organization focused on one dimension and neglected the organizations and people, and value streams and processes, dimensions
- C) The partners and suppliers dimension is irrelevant to incident management
- D) Incident management cannot be improved with tools

**Short answer**

**3.13** Explain the difference between a value stream and a process, giving an example of each.

**3.14** An organization is launching a self-service portal for users. List one important consideration for each of the four dimensions.

**3.15** List at least five factors that influence an organization's supplier strategy.

**3.16** Give one example for each PESTLE factor that could affect an IT service provider.

---

