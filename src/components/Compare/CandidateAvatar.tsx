import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { Image, StyleSheet, View } from 'react-native'

type CandidateAvatarProps = {
  uri?: string
  size?: number
}

export default function CandidateAvatar({ uri, size = 44 }: CandidateAvatarProps) {
  const styles = useThemedStyles(createStyles)
  const box = { width: size, height: size, borderRadius: size * 0.27 }

  if (!uri) return <View style={[styles.placeholder, box]} />

  return <Image source={{ uri }} style={[styles.image, box]} />
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    image: { backgroundColor: t.imagePlaceholder },
    placeholder: { backgroundColor: t.imagePlaceholder },
  })