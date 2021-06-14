import { makeStyles } from '@material-ui/core/styles';

const currencyInputStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  formControl: {
    minWidth: '120px',
    maxWidth: '500px',
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  selectEmpty: {
    minWidth: '100px',
    maxWidth: '500px',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
  },
}));

export default currencyInputStyle;
