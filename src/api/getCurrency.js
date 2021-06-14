import axios from 'axios';
const currencyUrl = process.env.REACT_APP_CURRENCY_URL;

export const getCurrency = async () => {
  try {
    const res = await axios.get(currencyUrl);
    return res;
  } catch (error) {
    console.error(error);
  }
};
