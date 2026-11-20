import { FONT_BODY, FONT_BODY_BOLD } from '@/constants/fonts';
import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { ArrowUpDown } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function CompareButton({ onPress }: { onPress: () => void }) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Pressable style={styles.cta} accessibilityRole="button" onPress={onPress}>
      <View style={styles.ctaText}>
        <Text style={styles.ctaTitle}>Comparar candidatos</Text>
        <Text style={styles.ctaDescription}>
          Veja propostas e histórico lado a lado
        </Text>
      </View>
      <ArrowUpDown size={20} color={theme.ctaText} />
    </Pressable>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    cta: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: t.cta,
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 18,
      marginTop: 16,
    },
    ctaText: { flex: 1, paddingRight: 12 },
    ctaTitle: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.ctaText },
    ctaDescription: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.ctaMuted,
      marginTop: 4,
    },
  });