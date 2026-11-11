import { mainColor } from '@/constants/color';
import { StyleSheet, Text, View } from 'react-native';

type Props = { percentage: number; votes: number }

export default function VoteProgressBar({ percentage, votes }: Props) {
  return (
    <View>
      <View
        style={styles.track}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: 100, now: percentage }}
      >
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.votes}>{votes.toLocaleString('pt-BR')} votos</Text>
        <Text style={styles.final}>RESULTADO FINAL</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  track: { height: 8, borderRadius: 4, backgroundColor: '#E3E8EE', overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4, backgroundColor: mainColor },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  votes: { fontSize: 12, color: '#6B7C8C' },
  final: { fontSize: 11, fontWeight: '700', color: '#1B6A8A', letterSpacing: 0.5 },
})