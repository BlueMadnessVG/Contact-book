import { create } from "zustand";

export const useLoginStore = create((set) => ({
  userToken: null,
  showLogin: false,
  setShowLogin: (showLogin) => set({ showLogin }),
  setUserToken: (userToken) => set({ userToken }),
}));
