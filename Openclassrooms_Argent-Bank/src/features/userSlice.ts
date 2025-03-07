import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "../app/types";
import { getUserData } from "./connexion";

export interface userState {
  user: User | undefined;
}

const initialState: userState = {
  user: undefined
};

export const getUser = createAsyncThunk(
  "connexion/connect",
  async (token: string | undefined) => {
    if (token == undefined) {
      return;
    }
    const response = await getUserData(token);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      if (state.user != undefined) {
        state.user.userName = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: RootState) => {
  return state.user.user;
};
