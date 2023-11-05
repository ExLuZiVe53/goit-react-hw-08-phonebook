import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlise = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    filter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filter } = filtersSlise.actions;
export const filtersReducer = filtersSlise.reducer;
