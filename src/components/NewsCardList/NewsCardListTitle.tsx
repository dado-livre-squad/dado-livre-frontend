import { mainColor } from "@/constants/color";
import { StyleSheet, Text, View } from "react-native";

export default function NewsCardListTitle() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>MAIS NOTICIAS</Text>
        <View style={styles.titleCall}>
          <Text style={styles.titleLastNews}>Acompanhe as últimas atualizações</Text>
          <Text style={styles.titleNewsCount}>3 novas</Text>
        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: 'flex',
    marginTop: 20
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    color: mainColor,
    fontSize: 16
  },
  titleCall: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleLastNews: {
    fontSize: 12,
    fontFamily: 'Nunito-Medium',
    color: '#987a96',
    flexShrink: 1,
  },
  titleNewsCount: {
    backgroundColor: '#d8e3e8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
    fontFamily: 'RobotoSlab-Bold',
    color: mainColor,
    borderRadius: 12,
  },
})
