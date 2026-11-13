import { ElectionResultWinner } from '@/models/election-result-winner'

export type ElectionResult = {
  id: string
  title: string
  subtitle: string
  round: 1 | 2
  winner: ElectionResultWinner
}