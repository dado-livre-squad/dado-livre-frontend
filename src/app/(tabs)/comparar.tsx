import CandidateSlot from '@/components/Compare/CandidateSlot'
import DifferenceCard from '@/components/Compare/DifferenceCard'
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen'
import SpinLoader from '@/components/SpinLoader/SpinLoader'
import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { CandidatoListResponseDTO } from '@/dto/candidato/candidate-list-response.dto'
import { candidateService } from '@/services/candidate/candidate-service'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Comparar() {
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

  const filteredCandidates = candidatos.filter((c, i) => i < 2)

  function handleTrocar(index: number) {
    // TODO: abrir seletor de candidato e substituir candidatos[index]
  }

  if (loading) return <SpinLoader/>
  if (error) return <ErrorScreen title="Erro" subTitle={error}/>

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>FERRAMENTA DE DECISÃO</Text>
      <Text style={styles.title}>Compare candidatos</Text>
      <Text style={styles.subtitle}>
        Escolha até dois nomes para observar propostas e trajetória lado a lado.
      </Text>

      <View style={styles.slots}>
        {filteredCandidates.map((c, i) => (
          <CandidateSlot key={c.idCandidato} candidato={c} onSwap={() => handleTrocar(i)} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Diferenças</Text>

      <View style={styles.differences}>
        {filteredCandidates.map((c) => (
          <DifferenceCard key={c.idCandidato} candidato={c} />
        ))}
      </View>
    </ScrollView>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: t.background },
    content: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 40 },

    eyebrow: {
      fontFamily: 'Nunito-Bold',
      fontSize: 11,
      letterSpacing: 1.5,
      color: t.text,
    },
    title: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 22,
      color: t.title,
      marginTop: 8,
    },
    subtitle: {
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      lineHeight: 21,
      color: t.muted,
      marginTop: 8,
    },

    slots: { flexDirection: 'row', gap: 12, marginTop: 24 },

    sectionTitle: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 16,
      color: t.text,
      marginTop: 28,
    },
    differences: { gap: 12, marginTop: 12 },
  })