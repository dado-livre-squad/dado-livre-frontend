import { CandidateCardType } from "@/models/canidate-card-type";
import { FlatList, StyleSheet, View } from "react-native";
import CandidateCard from "../CandidateCard/CandidateCard";
import Carroussel from "../Carroussel/Carroussel";
import NextElections from "../NextElections/NextElections";

export default function CandidateCardList() {
  const listaCandidatos: CandidateCardType[] = [
    {
      id: '1',
      candidateName: "Lula da Silva",
      number: "13",
      party: "PT",
      role: "Presidente",
      image: require('../../../assets/images/lula.jpg')
    },
    {
      id: '2',
      candidateName: "Flávio Bolsonaro",
      number: "22",
      party: "PL",
      role: "Presidente",
      image: require('../../../assets/images/flavio.jpg')
    },
    {
      id: '3',
      candidateName: "Renan Santos",
      number: "14",
      party: "MISSÃO",
      role: "Presidente",
      image: require('../../../assets/images/renan.jpg')
    },
    {
      id: '4',
      candidateName: "Augusto Cury",
      number: "70",
      party: "AVANTE",
      role: "Presidente",
      image: require('../../../assets/images/cury.jpg')
    }
  ];

  return (
    <>
      <View style={styles.tela}>
        <FlatList
          data={listaCandidatos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.linhaGrade}
          contentContainerStyle={styles.listaContainer}
          ListFooterComponent={
            <View>
              <NextElections/>
            </View>
          }
          ListHeaderComponent={
            <Carroussel/>
          }
          renderItem={({ item }) => (
            <View style={styles.cartaoWrapper}>
              <CandidateCard
                candidateName={item.candidateName}
                number={item.number}
                party={item.party}
                role={item.role}
                image={item.image}
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
