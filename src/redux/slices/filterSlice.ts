import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFilterState {
  sort: {
    name: string;
    sortProperty: string;
  };
  order: boolean;
  searchValue: string;
  category: number;
}

const initialState: IFilterState = {
  sort: { name: 'популярности', sortProperty: 'rating' },
  order: true,
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
  },
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;
