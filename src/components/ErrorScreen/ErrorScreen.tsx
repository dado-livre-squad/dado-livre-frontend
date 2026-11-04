import { mainColor } from "@/constants/color";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type ErrorScreenProps = {
  title: string;
  subTitle: string;
}

export default function ErrorScreen({title, subTitle}: ErrorScreenProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Link href={'/'} replace style={styles.homeLink}>
            Voltar a tela inicial
          </Link>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingBottom: 150
  },
  title: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 48,
    color: mainColor
  },
  subTitle: {
    fontFamily: 'Nunito-Medium',
    color: mainColor,
    fontSize: 18
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 50
  },
  homeLink: {
    backgroundColor: mainColor,
    color: 'white',
    padding: 14,
    borderRadius: 8,
    fontFamily: 'RobotoSlab-Regular'
  }
})
