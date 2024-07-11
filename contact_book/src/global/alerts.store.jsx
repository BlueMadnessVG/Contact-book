import { create } from "zustand";

export const useAlertStore = create((set) => ({
  showAlert: false,
  alertMessage: "",
  alertSeverity: "",
  setShowAlert: (showAlert) => set({ showAlert }),
  setAlertMessage: (alertMessage) => set({ alertMessage }),
  setAlertSeverity: (alertSeverity) => set({ alertSeverity }),
}));
