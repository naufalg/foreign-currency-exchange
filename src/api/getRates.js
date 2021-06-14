import axios from 'axios';
const ratesurl = process.env.REACT_APP_RATE_URL;

export const getRate = async () => {
  try {
    const res = await axios.get(ratesurl);
    return res;
  } catch (error) {
    console.error(error);
  }
};
