import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ApplicationState, ApplicationRequest } from "./applicationTypes";
import { createApplicationAPI } from "./applicationAPI";

const initialState: ApplicationState = {
  loading: false,
  error: null,
  success: false,
};

export const createApplication = createAsyncThunk<void, ApplicationRequest, { rejectValue: string }>(
  "applications/create",
  async (data, { rejectWithValue }) => {
    try {
      await createApplicationAPI(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Failed to submit application");
    }
  },
);

const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    resetState(state) {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createApplication.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createApplication.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Error";
      });
  },
});

export const { resetState } = applicationSlice.actions;
export default applicationSlice.reducer;
