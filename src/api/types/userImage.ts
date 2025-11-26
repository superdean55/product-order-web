
export type UploadInput = File;

export type UploadResponse = {
  success: boolean;
  message: string;
  data: { imageId: string; imageUrl: string };
};


export type DeleteResponse = {
  success: boolean;
  message: string;
  data: null;
};