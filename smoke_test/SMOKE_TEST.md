# Project Forge Smoke Test

## What This Test Is For
This is a small, honest test of the system.

It checks one thing that matters more than the rest:

can Project Forge produce a clean target-project opening package from explicit files instead of hidden chat carry-over?

This is not a full system certification.
It is a startup test.

## What You Are Really Testing
You are not testing whether GPT sounds smart.

You are testing whether the system can:
- start from the right files
- respect startup order
- keep authority clean
- build the minimum opening package without inventing missing state
- let a target project start without depending on the preparation chat

If this test fails, the problem is usually not "we need more theory."
The problem is usually one of these:
- dirty session setup
- unclear startup pack
- loose source exposure
- weak package discipline

## Use A Clean Environment
Run this in the cleanest environment you can.

Prefer:
- a new chat
- a new or clearly isolated project
- only the files named for the test

If the platform can reference previous chats or saved memory, assume contamination is possible unless you have deliberately isolated the run.

## Files To Provide
For this test, provide only:
- `AI_START.md`
- `00_SCOPE.md`
- `01_RULES.md`
- `03_ARTIFACTS.md`
- `02_PROTOCOL.md`
- `artifact_templates/ENTRY_POINT.md`
- `artifact_templates/TARGET_PROJECT_BRIEF_ARTIFACT.template.md`
- `artifact_templates/INITIAL_SSOT_ARTIFACT.template.md`
- `smoke_test/CASE_01_MINIMAL_OPENING.md`

Do not add extra files "just in case."
If the input pack is noisy, the test becomes harder to trust.

## How To Run It

### 1. Start a fresh session
Do not begin from an already contaminated or over-contextualized chat.

### 2. Provide only the test pack
Give the AI only the files listed above.

### 3. Give a short instruction
Keep the instruction short.

Something like this is enough:
- read `AI_START.md`
- use the canonicals
- use the smoke test case

Do not explain the whole system in your own words unless the AI clearly starts from the wrong place.
If the AI needs a long spoken briefing to begin correctly, the test has already lost value.

### 4. Watch the first move
The first move is the highest-signal part of the test.

The AI should:
- route through `AI_START.md`
- rebuild the canonicals in the right order
- avoid claiming hidden continuity
- understand that `ENTRY_POINT.md` is the package startup surface
- understand that the brief and initial SSOT carry project-specific opening content

The AI should not:
- start from source material
- act as if artifacts already exist when only templates exist
- treat templates as authority
- emit handoff by default
- invent basis that is not present

### 5. Ask it to build the minimum opening package
For this smoke test, the minimum acceptable target-project package is:
- `ENTRY_POINT.md`
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`

Nothing else should be required unless the run materially changes shape.

### 6. Judge the outcome honestly
At the end, ask one question:

if I open the target project from the generated package, can it begin without depending on the preparation chat as hidden state?

If the answer is no, the test did not pass.

## What A Good Minimum Result Looks Like
A good minimum result gives you:
- one usable `ENTRY_POINT.md`
- one usable target-project brief
- one usable initial SSOT
- explicit marking of what is still missing
- no silent reliance on preparation-chat continuity

It does not need to be elegant.
It needs to be clean, sufficient, and trustworthy.

## Failure Signals
Treat the test as failed if the AI:
- pulls from previous chats or memory you did not provide
- behaves as if missing artifacts already exist
- skips `ENTRY_POINT.md` or reduces it to noise
- treats source material as official basis by default
- emits handoff without real need
- leaves the target project still dependent on the preparation chat

## If It Fails
Do not spend twenty turns arguing inside a contaminated session.

Take the smallest reset that restores explicitness:
1. stop the move
2. restate the real file set
3. restate what does not exist yet
4. restart cleanly if trust in the session is gone

## When The Test Has Passed
The test has passed when the target project could be opened from the generated package without needing the preparation chat as hidden state.

That is the real threshold.
Everything else is secondary.