import { TipoUsuario } from "@/types/tipo-usuario";

export type RegisterUserResponseDTO = {
  nome: string;
  sobrenome: string;
  email: string;
  tipo: TipoUsuario
}