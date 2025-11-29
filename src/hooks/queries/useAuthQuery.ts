import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../api/endpoints/auth";
import type {
  ChangePasswordInput,
  ChangePasswordResponse,
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from "../../api/types/auth";
import { useAuthStore } from "../../store/auth.store";

export const useLoginMutation = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (body: LoginInput) => authApi.login(body),
    onSuccess: (data: LoginResponse) => {
      setUser(data.data.user, data.data.token);
    },
  });
};

export const useRegisterMutation = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (body: RegisterInput) => authApi.register(body),
    onSuccess: (data: RegisterResponse) => {
      setUser(data.data.user, data.data.token);
    },
  });
};

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      logout();
    },
  });
};

export const useChangePasswordMutation = () => {
  return useMutation<ChangePasswordResponse, Error, ChangePasswordInput>({
    mutationFn: (body: ChangePasswordInput) => authApi.changePassword(body),
    onSuccess: () => {
      
    },
  });
}
