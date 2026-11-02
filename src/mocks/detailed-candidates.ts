import { DetailedCandidateModel } from "@/models/detailed-candidate.model";

export const detailedCandidatesList: DetailedCandidateModel[] = [
  {
    id: '1',
    candidateName: "Lula da Silva",
    number: "13",
    party: "PT",
    role: "Presidente",
    image: require('../../assets/images/lula.jpg'),
    state: 'SP',
    about: 'Lorem ipsum dolor sit amet',
    age: '20',
    roleType: 'Federal',
    socialMedia: [
      {
        link: 'google.com',
        name: 'teste'
      }
    ]
  },
  {
    id: '2',
    candidateName: "Flávio Bolsonaro",
    number: "22",
    party: "PL",
    role: "Presidente",
    image: require('../../assets/images/flavio.jpg'),
    state: 'SP',
    about: 'Lorem ipsum dolor sit amet',
    age: '20',
    roleType: 'Federal',
    socialMedia: [
      {
        link: 'google.com',
        name: 'teste'
      }
    ]
  },
  {
    id: '3',
    candidateName: "Renan Santos",
    number: "14",
    party: "MISSÃO",
    role: "Presidente",
    image: require('../../assets/images/renan.jpg'),
    state: 'SP',
    about: 'Lorem ipsum dolor sit amet',
    age: '20',
    roleType: 'Federal',
    socialMedia: [
      {
        link: 'google.com',
        name: 'teste'
      }
    ]
  },
  {
    id: '4',
    candidateName: "Augusto Cury",
    number: "70",
    party: "AVANTE",
    role: "Presidente",
    image: require('../../assets/images/cury.jpg'),
    state: 'SP',
    about: 'Lorem ipsum dolor sit amet',
    age: '20',
    roleType: 'Federal',
    socialMedia: [
      {
        link: 'google.com',
        name: 'teste'
      }
    ]
  }
];