import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useRef } from "react";
import { Animated, Easing, View, ViewStyle } from "react-native";

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
  color,
  thickness = 5,
  style,
}: LoadingIconProps) {
  const { theme } = useTheme();
  const spinnerColor = color ?? theme.accent;

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
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
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
          borderTopColor: spinnerColor,
          borderRightColor: spinnerColor,
          transform: [{ rotate }],
          marginTop: 300,
          marginLeft: 165,
          opacity: 0.5,
        }}
      />
    </View>
  );
}