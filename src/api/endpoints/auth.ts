import { client } from "../client";
import type { LoginResponse, LoginInput, RegisterInput, RegisterResponse, LogoutResponse, ChangePasswordInput, ChangePasswordResponse } from "../types/auth";

export const authApi = {
  login: (body: LoginInput) => client.post<LoginResponse, LoginInput>("/auth/login", body),
  register: (body: RegisterInput) => client.post<RegisterResponse, RegisterInput>("/auth/register", body),
  logout: () => client.post<LogoutResponse, undefined>("/auth/logout"),
  changePassword: (body:ChangePasswordInput
  ) => client.put<ChangePasswordResponse, ChangePasswordInput>("/auth/change-password", body),
};
