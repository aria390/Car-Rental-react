import { create } from "zustand";

type CarSearch = {
  search: string;
  setSearch: (v: string) => void;
};

export const useCarSearch = create<CarSearch>((set) => ({
  search: "",
  setSearch: (v) => set(() => ({ search: v })),
}));
