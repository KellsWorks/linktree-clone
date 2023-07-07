import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  access_token: string | null;
  username: string | null;
  email: string | null;
  headline: string | null;
  logo: string | null;
  background_color: string | null;
};

const initialState: State = { access_token: null, username: null, email: null, headline: null, logo: null, background_color: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTokens(
      state: State,
      action: PayloadAction<{ access_token: string }>
    ) {
      state.access_token = action.payload.access_token;
    },
    setAccount(state: State, action: PayloadAction<any>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.headline = action.payload.headline;
      state.logo = action.payload.logo;
      state.background_color = action.payload.background_color
    },
    logout(state: State) {
      state.username = null;
      state.access_token = null;
    },
  },
});

export default authSlice;
