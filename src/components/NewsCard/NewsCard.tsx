import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import NewsInfo from "./NewsInfo";

type NewsCardProps = {
  theme: string;
  title: string;
  date: string;
  imageUrl: ImageSourcePropType;
  
}

export default function NewsCard({theme, title, date, imageUrl}: NewsCardProps) {
  return (
    <>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.container}>
          <Image source={imageUrl} style={styles.image} />
          <NewsInfo
          theme={theme}
          title={title}
          date={date}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 160,
    backgroundColor: 'white',
    borderRadius: 15,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '35%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
})
