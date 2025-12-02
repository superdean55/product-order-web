import type { ApiResponse } from "./api";

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  dateOfBirth: string | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  username: string;
  email: string;
};

export type GetUserResponse = ApiResponse<{ user: User }>;
export type UpdateUserResponse = ApiResponse<{ user: User }>;
export type DeleteUserResponse = ApiResponse<null>;
