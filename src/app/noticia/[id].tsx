
import { Stack, useLocalSearchParams } from "expo-router";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { noticias } from "@/data/noticias";


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
          source={
            typeof noticia.imagem === "string"
              ? { uri: noticia.imagem }
              : noticia.imagem
            }
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
