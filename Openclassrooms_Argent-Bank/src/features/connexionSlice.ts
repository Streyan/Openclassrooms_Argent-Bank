import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Connexion, Login } from "../app/types";
import { getLoginData } from "./connexion";

export interface userState {
  token: Connexion["token"] | undefined;
}

const initialState: userState = {
  token: undefined
};

export const connect = createAsyncThunk(
  "connexion/connect",
  async (login: Login) => {
    const response = await getLoginData(login);
    return response;
  }
);

export const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    disconnect: (state) => {
      state.token = undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(connect.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  }
});

export const { disconnect } = connexionSlice.actions;

export default connexionSlice.reducer;

export const selectToken = (state: RootState) => state.connexion.token;
