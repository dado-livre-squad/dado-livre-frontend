import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { LoginRequestDTO } from '@/dto/login/login-request.dto'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LoadingDots from '../LoadingDots/LoadingDots'

type LoginFormProps = {
  onSubmit: (data: LoginRequestDTO) => Promise<void> | void;
  onForgotPassword?: () => void;
  loading: boolean;
}

export default function LoginForm({
  onSubmit,
  onForgotPassword,
  loading
}: LoginFormProps) {
  const styles = useThemedStyles(createStyles)

  const [erro, setErro] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleSubmit() {
    if (!email.trim() || !senha) {
      return setErro('Preencha e-mail e senha.')
    }

    setErro('')

    onSubmit({
      email: email.trim(),
      senha: senha
    })
  }

  return (
    <View style={styles.form}>
      <Input
        name="email"
        label="E-mail"
        placeholder="voce@email.com"
        onChangeText={setEmail}
      />
      <Input
        name="senha"
        label="Senha"
        placeholder="Mínimo de 6 caracteres"
        onChangeText={setSenha}
        isPassword
      />

      <Pressable
        onPress={onForgotPassword}
        hitSlop={8}
        accessibilityRole="link"
        style={styles.forgot}
      >
        <Text style={styles.forgotText}>Esqueci minha senha</Text>
      </Pressable>

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <Button
        title={loading ? <LoadingDots /> : 'Entrar'}
        size="lg"
        onPress={handleSubmit}
        style={styles.submit}
        disabled={loading}
      />
    </View>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    form: { width: '100%' },
    forgot: { alignSelf: 'flex-end', marginBottom: 16 },
    forgotText: { fontFamily: 'Nunito-Bold', fontSize: 12, color: t.text },
    error: {
      fontFamily: 'Nunito-Bold',
      fontSize: 13,
      color: t.danger,
      marginBottom: 12,
    },
    submit: { marginTop: 4 },
  })