import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";

type NextElectionInfoProps = {
  electionsType: string,
  date: string,
  turn: string,
  day: string
}

export default function NextElectionInfo({electionsType, date, turn, day}: NextElectionInfoProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.innerNewsContainer}>
        <Text style={styles.innerNewsContainerMainText}>
          {electionsType}
        </Text>
        <Text style={styles.innerNewsContainerMainText}>
          {date}
        </Text>
      </View>
      <View style={styles.innerNewsContainer}>
        <Text style={styles.innerNewsContainerSubText}>
          {turn}
        </Text>
        <Text style={styles.innerNewsContainerSubText}>
          {day}
        </Text>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
    innerNewsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerNewsContainerMainText: {
    color: t.onPrimary,
    fontFamily: 'RobotoSlab-Bold'
  },
  innerNewsContainerSubText: {
    color: t.primaryMuted,
    fontFamily: 'RobotoSlab-Regular'
  }
})
