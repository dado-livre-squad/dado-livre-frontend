import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";

type CandidateDetailsPersonalInfosProps = {
  title: string,
  data: string
}

export default function CandidateDetailsPersonalInfos({title, data}: CandidateDetailsPersonalInfosProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: t.surface,
    width: '25%',
    height: 'auto',
    borderRadius: 8,
    shadowColor: t.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontFamily: 'Nunito-Medium',
    fontSize: 11,
    color: t.muted
  },
  data: {
    fontFamily: 'RobotoSlab-ExtraBold',
    color: t.text
  }
})
