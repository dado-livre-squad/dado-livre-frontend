import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";

type LoadingIconProps = {
  /** Tamanho total do ícone em px */
  size?: number;
  /** Cor do arco que gira */
  color?: string;
  /** Espessura do anel */
  thickness?: number;
  style?: ViewStyle;
};

export default function LoadingIcon({
  size = 56,
  color = "#04273a",  
  thickness = 5,
  style,
}: LoadingIconProps) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    spin.start();

    return () => {
      spin.stop();
    };
  }, [rotation]);


  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const ringSize = size - thickness * 2;

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel="Carregando"
    >
      <View
        style={{
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100%', 
          position: 'relative'
        }}
      />

      <Animated.View
        style={{
          position: "absolute",
          width: ringSize,
          height: ringSize,
          borderRadius: ringSize / 2,
          borderWidth: thickness,
          borderColor: "transparent",
          borderTopColor: color,
          borderRightColor: color,
          transform: [{ rotate }],
          marginTop: 300,
          marginLeft: 165,
          opacity: 0.5
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#04273a",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
});