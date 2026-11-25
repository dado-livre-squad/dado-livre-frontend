import { BASE_URL } from '@/constants/base-url'
import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { CandidatoListResponseDTO } from '@/dto/candidato/candidate-list-response.dto'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import CandidateAvatar from './CandidateAvatar'

type CandidateSlotProps = {
  candidato: CandidatoListResponseDTO
  onSwap: () => void
}

export default function CandidateSlot({ candidato, onSwap }: CandidateSlotProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.card}>
      <CandidateAvatar uri={`${BASE_URL}/api/candidato/${candidato.idCandidato}/foto`} size={100} />

      <Text style={styles.name} numberOfLines={1}>
        {candidato.nomeSocial}
      </Text>
      <Text style={styles.party}>
        {candidato.partido.sigla} · {candidato.partido.numero}
      </Text>

      <Pressable
        onPress={onSwap}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={`Trocar ${candidato.nomeSocial}`}
      >
        <Text style={styles.swap}>Trocar</Text>
      </Pressable>
    </View>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    card: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      backgroundColor: t.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: t.border,
      padding: 14,
      gap: 4,
      shadowColor: t.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 5,
    },
    name: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 16,
      color: t.text,
      marginTop: 10,
    },
    party: { fontFamily: 'Nunito-Regular', fontSize: 12, color: t.muted },
    swap: {
      fontFamily: 'Nunito-Bold',
      fontSize: 12,
      color: t.text,
      marginTop: 10,
    },
  })