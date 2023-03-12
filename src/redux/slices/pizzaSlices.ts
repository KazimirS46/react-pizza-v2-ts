import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizzaItem } from '../../types/types';

export interface IPizzasState {
  pizzas: [] | IPizzaItem[];
  loading: 'pending' | 'uploaded' | 'error';
  error: {
    status: boolean;
    name: string | undefined;
    code: string | undefined;
    message: string | undefined;
  };
}

const URL: string = `https://63aaeaf2fdc006ba604fd8b5.mockapi.io/items2`;

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async () => {
  const { data } = await axios.get(URL);
  return data;
});

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
  reducers: {
    loging: (state) => {
      console.log(state.pizzas);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzas = action.payload;
        state.loading = 'uploaded';
      })
      .addCase(fetchPizzas.pending, (state) => {
        state.pizzas = [];
        state.loading = 'pending';
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

export const { loging } = pizzaSlice.actions;
export default pizzaSlice.reducer;
