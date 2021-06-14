import React from 'react';
import { Header, MoneyInput, CurrencyDetail, CurrencyInput } from 'components';
import homeStyle from './home.style';

export default function index() {
  const homeClass = homeStyle();
  return (
    <div className={homeClass.root}>
      <Header />
      <MoneyInput />
      <CurrencyDetail />
      <CurrencyInput />
    </div>
  );
}
