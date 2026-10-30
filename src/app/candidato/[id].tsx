import CandidateDetailsImage from '@/components/CandidateDetails/CandidateDetailsImage';
import { candidatesList } from '@/mocks/candidates';
import { CandidateCardType } from '@/models/canidate-card-type';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: CandidateCardType | undefined = candidatesList.find(candidate => candidate.id === id)

  return (
    <>
      {!candidate ?
        <Text>Candidato não encontrado</Text>
        :
        <CandidateDetailsImage image={candidate.image}/>
      }
    </>
  )
}

const styles = StyleSheet.create({
})
