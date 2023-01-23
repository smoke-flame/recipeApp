import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {recipesAPI} from 'service/RecipesService';
import {setupListeners} from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  userReducer,
  [recipesAPI.reducerPath]: recipesAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: false,
    }).concat(recipesAPI.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
