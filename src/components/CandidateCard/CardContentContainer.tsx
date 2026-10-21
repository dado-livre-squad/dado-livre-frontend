import { StyleSheet, View } from "react-native";

type CardContentContainerProps = {
  children: React.ReactNode
}

export default function CardContentContainer({ children }: CardContentContainerProps) {
  return (
    <>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center'
  }
})
