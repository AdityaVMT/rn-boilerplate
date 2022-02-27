/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {store, persistor} from '@redux';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from '@navigation/RootStack';
import AuthProvider from '@navigation/auth/AuthProvider';
import './translations';
import ThemeContext from '@utils/theme-provider';
import {EventRegister} from 'react-native-event-listeners';
import {
  STORAGE_KEYS,
  setItemInAsyncStorage,
  getItemFromAsyncStorage,
} from '@utils';
import {THEME} from './assets/constants/theme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const findThemeMode = useCallback(async () => {
    const themeModeIsDark = await getItemFromAsyncStorage(
      STORAGE_KEYS.CHANGE_THEME_KEY
    );
    if (themeModeIsDark) {
      setDarkMode(themeModeIsDark);
    }
  }, []);

  useEffect(() => {
    findThemeMode();

    EventRegister.addEventListener('changeTheme', async (value) => {
      setDarkMode(value);
      await setItemInAsyncStorage(STORAGE_KEYS.CHANGE_THEME_KEY, value);
    });

    return () => {
      EventRegister.removeEventListener('darkMode');
    };
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeContext.Provider value={darkMode ? THEME.dark : THEME.light}>
            <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
              <RootStack />
            </NavigationContainer>
          </ThemeContext.Provider>
        </AuthProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
