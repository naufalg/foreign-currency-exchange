import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // provided currencies
  const currencies = ['USD', 'SGD', 'IDR', 'GBP', 'JPY', 'EUR'];
  // compared amount
  const [moneyAmount, setMoneyAmount] = useState(20000);
  // which currency currently shows
  const [showedCurrency, setShowedCurrency] = useState(['USD', 'SGD']);
  // add currency option(s)
  const [dropdownList, setDropdownList] = useState(
    currencies.filter(
      (result) => showedCurrency.indexOf(result) < 0 && result !== 'IDR'
    )
  );
  // selected add currency
  const [selected, setSelected] = useState(dropdownList[0]);

  return (
    <AppContext.Provider
      value={{
        currencies,
        moneyAmount,
        setMoneyAmount,
        showedCurrency,
        setShowedCurrency,
        dropdownList,
        setDropdownList,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
