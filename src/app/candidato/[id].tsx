import CandidateDetails from '@/components/CandidateDetails/CandidateDetails';
import { detailedCandidatesList } from '@/mocks/detailed-candidates';
import { DetailedCandidateModel } from '@/models/detailed-candidate.model';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: DetailedCandidateModel | undefined = detailedCandidatesList.find(candidate => 
    candidate.id === id)

  return (
    <>
      {!candidate ?
        <Text>Candidato não encontrado</Text>
        :
        <CandidateDetails candidate={candidate}/>
      }
    </>
  )
}

const styles = StyleSheet.create({
})
