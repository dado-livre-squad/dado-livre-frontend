import { StyleSheet, Text } from "react-native";

type CandidateNameProps = {
  name: string
}

export default function CandidateName({name}: CandidateNameProps) {
  return (
    <>
      <Text style={styles.candidateName}>{name}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  candidateName: {
    fontFamily: 'RobotoSlab-Bold',
    color: 'white',
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
})