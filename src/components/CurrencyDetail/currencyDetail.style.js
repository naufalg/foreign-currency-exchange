import { makeStyles } from '@material-ui/core/styles';

const currencyDetailStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '2.5px 0',
    justifyContent: 'space-between',
    marginTop: '20px ',
    paddingBottom: '20px',
    borderBottom: '1px solid #d3d3d3',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: '600',
    fontSize: '16px',
  },
  subtitle: {
    fontSize: '12px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  value: { fontWeight: 'bold', fontSize: '20px', marginRight: '10px' },
  remove: { color: 'red', fontSize: '14px', fontWeight: '500' },
  skeleton: { width: '100%', padding: '10px 0' },
}));

export default currencyDetailStyle;
