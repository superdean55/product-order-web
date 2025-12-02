import type { ApiResponse } from "./api";
import type { User } from "./user";

export type LoginInput = {
  email: string;
  password: string;
};
export type LoginResponse = ApiResponse<{ user: User; token: string }>;


export type RegisterInput = {
  username: string;
  email: string;
  password: string;
};
export type RegisterResponse = ApiResponse<{ user: User; token: string }>;


export type LogoutResponse = ApiResponse<null>;


export type ChangePasswordInput = {
  currentPassword: string;
  newPassword: string;
};
export type ChangePasswordResponse = ApiResponse<null>;


export type ChangeEmailInput = {
  email: string;
};
export type ChangeEmailResponse = ApiResponse<{email: string}>;
