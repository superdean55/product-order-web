import { client } from "../client";
import type { LoginResponse, LoginInput, RegisterInput, RegisterResponse, LogoutResponse } from "../types/auth";

export const authApi = {
  login: (body: LoginInput) => client.post<LoginResponse, LoginInput>("/auth/login", body),
  register: (body: RegisterInput) => client.post<RegisterResponse, RegisterInput>("/auth/register", body),
  logout: () => client.put<LogoutResponse, undefined>("/auth/logout"),
};
