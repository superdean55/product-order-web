import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User } from "../api/types/user";

interface AuthState {
  user: User | null;
  token: string | null;
  setUserAndToken: (user: User | null, token: string | null) => void;
  setUser: (user: User | null) => void;
  setUserImageUrl: (imageUrl: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,

        setUserAndToken: (user: User | null, token: string | null) =>
          set({ user, token }),
        setUser: (user: User | null) => set({ user }),
        logout: () => set({ user: null, token: null }),

        setUserImageUrl: (imageUrl: string | null) =>
          set((state) => {
            if (!state.user) return state;
            return {
              user: {
                ...state.user,
                imageUrl: imageUrl,
              },
            };
          }),
      }),
      {
        name: "auth-storage",
      }
    ),
    {
      name: "Auth Store",
      enabled: import.meta.env.NODE_ENV !== "production",
    }
  )
);
