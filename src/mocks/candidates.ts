import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";

export const candidatesList: CandidatoListResponseDTO[] = [
  {
    idCandidato: '1',
    nomeSocial: "Lula da Silva",
    cargo: {
      id: '1',
      cargo: 'Presidente'
    },
    partido: {
      id: '1',
      nome: 'Partido dos Trabalhadores',
      numero: 13,
      sigla: 'PT'
    },
  },
  {
    idCandidato: '2',
    nomeSocial: "Flávio Bolsonaro",
    cargo: {
      id: '1',
      cargo: 'Presidente'
    },
    partido: {
      id: '2',
      nome: 'Partido Liberal',
      numero: 22,
      sigla: 'PL'
    },
  },
  {
    idCandidato: '3',
    nomeSocial: "Renan Santos",
    cargo: {
      id: '1',
      cargo: 'Presidente'
    },
    partido: {
      id: '3',
      nome: 'Partido Missão',
      numero: 14,
      sigla: 'MISSÃO'
    },
  },
  {
    idCandidato: '4',
    nomeSocial: "Augusto Cury",
    cargo: {
      id: '1',
      cargo: 'Presidente'
    },
    partido: {
      id: '4',
      nome: 'Avante',
      numero: 70,
      sigla: 'AVANTE'
    },
  }
];