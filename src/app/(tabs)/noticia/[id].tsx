
import { Stack, useLocalSearchParams } from "expo-router";
import {
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

const noticias = [
  {
    id: "1",
    categoria: "Eleições",
    titulo: "Lula é reeleito após disputa acirrada com Flávio Bolsonaro",
    data: "25 Out 2026",
    imagem:
      "https://www.camara.leg.br/midias/image/2026/10/int7543-768x512.jpg",
    resumo:
      "A notícia apresenta o resultado da disputa presidencial e os principais acontecimentos relacionados à votação. Consulte a reportagem original para verificar os números oficiais e os detalhes da apuração.",
    fonte: "Agência Câmara",
    url: "https://www.camara.leg.br/noticias/1313705-lula-e-reeleito-presidente-com-quase-52-dos-votos-validos-no-2o-turno",
  },
  {
    id: "2",
    categoria: "Oposição",
    titulo: "Vitória de Lula provoca reações e questionamentos da direita",
    data: "25 Out 2026",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/10/Flavio-Bolsonaro-3.jpg?w=1200&h=900&crop=0&quality=90",
    resumo:
      "A notícia aborda as reações de lideranças da direita ao resultado eleitoral e os questionamentos apresentados após a votação. Consulte a reportagem original para conferir as declarações e os acontecimentos relatados.",
    fonte: "UOL / Agência Estado",
    url: "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/10/25/vitoria-de-lula-frustra-direita-e-provoca-acusacoes-de-fraude-e-tentativa-de-golpe.amp.htm",
  },
  {
    id: "3",
    categoria: "Governo e economia",
    titulo: "Real despenca frente ao dólar após reeleição de Lula",
    data: "25 Out 2026",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/10/Reuters_Direct_Media/BrazilOnlineReportDomesticNews/tagreuters.com2026binary_LYNXMPEM2T181-BASEIMAGE.jpg?w=1200&h=900&crop=0&quality=90",
    resumo:
      "A notícia aborda as movimentações do mercado financeiro e o comportamento do real frente ao dólar. Consulte a reportagem original para verificar os dados e os fatores apontados para a variação cambial.",
    fonte: "Financial Times",
    url: "https://www.ft.com/content/5c283ba4-37cf-4b0e-81f3-6df04b29529b",
  },
];

export default function NoticiaDetalhe() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const noticia = noticias.find((item) => item.id === id);

  if (!noticia) {
    return (
      <>
        <Stack.Screen options={{ title: "Notícia" }} />
        <Text style={styles.erro}>Notícia não encontrada.</Text>
      </>
    );
  }

  async function abrirNoticiaOriginal() {
  if (!noticia) return;

  try {
    await Linking.openURL(noticia.url);
  } catch {
    // O sistema não conseguiu abrir o endereço.
  }
}

  return (
    <>
      <Stack.Screen options={{ title: "Notícia", headerBackTitle: "Voltar" }} />

      <ScrollView style={styles.container}>
        <Image
          source={{ uri: noticia.imagem }}
          style={styles.imagem}
          resizeMode="cover"
        />

        <Text style={styles.categoria}>{noticia.categoria}</Text>

        <Text style={styles.titulo}>{noticia.titulo}</Text>

        <Text style={styles.data}>
          {noticia.data} • Fonte: {noticia.fonte}
        </Text>

        <Text style={styles.subtitulo}>Entenda a notícia</Text>

        <Text style={styles.resumo}>{noticia.resumo}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={abrirNoticiaOriginal}
          accessibilityRole="button"
        >
          <Text style={styles.textoBotao}>Ler notícia original</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imagem: {
    width: "100%",
    height: 250,
    backgroundColor: "#E5E5E5",
  },
  categoria: {
    marginTop: 20,
    marginHorizontal: 18,
    color: "#B91C1C",
    fontSize: 14,
    fontWeight: "700",
  },
  titulo: {
    marginTop: 8,
    marginHorizontal: 18,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#171717",
  },
  data: {
    marginTop: 12,
    marginHorizontal: 18,
    fontSize: 12,
    color: "#737373",
  },
  subtitulo: {
    marginTop: 25,
    marginHorizontal: 18,
    fontSize: 19,
    fontWeight: "bold",
    color: "#171717",
  },
  resumo: {
    marginTop: 10,
    marginHorizontal: 18,
    fontSize: 16,
    lineHeight: 25,
    color: "#404040",
  },
  botao: {
    margin: 18,
    marginTop: 25,
    marginBottom: 35,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#B91C1C",
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  erro: {
    padding: 20,
    fontSize: 16,
    color: "#404040",
  },
});
