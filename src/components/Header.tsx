import { mainColor } from "@/constants/color";
import { Link } from "expo-router";
import { User } from "lucide-react-native";
import { Image, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={styles.navContainer}>
        <View>
          <Link href={'/'}>
            <Image source={require('@/assets/images/logo/dado-livre-logo.png')} style={styles.image} />
          </Link>
        </View>
        <Link href={'/perfil'}>
          <User color={'#FFF'} size={28}/>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  navContainer: {
    backgroundColor: mainColor,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20
  }
})