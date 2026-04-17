# Project Forge (GPT_PF) Operator Guide

## What This Guide Is
This guide is for the human operator.

Use it to run Project Forge well.
Use it to set up a clean session.
Use it to decide what to give the AI, what to hold back, what to externalize, and when to stop.

This guide is not canonical authority.

Canonical authority lives only in:
- `00_SCOPE.md`
- `01_RULES.md`
- `03_ARTIFACTS.md`
- `02_PROTOCOL.md`

Use this guide to operate the system.
Do not use this guide to override the canonicals.

## Naming Note
In this guide, the system is called `Project Forge` or `GPT_PF`.

## What Project Forge Is
Project Forge is a preparation system for opening target projects in ChatGPT.

It does not run the target project.
It prepares the target project so it can start from explicit structure instead of reconstructing the case from chat.

Its job is simple:
- close the target
- classify the information
- externalize the right state
- open the target project with the right package

If the target project can start cleanly without rebuilding hidden context, Project Forge is doing its job.

## What Project Forge Is Not
Project Forge is not:
- a live project
- a case archive
- a notebook
- a raw dump of sources
- a replacement for memory
- a place to keep transient state inside the canonical core

If case state starts living in the canonicals, the system is being used incorrectly.

## Where Authority Really Lives
When in doubt, use this order:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `03_ARTIFACTS.md`
4. `02_PROTOCOL.md`

That is both the canonical read order and the practical order for rebuilding the system in a fresh session.

Read them in that order.
Do not start from `02_PROTOCOL.md` alone.
Without frame, rules, and artifact grammar, procedure can be misread as permission.

## The Role Of AI_START
`AI_START.md` is a bootstrap file for the AI.

Use it when you want to drop an AI into the system and have it begin correctly with minimal briefing.

Its purpose is narrow:
- route the AI into the canonicals
- set startup hygiene
- tell it what not to assume
- make it ask the first correct question, if a question is really needed

It is not a fifth canonical.
It does not introduce new rules.

A good practical pattern is:
- give the AI `AI_START.md`
- give it the canonicals
- give it only the artifacts that actually exist
- then let it start

## The Role Of The Web Compiler
Project Forge also has a guided web compiler:

- `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`

Use it when you want a cleaner operator-facing surface for filling the opening artifacts.

Use it to:
- fill the brief and initial SSOT in a structured way
- keep required and optional surfaces visible
- review imports before they affect the draft
- export a cleaner opening package

Do not treat the compiler as authority.
It is a support surface for artifact compilation.
The canonicals still govern the system.

## Before You Start A Session
Before opening a real case, decide what kind of session you are running.

There are only three normal session shapes:

### 1. Fresh case
Use this when you are opening a new target project from scratch.

Typical inputs:
- canonicals
- `AI_START.md`
- maybe this guide
- maybe a few explicit materials

### 2. Re-entry into an existing case
Use this when the target project or preparation work already exists and you need continuity.

Typical inputs:
- canonicals
- `AI_START.md`
- existing artifacts
- possibly `HANDOFF_ARTIFACT` if continuity truly depends on it

### 3. Smoke test
Use this when you are testing whether Project Forge itself behaves correctly.

Typical inputs:
- canonicals
- `AI_START.md`
- `smoke_test/SMOKE_TEST.md`
- one simple case file
- the smallest useful package templates, usually `artifact_templates/ENTRY_POINT.md`, target brief, and initial SSOT

Do not mix these three modes casually.
If you do, you usually create confusion about what is real state and what is only a test.

## GPT Setup And Session Hygiene
This is the most important practical section in the guide.

Project Forge is built on explicit context.
GPT systems are very good at sounding continuous even when that continuity is implicit, partial, or contaminated.

If you do not control session hygiene, the system will look like it works while actually pulling from places you did not intend.

### Best Practice: Prefer Clean Starts
If the work matters, prefer:
- a new chat
- a clean project or a clearly bounded project
- explicit files and artifacts

Do not rely on conversational carry-over unless that carry-over has already been externalized.

### Best Practice: Minimize Hidden Memory
When you need a clean run, be careful with:
- saved memories
- chat history reference
- default project continuity

If the environment can reference previous chats or persistent memories, assume contamination is possible unless you have deliberately disabled it or isolated the session.

### Best Practice: Files Beat Memory
If something matters, put it in a file or artifact.

Do not trust:
- memory of an earlier answer
- a vague sense that "the model already knows"
- previous chat continuity

Trust:
- canonicals
- provided artifacts
- validated source material

### Best Practice: Start From Explicit Inputs
A good startup pack is:
- `AI_START.md`
- the 4 canonicals
- the package startup surface when the target project package is being built
- only the artifacts that actually exist
- only the source material you intend to expose

Do not give ten files "just in case".
Volume creates noise before it creates clarity.

## Drift: What It Looks Like
Drift means the AI is no longer operating from the explicit current package.

Typical signs:
- it brings in facts or examples from previous chats you did not provide
- it acts as if an artifact exists when it does not
- it speaks as if the state is already known even though it was never externalized
- it answers from chat momentum instead of from the canonicals and artifacts
- it resolves ambiguity without asking when the ambiguity should have changed the move

### What To Do When Drift Appears
Do not argue with the drift inside the drift.

Use the smallest reset that restores explicit context:
1. stop the current move
2. restate the current object
3. restate what files are authoritative in this session
4. restate what does not exist
5. if needed, reopen in a cleaner chat or project

If the session has clearly become contaminated, a clean restart is often cheaper than patching trust back into it.

## Operator Responsibilities
Project Forge does not remove operator responsibility.
It makes it more visible.

The operator is responsible for:
- deciding whether the session is fresh, re-entry, or test
- deciding what materials to expose
- deciding what is official enough to count as basis
- deciding when a target project should really be opened
- deciding when a session is contaminated and should be reset

The AI is useful for:
- reading the canonicals correctly
- classifying information
- pointing out missing pieces
- building authorized artifacts
- holding the protocol line

The AI is not a substitute for operator judgment on:
- real authority
- trust in the source pack
- whether a setup is clean enough
- whether a new target project should be opened now or later

## The Smallest Correct Way To Start A Case
Start smaller than you think.

A good opening rhythm is:

### Step 1. Close the object
Be able to say, in plain language:
- what target project is being prepared
- what decision is being made now
- what outcome must exist at opening

If you cannot say that clearly, you are not ready for artifact creation.

### Step 2. Close the target
Close:
- objective
- scope in
- scope out

If those three are unstable, the honest state is usually `NOT_READY`.

If you want a guided surface for filling those sections, the web compiler is a good fit:
- `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`

### Step 3. Close the output set
Be able to say:
- what the target project must receive
- whether a target brief is needed
- whether initial SSOT is needed
- whether handoff is needed
- whether transfer artifact is needed

### Step 4. Classify the information
For each meaningful information unit:
- decide if it is `PERSISTENT` or `VOLATILE`
- then decide residence

Never reverse that order.

### Step 5. Assign residence
Choose:
- `CANONICAL`
- `EXTERNAL_ARTIFACT`
- `RUNTIME_OPERATOR_INPUT`
- `DO_NOT_STORE`

In normal use, most case-specific material belongs in `EXTERNAL_ARTIFACT`.
That is a feature, not a failure.

### Step 6. Validate sources
Before something becomes official basis:
- close authority
- close role
- close relevance
- close freshness if time-sensitive

### Step 7. Apply readiness
Check:
- documentary readiness
- measurable readiness when the domain requires it

Then close the honest state:
- `READY`
- `NOT_READY`
- `BLOCKED`
- `CONFLICT`

### Step 8. Emit only authorized artifacts
Do not emit artifacts because they "might be useful".
Emit them because the system says they are the correct surface.

## What The Entry Point And Four Artifacts Are For

### ENTRY_POINT.md
Use this as the startup surface of the target-project package.

It should tell the target project:
- how to read the package
- what each package surface is for
- what counts as official basis
- what does not count as official basis
- what must not be inferred
- when to stop and ask

Use it for package interpretation.
Do not use it as a hidden brief or a hidden SSOT.

### TARGET_PROJECT_BRIEF_ARTIFACT
Use this when the target project needs a project-specific opening brief.

It should tell the target project:
- what it is
- what it must do
- what is in scope
- what is out of scope
- what outputs are expected
- what project-specific constraints matter

Use it for opening shape.
Do not use it as a notebook.

### INITIAL_SSOT_ARTIFACT
Use this when the target project needs a frozen initial basis.

It should tell the target project:
- what materials count as official at opening
- what sources are approved
- what base constraints apply
- what version or date defines the basis

Use it for official starting ground.
Do not use it as a pile of candidate material.

### HANDOFF_ARTIFACT
Use this only when continuity across runs cannot be reconstructed safely from the canonicals and stable artifacts alone.

It should tell the next run:
- current state
- recent tests
- open points
- next move

Use it for continuity.
Do not use it by default.
Do not use it to smuggle canonicals or SSOT through a side door.

### SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT
Use this when material must travel to the target project without becoming official basis yet.

It should tell the target project:
- what candidate materials exist
- what type of source each one is
- whether it is validated or not
- whether it should be attached or only reviewed

Use it for controlled transfer of not-yet-promoted material.
Do not use it as fake SSOT.

## How To Use The Templates
Template files live in:
- `artifact_templates/ENTRY_POINT.md`
- `artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md`
- `artifact_templates/INITIAL_SSOT_ARTIFACT.template.md`
- `artifact_templates/HANDOFF_ARTIFACT.template.md`
- `artifact_templates/SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.template.md`

They are startup surfaces only.

They help you:
- not forget required fields
- stay close to artifact grammar
- move from protocol to real use faster

They do not create authority by themselves.
Authority still comes from the canonicals.

If you want to fill the same artifact structure in a guided browser surface instead of editing the files directly, use:
- `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`

## Minimum Practical Opening Pack
In the most common clean opening, expect to need:
- one entry point
- one target brief
- one initial SSOT

Then add:
- one handoff only if continuity really requires it
- one transfer artifact only if candidate material must travel without promotion

That is usually enough.
If you find yourself generating every surface every time, slow down and ask whether you are externalizing genuine need or just anxiety.

## Readiness In Practice

### Documentary readiness
This asks whether the opening package is defined enough on paper.

At minimum, check:
- objective
- scope in
- scope out
- required outputs
- canonical read order
- stop conditions
- project opening required artifacts

If one critical field is missing, the package is not documentarily ready.

### Measurable readiness
Some domains need more than documents.

If the target project depends on measurable technical state, you also need:
- required measurable variables named
- unit or method defined
- missing measures explicitly marked
- gate-required measures present
- comparable state

If the measures are missing but the method is closed, the honest state is usually `NOT_READY`.

If even the method or comparability is missing, the honest state is usually `BLOCKED`.

## How To Read The Four States

### READY
Use this only when the current opening decision can proceed now.

It does not mean everything is known.
It means what is required for this move is sufficiently closed.

### NOT_READY
Use this when the frame still holds but material is missing or weak.

This is a normal state.
Do not be afraid of it.

### BLOCKED
Use this when a structural condition is missing or invalid.

Typical cases:
- required artifact class unavailable
- method undefined
- forbidden residence is the only apparent path

### CONFLICT
Use this when incompatible claims remain open at the current authority level.

Do not smooth over `CONFLICT` with good tone or momentum.

## Common Failure Modes

### Starting from chat momentum
You already understand the case in your head, so you start writing outputs before closing object, target, and output set.

Result:
- vague artifacts
- missing structure
- target project reconstruction

Corrective move:
- go back to object and target closure

### Treating chat as storage
You act as if the state is safe because it was discussed.

Result:
- hidden dependency on memory
- fake continuity

Corrective move:
- externalize the state into the correct artifact

### Promoting too early
You move material into stable basis before validation or before it is clearly non-case-specific.

Result:
- noise becomes structure
- local details pretend to be rules

Corrective move:
- keep candidate material in transfer artifact until it earns promotion

### Writing handoff by default
You emit handoff because it feels safe.

Result:
- duplicated continuity
- stale operational state
- unnecessary surfaces

Corrective move:
- use handoff only when the criteria say `HANDOFF_REQUIRED`

### Mixing artifact roles
You put brief, SSOT, handoff, and transfer material in one place.

Result:
- muddy authority
- harder reading for the target project
- harder verification for the operator

Corrective move:
- keep artifact roles separate

### Letting GPT improvise missing data
The model fills a gap because the flow "feels obvious".

Result:
- hidden assumptions
- false readiness
- unstable outputs

Corrective move:
- mark missing as missing
- stop if the gap changes the move

## Practical Session Patterns

### Pattern A: Fresh opening
Use:
- `AI_START.md`
- the 4 canonicals
- only the materials you want to expose

Do:
- close target
- instantiate brief and SSOT if needed
- check readiness
- open the target project

### Pattern B: Re-entry with continuity
Use:
- `AI_START.md`
- the 4 canonicals
- existing stable artifacts
- `HANDOFF_ARTIFACT` only if genuinely required

Do:
- re-close the object
- verify what still counts as current
- reject stale state if needed

### Pattern C: Smoke test
Use:
- `AI_START.md`
- the 4 canonicals
- one small case
- minimum opening pack

Do:
- test whether the target project can start without rebuilding from chat

This is the best honest test of whether the system is operational.

## What To Give The AI At The Beginning
Good startup package:
- `AI_START.md`
- the 4 canonicals
- only the artifacts that actually exist
- only the source pack you want it to use

If you want to prepare those artifacts before the AI session begins, the web compiler is a valid operator surface:
- `https://xxyoudeadpunkxx.github.io/GPT-PF-Chat-GPT-Project-Forge/compiler/`

Do not give:
- old chats as if they were authoritative
- hidden assumptions
- mixed notes that have not been classified
- every available source "just in case"

## What To Do If You Are Unsure
If you are unsure:
- prefer the smaller move
- prefer explicit files over memory
- prefer `NOT_READY` over fake readiness
- prefer transfer artifact over premature promotion
- prefer reset over contaminated continuity

## Recommended First Real Test
The first serious use of Project Forge should be small.

Use one simple case.
Instantiate:
- one target brief
- one initial SSOT

For a concrete example, use `smoke_test/CASE_01_MINIMAL_OPENING.md`.

Then see whether the target project starts cleanly without reconstructing the case from chat.

If that works, the system is already useful.
Do not wait for perfect elegance before using it.

## Final Reminder
Project Forge works best when:
- canonicals stay tight
- artifacts stay explicit
- the AI starts from files, not memory
- the operator stays honest about what is known, missing, stable, and temporary

If you have to choose between smoothness and explicitness, choose explicitness.
