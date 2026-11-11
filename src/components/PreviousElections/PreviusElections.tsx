import { mainColor } from '@/constants/color'
import { ElectionResult } from '@/models/ElectionResult'
import { StyleSheet, Text, View } from 'react-native'
import ElectionResultCard from './ElectionResultCard'

type PreviusElectionsProps = {
  results: ElectionResult[]
}

export default function PreviusElections({ results }: PreviusElectionsProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Resultados Anteriores
          </Text>
        <Text style={styles.subtitle}>
          Resultados oficiais com 100% das seções apuradas
        </Text>
      </View>

      {results.map((result) => (
        <ElectionResultCard key={result.id} result={result} />
      ))}
    </View>
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
  subtitle: {
    color: '#6B7C8C', // TODO: mover para constants/color se já não existir
    fontSize: 13,
    marginTop: 2
  },
})