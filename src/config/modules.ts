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
    description: 'Fluxo financeiro, patrimônio, contas, investimentos e visão consolidada.',
    visibility: 'private',
    source: 'Notion · Finanças & Patrimônio',
    metrics: [
      { label: 'Patrimônio', value: '—', detail: 'Fonte financeira a mapear' },
      { label: 'Entradas', value: '—', detail: 'Mês atual' },
      { label: 'Saídas', value: '—', detail: 'Mês atual' },
      { label: 'Investido', value: '—', detail: 'Mês atual' }
    ]
  },
  {
    slug: 'health',
    label: 'Saúde',
    icon: '♥',
    description: 'Composição corporal, recuperação, sono, energia e aderência semanal.',
    visibility: 'private',
    source: 'Notion · Check in Semanal',
    metrics: [
      { label: 'Peso médio', value: '—', detail: 'Último check in' },
      { label: 'Cintura', value: '—', detail: 'Último check in' },
      { label: 'Sono médio', value: '—', detail: 'Último check in' },
      { label: 'Aderência', value: '—', detail: 'Último check in' }
    ]
  },
  {
    slug: 'training',
    label: 'Treino',
    icon: '◆',
    description: 'Sessões, duração, intensidade, exercícios e evolução do treinamento.',
    visibility: 'private',
    source: 'Notion · Sessões de Treino + Registro de Exercícios',
    metrics: [
      { label: 'Sessões concluídas', value: '—', detail: 'Últimos 7 dias' },
      { label: 'Duração', value: '—', detail: 'Treinos concluídos' },
      { label: 'RPE médio', value: '—', detail: 'Treinos com RPE' },
      { label: 'Exercícios concluídos', value: '—', detail: 'Registro de exercícios' }
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
    description: 'Metas anuais, objetivos de vida e progresso consolidado por área.',
    visibility: 'private',
    source: 'Notion · Áreas da Vida',
    metrics: [
      { label: 'Ativas', value: '—', detail: 'Metas atuais' },
      { label: 'No prazo', value: '—', detail: 'Situação atual' },
      { label: 'Concluídas', value: '—', detail: 'Ano atual' },
      { label: 'Progresso', value: '—', detail: 'Média geral' }
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
