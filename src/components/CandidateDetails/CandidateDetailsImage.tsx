import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"
import CandidateDetailsImageIcon from "./CandidateDetailsImageIcon"

type CandidateDetailsImageProps = {
  image: ImageSourcePropType
}

export default function CandidateDetailsImage({ image }: CandidateDetailsImageProps) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />

        <View style={styles.upperIcons}>
          <CandidateDetailsImageIcon />
        </View>

        <View style={styles.bottomCandidateInfosContainer}>
          <View>
            <View style={styles.partyContainer}>
              <Text>MISSÃO</Text>
              <Text>SP</Text>
            </View>

            <View>
              <Text>Renan Santos</Text>
              <Text>Presidente</Text>
            </View>            
          </View>

          <View>
            <Text>N</Text>
            <Text>14</Text>
          </View>
        </View>
      </View>
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
  bottomCandidateInfosContainer: {
    width: '100%',
    position: 'absolute',
    marginTop: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  partyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  }
})
