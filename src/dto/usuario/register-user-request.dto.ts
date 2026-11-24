import { TipoUsuario } from "@/types/tipo-usuario";

export type RegisterUserRequestDTO = {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  tipo: TipoUsuario
}