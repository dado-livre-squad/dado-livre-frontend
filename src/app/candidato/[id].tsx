import CandidateDetailsImage from '@/components/CandidateDetails/CandidateDetailsImage';
import ErrorScreen from '@/components/ErrorScreen/ErrorScreen';
import { candidatesList } from '@/mocks/candidates';
import { CandidateModel } from '@/models/canidate-card.model';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: CandidateModel | undefined = candidatesList.find(candidate => candidate.id === id)

  return (
    <>
      {!candidate ?
        <ErrorScreen
          title='Oops!'
          subTitle='Candidato não encontrado'
        />
        :
        <CandidateDetailsImage candidate={candidate} />
      }
    </>
  )
}

const styles = StyleSheet.create({
})
