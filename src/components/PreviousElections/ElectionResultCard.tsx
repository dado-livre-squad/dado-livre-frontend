import { ElectionResult } from '@/models/ElectionResult'
import { StyleSheet, View } from 'react-native'
import CandidateResultInfo from './CandidateResultInfo'
import ElectionResultContainer from './ElectionResultContainer'
import ElectionResultHeader from './ElectionResultHeader'
import VoteProgressBar from './VoteProgressBar'

type ElectionResultCardProps = {
  result: ElectionResult
}

export default function ElectionResultCard({ result }: ElectionResultCardProps) {
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
          party={winner.party}
          percentage={winner.percentage}
        />
        <VoteProgressBar percentage={winner.percentage} votes={winner.votes} />
      </View>
    </ElectionResultContainer>
  )
}

const styles = StyleSheet.create({
  header: { padding: 16 },
  divider: { height: 1, backgroundColor: '#EEF1F4' },
  body: { padding: 16, gap: 14 },
})