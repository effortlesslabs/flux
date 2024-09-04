import { create } from "zustand";

interface Settings {
  autoZoom: boolean;
  modal: string;
  setAutoZoom: (autoZoom: boolean) => void;
}

export const useSettingsStore = create<Settings>((set) => ({
  autoZoom: false,
  modal: "gpt-4o",
  setAutoZoom: (autoZoom) => set({ autoZoom }),
}));
