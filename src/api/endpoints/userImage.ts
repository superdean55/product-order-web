import { client } from "../client";
import type { DeleteResponse, UploadResponse, UploadInput } from "../types/userImage";

export const userImageApi = {
  upload: (file: UploadInput) => {
    const formData = new FormData();
    formData.append("image", file); 
    return client.put<UploadResponse, FormData>("/users/me/image", formData);
  },
  delete: () => client.delete<DeleteResponse>("/users/me/image")
};
