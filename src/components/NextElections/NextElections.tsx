import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { StyleSheet, Text, View } from 'react-native'
import NextElectionContainer from './NextElectionContainer'
import NextElectionInfo from './NextElectionInfo'

export default function NextElections() {
  const styles = useThemedStyles(createStyles)

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

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    gap: 14,
    marginBottom: 50,
    paddingHorizontal: 5
  },
  title: {
    fontFamily: 'RobotoSlab-SemiBold',
    color: t.title,
    fontSize: 18
  },
})
