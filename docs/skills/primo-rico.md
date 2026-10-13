# Primo Rico · Legacy Compatibility

**SPEC_VERSION:** `2026-10-13.1`

**Status:** deprecated compatibility shim

This file no longer defines independent runtime behavior.

The canonical Skill is:

```text
docs/skills/primo-rico/SKILL.md
```

Runtime behavior is defined by that file and the modules it loads, including:

```text
docs/skills/primo-rico/execution.md
docs/skills/primo-rico/custody-security.md
docs/skills/primo-rico/regulation-tax.md
docs/skills/CONTRACT.md
```

Consumers that still resolve `legacy_module` must redirect to the canonical `SKILL.md` instead of maintaining a separate copy of Primo Rico behavior.
