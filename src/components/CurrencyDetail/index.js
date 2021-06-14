import React, { useEffect, useState, useContext } from 'react';
import { Typography, List, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { AppContext } from 'context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyAction } from 'redux/actions/currency.action';
import { roundNDecimal } from 'utils';

import currencyDetailStyle from './currencyDetail.style';
// import { getCurrency } from 'api/getCurrency';

export default function CurrencyDetail() {
  const classes = currencyDetailStyle();
  const dispatch = useDispatch();
  const {
    currencies,
    showedCurrency,
    setShowedCurrency,
    dropdownList,
    setDropdownList,
    moneyAmount,
    selected,
    setSelected,
  } = useContext(AppContext);

  const currencyState = useSelector((state) => state.currency);

  const filteredShowed =
    currencyState.data !== null
      ? currencyState.data.filter(
          (result) => showedCurrency.indexOf(result.acronym) > -1
        )
      : null;

  useEffect(() => {
    if (!currencyState.data) {
      dispatch(getCurrencyAction(currencies));
    }
  }, []);

  const removeHandler = (inputValue, removed) => {
    const removedItems = inputValue.filter((item) => {
      return item !== removed;
    });
    setShowedCurrency(removedItems);
    setDropdownList([...dropdownList, removed]);
    setSelected(dropdownList[1]);
  };

  return (
    <List>
      {currencyState.data
        ? filteredShowed.map((item1, idx1) => (
            <div key={idx1} className={classes.root}>
              <div className={classes.left}>
                <Typography className={classes.title}>
                  {item1.name} - {item1.acronym}
                </Typography>
                <Typography className={classes.subtitle}>
                  1 IDR = {item1.acronym} {roundNDecimal(item1.rate, 7)}
                </Typography>
              </div>
              <div className={classes.right}>
                <Typography className={classes.value}>
                  {roundNDecimal(item1.rate * moneyAmount, 2)}
                </Typography>
                <Button
                  onClick={() => {
                    removeHandler(showedCurrency, item1.acronym);
                  }}
                  variant='outlined'
                  color='secondary'
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        : [...Array(2)].map((e, idx) => (
            <div className={classes.skeleton}>
              <Skeleton height={40} key={idx} variant='text' animation='wave' />
            </div>
          ))}
    </List>
  );
}