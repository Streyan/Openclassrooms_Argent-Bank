import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface userState {
  token: string | undefined;
  user:
    | {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        userName: string;
      }
    | undefined;
}

const initialState: userState = {
  token: undefined,
  user: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connect: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      console.log(state.token);
    },
    disconnect: (state) => {
      console.log("toto");
      state.token = undefined;
    }
  }
});

export const { connect, disconnect } = userSlice.actions;

export default userSlice.reducer;

export const selectToken = (state: RootState) => state.connexion.token;
