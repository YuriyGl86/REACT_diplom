import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import filmsReducer from './slices/filmsSlice'
// import favoritesReducer from './slices/favoritesSlice'
// import { fetchApiSlice } from './slices/fetchAPI';
import hitsReducer from '../reducers/hitsReducer';


export const store = configureStore({
  reducer: {
    hits: hitsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApiSlice.middleware)
});

