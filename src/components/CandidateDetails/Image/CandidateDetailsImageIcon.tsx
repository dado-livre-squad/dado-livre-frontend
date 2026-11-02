import { useRouter } from "expo-router"
import { ChevronLeft, Share2 } from "lucide-react-native"
import { StyleSheet, Text } from "react-native"

export default function CandidateDetailsImageIcon() {
  const router = useRouter()
  const handleGoBack = () => {
    if (router.canGoBack()) router.back()
  }

  return (
    <>
      <Text style={styles.icon} onPress={handleGoBack}>
        <ChevronLeft color={'white'} />
      </Text>
      <Text style={styles.icon}>
        <Share2 color={'white'} />
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
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
