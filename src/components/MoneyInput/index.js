import React, { useContext } from 'react';
import { TextField, InputAdornment, FormControl } from '@material-ui/core';
import { AppContext } from 'context/AppContext';

import moneyInputStyle from './moneyInput.style';

export default function MoneyInput() {
  const classes = moneyInputStyle();
  const { moneyAmount, setMoneyAmount } = useContext(AppContext);

  const handleChange = (event) => {
    setMoneyAmount(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl autoComplete='off'>
        <TextField
          id='standard-adornment-weight'
          value={moneyAmount}
          onChange={handleChange}
          label='Indonesian Rupiah'
          type='number'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>IDR</InputAdornment>
            ),
          }}
          variant='outlined'
        />
      </FormControl>
    </div>
  );
}
