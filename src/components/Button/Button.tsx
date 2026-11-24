import { mainColor } from '@/constants/color'
import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import {
  Pressable,
  StyleSheet,
  Text,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  title: React.ReactNode
  onPress: () => void
  main?: boolean
  size?: Size
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

export default function Button({
  title,
  onPress,
  main = false,
  size = 'md',
  disabled = false,
  style,
}: ButtonProps) {
  const styles = useThemedStyles(createStyles)

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        main ? styles.mainContainer : styles.secondaryContainer,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`${size}Text`],
          main ? styles.mainText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: t.text,
    },
    mainContainer: {
      backgroundColor: t.background
    },
    secondaryContainer: {
      backgroundColor: mainColor
    },
    text: {
      fontFamily: 'Nunito-ExtraBold'
    },
    mainText: {
      color: t.text
    },
    secondaryText: {
      color: t.thumb
    },
    sm: {
      height: 32, 
      paddingHorizontal: 14, 
      borderRadius: 8
    },
    smText: {
      fontSize: 12
    },
    md: {
      height: 40,
      paddingHorizontal: 20,
      borderRadius: 10
    },
    mdText: {
      fontSize: 14
    },
    lg: {
      height: 52,
      paddingHorizontal: 28,
      borderRadius: 12
    },
    lgText: {
      fontSize: 16
    },
    pressed: {
      opacity: 0.85
    },
    disabled: {
      opacity: 0.5
    },
  })