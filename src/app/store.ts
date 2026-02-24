import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dealsReducer from "../features/deals/dealsSlice";
import applicationReducer from "../features/applications/applicationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    deals: dealsReducer,
    applications: applicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
