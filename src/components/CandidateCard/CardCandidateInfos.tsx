import { mainColor } from "@/constants/color";
import { StyleSheet, Text, View } from "react-native";
import CardTitle from "./CardTitle";

export type CandidateCardInfoProps = {
  name: string
  role: string,
  number: string,
}

export default function CardCandidateInfos({name, role, number}: CandidateCardInfoProps) {
  return (
    <>
      <CardTitle>
        {name}
      </CardTitle>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.cardSub}>
          {role}
        </Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={{ fontFamily: 'Nunito-Medium', color: '#9993a5' }}>
          Número
        </Text>
        <Text style={styles.number}>
          {number}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cardSub: {
    fontFamily: 'Nunito-Medium',
    color: '#9993a5'
  },
  numberContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f0f5f8',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8
  },
  number: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    color: mainColor
  }
})
