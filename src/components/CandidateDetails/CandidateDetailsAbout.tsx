import { StyleSheet, Text } from "react-native";
import InfoContainer from "../InfoContainer/CandidateDetailsContainer";

type CandidateDetailsAboutProps = {
  about: string
}

export default function CandidateDetailsAbout({ about }: CandidateDetailsAboutProps) {
  return (
    <>
      <InfoContainer>
        <Text style={styles.title}>SOBRE</Text>
        <Text style={styles.about}>{about}</Text>
      </InfoContainer>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Nunito-ExtraBold'
  },
  about: {
    fontFamily: 'Nunito-Medium'
  }
})