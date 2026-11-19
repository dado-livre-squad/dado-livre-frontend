import type { Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, View } from "react-native";

type NewsContainerProps = {
  children: React.ReactNode
}

export default function NextElectionContainer({ children }: NewsContainerProps) {
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
    backgroundColor: t.primary,
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    gap: 8,
  }
})
