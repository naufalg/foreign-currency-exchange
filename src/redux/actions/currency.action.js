import {
  GET_CURRENCY_REQUEST,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_FAILED,
} from 'redux/actionTypes';

import { getCurrency } from 'api/getCurrency';
import { getRate } from 'api/getRates';

export const getCurrencyAction = (currencyArray) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CURRENCY_REQUEST,
    });

    const currenciesData = await getCurrency();

    const filteredCurrencies = Object.keys(currenciesData.data)
      .filter((key) => currencyArray.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: currenciesData.data[key],
        };
      }, {});

    const ratesData = await getRate();

    const filteredRates = Object.keys(ratesData.data.rates)
      .filter((key) => currencyArray.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: ratesData.data.rates[key],
        };
      }, {});

    const mappedCurrencies = currencyArray.map((item, idx) => ({
      acronym: item,
      name: filteredCurrencies[item],
      rate: filteredRates[item],
    }));

    dispatch({
      type: GET_CURRENCY_SUCCESS,
      payload: mappedCurrencies,
    });
  } catch (error) {
    dispatch({ type: GET_CURRENCY_FAILED, payload: error });
  }
};
