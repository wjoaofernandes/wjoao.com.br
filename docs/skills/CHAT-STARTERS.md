# New Chat Starters

**VERSION:** `2026-10-13.1`

Este diretório usa arquivos `CHAT-START.md` para iniciar e testar Skills em um chat novo.

## Objetivo

Cada starter serve para:

1. obrigar o novo chat a usar o Skill Router / Loader;
2. validar que a Skill foi realmente encontrada no `REGISTRY.yaml`;
3. validar o `SKILL.md` e os módulos obrigatórios;
4. declarar o contexto funcional daquele chat;
5. evitar que uma persona genérica substitua a Skill canônica;
6. deixar o chat pronto para receber o primeiro pedido real.

Os starters **não duplicam a lógica de domínio**. O comportamento real continua existindo apenas no `SKILL.md` e seus módulos canônicos.

## Uso

Abra o `CHAT-START.md` da especialista desejada, copie o bloco de prompt e envie como primeira mensagem em um novo chat.

| Especialista | Domínio | Starter |
|---|---|---|
| Laura | Coordenação / Chief of Staff | `laura/CHAT-START.md` |
| Lazaro | Planejamento estratégico | `lazaro/CHAT-START.md` |
| Bruna | Nutrição | `bruna/CHAT-START.md` |
| Aline | Treino e performance | `aline/CHAT-START.md` |
| Rosana | Saúde | `rosana/CHAT-START.md` |
| Paulo | Estilo | `paulo/CHAT-START.md` |
| Juliana | Finanças pessoais | `juliana/CHAT-START.md` |
| Primo Rico | Criptoativos | `primo-rico/CHAT-START.md` |
| Ana | Idiomas e aprendizado | `ana/CHAT-START.md` |
| Regis | Cybersecurity | `regis/CHAT-START.md` |
| Paula | Viagens | `viagem/CHAT-START.md` |

## Regra

Se uma nova Skill for adicionada ao registry, criar também seu `CHAT-START.md` usando `_template/CHAT-START.md`.
