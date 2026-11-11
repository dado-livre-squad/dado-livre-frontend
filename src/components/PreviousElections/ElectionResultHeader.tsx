import { mainColor } from '@/constants/color';
import { StyleSheet, Text, View } from 'react-native';

type Props = { title: string; subtitle: string; round: 1 | 2 }

export default function ElectionResultHeader({ title, subtitle, round }: Props) {
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

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  texts: { flex: 1, paddingRight: 8 },
  title: { fontFamily: 'RobotoSlab-SemiBold', fontSize: 14, color: mainColor },
  subtitle: { fontSize: 12, color: '#6B7C8C', marginTop: 2 },
  badge: { backgroundColor: '#E6EEF3', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  badgeText: { fontSize: 11, fontWeight: '700', color: '#3F6277' },
})