import { FONT_BODY, FONT_TITLE } from '@/constants/fonts';
import { type Theme } from "@/constants/theme";
import { useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Text } from "react-native";

export function PerfilSectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const styles = useThemedStyles(createStyles);

  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    </>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    sectionTitle: {
      fontFamily: FONT_TITLE,
      fontSize: 14,
      color: t.text,
      marginTop: 24,
      paddingHorizontal: 4,
    },
    sectionSubtitle: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.muted,
      marginTop: 4,
      marginBottom: 12,
      paddingHorizontal: 4,
    },
  });