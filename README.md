# 🔥 Project Forge

![Project Forge banner](./asset/banner.png)

Project Forge helps you open **ChatGPT Projects** from explicit files instead of hidden chat continuity.

It prepares the startup package before the real work begins, so the target project can start from a visible basis instead of reconstructing scope, sources, constraints, and decisions from a previous conversation.

Most workspaces give you a place to chat.

**Project Forge gives you a way to open a project on purpose.**

## 🚀 Start here

Project Forge is a preparation system.

It does not run the target project.  
It prepares the target project.

Use it when a new project should not start from memory, chat momentum, or a pile of informal notes.

Forge helps you close:

- 🎯 what project is being prepared
- 📌 what the project must do
- 🚧 what is in scope and out of scope
- 📚 what sources or materials count as official basis
- 🧾 what project-opening files must exist
- 🔁 whether handoff or source transfer is actually needed

The result is an opening package: files the target project can read at startup.

## 🧱 The boundary

Project Forge has one hard boundary:

**the core defines the rules; the project package carries the state.**

That boundary is the system.

If live project state enters the core, Forge stops being clean.  
If the target project depends on chat memory, the opening package is not ready.

Project Forge keeps these surfaces separate:

- 🧠 **canonical core** — the stable rules of Project Forge
- 📦 **project package** — the files used to open one target project
- 📚 **candidate material** — sources or notes that are not official yet
- ✅ **initial official basis** — the approved starting ground
- 🔁 **handoff state** — only when continuity is really required

The core should stay general.  
The project package should carry the case.

## 📦 What it produces

The minimum useful opening package usually contains:

| File / artifact | Purpose |
|---|---|
| 🚪 `ENTRY_POINT.md` | Tells the target project how to read the package. |
| 🎯 `TARGET_PROJECT_BRIEF_ARTIFACT` | Defines objective, scope, expected outputs, and project-specific constraints. |
| ✅ `INITIAL_SSOT_ARTIFACT` | Freezes the initial official basis of the target project. |

Optional artifacts are added only when the case needs them:

| Optional artifact | Use |
|---|---|
| 🔁 `HANDOFF_ARTIFACT` | Transfers current state when the next run cannot be reconstructed safely. |
| 📚 `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT` | Transfers candidate materials without making them official basis yet. |

Do not generate every surface by default.

A clean project opening is usually smaller than anxiety wants it to be.

<p align="center">
  <img src="./asset/pic%202.png" alt="Project Forge workflow" width="620">
</p>

## 🧪 Operational examples

Project Forge is domain-agnostic.

It does not care whether the project is about sport, research, business, writing, or technical planning.

It cares whether the project can open from explicit files instead of hidden chat continuity.

### 🏍️ Sports coverage lens

You want to open a project about MotoGP, but not as a generic fan chat.

The project should follow MotoGP through foreign press coverage: what different countries emphasize, which sources are allowed, which narratives are recurring, and what kind of briefing the project should produce.

Project Forge helps prepare:

- 🎯 the target
- 🌍 the countries or languages in scope
- 📰 the source perimeter
- ✅ what counts as official basis
- 🚫 what is excluded
- 📋 the expected output shape

### 📚 Research source pack

You have links, notes, PDFs, previous chat material, and a rough research direction.

Instead of opening a project and hoping the assistant reconstructs the intent, Project Forge turns the material into a clean opening package: target, scope, approved sources, initial basis, and missing points.

### 🧩 Product or strategy workspace

You want to open a project around a product idea, positioning problem, workflow, or internal decision.

Project Forge helps separate stable rules from current assumptions, define what the project should decide or produce, and prevent early chat momentum from becoming hidden project authority.

## 🧰 Ways to build the opening package

Project Forge can be used in more than one way.

The method changes.  
The boundary does not.

### ✍️ Manual

Fill the templates yourself when the project is small, already clear, or you want maximum control.

This works well when you already know:

- 🎯 objective
- 🚧 scope in / scope out
- 📚 approved sources
- 📋 expected outputs
- ✅ initial official basis

### 💬 Guided in ChatGPT

Use a clean Project Forge workspace as a preparation room.

ChatGPT helps you close the target, scope, sources, constraints, and initial basis before you create or open the real project.

The rhythm is:

1. 🧼 keep the Forge workspace clean
2. 📄 provide the Forge files
3. 💬 describe the target project
4. 🔎 let ChatGPT help compile the opening package
5. ✅ review the package
6. 🆕 open the real target project from those files

Project Forge is the preparation room.  
The target project is the destination.  
The opening package is the bridge.

### 🤖 With a file-based agent

Use an agent such as Codex, an IDE assistant, or a CLI agent when you want the opening package drafted directly from files.

The agent can read the canonicals and templates, receive your project information, and compile the artifacts.

The operator still controls:

- 📚 source selection
- 🔐 authority
- ✅ final approval
- 🧾 what becomes official basis
- 🚫 what must stay out

Do not let the agent turn source proximity or confidence into authority.

### 🧭 With the web compiler

Use the guided browser compiler when you want a dedicated surface for filling the opening files.

- [Open the Project Forge compiler](https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/)

The compiler helps structure the package.  
It does not replace the canonicals.

<p align="center">
  <img src="./asset/pic%201.png" alt="Project Forge repository overview" width="620">
</p>

## ⚙️ How to use it

Use this as the short path.

1. 🧼 Start from a clean Project Forge workspace.
2. 🤖 Ask the assistant to read [`AI_START.md`](./AI_START.md).
3. 📚 Load the four canonicals in the correct read order.
4. 🎯 Define the target project.
5. 🚧 Close scope in and scope out.
6. ✅ Define the initial official basis.
7. 📦 Compile the opening artifacts.
8. 🆕 Create or open the target project.
9. 🚪 Start the target project from the opening files, not from remembered chat context.

Minimum operator instruction:

```text
Read AI_START.md, then use the Project Forge canonicals to prepare the opening package for this target project.
```

Then provide the target, sources, constraints, and expected outputs.

## 🗂️ Which file should I open?

| Need | Open |
|---|---|
| 🚀 Start an AI session correctly | [`AI_START.md`](./AI_START.md) |
| 🧠 Understand system identity and scope | [`00_SCOPE.md`](./00_SCOPE.md) |
| 📏 Understand criteria and authority | [`01_RULES.md`](./01_RULES.md) |
| 📦 Understand artifact classes | [`03_ARTIFACTS.md`](./03_ARTIFACTS.md) |
| ⚙️ Understand working procedure | [`02_PROTOCOL.md`](./02_PROTOCOL.md) |
| 👤 Operate the system as a human | [`operator_guide/OPERATOR_GUIDE.md`](./operator_guide/OPERATOR_GUIDE.md) |
| 🧩 Read deeper rationale | [`operator_guide/OPERATOR_TECHNICAL_REFERENCE.md`](./operator_guide/OPERATOR_TECHNICAL_REFERENCE.md) |
| 🧪 Check basic behavior | [`smoke_test/SMOKE_TEST.md`](./smoke_test/SMOKE_TEST.md) |
| ✍️ Fill opening files manually | [`artifact_templates/`](./artifact_templates/) |
| 🧭 Use guided browser compilation | [Project Forge compiler](https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/) |

## 🧷 What to keep in mind

Files beat memory.

If something matters, put it in a file or artifact.  
Do not rely on the model remembering what the project was supposed to know.

The opening package is ready only when the target project can begin without depending on the preparation chat as hidden state.

<details>
<summary>🧩 Technical contract</summary>

## 📚 Canonical core

Project Forge is governed by four canonical files.

| File | Authority |
|---|---|
| 🧠 [`00_SCOPE.md`](./00_SCOPE.md) | System identity, scope, non-scope, target, final output. |
| 📏 [`01_RULES.md`](./01_RULES.md) | Criteria, authority, stability, residence, validation, readiness, handoff. |
| 📦 [`03_ARTIFACTS.md`](./03_ARTIFACTS.md) | Artifact grammar, artifact classes, schemas, triggers, freshness rules. |
| ⚙️ [`02_PROTOCOL.md`](./02_PROTOCOL.md) | Minimum working procedure, states, output minimums, stop conditions. |

Read order:

```text
00_SCOPE.md
01_RULES.md
03_ARTIFACTS.md
02_PROTOCOL.md
```

Precedence order:

```text
00_SCOPE.md > 01_RULES.md > 02_PROTOCOL.md > 03_ARTIFACTS.md
```

Read order is for comprehension.  
Precedence is for conflict closure.

## 🔐 Authority

No lower surface may redefine a higher surface.

Runtime operator input is allowed only within the fields already permitted by the canonicals.

Artifacts may carry local state.  
Artifacts may not redefine the core.

## 🧠 Core / state separation

Project Forge separates:

- 🧠 system rules
- 📦 project-opening state
- 📚 candidate materials
- ✅ official basis
- 🔁 handoff state
- 🧯 material that must not be stored

This prevents the common failure where chat momentum becomes project authority.

## 🗃️ Stability and residence

Information is classified before it is stored.

Stability classes:

- `PERSISTENT`
- `VOLATILE`

Residence classes:

- `CANONICAL`
- `EXTERNAL_ARTIFACT`
- `RUNTIME_OPERATOR_INPUT`
- `DO_NOT_STORE`

The system decides in this order:

1. classify stability
2. assign residence

Never reverse that order.

## 🚫 DO_NOT_STORE

`DO_NOT_STORE` material must not be:

- serialized
- promoted
- added to SSOT
- included in handoff
- turned into stable project basis

This keeps temporary reasoning, unsafe fragments, and session-only residue from leaking into durable surfaces.

## ✅ Source validation

Before material can become official basis, validate:

- authority
- direct relevance
- explicit role
- freshness when time-sensitive
- contradiction status

No unvalidated source may become official project basis.

## ⬆️ Promotion

Material is promotable only if it is:

- `stabilized`
- `normative`
- `non_case_specific`

Promotion is intentionally conservative.

Notes do not become rules just because they were useful once.  
Examples do not become policy just because they were nearby.

## 🚦 Readiness states

Project Forge closes the current state as one of:

| State | Meaning |
|---|---|
| ✅ `READY` | Required gate conditions are satisfied. |
| 🟡 `NOT_READY` | Material is missing or weak, but the frame remains coherent. |
| 🛑 `BLOCKED` | A structural condition is missing, invalid, or unavailable. |
| ⚔️ `CONFLICT` | Peer-authority surfaces diverge and cannot be closed at the current level. |

## 📦 Artifact classes

Baseline-supported artifact classes:

| Artifact | Purpose |
|---|---|
| 🎯 `TARGET_PROJECT_BRIEF_ARTIFACT` | Minimum project-specific operational brief. |
| ✅ `INITIAL_SSOT_ARTIFACT` | Initial official basis of the target project. |
| 🔁 `HANDOFF_ARTIFACT` | Continuity across runs when reconstruction is unsafe. |
| 📚 `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT` | Candidate material transfer without immediate promotion. |

Not all artifacts are required every time.

Emit artifacts only when authorized by the canonicals and justified by the current case.

## 🧭 Standard flow

The minimum working procedure:

1. close intake object
2. close target
3. close required outputs
4. classify stability
5. assign residence
6. validate sources
7. test promotion eligibility when relevant
8. apply readiness gate
9. close handoff branch
10. emit authorized outputs only

Do not skip a step if skipping would change target, authority, readiness, or output.

## 🛑 Stop conditions

Stop immediately when:

- the real object is not closed
- authority is not closed
- target closure changes the move materially
- a lower surface attempts to redefine a higher surface
- a required artifact class is undefined
- a forbidden stability-to-residence combination is attempted
- immutable fields are targeted by runtime override
- peer-authority conflict remains unresolved

## 🧪 Smoke test

Use the smoke test to check whether Project Forge can produce a clean target-project opening package from explicit files instead of hidden chat carry-over.

Start with:

- `AI_START.md`
- the four canonicals
- the required templates
- `smoke_test/CASE_01_MINIMAL_OPENING.md`

The test passes when the target project could be opened from the generated package without needing the preparation chat as hidden state.

## 🗂️ Repository structure

| Area | Purpose |
|---|---|
| 🧠 Canonicals | Stable governing surfaces. |
| 👤 Operator guide | Human operating rhythm. |
| 🧩 Technical reference | Deeper mechanism and rationale. |
| 🤖 AI startup | Routing file for model entry. |
| ✍️ Artifact templates | Project-opening file templates. |
| 🧪 Smoke tests | Minimal operational checks. |
| 🧭 Web compiler | Browser surface for guided package compilation. |

</details>

## 🤖 AI-assisted development

This project was developed with AI assistance.

The project, documentation, and repository materials were shaped through human-directed work supported by AI tools during drafting, structuring, review, and refinement.

AI assistance does not make the project automatically correct, complete, or suitable for every use case. Read it, test it, and adapt it to your own context.

## ⚖️ License

This project is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License (`CC BY-SA 4.0`).

See [`LICENSE`](./LICENSE).
