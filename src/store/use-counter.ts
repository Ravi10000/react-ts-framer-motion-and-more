import { create } from "zustand";
// import {
//   devtools,
// , persist
// } from "zustand/middleware";

type counterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCounter = create<counterState>()(
  //   devtools(
  // persist(
  (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  })
  //   { name: "zustand_counter" }
  // ),
  //     { name: "zustand_counter" }
  //   )
);
