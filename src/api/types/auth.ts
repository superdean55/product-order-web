import type { User } from "./user";

export type LoginInput = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: { user: User; token: string };
};

export type RegisterInput = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: { user: User; token: string };
};

export type LogoutResponse = {
  success: boolean;
  message: string;
  data: null;
};

export type ChangePasswordInput = {
  currentPassword: string,
  newPassword: string,
}

export type ChangePasswordSuccess = {
  success: true;
  message: string;
  data: null;
};

export type ChangePasswordError = {
  success: false;
  message: string;
  errors?: Record<string, unknown> | null;
};
export type ChangePasswordResponse =
  | ChangePasswordSuccess
  | ChangePasswordError;

