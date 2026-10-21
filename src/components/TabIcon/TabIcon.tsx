import { ColorValue, StyleSheet, View } from "react-native"

export type TabIconProps = {
  Icon: React.ElementType
  color: ColorValue,
  size: number,
  focused: boolean
}

export default function TabIcon({ color, size, focused, Icon }: TabIconProps) {
  return (
    <>
      {focused ? (
        <View style={[styles.iconContainer, { backgroundColor: '#dee6e8'}]}>
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
