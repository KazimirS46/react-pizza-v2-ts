import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISortItem {
  id: number;
  sort: string;
  sortName: string;
}

export interface IThicknessPrice {
  id: number;
  thickness: string;
  thicknessName: string;
  price: number;
}

export interface IWidthPrice {
  id: number;
  widthName: number;
  width: string;
  price: number;
}

export interface IFilterState {
  sort: ISortItem;
  order: boolean;
  searchValue: string;
  category: number;
  thickness: IThicknessPrice;
  size: IWidthPrice;
}

const initialState: IFilterState = {
  sort: { id: 1, sort: 'rating', sortName: 'популярности' },
  order: false,
  searchValue: '',
  category: 0,
  thickness: { id: 0, thickness: 'thin', thicknessName: 'тонкое', price: 0 },
  size: { id: 0, widthName: 26, width: 'small', price: 0 },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<ISortItem>) => {
      state.sort = action.payload;
    },
    setOrder: (state) => {
      state.order = !state.order;
    },
    setTHickness: (state, action: PayloadAction<IThicknessPrice>) => {
      state.thickness = action.payload;
    },
    setSize: (state, action: PayloadAction<IWidthPrice>) => {
      state.size = action.payload;
    },
  },
});

export const { setCategory, setSort, setOrder, setTHickness, setSize } = filterSlice.actions;
export default filterSlice.reducer;
