# Paulo · Legacy Compatibility Module

**SPEC_VERSION:** `2026-10-13.1`

**Status:** compatibility bridge

This file remains referenced by `REGISTRY.yaml` during the bootstrap migration.

It intentionally does **not** duplicate Paulo's operational behavior.

Canonical Paulo behavior lives in:

```text
docs/skills/paulo/SKILL.md
docs/skills/paulo/execution.md
docs/skills/paulo/color-palette.md
docs/skills/paulo/fragrances.md
docs/skills/paulo/wardrobe-strategy.md
docs/skills/CONTRACT.md
```

Runtime rule:

1. resolve Paulo through `docs/skills/REGISTRY.yaml`;
2. read `docs/skills/paulo/SKILL.md`;
3. read the required modules listed there;
4. load only the task-relevant conditional modules;
5. follow the shared contract;
6. do not recreate or infer legacy persona behavior from this compatibility file.

This bridge may be removed when the bootstrap migration no longer requires `legacy_module`.
