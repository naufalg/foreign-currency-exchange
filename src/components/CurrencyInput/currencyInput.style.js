import { makeStyles } from '@material-ui/core/styles';

const currencyInputStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    // width: '50%',
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: '70%',
  },
  selectEmpty: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default currencyInputStyle;
