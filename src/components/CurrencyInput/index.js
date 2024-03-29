import React, { useContext } from 'react';
import { Button, FormControl, MenuItem, Select } from '@material-ui/core';
import currencyInputStyle from './currencyInput.style';
import { AppContext } from 'context/AppContext';

export default function CurrencyInput() {
  const classes = currencyInputStyle();
  const {
    dropdownList,
    setDropdownList,
    showedCurrency,
    setShowedCurrency,
    selected,
    setSelected,
  } = useContext(AppContext);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleClick = () => {
    setShowedCurrency([...showedCurrency, selected]);
    const removedItems = dropdownList.filter((item) => {
      return item !== selected;
    });
    setDropdownList(removedItems);
    setSelected(dropdownList[1]);
  };

  // render nothing if no longer available provided currencies to compare
  if (dropdownList.length === 0) {
    return null;
  }

  return (
    <FormControl className={classes.formControl}>
      <div className={classes.root}>
        <Select
          value={selected}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {dropdownList.map((item, idx) => (
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Button variant='contained' color='primary' onClick={handleClick}>
          ADD
        </Button>
      </div>
    </FormControl>
  );
}
