import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { ElectionResult } from '@/models/election-result'
import { StyleSheet, View } from 'react-native'
import CandidateResultInfo from './CandidateResultInfo'
import ElectionResultContainer from './ElectionResultContainer'
import ElectionResultHeader from './ElectionResultHeader'
import VoteProgressBar from './VoteProgressBar'

type ElectionResultCardProps = {
  result: ElectionResult
}

export default function ElectionResultCard({ result }: ElectionResultCardProps) {
  const styles = useThemedStyles(createStyles)
  const { title, subtitle, round, winner } = result

  return (
    <ElectionResultContainer>
      <View style={styles.header}>
        <ElectionResultHeader title={title} subtitle={subtitle} round={round} />
      </View>

      <View style={styles.divider} />

      <View style={styles.body}>
        <CandidateResultInfo
          name={winner.name}
          lastName={winner.lastName}
          party={winner.party}
          percentage={winner.percentage}
        />
        <VoteProgressBar percentage={winner.percentage} votes={winner.votes} />
      </View>
    </ElectionResultContainer>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  header: { padding: 16 },
  divider: { height: 1, backgroundColor: t.border },
  body: { padding: 16, gap: 14 },
})
