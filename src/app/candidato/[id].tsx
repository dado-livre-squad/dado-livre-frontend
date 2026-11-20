import CandidateDetails from '@/components/CandidateDetails/CandidateDetails';
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen';
import SpinLoader from '@/components/SpinLoader/SpinLoader';
import type { Theme } from '@/constants/theme';
import { useThemedStyles } from '@/contexts/ThemeContext';
import { CandidateDetailsResponseDTO } from '@/dto/candidato/candidate-details-response.dto';
import { candidateService } from '@/services/candidate-service';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Details() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()
  const [candidate, setCandidate] = useState<CandidateDetailsResponseDTO>()

  const styles = useThemedStyles(createStyles);
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    candidateService
      .candidateDetails(id)
      .then(setCandidate)
      .catch(() => setError('Candidato não encontrado.'))
      .finally(() => setLoading(false))
  }, [0])

  if (loading) return <SpinLoader />
  if (error) return <ErrorScreen title="Erro" subTitle={error} />


  return (
    <View style={styles.container}>
      {!candidate ?
        <ErrorScreen
          title='Oops!'
          subTitle='Candidato não encontrado'
        />
        :
        <CandidateDetails candidate={candidate} />
      }
    </View>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: t.background
  }
})
