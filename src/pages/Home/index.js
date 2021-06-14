import React from 'react';
import { Header, MoneyInput, CurrencyDetail, CurrencyInput } from 'components';
import { Paper } from '@material-ui/core';

import homeStyle from './home.style';

export default function index() {
  const homeClass = homeStyle();
  return (
    <Paper elevation={2} className={homeClass.root}>
      <Header />
      <MoneyInput />
      <CurrencyDetail />
      <CurrencyInput />
    </Paper>
  );
}
