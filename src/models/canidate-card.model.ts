import { ImageSourcePropType } from "react-native"

export type CandidateModel = {
  id: string,
  candidateName: string,
  number: string,
  party: string,
  role: string,
  state: string,
  image: ImageSourcePropType
}