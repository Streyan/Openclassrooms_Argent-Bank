import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Connexion, Login } from "../app/types";
import { getLoginData } from "./connexion";

export interface userState {
  token: Connexion["token"] | undefined;
}

const initialState: userState = {
  token: undefined
};

export const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    connect: (state, action: PayloadAction<Login>) => {
      console.log("avant", state.token);
      getLoginData(action.payload).then(() => {
        state.token = "toto";
        console.log("après", state.token);
      });
    },
    disconnect: (state) => {
      state.token = undefined;
    }
  }
});

export const { connect, disconnect } = connexionSlice.actions;

export default connexionSlice.reducer;

export const selectToken = (state: RootState) => state.connexion.token;
