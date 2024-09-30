import { create } from 'zustand'

export const useHeaderStore = create((set) => ({
  isOpen: false,
  currentTheme: 'light',
  fill: '#000000',
  animationPlayed: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
  setFill: (fill) => set({ fill }),
  setAnimationPlayed: (played) => set({ animationPlayed: played }),
  onAnimationComplete: () => set((state) => {
    if (!state.animationPlayed) {
      return { animationPlayed: true }
    }
    return {}
  }),
}))