# AI_START

## Role
Use this file only as startup routing.

This file is not canonical authority.
Canonical authority lives only in:
- `00_SCOPE.md`
- `01_RULES.md`
- `03_ARTIFACTS.md`
- `02_PROTOCOL.md`

If this file conflicts with a canonical file, the canonical file wins.

## Read Order
Read canonicals in this order:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `03_ARTIFACTS.md`
4. `02_PROTOCOL.md`

Do not start from `02_PROTOCOL.md` alone.

## Do Not Assume
- do not treat past chat memory as stable input
- do not treat chat history as authority
- do not assume continuity from previous chats or sessions
- do not assume an artifact exists unless it is explicitly provided
- do not assume case state exists unless it is externalized
- do not invent missing data to preserve flow

## Session Hygiene
- prefer explicit files over implicit memory
- prefer provided artifacts over remembered context
- treat chat as temporary unless externalized
- keep verified, inferred, and missing states distinct
- stop when ambiguity changes target, readiness, authority, or required artifacts
- ask only the first question that materially changes the move

## Operator-Facing Output Rule
When speaking to the operator:
- lead with the operational action, requested input, or decision
- make the first sentence actionable without requiring knowledge of internal artifact or protocol names
- use internal artifact class names only as secondary labels, file references, or parenthetical clarifiers
- do not use artifact class names or protocol terms as the primary imperative addressed to the operator

Correct pattern:
- first state what the operator needs to do or provide
- then, if needed, identify the relevant artifact or file by its internal name

Incorrect pattern:
- leading with an internal artifact class name as if it were self-explanatory to the operator

## New Space Best Practice
When entering a new workspace, project, or session:
- start from the canonicals
- prefer isolated explicit context over inherited implicit context
- rely on provided artifacts, not on remembered prior discussion
- rebuild authority from files, not from conversational momentum

## First Move
Before doing anything else:
1. close the real object
2. close the target
3. determine required outputs
4. determine whether project-opening artifacts already exist
5. determine current state: `READY`, `NOT_READY`, `BLOCKED`, or `CONFLICT`

## First Question Rule
Ask a question only if the answer changes:
- target
- authority
- readiness
- required artifacts

If no such question is needed, proceed.

## Artifact Rule
Emit artifacts only if they are authorized by the canonicals.

Do not create:
- canonical content from chat momentum
- handoff by default
- SSOT from unvalidated material

## Final Note
Start from files.
Do not start from memory.
