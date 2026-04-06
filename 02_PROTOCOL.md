# 02_PROTOCOL

## Purpose
Define the minimum working procedure of Project Forge.

## Authority
Highest on procedure.
This file applies criteria already closed above.
This file may not redefine criteria, frame, or artifact grammar.

## Read Order
Read after `01_RULES.md`.
Read after `03_ARTIFACTS.md` when artifact grammar is required for the current move.

## Contains
- intake
- target closure
- output closure
- stability classification
- residence assignment
- source validation application
- promotion flow
- readiness gate application
- handoff need application
- runtime override handling
- `DO_NOT_STORE` sink handling
- measurable readiness application
- peer conflict handling
- state definitions
- state outputs
- stop conditions

## Does Not Contain
- new criteria
- new authority hierarchy
- artifact grammar
- live case state
- live handoff content
- scope redefinition

## State Definitions
- `READY`
  All required gate conditions for the current opening decision are satisfied.
- `NOT_READY`
  Required material is still missing or weak, but the frame and procedure remain coherent.
- `BLOCKED`
  A structural condition is missing, invalid, or unavailable, so the flow cannot continue safely.
- `CONFLICT`
  Two or more surfaces produce incompatible claims that cannot be closed at the current authority level.

## Standard Flow
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

Do not skip a step if the skipped step would change target, authority, readiness, or output.

## Intake
At intake, close:
- what target project is being prepared
- what opening decision is being made
- what materials are already present
- what remains external
- what runtime constraints apply now

If intake does not close the real object, stop before classification.

## Target Closure
Close:
- `objective`
- `scope_in`
- `scope_out`

If target closure remains unstable, minimum state is `NOT_READY`.

## Output Closure
Close:
- `required_outputs`
- whether project-opening artifacts are required
- whether handoff evaluation is required

If required outputs cannot be named, minimum state is `NOT_READY`.

## Stability Classification
For each relevant information unit:
- classify as `PERSISTENT` or `VOLATILE`
- do not assign residence before stability is closed enough

If stability cannot be closed safely, minimum state is `NOT_READY`.

## Residence Assignment
For each classified information unit:
- apply the allowed stability-to-residence mapping from `01_RULES.md`
- reject forbidden combinations
- choose the most conservative valid residence when tension exists

If a forbidden combination is the only apparent path, minimum state is `BLOCKED`.

## Source Validation Application
Apply source validation criteria from `01_RULES.md`.
Unvalidated material must not become official basis.

## Promotion Flow
Promotion is allowed only if `01_RULES.md` tests are satisfied.

Apply promotion in this order:
1. validate input material
2. test `stabilized`
3. test `normative`
4. test `non_case_specific`
5. emit only the artifact or canonical consequence already allowed above

If one promotion test fails, do not promote.

## Documentary Readiness Gate
Apply the documentary readiness criteria from `01_RULES.md`.

At minimum, verify:
- critical fields are present
- no critical field is `MISSING`
- canonical read order is closed
- project opening required artifacts are defined when required

If the frame is coherent but documentary readiness is incomplete, minimum state is `NOT_READY`.

## Measurable Readiness Application
Apply measurable readiness only when the trigger from `01_RULES.md` is active.

First apply:
- observability completeness tests

Then apply:
- measurable gate pass tests

Outcome rule:
- if observability is closed but gate-required measures are missing, minimum state is `NOT_READY`
- if observability itself is not closed, minimum state is `BLOCKED`

## Peer Conflict Handling
If peer-authority artifacts or peer-authority validated sources diverge on the same point:
- do not apply automatic precedence
- set minimum state to `CONFLICT`
- hold the point open until higher-surface validation or explicit revalidation closes it

## Runtime Override Handling
Runtime overrides may apply only to fields already marked overrideable in `01_RULES.md`.

If a runtime override attempts to touch an immutable field:
- do not apply it
- set minimum state to `CONFLICT`
- surface the governing rule

## DO_NOT_STORE Handling
If material is classified `DO_NOT_STORE`:
- do not serialize it
- do not promote it
- do not include it in SSOT
- do not include it in handoff
- discard it as stable output material

## Handoff Need Application
Apply the handoff criteria from `01_RULES.md`.

### HANDOFF_REQUIRED
- emit `HANDOFF_ARTIFACT` according to `03_ARTIFACTS.md`

### HANDOFF_NOT_REQUIRED
- do not emit `HANDOFF_ARTIFACT`

### HANDOFF_FORBIDDEN
- do not emit `HANDOFF_ARTIFACT`
- output:
  - `forbidden_reason`
  - `governing_rule`
  - `required_disposition`
  - `minimum_safe_next_move`

## READY Output Minimum
- `readiness_basis`
- `authorized_next_move`
- `artifacts_to_read`
- `artifacts_to_emit`

## NOT_READY Output Minimum
- `missing_items`
- `weak_items`
- `blocking_or_non_blocking`
- `minimum_next_move`

## BLOCKED Output Minimum
- `blocking_cause`
- `governing_owner`
- `minimum_unblock_move`

## CONFLICT Output Minimum
- `conflicting_sources`
- `resolution_rule_applied`
- `suspended_point`
- `minimum_unblock_move`
- `peer_authority_status`

## Stop Conditions
Stop immediately if:
- the real object is not closed
- authority is not closed
- target closure changes the move materially
- a lower-surface rule attempts to redefine a higher-surface rule
- a required artifact class is undefined
- a forbidden stability-to-residence combination is attempted
- immutable fields are targeted by runtime override
- peer-authority conflict remains unresolved

## Reader Rule
This file defines how the system operates.
This file does not define what is true outside the criteria already closed above.
