import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesList:[],
};


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addToFavorites: (state, action) => {
        state.favoritesList = [...state.favoritesList, action.payload]
      },
      deleteFromFavorites: (state, action) => {
        state.favoritesList = state.favoritesList.filter(i=> i.imdbID !== action.payload.imdbID)
      },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = 'idle';
    //       state.value += action.payload;
    //     });
    // },
  });

  export const favoritesActions = favoritesSlice.actions
  export default favoritesSlice.reducer;