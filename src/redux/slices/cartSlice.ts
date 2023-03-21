import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPizzaItem } from '../../types/types';

export interface IActiveType {
  id: number;
  thickness: string;
  value: string;
  price: number;
}

export interface IActiveSize {
  id: number;
  value: number;
  width: string;
  price: number;
}

export interface ICartItem extends IPizzaItem {
  count?: number;
  activeSize: IActiveSize;
  activeType: IActiveType;
  changeID: number;
  finalPrice: number;
}

interface IState {
  totalPrice: number;
  products: ICartItem[];
}

const initialState: IState = {
  totalPrice: 0,
  products: [],
};

const calculationAmount = (state: ICartItem[]) => {
  return state.reduce((sum, product) => {
    return product.finalPrice * (product.count ? product.count : 1) + sum;
  }, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ICartItem>) => {
      const findProduct = state.products.find((obj) => obj.changeID === action.payload.changeID);
      !findProduct
        ? state.products.push({ ...action.payload, count: 1 })
        : findProduct.count && findProduct.count++;
      state.totalPrice = calculationAmount(state.products);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
