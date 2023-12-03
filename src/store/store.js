import { configureStore } from '@reduxjs/toolkit';
import { catalogFetchAPI } from './catalogFetchAPI';
import appStateReducer from './slices/appStateSlice'
import cartReducer from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    cart: cartReducer,
    [catalogFetchAPI.reducerPath]: catalogFetchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogFetchAPI.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

