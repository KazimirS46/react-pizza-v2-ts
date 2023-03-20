import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPizzaItem } from '../../types/types';

const initialState = {
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
