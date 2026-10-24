import { StyleSheet, Text, View } from "react-native";

type NextElectionInfoProps = {
  electionsType: string,
  date: string,
  turn: string,
  day: string
}

export default function NextElectionInfo({electionsType, date, turn, day}: NextElectionInfoProps) {
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

const styles = StyleSheet.create({
    innerNewsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerNewsContainerMainText: {
    color: 'white',
    fontFamily: 'RobotoSlab-Bold'
  },
  innerNewsContainerSubText: {
    color: '#74a09d',
    fontFamily: 'RobotoSlab-Regular'
  }
})