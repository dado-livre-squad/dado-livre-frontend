import { ImageSourcePropType } from "react-native";

export type NewsCardModel = {
  id: string;
  theme: string;
  title: string;
  date: string;
  imageUrl: ImageSourcePropType;
}