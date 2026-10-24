import { mainColor } from "@/constants/color";
import { Star } from "lucide-react-native";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import CardCandidateInfos from "./CardCandidateInfos";
import CardContainer from "./CardContainer";
import CardContentContainer from "./CardContentContainer";

type CandidateCardProps = {
  image: ImageSourcePropType,
  party: string,
  candidateName: string,
  role: string,
  number: string
}

export default function CandidateCard({ image, party, candidateName, role, number }: CandidateCardProps) {
  return (
    <>
      <View style={styles.container}>
        <CardContainer>
          <View style={styles.imageWrapper}>
            <Image source={image} style={styles.image} />

            <View style={styles.partyBadge}>
              <Star size={14} color={'white'} />
              <Text style={styles.partyText}>{party}</Text>
            </View>
          </View>

          <CardContentContainer>
            <CardCandidateInfos role={role} name={candidateName} number={number} />
          </CardContentContainer>
        </CardContainer>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  partyBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  partyText: {
    color: '#ffffff',
    fontFamily: 'Nunito-Medium',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 6,
  },
})
