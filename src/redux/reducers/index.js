import { combineReducers } from 'redux';
import getCurrencyReducer from './currency.reducer';

// combine reducer for further addition
const rootReducer = combineReducers({ currency: getCurrencyReducer });

export default rootReducer;
