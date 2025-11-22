import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import type { User } from "../api/types/user";

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        
        setUser: (user: User, token: string) => set({ user, token }),
        logout: () => set({ user: null, token: null }),
      }),
      {
        name: 'auth-storage',
      }
    ),
    {
      name: 'Auth Store', 
      enabled: import.meta.env.NODE_ENV !== 'production', 
    }
  )
);

