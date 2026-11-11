import { mainColor } from "@/constants/color";
import { StyleSheet, Text, View } from "react-native";

type CandidateNumberProps = {
  number: string;
} 

export default function CandidateNumber({number}: CandidateNumberProps) {
  return (
    <>
      <View style={styles.numberContainer}>
        <Text style={styles.numberSymbol}>N°</Text>
        <Text style={styles.number}>{number}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: mainColor,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    height: 'auto',
    width: 'auto',
    borderColor: '#a0acb5',
    borderWidth: 0.5
  },
  numberSymbol: {
    color: '#a0acb5'
  },
  number: {
    color: 'white',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 20
  }
})
