import Home from './pages/Home';
import { AppProvider } from 'context/AppContext';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Home />
      </AppProvider>
    </Provider>
  );
}

export default App;
