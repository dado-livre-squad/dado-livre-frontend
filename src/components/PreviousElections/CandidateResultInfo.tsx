import type { Theme } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  socialName: string;
  party: string;
  percentage: number;
};

function getInitials(socialName: string): string {
  const parts = socialName.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const second = parts.length > 1 ? parts[1]?.[0] : (parts[0]?.[1] ?? '');
  return (first + second).toUpperCase();
}

export default function CandidateResultInfo({ socialName, party, percentage }: Props) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{getInitials(socialName)}</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.socialNameRow}>
          <Text style={styles.socialName} numberOfLines={1}>
            {socialName}
          </Text>
          <MaterialIcons name="verified" size={18} color={theme.accent} />
        </View>
        <Text style={styles.party}>{party} · Eleito</Text>
      </View>

      <Text style={styles.percentage}>
        {percentage.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        %
      </Text>
    </View>
  );
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 14,
      backgroundColor: t.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    initials: { color: t.onPrimary, fontSize: 18, fontFamily: 'RobotoSlab-SemiBold' },
    info: { flex: 1 },
    socialNameRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    socialName: {
      flexShrink: 1,
      fontFamily: 'RobotoSlab-SemiBold',
      fontSize: 16,
      color: t.title,
    },
    party: { fontSize: 13, color: t.accent, marginTop: 2 },
    percentage: { fontSize: 20, fontWeight: '800', color: t.title },
  });