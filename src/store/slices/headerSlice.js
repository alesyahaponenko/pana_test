// store/slices/headerSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  currentTheme: 'dark',
  fill: '#000000',
  isScrollLocked: true,
  isInitialAnimation: true,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload
    },
    setFill: (state, action) => {
      state.fill = action.payload
    },
    setIsScrollLocked: (state, action) => {
      state.isScrollLocked = action.payload
    },
    setIsInitialAnimation: (state, action) => {
      state.isInitialAnimation = action.payload
    },
    resetAnimationState: (state) => {
      state.isScrollLocked = true
      state.isInitialAnimation = true
    }
  }
})

export const {
  setCurrentTheme,
  setFill,
  setIsScrollLocked,
  setIsInitialAnimation,
  resetAnimationState
} = headerSlice.actions

export default headerSlice.reducer