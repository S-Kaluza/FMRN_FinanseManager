import React from 'react';
import { Provider } from 'react-redux/es/exports';
import { configureStore } from './src/store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import { globalStyles } from './src/styles/style.global';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={globalStyles.container}>
        <RootNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
