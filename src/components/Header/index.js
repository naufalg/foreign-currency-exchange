import React from 'react';
import Typography from '@material-ui/core/Typography';
import headerStyle from './header.style';

export default function index() {
  const classes = headerStyle();

  return (
    <div className={classes.root}>
      <Typography variant='h5' className={classes.title}>
        Foreign Currency Exchanger
      </Typography>
    </div>
  );
}
