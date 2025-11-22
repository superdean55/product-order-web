import { client } from "../client";
import type { LoginResponse, LoginInput, RegisterInput, RegisterResponse } from "../types/auth";

export const authApi = {
  login: (body: LoginInput) => client.post<LoginResponse>("/auth/login", body),
  register: (body: RegisterInput) => client.post<RegisterResponse>("/auth/register", body),
  logout: () => client.put("/auth/logout"),
};
