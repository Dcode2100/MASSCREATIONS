import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "not logged in",
  userEmail: "",
  userUuid: "",
};

const loginAuthSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { uuid, username, email } = action.payload;
      state.isAuth = true;
      state.userUuid = uuid;
      state.userName = email || initialState.userName; // Use initial state's userName if username is not provided
      state.userEmail = email;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userUuid = "";
      state.userName = "";
      state.userEmail = "";
    },
  },
});

// Export individual actions for dispatching
export const { login, logout } = loginAuthSlice.actions;

// Export the reducer function
export default loginAuthSlice.reducer;
