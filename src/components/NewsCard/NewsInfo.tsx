import { StyleSheet, Text, View } from "react-native";

type NewsInfoProps = {
  theme: string;
  title: string;
  date: string
}

export default function NewsInfo({theme, title, date}: NewsInfoProps) {
  return (
    <>
      <View style={styles.newsInfoContainer}>
        <Text style={styles.newsTheme}>
          {theme}
        </Text>
        <Text style={styles.newsTitle}>
          {title}
        </Text>
        <Text style={styles.newsInfo}>
          {date}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  newsInfoContainer: {
    flex: 1,
    gap: 10,
    paddingTop: 15,
    paddingRight: 10
  },
  newsTheme: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#797b8e'
  },
  newsTitle: {
    fontFamily: 'RobotoSlab-Bold',
    flexShrink: 1,
    flexWrap: 'wrap',
    marginTop: 8
  },
  newsInfo: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'RobotoSlab-Regular',
    color: '#987a96'
  }
})