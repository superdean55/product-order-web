import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../store/auth.store";
import { userImageApi } from "../../api/endpoints/userImage";
import type { DeleteResponse, UploadInput, UploadResponse } from "../../api/types/userImage";

export const useUploadUserImageMutation = () => {
  const setUserImageUrl = useAuthStore((state) => state.setUserImageUrl);

  return useMutation({
    mutationFn: (file: UploadInput) => userImageApi.upload(file),
    onSuccess: (data: UploadResponse) => {
      setUserImageUrl(data.data.imageUrl);
    },
  });
};
export const useDeleteUserImageMutation = () => {
  const setUserImageUrl = useAuthStore((state) => state.setUserImageUrl);

  return useMutation({
    mutationFn: () => userImageApi.delete(),
    onSuccess: (data: DeleteResponse) => {
      setUserImageUrl(data.data);
    },
  });
};



