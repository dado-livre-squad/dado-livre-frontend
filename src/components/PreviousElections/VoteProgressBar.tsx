import type { Theme } from '@/constants/theme';
import { useThemedStyles } from '@/contexts/ThemeContext';
import { StyleSheet, Text, View } from 'react-native';

type Props = { percentage: number; votes: number }

export default function VoteProgressBar({ percentage, votes }: Props) {
  const styles = useThemedStyles(createStyles)

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

const createStyles = (t: Theme) => StyleSheet.create({
  track: { height: 8, borderRadius: 4, backgroundColor: t.progressTrack, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4, backgroundColor: t.trackOn },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  votes: { fontSize: 12, color: t.muted },
  final: { fontSize: 11, fontWeight: '700', color: t.accent, letterSpacing: 0.5 },
})
