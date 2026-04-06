# Project Forge

## What Project Forge is

Project Forge is a structured preparation layer for work that will run inside **ChatGPT Projects**.

Before the live work begins, Forge helps you define the target, close the scope, separate stable rules from live case state, and assemble the opening materials the downstream project will need.

Most workspaces give you a place to chat.  
**Project Forge gives you a way to open a project on purpose.**

---

## What Project Forge is not

Project Forge is **not** the live project.  
It is **not** a notebook, a memory substitute, or a raw source dump.

Its job is simple:

> **prepare a project so it can start from explicit materials instead of reconstructed chat context.**

---

## Core idea

Project Forge is built on a simple distinction:

- the **system core** defines how the preparation system works
- the **target-project package** carries what the downstream project needs at startup

If those two layers collapse into each other, the system loses its main boundary:
the core gets mixed with live case state, and the opening package stops being clean.

Forge is built to keep that boundary intact.

---

## ChatGPT Projects context

Project Forge is written for **ChatGPT Projects** - the ChatGPT workspace surface built around bounded chats, files, and instructions.

That is a different operating environment from a normal standalone chat, and this repository is designed with that distinction in mind.

---

## In one line

**Project Forge helps you open serious ChatGPT Projects from explicit structure, not from conversational drift.**

---

## Why it exists

Projects often begin in an ambiguous way:

- scope is implied instead of defined
- rules are mixed with case-specific state
- continuity depends on chat carry-over
- sources, constraints, and handoff logic stay informal

Project Forge is built to address that.

It creates a controlled opening layer between a blank workspace and the real downstream project, so the project starts from a visible basis instead of conversational residue.

---

## When to use it

Use Project Forge when a target project needs to start from **explicit structure** rather than from reconstruction inside chat.

It is a good fit when you need to:

- prepare a bounded opening package before live work starts
- keep scope, basis, and state visible instead of implicit
- reopen work without relying on conversational carry-over
- separate long-lived rules from run-specific material
- control transfer and handoff instead of improvising them

---

## When not to use it

Do **not** use Project Forge as:

- the live target project
- a general-purpose notebook
- a case archive
- a raw source dump
- a memory substitute

Forge is for **preparing** a project, not for **being** the project.

---

## Where to use it

Project Forge can be used in two main ways.

### 1) As a preparation layer inside ChatGPT Projects

Keep a **clean Forge project** as your reusable preparation kit.

When you want to open a new downstream project, use that Forge workspace to:

- define the target
- close scope
- set source and reasoning constraints
- classify materials
- compile the opening artifacts

In this mode, Forge acts as a **project-preparation system** for other projects.  
It helps you build the opening package before the live project work begins.

### 2) With file-based agents and IDE workflows

Forge also works well in agent environments where the model can read and write files while you stay in control of source selection.

A typical flow looks like this:

- you describe the project in natural language
- the agent proposes candidate sources
- you review links and tighten constraints
- the agent updates the artifacts
- the downstream project opens from explicit materials instead of chat residue

This makes Forge useful as a bridge between **conversation** and **structured project setup**.

---

## What Forge does

Project Forge is used to:

- define what project is being prepared
- define what the prepared project must receive to start correctly
- keep the governing core separate from live case state
- externalize case state into controlled artifacts
- support continuity across runs only when continuity is actually required

---

## What it produces

Project Forge produces two kinds of output:

### 1. A stable canonical core
The core defines the system itself:

- frame
- criteria
- artifact grammar
- procedure

### 2. External project-opening artifacts
These are the controlled surfaces used to open or continue a downstream target project.

Depending on the case, they may include:

- [`ENTRY_POINT.md`](./artifact_templates/ENTRY_POINT.md) for the target-project package
- [`TARGET_PROJECT_BRIEF_ARTIFACT.template.md`](./artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md)
- [`INITIAL_SSOT_ARTIFACT.template.md`](./artifact_templates/INITIAL_SSOT_ARTIFACT.template.md)
- [`SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md`](./artifact_templates/SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md)
- [`HANDOFF_ARTIFACT.template.md`](./artifact_templates/HANDOFF_ARTIFACT.template.md)

The boundary matters:

- **the core governs**
- **the artifacts carry project-specific state**

That separation is one of Project Forge's main control surfaces.

---

## How to use it

Project Forge is a **virgin preparation kit**: you keep it clean, then use it to prepare new downstream projects.

A real workflow usually looks like this.

### 1) Start from a clean Forge workspace

Keep one clean Project Forge setup as your reusable preparation environment.

Do not turn that workspace into the live project itself.  
Use it to define the target, close scope, review sources, and compile the opening package for the downstream project.

### 2) Fill the artifacts for the project you want to open

Choose how you want to work:

- manually
- with help from ChatGPT Projects
- with a file-based agent in an IDE or CLI environment

In every case, the goal is the same: fill the project-opening artifacts with explicit material instead of leaving the project shape implicit in chat.

At minimum, prepare:

- [`ENTRY_POINT.md`](./artifact_templates/ENTRY_POINT.md)
- [`TARGET_PROJECT_BRIEF_ARTIFACT.template.md`](./artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md)
- [`INITIAL_SSOT_ARTIFACT.template.md`](./artifact_templates/INITIAL_SSOT_ARTIFACT.template.md)

When needed, also prepare:

- [`SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md`](./artifact_templates/SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md)
- [`HANDOFF_ARTIFACT.template.md`](./artifact_templates/HANDOFF_ARTIFACT.template.md)

### 3) Use the agent as a structured preparation partner

A practical way to work is:

- ask the agent to read [`AI_START.md`](./AI_START.md)
- let it route into the canonical core
- define the target project together
- close scope in and scope out
- set source constraints and reasoning constraints
- collect candidate sources
- review the links yourself
- tighten or change constraints
- let the agent update the artifacts

This lets you prepare the project conversationally while keeping the resulting structure externalized in files.

### 4) Create the downstream project

Once the opening package is ready, create your new downstream project and place the prepared startup surfaces inside it.

The downstream project should start from the prepared materials, not from reconstructed chat context.

### 5) Open the downstream project from the artifacts

In the downstream project, tell the agent to read the opening materials in the correct startup order.

Start from:

1. [`ENTRY_POINT.md`](./artifact_templates/ENTRY_POINT.md)

Then continue with the canonical artifact read order:

1. [`TARGET_PROJECT_BRIEF_ARTIFACT.template.md`](./artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md)
2. [`INITIAL_SSOT_ARTIFACT.template.md`](./artifact_templates/INITIAL_SSOT_ARTIFACT.template.md)
3. [`SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md`](./artifact_templates/SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md)
4. [`HANDOFF_ARTIFACT.template.md`](./artifact_templates/HANDOFF_ARTIFACT.template.md)

In many cases, [`ENTRY_POINT.md`](./artifact_templates/ENTRY_POINT.md), [`TARGET_PROJECT_BRIEF_ARTIFACT.template.md`](./artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md), and [`INITIAL_SSOT_ARTIFACT.template.md`](./artifact_templates/INITIAL_SSOT_ARTIFACT.template.md) are enough to open the project cleanly.

### 6) Begin the live work only after the opening package is ready

Once the downstream project has read the opening artifacts, the live project work can begin from an explicit basis:

- objective is visible
- scope is bounded
- sources are controlled
- official basis is frozen
- extra materials stay separate from the governing core

That is the whole point of Forge:
prepare first, then open the real project cleanly.

---

### What matters most

Forge is not tied to a single interface.

It is most useful anywhere you can:
- keep the canonical core stable
- externalize project-opening state into artifacts
- review sources before they become official basis
- reopen work without depending on hidden continuity

---

## Repository structure

### Canonical core
These files define Project Forge itself:

- [`00_SCOPE.md`](./00_SCOPE.md)
- [`01_RULES.md`](./01_RULES.md)
- [`03_ARTIFACTS.md`](./03_ARTIFACTS.md)
- [`02_PROTOCOL.md`](./02_PROTOCOL.md)

This is the governing layer of the system.

### Operator guidance
These files support the human operator:

- [`operator_guide/OPERATOR_GUIDE.md`](./operator_guide/OPERATOR_GUIDE.md)
- [`operator_guide/OPERATOR_TECHNICAL_REFERENCE.md`](./operator_guide/OPERATOR_TECHNICAL_REFERENCE.md)

Use them for the practical operating rhythm and the deeper technical rationale.

### AI bootstrap
- [`AI_START.md`](./AI_START.md)

This is a startup routing file for the AI.  
It exists to route an AI session into the canonicals and constrain startup assumptions. It is **not** the primary onboarding surface for a human reader.

### Artifact templates
- [`artifact_templates/`](./artifact_templates/)

This directory contains template surfaces that Forge may instantiate for a downstream target project.

These templates are **not** the system authority.  
They are output surfaces used during project preparation.

### Smoke tests
- [`smoke_test/`](./smoke_test/)

This contains the smallest operational checks for verifying that the system can open a target project cleanly.

---

## Recommended read path

If you just want to understand whether Project Forge is useful for your workflow, start with the shortest practical path:

1. read the opening of [`operator_guide/OPERATOR_GUIDE.md`](./operator_guide/OPERATOR_GUIDE.md)  
2. read [`smoke_test/SMOKE_TEST.md`](./smoke_test/SMOKE_TEST.md)
3. read [`smoke_test/CASE_01_MINIMAL_OPENING.md`](./smoke_test/CASE_01_MINIMAL_OPENING.md)

That is usually enough to answer the first real question:

> Can this system prepare a target project so it starts from explicit materials instead of hidden chat continuity?

If the answer is yes, move into the canonical core.

---

## License

This project is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (`CC BY-SA 4.0`). See [LICENSE](./LICENSE).
