import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { DealsState, Deal } from "./dealTypes";
import { fetchDeals } from "./dealsAPI";

const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
};

export const getDeals = createAsyncThunk<Deal[], void, { rejectValue: string }>(
  "deals/getDeals",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchDeals();
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Failed to fetch deals");
    }
  },
);

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDeals.pending, state => {
        state.loading = true;
      })
      .addCase(getDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.deals = action.payload;
      })
      .addCase(getDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error loading deals";
      });
  },
});

export default dealsSlice.reducer;
