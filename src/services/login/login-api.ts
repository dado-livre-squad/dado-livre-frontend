import { api } from "@/api/client";
import { LoginRequestDTO } from "@/dto/login/login-request.dto";
import { LoginResponseDTO } from "@/dto/login/login-response.dto";
import { LoginRepository } from "@/repositories/login-repository";

export class LoginApi implements LoginRepository {
 
  async login(dto: LoginRequestDTO): Promise<LoginResponseDTO> {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return await api<LoginResponseDTO>('/api/auth/login', {
      method: 'POST',
      body: dto
    })
  }
  
}