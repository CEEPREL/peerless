// Redux user slice (userSlice.ts)
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  branch: string;
  userid: string;
  access: string[];
  token: string;
  role: string;
}

const initialState: User = {
  name: "",
  branch: "",
  userid: "",
  access: [],
  token: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.branch = action.payload.branch;
      state.userid = action.payload.userid;
      state.access = action.payload.access;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
