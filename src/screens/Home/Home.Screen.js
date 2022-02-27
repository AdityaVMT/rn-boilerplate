/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {EventRegister} from 'react-native-event-listeners';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {userWatcher} from '@action';
import {formatDate, STORAGE_KEYS, getItemFromAsyncStorage} from '@utils';
import {useTheme} from '@utils/theme-provider';

const Section = ({children, title}) => {
  const theme = useTheme();
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: theme.color,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: theme.color,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const theme = useTheme();

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const [themeMode, setThemeMode] = useState('light');

  const findThemeMode = useCallback(async () => {
    const themeModeIsDark = await getItemFromAsyncStorage(
      STORAGE_KEYS.CHANGE_THEME_KEY
    );
    if (themeModeIsDark) {
      setThemeMode(themeModeIsDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    findThemeMode();
  }, []);

  const getUser = () => {
    dispatch(userWatcher());
  };

  const handleThemeMode = (value) => {
    setThemeMode(value ? 'dark' : 'light');
    EventRegister.emit('changeTheme', value);
  };

  const backgroundStyle = {
    backgroundColor: theme.background,
  };

  const {t, i18n} = useTranslation();

  const handleChangeLang = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={theme.background} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: theme.background,
          }}>
          <Section title="Internalization">
            <Text style={styles.highlight}>{t('Home.title')}</Text>
          </Section>
          <View style={styles.buttonContainer}>
            <Button title="Hindi" onPress={() => handleChangeLang('hi')} />
            <Button title="English" onPress={() => handleChangeLang('en')} />
          </View>
          <Section title="Redux Saga with Redux Persist">
            <Text>
              {userData?.user?.firstName} {userData?.user?.lastName}
              <View>
                <Button title="Get User" onPress={getUser} />
              </View>
            </Text>
          </Section>
          <Section title="Dark & light Theme">
            <Switch
              value={themeMode === 'dark'}
              onValueChange={(value) => handleThemeMode(value)}
            />
            <Text>Theme Mode: {themeMode}</Text>
          </Section>
          <Section title="Date FNS">
            <Text>{formatDate(date)}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
