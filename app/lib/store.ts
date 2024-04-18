import { create } from "zustand";

interface DBStore {
  userId: number | null;
  username: string | null;
  setUserId: (userId: number) => Promise<void>;
  setUsername: (username: string) => Promise<void>;
}

export const useDBStore = create<DBStore>((set, get) => ({
  userId: null,
  username: "",
  setUserId: async (userId: number) => {
    set((state) => ({ userId: userId }));
  },
  setUsername: async (username: string) => {
    set((state) => ({ username: username }));
  },
}));
