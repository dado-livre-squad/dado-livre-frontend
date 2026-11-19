import type { Theme } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type Props = { name: string; lastName: string; party: string; percentage: number }

function getInitials(name: string, lastName: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = lastName.trim().charAt(0)
  return (first + last).toUpperCase()
}

export default function CandidateResultInfo({ name, lastName, party, percentage }: Props) {
  const { theme } = useTheme()
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{getInitials(name, lastName)}</Text>
      </View>
          <MaterialIcons name="verified" size={18} color={theme.accent} />
      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          
        </View>
        <Text style={styles.party}>{party} · Eleito</Text>
      </View>

      <Text style={styles.percentage}>
        {percentage.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
      </Text>
    </View>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: {
    width: 56, height: 56, borderRadius: 14,
    backgroundColor: t.primary, alignItems: 'center', justifyContent: 'center',
  },
  initials: { color: t.onPrimary, fontSize: 18, fontFamily: 'RobotoSlab-SemiBold' },
  info: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  name: { flexShrink: 1, fontFamily: 'RobotoSlab-SemiBold', fontSize: 16, color: t.title },
  party: { fontSize: 13, color: t.accent, marginTop: 2 },
  percentage: { fontSize: 20, fontWeight: '800', color: t.title },
})