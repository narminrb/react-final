import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    devtools((set, get) => ({
      user: null,
      token: null,

      setUser: (user, token) => {
        console.log("Setting user and token in Zustand:", user, token); 
        set({ user, token });
      },

      authData: () => ({ user: get().user, token: get().token }),

      logout: () => set({ user: null, token: null }),
    })),
    {
      name: "auth__store",
    }
  )
);
