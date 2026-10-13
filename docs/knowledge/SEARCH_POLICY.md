# Knowledge Retrieval and Publishing Policy

**OWNER:** Laura (governança); especialista do domínio (validação técnica).

## Ordem de pesquisa para perguntas de procedimentos

1. **GitHub Knowledge Base**: consultar `docs/knowledge/INDEX.yaml`; buscar títulos, aliases, tags, caminhos, termos e erros. Abrir o documento completo, não responder apenas pelo resumo.
2. **Fonte operacional existente**: para fatos específicos do usuário, clientes, reservas, ativos e estados atuais, conferir fontes privadas apropriadas (Notion, Drive, calendário, e-mail, documentação do fornecedor), com as permissões disponíveis. O GitHub público não deve armazenar esses dados.
3. **Fonte oficial atual**: quando o material interno não responde, é desatualizado, incompleto ou o assunto pode ter mudado, consultar fabricante, documentação oficial, suporte, legislação ou autoridade.
4. **Pesquisa pública complementar**: artigos técnicos, discussões de comunidades e fóruns confiáveis, com validação independente das instruções críticas.
5. **Síntese e aprendizagem**: entregar solução com origem, pré-requisitos, riscos, validação e limitações. Quando uma solução for comprovada e útil no futuro, sugerir/registrar procedimento sanitizado na base via Laura.

Não considerar a existência de um artigo da KB como prova de que é correto hoje. Preferir versão oficial recente para requisitos técnicos/legais dinâmicos.

## Escopo, separação e segurança

- **GitHub `docs/skills/`**: comportamento canônico das Skills.
- **GitHub `docs/knowledge/`**: conteúdo reutilizável, instruções técnicas, guias e runbooks genéricos sem segredos.
- **Notion**: projetos, tarefas, inventário, preferências e estado operacional privado; pode conter um link para o procedimento canônico do GitHub.
- **Drive / cofres**: evidências privadas, anexos, exportações, backups e segredos conforme política específica.
- **Fontes oficiais**: referência para fatos mutáveis.

**Nunca publicar no GitHub público:** senhas reais, tokens, certificados privados, dados clínicos, documentos, números identificadores pessoais, extratos, dados de contas bancárias, informações proprietárias de clientes ou URLs que permitam acesso privilegiado. Se a fonte contiver informações confidenciais, redigir uma versão pública sanitizada e manter evidência privada na fonte original.

## Publicação / atualização

`SEARCH → IDENTIFY → UPDATE → CREATE`:
- pesquisar documentos equivalentes por título, alias, tags e passos;
- atualizar o canônico antes de criar nova variante;
- classificar por domínio e workload;
- manter um arquivo por procedimento;
- atualizar `INDEX.yaml` com o mesmo `id` e caminho;
- registrar fonte, nível de validação e data;
- verificar o conteúdo publicado no GitHub.

`ACT → VERIFY → RECONCILE`:
- não afirmar que foi testado sem teste;
- registrar resultados observados e limitações;
- manter solução não validada como `documented` ou `draft`;
- esclarecer diferenças quando a solução publicada divergir do produto/versão atual.

## Nomenclatura e taxonomia

Caminhos em minúsculas, sem acentos, com hífens; conteúdo em português quando útil.

Exemplo: `work/microsoft/purview/<assunto>.md`; `personal/vehicles/<assunto>.md`.

As tags são transversais; não duplicar arquivos para aparecer em duas categorias.
