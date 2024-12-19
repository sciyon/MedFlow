import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';  // Create a user slice to manage the user ID

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,  // Add user reducer here
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
