import { FONT_BODY, FONT_BODY_BOLD } from '@/constants/fonts';
import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { ChevronRight } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: number;
  last?: boolean;
  onPress?: () => void;
};

export function StatRow({ label, value, last, onPress }: Props) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={[styles.statRow, !last && styles.divider]}
    >
      <Text style={styles.statLabel}>{label}</Text>
      <View style={styles.statRight}>
        <Text style={styles.statValue}>{value}</Text>
        <ChevronRight size={18} color={theme.text} />
      </View>
    </Pressable>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    divider: { borderBottomWidth: 1, borderBottomColor: t.border },
    statRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    statLabel: { fontFamily: FONT_BODY, fontSize: 14, color: t.text },
    statRight: { flexDirection: "row", alignItems: "center", gap: 12 },
    statValue: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.text },
  });