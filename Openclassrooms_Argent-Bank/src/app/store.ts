import { configureStore } from "@reduxjs/toolkit";
import connexionReducer from "../features/connexionSlice";
import userReducer from "../features/userSlice";

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;

export const store = configureStore({
  reducer: {
    connexion: connexionReducer,
    user: userReducer
  }
});
