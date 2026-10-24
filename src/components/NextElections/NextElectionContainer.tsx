import { mainColor } from "@/constants/color";
import { StyleSheet, View } from "react-native";

type NewsContainerProps = {
  children: React.ReactNode
}

export default function NextElectionContainer({ children }: NewsContainerProps) {
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
    backgroundColor: mainColor,
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    gap: 8,
  }
})
