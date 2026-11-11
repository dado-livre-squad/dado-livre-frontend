export type electionResult = {
  id: string
  title: string
  subtitle: string
  round: 1 | 2
  winner: {
    name: string
    party: string
    percentage: number
    votes: number
  }
}