import { mainColor } from "@/constants/color";
import { StyleSheet, Text } from "react-native";

type CardTitleProps = {
  children: React.ReactNode
}

export default function CardTitle({children}: CardTitleProps) {
  return (
    <>
      <Text style={styles.title}>
        {children}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: mainColor,
    fontFamily: 'RobotoSlab-SemiBold'
  }
})
