
import Carroussel from "@/components/Carroussel/Carroussel";
import NewsCardList from "@/components/NewsCardList/NewsCardList";
import NewsCardListTitle from "@/components/NewsCardList/NewsCardListTitle";
import { View } from "react-native";

export default function Noticias() {
  return (
    <>
      <NewsCardList header={
        <>
          <View style={{paddingHorizontal: 12}}>
            <Carroussel />
          </View>
          <NewsCardListTitle />
        </>
      } />
    </>
  )
}

