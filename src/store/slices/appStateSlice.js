import { createSlice } from '@reduxjs/toolkit';
import { catalogFetchAPI } from '../catalogFetchAPI';

const initialState = {
  selected:'Все',
  offset: null,
  haveMoreItems: true,
  loadingMore: false,
  headerSearchOpen: false,
  headerSearch: '',
  catalogSearch: '',
  searchRequest:undefined,
  count: 1,
  selectedSize: undefined,
  orderForm: {
    phone:'',
    address:'',
    agreement: false
  }
};


export const appStateSlice = createSlice({
    name: 'appState',
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
        state.headerSearchOpen = false
      },
      toggleHeaderSearch(state,action) {
        state.headerSearchOpen = !state.headerSearchOpen
      },
      changeHeaderSearch(state,action) {
        state.headerSearch = action.payload
      },
      goToCatalogSearch(state,action) {
        state.catalogSearch = state.headerSearch
        state.searchRequest = state.headerSearch
        state.headerSearch = ''
      },
      decrementcount(state) {
        if(state.count > 1) {state.count -= 1}
      },
      incrementcount(state) {
        if(state.count < 10) {state.count += 1}
      },
      resetcount(state) {
        state.count = 1
      },
      selectSize(state,action) {
        state.selectedSize = action.payload
      },
      changeOrderPhone(state,action) {
        state.orderForm.phone = action.payload
      },
      changeOrderAddress(state,action) {
        state.orderForm.address = action.payload
      },
      changeOrderAgreement(state,action) {
        state.orderForm.agreement = action.payload
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
