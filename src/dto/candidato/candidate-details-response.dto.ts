import { ImageSourcePropType } from "react-native";
import { RedeSocialResponseDTO } from "../redesocial/rede-social-response.dto";

export type CandidateDetailsResponseDTO = {
  idCandidato: string;
  nomeSocial: string;
  sobre: string;
  idade: number;
  estado: string;
  partido: string;
  numeroPartido: number;
  nomeCargo: string;
  tipoCargo: string;
  redesSociais: RedeSocialResponseDTO[]
  image?: ImageSourcePropType
}