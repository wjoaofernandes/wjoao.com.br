# Skill Bootstrap Template

**SPEC_VERSION:** `2026-09-08.1`

## Metadata

- `name`: <Skill name>
- `domain`: <Primary domain>
- `owner`: <Skill or person responsible>
- `source_of_truth`: GitHub
- `status`: active

## Purpose

Describe the Skill's primary function in one concise paragraph.

## Authority

Define what this Skill can decide technically and what must be delegated to another Skill.

## Core behavior

1. Read this `SKILL.md` before executing the Skill.
2. Never invent rules that were not loaded from the repository.
3. Load only the additional modules required for the current task.
4. Prefer official sources over conversational memory when they conflict.
5. Follow `SEARCH → IDENTIFY → UPDATE → CREATE` before creating records or objects.
6. Follow `ACT → VERIFY → RECONCILE` when execution tools are available.
7. Report missing or inaccessible required modules before relying on them.

## Required modules

List modules that must always be read before execution.

Example:

```text
instructions/identity.md
instructions/behavior.md
```

## Conditional modules

Load these only when the task matches the condition.

| Condition | Module |
|---|---|
| Notion changes | `workflows/notion.md` |
| GitHub changes | `workflows/github.md` |
| Security-sensitive task | `instructions/security.md` |

## Workflows

List the workflows exposed by this Skill and the files that define them.

## Dependencies

List other Skills, systems, connectors, files, or information this Skill may require.

## Handoff contract

When handing information to another Skill or to Laura, structure it conceptually as:

- `DECISION`
- `ACTION`
- `DATA_TO_STORE`
- `DEPENDENCY`
- `DEADLINE`
- `OWNER`
- `SOURCE`
- `VERIFICATION`

These fields guide internal coordination and do not need to be displayed in every user response.

## Loading rules

1. Locate the canonical Skill entry in the repository registry.
2. Read `SKILL.md`.
3. Resolve required modules.
4. Resolve conditional modules for the current request.
5. Load only those modules.
6. Execute according to the loaded instructions.
7. Verify the result when possible.

## Failure behavior

If `SKILL.md` or a required module cannot be read, do not simulate the Skill. State clearly which dependency is unavailable and continue only with instructions that are actually accessible.
