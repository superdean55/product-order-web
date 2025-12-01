export type ApiError = {
  success: false; 
  message: string;
  errors?: Record<string, unknown> | null;
};

export type ApiSuccess<Data> = {
  success: true; 
  message: string;
  data: Data;
};

export type ApiResponse<Data> = ApiSuccess<Data> | ApiError;