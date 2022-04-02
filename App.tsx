import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavContainer from './src/navigation/Index';

const App: React.FC = () => {

  return (

      <Provider store={store}>
        <AppNavContainer />
      </Provider>

  );
};

export default App;
