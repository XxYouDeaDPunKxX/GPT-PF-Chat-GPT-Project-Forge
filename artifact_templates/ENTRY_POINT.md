# ENTRY_POINT

## Role
This file is the startup entry point for the target project package.

Use it to interpret the package correctly before doing any project work.

This file is not the project brief.
This file is not the official basis.
This file does not replace the content of the package surfaces it points to.

Its job is to:
- define how the package must be read
- define what each package surface is for
- define what counts as official basis
- define what does not count as official basis
- define what must not be inferred
- define when to stop and ask

## Package Scope
This package exists to open one target project from explicit materials.

The package must be read as a bounded startup package.
Do not treat it as a full project archive, a notebook, or a general knowledge dump.

## Package Interpretation Authority
Package interpretation authority closes in this order:
1. `ENTRY_POINT.md`
2. `TARGET_PROJECT_BRIEF_ARTIFACT.md`
3. `INITIAL_SSOT_ARTIFACT.md`
4. `HANDOFF_ARTIFACT.md`, if present
5. `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.md`, if present
6. attached or linked source materials, if present
7. runtime operator input explicitly provided in the current session

Lower package surfaces may add detail within their role.
Lower package surfaces may not redefine a higher package surface.

If a lower surface conflicts with a higher one, the lower surface does not authorize that point.

This authority order applies to:
- package read order
- package surface interpretation
- inference limits
- startup stop conditions
- package-local conflict handling

It does not make `ENTRY_POINT.md` highest on:
- project-specific objective
- project-specific scope
- project-specific outputs
- official basis content
- approved sources
- run-specific continuity

## Read Order
Read the package in this order:
1. `ENTRY_POINT.md`
2. `TARGET_PROJECT_BRIEF_ARTIFACT.md`
3. `INITIAL_SSOT_ARTIFACT.md`
4. `HANDOFF_ARTIFACT.md`, if present
5. `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.md`, if present
6. attached or linked source materials, if present

Do not start from source materials alone.
Do not start from handoff alone.
Do not treat transfer material as startup authority before reading the brief and the initial basis.

## Package Surfaces

### ENTRY_POINT.md
Role:
startup routing and package interpretation.

Authority:
highest inside the package on package interpretation, startup routing, inference limits, startup stop conditions, and package-local conflict handling.

May:
- define how the package must be read
- define package-local precedence
- define package-local stop conditions

May not:
- define project-specific objective
- define project-specific scope
- define project-specific outputs
- define approved sources
- define official materials
- define run-specific continuity
- redefine the project brief
- redefine the official basis
- inject project-specific content that belongs in the brief or SSOT

### TARGET_PROJECT_BRIEF_ARTIFACT.md
Role:
define what the target project is, what it must do, what is in scope, what is out of scope, and what outputs are expected.

Authority:
highest inside the package on project frame and project-specific operational direction.

May:
- define objective
- define scope
- define required outputs
- define project-specific constraints

May not:
- redefine what counts as official basis
- silently promote candidate material
- override package authority order

### INITIAL_SSOT_ARTIFACT.md
Role:
define the initial official basis of the target project.

Authority:
highest inside the package on what counts as approved startup basis.

May:
- define official materials
- define approved sources
- define base constraints
- define startup basis version or date

May not:
- absorb candidate material by proximity alone
- override the project brief
- treat transfer material as approved basis without explicit promotion

### HANDOFF_ARTIFACT.md
Role:
transfer short-lived operational continuity across runs when continuity cannot be recovered safely from the other stable package surfaces alone.

Authority:
temporary and subordinate only.

May:
- describe current state
- describe recent tests
- describe open points
- describe next move

May not:
- redefine project frame
- redefine official basis
- override the brief
- persist as standing authority

### SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.md
Role:
transfer materials or sources that are relevant but not yet part of the official basis.

Authority:
subordinate and non-normative until explicitly approved.

May:
- expose candidate materials
- expose source type
- expose validation status
- mark material for attachment or review

May not:
- count as official basis by default
- override approved basis
- force promotion by being present in the package

### Attached Or Linked Source Materials
Role:
provide raw or semi-processed materials for reading, checking, or extraction.

Authority:
none by default.

May:
- support analysis
- support extraction
- support validation

May not:
- become official basis without explicit approval
- override package surfaces
- replace missing brief or SSOT

## Must Not Contain
`ENTRY_POINT.md` must not contain:
- project-specific objective
- project-specific scope
- project-specific outputs
- approved sources
- official materials
- runtime continuity
- project-specific exceptions
- project-specific decisions
- project-specific rationale that belongs in the brief or SSOT

## Official Basis Rule
Inside the package, official startup basis is limited to:
- `INITIAL_SSOT_ARTIFACT.md`
- any material explicitly named there as official

The project brief governs what the project is supposed to do.
The initial SSOT governs what the project is allowed to treat as official basis at startup.

Nothing else counts as official basis by default.

## Reference-Only Rule
The following are reference-only unless explicitly promoted:
- `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.md`
- attached or linked source materials
- runtime operator remarks that are not explicitly approved as basis
- remembered chat continuity

Reference-only material may inform reading.
Reference-only material must not silently become startup truth.
Reference-only material must remain non-authoritative until explicitly promoted in the appropriate package surface.

## Inference Limits
Do not infer any of the following unless explicitly present:
- missing objective
- missing scope boundaries
- missing required outputs
- missing official basis
- missing source approval
- missing artifact existence
- missing runtime decisions

Do not use:
- prior chat continuity
- assumed project history
- likely intent inferred from tone
- nearby candidate material

If information is missing, treat it as missing.

## Conflict Rule
If package surfaces disagree:
- higher package authority wins
- the conflicting lower point is suspended
- do not smooth over the conflict by averaging or blending

Apply this order:
1. `ENTRY_POINT.md`
2. `TARGET_PROJECT_BRIEF_ARTIFACT.md`
3. `INITIAL_SSOT_ARTIFACT.md`
4. `HANDOFF_ARTIFACT.md`
5. `SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT.md`
6. source materials

If `HANDOFF_ARTIFACT.md` conflicts with the brief or the initial SSOT, handoff loses.

If transfer material conflicts with the initial SSOT, transfer loses unless explicit promotion is provided.

`ENTRY_POINT.md` may resolve reading-order and package-interpretation conflicts.
It may not resolve project-content conflicts by overriding the brief or the initial SSOT.

## Missing Information Rule
Stop and ask if the missing information changes:
- what the project is
- what the project is allowed to do
- what counts as official basis
- what output is required
- whether work can start safely

Proceed conservatively only when the missing information does not change startup authority, startup basis, or startup scope.

## Contamination Test
If a line answers any of these questions, it does not belong in `ENTRY_POINT.md`:
- what is this specific project?
- what is in scope for this specific project?
- what outputs are required for this specific project?
- what sources are approved for this specific project?
- what counts as official basis for this specific project?
- what changed in this specific run?

## Runtime Input Rule
Treat runtime operator input as local and current-session only unless it is explicitly approved as package basis.

Runtime input may:
- clarify a missing operational detail
- resolve an ambiguity
- add a current-session constraint

Runtime input may not:
- override the brief by default
- override the initial SSOT by default
- silently rewrite package authority

## Output Rule
From this package, the target project may:
- interpret the project frame
- operate from the official startup basis
- inspect candidate material
- ask for missing information when startup is not safely closed
- produce project outputs that are consistent with the brief and the initial SSOT

The target project must not:
- invent missing startup basis
- treat candidate material as approved by proximity
- treat handoff as permanent authority
- infer official approval from attachment alone

## Stop Conditions
Stop before proceeding if:
- `TARGET_PROJECT_BRIEF_ARTIFACT.md` is missing
- `INITIAL_SSOT_ARTIFACT.md` is missing
- the brief is incomplete in a way that changes scope or output
- the SSOT is incomplete in a way that changes official basis
- package surfaces conflict on a material point
- only reference-only material exists for a point that requires official basis
- attached sources exist but approval state is not closed where approval is required
- the package tries to rely on missing artifacts as if they existed

## Startup Move
After reading the package:
1. close what project this package opens
2. close what the project must produce
3. close what counts as official basis at startup
4. identify optional surfaces that are present
5. identify missing required information
6. determine whether work can start safely

Do not begin project work before these six checks are closed enough.
These checks establish startup readiness only.
They do not replace project work.

## Final Rule
Read the package before extending the package.
Do not replace missing structure with inference.
