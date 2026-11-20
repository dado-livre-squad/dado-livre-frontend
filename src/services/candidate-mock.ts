import { CandidateDetailsResponseDTO } from "@/dto/candidato/candidate-details-response.dto";
import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { candidatesImages } from "@/mocks/cadidate-images";
import { candidatesList } from "@/mocks/candidates";
import { detailedCandidatesList } from "@/mocks/detailed-candidates";
import { CandidateRepository } from "@/repositories/candidate-repository";
import { ImageSourcePropType } from "react-native";

export class CandidateMock implements CandidateRepository {

  async listCandidates(): Promise<CandidatoListResponseDTO[]> {
    return candidatesList;
  }

  candidatePhoto(idCandidato: string): ImageSourcePropType {
    const candidate = candidatesImages.find((item) => item.idCandidato === idCandidato)

    if (!candidate) throw new Error('Candidato não encontrado')

    return candidate.foto;
  }

  async candidateDetails(candidateId: string): Promise<CandidateDetailsResponseDTO> {
    const candidate = detailedCandidatesList.find((item) => item.idCandidato === candidateId)

    if (!candidate) throw new Error('Candidato não encontrado')

    return candidate;
  }
}