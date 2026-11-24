import { UserRepository } from "@/repositories/user-repository";
import { UserApi } from "./user-api";

export const userService: UserRepository = new UserApi()