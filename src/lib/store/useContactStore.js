import { create } from "zustand";
import { categoriesApi } from "../api/category";

const useContactStore = create((set) => ({
  contactInfo: null,
  loading: false,
  error: null,

  fetchContactInfo: async () => {
    try {
      set({ loading: true, error: null });
      const res = await categoriesApi.contactInfo(); 
      set({ contactInfo: res.data, loading: false });
    } catch (err) {
      console.error("Contact info error:", err);
      set({ error: "Failed to load contact info", loading: false });
    }
  },
}));

export default useContactStore;
