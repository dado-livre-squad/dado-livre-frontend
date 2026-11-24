import { LoginRepository } from "@/repositories/login-repository";
import { LoginApi } from "./login-api";

export const loginService: LoginRepository = new LoginApi()