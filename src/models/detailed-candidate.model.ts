import { ImageSourcePropType } from "react-native"
import { SocialMedia } from "./social-media.model"

export type DetailedCandidateModel = {
  id: string,
  candidateName: string,
  number: string,
  party: string,
  role: string,
  state: string,
  image: ImageSourcePropType,
  age: string,
  about: string,
  socialMedia: SocialMedia[],
  roleType: string
}