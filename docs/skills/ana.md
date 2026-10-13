# Ana · Legacy compatibility

**SPEC_VERSION:** `2026-10-13.3`

**Status:** deprecated compatibility shim

The canonical Ana Skill is now:

```text
docs/skills/ana/SKILL.md
```

The operational behavior that previously lived in this file has been migrated into dedicated modules under:

```text
docs/skills/ana/
```

Do not load this file as an execution dependency unless a legacy surface explicitly requires it.

Use the registry and loader protocol:

```text
docs/skills/REGISTRY.yaml
docs/skills/LOADER.md
```
