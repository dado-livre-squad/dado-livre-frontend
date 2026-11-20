import { FONT_BODY, FONT_BODY_BOLD } from '@/constants/fonts';
import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { Accessibility, ChevronRight } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconBox } from '../IconBox/IconBox';
import { PerfilCard } from '../PerfilCard/PerfilCard';

export function AccessibilityCard({ onPress }: { onPress?: () => void }) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <PerfilCard style={styles.wrapper}>
      <Pressable
        style={styles.row}
        accessibilityRole="button"
        onPress={onPress}
      >
        <IconBox icon={Accessibility} />
        <View style={styles.text}>
          <Text style={styles.title}>Acessibilidade</Text>
          <Text style={styles.description} numberOfLines={1}>
            Daltonismo, tamanho da fonte e leitura
          </Text>
        </View>
        <ChevronRight size={18} color={theme.text} />
      </Pressable>
    </PerfilCard>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    wrapper: { marginTop: 16 },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
    },
    text: { flex: 1 },
    title: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.text },
    description: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.muted,
      marginTop: 2,
    },
  });