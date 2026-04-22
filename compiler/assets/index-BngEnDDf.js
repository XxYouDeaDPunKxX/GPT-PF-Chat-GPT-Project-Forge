(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`project-brief`,title:`Project Brief`,shortTitle:`Brief`,summary:`Define objective, scope, outputs, and local project constraints.`,requiredForOpening:!0,enabledByDefault:!0,templateTitle:`TARGET_PROJECT_BRIEF_ARTIFACT`},{id:`initial-ssot`,title:`Initial SSOT`,shortTitle:`Initial SSOT`,summary:`Record the approved materials, sources, and starting base.`,requiredForOpening:!0,enabledByDefault:!0,templateTitle:`INITIAL_SSOT_ARTIFACT`},{id:`material-transfer`,title:`Materials Under Review`,shortTitle:`Review Materials`,summary:`Carry candidate material forward without treating it as approved.`,requiredForOpening:!1,enabledByDefault:!1,templateTitle:`SOURCE_OR_MATERIAL_TRANSFER_ARTIFACT`},{id:`handoff`,title:`Handoff`,shortTitle:`Handoff`,summary:`Pass short-lived continuity forward only when the next run really needs it.`,requiredForOpening:!1,enabledByDefault:!1,templateTitle:`HANDOFF_ARTIFACT`}],t=[{id:`brief-objective`,artifactId:`project-brief`,key:`objective`,label:`Objective`,required:!0,help:`State what this target project is meant to produce.`,doItems:[`Name the concrete outcome.`,`Keep it narrow enough to anchor scope and outputs.`],avoidItems:[`Generic ambition statements.`,`Technical basis that belongs in Initial SSOT.`],linkNote:`If the objective changes, review scope and required outputs.`,exampleGood:`Prepare a target project that turns approved maintenance notes into a reusable weekly checklist.`,exampleWeak:`Improve the project.`,risk:`A weak objective makes every later decision noisier.`},{id:`brief-scope-in`,artifactId:`project-brief`,key:`scope_in`,label:`Scope in`,required:!0,large:!0,help:`List the work this target project is allowed to take on.`,doItems:[`List only work the package really authorizes.`,`Keep the list concrete and bounded.`],avoidItems:[`Future wishes.`,`Candidate material not yet promoted into Initial SSOT.`],linkNote:`If scope in expands, review scope out and official materials.`,exampleGood:`- turn notes into a recurring checklist
- rely only on approved maintenance material`,exampleWeak:`- include anything useful`,risk:`Loose scope creates hidden project expansion.`},{id:`brief-scope-out`,artifactId:`project-brief`,key:`scope_out`,label:`Scope out`,required:!0,large:!0,help:`State what the target project must not absorb.`,doItems:[`Cut work that does not belong in this opening.`,`Use plain operational examples.`],avoidItems:[`Vague restraint language.`,`Rules that belong in scope in instead.`],linkNote:`If scope out changes, recheck outputs and constraints.`,exampleGood:`- no canonical rewrites
- no handoff unless continuity is genuinely needed`,exampleWeak:`- keep it simple`,risk:`Weak exclusions are a common source of drift.`},{id:`brief-required-outputs`,artifactId:`project-brief`,key:`required_outputs`,label:`Required outputs`,required:!0,large:!0,help:`Name the outputs the target project must produce.`,doItems:[`List outputs that are easy to verify.`,`Keep each output explicit.`],avoidItems:[`Implicit outcomes.`,`Vague phrases like something useful.`],linkNote:`If outputs change, the objective and scope may need to move too.`,exampleGood:`- recurring checklist
- inspection order
- one field for unusual findings`,exampleWeak:`- something operational`,risk:`If outputs are vague, completion becomes subjective.`},{id:`brief-constraints`,artifactId:`project-brief`,key:`project_specific_constraints`,label:`Project constraints`,required:!1,help:`Use this only for local project constraints, not for the approved technical base.`,doItems:[`Record local constraints that shape delivery.`,`Keep constraints local to the Brief.`],avoidItems:[`Approved sources.`,`Continuity notes.`,`Candidate material.`],linkNote:`If a constraint depends on an official source, update Initial SSOT first.`,exampleGood:`The target project must keep instructions short enough for weekly reuse.`,exampleWeak:`Use anything you can find online.`,risk:`If official basis leaks here, the Brief and SSOT stop doing separate jobs.`},{id:`ssot-materials`,artifactId:`initial-ssot`,key:`official_materials`,label:`Official materials`,required:!0,large:!0,help:`List the materials that count as official startup basis.`,doItems:[`Name each material precisely.`,`Keep only basis-worthy materials here.`],avoidItems:[`Generic piles of notes.`,`Candidate-only material under review.`],linkNote:`If official materials change, recheck the Brief.`,exampleGood:`- maintenance_notes_weekly_01.md
- inspection_manual_rev_2_1.pdf`,exampleWeak:`- assorted notes`,risk:`If official materials are muddy, the target project trusts whatever is nearby.`},{id:`ssot-sources`,artifactId:`initial-ssot`,key:`approved_sources`,label:`Approved sources`,required:!0,large:!0,help:`Use this field to close the approved source base.`,doItems:[`List approved sources precisely enough to verify.`,`Make approval explicit.`],avoidItems:[`Vague references.`,`Unverified online material.`],linkNote:`If approved sources change, review Brief constraints and official materials.`,exampleGood:`- official maintenance guide rev. 2.1
- operator notes collected on 2026-04-10`,exampleWeak:`- repo and useful material online`,risk:`Ambiguous sources create fake authority.`},{id:`ssot-constraints`,artifactId:`initial-ssot`,key:`base_constraints`,label:`Base constraints`,required:!1,help:`Only put constraints here if they are part of the approved starting base.`,doItems:[`Record basis-level limits only.`,`Keep this aligned with approved materials and sources.`],avoidItems:[`Local Brief decisions.`,`Under-review material.`],linkNote:`If base constraints change, review the Brief.`,exampleGood:`- use the official guide as the technical basis for sequence and wording`,exampleWeak:`- keep the work simple`,risk:`Muddy base constraints weaken the official basis.`},{id:`ssot-version`,artifactId:`initial-ssot`,key:`version_or_date`,label:`Version or date`,required:!0,help:`Lock the starting base to a specific point in time.`,doItems:[`Use one clear version or date.`,`Make the boundary easy to compare later.`],avoidItems:[`Latest version.`,`Implicit timing.`],linkNote:`If this changes, verify that Brief and SSOT still describe the same base.`,exampleGood:`2026-04-12`,exampleWeak:`latest`,risk:`Without a time boundary, the opening basis drifts silently.`},{id:`transfer-materials`,artifactId:`material-transfer`,key:`candidate_materials`,label:`Candidate materials`,required:!0,large:!0,help:`List material you want to transfer without promoting yet.`,doItems:[`Name candidate materials clearly.`,`Keep this separate from official basis.`],avoidItems:[`Already-approved materials.`,`Notes nobody can recover later.`],linkNote:`If a material becomes official, move it into Initial SSOT.`,exampleGood:`- forum_notes_unverified.md
- historical_checklist_draft.md`,exampleWeak:`- useful material`,risk:`If approved material lands here, the boundary with Initial SSOT breaks.`},{id:`transfer-source-type`,artifactId:`material-transfer`,key:`source_type`,label:`Source type`,required:!0,help:`Explain what kind of material is being transferred.`,doItems:[`Distinguish notes, forum posts, drafts, and attachments.`,`Keep the type legible.`],avoidItems:[`Mixed sources with no label.`,`Categories too vague to act on.`],linkNote:`If source type changes, review validation state as well.`,exampleGood:`- operator notes
- forum discussion`,exampleWeak:`- mixed sources`,risk:`Unclear source type makes review harder than it needs to be.`},{id:`transfer-validation`,artifactId:`material-transfer`,key:`validation_state`,label:`Validation state`,required:!0,help:`State clearly whether the material is verified.`,doItems:[`Use plain validation language.`,`Keep under-review material visibly under review.`],avoidItems:[`Seems reliable.`,`Language that implies approval.`],linkNote:`If validation changes, decide whether the material still belongs here.`,exampleGood:`- not verified
- awaiting comparison with the official guide`,exampleWeak:`- probably valid`,risk:`Ambiguous validation is one of the fastest ways to create fake SSOT.`},{id:`transfer-flag`,artifactId:`material-transfer`,key:`attach_or_review_flag`,label:`Requested action`,required:!0,help:`Say whether the material should be attached or just reviewed.`,doItems:[`State one clear action.`,`Keep the next move visible.`],avoidItems:[`Decide later.`,`Two actions at once.`],linkNote:`If this changes, check whether the material still belongs in transfer.`,exampleGood:`Review before approval`,exampleWeak:`Maybe use it later`,risk:`If the action is unclear, the material stays suspended.`},{id:`handoff-state`,artifactId:`handoff`,key:`current_state`,label:`Current state`,required:!0,large:!0,help:`Describe where the work stopped and what is already closed.`,doItems:[`Summarize the real current state.`,`Name what is already verified.`],avoidItems:[`Repeating the whole package.`,`Reintroducing the official basis as handoff.`],linkNote:`If current state changes, review open points and next move.`,exampleGood:`- Brief and Initial SSOT are reviewed
- only final source approval remains`,exampleWeak:`- work is going well`,risk:`If current state is vague, re-entry cost goes up immediately.`},{id:`handoff-tests`,artifactId:`handoff`,key:`recent_tests`,label:`Recent checks`,required:!1,large:!0,help:`Record only checks that matter for the next run.`,doItems:[`Keep this short and restart-friendly.`,`Include only useful checks.`],avoidItems:[`Long history logs.`,`Noise that belongs elsewhere.`],linkNote:`If a check materially changes state, update current state too.`,exampleGood:`- confirmed the official guide covers the inspection sequence`,exampleWeak:`- did a few checks`,risk:`Verbose checks quickly turn handoff into a clutter pile.`},{id:`handoff-open`,artifactId:`handoff`,key:`open_points`,label:`Open points`,required:!0,large:!0,help:`List only what still needs to be finished.`,doItems:[`Make each point actionable.`,`Keep the list short and real.`],avoidItems:[`Items already closed.`,`Lists with no consequence.`],linkNote:`When an open point closes, update next move too.`,exampleGood:`- decide whether transfer material needs to travel into the opening package`,exampleWeak:`- a few things are still open`,risk:`If open points are fuzzy, handoff stops reducing re-entry time.`},{id:`handoff-next`,artifactId:`handoff`,key:`next_move`,label:`Next move`,required:!0,help:`State the smallest correct next move.`,doItems:[`Write one concrete move.`,`Keep it narrow and ordered.`],avoidItems:[`Continue the project.`,`Multi-step bundles with no priority.`],linkNote:`If next move changes, recheck current state and open points.`,exampleGood:`Verify the final source approval and update the Brief constraints if needed.`,exampleWeak:`Continue work.`,risk:`Without a clear next move, handoff does not pay for itself.`}],n=e.reduce((e,n)=>(e[n.id]=t.filter(e=>e.artifactId===n.id),e),{"project-brief":[],"initial-ssot":[],"material-transfer":[],handoff:[]}),r=document.querySelector(`#app`);if(!r)throw Error(`App root not found`);var i=r,a=1,o=1,s={activeStep:`intake`,activeFieldByArtifact:{"project-brief":`brief-objective`,"initial-ssot":`ssot-materials`,"material-transfer":`transfer-materials`,handoff:`handoff-state`},artifacts:l(),importQueue:[]};function c(e){return n[e].reduce((e,t)=>(e[t.id]=``,e),{})}function l(){return e.reduce((e,t)=>{let n=c(t.id);return e[t.id]={enabled:t.enabledByDefault,values:{...n},baseline:{...n},instances:t.enabledByDefault?[{id:a++,name:t.title}]:[],reviewAcknowledged:!1,emitted:!1},e},{})}function u(t){return e.find(e=>e.id===t)}function d(e){return t.find(t=>t.id===e)}function f(e){let t=e.replace(/\r/g,``).split(`
`).map(e=>e.trim()).filter(Boolean).join(`
`).trim();return!(!t||/^(TBD|TBD\.|TODO)$/i.test(t))}function p(e){return n[e].filter(e=>e.required)}function m(e){return p(e).filter(t=>f(s.artifacts[e].values[t.id])).length}function h(e){let t=s.artifacts[e];if(!t.enabled)return`not-created`;if(t.emitted)return`emitted`;let n=p(e);return m(e)<n.length?`drafting`:t.reviewAcknowledged?`ready-to-emit`:`needs-review`}function g(e){switch(e){case`not-created`:return`Not included`;case`drafting`:return`In progress`;case`needs-review`:return`Ready to review`;case`ready-to-emit`:return`Ready`;case`emitted`:return`Exported`}}function _(e){switch(e){case`ready-to-emit`:case`emitted`:return`good`;case`needs-review`:return`warm`;case`drafting`:return`accent`;default:return``}}function ee(){return e.filter(e=>s.artifacts[e.id].enabled&&e.requiredForOpening).reduce((e,t)=>e+(p(t.id).length-m(t.id)),0)}function v(){return e.filter(e=>e.requiredForOpening).every(e=>h(e.id)===`ready-to-emit`||h(e.id)===`emitted`)}function te(){return s.activeStep!==`intake`&&s.activeStep!==`review`?s.activeStep:`project-brief`}function y(){let e=te(),t=s.activeFieldByArtifact[e];return d(t)}function b(e){return p(e).filter(t=>!f(s.artifacts[e].values[t.id]))}function x(e){return b(e)[0]??null}function S(){return[`intake`,...e.filter(e=>e.enabledByDefault||s.artifacts[e.id].enabled).map(e=>e.id),`review`]}function C(e){let t=S();return t[t.indexOf(e)+1]??`review`}function w(){return`${e.filter(e=>e.requiredForOpening).filter(e=>{let t=h(e.id);return t===`ready-to-emit`||t===`emitted`}).length}/2 required files ready, ${ee()} required sections still open`}function T(e){let t=h(e),n=b(e);return n.length>0?`${n.length} required sections are still open. Start with ${n[0].label}.`:t===`needs-review`?`All required sections are filled. Do one final check before you export this file.`:t===`emitted`?`This file has already been exported. Export it again only if you changed it.`:`This file is ready for the GPT Project.`}function ne(e){let t=e.filter(e=>e.requiredForOpening).map(e=>({artifact:e,missing:b(e.id)})).find(({missing:e})=>e.length>0);if(t)return`Start with ${t.artifact.title} and finish ${t.missing[0].label}.`;let n=e.find(e=>h(e.id)===`needs-review`);return n?`Required files are filled. Confirm ${n.title} first, then export the package.`:`Required files are ready. You can export now or do one last pass on the optional files.`}function re(){let t={drafting:0,"needs-review":1,"ready-to-emit":2,emitted:3,"not-created":4};return e.filter(e=>s.artifacts[e.id].enabled).sort((e,n)=>{if(e.requiredForOpening!==n.requiredForOpening)return e.requiredForOpening?-1:1;let r=t[h(e.id)]-t[h(n.id)];return r===0?e.title.localeCompare(n.title):r})}function E(e){let t=s.artifacts[e];t.enabled=!t.enabled,t.enabled&&t.instances.length===0&&(t.instances=[{id:a++,name:u(e).title}]),t.enabled||(t.reviewAcknowledged=!1,t.emitted=!1)}function D(){e.some(e=>Object.keys(s.artifacts[e.id].values).some(t=>s.artifacts[e.id].values[t]!==s.artifacts[e.id].baseline[t]))&&!window.confirm(`Reset the package and discard local changes?`)||(s.artifacts=l(),s.importQueue=[],s.activeStep=`intake`,q())}function O(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function k(e){let t=n[e].map(t=>{let n=s.artifacts[e].values[t.id].trim();return`## ${t.key}\n${n}`});return[`# ${u(e).templateTitle}`,...t].join(`

`).trimEnd()+`
`}function A(e,t){let n=new Blob([t],{type:`text/markdown;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)}function ie(e){let t=s.artifacts[e];t.enabled&&(A(`${u(e).templateTitle.toLowerCase()}.md`,k(e)),t.emitted=!0,q())}function ae(){let t=e.filter(e=>s.artifacts[e.id].enabled).filter(e=>{let t=h(e.id);return t===`ready-to-emit`||t===`emitted`});t.length!==0&&(t.forEach(e=>{A(`${u(e.id).templateTitle.toLowerCase()}.md`,k(e.id)),s.artifacts[e.id].emitted=!0}),q())}function oe(e){b(e).length>0||(s.artifacts[e].reviewAcknowledged=!0,q())}function j(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function M(t){let r=e.filter(e=>{let r=RegExp(`^#\\s+${j(e.templateTitle)}\\s*$`,`mi`).test(t),i=n[e.id].some(e=>RegExp(`^##\\s+${j(e.key)}\\s*$`,`mi`).test(t));return r&&i});return r.length===1?r[0].id:null}function N(e,t){let n=RegExp(`(?:^|\\n)##\\s+${j(t)}\\s*(?:\\n|$)([\\s\\S]*?)(?=\\n##\\s+|$)`,`i`),r=e.replace(/\r/g,``).match(n);return r?r[1].trim():``}async function P(e){let t=[];for(let r of e){let e=await r.text(),i=M(e);if(!i){t.push({id:o++,name:r.name,artifactId:null,action:`ignore`,values:null,note:`The file could not be matched safely to a supported project file.`});continue}let a=n[i].reduce((t,n)=>(t[n.id]=N(e,n.key),t),{});t.push({id:o++,name:r.name,artifactId:i,action:`replace`,values:a,note:`Choose how this file should enter the workstation before it affects the draft.`})}s.importQueue=[...s.importQueue,...t],s.activeStep=`intake`,q()}function F(){s.importQueue.forEach(e=>{if(!e.artifactId||!e.values||e.action===`ignore`)return;let t=s.artifacts[e.artifactId];t.enabled=!0,t.instances=[...t.instances,{id:a++,name:e.name}],e.action===`replace`&&(t.values={...e.values},t.baseline={...e.values},t.reviewAcknowledged=!1,t.emitted=!1),e.action===`attach`&&(Object.values(t.values).some(e=>f(e))||(t.values={...e.values},t.baseline={...e.values}))}),s.importQueue=[],q()}function I(e,t){let n=s.importQueue.find(t=>t.id===e);n&&(n.action=t,q())}function L(e){if(e===`intake`)return`
      <li>
        <button class="step-button ${s.activeStep===`intake`?`active`:``}" type="button" data-step="intake">
          <div class="step-top">
            <div>
              <p class="eyebrow">Step 1</p>
              <p class="step-name">Prepare package</p>
            </div>
            <span class="badge accent" data-step-badge="intake">${s.importQueue.length>0?`${s.importQueue.length} import`:`Start`}</span>
          </div>
          <p class="muted">Choose any extra files and review imported files.</p>
        </button>
      </li>
    `;if(e===`review`)return`
      <li>
        <button class="step-button ${s.activeStep===`review`?`active`:``}" type="button" data-step="review">
          <div class="step-top">
            <div>
              <p class="eyebrow">Final check</p>
              <p class="step-name">Review & export</p>
            </div>
            <span class="badge ${v()?`good`:`warm`}" data-step-badge="review">${v()?`Ready`:`Pending`}</span>
          </div>
          <p class="muted">Check what is ready, preview the files, and export the package.</p>
        </button>
      </li>
    `;let t=u(e),n=h(e);return`
    <li>
      <button class="step-button ${s.activeStep===e?`active`:``}" type="button" data-step="${e}">
        <div class="step-top">
          <div>
            <p class="eyebrow">${t.requiredForOpening?`Required file`:`Optional file`}</p>
            <p class="step-name">${t.shortTitle}</p>
          </div>
          <span class="badge ${_(n)}" data-step-badge="${e}">${g(n)}</span>
        </div>
        <p class="muted">${t.summary}</p>
      </button>
    </li>
  `}function R(){let e=s.activeStep===`intake`,t=s.activeStep===`review`,n=!e&&!t?s.activeStep:null,r=n?u(n):null,i=e?`Prepare the package`:t?`Review the ready files`:r.title,a=e?`Choose the files you need, review imports, and open the first required file for the GPT Project.`:t?`Check which files are ready, preview them, and export only the files that give ChatGPT a clear starting point.`:`Complete one file at a time. Keep each section in the right file so ChatGPT gets the right instructions from the project files.`,o=e?`<button class="primary-button" type="button" data-step="project-brief">Open Project Brief</button>`:r?`<button class="primary-button" type="button" data-artifact-action="${W(n).action}">${W(n).label}</button>`:``;return`
    <div class="topbar">
      <div class="brand">
        <p class="eyebrow">Project Forge Workstation</p>
        <h1>${i}</h1>
        <p class="lede">${a}</p>
      </div>
      <div class="topbar-meta">
        <div class="chip-row">
          <span class="chip" data-compact-summary="topbar">${w()}</span>
          <span class="chip" data-import-summary="topbar">${s.importQueue.length>0?`${s.importQueue.length} imported files to review`:`No imported files to review`}</span>
        </div>
        <div class="utility-actions">
          ${o?o.replace(`<button class="primary-button"`,`<button class="primary-button" data-topbar-primary="true"`):``}
          <button class="secondary-button" type="button" data-upload="true">Import files</button>
          <button class="quiet-button" type="button" data-reset="true">Reset package</button>
        </div>
      </div>
    </div>
  `}function z(){let e=s.activeStep!==`intake`&&s.activeStep!==`review`?u(s.activeStep):null;return`
    <div class="progress-strip">
      <div>
        <p class="eyebrow">What to do now</p>
        <p class="muted">${e?`Finish the ${e.title} file without mixing in content that belongs in other files.`:`Choose the files you need, then open the first required file.`}</p>
      </div>
      <span class="badge accent" data-compact-summary="progress">${w()}</span>
    </div>
  `}function B(){return`
    <section class="canvas-card">
      <div class="section-head">
        <div class="stack">
          <p class="eyebrow">Step 1</p>
          <h2 class="section-title">Prepare the package</h2>
          <p class="muted">The two required files are already included. Add extra files only if this GPT Project really needs them.</p>
          <p class="muted">Keep the package small, keep the file list honest, and move on once it matches the work in front of you.</p>
        </div>
        <button class="primary-button" type="button" data-begin="project-brief">Open Project Brief</button>
      </div>

      <div class="artifact-grid">
        ${e.filter(e=>!e.requiredForOpening).map(e=>{let t=s.artifacts[e.id].enabled;return`
              <article class="artifact-card ${t?`active`:``}">
                <p class="eyebrow">${t?`Included`:`Optional`}</p>
                <h3 class="artifact-heading">${e.title}</h3>
                <p>${e.summary}</p>
                <div class="toggle-row">
                  <button class="choice-button ${t?`active`:``}" type="button" data-toggle-artifact="${e.id}">
                    ${t?`Remove from package`:`Add to package`}
                  </button>
                </div>
              </article>
            `}).join(``)}
      </div>

      ${s.importQueue.length>0?`
            <section class="import-card">
              <div class="section-head">
                <div class="stack">
                  <p class="eyebrow">Imported files</p>
                  <h2 class="section-title">Review imported files</h2>
                  <p class="muted">Choose what to do with each imported file before it changes the draft.</p>
                  <p class="muted">You can replace the current draft, keep a file nearby as an alternate, or leave it out for now.</p>
                </div>
                <div class="import-actions">
                  <button class="secondary-button" type="button" data-clear-imports="true">Clear queue</button>
                  <button class="primary-button" type="button" data-apply-imports="true">Apply import choices</button>
                </div>
              </div>

              ${s.importQueue.map(e=>{let t=e.artifactId?u(e.artifactId).title:`Unknown file type`;return`
                    <article class="import-item">
                      <div class="section-head">
                        <div class="stack">
                          <p class="eyebrow">Incoming file</p>
                          <h3>${e.name}</h3>
                          <p class="muted">${t}</p>
                        </div>
                        <span class="badge ${e.artifactId?`accent`:`warm`}">${e.artifactId?`Recognized`:`Needs manual review`}</span>
                      </div>
                      <p class="muted">${e.note}</p>
                      <div class="choice-grid">
                        <button class="choice-button ${e.action===`replace`?`active`:``}" type="button" data-import-action="${e.id}:replace" ${e.artifactId?``:`disabled`}>Replace draft</button>
                        <button class="choice-button ${e.action===`attach`?`active`:``}" type="button" data-import-action="${e.id}:attach" ${e.artifactId?``:`disabled`}>Keep as alternate</button>
                        <button class="choice-button ${e.action===`ignore`?`active`:``}" type="button" data-import-action="${e.id}:ignore">Ignore</button>
                      </div>
                    </article>
                  `}).join(``)}
            </section>
          `:``}
    </section>
  `}function V(e){return n[e].map(t=>{let n=s.activeFieldByArtifact[e]===t.id,r=s.artifacts[e].values[t.id];return`
        <article class="field-card ${n?`active`:``}" data-focus-field="${t.id}" data-field-card="${t.id}">
          <div class="field-top">
            <div class="stack">
              <h3 class="field-label">${t.label}</h3>
              <p class="field-copy">${t.help}</p>
            </div>
            <div class="field-badges">
              <span class="badge accent current-field-badge ${n?``:`is-hidden`}" data-current-badge="${t.id}">Current section</span>
              <span class="badge ${t.required?`warm`:``}">${t.required?`Required`:`Optional`}</span>
            </div>
          </div>
          <textarea id="${t.id}" data-field-input="${t.id}" ${t.large?``:`rows="4"`}>${O(r)}</textarea>
        </article>
      `}).join(``)}function H(e){let t=y(),n=u(t.artifactId);return`
    <aside class="guide-stack">
      <article class="guide-card">
        <p class="eyebrow">Current field</p>
        <h3 data-guide-title="true">${t.label}</h3>
        <p data-guide-help="true">${t.help}</p>
        <p data-guide-directive="true">Write only what belongs in ${n.title}. Keep this section specific enough to guide ChatGPT clearly without pulling in content from other files.</p>
        <p data-guide-start="true">Start with the simplest correct version, then use the boxes below to tighten it.</p>
      </article>
      <article class="guide-card">
        <h3>What belongs here</h3>
        <ul data-guide-do="true">${t.doItems.map(e=>`<li>${e}</li>`).join(``)}</ul>
      </article>
      <article class="guide-card">
        <h3>Keep out</h3>
        <ul data-guide-avoid="true">${t.avoidItems.map(e=>`<li>${e}</li>`).join(``)}</ul>
      </article>
      <article class="guide-card">
        <h3>Strong example</h3>
        <p data-guide-strong="true">${O(t.exampleGood).replaceAll(`
`,`<br>`)}</p>
      </article>
      <article class="guide-card">
        <h3>More guidance</h3>
        <p data-guide-link="true"><strong>Also review:</strong> ${t.linkNote}</p>
        <p data-guide-weak="true"><strong>Weak example:</strong> ${t.exampleWeak}</p>
        <p data-guide-risk="true"><strong>Risk:</strong> ${t.risk}</p>
      </article>
    </aside>
  `}function U(e){return e===`intake`?`Intake`:e===`review`?`Review & export`:u(e).shortTitle}function W(e){let t=b(e),n=h(e);return t.length>0?{label:`Continue with ${t[0].label}`,action:`focus:${t[0].id}`}:n===`needs-review`?{label:`Confirm ${u(e).shortTitle} is ready`,action:`review:${e}`}:{label:`Continue to ${U(C(e))}`,action:`step:${C(e)}`}}function G(e){let t=u(e),n=h(e),r=W(e);return`
    <section class="canvas-card">
      <div class="section-head">
        <div class="stack">
          <p class="eyebrow">${t.requiredForOpening?`Required file`:`Optional file`}</p>
          <h2 class="section-title">${t.title}</h2>
          <p class="muted">${t.summary}</p>
          <p class="muted">Fill this file one section at a time. Keep each answer direct, bounded, and in the right file.</p>
        </div>
        <span class="badge ${_(n)}" data-artifact-lifecycle-badge="${e}">${g(n)}</span>
      </div>

      <div class="artifact-main">
        <article class="utility-card">
          <div class="section-head">
            <div class="stack">
              <p class="eyebrow">File status</p>
              <p class="muted" data-artifact-status-message="${e}">${T(e)}</p>
              <p class="muted">Use the main action to stay on the next unfinished section instead of jumping around.</p>
            </div>
            <span class="badge accent">${s.artifacts[e].instances.length} file${s.artifacts[e].instances.length===1?``:`s`} attached</span>
          </div>
          <div class="artifact-actions">
            <button class="primary-button" type="button" data-artifact-action="${r.action}" data-artifact-primary-action="${e}">${r.label}</button>
            <button class="secondary-button" type="button" data-step="review">Go to final review</button>
          </div>
        </article>

        <div class="field-stack">${V(e)}</div>
      </div>
    </section>
  `}function K(){let e=re(),t=v();return`
    <section class="canvas-card">
      <div class="section-head">
        <div class="stack">
          <p class="eyebrow">Final check</p>
          <h2 class="section-title">Review and export</h2>
          <p class="muted">Check which files are ready before you export the package.</p>
          <p class="muted">Only export files that give ChatGPT a clear starting point on their own.</p>
          <p class="muted">${ne(e)}</p>
        </div>
        <div class="review-actions">
          <button class="secondary-button" type="button" data-step="project-brief">Back to Brief</button>
          <button class="primary-button" type="button" data-download-package="true" ${t?``:`disabled`}>Export ready package</button>
        </div>
      </div>

      <div class="review-grid">
        ${e.map(e=>{let t=h(e.id),n=b(e.id),r=x(e.id),i=r?`Finish ${r.label}`:t===`needs-review`?`Do final check`:`Open file`;return`
              <article class="review-card">
                <div class="section-head">
                  <div class="stack">
                    <p class="eyebrow">${e.requiredForOpening?`Required file`:`Optional file`}</p>
                    <h3>${e.title}</h3>
                  </div>
                  <span class="badge ${_(t)}">${g(t)}</span>
                </div>
                <p>${e.summary}</p>
                ${n.length>0?`<ul>${n.map(e=>`<li>${e.label} is still open.</li>`).join(``)}</ul>`:t===`needs-review`?`<p>All required sections are filled. Final review is still pending.</p>`:t===`emitted`?`<p>This file has already been exported.</p>`:`<p>This file is ready for the GPT Project.</p>`}
                <div class="review-actions">
                  <button class="secondary-button" type="button" data-step="${e.id}">${i}</button>
                  <button class="secondary-button" type="button" data-download-artifact="${e.id}" ${t===`ready-to-emit`||t===`emitted`?``:`disabled`}>Export file</button>
                </div>
              </article>
            `}).join(``)}
      </div>

      <div class="preview-stack">
        ${e.filter(e=>{let t=h(e.id);return t===`ready-to-emit`||t===`emitted`}).map(e=>`
              <article class="preview-card">
                <div class="section-head">
                  <div class="stack">
                    <p class="eyebrow">File preview</p>
                    <h3>${e.title}</h3>
                  </div>
                  <span class="badge good">${g(h(e.id))}</span>
                </div>
                <pre>${O(k(e.id))}</pre>
              </article>
            `).join(``)}
      </div>
    </section>
  `}function se(){return s.activeStep===`intake`?B():s.activeStep===`review`?K():G(s.activeStep)}function ce(){return s.activeStep===`intake`||s.activeStep===`review`?``:`
    <aside class="guide-rail">
      ${H(s.activeStep)}
    </aside>
  `}function q(){i.innerHTML=`
    <div class="app-shell">
      ${R()}
      <input class="hidden-input" id="markdown-upload" type="file" accept=".md,text/markdown" multiple />
      <div class="layout">
        <aside class="stepper">
          <div class="stack">
            <p class="eyebrow">Steps</p>
            <ul class="step-list">${S().map(L).join(``)}</ul>
          </div>
        </aside>
        <div class="workspace-shell ${s.activeStep===`intake`||s.activeStep===`review`?`is-single`:``}">
          <main class="stack workspace-main">
            ${z()}
            ${se()}
          </main>
          ${ce()}
        </div>
      </div>
    </div>
  `,ue()}function J(e){let t=d(e);return s.activeFieldByArtifact[t.artifactId]===e?!1:(s.activeFieldByArtifact[t.artifactId]=e,!0)}function Y(e,t,n){e instanceof HTMLElement&&(e.className=`badge ${t}`.trim(),e.textContent=n)}function le(e){let t=w();document.querySelectorAll(`[data-compact-summary]`).forEach(e=>{e.textContent=t});let n=s.importQueue.length>0?`${s.importQueue.length} imported files to review`:`No imported files to review`;document.querySelectorAll(`[data-import-summary]`).forEach(e=>{e.textContent=n});let r=h(e);Y(document.querySelector(`[data-artifact-lifecycle-badge="${e}"]`),_(r),g(r));let i=document.querySelector(`[data-artifact-status-message="${e}"]`);i instanceof HTMLElement&&(i.textContent=T(e));let a=W(e),o=document.querySelector(`[data-artifact-primary-action="${e}"]`);o instanceof HTMLButtonElement&&(o.dataset.artifactAction=a.action,o.textContent=a.label);let c=document.querySelector(`[data-topbar-primary="true"]`);c instanceof HTMLButtonElement&&s.activeStep===e&&(c.dataset.artifactAction=a.action,c.textContent=a.label);for(let e of S()){let t=document.querySelector(`[data-step-badge="${e}"]`);if(!t)continue;if(e===`intake`){Y(t,`accent`,s.importQueue.length>0?`${s.importQueue.length} import`:`Start`);continue}if(e===`review`){Y(t,v()?`good`:`warm`,v()?`Ready`:`Pending`);continue}let n=h(e);Y(t,_(n),g(n))}}function X(e,t){let n=document.querySelector(e);n instanceof HTMLElement&&(n.innerHTML=t.map(e=>`<li>${e}</li>`).join(``))}function Z(e,t){let n=document.querySelector(e);n instanceof HTMLElement&&(n.innerHTML=t)}function Q(e){let t=s.activeFieldByArtifact[e];if(document.querySelectorAll(`[data-field-card]`).forEach(e=>{let n=e.dataset.fieldCard===t;e.classList.toggle(`active`,n)}),document.querySelectorAll(`[data-current-badge]`).forEach(e=>{let n=e.dataset.currentBadge===t;e.classList.toggle(`is-hidden`,!n)}),s.activeStep!==e)return;let n=d(t),r=u(n.artifactId);Z(`[data-guide-title="true"]`,O(n.label)),Z(`[data-guide-help="true"]`,O(n.help)),Z(`[data-guide-directive="true"]`,`Write only what belongs in ${O(r.title)}. Keep this section specific enough to guide ChatGPT clearly without pulling in content from other files.`),Z(`[data-guide-start="true"]`,`Start with the simplest correct version, then use the boxes below to tighten it.`),X(`[data-guide-do="true"]`,n.doItems),X(`[data-guide-avoid="true"]`,n.avoidItems),Z(`[data-guide-strong="true"]`,O(n.exampleGood).replaceAll(`
`,`<br>`)),Z(`[data-guide-link="true"]`,`<strong>Also review:</strong> ${O(n.linkNote)}`),Z(`[data-guide-weak="true"]`,`<strong>Weak example:</strong> ${O(n.exampleWeak)}`),Z(`[data-guide-risk="true"]`,`<strong>Risk:</strong> ${O(n.risk)}`)}function ue(){document.querySelector(`[data-upload="true"]`)?.addEventListener(`click`,()=>{document.querySelector(`#markdown-upload`)?.click()}),document.querySelector(`[data-reset="true"]`)?.addEventListener(`click`,()=>{D()}),document.querySelectorAll(`[data-step]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.step;t&&(s.activeStep=t,q())})}),document.querySelectorAll(`[data-begin]`).forEach(e=>{e.addEventListener(`click`,()=>{s.activeStep=`project-brief`,q()})}),document.querySelectorAll(`[data-toggle-artifact]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.toggleArtifact;t&&(E(t),q())})}),document.querySelectorAll(`[data-focus-field]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.focusField;if(!t)return;let n=d(t);J(t)&&Q(n.artifactId),$(t)})}),document.querySelectorAll(`[data-field-input]`).forEach(e=>{e.addEventListener(`focus`,()=>{let t=e.dataset.fieldInput;if(!t)return;let n=d(t);J(t)&&(Q(n.artifactId),$(t))}),e.addEventListener(`input`,()=>{let t=e.dataset.fieldInput;if(!t)return;let n=d(t);s.artifacts[n.artifactId].values[n.id]=e.value,s.artifacts[n.artifactId].reviewAcknowledged=!1,s.artifacts[n.artifactId].emitted=!1,s.activeFieldByArtifact[n.artifactId]=t,le(n.artifactId)})}),document.querySelectorAll(`[data-artifact-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.artifactAction;if(!t)return;let[n,r]=t.split(`:`);if(n===`focus`){let e=r;J(e)&&q(),$(e)}n===`review`&&oe(r),n===`step`&&(s.activeStep=r,q())})}),document.querySelectorAll(`[data-import-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.importAction;if(!t)return;let[n,r]=t.split(`:`);I(Number(n),r)})}),document.querySelector(`[data-clear-imports="true"]`)?.addEventListener(`click`,()=>{s.importQueue=[],q()}),document.querySelector(`[data-apply-imports="true"]`)?.addEventListener(`click`,()=>{F()}),document.querySelectorAll(`[data-download-artifact]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.downloadArtifact;t&&ie(t)})}),document.querySelector(`[data-download-package="true"]`)?.addEventListener(`click`,()=>{ae()}),document.querySelector(`#markdown-upload`)?.addEventListener(`change`,async e=>{let t=e.currentTarget,n=Array.from(t.files??[]);n.length!==0&&(await P(n),t.value=``)})}function $(e){requestAnimationFrame(()=>{let t=document.querySelector(`[data-focus-field="${e}"]`),n=document.querySelector(`#${e}`);if(t){let e=t.getBoundingClientRect(),n=window.innerWidth<=820?12:16;(e.top<n||e.bottom>window.innerHeight-24)&&window.scrollTo({top:Math.max(0,window.scrollY+e.top-n),behavior:`smooth`})}n&&document.activeElement!==n&&n.focus({preventScroll:!0})})}q();
