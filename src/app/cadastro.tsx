import RegisterForm from '@/components/RegisterForm/RegisterForm'
import { FONT_TITLE } from '@/constants/fonts'
import type { Theme } from '@/constants/theme'
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext'
import { RegisterUserRequestDTO } from '@/dto/usuario/register-user-request.dto'
import { userService } from '@/services/user/user-service'
import { router, Stack } from 'expo-router'
import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function CadastroScreen() {
  const styles = useThemedStyles(createStyles)
  const { theme } = useTheme()

  const [isLoading, setLoading] = useState(false)

  const handleCadastro = (data: RegisterUserRequestDTO) => {
    setLoading(true)

    userService.register(data)
      .then(() => {
        Alert.alert('Usuário cadastrado')
        router.push('/login')
      })
      .catch((e: any) => {
        Alert.alert(e.message)
      })
      .finally(() => {
        //mostrar a modal aqui
        setLoading(false)
      })
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Cadastrar",
          headerShown: true,
          headerShadowVisible: true,
          headerStyle: { backgroundColor: theme.header },
          headerTintColor: theme.headerTint,
          headerTitleStyle: {
            fontFamily: FONT_TITLE,
            fontWeight: "normal",
          },
        }}
      />

      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>
            Salve candidatos, comparações e receba lembretes das eleições.
          </Text>

          <View style={styles.formWrapper}>
            <RegisterForm
              onSubmit={handleCadastro}
              loading={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: t.background },
    content: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 40,
    },

    title: {
      fontFamily: 'RobotoSlab-Bold',
      fontSize: 24,
      color: t.title,
      marginTop: 28,
    },
    subtitle: {
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      lineHeight: 21,
      color: t.muted,
      marginTop: 8,
    },

    formWrapper: { marginTop: 28 },
  })