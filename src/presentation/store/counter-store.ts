import { create } from "zustand";

export interface CounterState {
    count: number;
    increment: (value: number) => void;
    decrement: (value: number) => void;
    reset: () => void;
};

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 0,
    increment: (value) => { set({count: get().count + value}) },
    decrement: (value) => { set({count: get().count - value}) },
    reset: () => { set({count: 0}) },
}));

