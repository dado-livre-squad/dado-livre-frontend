import { NewsCardModel } from "@/models/news-card.model";
import { FlatList, StyleSheet, View } from "react-native";
import NewsCard from "../NewsCard/NewsCard";

interface NewsardListProps {
  footer?: React.ReactElement | null;
  header?: React.ReactElement | null;
}

const newsList: NewsCardModel[] = [
  {
    id: '1',
    theme: 'Legislação',
    title: 'Congresso inicia debates sobre novas regras para campanhas digitais',
    date: '30 ago de 2026 - 3 min de leitura',
    imageUrl: require('@/assets/images/noticia-1.jpg')
  },
  {
    id: '2',
    theme: 'Serviço',
    title: 'Eleitor já pode consultar seu local de votação pelo aplicativo',
    date: '29 ago de 2026 - 3 min de leitura',
    imageUrl: require('@/assets/images/noticia-2.jpg')
  },
  {
    id: '3',
    theme: 'Política',
    title: 'Partidos divulgam agenda dos próximos encontros regionais',
    date: '28 ago de 2026 - 3 min de leitura',
    imageUrl: require('@/assets/images/noticia-3.jpg')
  },
]

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
          <View style={styles.cartaoWrapper}>
            <NewsCard
              theme={item.theme}
              title={item.title}
              date={item.date}
              imageUrl={item.imageUrl}
            />
          </View>
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