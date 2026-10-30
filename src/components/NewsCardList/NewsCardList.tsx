import { noticias } from "@/data/noticias";
import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import NewsCard from "../NewsCard/NewsCard";

interface NewsardListProps {
  footer?: React.ReactElement | null;
  header?: React.ReactElement | null;
}

const newsList = noticias.filter((noticia) => !noticia.destaque);

export default function NewsCardList({ header, footer }: NewsardListProps) {
  return (
    <View style={styles.tela}>
      <FlatList
        data={newsList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        ListHeaderComponent={header ? header : <></>}
        ListFooterComponent={footer ? footer : <></>}
        renderItem={({ item }) => (
          <NewsCard
            theme={item.categoria}
            title={item.titulo}
            date={item.data}
            imageUrl={item.imagem}
            onPress={() => {
              router.push({
                pathname: "/noticia/[id]",
                params: { id: item.id },
              });
            }}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  listaContainer: {
    gap: 20,
    paddingVertical: 16,
  },
  cartaoWrapper: {
    width: '100%',
  }
})