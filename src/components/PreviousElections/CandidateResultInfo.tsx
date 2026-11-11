//import { MaterialIcons } from '@expo/vector-icons'
import { mainColor } from '@/constants/color';
import { StyleSheet, Text, View } from 'react-native';

type Props = { name: string; party: string; percentage: number }

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export default function CandidateResultInfo({ name, party, percentage }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{getInitials(name)}</Text>
      </View>

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

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: {
    width: 56, height: 56, borderRadius: 14,
    backgroundColor: mainColor, alignItems: 'center', justifyContent: 'center',
  },
  initials: { color: '#fff', fontSize: 18, fontFamily: 'RobotoSlab-SemiBold' },
  info: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  name: { flexShrink: 1, fontFamily: 'RobotoSlab-SemiBold', fontSize: 16, color: mainColor },
  party: { fontSize: 13, color: '#1B6A8A', marginTop: 2 },
  percentage: { fontSize: 20, fontWeight: '800', color: mainColor },
})