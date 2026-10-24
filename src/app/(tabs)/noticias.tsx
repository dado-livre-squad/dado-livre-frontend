
import NewsCardList from "@/components/NewsCardList/NewsCardList";
import NewsCardListTitle from "@/components/NewsCardList/NewsCardListTitle";

export default function Noticias() {
  return (
    <>
      <NewsCardList header={<NewsCardListTitle />}/>
    </>
  )
}