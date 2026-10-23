# Chapter 2: Key Concepts of Service Management

**Suggested study time:** 1.5–2 hours (Day 1)

**Learning objectives.** After this chapter you should be able to:

- define value, value co-creation, organization, service provider and service consumer
- distinguish the customer, user and sponsor roles
- define product, service and service offering, and name the three components of a service offering
- explain service relationships and the service relationship model
- define outcome, output, cost and risk, and explain how services remove or impose costs and risks
- define utility and warranty and explain why both are needed

> **Exam tip:** this chapter is the **most heavily examined definitions area** of ITIL Foundation. Learn the bold definitions word for word. Examiners often offer four options that differ by only one word.

---

## 2.1 Value and Value Co-creation

**Value:** "the perceived benefits, usefulness, and importance of something."

Three ideas are built into this definition:

1. **Value is perceived.** It is subjective. The same service can be very valuable to one consumer and worthless to another.
2. **Value is not only financial.** Benefits can be convenience, safety, reputation, time saved, compliance or peace of mind.
3. **Value is co-created.** Value is created through active collaboration between providers, consumers and other organizations in the service ecosystem.

**From "delivering value" to "co-creating value"**

Older thinking saw value flowing one way: the provider *delivers* value to a passive consumer. ITIL 4 rejects this. A consumer only gets value if it **actively takes part**. It defines requirements, provides information, makes resources available, uses the service correctly and gives feedback. A training course delivers little value to a student who never attends. A CRM system delivers little value if sales staff do not enter data.

> **Remember:** providers do not *deliver* value. They **facilitate outcomes**, and value is **co-created** with consumers.

### Value for different stakeholders

Value is created for more than just the consumer. The table below gives typical examples.

| Stakeholder | Examples of value they receive |
|---|---|
| **Service consumers** | Benefits achieved; costs and risks optimised |
| **Service provider** | Funding from the consumer; business development; improved image and reputation |
| **Service provider's employees** | Financial and non-financial incentives; career and professional development; a sense of purpose |
| **Society and community** | Employment; taxes; the organization's contribution to the community |
| **Charitable organizations** | Financial and non-financial contributions from commercial organizations |
| **Shareholders** | Financial benefits such as dividends; a sense of assurance and stability |

---

## 2.2 Organizations, Service Providers and Service Consumers

**Organization:** "a person or a group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives."

Organizations range from a single person to large, complex structures such as governments and multinational corporations.

### Service provider and service consumer

- A **service provider** is an organization that provides services to others. It can be an *internal* IT department providing services to other business units, or an *external* company such as a cloud provider or managed service provider.
- A **service consumer** is an organization that receives and uses services.

**The same organization is usually both.** An IT department consumes services from a cloud provider, an internet provider and software vendors. It provides services to the rest of the business, which in turn provides services to its own customers.

### Consumer roles: customer, user and sponsor

ITIL 4 separates three roles within service consumption:

| Role | ITIL 4 definition | In short |
|---|---|---|
| **Customer** | "A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption." | Decides *what* is needed and owns the results |
| **User** | "A person who uses services." | Actually *uses* the service |
| **Sponsor** | "A person who authorizes budget for service consumption." | *Pays* for it, or approves the money |

**Example of different people:** a hospital buys a new patient-scheduling service.

- The **sponsor** is the Chief Financial Officer, who approves the budget.
- The **customer** is the Head of Outpatient Services, who defines the requirements and is accountable for the outcomes.
- The **users** are the receptionists, nurses and doctors who use the system every day. Patients can also be users if they book appointments online.

**Example of one person in all three roles:** you buy a personal mobile phone plan. You choose it (customer), pay for it (sponsor) and use it (user).

> **Exam tip:** a classic question describes a scenario and asks "which role is this person playing?" Ask yourself three questions in turn. Who *pays*? That is the sponsor. Who *defines requirements and is responsible for outcomes*? That is the customer. Who *uses* it? That is the user.

### Other stakeholders

Beyond providers and consumers there are many other stakeholders, such as shareholders, employees, partners, suppliers, regulators, communities and society. Successful service management considers **all** stakeholders' value, not only the paying customer's.

---

## 2.3 Products and Services

### Products

**Product:** "a configuration of an organization's resources designed to offer value for a consumer."

- Resources are configured from the **four dimensions** (Chapter 3): people, information and technology, partners and suppliers, value streams and processes.
- A product is typically complex. The consumer sees only **part** of it. The rest, such as data centres, staff, processes and contracts, remains hidden.
- One product can be the basis of several **service offerings** for different consumer groups.

### Services

**Service:** "a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks."

Read the definition slowly. It contains four key ideas:

1. **Enabling value co-creation:** the service does not create value alone.
2. **Facilitating outcomes:** the customer wants a result, such as paying employees on time, not the technology itself.
3. **Outcomes customers want to achieve:** the customer's perspective defines success.
4. **Without having to manage specific costs and risks:** the customer avoids owning certain costs and risks. A service never removes *all* costs and risks.

> **Exam tip:** the ITIL v3 definition was "a means of delivering value to customers by facilitating outcomes customers want to achieve without the **ownership** of specific costs and risks." ITIL 4 changed *delivering* to **enabling value co-creation**, and *ownership* to **having to manage**. If an option says "delivering value", it is the old definition.

### Service offerings

**Service offering:** "a formal description of one or more services, designed to address the needs of a target consumer group. A service offering may include **goods**, **access to resources**, and **service actions**."

| Component | Meaning | Ownership | Examples |
|---|---|---|---|
| **Goods** | Physical items supplied to the consumer | **Transferred** to the consumer, who becomes responsible for their future use | A mobile phone handset; a laptop that becomes the user's property; a physical server sold to the customer |
| **Access to resources** | The consumer is granted access to resources under agreed terms (time, volume, licence) | **Not transferred**: the provider keeps ownership | Access to a mobile network; cloud storage space; a SaaS application; a software licence |
| **Service actions** | Activities performed by the provider to address a consumer need | Not applicable: these are actions, not things | User support; repairing or replacing equipment; installing software; password resets |

**Worked example: a mobile phone plan**

- *Goods:* the handset, if it is sold to the customer
- *Access to resources:* the mobile network, data allowance and cloud backup space
- *Service actions:* technical support, handset repair and number porting

**Several offerings from one product.** The same mobile product can be packaged as a *Basic* offering (limited data, standard support), a *Business* offering (more data, priority support, device management) or a *Family* offering. Each offering targets a different consumer group.

---

## 2.4 Service Relationships

**Service relationship:** "a cooperation between a service provider and service consumer. Service relationships include **service provision**, **service consumption**, and **service relationship management**."

| Element | Definition | Typical activities |
|---|---|---|
| **Service provision** | "Activities performed by an organization to provide services." | Managing the provider's resources configured to deliver the service; ensuring users can access these resources; fulfilling agreed service actions; managing service performance and continual improvement; supplying goods |
| **Service consumption** | "Activities performed by an organization to consume services." | Managing the consumer's own resources needed to use the service (for example network access and trained staff); service actions performed by users, such as using the provider's resources and requesting service actions; receiving and acquiring goods |
| **Service relationship management** | "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings." | Reviewing service performance together; agreeing changes; handling feedback and complaints; planning future needs |

### The service relationship model

Organizations form **chains** of service relationships:

1. **Organization A** (for example a cloud provider) configures its resources into a **product** and creates **service offerings**.
2. **Organization B** (for example an online retailer) consumes the cloud service. Combined with its own resources, the cloud service creates **new resources** for B: a hosted web shop.
3. B configures those new resources into **its own products and service offerings** for **Organization C**, the retailer's customers.

Every organization in the chain is a **provider and a consumer at the same time**. Value is co-created at each link. The whole network of organizations working together is often called the **service ecosystem** or **value network**.

> **In practice:** when the cloud provider has an outage, the retailer's customers cannot shop. That is why service relationships, including supplier management and agreements, are critical. A provider's quality depends on the quality of its own suppliers.

---

## 2.5 Value: Outcomes, Costs and Risks

To decide whether a service is valuable, consumers weigh the **outcomes** it facilitates against the **costs** and **risks** involved.

### Outputs and outcomes

| Term | ITIL 4 definition | Example |
|---|---|---|
| **Output** | "A tangible or intangible deliverable of an activity." | A monthly sales report; a resolved incident ticket; a deployed release |
| **Outcome** | "A result for a stakeholder enabled by one or more outputs." | The sales director makes better pricing decisions; the user can work again; customers can use a new feature |

> **Remember:** **outputs are what we produce; outcomes are what the stakeholder achieves.** A service provider helps the consumer achieve outcomes by producing outputs. A service can produce perfect outputs and still fail to deliver the outcome, for example a report delivered on time that nobody can use.

### Costs

**Cost:** "the amount of money spent on a specific activity or resource."

From the consumer's perspective, services involve two kinds of cost:

| Type | Examples |
|---|---|
| **Costs removed** from the consumer (part of the value proposition) | Cost of staff, hardware, software, facilities or expertise the consumer no longer needs to own |
| **Costs imposed** on the consumer (the cost of using the service) | The price paid to the provider; training users; network connectivity; procurement and contract management; integration effort |

### Risks

**Risk:** "a possible event that could cause harm or loss, or make it more difficult to achieve objectives. Can also be defined as uncertainty of outcome, and can be used in the context of measuring the probability of positive outcomes as well as negative outcomes."

| Type | Examples |
|---|---|
| **Risks removed** from the consumer | Failure of the consumer's own server hardware; lack of skilled staff; outdated technology |
| **Risks imposed** on the consumer | A security breach at the provider affecting the consumer's data; provider outage; vendor lock-in; dependency on the provider's financial health |

**How the consumer helps reduce risk.** Because value is co-created, the consumer also contributes to reducing risk by:

- actively taking part in **defining requirements** and clarifying the required outcomes
- clearly communicating **critical success factors** and **constraints**
- making sure the provider has **access to the consumer's resources** it needs, such as data, people and systems

> **Remember:** a service is valuable when it facilitates the desired **outcomes** while **optimising** costs and risks. It does not need to eliminate them.

---

## 2.6 Utility and Warranty

To facilitate outcomes, a service must offer both **utility** and **warranty**.

| | **Utility** | **Warranty** |
|---|---|---|
| **ITIL 4 definition** | "The functionality offered by a product or service to meet a particular need." | "Assurance that a product or service will meet agreed requirements." |
| **In short** | *What the service does* | *How the service performs* |
| **Phrase** | **Fit for purpose** | **Fit for use** |
| **Typical aspects** | Features, functions, supported tasks, removal of constraints | **Availability**, **capacity**, **security**, **continuity** and performance levels |
| **Typically documented in** | Service descriptions and requirements | Service level agreements (SLAs) |

**Worked example: a video-conferencing service**

- *Utility:* users can schedule meetings, join by video or phone, share screens and record meetings.
- *Warranty:* 99.9% availability during business hours, up to 500 concurrent participants, end-to-end encryption, and recovery within four hours if a data centre fails.

**Why both are needed.** A service with excellent features that is constantly down has utility but no warranty, so it is useless. A service that is always available but cannot do what users need has warranty but no utility, so it is also useless. **Value requires both.**

> **Exam tip:** "fit for **purpose**" is **utility**. "Fit for **use**" is **warranty**. A handy memory aid: *U*tility answers "what can yo*U* do?", and *W*arranty answers "*W*ill it work when I need it?"

---

## 2.7 Bringing It Together: A Worked Example

A mid-sized law firm moves from running its own email servers to a cloud email service.

| Concept | Application |
|---|---|
| **Service provider** | The cloud email company |
| **Service consumer** | The law firm |
| **Sponsor** | The managing partner who approves the subscription budget |
| **Customer** | The IT manager, who defined the requirements (security, archiving for legal retention, mobile access) and owns the outcome |
| **Users** | Lawyers and support staff |
| **Service offering** | "Business Premium" plan: *access to resources* (mailboxes, 100 GB storage, archiving) and *service actions* (24/7 support, migration assistance). There are no goods |
| **Outputs** | Mailboxes provisioned; emails delivered |
| **Outcomes** | Lawyers communicate securely with clients from anywhere; the firm meets its legal record-retention obligations |
| **Costs removed** | Server hardware, licences, backup infrastructure and the time of an email administrator |
| **Costs imposed** | Subscription fee, migration effort, staff training and better internet connectivity |
| **Risks removed** | Failure of ageing in-house servers; having only one person with email knowledge |
| **Risks imposed** | Dependency on the provider; data-residency concerns; provider outages |
| **Utility** | Email, calendar, archiving, eDiscovery and mobile access |
| **Warranty** | 99.9% availability SLA, encryption, geo-redundant data centres and a 1-hour recovery point objective |
| **Service relationship management** | Quarterly service reviews between the IT manager and the provider's account manager |

---

## Key Takeaways: Chapter 2

- **Value** is "the perceived benefits, usefulness, and importance of something". It is subjective and is **co-created** through active collaboration.
- **Service consumer roles:** the **customer** defines requirements and owns outcomes, the **user** uses the service and the **sponsor** authorises budget. One person can hold several roles.
- **Product:** a configuration of an organization's resources designed to offer value. **Service:** enables value co-creation by facilitating outcomes, without the customer having to manage specific costs and risks.
- **Service offering** = **goods** (ownership transferred) + **access to resources** (ownership not transferred) + **service actions**.
- **Service relationship** = service provision + service consumption + service relationship management. Organizations are both providers and consumers in chains of relationships.
- **Output** = a deliverable. **Outcome** = a result for a stakeholder enabled by outputs.
- Services **remove** some costs and risks and **impose** others. Value means optimising these against outcomes.
- **Utility** = fit for purpose, *what it does*. **Warranty** = fit for use, *how it performs*: availability, capacity, security and continuity. **Both are required** for value.

---

## Check Your Knowledge: Chapter 2

*Answers are in Appendix A.*

**Multiple choice**

**2.1** What is the ITIL 4 definition of *value*?

- A) The perceived benefits, usefulness, and importance of something
- B) The amount of money a consumer is willing to pay for a service
- C) The functionality offered by a product or service to meet a particular need
- D) Assurance that a product or service will meet agreed requirements

**2.2** Which role defines the requirements for a service and takes responsibility for the outcomes of service consumption?

- A) User
- B) Sponsor
- C) Customer
- D) Supplier

**2.3** A department head approves the budget for a new HR system but will never use it. Which role is the department head playing?

- A) Customer
- B) Sponsor
- C) User
- D) Service provider

**2.4** What is a *service offering*?

- A) A configuration of an organization's resources designed to offer value for a consumer
- B) A formal description of one or more services, designed to address the needs of a target consumer group
- C) A documented agreement between a service provider and a customer
- D) A cooperation between a service provider and a service consumer

**2.5** An employee is given a mobile phone that becomes their personal property. Which component of a service offering is this?

- A) Goods
- B) Access to resources
- C) Service action
- D) Utility

**2.6** Which is the correct definition of an *outcome*?

- A) A tangible or intangible deliverable of an activity
- B) A result for a stakeholder enabled by one or more outputs
- C) The functionality offered by a service
- D) A possible event that could cause harm or loss

**2.7** Which of the following is an example of a risk *imposed* on a consumer by a service?

- A) Failure of the consumer's own server hardware
- B) A lack of skilled staff to run the consumer's own infrastructure
- C) A security breach at the provider that exposes the consumer's data
- D) Ageing technology in the consumer's own data centre

**2.8** What is *warranty*?

- A) The functionality offered by a product or service to meet a particular need
- B) Assurance that a product or service will meet agreed requirements
- C) The perceived benefits, usefulness, and importance of something
- D) A result for a stakeholder enabled by one or more outputs

**2.9** Which of the following describes the *utility* of a video-conferencing service?

- A) The service is available 99.9% of the time during business hours
- B) The service allows users to schedule meetings, join by video and share screens
- C) The service supports up to 500 concurrent participants
- D) The service can be recovered within four hours after a disaster

**2.10** What is *service relationship management*?

- A) Activities performed by an organization to provide services
- B) Activities performed by an organization to consume services
- C) Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings
- D) Activities performed by a supplier to manage its own contracts

**2.11** Which statement about value is correct according to ITIL 4?

- A) Value is delivered by the provider to a passive consumer
- B) Value is co-created through active collaboration between providers, consumers and other organizations
- C) Value is defined only by the service provider
- D) Value is always measured in financial terms

**2.12** Which is the correct ITIL 4 definition of a *product*?

- A) A means of enabling value co-creation by facilitating outcomes that customers want to achieve
- B) A configuration of an organization's resources designed to offer value for a consumer
- C) A collection of goods sold to a customer
- D) A version of a service made available for use

**2.13** How can service consumers help reduce the risks of a service?

- A) By refusing to share information about their business with the provider
- B) By actively participating in the definition of requirements and clearly communicating critical success factors and constraints
- C) By transferring all of their risks to the provider through the contract
- D) By paying a higher price for the service

**Short answer**

**2.14** Distinguish an *output* from an *outcome* using an example from your own work or studies.

**2.15** Explain how one person can be customer, user and sponsor at the same time. Then give an example in which the three roles are held by three different people.

**2.16** Describe the three components of a service offering for a "managed laptop" service provided by an IT department to employees.

**2.17** Explain, with an example, why both utility and warranty are needed for a service to create value.

---

