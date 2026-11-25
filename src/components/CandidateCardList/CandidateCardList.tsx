import { ENV } from "@/constants/enviroment";
import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { candidateService } from "@/services/candidate/candidate-service";
import { useEffect, useState } from "react";
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
  const [candidatos, setCandidatos] = useState<CandidatoListResponseDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    candidateService
      .listCandidates()
      .then(setCandidatos)
      .catch(() => setError("Não foi possível carregar os candidatos."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <SpinLoader/>
  if (error) return <ErrorScreen title="Erro" subTitle={error}/>

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
              image={ENV.mock ? candidateService.candidatePhoto(item.idCandidato) : undefined}
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
