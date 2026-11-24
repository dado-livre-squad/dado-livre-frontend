import { type Theme } from '@/constants/theme';
import { useTheme, useThemedStyles } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button';

export default function AuthButtons() {
  const { theme } = useTheme()

  const styles = useThemedStyles(createStyles);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Entre para salvar suas configurações</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Entrar" onPress={() => router.push('/login')} style={{ flex: 1 }} size="lg" />
          <Button title="Cadastrar" main onPress={() => router.push('/cadastro')} style={{ flex: 1 }} size="lg" />
        </View>
      </View>
    </>
  )
}

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: 20,
      marginBottom: 20,
      alignItems: 'center'
    },
    buttonsContainer: {
      flexDirection: 'row', 
      gap: 12
    },
    label: {
      color: t.text
    }
  })
