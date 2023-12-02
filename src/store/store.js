import { configureStore } from '@reduxjs/toolkit';
import { catalogFetchAPI } from './catalogFetchAPI';
import appStateReducer from './slices/appStateSlice'


export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    [catalogFetchAPI.reducerPath]: catalogFetchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogFetchAPI.middleware)
});

