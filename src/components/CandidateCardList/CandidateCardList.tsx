import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { candidatesList } from "@/mocks/candidates";
import { FlatList, StyleSheet, View } from "react-native";
import CandidateCard from "../CandidateCard/CandidateCard";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import SpinLoader from "../SpinLoader/SpinLoader";

interface CandidateCardListProps {
  footer?: React.ReactElement | null;
  header?: React.ReactElement | null;
}

export default function CandidateCardList({ footer, header }: CandidateCardListProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.tela}>
      <FlatList
        data={candidatos}
        keyExtractor={(item) => item.idCandidato}
        numColumns={2}
        columnWrapperStyle={styles.linhaGrade}
        contentContainerStyle={styles.listaContainer}
        ListHeaderComponent={header ? header : <></>}
        ListFooterComponent={footer ? footer : <></>}
        renderItem={({ item }) => (
          <View style={styles.cartaoWrapper}>
            <CandidateCard
              candidateName={item.nomeSocial}
              number={item.partido.numero.toString()}
              party={item.partido.sigla}
              role={item.cargo.cargo}
              id={item.idCandidato}
              image={ENV.appEnv === 'dev' ? candidateService.candidatePhoto(item.idCandidato) : undefined}
            />
          </View>
        )}
      />
    </View>
  );
}

const createStyles = (t: Theme) => StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: t.background,
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
