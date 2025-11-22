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
