import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface userState {
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
