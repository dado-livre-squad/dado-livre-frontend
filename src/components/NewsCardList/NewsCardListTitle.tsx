import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text, View } from "react-native";

export default function NewsCardListTitle() {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>MAIS NOTICIAS</Text>
        <View style={styles.titleCall}>
          <Text style={styles.titleLastNews}>Acompanhe as últimas atualizações</Text>
          <Text style={styles.titleNewsCount}>3 novas</Text>
        </View>
      </View>

    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: 'flex',
    marginTop: 20
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    color: t.title,
    fontSize: 16
  },
  titleCall: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleLastNews: {
    fontSize: 12,
    fontFamily: 'Nunito-Medium',
    color: t.subtle,
    flexShrink: 1,
  },
  titleNewsCount: {
    backgroundColor: t.chip,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
    fontFamily: 'RobotoSlab-Bold',
    color: t.chipText,
    borderRadius: 12,
  },
})
