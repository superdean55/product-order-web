import type { ApiResponse } from "./api";

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  username: string;
  email: string;
}

export type GetUserResponse = ApiResponse<{ user: User }>;
export type UpdateUserResponse = ApiResponse<{ user: User }>;
export type DeleteUserResponse = ApiResponse<null>;
