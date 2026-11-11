import { candidatesList } from "@/mocks/candidates";
import { FlatList, StyleSheet, View } from "react-native";
import CandidateCard from "../CandidateCard/CandidateCard";

interface CandidateCardListProps {
  footer?: React.ReactElement | null;
  header?: React.ReactElement | null;
}

export default function CandidateCardList({ footer, header }: CandidateCardListProps) {

  return (
    <>
      <View style={styles.tela}>
        <FlatList
          data={candidatesList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.linhaGrade}
          contentContainerStyle={styles.listaContainer}
          ListHeaderComponent={header ? header : <></>}
          ListFooterComponent={footer ? footer : <></>}
          renderItem={({ item }) => (
            <View style={styles.cartaoWrapper}>
                <CandidateCard
                  candidateName={item.candidateName}
                  number={item.number}
                  party={item.party}
                  role={item.role}
                  image={item.image}
                  id={item.id}
                />
            </View>
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  listaContainer: {
    padding: 14,
    gap: 1,
  },
  linhaGrade: {
    justifyContent: 'space-between',
  },
  cartaoWrapper: {
    width: '48%',
  }
})
