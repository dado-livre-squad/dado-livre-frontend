import type { Theme } from '@/constants/theme'
import { useThemedStyles } from '@/contexts/ThemeContext'
import { RegisterUserRequestDTO } from '@/dto/usuario/register-user-request.dto'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../Button/Button'
import Input from '../Input/Input'
import LoadingDots from '../LoadingDots/LoadingDots'

type RegisterFormProps = {
  onSubmit: (data: RegisterUserRequestDTO) => void;
  loading: boolean;
}

export default function RegisterForm({ onSubmit, loading }: RegisterFormProps) {
  const styles = useThemedStyles(createStyles)

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [erro, setErro] = useState('')

  function handleSubmit() {
    if (!nome.trim() || !email.trim() || !senha || !confirmar) {
      return setErro('Preencha todos os campos.')
    }

    if (senha.length < 6) {
      return setErro('A senha deve ter no mínimo 6 caracteres.')
    }

    if (senha !== confirmar) {
      return setErro('As senhas não coincidem.')
    }

    setErro('')
    
    onSubmit({ 
      nome: nome.trim(), 
      email: email.trim(),
      sobrenome: sobrenome.trim(), 
      senha,
      tipo: 'MEMBRO' 
    })
  }

  return (
    <View style={styles.form}>
      <Input
        label="Nome"
        placeholder="Seu nome"
        onChangeText={setNome}
        name='nome'
      />
      <Input
        label="Sobrenome"
        placeholder="Seu sobrenome"
        onChangeText={setSobrenome}
        name='sobrenome'
      />
      <Input
        label="E-mail"
        placeholder="voce@email.com"
        onChangeText={setEmail}
        name='email'
      />
      <Input
        label="Senha"
        placeholder="Mínimo de 6 caracteres"
        onChangeText={setSenha}
        name='senha'
        isPassword
      />
      <Input
        label="Confirmar senha"
        placeholder="Repita a senha"
        onChangeText={setConfirmar}
        name='confirmar'
        isPassword
      />

      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <Button
        title={loading ? <LoadingDots/> : 'Cadastrar'}
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
    error: {
      fontFamily: 'Nunito-Bold',
      fontSize: 13,
      color: t.danger,
      marginBottom: 12,
    },
    submit: { marginTop: 8 },
  })