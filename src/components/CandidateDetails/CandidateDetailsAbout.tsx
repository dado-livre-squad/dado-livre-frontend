import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text } from "react-native";
import InfoContainer from "../InfoContainer/CandidateDetailsContainer";

type CandidateDetailsAboutProps = {
  about: string
}

export default function CandidateDetailsAbout({ about }: CandidateDetailsAboutProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <InfoContainer>
        <Text style={styles.title}>SOBRE</Text>
        <Text style={styles.about}>{about}</Text>
      </InfoContainer>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  title: {
    fontFamily: 'Nunito-ExtraBold',
    color: t.text
  },
  about: {
    fontFamily: 'Nunito-Medium',
    color: t.text
  }
})
