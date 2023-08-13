import { createSlice } from "@reduxjs/toolkit";

export const LoginAuthSlice = createSlice({
  name: "loginAuth",
  initialState: {
    isAuth: false,
    userName: "",
    userEmail: "",
    userUuid: "",
  },
  reducers: {
    Login: (state, action) => {
      state.isAuth = false;
      state.userName = action.payload.username;
      state.userEmail = action.payload.email;
      state.userUuid = action.payload.uuid;
      state.password = action.payload.password;
    },
  },
});

