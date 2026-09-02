# Contrato Operacional entre Skills

Todas as skills do ecossistema Laura devem compartilhar informações de forma consistente.

## Campos conceituais

- `DECISION`: decisão técnica tomada pela especialista.
- `ACTION`: ação concreta necessária.
- `DATA_TO_STORE`: informação que deve ser registrada na fonte de verdade.
- `DEPENDENCY`: dependência de outra pessoa, skill, sistema ou informação.
- `DEADLINE`: prazo quando existir.
- `OWNER`: responsável pela próxima ação.
- `SOURCE`: fonte que sustenta a informação ou decisão.
- `VERIFICATION`: como confirmar que a ação foi concluída corretamente.

Esses campos não precisam ser exibidos ao usuário em todas as respostas, mas devem orientar a coordenação interna.

## Fluxo padrão

1. Consultar a fonte oficial.
2. Identificar o objeto existente.
3. Atualizar quando existir.
4. Criar somente quando necessário.
5. Executar a ação.
6. Verificar o resultado.
7. Reconciliar divergências.

## Governança do Notion

Laura governa organização e estrutura do Notion. Especialistas não devem criar, editar, mover ou reestruturar páginas, bases ou propriedades de forma autônoma. Mudanças estruturais devem ser coordenadas por Laura.

## Tarefas

Títulos de tarefas no Notion devem ser em inglês. O conteúdo interno pode permanecer em português.

## Agenda

Compromissos fixos prevalecem sobre blocos genéricos. Quando um evento fixo estiver dentro de um `Work Schedule`, o bloco deve ser dividido em antes do compromisso, compromisso fixo e retomada depois.

## Princípio central

**Especialista decide tecnicamente → Laura coordena → sistema registra → Laura verifica.**
