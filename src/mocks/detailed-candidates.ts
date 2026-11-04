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
    about: 'Luiz Inácio Lula da Silva é um político e ex-sindicalista brasileiro, cofundador do Partido dos Trabalhadores (PT). Teve destaque na liderança das greves dos metalúrgicos no ABC Paulista nos anos 1970 e atuou historicamente na implementação de programas de assistência social, desenvolvimento econômico e diplomacia internacional.',
    age: '78',
    roleType: 'Federal',
    socialMedia: [
      {
        name: 'Instagram',
        username: '@lulaoficial',
        link: 'https://www.instagram.com/lulaoficial'
      },
      {
        name: 'X / Twitter',
        username: '@LulaOficial',
        link: 'https://x.com/LulaOficial'
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
    about: 'Flávio Nantes Bolsonaro é advogado, empresário e político brasileiro, atualmente Senador da República pelo estado do Rio de Janeiro. Filiado ao Partido Liberal (PL), atuou anteriormente durante quatro mandatos consecutivos como Deputado Estadual na Assembleia Legislativa do Rio de Janeiro (ALERJ).',
    age: '43',
    roleType: 'Federal',
    socialMedia: [
      {
        name: 'Instagram',
        username: '@flaviobolsonaro',
        link: 'https://www.instagram.com/flaviobolsonaro'
      },
      {
        name: 'X / Twitter',
        username: '@FlavioBolsonaro',
        link: 'https://x.com/FlavioBolsonaro'
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
    about: 'Renan Antonio Ferreira dos Santos é ativista político, estrategista e empresário brasileiro. É um dos fundadores e coordenadores nacionais do Movimento Brasil Livre (MBL), atuando na mobilização de manifestações públicas, produção de conteúdo de debate político e na articulação para a criação da legenda Missão.',
    age: '40',
    roleType: 'Federal',
    socialMedia: [
      {
        name: 'Instagram',
        username: '@renansantosmbl',
        link: 'https://www.instagram.com/renansantosmbl'
      },
      {
        name: 'X / Twitter',
        username: '@renansantosmbl',
        link: 'https://x.com/renansantosmbl'
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
    about: 'Augusto Jorge Cury é médico psiquiatra, professor e escritor brasileiro. Reconhecido internacionalmente por publicar diversos best-sellers nas áreas de inteligência emocional, psicologia e qualidade de vida, é o criador da Teoria da Inteligência Multifocal, voltada ao funcionamento da mente e à gestão dos pensamentos.',
    age: '65',
    roleType: 'Federal',
    socialMedia: [
      {
        name: 'Instagram',
        username: '@augustocury',
        link: 'https://www.instagram.com/augustocury'
      },
      {
        name: 'X / Twitter',
        username: '@AugustoCury',
        link: 'https://x.com/AugustoCury'
      }
    ]
  }
];