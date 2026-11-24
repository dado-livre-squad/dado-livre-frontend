import LoginForm from '@/components/LoginForm/LoginForm'
import { FONT_TITLE } from '@/constants/fonts'
import type { Theme } from '@/constants/theme'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext'
import { LoginRequestDTO } from '@/dto/login/login-request.dto'
import { loginService } from '@/services/login/login-service'
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

export default function LoginScreen() {
  const styles = useThemedStyles(createStyles)
  const { theme } = useTheme()

  const { signIn } = useAuth();

  const [isLoading, setLoading] = useState(false)

  async function handleLogin(data: LoginRequestDTO) {
    setLoading(true)

    await loginService.login(data)
      .then(async (r) => {
        await signIn(r.accessToken)
        Alert.alert('Login efetuado com sucesso!')
        router.replace('/perfil')
      })
      .catch((e: any) => {
        Alert.alert(e.message)
      })
      .finally(() => {
        // aqui mostrar a modal
        setLoading(false)
      })
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: "Login",
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

          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>
            Entre para acessar seus candidatos e comparações salvas.
          </Text>

          <View style={styles.formWrapper}>
            <LoginForm
              loading={isLoading}
              onSubmit={handleLogin}
              onForgotPassword={() => {
                //depois fazer router.push('/esqueci-senha')
              }}
            />
          </View>

          <Text style={styles.footer}>
            Ainda não tem conta?{' '}
            <Text
              style={styles.footerLink}
              onPress={() => router.push('/cadastro')}
              accessibilityRole="link"
            >
              Cadastre-se
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    screen: { flex: 1, backgroundColor: t.background },
    content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 120 },

    logo: {
      width: 48,
      height: 48,
      borderRadius: 14,
      backgroundColor: t.cta,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: { fontFamily: 'RobotoSlab-Bold', fontSize: 24, color: t.ctaText },

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

    footer: {
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      color: t.muted,
      textAlign: 'center',
      marginTop: 24,
    },
    footerLink: { fontFamily: 'Nunito-Bold', color: t.text },
  })