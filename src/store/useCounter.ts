import { create } from "zustand";

type Counter = {
  count: number;
  setcounter: () => void;
};
export const useStore = create<Counter>()((set) => ({
  count: 1,
  setcounter: () => set((state) => ({ count: state.count + 1 })),
}));
