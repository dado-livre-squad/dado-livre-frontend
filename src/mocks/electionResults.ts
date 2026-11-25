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
      socialName: 'Ricardo Nunes',
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
      name: 'Luiz Inácio',
      lastName: 'Lula da Silva',
      socialName: 'Lula',
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
    winner: {
      name: 'Tarcísio',
      lastName: 'de Freitas',
      socialName: 'Tarcísio de Freitas',
      party: 'REPUBLICANOS',
      percentage: 55.27,
      votes: 13479630,
    },
  },
  {
    id: 'sp-2026-governo',
    title: 'Eleições Gerais 2026',
    subtitle: 'Governo do Estado · São Paulo',
    round: 1,
    winner: {
      name: 'Tarcísio',
      lastName: 'de Freitas',
      socialName: 'Tarcísio de Freitas',
      party: 'REPUBLICANOS',
      percentage: 62.65,
      votes: 14491874 ,
    },
  },
  {
    id: 'br-2026-presidencia',
    title: 'Eleições Gerais 2026',
    subtitle: 'Presidência da República · Brasil',
    round: 2,
    winner: {
      name: 'Luiz Inácio',
      lastName: 'Lula da Silva',
      socialName: 'Lula',
      party: 'PT',
      percentage: 51.79,
      votes: 64256232 ,
    },
  },
]