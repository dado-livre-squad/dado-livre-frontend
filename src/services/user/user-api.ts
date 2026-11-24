import { api } from "@/api/client";
import { RegisterUserRequestDTO } from "@/dto/usuario/register-user-request.dto";
import { RegisterUserResponseDTO } from "@/dto/usuario/register-user-response.dto";
import { UserRepository } from "@/repositories/user-repository";

export class UserApi implements UserRepository {
  async userFirstName(email: { email: string; }): Promise<{ nome: string; }> {
    return await api<{nome: string}>('/api/usuario/nome', {
      body: email,
      method: 'POST'
    })
  }
 
  async register(user: RegisterUserRequestDTO): Promise<RegisterUserResponseDTO> {
    return api<RegisterUserResponseDTO>('/api/usuario', {
      method: 'POST',
      body: user
    })
  }

}