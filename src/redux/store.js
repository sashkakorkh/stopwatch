import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { buttonTimerSlice } from "./slices/buttonTimerSlice";
import {timerSlice} from './slices/timerSlice'

const middleware = [...getDefaultMiddleware(), thunk];

const rootReducer = combineReducers({
  buttonName: buttonTimerSlice.reducer,
  timer: timerSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
