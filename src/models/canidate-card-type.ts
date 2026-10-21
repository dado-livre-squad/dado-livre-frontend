import { ImageSourcePropType } from "react-native"

export type CandidateCardType = {
  id: string,
  candidateName: string,
  number: string,
  party: string,
  role: string,
  image: ImageSourcePropType
}