import { StyleSheet, View } from 'react-native'

type InfoContainerProps = {
  children: React.ReactNode
}

export default function InfoContainer({ children }: InfoContainerProps) {
  return (
    <>
      <View style={styles.container}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 'auto',
    marginHorizontal: 25,
    borderRadius: 8,
    padding: 12,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  }
})
