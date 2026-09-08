# Ecossistema Laura — Skills

**SPEC_VERSION:** `2026-09-08.1`

Este diretório é a fonte oficial das Skills pessoais do WJoao Life OS.

## Source of Truth

**GitHub é o Source of Truth das Skills.**

Work, Chat, Projects e outros agentes devem carregar a mesma definição canônica a partir deste repositório para evitar versões divergentes.

Modelo operacional:

```text
GitHub
  ↓
REGISTRY.yaml
  ↓
Skill Router / Loader
  ↓
<skill>/SKILL.md
  ↓
Required + conditional modules
  ↓
Work / Chat / Projects / outros agentes
```

## Arquitetura funcional

Laura é a Chief of Staff e coordenadora central do WJoao Life OS. As especialistas decidem tecnicamente dentro do seu domínio; Laura coordena execução, dependências, registro e verificação.

O `Skill Router / Loader` é uma camada técnica neutra responsável apenas por localizar e carregar a Skill correta. Ele não substitui Laura nem qualquer especialista.

```text
                         JOÃO
                           │
                           ▼
                 SKILL ROUTER / LOADER
                           │
                           ▼
                        LAURA
                  Chief of Staff / Hub
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     PESSOAL            PATRIMÔNIO         TRABALHO
        │                  │                  │
   ┌────┼────┐        ┌────┼────┐             │
   │    │    │        │         │             │
 Bruna Aline Rosana Juliana  Primo Rico      Regis
   │
 Paulo

                + ANA
          Idiomas / Aprendizado
```

## Princípios

1. GitHub é o Source of Truth das Skills.
2. Especialista decide tecnicamente → Laura coordena → sistema registra → Laura verifica.
3. `SEARCH → IDENTIFY → UPDATE → CREATE`.
4. `ACT → VERIFY → RECONCILE`.
5. Uma única fonte da verdade.
6. Fonte oficial antes de memória conversacional.
7. Nunca inventar comportamento de uma Skill que não foi carregada.
8. Menos administração, mais execução.

## Arquivos de infraestrutura

| Arquivo | Função |
|---|---|
| `REGISTRY.yaml` | Registro canônico de nomes, domínios e caminhos das Skills |
| `LOADER.md` | Protocolo cross-surface para localizar e carregar Skills |
| `PROJECT-INSTRUCTIONS.md` | Bootstrap pronto para Instruções de Projetos/ChatGPT |
| `CONTRACT.md` | Contrato operacional compartilhado entre Skills |
| `_template/SKILL.md` | Padrão canônico para novos `SKILL.md` |

## Skills

| Skill | Domínio | Entrada canônica |
|---|---|---|
| Laura | Chief of Staff / coordenação | `laura/SKILL.md` |
| Bruna | Nutrição e alimentação | `bruna/SKILL.md` |
| Aline | Treino e performance física | `aline/SKILL.md` |
| Rosana | Saúde e acompanhamento clínico | `rosana/SKILL.md` |
| Paulo | Estilo e guarda-roupa | `paulo/SKILL.md` |
| Juliana | Finanças pessoais | `juliana/SKILL.md` |
| Primo Rico | Criptoativos | `primo-rico/SKILL.md` |
| Ana | Idiomas e aprendizado | `ana/SKILL.md` |
| Regis | Cybersecurity / Microsoft Security / Purview | `regis/SKILL.md` |

## Regra de carregamento

Antes de executar uma Skill:

1. Resolver a Skill em `REGISTRY.yaml`.
2. Ler o `SKILL.md` canônico.
3. Ler todos os módulos obrigatórios declarados por ele.
4. Carregar apenas os módulos condicionais relevantes para a tarefa.
5. Resolver dependências e workflows.
6. Executar seguindo apenas instruções realmente carregadas.
7. Verificar o resultado quando houver ferramentas disponíveis.
8. Informar claramente qualquer arquivo obrigatório inacessível.

Nunca afirmar que uma Skill foi utilizada sem ter lido seu `SKILL.md`.

## Estado da migração

A arquitetura está em fase `bootstrap`.

Cada Skill já possui um diretório e um `SKILL.md` canônico. Durante essa fase, o `SKILL.md` referencia temporariamente o arquivo legado correspondente (`laura.md`, `bruna.md`, etc.) e `CONTRACT.md`.

Próxima fase:

```text
<skill>/SKILL.md
<skill>/instructions/identity.md
<skill>/instructions/behavior.md
<skill>/instructions/security.md
<skill>/workflows/notion.md
<skill>/workflows/github.md
<skill>/workflows/<domain-specific>.md
```

Os arquivos legados só devem ser removidos depois que a migração modular estiver concluída e validada.

## Contrato entre Skills

O contrato compartilhado está em [`CONTRACT.md`](./CONTRACT.md).

## Princípio final

**Especialista decide tecnicamente → Laura coordena → sistema registra → Laura verifica.**

**MENOS ADMINISTRAÇÃO. MAIS EXECUÇÃO.**
