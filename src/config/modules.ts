export type LifeModule = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  visibility: 'private' | 'public';
  source: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
};

export const privateModules: LifeModule[] = [
  {
    slug: 'tasks',
    label: 'Tasks & Agenda',
    icon: '✓',
    description: 'Tarefas, prioridades, prazos, agenda planejada, adiamentos e execução.',
    visibility: 'private',
    source: 'Notion · Tarefas e Agenda',
    metrics: [
      { label: 'Abertas', value: '—', detail: 'Notion' },
      { label: 'Em andamento', value: '—', detail: 'Notion' },
      { label: 'Atrasadas', value: '—', detail: 'Prazo vencido' },
      { label: 'Concluídas no mês', value: '—', detail: 'Mês atual' }
    ]
  },
  {
    slug: 'finance',
    label: 'Finanças',
    icon: '€',
    description: 'Fluxo financeiro, patrimônio, contas, investimentos e visão consolidada por moeda.',
    visibility: 'private',
    source: 'Notion · Contas + Movimentações + Patrimônio',
    metrics: [
      { label: 'Patrimônio registrado', value: '—', detail: 'Ativos atuais' },
      { label: 'Receitas', value: '—', detail: 'Mês atual' },
      { label: 'Despesas', value: '—', detail: 'Mês atual' },
      { label: 'Investido', value: '—', detail: 'Mês atual' }
    ]
  },
  {
    slug: 'health',
    label: 'Saúde',
    icon: '♥',
    description: 'Composição corporal, recuperação, sono, energia e aderência semanal.',
    visibility: 'private',
    source: 'Notion · Estrutura v2 pendente',
    metrics: [
      { label: 'Peso médio', value: '—', detail: 'Nova estrutura' },
      { label: 'Cintura', value: '—', detail: 'Nova estrutura' },
      { label: 'Sono médio', value: '—', detail: 'Nova estrutura' },
      { label: 'Aderência', value: '—', detail: 'Nova estrutura' }
    ]
  },
  {
    slug: 'training',
    label: 'Treino',
    icon: '◆',
    description: 'Sessões, duração, intensidade, exercícios e evolução do treinamento.',
    visibility: 'private',
    source: 'Notion · Estrutura v2 pendente',
    metrics: [
      { label: 'Sessões concluídas', value: '—', detail: 'Nova estrutura' },
      { label: 'Duração', value: '—', detail: 'Nova estrutura' },
      { label: 'RPE médio', value: '—', detail: 'Nova estrutura' },
      { label: 'Exercícios concluídos', value: '—', detail: 'Nova estrutura' }
    ]
  },
  {
    slug: 'nutrition',
    label: 'Nutrição',
    icon: '◉',
    description: 'Calorias, proteína, carboidratos, refeições e registros alimentares.',
    visibility: 'private',
    source: 'Notion · Nutrição',
    metrics: [
      { label: 'Calorias', value: '—', detail: 'Hoje' },
      { label: 'Proteína', value: '—', detail: 'Hoje' },
      { label: 'Carboidratos', value: '—', detail: 'Hoje' },
      { label: 'Refeições', value: '—', detail: 'Hoje' }
    ]
  },
  {
    slug: 'goals',
    label: 'Metas',
    icon: '◎',
    description: 'Projetos pessoais, objetivos de vida, prazos e andamento consolidado.',
    visibility: 'private',
    source: 'Notion · Planejamento de projetos',
    metrics: [
      { label: 'Projetos ativos', value: '—', detail: 'Não concluídos' },
      { label: 'Em andamento', value: '—', detail: 'Status atual' },
      { label: 'Com prazo', value: '—', detail: 'Projetos ativos' },
      { label: 'Concluídos', value: '—', detail: 'Total registrado' }
    ]
  }
];

export const publicModules = [
  { slug: '/', label: 'Início', icon: '⌂' },
  { slug: '/about', label: 'Sobre', icon: '○' },
  { slug: '/projects', label: 'Projetos', icon: '◇' }
];

export function getModule(slug: string) {
  return privateModules.find((module) => module.slug === slug);
}
