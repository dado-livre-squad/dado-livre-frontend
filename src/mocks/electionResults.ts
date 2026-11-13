import { ElectionResult } from '@/models/election-result'

export const electionResults: ElectionResult[] = [
  {
    id: 'sp-2024-prefeitura',
    title: 'Eleições Municipais 2024',
    subtitle: 'Prefeitura · São Paulo, SP',
    round: 2,
    winner: {
      name: 'Ricardo',
      lastName: 'Nunes',
      party: 'MDB',
      percentage: 59.35,
      votes: 3393110,
    },
  },
  {
    id: 'br-2022-presidencia',
    title: 'Eleições Gerais 2022',
    subtitle: 'Presidência da República · Brasil',
    round: 2,
    winner: {
      name: 'Luiz',
      lastName: 'Inácio Lula da Silva',
      party: 'PT',
      percentage: 50.9,
      votes: 60345999,
    },
  },
  {
    id: 'sp-2022-governo',
    title: 'Eleições Gerais 2022',
    subtitle: 'Governo do Estado · São Paulo',
    round: 2,
    // TODO: o Figma corta este card; confirmar os valores reais no TSE
    winner: {
      name: 'Tarcísio',
      lastName: 'de Freitas',
      party: 'REPUBLICANOS',
      percentage: 55.27,
      votes: 13479630,
    },
  },
]