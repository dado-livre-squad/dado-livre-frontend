import NextElections from "@/components/NextElections/NextElections";
import { StyleSheet, View } from "react-native";

export default function Eleicoes() {
  return (
    <>
      <View style={styles.container}>
        <NextElections/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12
  }
})