import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { ImageSourcePropType } from "react-native";

export interface CandidateRepository {
  listCandidates(): Promise<CandidatoListResponseDTO[]>;
  candidatePhoto(candidateId: string): ImageSourcePropType
}