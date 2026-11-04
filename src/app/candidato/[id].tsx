import CandidateDetails from '@/components/CandidateDetails/CandidateDetails';
import { detailedCandidatesList } from '@/mocks/detailed-candidates';
import { DetailedCandidateModel } from '@/models/detailed-candidate.model';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: DetailedCandidateModel | undefined = detailedCandidatesList.find(candidate => 
    candidate.id === id)

  return (
    <View style={styles.container}>
      {!candidate ?
        <ErrorScreen
          title='Oops!'
          subTitle='Candidato não encontrado'
        />
        :
        <CandidateDetails candidate={candidate}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
