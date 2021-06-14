import Home from './pages/Home';
import { AppProvider } from 'context/AppContext';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  return (
    // initialize redux provider
    <Provider store={store}>
      {/* initialize context provider */}
      <AppProvider>
        {/* Page currently available, could be added for further development and integrate it with react-router */}
        <Home />
      </AppProvider>
    </Provider>
  );
}

export default App;
