import { CandidateDetailsResponseDTO } from "@/dto/candidato/candidate-details-response.dto";

export const detailedCandidatesList: CandidateDetailsResponseDTO[] = [
  {
    idCandidato: '1',
    nomeSocial: "Lula da Silva",
    numeroPartido: 13,
    partido: "PT",
    nomeCargo: "Presidente",
    image: require('../../assets/images/lula.jpg'),
    estado: 'SP',
    sobre: 'Luiz Inácio Lula da Silva é um político e ex-sindicalista brasileiro, cofundador do Partido dos Trabalhadores (PT). Teve destaque na liderança das greves dos metalúrgicos no ABC Paulista nos anos 1970 e atuou historicamente na implementação de programas de assistência social, desenvolvimento econômico e diplomacia internacional.',
    idade: 81,
    tipoCargo: 'Federal',
    redesSociais: [
      {
        idRede: '4',
        nome: 'Instagram',
        usuario: '@lulaoficial',
        endereco: 'https://www.instagram.com/lulaoficial'
      },
      {
        idRede: '7',
        nome: 'X / Twitter',
        usuario: '@LulaOficial',
        endereco: 'https://x.com/LulaOficial'
      }
    ]
  },
  {
    idCandidato: '2',
    nomeSocial: "Flávio Bolsonaro",
    numeroPartido: 22,
    partido: "PL",
    nomeCargo: "Presidente",
    image: require('../../assets/images/flavio.jpg'),
    estado: 'SP',
    sobre: 'Flávio Nantes Bolsonaro é advogado, empresário e político brasileiro, atualmente Senador da República pelo estado do Rio de Janeiro. Filiado ao Partido Liberal (PL), atuou anteriormente durante quatro mandatos consecutivos como Deputado Estadual na Assembleia Legislativa do Rio de Janeiro (ALERJ).',
    idade: 43,
    tipoCargo: 'Federal',
    redesSociais: [
      {
        idRede: '1',
        nome: 'Instagram',
        usuario: '@flaviobolsonaro',
        endereco: 'https://www.instagram.com/flaviobolsonaro'
      },
      {
        idRede: '2',
        nome: 'X / Twitter',
        usuario: '@FlavioBolsonaro',
        endereco: 'https://x.com/FlavioBolsonaro'
      }
    ]
  },
  {
    idCandidato: '3',
    nomeSocial: "Renan Santos",
    numeroPartido: 14,
    partido: "MISSÃO",
    nomeCargo: "Presidente",
    image: require('../../assets/images/renan.jpg'),
    estado: 'SP',
    sobre: 'Renan Antonio Ferreira dos Santos é ativista político, estrategista e empresário brasileiro. É um dos fundadores e coordenadores nacionais do Movimento Brasil Livre (MBL), atuando na mobilização de manifestações públicas, produção de conteúdo de debate político e na articulação para a criação da legenda Missão.',
    idade: 40,
    tipoCargo: 'Federal',
    redesSociais: [
      {
        idRede: '3',
        nome: 'Instagram',
        usuario: '@renansantosmbl',
        endereco: 'https://www.instagram.com/renansantosmbl'
      },
      {
        idRede: '5',
        nome: 'X / Twitter',
        usuario: '@renansantosmbl',
        endereco: 'https://x.com/renansantosmbl'
      }
    ]
  },
  {
    idCandidato: '4',
    nomeSocial: "Augusto Cury",
    numeroPartido: 70,
    partido: "AVANTE",
    nomeCargo: "Presidente",
    image: require('../../assets/images/cury.jpg'),
    estado: 'SP',
    sobre: 'Augusto Jorge Cury é médico psiquiatra, professor e escritor brasileiro. Reconhecido internacionalmente por publicar diversos best-sellers nas áreas de inteligência emocional, psicologia e qualidade de vida, é o criador da Teoria da Inteligência Multifocal, voltada ao funcionamento da mente e à gestão dos pensamentos.',
    idade: 65,
    tipoCargo: 'Federal',
    redesSociais: [
      {
        idRede: '6',
        nome: 'Instagram',
        usuario: '@augustocury',
        endereco: 'https://www.instagram.com/augustocury'
      },
      {
        idRede: '8',
        nome: 'X / Twitter',
        usuario: '@AugustoCury',
        endereco: 'https://x.com/AugustoCury'
      }
    ]
  }
];