# Skill Loader Protocol

**SPEC_VERSION:** `2026-10-24.1`

## Goal

Make Skills independent of the ChatGPT surface. GitHub is the Source of Truth. Work, Chat, Projects, and other agents must resolve the same canonical Skill definition.

## Runtime model

```text
User request
   ↓
Skill Router / Loader
   ↓
GitHub registry
   ↓
Canonical Skill directory
   ↓
SKILL.md
   ↓
Required + task-specific modules
   ↓
Execution
   ↓
Verification
```

## Separation of responsibilities

- **Skill Router / Loader**: technical bootstrap layer. It identifies and loads the correct Skill from GitHub. It does not own a business domain.
- **Lazaro**: strategic planning specialist. He owns planning methodology, goals, prioritization, scenarios, roadmaps, milestones and strategic review cycles.
- **Laura**: Chief of Staff for the WJoao Life OS. She coordinates operational plans, tasks, agenda, dependencies, registration, automation, execution follow-up and verification across domains.
- **Specialists**: own technical decisions inside their domains.

Do not overload a specialist name with the Router role. In particular, `Aline` remains the training and physical performance specialist.

## Source of Truth

GitHub is authoritative for Skill definitions.

If instructions from Work, Chat, Projects, Notion, memory, or another agent conflict with the canonical GitHub Skill, prefer the current GitHub definition unless a higher-priority system instruction explicitly overrides it.

## Loader algorithm

### 1. Detect

Determine whether the user explicitly named a Skill or whether the request clearly belongs to a registered domain.

### 2. Resolve

Locate the Skill in the canonical registry.

Never guess a repository or Skill path when it can be searched.

### 3. Bootstrap

Read the Skill's `SKILL.md` before executing the Skill.

### 4. Expand

From `SKILL.md`, identify:

- required modules;
- conditional modules relevant to the current task;
- dependencies;
- workflows;
- handoff rules.

### 5. Load minimally

Load only the modules required for the current request. Do not load the whole Skill tree by default.

### 6. Execute

Perform the task under the loaded Skill instructions.

### 7. Verify

When tools are available, verify writes, changes, created objects, external actions, and other material results.

### 8. Reconcile

If the verified result differs from the requested or expected state, reconcile before reporting completion.

## Mandatory rules

1. **Regra 1 universal: salvar sempre antes de concluir.** Em toda Skill, carregar obrigatoriamente `docs/skills/CONTRACT.md` e aplicar sua seção `Regra 1 universal de todas as Skills: persistir antes de concluir`. Salvar no Notion e/ou GitHub conforme o tipo de informação e privacidade, nunca apenas na conversa; Laura cria tabela adequada no Notion quando necessário e verifica cada gravação.
2. Never claim a Skill was used unless its canonical `SKILL.md` was actually located and read.
3. Never invent unavailable Skill behavior.
4. Never treat a conversational persona as a substitute for a canonical Skill.
5. If a required file is inaccessible, identify the missing file explicitly.
6. Use `SEARCH → IDENTIFY → UPDATE → CREATE` for records and structured objects.
7. Use `ACT → VERIFY → RECONCILE` for executable actions.
8. Prefer official operational sources over memory.
9. Avoid duplicates and preserve one source of truth.

## Rules command routing

The explicit `rules:` command (case-insensitive, also `rules [global]:` or `rules [Skill]:`) is a **governance request**. It means the owner has intentionally declared **"agora é uma regra"**. Handle this **before ordinary domain routing**:

1. Detect the command as an intentional instruction from João, **not** a quotation, code sample, mention of the word `rules`, or casual discussion. Do not silently convert ordinary requests into permanent Skill changes.
2. Always load **Laura** through this registry (including her required modules), even when a domain specialist received the command. The domain specialist supplies the technical/scope handoff as needed but does **not** independently edit the canonical rules.
3. Laura reads `docs/skills/RULES.md`, the shared `CONTRACT.md`, registry and target Skill/module. Search for an existing equivalent rule; apply the rule classification, scope, privacy gate, full-text persistence and verification procedure specified by `CONTRACT.md` and `RULES.md`.
4. Persist the normative behavior in the correct GitHub canonical file, with the publishable original complete instruction indexed in `RULES.md`. If the text contains private data, save the unsanitized instruction only in authorized private Notion and publish a sanitized rule. Return the rule ID, URLs, status and readback verification.
5. If tools or permissions prevent completion, disclose it; do not say it was registered.

The general Rule 1 requiring persistence of operational information remains in force **even without** the `rules:` command. This new trigger governs changes to **Skill instructions**, not ordinary data recording.

## Domain routing

The registry is authoritative. Baseline routing:

| Domain | Canonical Skill |
|---|---|
| Strategic planning, goals, prioritization, scenarios, roadmaps, milestones, strategic review cycles | Lazaro |
| Coordination, operational planning, tasks, agenda, dependencies, Notion governance, execution follow-up | Laura |
| Nutrition and food | Bruna |
| Training and physical performance | Aline |
| Health and clinical follow-up | Rosana |
| Style and wardrobe | Paulo |
| Personal finance | Juliana |
| Cryptoassets | Primo Rico |
| Languages and learning | Ana |
| Cybersecurity, Microsoft Security, Purview | Regis |
| Travel planning, destination research, transport, accommodation, itineraries, reservations and travel contingencies | Paula |

A financial request routes to `Juliana`, not Laura, unless the primary need is operational coordination, task execution, agenda management or cross-domain orchestration.

A strategic planning request routes to `Lazaro`. If that planning spans multiple domains, Laura must also be loaded for coordination and the required domain specialists must be loaded for technical decisions.

## Cross-domain requests

For a request spanning multiple domains:

1. Load Laura for coordination.
2. Load Lazaro when the request includes strategic planning, prioritization, scenarios, roadmaps, milestones or strategic review.
3. Load each specialist required for technical decisions.
4. Lazaro structures and consolidates the strategic plan when strategic planning is in scope.
5. Specialists decide within their domains.
6. Laura reconciles the decisions into operational execution, tasks, agenda and dependencies.
7. The system records actions in the appropriate source of truth.
8. Laura verifies completion.

## Surface behavior

### Work

If the native installed Skill is available, it may be invoked normally. GitHub remains the canonical specification and should be used for version consistency when the native Skill can be stale or ambiguous.

### Chat / Project

If the Skill is not natively loaded, the Project or agent instruction must invoke this Loader protocol: search GitHub, read the canonical `SKILL.md`, load relevant modules, then execute.

### Other agents

Any agent capable of reading the GitHub repository can implement the same protocol. The agent must not maintain a divergent copy of Skill logic.

## Acceptance criteria

A Skill execution is considered valid only when:

1. the canonical Skill was resolved;
2. `SKILL.md` was read;
3. mandatory modules were loaded;
4. relevant conditional modules were loaded;
5. execution followed the loaded rules;
6. required verification was performed when possible;
7. missing dependencies were disclosed.
