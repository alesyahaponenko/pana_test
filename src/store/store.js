import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './slices/headerSlice'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// // Для TypeScript
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch