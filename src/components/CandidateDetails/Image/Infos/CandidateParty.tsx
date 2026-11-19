import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";

type PartyProps = {
  party: string;
  state: string
}

export default function Party({party, state}: PartyProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.partyContainer}>
        <Text style={styles.party}>{party}</Text>
        <Text style={styles.state}>{state}</Text>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
    partyContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  party: {
    backgroundColor: t.primary,
    color: t.onPrimary,
    fontFamily: 'Nunito-Bold',
    padding: 5,
    fontSize: 12,
    borderRadius: 8
  },
  state: {
    color: 'white',
    fontFamily: 'Nunito-Bold'
  },
})
