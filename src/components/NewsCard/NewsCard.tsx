import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native";
import NewsInfo from "./NewsInfo";

type NewsCardProps = {

  onPress: () => void;
  theme: string;
  title: string;
  date: string;
  imageUrl: string | ImageSourcePropType;
  
}

export default function NewsCard({theme, title, date, imageUrl, onPress,}: NewsCardProps) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <Image
          source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
          style={styles.image}
        />
        <NewsInfo
          theme={theme}
          title={title}
          date={date}
        />
      </TouchableOpacity>
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
    marginHorizontal: 18
  },
  image: {
    width: '35%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
})
