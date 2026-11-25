import { useAuth } from "@/contexts/AuthContext"
import { Alert, View } from "react-native"
import Button from "../Button/Button"

export default function LogOutButton() {
  const {signOut} = useAuth()

  return (
    <>
      <View style={{ gap: 12, marginBottom: 20, marginTop: 30 }}>
        <Button
          title='Sair'
          onPress={async () => {
            await signOut()
            Alert.alert('Você saiu da sua conta')
          }}
          style={{ flex: 1, width: '30%' }}
        />
      </View>
    </>
  )
}
