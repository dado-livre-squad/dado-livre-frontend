import CandidateDetailsImage from '@/components/CandidateDetails/CandidateDetailsImage';
import { candidatesList } from '@/mocks/candidates';
import { CandidateModel } from '@/models/canidate-card.model';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: CandidateModel | undefined = candidatesList.find(candidate => candidate.id === id)

  return (
    <>
      {!candidate ?
        <Text>Candidato não encontrado</Text>
        :
        <CandidateDetailsImage candidate={candidate}/>
      }
    </>
  )
}

const styles = StyleSheet.create({
})
