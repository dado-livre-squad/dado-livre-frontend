import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { StyleSheet, View } from 'react-native'

type ElectionResultContainerProps = {
  children: React.ReactNode
}

export default function ElectionResultContainer({ children }: ElectionResultContainerProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  container: {
    backgroundColor: t.surface,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: t.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // sombra no Android
  },
})
