import { CargoListResponseDTO } from "../cargo/cargo-list-response.dto";
import { PartidoListResponseDTO } from "../partido/partido-list-response.dto";

export type CandidatoListResponseDTO = {
  idCandidato: string;
  nomeSocial: string;
  cargo: CargoListResponseDTO;
  partido: PartidoListResponseDTO;
}