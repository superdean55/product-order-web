import { client } from "../client";
import type {
  DeleteUserResponse,
  GetUserResponse,
  UpdateUserInput,
  UpdateUserResponse,
} from "../types/user";

export const userApi = {
  getUser: () => client.get<GetUserResponse>("/users/me"),
  updateUser: (body: UpdateUserInput) =>
    client.put<UpdateUserResponse, UpdateUserInput>("/users/me", body),
  deleteUser: () => client.delete<DeleteUserResponse>("/users/me"),
};
