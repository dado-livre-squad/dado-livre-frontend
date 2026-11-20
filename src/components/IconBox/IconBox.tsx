import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { type ComponentType } from "react";
import { StyleSheet, View } from "react-native";

export type IconType = ComponentType<{ size?: number; color?: string }>;

export function IconBox({ icon: Icon }: { icon: IconType }) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.iconBox}>
      <Icon size={20} color={theme.text} />
    </View>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    iconBox: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: t.iconBox,
      alignItems: "center",
      justifyContent: "center",
    },
  });