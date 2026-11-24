import { RegisterUserRequestDTO } from "@/dto/usuario/register-user-request.dto";
import { RegisterUserResponseDTO } from "@/dto/usuario/register-user-response.dto";

export interface UserRepository {
  register(user: RegisterUserRequestDTO): Promise<RegisterUserResponseDTO>;
  userFirstName(email: {email: string}): Promise<{nome: string}>
}