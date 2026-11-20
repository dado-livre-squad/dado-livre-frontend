import { type Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, View, type ViewProps } from "react-native";

export function PerfilCard({ style, ...props }: ViewProps) {
  const styles = useThemedStyles(createStyles);
  return <View style={[styles.card, style]} {...props} />;
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.border,
      overflow: "hidden",
    },
  });