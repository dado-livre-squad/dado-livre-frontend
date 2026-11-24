import type { Theme } from '@/constants/theme'
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

type InputProps = {
  name: string
  label: string
  placeholder: string
  onChangeText: (text: string, name: string) => void
  isPassword?: boolean
  style?: StyleProp<ViewStyle>
}

export default function Input({
  name,
  label,
  placeholder,
  onChangeText,
  isPassword = false,
  style,
}: InputProps) {
  const { theme } = useTheme()
  const styles = useThemedStyles(createStyles)
  const [hidden, setHidden] = useState(isPassword)

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          testID={name}
          placeholder={placeholder}
          placeholderTextColor={theme.muted}
          onChangeText={(text) => onChangeText(text, name)}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          selectionColor={theme.ctaMuted}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setHidden((prev) => !prev)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            accessibilityRole="button"
            accessibilityLabel={hidden ? 'Mostrar senha' : 'Ocultar senha'}
          >
            <Ionicons
              name={hidden ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={theme.buttonLight}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 16,
    },
    label: {
      fontFamily: 'Nunito-Bold',
      fontSize: 13,
      color: t.buttonLight,
      marginBottom: 8,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: t.background,
      borderWidth: 1,
      borderColor: t.buttonLight,
    },
    input: {
      flex: 1,
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      color: t.text,
      height: 50
    }
  })