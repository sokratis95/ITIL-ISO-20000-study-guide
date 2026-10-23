# Chapter 16: Understanding Questions with Answers

**Suggested study time:** 3 hours (Day 7)

This final chapter tests **understanding**, not just recall. It has three sections:

- **Section A: Understanding questions.** "Why" and "explain" questions, each with a full answer. Cover the answer, say or write your own answer, then compare.
- **Section B: Scenario questions.** Realistic situations with model answers that apply ITIL and ISO/IEC 20000 together.
- **Section C: Mock exam.** 40 multiple-choice questions in 60 minutes, with an answer key and explanations.

> **How to get the most from this chapter:** do not read the answers first. For each question, spend 2–3 minutes on your own answer, even a rough one in bullet points. Then read the model answer and note what you missed. Add any gaps to your "weak areas" list.

---

## Section A: Understanding Questions

### Part A1: ITIL Concepts

**A1. Why does ITIL 4 say value is "co-created" rather than "delivered"? Give an example of what happens when the consumer does not take part.**

**Answer.** Value is the *perceived* benefit, usefulness and importance of something, so it only exists when the consumer actually achieves outcomes. Providers can offer resources and perform actions, but the consumer must contribute too. It defines requirements, provides information and access, uses the service properly, adopts new ways of working and gives feedback. For example, a company buys a sophisticated CRM service, but the sales team keeps using spreadsheets and never enters customer data. The provider has delivered everything it promised, yet **no value** is created. ITIL therefore treats value as the joint result of provider and consumer activity: **co-creation**. This shapes practice. Engagement, relationship management, training and adoption support become part of service management, not optional extras.

---

**A2. A service removes some costs and risks from the consumer and imposes others. Using a cloud-hosting example, explain how a consumer decides whether the service is valuable.**

**Answer.** The consumer weighs the **outcomes** facilitated against the **costs and risks**, both removed and imposed. In a move from an in-house data centre to cloud hosting, the outcomes are scalable capacity, faster deployment and global reach. **Costs removed** include hardware purchases, data-centre space and power, and hardware maintenance staff. **Costs imposed** include subscription fees, migration effort, staff retraining and network upgrades. **Risks removed** include hardware failure, capacity shortfalls and ageing facilities. **Risks imposed** include provider outages, vendor lock-in, data-residency issues and dependency on the provider's security. The service is valuable if, *from the consumer's perspective*, the outcomes plus the costs and risks removed outweigh the costs and risks imposed. Because value is perceived, two consumers can reach different conclusions about the same service. A bank with strict data-residency rules may reject a service that a start-up finds ideal.

---

**A3. Explain the difference between a product, a service and a service offering, using a single example.**

**Answer.** Take a broadband company. Its **product** is the configuration of its resources: its network, staff, processes, billing systems and partner agreements, designed to offer value. The consumer sees only part of this. The **service** is the means by which the consumer achieves outcomes, such as working and streaming from home, without having to manage the costs and risks of running a network. The **service offerings** are formal descriptions of packages for target consumer groups, built from the product. A "Home Basic" offering might contain *goods* (a router that becomes the customer's property), *access to resources* (100 Mbps connectivity) and *service actions* (phone support). A "Business Pro" offering from the same product adds a static IP address, 1 Gbps and 4-hour on-site repair. One product, many offerings, each enabling a service relationship.

---

**A4. Why are both utility and warranty needed? Is one more important than the other?**

**Answer.** **Utility** (fit for purpose) is what the service does: its functionality. **Warranty** (fit for use) is the assurance that it will meet agreed requirements: availability, capacity, security and continuity. A service with excellent features that is constantly unavailable, slow or insecure cannot be relied on to achieve outcomes. A perfectly reliable service that lacks the required functions does not help the consumer either. Value comes from the **combination**, so neither is inherently more important. In practice the balance depends on context. For a safety-critical hospital system, warranty aspects such as availability and integrity may dominate design decisions. For an experimental marketing tool, utility and speed of change may matter more. Requirements work, through business analysis and service design, should capture both functional (utility) and non-functional (warranty) requirements.

---

**A5. Why should the four dimensions be applied to the SVS as a whole, and not only to individual services?**

**Answer.** The SVS is the organization's entire operating system for creating value. If only individual services are considered, systemic weaknesses go unnoticed: a culture that punishes mistakes, a fragmented toolset, over-dependence on one supplier, or value streams that cross ten hand-offs. These affect every service. Applying the four dimensions to the SVS ensures the organization has the right **structures, culture and skills** (organizations and people), **information and tools** (information and technology), **supplier strategy and integration** (partners and suppliers) and **end-to-end workflows** (value streams and processes) to run *all* services. Doing so also prevents the common failure of concentrating on one dimension, typically buying technology, while neglecting the others.

---

**A6. How does the design of the SVS let an organization respond to very different kinds of demand without becoming rigid?**

**Answer.** The SVS does not prescribe a fixed sequence. Its **service value chain** consists of six generic activities that can be combined in any order and as often as needed, through **value streams** designed for specific scenarios. Restoring a failed service, onboarding an employee and developing a new product are three different value streams using the same building blocks. **Practices** are reusable sets of resources that contribute to many activities. **Guiding principles** and **governance** give consistent direction without dictating detailed steps, and **continual improvement** constantly adapts the system. This flexibility, combined with shared direction, lets the organization respond to stable and volatile demand alike and discourages siloed working.

---

**A7. Why are the guiding principles described as "universal and enduring"? Why do they not conflict with Agile or DevOps?**

**Answer.** They are **universal** because they apply to almost any initiative, organization type, team and relationship, from a two-person start-up to a government ministry and from a tool selection to a cultural transformation. They are **enduring** because they remain valid whatever changes occur in goals, strategies, structures or technology. They are not tied to a particular method or era. They do not conflict with Agile or DevOps because they **share the same roots**. "Progress iteratively with feedback" mirrors Agile iteration. "Optimize and automate" and "think and work holistically" mirror DevOps automation and systems thinking. "Focus on value" and "keep it simple and practical" mirror Lean's elimination of waste. ITIL 4 was deliberately designed to integrate with these approaches.

---

**A8. What is the difference between "keep it simple and practical" and "optimize and automate", and why does the order in which they are applied matter?**

**Answer.** *Keep it simple and practical* is about **eliminating** steps, processes, metrics or actions that do not contribute to value and using the minimum necessary. *Optimize and automate* is about making what remains **as effective and useful as it needs to be**, then using technology to perform it consistently with minimal human intervention. The order matters because **automating a wasteful or complicated process locks in the waste**. It also makes the waste harder to change and produces bad outcomes faster. The recommended path is to simplify first, then optimise, then automate, while defining metrics to check the effect. Example: an approval workflow with seven sign-offs, four of them pointless, should be reduced to three before being automated in a workflow tool.

---

**A9. "Collaboration does not mean consensus." Why is this important?**

**Answer.** *Collaborate and promote visibility* encourages involving the right stakeholders, sharing information and working across boundaries. This brings better ideas, buy-in and relevance. If collaboration were taken to mean *everyone must agree*, decisions would stall, the loudest objector would gain a veto, and initiatives would be watered down until they were useless. ITIL clarifies that collaboration means **genuine involvement and transparency**, while **decisions remain the responsibility of the appropriate people**. A change authority, for instance, consults service owners and users but still makes the decision, even if not everyone agrees. Visibility also helps here: when data and reasoning are transparent, people more readily accept decisions they would not have chosen themselves.

---

**A10. How do governance and the guiding principles work together in the SVS?**

**Answer.** **Governance** sets *direction and control*. The governing body evaluates the organization and its environment, directs through strategies and policies, and monitors performance and compliance. The **guiding principles** shape *how* people make decisions and act within that direction, at every level, every day. Governance provides the "what we are aiming for and the boundaries", such as risk appetite, compliance obligations and strategic priorities. The principles provide the "how we behave while getting there". The governing body itself should also apply the principles. For example, it should *focus on value* when evaluating portfolios, *collaborate and promote visibility* in reporting, and *progress iteratively* with major transformations.

---

**A11. Why does the service value chain have no fixed sequence?**

**Answer.** Real work does not follow a single linear path. Handling a password reset touches engage and deliver and support. Building a new product may loop repeatedly through engage, design and transition, obtain/build and improve. A major incident may require obtain/build, to replace hardware, in the middle of deliver and support. A fixed sequence would force unnecessary steps on simple work and restrict complex work. ITIL v3's lifecycle was often misread as sequential, which encouraged siloed "phase" teams. By making the activities interconnected and letting **value streams** define the order for each scenario, ITIL 4 supports both simple and complex work, as well as Agile iteration.

---

**A12. How does a value stream differ from a process, and why do both matter?**

**Answer.** A **value stream** is the end-to-end series of steps from **demand to value** for a consumer, for example "customer reports a fault → customer is working again". It crosses teams, practices and sometimes organizations. A **process** is a defined set of interrelated activities that transforms inputs into outputs, such as "incident categorisation and prioritisation", usually within one practice. Value streams matter because they show the **customer's experience** and expose delays, hand-offs and waste between teams, which are invisible when each team optimises only its own process. Processes matter because they make individual steps **consistent, controlled and measurable**. Good service management optimises processes **in the context of** the value streams they serve.

---

**A13. Why does continual improvement appear in three places in ITIL 4?**

**Answer.** Improvement must happen at every level and in every area, so ITIL embeds it structurally. (1) As an **SVS component**, continual improvement is a recurring organizational activity that applies to the whole system, including governance and practices. (2) As the **improve value chain activity**, it is an operational activity that receives performance data and feedback from all other activities and produces improvement initiatives. (3) As a **general management practice**, it provides the resources, methods (such as the continual improvement model and the CIR), roles and techniques that make improvement happen. Placing it in all three ensures improvement is neither a one-off project nor the job of a single team.

---

**A14. Why is the distinction between incident management and problem management important? What goes wrong if they are merged?**

**Answer.** The two practices have **different goals and time horizons**. Incident management aims to **restore service as quickly as possible**, often with a workaround, because every minute of disruption costs the business. Problem management aims to **find and remove causes** and reduce future impact. That takes careful analysis, which may take days or weeks. If they are merged, one of two failures usually happens. Either restoration is delayed while staff hunt for root causes, which makes outages longer. Or, more commonly, urgent firefighting crowds out analysis, so the same incidents recur indefinitely. Keeping them distinct, but closely **linked** through incident trend data, known errors and workarounds, lets the organization both restore quickly *and* steadily reduce incident volumes.

---

**A15. Why do known error records matter so much to the service desk?**

**Answer.** A known error record documents a problem that has been analysed but not yet resolved. It usually includes the symptoms, the cause and a **workaround**. When a user reports matching symptoms, the service desk can recognise the issue immediately, apply the workaround and restore service at **first contact**. It does not need to escalate to specialist teams or rediscover the solution. This improves resolution time, first-contact resolution and user satisfaction, and it frees specialists for real problem-solving. It also improves data. Linking new incidents to the known error shows the true impact of the problem, which supports error control decisions about whether a permanent fix is justified. ISO/IEC 20000-1 (8.6.3) explicitly requires known error information to be made available to other activities such as incident management.

---

**A16. Why are standard changes pre-authorised, and why is this safe?**

**Answer.** Many changes are **frequent, low-risk, well understood and fully documented**, such as installing approved software or adding a user to a group. Assessing and authorising each one individually would waste effort and slow the business without reducing risk. With standard changes, the **risk assessment and authorisation are done once**, when the procedure is created or modified. After that, each instance can proceed without further authorisation. This is safe because the procedure itself was assessed, the change is repeatable, and any deviation from the defined procedure means it is no longer a standard change and must follow the normal path. Monitoring the success rate of standard changes provides assurance that the classification remains valid.

---

**A17. What role does the change schedule play during incident investigation?**

**Answer.** Many incidents are caused, directly or indirectly, by recent changes. When an incident occurs, especially a major one, one of the first questions is "**what changed?**" The change schedule shows which changes were implemented recently and which are planned, on which services and CIs, and by whom. Investigators can quickly correlate the start of the incident with a recent change, decide whether to **back it out**, and avoid deploying further planned changes that could make things worse. After the event, problem management uses the same information to identify change-related causes, and continual improvement uses it to improve change practices.

---

**A18. Why do SLAs based purely on operational metrics often lead to customer dissatisfaction?**

**Answer.** Operational metrics, such as server uptime, ticket response times and network latency, measure the **parts**. Customers experience the **whole service** and care about **outcomes**: can they complete their work, serve their customers, meet their deadlines? Every component can meet its target while the end-to-end service is slow, unreliable at critical moments or hard to use. The SLA report is then green while the customer is unhappy: the **watermelon effect**. ITIL 4 therefore recommends SLAs that relate to defined **services**, include **outcome-based and experience measures** in balanced bundles, are **genuinely agreed** through engagement and listening, and are **simply written**. That way SLA performance and customer perception move together.

---

**A19. Why separate release management from deployment management?**

**Answer.** **Deployment** is the technical act of moving components into an environment. **Release** is making new or changed functionality **available for use** by users. Separating them gives flexibility and reduces risk. Code can be deployed to production frequently and safely, often automatically, while the features remain hidden behind feature toggles. They are then released when the business is ready: after training, at a marketing launch, or gradually to a percentage of users through canary or "dark" launches. If something goes wrong, the feature can be switched off without redeploying. This decoupling is central to DevOps and continuous delivery. ITIL 4 reflects it by treating release management (a service management practice) and deployment management (a technical management practice) as separate practices.

---

**A20. Why should a CMDB not try to contain "everything"?**

**Answer.** Every CI and attribute recorded must be **kept accurate** through updates with every change, discovery and verification, and that costs effort. If the scope is too broad or too detailed, the data inevitably decays. Inaccurate configuration data is dangerous because people trust it when assessing change impact or diagnosing incidents. ITIL and ISO/IEC 20000-1 both say the level of detail should be **appropriate to the value**: ISO says "appropriate to the criticality and type of services". The organization should record the CIs, attributes and **relationships** that its practices actually need, especially change impact assessment, incident diagnosis and service mapping. It should then expand gradually ("progress iteratively") and use automation to keep the data current.

---

**A21. Why does ITIL emphasise empathy and business understanding for the service desk, rather than deep technical skill?**

**Answer.** The service desk is the **single point of contact** and shapes how users perceive the entire provider. Users usually contact it when they are frustrated or under pressure. Agents who show **empathy and emotional intelligence**, understand the business impact and communicate clearly can calm the situation, set realistic expectations and engage the right resources. With automation and self-service handling simple, repetitive requests, the issues reaching humans are increasingly complex, sensitive or business-critical. Here, judgement and communication matter more than technical depth. Specialist knowledge remains available through support teams, knowledge bases and swarming.

---

**A22. How does problem management relate to risk management?**

**Answer.** A problem is a **cause or potential cause** of incidents, which makes it, in effect, a **risk** to services. Problem management can therefore use risk management techniques. It **identifies** problems through trend analysis and supplier information, **assesses** them by likelihood and impact so they can be prioritised for analysis, and **treats** them. Treatment means **reducing** impact with workarounds, **removing** the cause with a change, or **accepting** a known error when a permanent fix is not justified by cost, risk and benefit. Error control's regular re-assessment of known errors is a form of risk **monitoring**. Proactive problem management, which acts on potential problems before incidents occur, is risk management in its purest form.

---


### Part A2: ISO/IEC 20000 Concepts

**A23. What does "the organization retains accountability" mean in practice when other parties are involved in delivering services?**

**Answer.** It means the organization **cannot pass responsibility for meeting customer requirements to its suppliers**, whether through an outsourcing contract or through internal agreements. If an outsourced data centre fails, the customer holds the organization responsible, and so does the auditor. In practice the organization must: decide which services, components and processes other parties provide or operate; select those parties against defined criteria; put **contracts** (external) or **documented agreements** (internal, or customers acting as suppliers) in place with clear targets, responsibilities and interfaces; **integrate** their work into the SMS, for example through shared incident handling, the change process and configuration data; **measure and review** their performance at planned intervals; and manage disputes. It also **cannot outsource everything**. The standard does not allow conformity if other parties provide or operate all of the services, components or processes in scope.

---

**A24. Why does ISO/IEC 20000-1 not allow requirements to be excluded, and how do small organizations cope with that?**

**Answer.** Every requirement in clauses 4–10 contributes to an SMS that can **reliably deliver services that meet requirements**. Excluding one, such as problem management or continuity, would leave a gap in that assurance. Allowing exclusions would also make certificates hard to compare, because two "certified" organizations could have very different capabilities. Small organizations cope through **proportionality**. The standard specifies *what* must be achieved, not *how*. A 15-person provider might run problem management as a monthly 1-hour review of incident trends, keep its CMDB in a well-controlled spreadsheet, test continuity through an annual tabletop exercise, and combine roles. What matters is that each requirement is met effectively, at an appropriate scale, and evidenced. The organization limits its burden through the **scope**, meaning which services, customers and locations are included, not by excluding requirements.

---

**A25. Why does the standard require both a service management policy and a service management plan?**

**Answer.** They serve different purposes and audiences. The **policy** (5.2) is top management's short statement of **intent and commitment**. It is appropriate to the organization's purpose, provides a framework for objectives, commits to meeting requirements and to continual improvement, and is communicated to staff and made available to interested parties. It sets the tone and direction. The **plan** (6.3) is the **operational blueprint**. It lists the services, known limitations, obligations, authorities, resources, the approach to other parties, supporting technology, and how effectiveness will be measured, audited, reported and improved. Without a policy, the SMS lacks direction and leadership commitment. Without a plan, good intentions are not turned into an organized, resourced management system.

---

**A26. What is the purpose of "at planned intervals", and how does an auditor assess it?**

**Answer.** Many requirements must be performed **periodically**, not continuously and not only when something goes wrong: reviewing SLAs and supplier performance, measuring customer satisfaction, verifying configuration information, testing continuity plans, analysing change trends, reviewing problem resolution effectiveness, internal audits and management reviews. The standard does not set frequencies because the right interval depends on the organization's risk, size and context. Instead the organization must **decide the interval, document it** (for example in the service management plan, process documents or a compliance calendar), and **follow it**. An auditor checks that intervals are defined, that they are reasonable for the risks involved, and that **records prove the activities happened on schedule**. "We review supplier performance annually" is acceptable if it is justified and evidenced. "We review when we have time" is not.

---

**A27. Why must new services, major-impact changes, the removal of services and the transfer of services go through service design and transition (8.5.2) rather than through change management alone?**

**Answer.** These changes affect the **service as a whole** and its relationships with customers, users, suppliers and other services. They therefore need more than a risk assessment and approval. They need **planning**: authorities, activities, timescales, resources, dependencies, testing, acceptance criteria and measurable intended outcomes. They need **design**: resources, training, agreements and contracts, SMS changes, impact on other services and catalogue updates. They need **build and transition** with verification against acceptance criteria and a report on outcomes achieved. A **removal** also needs decisions about archiving or disposing of data and components. A **transfer** to or from another party needs dates and transfer activities. Without this structured treatment, critical aspects such as contracts, training, data handling or support arrangements are easily missed. These changes are still governed by the change management policy. They simply receive the fuller design and transition process.

---

**A28. Why does ISO/IEC 20000-1 require SLAs to include workload characteristics?**

**Answer.** Service level targets are only achievable within certain **workload assumptions**: number of users, transaction volumes, call volumes, data sizes and peak patterns. A service desk sized to answer 95% of calls within 30 seconds for 1,000 users cannot keep that promise for 3,000 users without more resources. By documenting the workload characteristics and **monitoring actual and periodic changes in workload against them** (8.3.3), the organization can detect growth early, trigger capacity planning (8.4.3) and budget changes (8.4.1), and renegotiate targets or resources with the customer. Without them, SLA breaches become disputes over blame instead of an agreed signal to act.

---

**A29. Why are service complaints handled within business relationship management rather than incident management?**

**Answer.** A complaint is an expression of **dissatisfaction with the service or the provider**: its quality, communication, attitude or value. It is not necessarily a technical interruption. Complaints therefore say something about the **relationship** and about customer satisfaction, both of which BRM is responsible for (8.3.2). Placing complaints there makes sure they are recorded, investigated, acted on, reported and **formally closed**, with **escalation** if they are not resolved through normal channels. It also makes sure they feed into satisfaction analysis and improvement, instead of being lost as just another ticket. A complaint *about* an incident, for example "you took three days to fix my laptop", may lead to incident or problem actions, but the complaint itself is managed as part of the relationship.

---

**A30. Why does ISO/IEC 20000-1 include human, information and financial resources within capacity management?**

**Answer.** Services depend on more than technology. A service can fail to meet its targets because there are too few skilled agents at peak times, because a key specialist leaves, because data storage or information-processing capacity is insufficient, or because the budget cannot fund needed expansion. Treating capacity as purely technical, meaning servers and bandwidth, leaves these risks unmanaged. By requiring capacity requirements and planning for **human, technical, information and financial** resources, the standard links capacity management to workforce planning, knowledge, budgeting and demand forecasting. That gives a realistic, holistic view of whether the organization can meet current and future demand. This is similar to ITIL's "think and work holistically" and the four dimensions.

---

**A31. What is the difference between internal audit and management review?**

**Answer.** **Internal audit** (9.2) is an **independent, evidence-based check** of whether the SMS **conforms** to the organization's own requirements and to ISO/IEC 20000-1, and whether it is **effectively implemented and maintained**. It is performed by objective, impartial auditors following an audit programme, and it produces findings reported to management. **Management review** (9.3) is **top management's strategic evaluation** of whether the SMS and the services remain **suitable, adequate and effective**. It considers a broad set of inputs, including audit results but also performance trends, customer feedback, resources, risks and changes in context. It produces **decisions** about improvements and changes. In short, audit provides **assurance and findings**, and management review uses them, together with other inputs, to make **decisions**.

---

**A32. Explain the sequence nonconformity → correction → cause analysis → corrective action → effectiveness review. Why is the last step necessary?**

**Answer.** When a nonconformity is found, the organization first **reacts**. It **corrects** the immediate problem and deals with its consequences, so that damage is contained. Next it **analyses the causes** and checks whether similar nonconformities exist or could occur elsewhere, because fixing only the symptom guarantees recurrence. It then implements **corrective action** to eliminate the cause, changing the SMS if necessary. Finally it **reviews the effectiveness** of that action. This last step is essential because many corrective actions, such as "retrain staff" or "remind people", feel productive but do not actually remove the cause. Only by checking later, for example by sampling records after three months, does the organization know whether the problem has truly gone. Auditors routinely check this step, and a missing effectiveness review is a common finding.

---

**A33. How does risk-based thinking replace "preventive action" in the 2018 edition?**

**Answer.** The 2011 edition had a separate requirement for **preventive action**, meaning action to stop *potential* nonconformities from occurring. In practice it was often a weak afterthought. The 2018 edition, following Annex SL, builds prevention into **planning**. Clause 6.1 requires the organization to determine risks and opportunities, document risks related to the organization, service requirements and other parties, define acceptance criteria, and plan and integrate actions into its processes. Prevention therefore becomes **systematic and proactive**, built into how the SMS is designed and run, instead of an occasional exercise. Continual improvement (10.2) and service assurance processes such as availability, continuity and security risk assessments reinforce this.

---

**A34. Why does ISO/IEC 20000-1:2018 require top management to ensure that "what constitutes value" for the organization and its customers is determined?**

**Answer.** An SMS can be perfectly compliant and still deliver little that customers care about, for example by tracking dozens of process metrics while missing what matters to the business. Requiring top management to make sure **value is determined** ties the SMS to its purpose. Services, objectives, SLAs, improvement priorities and resources should all reflect what the organization and its customers actually value. These might be reliability during trading hours, speed of change, regulatory compliance, cost efficiency or user experience. This reflects the industry's broader move, seen in ITIL 4's "focus on value", from process compliance to value outcomes. It also makes top management accountable for that alignment.

---

**A35. How do ISO/IEC 20000-1 and ISO/IEC 27001 complement each other?**

**Answer.** ISO/IEC 20000-1 covers the **whole SMS**: how services are planned, agreed, delivered, supported and improved, including a requirement-level treatment of information security (8.7.3). ISO/IEC 27001 provides a **comprehensive information security management system**, with a detailed risk assessment and treatment methodology and a full reference set of security controls. Organizations with both can use the ISMS to meet 8.7.3 in depth. Service management processes such as change, incident, configuration, supplier and continuity management in turn support many 27001 controls. Because both use the **Annex SL structure**, they can share context analysis, risk methodology, document control, internal audits, management reviews and corrective action processes. **ISO/IEC 27013** and **ISO/IEC 20000-7** give guidance on integration.

---

**A36. Explain the relationship between ITIL and ISO/IEC 20000 to a manager in two or three sentences.**

**Answer.** "ISO/IEC 20000-1 is the international standard that defines **what** a well-run service management system must achieve, and an independent auditor can certify our organization against it. ITIL is the world's most widely used **guidance** on **how** to achieve good service management, and our people can be qualified in it. We use ITIL to design and run our practices, and ISO/IEC 20000-1 to prove, through audit, that our system meets an internationally recognised standard."

---


### Part A3: ITIL (Version 5) Concepts

**A37. Why did ITIL widen its scope from "service management" to "digital product and service management"?**

**Answer.** Organizations now create most of their value through digital products, such as apps, platforms and data services, and consumers experience the product and the service around it as one thing. When product teams (which build features) and service teams (which run and support them) work separately, gaps appear. Features are released that support teams cannot support, operations reports green uptime while users struggle, and nobody owns the end-to-end experience. Version 5 manages products and services together across **one lifecycle**, so that decisions about what to build, how to run it, how to deliver it and how to support it are aligned around the consumer's outcomes and experience. It also reflects the growing importance of experience, sustainability and AI in digital work.

---

**A38. What is the difference between the Operate, Deliver and Support activities, and why does Version 5 separate them?**

**Answer.** **Operate** keeps the live product running to its agreed performance and reliability targets through monitoring, maintenance, patching and capacity work. Its focus is the technical health of the product. **Deliver** makes the product or service available and usable for consumers as agreed, through access, onboarding, communication and quality of delivery. Its focus is the consumer receiving the service. **Support** helps users and restores normal operation when something goes wrong, then feeds lessons back into the product. Its focus is people who need help. ITIL 4 grouped all three under "deliver and support". Separating them makes each kind of work visible and owned. A product can be running perfectly (Operate) yet be poorly onboarded (Deliver), or have excellent onboarding while users still struggle to get help (Support).

---

**A39. Why is the product and service lifecycle described as non-linear? Give an example.**

**Answer.** The eight activities are not phases that each happen once, in order. They interconnect, run in parallel and feed each other in whatever order the work needs. Different versions of a product also sit in different activities at the same time. For example, version 2 of a mobile app is being operated, delivered and supported. Support notices that many users abandon one screen, and that insight goes straight to **Design** for version 3. Meanwhile, a security defect found in **Operate** sends a fix back through **Build** and **Transition** within days. A strict sequence would slow all of this down. A non-linear lifecycle lets organizations respond quickly and learn continuously.

---

**A40. How do value streams relate to the lifecycle activities and to the management practices?**

**Answer.** The **lifecycle activities** are the generic building blocks of the work. A **value stream** is a specific combination of those activities, in the order a particular scenario needs, that takes a trigger, such as demand or an opportunity, to value for a consumer. Examples are "restore service for a user" and "launch a new feature". **Management practices** provide the capabilities used within each step: people and skills, information and tools, suppliers, and processes. For example, the value stream "a customer reports a fault and is working again" uses Support and Operate, perhaps Build and Transition for a fix, and draws on the service desk, incident management, problem management, change enablement and deployment management practices.

---

**A41. Why is flow efficiency often more revealing than the speed of individual steps?**

**Answer.** Consumers experience the **lead time**: how long it takes from their request to the result. Most of that time is usually spent **waiting** between steps, in queues, approvals and hand-offs, not in the work itself. Flow efficiency (process time ÷ lead time) shows how much of the lead time is real work. A value stream with 10% flow efficiency spends 90% of its time waiting, so making each step faster barely changes what the consumer experiences. Removing waits, unnecessary approvals and hand-offs improves lead time much more. This is why value stream mapping measures waiting as carefully as working time.

---

**A42. Why does Version 5 add experience and sustainability to utility and warranty?**

**Answer.** Utility (what a product does) and warranty (whether it works reliably, securely and at scale) remain essential, but they no longer explain whether consumers perceive value. Two products with equal utility and warranty can differ completely in how easy and pleasant they are to use, and consumers choose, adopt and recommend on that basis. This is **experience**, measured through feedback and behaviour, and targeted through XLAs. **Sustainability** reflects the environmental, social and economic impact that customers, employees and regulators increasingly care about, such as energy use, ethical supply chains and responsible disposal. Balancing all four aspects gives a more complete picture of quality and value.

---

**A43. What is the purpose of the ITIL AI Capability Model, and how does it support AI governance?**

**Answer.** The model describes six things AI can do: **creation, curation, clarification, cognition, communication and coordination**. It gives organizations a shared language for understanding and classifying AI use cases, instead of treating "AI" as one thing. This matters for governance because risks depend on what the AI does. Creation raises questions of accuracy and intellectual property. Cognition used for decisions raises fairness and explainability. Coordination by autonomous agents raises questions of control and accountability. By identifying which capabilities a use case relies on, an organization can tailor its policies, human oversight, controls and monitoring to the actual risks. The model is described in the information and technology dimension and does not prescribe specific technologies.

---

**A44. Why does the complexity context of a value stream change how you manage and improve it?**

**Answer.** Different contexts need different approaches. In **ordered** contexts, cause and effect are known, so standard procedures, planned improvement cycles and automation work well. In **complex** contexts, outcomes can only be understood in hindsight, so detailed upfront plans fail. Small, safe-to-fail experiments with fast feedback work better. In **chaotic** situations, the first priority is to act and stabilise; analysis comes after. When the context is **confused**, you must first work out which context applies. Applying a fixed procedure to a complex problem, or endless experiments to routine work, wastes effort and harms outcomes. Recognising the context is part of *think and work holistically*.

---


## Section B: Scenario Questions with Model Answers

*For each scenario, write your own answer first, then compare it with the model answer. The model answers are not the only correct ones. Look for the principles they apply.*

---

**B1. Black Friday outage**

*An online retailer's web shop crashes at 10:00 on Black Friday, its busiest day. Customers cannot check out. Monitoring shows database connections exhausted. Two days earlier, a change increased the number of application servers. The CEO is calling the IT director every 15 minutes.*

**Questions.** (a) How should the incident be handled? (b) What happens after service is restored? (c) Which ISO/IEC 20000-1 requirements apply? (d) What should be improved for next year?

**Model answer.**

- **(a) Handling.**
  - It is a **major incident**: high impact and high urgency, P1. Invoke the **documented major incident procedure** (ISO 8.6.1).
  - Appoint a **major incident manager** and inform **top management**. Set up a regular communication rhythm, for example updates every 30 minutes to the CEO and business, so the CEO does not have to keep calling.
  - Use **swarming**: database, application, network and supplier experts work together.
  - Check the **change schedule**. The recent change that increased the application servers is a prime suspect, because more servers means more database connections.
  - Restore service quickly, for example by increasing the database connection limit as an **emergency change** or by rolling back the change. Record all actions with timestamps.
- **(b) After restoration.**
  - Hold a **major incident review** (ISO 8.6.1) to capture the timeline, decisions, communication effectiveness and lessons.
  - Raise a **problem record**: the root cause may be a capacity design flaw combined with an incomplete change impact assessment. Document the workaround as a **known error** until a permanent fix is deployed through **change enablement**.
- **(c) ISO requirements.** 8.6.1 (major incident criteria, procedure, top management informed, responsible person, review); 8.5.1 (emergency change, change review, failed-change remediation); 8.6.3 (problem and known error); 8.4.2 and 8.4.3 (demand forecasting for peak trading and capacity planning, which were evidently inadequate); 8.7.1 (investigation of unplanned non-availability); 8.3.3 (SLA breach reporting); and possibly 10.1 if a process nonconformity is found, for example if the change was not properly assessed.
- **(d) Improvements.**
  - **Demand management**: business events such as Black Friday should feed **capacity** planning and **load testing** (service validation and testing).
  - The **change risk assessment** for the connection pool should consult the configuration information about dependencies.
  - Put in place a **change freeze** policy or extra scrutiny before peak periods.
  - Set up **monitoring** warning events on database connection usage.
  - Log these items in the **CIR** and track them through the continual improvement model.

---

**B2. The email migration that overwhelmed the service desk**

*A company migrated 3,000 users to a new cloud email platform over one weekend. Technically the migration succeeded, with all mailboxes moved. On Monday, the service desk received four times its normal call volume: users could not find archived emails, mobile devices stopped syncing, and the shared calendar worked differently. Satisfaction dropped sharply.*

**Questions.** Which ITIL guiding principles and practices were neglected, and what should have been done?

**Model answer.**

- **Think and work holistically.** The project focused on the *technical* deployment and neglected the other dimensions: **organizations and people** (training and communication), **information** (knowledge articles for the service desk) and **value streams** (how users actually work with archives, mobile and calendars).
- **Focus on value.** For users, value means "I can do my work", not "my mailbox was moved".
- **Progress iteratively with feedback.** A **phased deployment** with a pilot group would have revealed the mobile and calendar issues before all 3,000 users were affected.
- **Collaborate and promote visibility.** The service desk should have been involved early. It knows which questions users will ask.
- **Practices involved:**
  - **Release management**: the release should include documentation, training and support arrangements, not just components.
  - **Deployment management**: a phased approach.
  - **Service validation and testing**: user acceptance testing with real usage scenarios.
  - **Knowledge management**: FAQs and known issues published before go-live.
  - **Organizational change management**: communication, training and champions.
  - **Service desk**: extra staffing for **early-life support**.
  - **Change enablement**: the impact assessment should cover users and support load.
- In ISO terms this was a change with potential major impact, so it should have gone through **8.5.2 service design and transition**. That route plans training (8.5.2.2), defines acceptance criteria and measurable intended outcomes, and reports outcomes after transition.

---

**B3. The watermelon contract**

*An IT outsourcing provider has met every SLA target for 12 months: 99.95% server availability, 95% of tickets responded to within 15 minutes and 98% of changes successful. The customer has nevertheless given notice that it will retender the contract, saying "IT is slowing our business down."*

**Questions.** Explain what is happening and what the provider should do.

**Model answer.**

- This is the **watermelon effect**: green metrics, red customer experience. The SLA measures **operational outputs**, such as server uptime and ticket *response*, not **outcomes**, such as end-to-end application performance, *resolution* time, the speed of delivering business requests and user experience.
- **Service level management** actions:
  - Re-engage through **customer engagement**. Ask: "What differentiates a good day from a bad day? What slows you down?"
  - Add **business metrics** (for example orders processed per hour and time to onboard a new employee) and **customer feedback** measures (satisfaction and sentiment) to create a **balanced bundle**.
  - Make sure SLAs are linked to **services in the catalogue**, are **genuinely agreed** and are **simply written**. Consider **experience level agreements (XLAs)**.
- **Relationship management.** The provider lacked strategic and tactical relationship building. Appoint a relationship manager, understand the customer's business drivers and bring proposals, not just reports.
- **ISO/IEC 20000-1.** BRM (8.3.2) requires **measuring customer satisfaction** at planned intervals, **reviewing performance trends and outcomes** with customers, and understanding **changes in customer needs**. Any of these, if missing, would be a nonconformity. Management review (9.3) should consider customer feedback. **Focus on value** (5.1, "what constitutes value") was evidently not determined.

---

**B4. Certification with outsourced components**

*A company with 60 IT staff wants ISO/IEC 20000-1 certification within six months. Its infrastructure runs in a public cloud, its service desk is outsourced to a managed service provider (MSP), and the parent company's central network team provides connectivity. The CIO suggests "excluding the outsourced parts from the scope".*

**Questions.** Advise the CIO on scope, control of other parties and the timeline.

**Model answer.**

- **Scope.** The scope is defined by **services, customers and locations**, not by excluding requirements. The organization cannot exclude requirements in clauses 4–10. Because it delivers the services to customers, the outsourced components are **part of those services** and must be **controlled**, not excluded. ISO/IEC 20000-3 gives scope guidance.
- **Control of other parties (8.2.3):**
  - Identify the **other parties**. The cloud provider and the MSP are **external suppliers**, controlled by **contracts** (8.3.4.1). The parent's network team is an **internal supplier**, controlled by a **documented agreement** (8.3.4.2).
  - Ensure contracts and agreements define the scope, requirements, **service level targets**, responsibilities, authorities and **interfaces**.
  - **Integrate** the MSP's incident and request handling into the SMS: shared tool or data, escalation paths, problem and change interfaces.
  - **Measure and review** supplier performance at planned intervals.
  - Include supplier risks in the **risk assessment** (6.1).
  - The organization **retains accountability** and must still operate meaningful parts of the SMS itself, because other parties cannot provide or operate everything.
- **Timeline.** Six months is ambitious but possible for a well-organized 60-person team if the scope is focused. The sequence would be:
  1. Gap analysis.
  2. Policy, plan and documented information.
  3. Processes operating for at least a few months to generate **records**.
  4. At least one **internal audit** cycle and a **management review** by top management before Stage 2.
  5. Stage 1, then Stage 2.
- Consider starting with a **narrow scope**, for example one key service, and extending later. This applies *progress iteratively with feedback* and *start where you are*.

---

**B5. The zero-day patch**

*A critical vulnerability is announced in the VPN appliance used by 5,000 remote staff. It is being actively exploited. The vendor releases a patch at 16:00. The next change advisory meeting is in six days.*

**Questions.** How should this change be handled under ITIL and ISO/IEC 20000-1?

**Model answer.**

- This is an **emergency change**: it must be implemented as soon as possible to address a security risk.
- Use the **expedited process** and the **emergency change authority**, typically a small group of senior managers who understand the business risk, such as the CIO, the CISO and the service owner. Do not wait six days.
- Assess the risk quickly: the risk of exploitation versus the risk of the patch causing an outage. Test as far as time allows, for example on one appliance or in a lab. Prepare a **remediation (backout) plan** (ISO 8.5.1.3).
- **Communicate** to users and the service desk, for example "VPN may disconnect briefly at 20:00". **Documentation may be completed after implementation.**
- Treat it as part of **information security management** (8.7.3): manage the vulnerability, and if exploitation is suspected, handle it as an **information security incident** through incident management with security-based priority.
- Afterwards: **review the change**, record it properly, and update **configuration information** (firmware version). **Change trend analysis** should check whether emergency patching is frequent. If it is, consider a pre-approved **standard change** model for vendor security patches.

---

**B6. The CMDB nobody trusts**

*An audit of a sample of configuration records finds 40% are inaccurate: wrong owners, missing relationships and decommissioned servers still recorded. Change managers no longer use the CMDB for impact analysis.*

**Questions.** What are the likely causes, and how should the organization fix the situation?

**Model answer.**

- **Likely causes.**
  - The scope is too broad: the CMDB tried to record everything.
  - There is no link between **change enablement** and CI updates.
  - There is no automated **discovery**.
  - Ownership of configuration data is unclear.
  - **Verification at planned intervals** (ISO 8.2.6) is not happening.
- **Fixing it.**
  - **Start where you are.** Identify which data *is* accurate and which practices actually need what data.
  - **Focus on value** and **keep it simple.** Reduce the scope to the CIs and relationships needed for change impact analysis, incident diagnosis and service mapping of critical services. Record the minimum attributes: ISO's identification, type, description, relationships and status.
  - **Optimize and automate.** Implement discovery and reconciliation tools, *after* defining the data model.
  - Make **CI updates a mandatory step** in change closure and in release and deployment (ISO 8.5.3).
  - Assign **CI owners**. Run **regular verification and audits**, record discrepancies and correct them.
  - **Progress iteratively.** Fix one critical service at a time and measure accuracy as a KPI.
- Under ISO, the audit result should be handled as a **nonconformity** (10.1), with correction, root cause analysis, corrective action and an effectiveness review.

---

**B7. Classifying internal audit findings**

*The internal audit finds: (1) the last management review did not consider customer feedback or the adequacy of resources; (2) one of eight external supplier contracts has no service level targets; (3) two of 20 sampled normal changes have no recorded approval.*

**Questions.** How serious is each finding, and what should be done?

**Model answer.**

- **(1) Management review missing required inputs (9.3).** The review happened, but it was incomplete. This is typically a **minor nonconformity**. It would become major if reviews were not happening at all or top management was absent. *Correction:* hold a supplementary review covering the missing inputs. *Corrective action:* adopt a standard management review agenda template that lists all required inputs, and have the SMS manager check completeness beforehand.
- **(2) A supplier contract without service level targets (8.3.4.1).** This is an isolated lapse, so it is a **minor nonconformity**. However, check whether that supplier is critical, because the risk could then be higher. *Correction:* agree targets with the supplier and amend the contract. *Corrective action:* use a contract checklist or template covering scope, requirements, targets, responsibilities and interfaces, and add contract review to the supplier management cycle.
- **(3) 10% of sampled changes lack approval (8.5.1.3).** This could indicate a **systemic** control weakness. If unapproved changes are routine, it may be **major**. A small number with an identifiable cause could be **minor**. *Investigate:* were they really unapproved, or were approvals simply not recorded? Did the tool allow the approval step to be bypassed? *Corrective action:* enforce approval steps in the tool workflow, retrain staff, monitor "changes without approval" as a KPI, and analyse whether any of these changes caused incidents.
- For all three, record the nonconformities, causes, actions and results (10.1), review effectiveness later, and report to management review.

---

**B8. "Let's automate onboarding!"**

*New employees currently wait an average of eight working days for their laptop, accounts and access. The process involves 14 hand-offs between HR, IT, security, facilities and managers. A team proposes buying a workflow automation tool and automating the existing process within a month.*

**Questions.** What advice would you give, using the guiding principles?

**Model answer.**

- **Optimize before automating.** Automating 14 hand-offs would only automate the waste.
- **Focus on value.** The outcome is "a new employee productive from day one", so measure lead time to productivity, not task completion.
- **Start where you are.** Map the current **value stream** end to end, measuring wait times versus work times, and find which steps work well.
- **Keep it simple and practical.** Remove non-value-adding approvals and duplicate data entry. Create **standard bundles**, for example "sales starter kit" and "developer kit", as **pre-approved service requests** or standard changes. Trigger IT work automatically from the HR hire event.
- **Collaborate and promote visibility.** Involve HR, security, facilities and hiring managers. Make the flow visible, for example on a Kanban board.
- **Think and work holistically.** Consider people (who owns the onboarding value stream?), information (role-based access models), suppliers (laptop delivery lead times) and processes.
- **Progress iteratively with feedback.** Pilot the redesigned flow with one department and then extend it.
- **Then optimize and automate** with the workflow tool, and **define metrics** such as lead time, first-day readiness and new-joiner satisfaction.
- **Practices:** service request management, IT asset management, information security management (access), supplier management, service catalogue management and relationship management.

---

**B9. Merging after an acquisition**

*Company A, which is ISO/IEC 20000-1 certified, acquires Company B, which is not certified and has its own service desk, tools and processes. The board wants a single IT organization within a year and wants to keep the certificate.*

**Questions.** How should the integration be approached?

**Model answer.**

- **Start where you are.** Assess both organizations objectively. Company B may have better practices in some areas, such as automation or customer focus. Do not assume A's way is always best.
- **Focus on value.** Prioritise integration steps that matter to customers and users, such as a single service desk contact point, consistent SLAs and no drop in service.
- **Collaborate and promote visibility.** Run joint design teams and communicate transparently with staff, who will be anxious. This is **organizational change management** and **workforce and talent management**.
- **Progress iteratively.** Integrate in phases, for example a common front door first, then tools, then processes.
- **Think and work holistically.** Cover culture, contracts with B's suppliers (now **other parties**), information (data migration, CMDB) and value streams.
- **ISO/IEC 20000-1.**
  - Treat the integration as a **change with potential major impact**: plan, design and transition it through **8.5.2**.
  - Update the **context** (4.1), **interested parties** (4.2) and **risks** (6.1).
  - Keep the existing **scope** and certificate for A's services. Plan a **scope extension** to include B's services once B's processes are integrated and operating, with records, internal audits and management review coverage.
  - Inform the **certification body** of the significant change. It may audit the extended scope at a surveillance or special audit.

---

**B10. One application, 30% of incidents**

*A government agency's incident data shows that 30% of all incidents relate to a single legacy case-management application. Most are resolved by restarting a service. Replacing the application would cost €2 million. The vendor offers a patch that may fix a memory leak for €40,000.*

**Questions.** How should problem management handle this, and how do the cost and benefit considerations work?

**Model answer.**

- **Problem identification.** **Trend analysis** of incident records, effectively a **Pareto analysis**, has already identified the problem. Record and prioritise it. With 30% of incidents involved, its risk and impact are high.
- **Problem control.**
  - Analyse the cause with the vendor. Restarts "fixing" the issue suggests a memory or resource leak.
  - Document the **workaround** (a controlled restart, possibly automated as a scheduled standard change in quiet hours) and create a **known error** record so the service desk can resolve incidents immediately.
  - Consider all four dimensions. For example, users may trigger the leak through a particular usage pattern.
- **Error control.**
  - Evaluate permanent solutions: the €40,000 patch, or the €2 million replacement.
  - Error control raises a **change request** only where it is **justified in terms of cost, risk and benefit**.
  - The patch looks clearly justified. Calculate the cost of the incidents (agent time, user downtime and the reputational impact on public services) against €40,000.
  - Implement the patch through **change enablement**, with testing (**service validation and testing**) and a backout plan.
  - Re-assess the known error regularly. If the patch fails, the replacement becomes a portfolio and business case decision (**portfolio management**, **service financial management**). Record it in the **CIR**.
- **ISO 8.6.3.** Trend analysis, root cause analysis, known errors made available to incident management, changes made in line with the change policy, and **monitoring the effectiveness of problem resolution**, for example checking that incident volume for the application drops after the patch.

---


## Section C: Mock Exam (40 Questions, 60 Minutes)

**Instructions.** Set a timer for **60 minutes**. Answer all 40 questions without looking at the book. Questions 1–26 cover ITIL and questions 27–40 cover ISO/IEC 20000. The pass mark used by ITIL Foundation is **65% (26/40)**. Aim for **at least 30/40** before a real exam. The answer key and explanations follow the exam.

---

**1.** Which is the ITIL 4 definition of a *service*?

- A) A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks
- B) A configuration of an organization's resources designed to offer value for a consumer
- C) A formal description of one or more services, designed to address the needs of a target consumer group
- D) A cooperation between a service provider and a service consumer

**2.** Which role authorises budget for service consumption?

- A) User
- B) Sponsor
- C) Customer
- D) Service provider

**3.** A company subscribes to a service that includes cloud storage space for its files. Which component of a service offering is the storage space?

- A) Goods
- B) Service action
- C) Access to resources
- D) Utility

**4.** Which of the following describes the *warranty* of a payroll service?

- A) The service calculates tax deductions automatically
- B) The service supports 2,000 concurrent users during month-end processing
- C) The service produces payslips in PDF format
- D) The service allows managers to approve overtime

**5.** Which dimension of service management includes the contracts and agreements between an organization and the other organizations involved in delivering its services?

- A) Organizations and people
- B) Information and technology
- C) Partners and suppliers
- D) Value streams and processes

**6.** What are the inputs to the Service Value System?

- A) Opportunity and demand
- B) Value and outcomes
- C) Products and services
- D) Practices and processes

**7.** Which guiding principle recommends observing the current state directly wherever possible, because measurement alone can be misleading?

- A) Focus on value
- B) Keep it simple and practical
- C) Start where you are
- D) Think and work holistically

**8.** Which guiding principle recommends that a workflow should be simplified and optimised *before* it is automated?

- A) Optimize and automate
- B) Start where you are
- C) Focus on value
- D) Collaborate and promote visibility

**9.** "Collaboration does not mean consensus" is guidance for applying which principle?

- A) Think and work holistically
- B) Focus on value
- C) Progress iteratively with feedback
- D) Collaborate and promote visibility

**10.** "Comprehend the whole, but do something" is guidance for applying which principle?

- A) Keep it simple and practical
- B) Progress iteratively with feedback
- C) Start where you are
- D) Optimize and automate

**11.** What is the purpose of the *engage* value chain activity?

- A) To ensure a shared understanding of the vision, current status and improvement direction
- B) To ensure that services are delivered and supported according to agreed specifications
- C) To ensure that service components are available when and where they are needed
- D) To provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders

**12.** Which value chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?

- A) Design and transition
- B) Deliver and support
- C) Obtain/build
- D) Plan

**13.** Which statement about the continual improvement model is correct?

- A) It can only be used for large organizational transformations
- B) It provides a structured, iterative approach that can be applied at any level, starting with "What is the vision?"
- C) It must only be used by a dedicated improvement team
- D) It ends permanently after the step "Did we get there?"

**14.** What is the purpose of the *incident management* practice?

- A) To minimize the negative impact of incidents by restoring normal service operation as quickly as possible
- B) To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents
- C) To capture demand for incident resolution and service requests
- D) To ensure that no incidents ever occur

**15.** How should incidents be prioritised?

- A) In the order in which they are received
- B) According to the seniority of the user
- C) Based on an agreed classification, so that incidents with the highest business impact are resolved first
- D) According to which support team has the shortest queue

**16.** What is a *known error*?

- A) An incident that cannot be resolved
- B) A cause of one or more incidents
- C) A solution that reduces the impact of an incident
- D) A problem that has been analysed and has not been resolved

**17.** Which phase of problem management identifies potential permanent solutions that may result in a change request?

- A) Problem identification
- B) Error control
- C) Problem control
- D) Incident control

**18.** Which of the following is the best example of a *standard change*?

- A) Adding memory to a server using a documented, pre-authorised procedure that has been assessed as low-risk
- B) Upgrading the core banking platform to a new major version
- C) Applying an urgent patch to stop an active cyber-attack
- D) Migrating the data centre to a new hosting provider

**19.** What is a *change authority*?

- A) The person who requests a change
- B) The team that builds and tests a change
- C) A schedule of planned changes
- D) A person or group responsible for authorizing a change

**20.** What is the purpose of the *service request management* practice?

- A) To capture demand for incident resolution and service requests
- B) To restore normal service operation as quickly as possible
- C) To support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner
- D) To maximize the number of successful service and product changes

**21.** Which statement about the service desk is correct?

- A) Service desk staff must be highly technical specialists in all technologies
- B) It should be the entry point and single point of contact for the service provider with all of its users, and it needs empathy and an understanding of the business
- C) It must always be located in a single physical location
- D) It should only handle telephone calls

**22.** What is the purpose of the *service level management* practice?

- A) To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels
- B) To ensure that services deliver agreed levels of availability
- C) To provide a single source of consistent information on all services and service offerings
- D) To set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets

**23.** What is the purpose of the *monitoring and event management* practice?

- A) To systematically observe services and service components, and record and report selected changes of state identified as events
- B) To ensure that accurate information about CIs is available when and where it is needed
- C) To protect the information needed by the organization to conduct its business
- D) To move new or changed components to live environments

**24.** What is the purpose of the *IT asset management* practice?

- A) To ensure that accurate and reliable information about the configuration of services is available
- B) To make new and changed services and features available for use
- C) To plan and manage the full lifecycle of all IT assets
- D) To protect the information needed by the organization

**25.** What is the purpose of the *service configuration management* practice?

- A) To plan and manage the full lifecycle of all IT assets
- B) To ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed
- C) To systematically observe services and service components
- D) To move new or changed hardware and software to live environments

**26.** What is the purpose of the *release management* practice?

- A) To move new or changed hardware, software, documentation, processes, or any other component to live environments
- B) To maximize the number of successful service and product changes
- C) To ensure that new or changed products and services meet defined requirements
- D) To make new and changed services and features available for use

**27.** Against which part of the ISO/IEC 20000 series can an organization be certified?

- A) ISO/IEC 20000-1
- B) ISO/IEC 20000-2
- C) ISO/IEC 20000-10
- D) ISO/IEC TR 20000-11

**28.** A small organization wants to exclude service continuity management (8.7.2) from its SMS because it has never had a disaster. Can it still claim conformity to ISO/IEC 20000-1:2018?

- A) Yes, if it documents a justification
- B) Yes, if its customers agree
- C) No. Exclusion of any requirement in clauses 4 to 10 is not acceptable
- D) Yes, because clause 8 requirements are optional

**29.** What must the SMS scope statement include?

- A) The number of employees in the organization
- B) The services in scope and the name of the organization managing and delivering them
- C) The ITIL practices that have been adopted
- D) The requirements that have been excluded

**30.** Which of the following is mandatory SMS documented information according to clause 7.5.4?

- A) An ITIL maturity assessment
- B) An organization chart for the whole company
- C) A list of all users
- D) The service continuity plan(s)

**31.** Which of the following is a responsibility of top management according to clause 5.1?

- A) Approving every normal change personally
- B) Performing all internal audits
- C) Ensuring that what constitutes value for the organization and its customers is determined
- D) Designing the CMDB data model

**32.** Which of the following must be managed through *service design and transition* (8.5.2)?

- A) Resetting a user's password
- B) The removal of a service
- C) Replacing a printer toner cartridge
- D) Adding a user to a distribution list

**33.** What does clause 8.3.4.1 require for each external supplier?

- A) A verbal agreement is sufficient
- B) Only a purchase order is required
- C) The supplier becomes responsible for meeting the SMS requirements
- D) A documented contract that includes or references the scope, requirements, service level targets or other obligations, and the authorities and responsibilities of both parties

**34.** Which information must be recorded for configuration items according to clause 8.2.6?

- A) Unique identification, type, description, relationship with other CIs, and status
- B) Purchase price and depreciation
- C) User satisfaction scores
- D) Incident counts only

**35.** According to clause 8.6.1, who must be informed of major incidents?

- A) The certification body
- B) All users
- C) Top management
- D) External suppliers only

**36.** When must service continuity plans be tested?

- A) Only before the certification audit
- B) At planned intervals and after major changes to the service environment
- C) Only after a disaster has occurred
- D) Testing is optional

**37.** What must internal audits determine according to clause 9.2?

- A) Only the financial performance of the services
- B) Only whether ITIL is being used
- C) Only whether suppliers comply with their contracts
- D) Whether the SMS conforms to the organization's own requirements and to the requirements of ISO/IEC 20000-1, and is effectively implemented and maintained

**38.** Who performs the management review?

- A) Top management
- B) The internal auditor
- C) The certification body
- D) The customers

**39.** Which finding is most likely to be classified as a *major* nonconformity at a certification audit?

- A) One incident record has the wrong category
- B) There are minor typographical errors in the change management policy
- C) No internal audit has ever been performed
- D) The auditor suggests adding a dashboard to the service report

**40.** In ISO/IEC 20000-1:2018, which term replaced "service provider" from the 2011 edition?

- A) The supplier
- B) The organization
- C) The customer
- D) The service owner

---


### Mock Exam: Answer Key and Explanations

| Q | Ans | Explanation |
|---|---|---|
| 1 | **A** | B is a product, C a service offering and D a service relationship. |
| 2 | **B** | The sponsor authorises budget. The customer defines requirements and the user uses the service. |
| 3 | **C** | Ownership of cloud storage is not transferred, so it is access to resources. |
| 4 | **B** | Capacity is a warranty aspect. A, C and D are functionality, which is utility. |
| 5 | **C** | Partners and suppliers. |
| 6 | **A** | Opportunity and demand go in, and value comes out. |
| 7 | **C** | Start where you are: observe directly and use measurement carefully. |
| 8 | **A** | Optimize and automate: simplify and optimise before automating. |
| 9 | **D** | Collaborate and promote visibility. |
| 10 | **B** | Progress iteratively with feedback. |
| 11 | **D** | A is plan, B is deliver and support, and C is obtain/build. |
| 12 | **C** | Obtain/build: "when and where they are needed". |
| 13 | **B** | The model applies at all levels, is iterative and starts with the vision. Improvement never permanently ends. |
| 14 | **A** | B is problem management and C is the service desk. |
| 15 | **C** | Agreed classification based on business impact, typically impact and urgency. |
| 16 | **D** | A known error is a problem that has been analysed and not resolved. B defines a problem and C a workaround. |
| 17 | **B** | Error control may raise a change request when justified by cost, risk and benefit. |
| 18 | **A** | Low-risk, documented, pre-authorised. C is an emergency change. B and D are normal changes. |
| 19 | **D** | The person or group responsible for authorising a change. |
| 20 | **C** | A is the service desk. |
| 21 | **B** | The single point of contact, which needs empathy and business understanding. |
| 22 | **D** | A is relationship management, B availability management and C service catalogue management. |
| 23 | **A** | B is service configuration management, C information security and D deployment. |
| 24 | **C** | A is service configuration management and B release management. |
| 25 | **B** | A is IT asset management. |
| 26 | **D** | A is deployment management. |
| 27 | **A** | Only Part 1 contains certifiable requirements. |
| 28 | **C** | No exclusions in clauses 4–10. The organization scales its continuity management to its size instead. |
| 29 | **B** | Services in scope plus the name of the organization. |
| 30 | **D** | 7.5.4(d) names the service continuity plan(s). |
| 31 | **C** | Determining value is an explicit 5.1 responsibility. |
| 32 | **B** | Removal of a service is routed to 8.5.2. The others are service requests or standard changes. |
| 33 | **D** | A documented contract with these elements. Accountability stays with the organization. |
| 34 | **A** | I-T-D-R-S: identification, type, description, relationships and status. |
| 35 | **C** | Top management. |
| 36 | **B** | At planned intervals and after major changes. |
| 37 | **D** | Conformity to both sets of requirements, plus effective implementation and maintenance. |
| 38 | **A** | Top management. |
| 39 | **C** | The total absence of a required element (9.2) is a major nonconformity. A and B are minor, and D is an OFI. |
| 40 | **B** | "The organization". |

### Interpreting your score

| Score | Interpretation | Next step |
|---|---|---|
| **36–40** | Excellent: exam-ready | Light revision of Appendix C on exam day |
| **30–35** | Good: likely to pass | Revise the chapters behind each wrong answer. Redo those chapters' questions |
| **26–29** | Borderline pass | Spend another day on the weak chapters. Re-read the key takeaways for all chapters. Retake the mock exam after 48 hours |
| **Below 26** | Not yet ready | Repeat the study plan for weak areas, focusing on definitions (Chapters 2, 4, 5, 7, 8) and clause structure (Chapters 11–13) |

**Map your mistakes to chapters:** Q1–4 → Chapter 2; Q5 → Chapter 3; Q6–10 → Chapter 4; Q11–13 → Chapter 5; Q14–26 → Chapters 6–8; Q27–30 → Chapters 11–12; Q31 → Chapter 12; Q32–36 → Chapter 13; Q37–39 → Chapter 14; Q40 → Chapter 11.

---

### Final Words

You have now covered the core of ITIL 4 (and what changed in Version 5), the clauses of ISO/IEC 20000-1:2018, and how the two fit together in practice. In the final hours before an exam:

1. Read **Appendix C** (quick reference) twice.
2. Re-test only your **"weak areas"** list.
3. Recite aloud: the **7 guiding principles**, the **4 dimensions**, the **6 value chain activities**, the **7 continual improvement steps**, the **3 types of change**, the **3 phases of problem management**, the **clause 4–10 titles** and the **seven clause 8 groups**.
4. In the exam, read every word of each question. Watch for "**NOT**", "**BEST**", "**MOST**" and "**FIRST**", and eliminate the clearly wrong options before choosing.

Good luck.

---

