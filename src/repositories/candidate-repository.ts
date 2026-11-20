import { CandidateDetailsResponseDTO } from "@/dto/candidato/candidate-details-response.dto";
import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { ImageSourcePropType } from "react-native";

export interface CandidateRepository {
  listCandidates(): Promise<CandidatoListResponseDTO[]>;
  candidatePhoto(candidateId: string): ImageSourcePropType
  candidateDetails(candidateId: string): Promise<CandidateDetailsResponseDTO>
}