# 01_RULES

## Purpose
Define the stable criteria of Project Forge.

## Authority
Highest on criteria.
Lower files may apply these rules.
Lower files may not redefine these rules.

## Read Order
Read after `00_SCOPE.md`.

## Contains
- canonical precedence
- cross-reference rule
- collision rule
- authority hierarchy
- stability classes
- residence classes
- stability-to-residence relation
- source validation criteria
- promotion eligibility criteria
- documentary readiness criteria
- measurable readiness trigger
- observability completeness tests
- measurable gate pass tests
- peer authority conflict rule
- handoff criteria
- immutable fields
- overrideable fields

## Does Not Contain
- procedural sequencing
- state transitions
- artifact instances
- live case content
- handoff instances
- domain examples

## Canonical Precedence
`00_SCOPE.md > 01_RULES.md > 02_PROTOCOL.md > 03_ARTIFACTS.md`

If a lower file contradicts a higher file on the same point, the lower file does not authorize that point.

## Canonical Read Order
Read canonicals in this order:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `03_ARTIFACTS.md`
4. `02_PROTOCOL.md`

## Cross-Reference Rule
A lower file may reference a higher rule.

A lower file may not redefine a higher rule.

Reference is not decision.

## Collision Rule
Collision exists only if:
- a lower surface introduces autonomous criteria on a question already closed above
- a surface decides outside its own authority quadrant

## Authority Hierarchy
Authority closes in this order:
1. `00_SCOPE.md`
2. `01_RULES.md`
3. `02_PROTOCOL.md`
4. `03_ARTIFACTS.md`
5. validated external artifacts within delegated local authority
6. runtime operator input within allowed runtime scope

No lower surface may overrule a higher surface.

## Stability Classes
- `PERSISTENT`
- `VOLATILE`

## Residence Classes
- `CANONICAL`
- `EXTERNAL_ARTIFACT`
- `RUNTIME_OPERATOR_INPUT`
- `DO_NOT_STORE`

## Stability-To-Residence Rule
Decide in this order:
1. classify stability
2. assign residence

Stability constrains residence.
Stability does not determine residence by itself.

Allowed combinations:
- `PERSISTENT -> CANONICAL`
- `PERSISTENT -> EXTERNAL_ARTIFACT`
- `PERSISTENT -> RUNTIME_OPERATOR_INPUT` only through the explicit exception below
- `VOLATILE -> EXTERNAL_ARTIFACT`
- `VOLATILE -> RUNTIME_OPERATOR_INPUT`
- `VOLATILE -> DO_NOT_STORE`

Forbidden combinations:
- `VOLATILE -> CANONICAL`
- `PERSISTENT -> DO_NOT_STORE`

This table is exhaustive.

If stability and residence pull in different directions, choose the most conservative residence that still respects authority.

## Persistent-To-Runtime Exception
`PERSISTENT -> RUNTIME_OPERATOR_INPUT` is allowed only if:
- all required positive conditions are true
- no disqualifier is active

Required positive conditions:
- `operator_confirmation_required`
  True only if the information must be explicitly reaffirmed at each run because of operational risk, explicit human responsibility, or non-delegable local choice.

Disqualifiers:
- `operator_preference_only`
  Repetition by habit or preference is not sufficient.
- `canonical_or_artifact_mandatory`
  If the information stably governs downstream decisions, runtime-only residence is insufficient.

Operator preference alone does not block promotion to `CANONICAL` or `EXTERNAL_ARTIFACT`.

## DO_NOT_STORE Rule
`DO_NOT_STORE` material:
- must not be serialized
- must not be promoted
- must not enter handoff
- must not enter SSOT
- must not become stable project basis

## Immutable Fields
- system identity
- system frame
- authority hierarchy
- stability model
- residence model
- promotion model
- artifact grammar
- readiness model

## Overrideable Fields
- current-turn objective
- temporary priorities
- temporary exclusions
- current materials under evaluation
- run-local constraints
- artifact choice already allowed by canonicals

## Source Validation Criteria
Validate sources by:
- authority
- direct relevance
- explicit role
- freshness when time-sensitive
- contradiction status

No unvalidated source may become official project basis.

## Promotion Eligibility
Material is eligible for promotion only if all are true:
- `stabilized`
- `normative`
- `non_case_specific`

### Stabilized
True only if the content is confirmed stable by the operator or recurs coherently across at least 2 cycles without contradiction and without depending on a single run.

### Normative
True only if the content authorizes, constrains, or governs downstream decisions.

### Non-Case-Specific
True only if the content does not depend on a single machine, anomaly, run, or temporary state.

## Documentary Readiness Criteria
Documentary readiness requires all of the following:
- `objective` defined and singular
- `scope_in` defined
- `scope_out` defined
- `required_outputs` defined
- canonical read order defined
- stop conditions defined
- project opening required artifacts defined
- no critical field marked `MISSING`

## Critical Fields
- `objective`
- `scope_in`
- `scope_out`
- `required_outputs`
- `canonical_read_order`
- `stop_conditions`
- `project_opening_required_artifacts`

## Project Opening Required Artifacts
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`
- artifact read order defined

## Measurable Readiness Trigger
Measurable readiness is required when the target project depends on technical variables, measurable configurations, comparable states, or checks that are not only documentary.

## Observability Completeness Tests
- `required_measurable_variables_defined`
  Required technical variables are explicitly named.
- `measure_units_or_reference_method_defined`
  A unit or reference method exists to make measures comparable.
- `missing_measurements_explicit`
  Any missing measure that affects the gate is explicitly marked missing.

## Measurable Gate Pass Tests
- `required_gate_measures_present`
  All gate-required measures are present.
- `state_comparable`
  The captured state is comparable to other states, setups, or runs in the same domain.

## Measurable Readiness Outcome Rule
If a gate-required measure is missing but method, units, and comparison basis are already closed, minimum outcome is `NOT_READY`.

If method, units, or comparability are also missing, minimum outcome is `BLOCKED`.

## Peer Authority Conflict Rule
Between peer-authority surfaces, no automatic precedence exists.

If two peer-authority artifacts or two peer-authority validated sources diverge on the same point, minimum outcome is `CONFLICT` until higher-surface validation or explicit revalidation closes the point.

## Handoff Criteria
`HANDOFF_REQUIRED`
- when the next run would depend on state, tests, decisions, or materials that cannot be reconstructed reliably from canonicals and already-stable artifacts alone

`HANDOFF_FORBIDDEN`
- when the material is `DO_NOT_STORE`
- when the material would redefine frame, SSOT, or canonicals

`HANDOFF_NOT_REQUIRED`
- when canonicals and existing stable artifacts are sufficient to reopen the work without material operational loss

## Reader Rule
This file closes criteria.
Nothing below this file may invent new criteria.
