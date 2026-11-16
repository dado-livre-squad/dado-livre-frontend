import { ImageSourcePropType } from "react-native";

type CandidatoFotoItem = {
  idCandidato: string;
  foto: ImageSourcePropType;
}

export const candidatesImages: CandidatoFotoItem[] = [
  {
    idCandidato: '1',
    foto: require('../../assets/images/lula.jpg')
  },
  {
    idCandidato: '2',
    foto: require('../../assets/images/flavio.jpg')
  },
  {
    idCandidato: '3',
    foto: require('../../assets/images/renan.jpg')
  },
  {
    idCandidato: '4',
    foto: require('../../assets/images/cury.jpg')
  }
];