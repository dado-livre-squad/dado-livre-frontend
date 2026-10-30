import { ImageSourcePropType } from "react-native";


export type Noticia = {
  id: string;
  categoria: string;
  titulo: string;
  data: string;
  imagem: string | ImageSourcePropType;
  url: string;
  resumo: string;
  fonte: string;
  destaque: boolean;
};

export const noticias: Noticia[] = [
  {
    id: "noticia-001",
    categoria: "Eleições",
    titulo: "Lula é reeleito após disputa acirrada com Flávio Bolsonaro",
    data: "25 Out 2026",
    imagem:
      "https://www.camara.leg.br/midias/image/2026/10/int7543-768x512.jpg",
    url: "https://www.camara.leg.br/noticias/1313705-lula-e-reeleito-presidente-com-quase-52-dos-votos-validos-no-2o-turno",
    resumo:
      "A notícia apresenta o resultado da disputa presidencial e os principais acontecimentos relacionados à votação. Consulte a reportagem original para verificar os números oficiais e os detalhes da apuração.",
    fonte: "Agência Câmara",
    destaque: true,
  },
  {
    id: "noticia-002",
    categoria: "Oposição",
    titulo: "Vitória de Lula provoca reações e questionamentos da direita",
    data: "25 Out 2026",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/10/Flavio-Bolsonaro-3.jpg?w=1200&h=900&crop=0&quality=90",
    url: "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/10/25/vitoria-de-lula-frustra-direita-e-provoca-acusacoes-de-fraude-e-tentativa-de-golpe.amp.htm",
    resumo:
      "A notícia aborda as reações de lideranças da direita ao resultado eleitoral e os questionamentos apresentados após a votação. Consulte a reportagem original para conferir as declarações e os acontecimentos relatados.",
    fonte: "UOL / Agência Estado",
    destaque: true,
  },
  {
    id: "noticia-003",
    categoria: "Governo e economia",
    titulo: "O Primeiro aumento de Imposto do novo mandato já está no forno",
    data: "28 Out 2026",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportDomesticNews/tagreuters.com2026binary_LYNXMPEM2T181-BASEIMAGE.jpg?w=1200&h=900&crop=0&quality=90",
    url: "https://www.ft.com/content/5c283ba4-37cf-4b0e-81f3-6df04b29529b",
    resumo:
      "A notícia aborda as movimentações do mercado financeiro e as questões econômicas relacionadas ao novo mandato.",
    fonte: "Financial Times",
    destaque: true,
  },

    {
    id: "noticia-004",
    categoria: "Legislação",
    titulo: "Congresso inicia debates sobre novas regras para campanhas digitais",
    data: "30 ago de 2026 - 3 min de leitura",
    imagem: require("@/assets/images/noticia-1.jpg"),
    url: "",
    resumo: "Congresso inicia debates sobre novas regras para campanhas digitais.",
    fonte: "Dado Livre",
    destaque: false,
  },
  {
    id: "noticia-005",
    categoria: "Serviço",
    titulo: "Eleitor já pode consultar seu local de votação pelo aplicativo",
    data: "29 ago de 2026 - 3 min de leitura",
    imagem: require("@/assets/images/noticia-2.jpg"),
    url: "",
    resumo: "Eleitores podem consultar informações sobre seu local de votação pelo aplicativo.",
    fonte: "Dado Livre",
    destaque: false,
  },
  {
    id: "noticia-006",
    categoria: "Política",
    titulo: "Partidos divulgam agenda dos próximos encontros regionais",
    data: "28 ago de 2026 - 3 min de leitura",
    imagem: require("@/assets/images/noticia-3.jpg"),
    url: "",
    resumo: "Partidos divulgam a programação de seus próximos encontros regionais.",
    fonte: "Dado Livre",
    destaque: false,
  },
];