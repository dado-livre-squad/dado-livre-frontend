import { ColorValue, StyleSheet, Text, View } from "react-native";

type TabLabelProps = {
  title: string;
  focused: boolean;
  color: ColorValue
}

export default function TabLabel({ title, focused, color }: TabLabelProps) {
  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText, { color }]}>{title}</Text>
        <View style={[styles.dot, { backgroundColor: color, opacity: focused ? 1 : 0}]} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 10,
    fontWeight: '500',
  },
  dot: {
    width: 4,     
    height: 4,
    borderRadius: 20,
    marginTop: 4, 
  },
});