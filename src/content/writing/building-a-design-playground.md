---
title: "Building a Design Playground: Empowering Designers with Code"
description: "How Sage’s Design Playground lets designers prototype with real Carbon components, AI-assisted workflows, and branch previews, closing the gap between Figma and shipped software."
pubDate: 2026-05-12
---

## The Gap Between Design and Reality

As a designer at Sage, I kept running into the same frustration: the gap between designing in Figma and seeing how something actually works. Static mockups look great in presentations, but they can't capture the nuance of interaction, the reality of edge cases, or how a design performs with actual data. Waiting weeks for development capacity to validate an idea felt like working with one hand tied behind my back.

At the same time, Sage has invested heavily in Carbon, a comprehensive UI library with dozens of production-ready components. But most designers never touched them directly. We designed approximations in Figma, handed them off, and hoped the translation would be faithful.

I wanted to close that gap. What if designers could prototype with the real components from our design system? What if we could move from static mockups to working software in hours, not weeks?

That question led to the Sage Design Playground.

## What Is the Playground?

The Sage Design Playground is a React-based prototyping environment pre-configured with Carbon components and Sage design tokens. It's not a design tool trying to generate code, and it's not a developer tool requiring deep React knowledge. It sits in between: a designer-first space where you prototype with actual design system components.

**Here's what makes it work:**

At its core, the playground is a Git repository containing everything needed to build interactive prototypes: the full Carbon component library, Sage design tokens for consistent spacing and colours, example screens to learn from, and comprehensive documentation that guides both designers and AI assistants.

The workflow is simple: designers work in a code editor using natural language prompts powered by AI (GitHub Copilot, Claude, or any LLM). The AI reads repository rules in `AGENTS.md` to ensure only approved Carbon components are used, design tokens are referenced (never hardcoded), and accessibility standards are met automatically.

**The branch preview system:** every designer works on their own Git branch, and when they push changes, Netlify automatically deploys a shareable URL. Stakeholder reviews become as simple as sending a link. No build pipelines to configure, no servers to manage, just working prototypes with persistent URLs.

**What makes it different from other prototyping tools?** You're not designing with approximations of components, you're using the exact same Carbon components that engineering will ship. There's no design-to-dev translation layer, no "does this match the spec?" conversation. The prototype *is* the spec, built with production components.

## How It Works: The Technical Foundation

The playground is built on a deliberately simple stack that prioritises designer experience over technical complexity.

**The core technologies:**

- **Vite** handles the build process (think of it as the engine that turns React code into a live website). It starts instantly and reloads changes in milliseconds.
- **React Router** manages navigation between prototype screens, so you can build multi-page flows that feel like real applications.
- **carbon-react** provides the full Sage component library: forms, tables, modals, navigation, loaders, and the rest.

**The repository structure is intentional:**

- `src/pages/` contains individual prototype screens. Each is a complete, self-contained experience.
- `src/components/` houses reusable patterns that multiple prototypes can share
- `src/data/` holds mock data structured to mirror real product scenarios (no "Lorem ipsum" or "Test User 123")
- `docs/` provides three critical references: Carbon component and token lookups, prototyping guidelines for flows and accessibility, and comprehensive examples

## The Learning Curve: What Designers Need to Know

I won't sugarcoat it: there's a learning curve. But it's more manageable than you might think, and the payoff comes quickly.

**What you need to get started:**

- **Comfort with a code editor.** You don't need to be an expert in VS Code, but you should be comfortable opening files, reading code, and navigating folders. If you've edited HTML or CSS before, you're already ahead.
- **Basic Git concepts.** Branches, commits, push/pull. These are the building blocks. The good news: GitHub Desktop provides a visual interface, so you never need to touch the command line if you don't want to.
- **Access to an AI assistant.** GitHub Copilot is the default, but Claude, GPT, or any coding-capable LLM will work. 

**What you DON'T need:**

- Deep JavaScript or React expertise (the AI writes the code)
- Command line fluency (scripts are documented, and most tasks stay in VS Code)
- Understanding of build tools, bundlers, or webpack config (Vite handles this invisibly)
- Back-end development knowledge (everything is front-end only, with mock data)

**The quality improvements are measurable:**

Prototypes automatically respect Sage's visual language because they use actual Carbon components and design tokens. Accessibility is baked in (keyboard navigation, focus management, screen reader support), not bolted on later.

Most importantly, stakeholders see working software, not clickable Figmas. The conversation shifts from "will this work?" to "does this solve the right problem?" That's the shift we wanted.


## Lessons for Other Teams

If you're considering building something similar for your organisation, here's what we learnt:

**What worked better than expected:**

- **AI as the interface** lowers the barrier more than any visual builder could. Natural language is the ultimate accessible interface. Designers describe intent; AI handles syntax.
- **Documentation as code** (rules in `AGENTS.md`) ensures consistency without policing. The AI reads the rules and applies them automatically. We're not gatekeeping. We're encoding best practices.
- **Using production components** means no design-to-dev translation layer. There's no "does this match the spec?" conversation because the prototype uses the exact components engineering will ship.
- **Git-based workflow** teaches version control as a side effect. Designers learn branching, committing, and merging because it's the path to sharing their work.
- **Branch previews via Netlify** make sharing effortless. No build configuration, no server management, just a URL that updates automatically.

**What was harder than expected:**

- **Balancing flexibility with guardrails.** Too restrictive kills creativity and experimentation. Too loose creates technical debt and inconsistent patterns. We're still calibrating this balance.
- **Onboarding time** still requires 2-4 weeks before designers feel truly confident. We're working to compress this, but there's no getting around the fact that learning a new medium takes time.
- **Keeping Carbon updated** requires periodic maintenance: dependency updates, component API changes, deprecated prop migrations.

**The key insight:** Don't try to hide the code. Embrace it as a design medium. The designers who thrive in the playground are those who get curious about how components work, not those looking for a Figma alternative. Code isn't a barrier. It's a material. Learn to shape it, and you unlock new capabilities.

## An Invitation

The Sage Design Playground isn't a tool to replace designers with code. It's a tool to make designers *more powerful* by closing the gap between intent and reality.

If you're a designer working in a large enterprise with an established design system, ask yourself: What would change if you could prototype with real components instead of static mockups? What ideas would you validate faster? What conversations would you have earlier? What would you learn about your own designs by seeing them work with real data?

If you're at Sage, the repo is waiting for you. If you're elsewhere, consider what a version of this could look like for your design system and your team.

The future of design isn't in tools that hide complexity. It's in tools that make complexity *learnable*.

---

**Resources:**

- [Sage Carbon Storybook](https://carbon.sage.com) - Browse all components and their props
- [Carbon GitHub](https://github.com/Sage/carbon) - View the source and contribute
- [Sage Design Tokens](https://github.com/Sage/design-tokens) - Reference for spacing, colours, and typography

