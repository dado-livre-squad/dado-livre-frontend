import type { Theme } from '@/constants/theme';
import { useThemedStyles } from '@/contexts/ThemeContext';
import { StyleSheet, Text, View } from 'react-native';

type Props = { title: string; subtitle: string; round: 1 | 2 }

export default function ElectionResultHeader({ title, subtitle, round }: Props) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.row}>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{round}º TURNO</Text>
      </View>
    </View>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  texts: { flex: 1, paddingRight: 8 },
  title: { fontFamily: 'RobotoSlab-SemiBold', fontSize: 14, color: t.title },
  subtitle: { fontSize: 12, color: t.muted, marginTop: 2 },
  badge: { backgroundColor: t.chip, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  badgeText: { fontSize: 11, fontWeight: '700', color: t.chipText },
})