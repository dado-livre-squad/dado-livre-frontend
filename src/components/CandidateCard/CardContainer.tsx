import type { Theme } from "@/constants/theme"
import { useThemedStyles } from "@/contexts/ThemeContext"
import { StyleSheet, View } from "react-native"

type CardContainerProps = {
  children: React.ReactNode
}

export default function CardContainer({ children }: CardContainerProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <View style={styles.container}>
        {children}
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: t.surface,
    borderRadius: 10,
    shadowColor: t.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  }
})
