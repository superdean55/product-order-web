import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";
import { userApi } from "../../api/endpoints/user";
import type {
  GetUserResponse,
  UpdateUserInput,
  UpdateUserResponse,
} from "../../api/types/user";

export const useGetUserMutation = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: () => userApi.getUser(),
    onSuccess: (data: GetUserResponse) => {
      if (data.success) setUser(data.data.user);
    },
  });
};

export const useUpdateUserMutation = () => {
  const setUser = useAuthStore((state) => state.setUser);
  return useMutation({
    mutationFn: (body: UpdateUserInput) => userApi.updateUser(body),
    onSuccess: (data: UpdateUserResponse) => {
      if (data.success) setUser(data.data.user);
    },
  });
};

export const useDeleteUserMutation = () => {
  const setUserAndToken = useAuthStore((state) => state.setUserAndToken);

  return useMutation({
    mutationFn: () => userApi.deleteUser(),
    onSuccess: () => {
      setUserAndToken(null, null);
    },
  });
};
