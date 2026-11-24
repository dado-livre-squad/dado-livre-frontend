import { LoginRequestDTO } from "@/dto/login/login-request.dto";
import { LoginResponseDTO } from "@/dto/login/login-response.dto";

export interface LoginRepository {
  login(dto: LoginRequestDTO): Promise<LoginResponseDTO>
}