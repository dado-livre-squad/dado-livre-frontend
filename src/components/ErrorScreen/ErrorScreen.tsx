import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type ErrorScreenProps = {
  title: string;
  subTitle: string;
}

export default function ErrorScreen({title, subTitle}: ErrorScreenProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Link href={'/'} replace style={styles.homeLink}>
            Voltar a tela inicial
          </Link>
        </View>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingBottom: 150,
    backgroundColor: t.background
  },
  title: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 48,
    color: t.title
  },
  subTitle: {
    fontFamily: 'Nunito-Medium',
    color: t.title,
    fontSize: 18
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 50
  },
  homeLink: {
    backgroundColor: t.cta,
    color: t.ctaText,
    padding: 14,
    borderRadius: 8,
    fontFamily: 'RobotoSlab-Regular'
  }
})
