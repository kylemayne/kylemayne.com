---
title: "Building a Design Playground: Empowering Designers with Code"
description: "How Sage’s Design Playground lets designers prototype with real Carbon components, AI-assisted workflows, and branch previews—closing the gap between Figma and shipped software."
pubDate: 2026-05-12
---

## The Gap Between Design and Reality

As a designer at Sage, I kept running into the same frustration: the gap between designing in Figma and seeing how something actually works. Static mockups look great in presentations, but they can't capture the nuance of interaction, the reality of edge cases, or how a design performs with actual data. Waiting weeks for development capacity to validate an idea felt like working with one hand tied behind my back.

At the same time, Sage has invested heavily in Carbon—a comprehensive design system with dozens of production-ready components. But most designers never touched them directly. We designed approximations in Figma, handed them off, and hoped the translation would be faithful.

I wanted to close that gap. What if designers could prototype with the real components from our design system? What if we could move from static mockups to working software in hours, not weeks?

That question led to the Sage Design Playground.

## What Is the Playground?

The Sage Design Playground is a React-based prototyping environment pre-configured with Carbon components and Sage design tokens. It's not a design tool trying to generate code, and it's not a developer tool requiring deep React knowledge. It sits in between—a designer-first space where you prototype with actual design system components.

**Here's what makes it work:**

At its core, the playground is a Git repository containing everything needed to build interactive prototypes: the full Carbon component library, Sage design tokens for consistent spacing and colors, example screens to learn from, and comprehensive documentation that guides both designers and AI assistants.

The workflow is simple: designers work in VS Code using natural language prompts powered by AI (GitHub Copilot, Claude, or any LLM). Want a multi-step form with validation? Describe it in plain language. Need a data table with sortable columns? Just ask. The AI reads repository rules in `AGENTS.md` to ensure only approved Carbon components are used, design tokens are referenced (never hardcoded), and accessibility standards are met automatically.

**The breakthrough is the branch preview system:** every designer works on their own Git branch, and when they push changes, Netlify automatically deploys a shareable URL. Stakeholder reviews become as simple as sending a link. No build pipelines to configure, no servers to manage—just working prototypes with persistent URLs.

**What makes it different from other prototyping tools?** You're not designing with approximations of components—you're using the exact same Carbon components that engineering will ship. There's no design-to-dev translation layer, no "does this match the spec?" conversation. The prototype *is* the spec, built with production components.

## How It Works: The Technical Foundation

The playground is built on a deliberately simple stack that prioritizes designer experience over technical complexity.

**The core technologies:**

- **Vite** handles the build process—think of it as the engine that turns React code into a live website. It starts instantly and reloads changes in milliseconds.
- **React Router** manages navigation between prototype screens, so you can build multi-page flows that feel like real applications.
- **carbon-react** (currently v159.2.0) provides the full Sage component library: forms, tables, modals, navigation, loaders—everything.
- **@sage/design-tokens** ensures visual consistency. Spacing, colors, typography—all references to our design system, never arbitrary values.

**The repository structure is intentional:**

- `src/pages/` contains individual prototype screens—each is a complete, self-contained experience
- `src/components/` houses reusable patterns that multiple prototypes can share
- `src/data/` holds mock data structured to mirror real product scenarios (no "Lorem ipsum" or "Test User 123")
- `docs/` provides three critical references: Carbon component and token lookups, prototyping guidelines for flows and accessibility, and comprehensive examples

**The AI integration is where this gets interesting.** Instead of learning React syntax, designers work through natural language:

> "Create a multi-step form for invoice creation with inline validation"
>
> "Add a loading state to this data table with realistic skeleton screens"
>
> "Build a chat interface with message history and scroll-to-bottom behavior"

The AI assistant reads `AGENTS.md` before writing any code. This file encodes our quality standards: which components are approved, how to structure mock data, what accessibility patterns to follow, how to handle responsive behavior. It's like having an experienced engineer pair-programming with you, catching issues before they happen.

**For designers coming from Figma,** there's even tighter integration. The Figma MCP (Model Context Protocol) lets AI assistants read your Figma frames directly—layout, components, spacing, colors—and translate them into Carbon component code. You copy a Figma link, paste it into a prompt, and the assistant builds a working prototype that respects both your design intent and Carbon's implementation patterns.

The technical foundation isn't meant to be invisible—it's meant to be *learnable*. Designers who want to understand what's happening can read the generated code, modify it, and learn React concepts in context. Those who prefer to stay at the prompt level can do that too. Both approaches work.

## The Learning Curve: What Designers Need to Know

I won't sugarcoat it—there's a learning curve. But it's more manageable than you might think, and the payoff comes quickly.

**What you need to get started:**

- **Comfort with a code editor.** You don't need to be an expert in VS Code, but you should be comfortable opening files, reading code, and navigating folders. If you've edited HTML or CSS before, you're already ahead.
- **Basic Git concepts.** Branches, commits, push/pull—these are the building blocks. The good news: GitHub Desktop provides a visual interface, so you never need to touch the command line if you don't want to.
- **Access to an AI assistant.** GitHub Copilot is the default, but Claude, GPT-4, or any coding-capable LLM will work. The AI handles the React syntax—you focus on describing what you want.

**What you DON'T need:**

- Deep JavaScript or React expertise (the AI writes the code)
- Command line fluency (scripts are documented, and most tasks stay in VS Code)
- Understanding of build tools, bundlers, or webpack config (Vite handles this invisibly)
- Backend development knowledge (everything is frontend-only with mock data)

**The typical learning path looks like this:**

*First week:* You start by modifying existing example screens in `src/pages/`. Change some text, swap a button, adjust spacing. You learn that React components look like HTML with extra powers. Props are like Figma component properties—they configure how something looks or behaves.

*Week two:* You're comfortable creating new screens from scratch. You know how to use Carbon components like `Button`, `Textbox`, `Typography`, and `Box` (the layout workhorse). You understand that `useState` is React's way of remembering values between renders—like tracking whether a modal is open or what a user typed in a field.

*By the end of the first month:* You're building multi-screen flows with navigation, managing form state, and extracting reusable patterns into `src/components/`. You're reading AI-generated code to understand what it does before accepting it.

**The documentation strategy is crucial:** We don't throw designers into the deep end. Every concept is introduced in context. Inline code comments explain *why*, not just *what*. The `docs/prototyping-guidelines.md` file covers flow patterns, mock data structure, routing conventions, and accessibility expectations. The `docs/carbon-reference.md` is a searchable reference for components and tokens. And `AGENTS.md` encodes the quality standards that AI assistants enforce automatically.

**A real example:** One designer on our team had zero coding experience when they started. Within a month, they built a complete invoice review flow—seven screens, form validation, realistic data, and proper state management. Their secret? Starting small, building confidence incrementally, and not being afraid to ask the AI "why did you do it this way?"

The learning curve exists, but it's a slope, not a cliff. And every hour invested makes you more capable—not just at prototyping, but at understanding how the products you design actually work.

## Current State & Real-World Use

Six months in, the playground has moved from experiment to essential tool.

**Adoption at Sage:**

We have 12+ designers actively using the playground across multiple product teams. In the first quarter alone, we built 30+ prototype screens—everything from simple component explorations to full multi-screen flows. What used to take weeks (finding dev capacity, waiting for implementation, iterating after feedback) now happens in hours.

The biggest impact has been on stakeholder reviews and usability testing. Prototypes built in the playground are being used for engineering handoffs too, serving as living specifications that show exactly how components should behave.

**Example prototypes in production use:**

- **Copilot onboarding flows** with multi-step wizards and contextual help—built to test different entry points before committing to development
- **Invoice management dashboards** with realistic data across edge cases (zero values, long company names, multiple currencies)
- **Chat interfaces** with message history, typing indicators, and scroll behavior—iterated through three versions based on usability testing feedback
- **Form validation patterns** that have been extracted into reusable components, now shared across prototypes

**The quality improvements are measurable:**

Prototypes automatically respect Sage's visual language because they use actual Carbon components and design tokens. Accessibility is baked in—keyboard navigation, focus management, screen reader support—not bolted on later. Realistic data reveals UX issues that static mockups miss (like how that table design breaks when company names wrap to three lines).

Most importantly, stakeholders see working software, not clickable PDFs. The conversation shifts from "will this work?" to "does this solve the right problem?" That's the shift we wanted.

## Future Vision: Making It More Accessible

The playground works, but it's not yet accessible to every designer who could benefit from it. The next iteration focuses on lowering the barrier even further.

**We're building a standalone onboarding site with:**

- **Walkthrough videos** showing the complete workflow from first setup to sharing a live prototype:
  - "Your First Prototype" (10 minutes)—from cloning the repo to seeing your first changes live
  - "Working with Carbon Components" (8 minutes)—exploring the component library and understanding props
  - "From Figma to Code with MCP" (12 minutes)—translating Figma designs into working prototypes
  - "Debugging Common Issues" (6 minutes)—what to do when builds fail or components don't behave as expected

- **Step-by-step written guides** for common tasks, searchable and skimmable for designers who prefer reading to watching

- **Interactive examples** you can click through and modify in your browser before committing to the learning curve

**We're also exploring ways to reduce the technical barrier:**

- **Visual state management UI** where you configure state through a panel instead of writing `useState` in code
- **Component palette** to drag Carbon components into a canvas and configure props visually, then see the generated code
- **Prompt library** with pre-written prompts for common patterns ("Add a loading state with skeleton screens," "Implement multi-step form validation")
- **Designer-friendly error explanations** that translate build failures into actionable next steps

**The long-term goal isn't to eliminate code**—it's to make code a tool designers can reach for confidently. The playground should feel like designing with an infinite library of production-ready components. You should be able to think "I wonder how this would work" and have an answer in minutes, not weeks.

Some designers will dig into the React code and become hybrid designer-developers. Others will stay at the prompt level and treat the AI as their implementation partner. Both paths are valid. Both make you more effective.

## Lessons for Other Teams

If you're considering building something similar for your organization, here's what we learned:

**What worked better than expected:**

- **AI as the interface** lowers the barrier more than any visual builder could. Natural language is the ultimate accessible interface. Designers describe intent; AI handles syntax.
- **Documentation as code** (rules in `AGENTS.md`) ensures consistency without policing. The AI reads the rules and applies them automatically. We're not gatekeeping—we're encoding best practices.
- **Using production components** means no design-to-dev translation layer. There's no "does this match the spec?" conversation because the prototype uses the exact components engineering will ship.
- **Git-based workflow** teaches version control as a side effect. Designers learn branching, committing, and merging because it's the path to sharing their work.
- **Branch previews via Netlify** make sharing effortless. No build configuration, no server management—just a URL that updates automatically.

**What was harder than expected:**

- **Balancing flexibility with guardrails.** Too restrictive kills creativity and experimentation. Too loose creates technical debt and inconsistent patterns. We're still calibrating this balance.
- **Onboarding time** still requires 2-4 weeks before designers feel truly confident. We're working to compress this, but there's no getting around the fact that learning a new medium takes time.
- **Keeping Carbon updated** requires periodic maintenance—dependency updates, component API changes, deprecated prop migrations. We need a clearer process for this.

**The key insight:** Don't try to hide the code. Embrace it as a design medium. The designers who thrive in the playground are those who get curious about how components work, not those looking for a Figma alternative. Code isn't a barrier—it's a material. Learn to shape it, and you unlock new capabilities.

## An Invitation

The Sage Design Playground isn't a tool to replace designers with code. It's a tool to make designers *more powerful* by closing the gap between intent and reality.

If you're a designer working in a large enterprise with an established design system, ask yourself: What would change if you could prototype with real components instead of static mockups? What ideas would you validate faster? What conversations would you have earlier? What would you learn about your own designs by seeing them work with real data?

The playground is open source. The approach is replicable. The conversation is just beginning.

If you're at Sage, the repo is waiting for you. If you're elsewhere, consider what a version of this could look like for your design system and your team.

The future of design isn't in tools that hide complexity—it's in tools that make complexity *learnable*.

---

**Resources:**

- [Sage Carbon Storybook](https://carbon.sage.com) - Browse all components and their props
- [Carbon GitHub](https://github.com/Sage/carbon) - View the source and contribute
- [Design Tokens](https://github.com/Sage/design-tokens) - Reference for spacing, colors, and typography

*Want to see it in action? Reach out—I'd love to give you a walkthrough.*
