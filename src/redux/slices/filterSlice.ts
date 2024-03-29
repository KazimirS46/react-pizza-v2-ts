import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISortItem {
  id: number;
  sort: string;
  sortName: string;
}

export interface IFilterState {
  sort: ISortItem;
  order: boolean;
  searchValue: string;
  category: number;
}

interface IFilters {
  category: number;
  order: boolean;
  sortBy: ISortItem;
  title: string;
}

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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFilters>) => {
      state.category = action.payload.category;
      state.order = action.payload.order;
      state.searchValue = action.payload.title;
      state.sort = action.payload.sortBy;
    },
  },
});

export const { setCategory, setSort, setOrder, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
