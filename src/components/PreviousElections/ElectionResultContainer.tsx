import { StyleSheet, View } from 'react-native'

type ElectionResultContainerProps = {
  children: React.ReactNode
}

export default function ElectionResultContainer({ children }: ElectionResultContainerProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // TODO: token de constants/color
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // sombra no Android
  },
})