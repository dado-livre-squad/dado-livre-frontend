import { CandidateModel } from "@/models/canidate-card.model";
import { LinearGradient } from "expo-linear-gradient"; // ou 'react-native-linear-gradient'
import { Image, StyleSheet, View } from "react-native";
import CandidateDetailsImageIcon from "./CandidateDetailsImageIcon";
import CandidateDetailsInfos from "./Infos/CandidateDetailsInfos";

type CandidateDetailsImageProps = {
  candidate: CandidateModel
}

export default function CandidateDetailsImage({ candidate }: CandidateDetailsImageProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={candidate.image} style={styles.image} />
      
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.65)', 'transparent']}
        style={styles.topGradientOverlay}
      />

      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.85)']}
        style={styles.bottomGradientOverlay}
      />

      <View style={styles.upperIcons}>
        <CandidateDetailsImageIcon />
      </View>

      <CandidateDetailsInfos candidate={candidate}/>

    </View>
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
  topGradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '35%'
  },
  bottomGradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%'
  },
  upperIcons: {
    width: '100%',
    position: 'absolute',
    top: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 2
  }
})