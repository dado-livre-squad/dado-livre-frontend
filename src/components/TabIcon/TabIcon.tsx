import { useTheme } from "@/contexts/ThemeContext"
import { ColorValue, StyleSheet, View } from "react-native"

export type TabIconProps = {
  Icon: React.ElementType
  color: ColorValue,
  size: number,
  focused: boolean
}

export default function TabIcon({ color, size, focused, Icon }: TabIconProps) {
  const { theme } = useTheme()

  return (
    <>
      {focused ? (
        <View style={[styles.iconContainer, { backgroundColor: theme.tabFocusedBg }]}>
          <Icon color={color} size={size} />
        </View>
      ) : (
        <View style={[styles.iconContainer]}>
          <Icon color={color} size={size} />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})
