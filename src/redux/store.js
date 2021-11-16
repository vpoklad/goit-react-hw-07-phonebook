import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './reducer';
// import { setFilter } from './actions';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import { phoneBookApi } from '../services/phoneBookAPI';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
setupListeners(store.dispatch);
