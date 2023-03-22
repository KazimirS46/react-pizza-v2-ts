import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPizzaItem } from '../../types/types';

interface IPizzasState {
  pizzas: [] | IPizzaItem[];
  loading: 'pending' | 'uploaded' | 'error';
  error: {
    status: boolean;
    name: string | undefined;
    code: string | undefined;
    message: string | undefined;
  };
}

interface IParams {
  orderStr: string;
  limit: number;
  categoryStr: string;
  sortStr: string;
  search: string;
}

const URL: string = `https://63aaeaf2fdc006ba604fd8b5.mockapi.io/items2`;

export const fetchPizzas = createAsyncThunk<IPizzaItem[], IParams>(
  'pizzas/fetchPizzas',
  async (params) => {
    const { limit, categoryStr, sortStr, orderStr, search } = params;
    const { data } = await axios.get(
      `${URL}?${sortStr}${categoryStr}&limit=${limit}${orderStr}${search}`
    );
    return data;
  }
);

const initialState: IPizzasState = {
  pizzas: [],
  loading: 'pending',
  error: {
    status: false,
    name: '',
    code: '',
    message: '',
  },
};

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.pizzas = [];
        state.loading = 'pending';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.loading = 'uploaded';
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.loading = 'error';
        state.error.status = true;
        state.error.code = action.error.code;
        state.error.message = action.error.message;
        state.error.name = action.error.name;
        state.pizzas = [];
      });
  },
});
export default pizzaSlice.reducer;
