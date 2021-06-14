import { combineReducers } from 'redux';
import getCurrencyReducer from './currency.reducer';

const rootReducer = combineReducers({ currency: getCurrencyReducer });

export default rootReducer;
