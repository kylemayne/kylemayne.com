---
title: "SaaS Isn't Dead. Agents Are About to Make It Bigger."
description: "Agents shift AI costs to users, increase platform activity, and push SaaS toward API-first infrastructure, making oversight and trust the new UX frontier."
pubDate: 2026-05-26
---

In February, $285 billion was wiped from global SaaS market capitalisations in about 24 hours. Atlassian reported its first-ever decline in enterprise seat counts. Analysts were falling over themselves to declare the SaaSpocalypse. The logic was straightforward: if AI agents do the work, why keep paying for the seats?

I get it. But I think that framing misses something important.

## The bill nobody talked about

Here's what got buried in the coverage: building AI into a product is genuinely expensive. A traditional SaaS company might spend 10 to 20 percent of revenue on cost of goods. An AI-first SaaS can see 40 to 50 percent eaten up by inference compute, model hosting, and data costs. Every smart suggestion, every generated summary, every AI-assisted action costs tokens. And until recently, the vendor was picking up that tab.

When someone connects Claude or ChaptGPT to a SaaS product, something quietly shifts. The token costs land on the user, not the platform. The SaaS company still gets the action, the workflow, the data. It just doesn't get the bill anymore. That's not a pricing tweak. It's a structural change to the unit economics of the whole category.

I'll admit the first time I thought this through properly it felt almost too clean. Like the kind of insight that sounds right but probably has a catch. I'm still looking for the catch.

## The volume argument

The seat compression story assumes a straight swap: fewer humans, fewer seats. But that only holds if agents replace users rather than multiply what each user can do.

Gartner projects that 40 percent of enterprise applications will include task-specific AI agents by the end of 2026, up from less than 5 percent last year. Those agents need to authenticate, read data, trigger workflows, update records, and call APIs. In the SaaS world, that means a seat or a billable action either way. One person who previously held a single seat might now be running several agents in parallel across the same tools. The number of humans stays flat. The activity through the platform goes up considerably.

Salesforce has moved through three distinct pricing models for Agentforce in under a year. That's not a company thrashing. That's a company that knows the demand is real and is working out what to charge for it. Worth paying attention to.

## MCP and the infrastructure bet

The quieter story underneath all of this is MCP. When Anthropic donated the Model Context Protocol to the Linux Foundation late last year it stopped being a product decision and became infrastructure, the same way HTTP stopped being Berners-Lee's project and became the web. Salesforce has since exposed its entire platform through it, not as a beta, as the actual architecture. When the largest CRM on the planet rebuilds its access layer so agents can operate without a browser, that's not a feature announcement. That's a signal.

The interface stops being the point. The API becomes the product. Agents don't need a well-designed dashboard. They need a reliable endpoint, clean data, and clear permissions. Established SaaS platforms, with years of integrations and compliance infrastructure already in place, are arguably better positioned for that world than anyone building from scratch right now.

## The interface isn't going away. It's changing audience.

The SaaS companies at risk aren't the ones with bad interfaces. They're the ones where a polished dashboard is the only defensible thing they have. Agents depend on data, integrations, and trust infrastructure. An agent handling candidate screening needs the full applicant tracking record, the interview feedback, the historical hiring patterns. An agent managing supplier relationships needs the vendor contacts, the approval workflows, the chart of accounts structure configured over years of real use. That stuff doesn't move easily. It accumulates through real usage inside platforms people have been paying for. It doesn't live in the model.

But here's where it gets interesting from a design perspective. The human-facing interface doesn't disappear. It shifts purpose. Someone still needs to set up what the agent can and can't do, review what it's done, intervene when it gets it wrong, and understand why it made the calls it made. Oversight, configuration, trust. These are deeply human problems that need careful design. And almost nobody is doing that work well yet.

The most underexplored UX challenge in the industry right now isn't how humans use software. It's how humans direct, monitor, and ultimately trust software that's acting on their behalf. That's a wide open space.

## The reframe that matters

Nobody knows exactly how this shakes out. The pricing models are still being figured out in real time, the Salesforce example being a decent illustration of that. And there are genuine risks for SaaS companies that sit still and assume the moat holds without any effort.

But the SaaSpocalypse framing treats agents as a threat to count against. The more useful question is what happens when you treat them as a new category of user. One that doesn't need onboarding, scales without a sales motion, runs at hours nobody is watching, and pays for its own inference.

The platforms that ask that question seriously are the ones that will look smart in a few years. The ones waiting for the disruption to pass probably won't get the chance.

---

*Further reading: [Accenture on AI rewriting the SaaS value equation](https://www.accenture.com/us-en/blogs/software-platforms/ai-rewriting-saas-value-equation) · [Deloitte TMT Predictions 2026](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html)*
