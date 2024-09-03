import { create } from 'zustand';

export const userBearStore = create<{
    bears: number;
}>(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
}));
