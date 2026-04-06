# 03_ARTIFACTS

## Purpose
Define the grammar of allowed external artifacts.

## Authority
Highest on artifact surface and artifact grammar.
This file may define artifact-local authority.
This file may not redefine canonical truth, scope, criteria, or procedure.

## Read Order
Read after `01_RULES.md` and before `02_PROTOCOL.md`.

## Contains
- allowed artifact classes
- system artifact baseline
- local artifact authority
- artifact surface
- artifact schema
- write triggers
- read triggers
- freshness rules
- artifact-specific promotion conditions
- custom artifact requirements
- artifact read order

## Does Not Contain
- live artifact instances
- live SSOT content
- live handoff content
- live target brief content
- case state
- canonical criteria
- procedural sequencing

## Artifact Authority Rule
Every artifact has local, delegated, subordinate authority only.

No artifact may:
- redefine system frame
- redefine canonical rules
- override protocol
- create system-level authority

## System Artifact Baseline
Baseline-supported artifact classes:
- `TARGET_PROJECT_BRIEF_ARTIFACT`
- `INITIAL_SSOT_ARTIFACT`
- `HANDOFF_ARTIFACT`
- `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`

If a baseline artifact class is not defined at this level, it must not be invoked by `02_PROTOCOL.md`.

## Artifact Read Order
1. `TARGET_PROJECT_BRIEF_ARTIFACT`
2. `INITIAL_SSOT_ARTIFACT`
3. `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`
4. `HANDOFF_ARTIFACT`

## TARGET_PROJECT_BRIEF_ARTIFACT
### Purpose
Transmit the minimum project-specific operational brief of the target project.

### Authority
Local to the target project.
May not redefine the frame of Project Forge.

### Surface
Project-opening artifact for the target project.

### Schema
- `objective`
- `scope_in`
- `scope_out`
- `required_outputs`
- `project_specific_constraints`

### Write Trigger
Write when documentary readiness requires a target-project brief.

### Read Trigger
Read at target-project opening.

### Freshness Rule
Update only when the target-project brief changes.

### Artifact-Specific Promotion Conditions
Never promotable to system canonical.

## INITIAL_SSOT_ARTIFACT
### Purpose
Freeze the initial official basis of the target project.

### Authority
Local to the target project.
Initial reference authority for the target project's starting basis.

### Surface
Official-basis artifact.

### Schema
- `official_materials`
- `approved_sources`
- `base_constraints`
- `version_or_date`

### Write Trigger
Write when an initial official basis exists and must be frozen.

### Read Trigger
Read immediately after `TARGET_PROJECT_BRIEF_ARTIFACT`.

### Freshness Rule
Update only when the initial official basis changes.

### Artifact-Specific Promotion Conditions
May be updated only from material already validated under `01_RULES.md`.

## HANDOFF_ARTIFACT
### Purpose
Transfer operational continuity across runs without redefining frame or SSOT.

### Authority
Local and temporary only.
Not normative.

### Surface
Operational-continuity artifact.

### Schema
- `current_state`
- `recent_tests`
- `open_points`
- `next_move`

### Write Trigger
Write only when `02_PROTOCOL.md` closes `HANDOFF_REQUIRED`.

### Read Trigger
Read when reopening the immediately following run.

### Freshness Rule
Valid only for the immediately following run unless explicitly renewed.

### Artifact-Specific Promotion Conditions
Never promotable to canonical or SSOT.

## SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT
### Purpose
Transfer candidate materials or sources without promoting them to stable basis.

### Authority
Local and subordinate only.
Not normative until validated.

### Surface
Material-transfer artifact.

### Schema
- `candidate_materials`
- `source_type`
- `validation_state`
- `attach_or_review_flag`

### Write Trigger
Write when materials must pass to the target project without immediate promotion.

### Read Trigger
Read after `INITIAL_SSOT_ARTIFACT` and before `HANDOFF_ARTIFACT`, if present.

### Freshness Rule
Update on each materially new transfer set.

### Artifact-Specific Promotion Conditions
Promotable only after validation under `01_RULES.md`.

## Custom Artifact Rule
A custom artifact is allowed only if it declares:
- `purpose`
- `authority`
- `surface`
- `schema`
- `write_trigger`
- `read_trigger`
- `freshness_rule`
- `artifact_specific_promotion_conditions`

If one of these fields is missing, the custom artifact is not valid.

## Reader Rule
Artifacts are external to the canonical core.
Artifacts may carry state.
Artifacts may not redefine canonicals.
