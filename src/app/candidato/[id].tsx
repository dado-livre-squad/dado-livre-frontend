import { candidatesList } from '@/mocks/candidates';
import { CandidateCardType } from '@/models/canidate-card-type';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, Share2 } from 'lucide-react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const candidate: CandidateCardType | undefined = candidatesList.find(candidate => candidate.id === id)
  const router = useRouter()

  const handleGoBack = () => {
    if (router.canGoBack()) router.back()
  }

  return (
    <>
      {!candidate ?
        <Text>Candidato não encontrado</Text>
        :
        <View style={styles.imageContainer}>
          <Image source={candidate.image} style={styles.image} />

          <View style={styles.upperIcons}>
            <Text style={styles.icon} onPress={handleGoBack}>
              <ChevronLeft color={'white'} />
            </Text>
            <Text style={styles.icon}>
              <Share2 color={'white'} />
            </Text>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '35%',
    width: '100%',
    position: 'relative'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  upperIcons: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  icon: {
    backgroundColor: '#3f4a52',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    opacity: 0.6
  }
})
