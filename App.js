/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import './i18next';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@navigation/RootStack';
import store from '@redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
