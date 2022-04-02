import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './slices/general'
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
    theme : themeSlice
  }
});
export type RootState = ReturnType<typeof store.getState>