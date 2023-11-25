import { combineReducers, configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';

const rootReducer = combineReducers({
  employeeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
