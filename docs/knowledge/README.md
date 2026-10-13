# WJoao Life OS · Knowledge Base

Base canônica de **procedimentos, runbooks e soluções reutilizáveis** do WJoao Life OS.

> Este repositório pode ser público. **Não publicar dados privados do Notion, documentos pessoais, informações financeiras/clinicas, credenciais, tokens, chaves, identificadores sensíveis, gravações pessoais ou detalhes de clientes.** Registros privados e operacionais permanecem no sistema privado apropriado (Notion/Drive/sistema do cliente). No GitHub, manter apenas procedimentos sanitizados e referências não sensíveis.

## Por onde começar

- [Índice pesquisável](INDEX.yaml)
- [Ordem de pesquisa, qualidade e segurança](SEARCH_POLICY.md)
- [Modelo para um novo procedimento](_template/PROCEDURE.md)

## Categorias

| Área | Uso |
|---|---|
| [Financeiro](finance/README.md) | Procedimentos financeiros gerais e automações sanitizadas |
| [Trabalho](work/README.md) | Procedimentos técnicos de trabalho por fabricante e workload |
| [Vida pessoal](personal/README.md) | Casa, veículos, viagens, treino, saúde, nutrição, estudos e estilo |

A classificação física é intencionalmente rasa. Subpastas novas só devem existir quando houver necessidade real; um tema pode ter várias tags sem duplicação do arquivo.

## Como consultar

1. Pesquisar primeiro **esta base no GitHub**: `INDEX.yaml`, nome do arquivo, título, sinônimos e tags.
2. Abrir o procedimento e verificar escopo, pré-requisitos, status, data e evidências.
3. Para circunstâncias pessoais ou dados mutáveis, conferir a fonte privada/operacional pertinente.
4. Se não houver solução suficiente, pesquisar fontes oficiais do fabricante/autoridade; depois documentação pública e comunidade.
5. Ao obter uma solução reutilizável, testar e registrar uma versão sanitizada aqui, sem criar uma segunda verdade no Notion.

**Skills continuam em `docs/skills/`** e são a fonte de comportamento; esta pasta é fonte de procedimentos, não substituto para `REGISTRY.yaml` ou `SKILL.md`.

## Padrão de documentos

Arquivos Markdown com frontmatter YAML: `id`, `title`, `category`, `tags`, `aliases`, `status`, `last_reviewed`, `source_type` e `sensitivity`.

Estados recomendados: `draft`, `documented`, `tested`, `deprecated`. Não promover a `tested` sem evidência de teste.
