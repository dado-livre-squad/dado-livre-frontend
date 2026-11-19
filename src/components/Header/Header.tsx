import type { Theme } from "@/constants/theme";
import { useTheme, useThemedStyles } from "@/contexts/ThemeContext";
import { Link, usePathname, useRouter } from "expo-router";
import { User } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
  const router = useRouter()
  const { theme } = useTheme()
  const styles = useThemedStyles(createStyles)
  const pathname = usePathname()


  if (pathname === '/perfil') return <></>

  return (
    <>
      <View style={styles.navContainer}>
        <View>
          <Link href={'/'}>
            <Image source={require('@/assets/images/logo/logo-vetorizada.png')} style={styles.image} />
          </Link>
        </View>
        <Text onPress={() => router.push('/perfil')}>
          <User color={theme.headerTint} size={28}/>
        </Text>
      </View>
    </>
  )
}

const createStyles = (t: Theme) => StyleSheet.create({
  image: {
    width: 55,
    height: 50
  },
  navContainer: {
    backgroundColor: t.header,
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
    color: t.headerTint,
    fontWeight: 'bold'
  }
})
