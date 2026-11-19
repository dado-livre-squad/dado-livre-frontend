import { api } from "@/api/client";
import { CandidatoListResponseDTO } from "@/dto/candidato/candidate-list-response.dto";
import { candidatesImages } from "@/mocks/cadidate-images";
import { CandidateRepository } from "@/repositories/candidate-repository";
import { ImageSourcePropType } from "react-native";

export class CandidateApi implements CandidateRepository {
  candidatePhoto(candidateId: string): ImageSourcePropType {
    const candidate = candidatesImages.find((item) => item.idCandidato === candidateId)

    if (!candidate) throw new Error('Candidato não encontrado')

    return candidate.foto;
  }

  async listCandidates(): Promise<CandidatoListResponseDTO[]> {
    return await api<CandidatoListResponseDTO[]>('/api/candidato')
  }


}