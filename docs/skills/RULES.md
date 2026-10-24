# Registro Canônico de Regras do WJoao Life OS

**SPEC_VERSION:** `2026-10-24.1`
**STATUS:** `active`
**SOURCE_OF_TRUTH:** `wjoaofernandes/wjoao.com.br`, branch padrão corrente
**RUNTIME_AUTHORITY:** `docs/skills/CONTRACT.md` para regras globais; `docs/skills/<skill>/SKILL.md` e seus módulos obrigatórios para regras específicas.

## Finalidade

Preservar **o comando integral fornecido por João** e a rastreabilidade das regras explicitamente declaradas, permitindo encontrá-las e reutilizá-las futuramente. Este arquivo é um **registro histórico/indexador**, não uma segunda versão independente do comportamento das Skills. A definição executável de cada regra vive no arquivo canônico apontado por seu registro.

## Comando explícito

Para criar ou atualizar uma regra, João emite uma instrução **intencionalmente normativa** iniciada pela palavra-chave literal `rules`:

```text
rules: <texto completo da regra>
rules [global]: <texto completo da regra>
rules [Laura]: <texto completo da regra>
rules [Rosana]: <texto completo da regra>
```

A grafia de `rules` não diferencia maiúsculas/minúsculas. `rules:` representa, por si só, a declaração inequívoca **"agora é uma regra"**, sem exigir frase adicional. O texto após o comando constitui a instrução a registrar; outras mensagens ordinárias, hipóteses, exemplos de código, citações e menções avulsas da palavra `rules` **não** autorizam uma mudança em Skills. Sem gatilho explícito, não transformar comentários, preferências ou conversas em novas regras permanentes; persistir normalmente os fatos operacionais pertinentes sob a Regra 1, quando aplicável.

## Fluxo obrigatório de todo comando `rules`

1. **Detectar e encaminhar:** qualquer Skill que receba o comando reconhece a declaração e **aciona Laura** por handoff `DECISION / ACTION / DATA_TO_STORE / DEPENDENCY / DEADLINE / OWNER / SOURCE / VERIFICATION`. A própria Skill não altera sozinha o contrato global nem sua definição sem governança de Laura. No mesmo atendimento, se Laura e o GitHub estiverem acessíveis, executar a persistência, e não apenas prometer ou deixar uma tarefa.
2. **Carregar a definição atual:** Laura lê `docs/skills/REGISTRY.yaml`, `docs/skills/LOADER.md`, este `RULES.md`, `CONTRACT.md`, a Skill-alvo e os módulos obrigatórios aplicáveis. Determina se o alcance é global, de uma Skill ou de várias Skills e identifica conflito com regras existentes. Somente o usuário pode autorizar uma regra ambígua que mude substancialmente o escopo declarado.
3. **SEARCH → IDENTIFY → UPDATE → CREATE:** pesquisar a regra no registro e na definição canônica correspondente. Atualizar a regra existente quando o comando a modifica; criar apenas se não houver uma equivalente. Não multiplicar definições independentes.
4. **Escolher destino:** regra global de comportamento no `docs/skills/CONTRACT.md` e/ou no `LOADER.md` quando afetar bootstrap; regra local na Skill pertinente (`SKILL.md` ou módulo obrigatório). Escrever neste `RULES.md` a **instrução original integral publicável**, o ID estável, data, escopo, destinos, versão/estado e resumo do motivo. O runtime permanece somente no destino canônico.
5. **Segurança e privacidade:** o GitHub pode ser público; não publicar credenciais, dados de saúde, patrimônio, identificação pessoal sensível, dados de terceiros ou de clientes. Se o comando contiver dados privados, conservar o texto original completo no Notion privado por Laura e registrar aqui apenas uma versão sanitizada e um vínculo seguro (sem expor conteúdo privado). Nenhuma regra pode anular instruções de prioridade superior, restrições de segurança ou permissões de ferramentas.
6. **ACT → VERIFY → RECONCILE:** fazer commit no GitHub; buscar novamente **todos os arquivos alterados**; validar instrução, referências, carregamento e ausência de duplicidade; corrigir divergências e confirmar link/commit. Se houver falha, informar concretamente o que permaneceu pendente, sem alegar gravação.
7. **Responder:** retornar ID da regra, escopo, arquivo canônico, GitHub link/commit, estado de verificação, efeito esperado e, quando houver, pendências. Não criar tarefa no Notion se a gravação GitHub já resolveu integralmente o comando.

**Atualização/remoção:** `rules: altere a regra RULE-xxx para ...` ou `rules: revogue a regra RULE-xxx ...`; preservar a proveniência e o histórico de Git, marcar estado substituído/revogado no registro e editar a fonte executável. Não revogar silenciosamente.

## Índice de regras explícitas

### RULE-001 · Captura e governança de novas regras por palavra-chave `rules`

- **Declarada em:** 2026-10-24.
- **Escopo:** global, todas as Skills (inclusive Lázaro e Laura).
- **Status:** ativa.
- **Definição executável:** [`CONTRACT.md`](CONTRACT.md), seção `Regra universal de registro explícito: comando rules`; [`LOADER.md`](LOADER.md), roteamento da palavra-chave; [`laura/execution.md`](laura/execution.md), execução operacional.
- **Registro/controle:** este arquivo `docs/skills/RULES.md`.
- **Fonte:** instrução explícita do proprietário do WJoao Life OS na conversa em 2026-10-24.
- **Texto integral da instrução original:**

> Laura coloca para Skills que sempre que eu falar que e uma regra elas devem te acionar para registered da regra na própria skill ou no controle geral, mas vai precisar eu falar que agora e uma regra e a palavra chave junto com o comando e rules com essa palavra chave pode ser incluindo no github toda a instrução e para eu ter isso salvo e posso utilixar no futuro

- **Interpretação executável:** a forma `rules: <instrução>` manifesta inequivocamente a intenção de declarar uma regra; toda Skill encaminha a Laura, que escolhe fonte única correta, persiste a redação integral publicável no registro, grava o comportamento na Skill ou contrato central, e realiza leitura posterior. Sem palavra-chave explícita não alterar definições. Privacidade e hierarquia de instruções continuam obrigatórias.
- **Verificação:** leitura de retorno de `RULES.md`, `CONTRACT.md`, `LOADER.md` e `laura/execution.md`, com comparação dos trechos obrigatórios.
