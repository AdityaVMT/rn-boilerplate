/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store, persistor} from '@redux';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@navigation/RootStack';
import './translations';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
