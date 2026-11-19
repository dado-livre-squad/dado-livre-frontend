import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { StyleSheet, View } from 'react-native'

type InfoContainerProps = {
  children: React.ReactNode
}

export default function InfoContainer({ children }: InfoContainerProps) {
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
    backgroundColor: t.surface,
    height: 'auto',
    marginHorizontal: 25,
    borderRadius: 8,
    padding: 12,
    gap: 8,
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
