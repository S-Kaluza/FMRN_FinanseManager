import React from 'react';
import DevScreen from './src/screens/DevScreen/DevScreen';
import { Provider } from 'react-redux/es/exports';
import { configureStore } from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <DevScreen />
    </Provider>
  );
};

export default App;
