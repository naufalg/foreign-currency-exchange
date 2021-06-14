import {
  GET_CURRENCY_REQUEST,
  GET_CURRENCY_SUCCESS,
  GET_CURRENCY_FAILED,
} from 'redux/actionTypes';

const initialDetailState = {
  data: null,
  isLoading: false,
  error: null,
};
const getCurrencyReducer = (state = initialDetailState, action) => {
  switch (action.type) {
    case GET_CURRENCY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_CURRENCY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getCurrencyReducer;
