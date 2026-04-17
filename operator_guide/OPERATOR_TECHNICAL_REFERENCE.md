# Project Forge (GPT_PF) Operator Technical Reference

## What This Document Is
This document is a technical reference for the human operator.

It explains how Project Forge works, why it is shaped the way it is, what each surface is for, and how the system is supposed to behave under normal and abnormal conditions.

Use this file when you need mechanism, rationale, and system model.
Use the operator guide when you need practical operating rhythm.
Use the canonicals when you need authority.

This document is not canonical authority.

If this document conflicts with:
- `00_SCOPE.md`
- `01_RULES.md`
- `03_ARTIFACTS.md`
- `02_PROTOCOL.md`

the canonicals win.

## Naming And Identity
The current system name is `Project Forge` or `GPT_PF`.

## Why Project Forge Exists
Project Forge exists to prepare target projects in ChatGPT so they can start from explicit structure instead of reconstructing the case from hidden chat context.

The system solves a specific failure mode:
- the operator and the model gradually build context in conversation
- the target project is opened later
- the important context is only partially externalized
- the new project starts by reconstructing instead of operating

Project Forge turns that implicit buildup into an explicit opening package.

Its job is not to run the target project.
Its job is to make the target project start cleanly.

## Design Goals
Project Forge is built around a small set of design goals:

### 1. Explicit startup over conversational reconstruction
The target project should start from files and authorized artifacts, not from memory, tone, or momentum.

### 2. Protocol in the core, state outside the core
The core should define how the system works.
Case state should live in artifacts.

### 3. Clear authority boundaries
Each surface should answer a different kind of question.
If two surfaces can decide the same question autonomously, the system becomes muddy.

### 4. Conservative promotion
Useful material should not become official basis just because it is nearby or convenient.

### 5. Recoverable operation
The operator should be able to reopen a case, re-enter a session, or reset drift without relying on hidden continuity.

### 6. Domain-agnostic core
The system should remain general enough to prepare many types of target projects without becoming a disguised domain framework.

## Non-Goals
Project Forge is not designed to be:
- a long-term case archive
- a notebook for mixed drafts and thoughts
- a source dump
- the live target project
- a memory replacement layer
- a single-file operating manual that replaces judgment

This matters because many failures in systems like this come from trying to make one surface do too much.

## System Layers
Project Forge has three broad layers:

### 1. Canonical core
These files are the authority of the system:
- `00_SCOPE.md`
- `01_RULES.md`
- `03_ARTIFACTS.md`
- `02_PROTOCOL.md`

The canonical core defines frame, criteria, artifact grammar, and procedure.
It should not hold live case state.

### 2. Support surfaces
These files help operators or AI enter the system correctly, but they do not govern the system:
- `AI_START.md`
- `OPERATOR_GUIDE.md`
- `OPERATOR_GUIDE_IT.md`
- web compiler: `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`
- this technical reference
- `smoke_test/` materials

These surfaces are explanatory, orienting, or testing aids.
They are not authority.

### 3. Operational artifact surfaces
These are the external state-bearing surfaces used in real preparation work:
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`
- `HANDOFF_ARTIFACT`
- `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`

These surfaces may carry case state.
They may not redefine the core.

## Why There Are Four Canonicals
The canonical core is split into four files because the system needs four different closures:

### `00_SCOPE.md`
Closes the frame.

It answers:
- what the system is
- what it is for
- what it is not for
- what its target is
- what final output the system is supposed to produce

It does not tell you how to operate.
It tells you what kind of system you are operating.

### `01_RULES.md`
Closes the criteria.

It answers:
- what the authority order is
- how information is classified
- how residence is assigned
- what counts as validated
- what counts as promotable
- what counts as ready
- what counts as handoff-worthy

It does not sequence action.
It decides the tests that action must obey.

### `03_ARTIFACTS.md`
Closes the artifact grammar.

It answers:
- what artifact classes exist
- what each artifact is for
- what authority each artifact has
- what schema and triggers each artifact uses
- what order artifacts are read in

It does not decide truth for the whole system.
It defines allowed external surfaces.

### `02_PROTOCOL.md`
Closes the working procedure.

It answers:
- what order the system works in
- how the criteria are applied
- how states are assigned
- how stop conditions are handled
- what output minimum each state must produce

It does not invent criteria.
It applies the ones already closed above.

## Canonical Read Order Versus Canonical Precedence
This distinction matters.

### Canonical read order
The practical read order is:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `03_ARTIFACTS.md`
4. `02_PROTOCOL.md`

This order rebuilds the system in the most legible way:
- frame first
- criteria second
- artifact grammar third
- procedure last

### Canonical precedence
The authority precedence is:
`00_SCOPE.md > 01_RULES.md > 02_PROTOCOL.md > 03_ARTIFACTS.md`

This precedence answers a different question:
if two canonical surfaces appear to conflict, which one is allowed to govern the point?

The difference between read order and precedence is intentional.
Read order is about comprehension.
Precedence is about conflict closure.

## Authority Model
Authority in Project Forge closes in this order:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `02_PROTOCOL.md`
4. `03_ARTIFACTS.md`
5. validated external artifacts within their delegated scope
6. runtime operator input within allowed runtime scope

This means:
- the frame beats the rest
- rules beat application details
- the protocol beats artifact-local interpretation
- artifacts are always local and subordinate
- runtime input is allowed, but bounded

Project Forge rejects the idea that freshness, confidence, or file proximity create authority.

## Support Surfaces And Why They Exist

### `AI_START.md`
`AI_START.md` is a bootstrap router for the AI.

Its purpose is to reduce startup entropy.
It tells a new AI session:
- what to read
- what not to assume
- how to treat memory and chat continuity
- what the first move is
- when to ask the first question

It is intentionally short.
If it becomes a second protocol, it has failed.

### Operator guides
The operator guides exist because canonicals are not written to teach.
They are written to govern.

The guides translate the system into human operating practice:
- how to start
- what to watch for
- what mistakes are common
- how to interpret the system in real use

They are downstream explanations, not authority.

### Web compiler
The web compiler exists as an operator-facing compilation surface.

Its role is narrower than the protocol and narrower than the canonicals:
- help the operator fill the artifact surfaces
- keep required versus optional surfaces legible
- support import, review, and export in one place

It is not an artifact class.
It is not authority.
It is not a substitute for source validation, readiness, or operator judgment.

### Smoke test materials
Smoke test materials exist to test whether the system works operationally before it is trusted on more consequential work.

They answer:
- can a target project start from the package?
- can the operator distinguish required from optional artifacts?
- can the system hold a clean opening without hidden reconstruction?

## Information Model
Project Forge uses two related but distinct axes:

### 1. Stability
Information is either:
- `PERSISTENT`
- `VOLATILE`

This axis answers:
is the information stable enough to persist across runs or contexts?

### 2. Residence
Information may reside in:
- `CANONICAL`
- `EXTERNAL_ARTIFACT`
- `RUNTIME_OPERATOR_INPUT`
- `DO_NOT_STORE`

This axis answers:
where is the information allowed to live?

### Why The Axes Are Separate
Stability and residence are related but not identical.

Stable information does not automatically become canonical.
Volatile information does not automatically become runtime-only.

Residence depends on:
- stability
- authority
- role
- operational consequence

That separation prevents a common mistake:
treating persistence alone as a reason for promotion.

## Stability-To-Residence Logic
The system decides in this order:
1. close stability
2. assign residence

This matters because assigning residence too early creates fake order.

### Allowed patterns
- `PERSISTENT -> CANONICAL`
- `PERSISTENT -> EXTERNAL_ARTIFACT`
- `PERSISTENT -> RUNTIME_OPERATOR_INPUT` only through the explicit exception
- `VOLATILE -> EXTERNAL_ARTIFACT`
- `VOLATILE -> RUNTIME_OPERATOR_INPUT`
- `VOLATILE -> DO_NOT_STORE`

### Forbidden patterns
- `VOLATILE -> CANONICAL`
- `PERSISTENT -> DO_NOT_STORE`

The table is exhaustive by design.
That is deliberate hardening against casual improvisation.

### Why `PERSISTENT -> RUNTIME_OPERATOR_INPUT` Exists
This exception exists for a narrow class of cases where information is stable, but must still be reaffirmed by the operator each time because:
- the operator retains non-delegable responsibility
- local choice must remain explicit
- the risk of silent carry-forward is too high

The exception is intentionally hard to trigger.
It is not a convenience feature.

## The Meaning Of `DO_NOT_STORE`
`DO_NOT_STORE` is not just a label.
It is a sink.

If material lands there, it must not:
- be serialized
- be promoted
- enter SSOT
- enter handoff
- become stable basis

This is how the system prevents temporary reasoning, unsafe fragments, and session-only residue from leaking into durable surfaces.

## Validation Model
Before material can become official basis, it must pass source validation.

Validation closes:
- authority
- direct relevance
- explicit role
- freshness when time-sensitive
- contradiction status

Project Forge does not treat "it sounds plausible" or "we discussed it earlier" as validation.

The validation step is there to prevent:
- accidental basis formation
- chat-to-basis leakage
- stale source promotion

## Promotion Model
Promotion is conservative by design.

Material is promotable only if it is:
- `stabilized`
- `normative`
- `non_case_specific`

### Stabilized
The material is stable enough to recur without contradiction and without depending on one run.

### Normative
The material governs or constrains downstream decisions.

### Non-case-specific
The material is not tied to one anomaly, one machine, one session, or one transient state.

### Why Promotion Is Hard
This is one of the system's main safety barriers.

Without a conservative promotion model, everything drifts upward:
- notes become rules
- examples become policy
- one useful case pattern becomes fake general law

The promotion model exists to prevent local convenience from becoming system structure.

## Artifact System
Artifacts are where Project Forge allows state to live.

They are external by design.
That separation makes the system easier to reopen, audit, and reset.

### Core artifact principle
Artifacts may carry state.
Artifacts may not redefine canonicals.

### Baseline-supported artifact classes
Project Forge defines four baseline-supported artifact classes:
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`
- `HANDOFF_ARTIFACT`
- `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`

This does not mean all four are required in every opening.
It means the system knows how to support all four when needed.

### `TARGET_PROJECT_BRIEF_ARTIFACT`
Purpose:
transmit the minimum project-specific operational brief to the target project.

This is where project-specific opening shape lives.
It is not a notebook and not a mini-protocol.

Typical content:
- objective
- scope in
- scope out
- required outputs
- project-specific constraints

### `INITIAL_SSOT_ARTIFACT`
Purpose:
freeze the initial official basis of the target project.

This is the target project's starting ground.
It is not the place for candidate material.

Typical content:
- official materials
- approved sources
- base constraints
- version or date

### `HANDOFF_ARTIFACT`
Purpose:
transfer operational continuity when it cannot be reconstructed safely from canonicals and stable artifacts alone.

This artifact is intentionally temporary.
It exists for continuity, not for governance.

Typical content:
- current state
- recent tests
- open points
- next move

### `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`
Purpose:
transfer relevant material to the target project without promoting it to official basis yet.

This artifact solves a practical middle problem:
material may be worth passing along without being trustworthy enough to count as the opening basis.

Typical content:
- candidate materials
- source type
- validation state
- attach or review flag

### Why The Artifact Split Matters
If brief, SSOT, handoff, and transfer all collapse into one file, the operator loses:
- role clarity
- reading order
- verification clarity
- promotion discipline

The split is not bureaucracy.
It is boundary protection.

## Target-Project Package Startup Surface
The target-project package now has one standard startup surface that is not part of the four artifact classes:

- `ENTRY_POINT.md`

This file does not replace the brief.
It does not replace the initial SSOT.

Its role is narrower and more structural:
- define package read order
- define package-surface interpretation
- define startup inference limits
- define startup stop conditions

This matters because the target project needs one package-level reading surface in addition to the project-specific surfaces it receives.

In other words:
- `ENTRY_POINT.md` says how to read the package
- `TARGET_PROJECT_BRIEF_ARTIFACT` says what the target project is
- `INITIAL_SSOT_ARTIFACT` says what the target project may treat as official basis at startup

## Readiness Model
Readiness in Project Forge is not a vibe.
It is a gate.

The system distinguishes:
- documentary readiness
- measurable readiness

### Documentary readiness
This asks whether the opening package is closed enough on paper.

Minimum required closures:
- objective defined and singular
- scope in defined
- scope out defined
- required outputs defined
- canonical read order defined
- stop conditions defined
- project opening required artifacts defined
- no critical field marked `MISSING`

This is the base gate for clean opening.

### Measurable readiness
This is activated only when the target project depends on technical variables, measurable configurations, comparable states, or non-documentary checks.

The system first closes observability completeness:
- required measurable variables are named
- units or reference method exist
- missing measurements are explicitly marked

Then it closes measurable gate pass:
- all gate-required measures are present
- state is comparable

### Why The Split Matters
The system separates:
- "can we describe the measurable state honestly?"
from
- "is the measurable state sufficient to pass the gate?"

That prevents a subtle but important error:
treating well-documented absence as readiness.

Explicitly marked missing data is better than hidden missing data, but it does not automatically satisfy the gate.

## State Model
Project Forge uses four operational states:
- `READY`
- `NOT_READY`
- `BLOCKED`
- `CONFLICT`

### `READY`
The current opening decision can proceed now.
Not everything in the universe is known.
What matters is that the current gate is satisfied.

### `NOT_READY`
The frame and procedure are still coherent, but material is missing, weak, or incomplete.

This is a normal operating state.
It should not be treated as failure theater.

### `BLOCKED`
A structural condition is missing, invalid, or unavailable.

Typical blocked cases:
- forbidden residence is the only apparent path
- required artifact class is not defined
- measurable method is not closed
- comparability basis is missing

### `CONFLICT`
Incompatible claims remain open at the current authority level.

This state is especially important because conversational systems tend to smooth over conflict if not forced to hold it.

## Conflict Model
Project Forge distinguishes two broad conflict shapes:

### 1. Higher-vs-lower contradiction
A lower surface attempts to contradict a higher one.

This is resolved by canonical precedence.

### 2. Peer-authority divergence
Two peer-authority artifacts or peer-authority validated sources diverge.

This does not resolve through automatic precedence.
Minimum outcome is `CONFLICT` until:
- higher-surface validation closes the point, or
- explicit revalidation closes the point

This conservative rule exists to prevent the system from pretending that order alone creates truth.

## Override Model
Project Forge allows runtime overrides, but only inside a narrow bounded space.

### Immutable fields
These must not be changed by runtime override:
- system identity
- system frame
- authority hierarchy
- stability model
- residence model
- promotion model
- artifact grammar
- readiness model

### Overrideable fields
These may change at runtime:
- current-turn objective
- temporary priorities
- temporary exclusions
- current materials under evaluation
- run-local constraints
- artifact choice already allowed by canonicals

### Why Overrides Are Bounded
Without this boundary, runtime convenience becomes silent protocol rewrite.

The system allows local adaptation.
It does not allow the operator or model to rewrite the contract through temporary pressure.

## Handoff Model
Handoff exists for continuity, not by default.

Project Forge distinguishes:
- `HANDOFF_REQUIRED`
- `HANDOFF_FORBIDDEN`
- `HANDOFF_NOT_REQUIRED`

### `HANDOFF_REQUIRED`
Use this only when the next run would depend on state, tests, decisions, or materials that cannot be reconstructed reliably from canonicals and already-stable artifacts alone.

### `HANDOFF_FORBIDDEN`
Use this when the material:
- is `DO_NOT_STORE`
- would redefine frame
- would redefine SSOT
- would redefine canonicals

### `HANDOFF_NOT_REQUIRED`
Use this when canonicals and stable artifacts are already sufficient to reopen the work without material operational loss.

### Why Handoff Is Not Default
Many systems overproduce handoff because it feels safe.
In practice, unnecessary handoff creates:
- stale continuity
- duplicated state
- operator confusion
- side-channel governance

## Procedural Model
The working procedure is intentionally minimal:
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

The procedure is designed to force closure in the right order.

Three consequences matter:
- procedure should not start from artifacts alone
- procedure should not skip target closure
- procedure should not emit outputs because they "feel useful"

## Stop Conditions
Project Forge is designed to stop rather than improvise when critical closure is missing.

The protocol stops when:
- the real object is not closed
- authority is not closed
- target closure would materially change the move
- a lower-surface rule tries to redefine a higher one
- a required artifact class is undefined
- a forbidden stability-to-residence combination is attempted
- immutable fields are targeted by runtime override
- peer-authority conflict remains unresolved

Stop conditions are a control mechanism, not an inconvenience.

In conversational systems, many errors do not come from wrong answers.
They come from unearned forward motion.

## GPT Behavior And Session Hygiene
Project Forge depends heavily on explicit context hygiene because GPT systems are good at sounding continuous even when their basis is mixed, partial, or contaminated.

### Main hygiene rule
Start from files, not memory.

### Why this matters
If the AI starts from:
- remembered tone
- prior chat momentum
- loosely recalled earlier decisions
- implied session continuity

then the system may appear to work while actually bypassing its own control structure.

### Good practice
- prefer new or clearly bounded chats for consequential openings
- provide `AI_START.md`
- provide the canonicals
- provide only the artifacts that actually exist
- keep verified, inferred, and missing states distinct

### Bad practice
- assuming the model "already knows the case"
- treating chat history as authority
- giving every file "just in case"
- leaving material unclassified and hoping the model will sort it cleanly

## Drift And Reset Signals
Drift is when the session is no longer operating from the explicit current package.

Typical signals:
- the model refers to artifacts that were never provided
- the model acts as if state was already externalized when it was not
- the model fills gaps instead of marking them
- the model resolves ambiguity that should have changed the move
- the model speaks from prior discussion as if it were stable basis

### Reset strategy
Use the smallest reset that restores explicitness:
1. stop the current move
2. restate the object
3. restate the active authoritative files
4. restate what does not exist
5. reopen in a clean session if trust in the current one is gone

The technical point is simple:
once trust in current context hygiene collapses, a reset is often cheaper than repair.

## Session Patterns
Project Forge commonly operates in three session patterns:

### Fresh opening
The operator is preparing a target project from scratch.

Normal package:
- `AI_START.md`
- canonicals
- explicit source pack
- generated opening artifacts as needed

### Re-entry
The operator is continuing preparation or reopening a previous run.

Normal package:
- `AI_START.md`
- canonicals
- stable artifacts
- handoff only if criteria require it

### Smoke test
The operator is testing the system itself rather than running a consequential case.

Normal package:
- `AI_START.md`
- canonicals
- `smoke_test/SMOKE_TEST.md`
- one small case
- minimum target-project package templates, usually `ENTRY_POINT.md`, target brief, and initial SSOT

The smoke test is especially useful because it exposes whether the system can produce a clean opening without leaning on hidden context.

## Why Templates Exist
Templates exist to accelerate correct instantiation of artifacts without changing authority.

They help with:
- field completeness
- faster startup
- schema adherence
- artifact consistency

They do not:
- create authority
- validate content
- decide when an artifact is required

Those decisions remain upstream in the canonicals.

The same logic applies to the web compiler:
- it helps instantiate and fill the surfaces
- it does not decide truth, authority, or promotion

## Recommended Minimum Opening Pack
For many clean first openings, the smallest useful pack is:
- `ENTRY_POINT.md`
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`

Then add:
- `HANDOFF_ARTIFACT` only if continuity truly depends on it
- `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT` only if candidate material must travel without promotion

This is a technical design preference, not just an operator convenience.
Smaller surface area reduces noise and false relevance.

## Failure Modes To Watch Closely

### 1. Canonical contamination
Case state begins to leak into the canonicals.

Effect:
the protocol core becomes mixed with live project state.

### 2. Artifact role collapse
Brief, SSOT, handoff, and transfer are used as if they were interchangeable.

Effect:
authority becomes muddy and reopening becomes harder.

### 3. Premature promotion
Material enters stable basis before validation or before proving it is non-case-specific.

Effect:
local convenience hardens into fake structure.

### 4. Default handoff
Handoff is emitted every time because it feels safer.

Effect:
operational residue accumulates and continuity becomes noisy.

### 5. Runtime override abuse
Temporary constraints are used to justify rewriting stable rules.

Effect:
the system quietly stops being itself.

### 6. GPT continuity illusion
The model behaves as if it has stable continuity when it is actually interpolating from mixed sources.

Effect:
false confidence, incorrect basis, and subtle drift.

## Why The System Uses Both A Practical Guide And A Technical Reference
The operator guide and this technical reference serve different jobs.

### Operator guide
Explains how to run the system well.
It is optimized for use, flow, and practical decisions.

### Technical reference
Explains how the mechanism works and why it is built the way it is.
It is optimized for inspection, diagnosis, and architecture understanding.

This split matters because a single document that tries to be:
- canonical
- onboarding guide
- runtime checklist
- technical rationale

usually becomes harder to trust and harder to use.

## Design Tradeoffs
Project Forge makes several explicit tradeoffs:

### Explicitness over smoothness
It prefers visible missing data to fluent invention.

### Bounded surfaces over convenience
It prefers multiple role-specific surfaces over one overloaded surface.

### Conservative promotion over fast hardening
It prefers candidate material to remain external longer rather than promoting too early.

### Reset over contaminated continuity
It prefers reopening cleanly over pretending a dirty session is still trustworthy.

### Human authority over model momentum
It prefers explicit operator confirmation where consequence is real.

These tradeoffs are not accidents.
They are the design philosophy of the system.

## How To Use This Reference Well
Use this file when:
- you need to understand a mechanism
- you need to explain the system to another operator
- you are designing the HTML/wiki layer
- you are diagnosing why a session felt wrong
- you are deciding whether a new support surface would duplicate authority

The web compiler is one of those support surfaces:
- `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`

Do not use this file to overrule the canonicals.
If you find a contradiction, treat it as:
- a documentation drift issue here, or
- a real canonical issue that must be fixed upstream

## Suggested Reading Path
If you are new to Project Forge but want the technical picture quickly:
1. read `00_SCOPE.md`
2. read `01_RULES.md`
3. read `03_ARTIFACTS.md`
4. read `02_PROTOCOL.md`
5. read `AI_START.md`
6. read the operator guide
7. come back here for mechanism and rationale

If you are diagnosing a specific problem:
- start from the relevant canonical
- then come here for the system explanation around it

## Final Technical Summary
Project Forge is a preparation system for opening target ChatGPT projects from explicit structure rather than hidden conversational context.

Its core design is:
- protocol in canonicals
- case state in artifacts
- startup routed by `AI_START.md`
- operation interpreted by the operator guide
- system understanding supported by this reference

If those layers remain separate, the system stays understandable and recoverable.

If those layers collapse into each other, the system will still sound coherent for a while, but it will become harder to trust.
