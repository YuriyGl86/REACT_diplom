import { createSlice } from '@reduxjs/toolkit';
import { catalogFetchAPI } from '../catalogFetchAPI';

const initialState = {
  selected:'Все',
  offset: null,
  haveMoreItems: true,
  loadingMore: false,
  headerSearch: '',
  catalogSearch: '',
  searchRequest:undefined
};


export const appStateSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      selectFilter: (state, action) => {
        state.selected = action.payload
      },
      resetFilter: (state) => {
        state.selected = 'Все'
      },
      incrementOffset(state) {
        state.offset += 6
      },
      resetOffset(state) {
        state.offset = null
      },
      setLastLoadedCount(state,action) {
        state.haveMoreItems = action.payload
      },
      changeCatalogSearch(state,action) {
        state.catalogSearch = action.payload
      },
      setSearchRequest(state,action) {
        state.searchRequest = action.payload
      },
      resetSearch(state) {
        state.searchRequest = null
        state.catalogSearch = ''
        state.headerSearch  = ''

      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(
        catalogFetchAPI.endpoints.getCatalogItems.matchFulfilled,
        (state, { payload }) => {
          state.haveMoreItems = payload.length === 6
          state.loadingMore = false
        }
      )
      builder.addMatcher(
        catalogFetchAPI.endpoints.getCatalogItems.matchPending,
        (state) => {
          state.loadingMore = true
        }
      )
    },
  });

  export const appStateActions = appStateSlice.actions
  export default appStateSlice.reducer;
