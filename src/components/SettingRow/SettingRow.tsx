import { FONT_BODY, FONT_BODY_BOLD } from '@/constants/fonts';
import { type Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { StyleSheet, Switch, Text, View } from "react-native";
import { IconBox, IconType } from '../IconBox/IconBox';

type Props = {
  icon: IconType;
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  last?: boolean;
};

export function SettingRow({
  icon,
  title,
  description,
  value,
  onValueChange,
  last,
}: Props) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[styles.settingRow, !last && styles.divider]}>
      <IconBox icon={icon} />
      <View style={styles.settingText}>
        <Text style={styles.settingTitle}>{title}</Text>
        <Text style={styles.settingDescription} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.trackOff, true: theme.trackOn }}
        thumbColor={theme.thumb}
        ios_backgroundColor={theme.trackOff}
        accessibilityLabel={title}
      />
    </View>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    divider: { borderBottomWidth: 1, borderBottomColor: t.border },
    settingRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 12,
      paddingVertical: 12,
    },
    settingText: { flex: 1 },
    settingTitle: { fontFamily: FONT_BODY_BOLD, fontSize: 14, color: t.text },
    settingDescription: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: t.muted,
      marginTop: 2,
    },
  });