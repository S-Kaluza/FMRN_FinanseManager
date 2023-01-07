import {
  legacy_createStore as createStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export const configureStore = () => {
  return createStore(rootReducer);
};
