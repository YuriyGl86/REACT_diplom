import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filmsList:[],
  loading: false
};


export const filmsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      setFilmsList: (state, action) => {
        state.filmsList = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
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

  export const filmsActions = filmsSlice.actions
  export default filmsSlice.reducer;