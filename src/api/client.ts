import { api } from "./axios";


export const client = {
get: async <T>(url: string) => (await api.get<T>(url)).data,
post: async <T>(url: string, body?: any) => (await api.post<T>(url, body)).data,
put: async <T>(url: string, body?: any) => (await api.put<T>(url, body)).data,
delete: async <T>(url: string) => (await api.delete<T>(url)).data,
};