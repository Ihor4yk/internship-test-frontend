import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Deal {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
}

interface DealsState {
  items: Deal[];
  loading: boolean;
  error: string | null;
}

const initialState: DealsState = {
  items: [],
  loading: false,
  error: null,
};

export const getDeals = createAsyncThunk('deals/getDeals', async () => {
  const response = await axios.get<Deal[]>('https://internship-test-backend-cou0.onrender.com/api/deals');
  return response.data;
});

const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch deals';
      });
  },
});

export default dealsSlice.reducer;