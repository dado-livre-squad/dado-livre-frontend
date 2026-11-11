import { CandidateModel } from "@/models/canidate-card.model";

export const candidatesList: CandidateModel[] = [
  {
    id: '1',
    candidateName: "Lula da Silva",
    number: "13",
    party: "PT",
    role: "Presidente",
    image: require('../../assets/images/lula.jpg'),
    state: 'SP'
  },
  {
    id: '2',
    candidateName: "Flávio Bolsonaro",
    number: "22",
    party: "PL",
    role: "Presidente",
    image: require('../../assets/images/flavio.jpg'),
    state: 'SP'
  },
  {
    id: '3',
    candidateName: "Renan Santos",
    number: "14",
    party: "MISSÃO",
    role: "Presidente",
    image: require('../../assets/images/renan.jpg'),
    state: 'SP'
  },
  {
    id: '4',
    candidateName: "Augusto Cury",
    number: "70",
    party: "AVANTE",
    role: "Presidente",
    image: require('../../assets/images/cury.jpg'),
    state: 'SP'
  }
];