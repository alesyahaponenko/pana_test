import { create } from 'zustand'

export const useBannerStore = create((set) => ({
  currentTheme: 'light',
  headerAnimationComplete: false,
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
  setHeaderAnimationComplete: (complete) => set({ headerAnimationComplete: complete }),
}))
