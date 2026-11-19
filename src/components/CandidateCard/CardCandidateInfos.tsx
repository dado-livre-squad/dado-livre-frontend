import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";
import CardTitle from "./CardTitle";

export type CandidateCardInfoProps = {
  name: string
  role: string,
  number: string,
}

export default function CardCandidateInfos({name, role, number}: CandidateCardInfoProps) {
  const styles = useThemedStyles(createStyles)

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
        <Text style={styles.cardSub}>
          Número
        </Text>
        <Text style={styles.number}>
          {number}
        </Text>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  cardSub: {
    fontFamily: 'Nunito-Medium',
    color: t.subtle
  },
  numberContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: t.surfaceAlt,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8
  },
  number: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    color: t.title
  }
})
