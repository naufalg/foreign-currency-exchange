import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currencies = ['USD', 'SGD', 'IDR', 'GBP', 'JPY', 'EUR'];
  const [moneyAmount, setMoneyAmount] = useState(20000);
  const [showedCurrency, setShowedCurrency] = useState(['USD', 'SGD']);

  const [dropdownList, setDropdownList] = useState(
    currencies.filter(
      (result) => showedCurrency.indexOf(result) < 0 && result !== 'IDR'
    )
  );

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
