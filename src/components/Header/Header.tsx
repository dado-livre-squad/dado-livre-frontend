import { mainColor } from "@/constants/color";
import { Link, usePathname } from "expo-router";
import { User } from "lucide-react-native";
import { Image, StyleSheet, View } from "react-native";

export default function Header() {
  const pathName = usePathname()

  if (pathName === '/candidato') return null

  return (
    <>
      <View style={styles.navContainer}>
        <View>
          <Link href={'/'}>
            <Image source={require('@/assets/images/logo/logo-vetorizada.png')} style={styles.image} />
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
    width: 55,
    height: 50
  },
  navContainer: {
    backgroundColor: mainColor,
    height: 110,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20
  },
  text: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold'
  }
})