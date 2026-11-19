import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text } from "react-native";

type CardTitleProps = {
  children: React.ReactNode
}

export default function CardTitle({children}: CardTitleProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <>
      <Text style={styles.title}>
        {children}
      </Text>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  title: {
    fontSize: 16,
    color: t.title,
    fontFamily: 'RobotoSlab-SemiBold'
  }
})
