import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterState, ISortItem } from '../../types/types';

const initialState: IFilterState = {
  sort: { id: 1, sort: 'rating', sortName: 'популярности' },
  order: false,
  searchValue: '',
  category: 0,
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
  },
});

export const { setCategory, setSort, setOrder } = filterSlice.actions;
export default filterSlice.reducer;