import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "../app/types";

export interface userState {
  user: User | undefined;
}

const initialState: userState = {
  user: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      if (state.user != undefined) {
        state.user.userName = action.payload;
      }
    }
  }
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;

export const selectToken = (state: RootState) => state.user.user;
