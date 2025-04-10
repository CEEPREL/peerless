import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import companyReducer from "./features/company/companySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
