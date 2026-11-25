import { BASE_URL } from '@/constants/base-url'
import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { CandidatoListResponseDTO } from '@/dto/candidato/candidate-list-response.dto'
import { StyleSheet, Text, View } from 'react-native'
import CandidateAvatar from './CandidateAvatar'

export default function DifferenceCard({ candidato }: { candidato: CandidatoListResponseDTO }) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.card}>
      <CandidateAvatar uri={`${BASE_URL}/api/candidato/${candidato.idCandidato}/foto`} size={40} />
      <View style={styles.text}>
        <Text style={styles.name}>{candidato.nomeSocial}</Text>
        <Text style={styles.summary}>{candidato.partido.nome}</Text>
      </View>
    </View>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      backgroundColor: t.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.border,
      padding: 14,
      shadowColor: t.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 5,
    },
    text: { flex: 1 },
    name: { fontFamily: 'RobotoSlab-Bold', fontSize: 14, color: t.text },
    summary: {
      fontFamily: 'Nunito-Regular',
      fontSize: 12,
      lineHeight: 18,
      color: t.muted,
      marginTop: 4,
    },
  })