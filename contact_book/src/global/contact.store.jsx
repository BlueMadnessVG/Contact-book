import { create } from "zustand";

export const useContactStore = create((set) => ({
  id: null,
  info: { name: "", lastName: "", email: "" },
  address: null,
  phones: null,
  setId: (id) => set({ id }),
  setPhones: (phones) => set({ phones }),
  setAddress: (address) => set({ address }),
  setInfo: (info) => set({ info }),
  handlePhoneAtIndex: (index, newPhone) => {
    set((state) => {
      const updatedPhones = [...state.phones]; // Create a copy of the phones array
      updatedPhones[index] = newPhone; // Update the phone at the specified index
      return { phones: updatedPhones }; // Update the phones array in the state
    });
  },
  handleAddressAtIndex: (index, newAddress) => {
    set((state) => {
      const updateAddress = [...state.address];
      updateAddress[index] = newAddress;
      return { address: updateAddress };
    });
  },
}));
