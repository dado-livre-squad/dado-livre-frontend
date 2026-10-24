import { mainColor } from '@/constants/color'
import { StyleSheet, Text, View } from 'react-native'
import NextElectionContainer from './NextElectionContainer'
import NextElectionInfo from './NextElectionInfo'

export default function NextElections() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Próximas eleiçoes
        </Text>
        <NextElectionContainer>
          <NextElectionInfo
            date='04 Out 2026'
            day='Domingo'
            electionsType='Eleições Municipais'
            turn='1º Turno'
          />
        </NextElectionContainer>
        <NextElectionContainer>
          <NextElectionInfo
            date='25 Out 2026'
            day='Domingo'
            electionsType='Eleições Municipais'
            turn='2º Turno'
          />
        </NextElectionContainer>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    gap: 14,
    marginBottom: 50,
    paddingHorizontal: 5
  },
  title: {
    fontFamily: 'RobotoSlab-SemiBold',
    color: mainColor,
    fontSize: 18
  },
})
