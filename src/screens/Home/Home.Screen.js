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

import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {userWatcher} from '@action';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const getUser = () => {
    dispatch(userWatcher());
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {t, i18n} = useTranslation();

  const handleChangeLang = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Internalization">
            <Text style={styles.highlight}>{t('Home.title')}</Text>
          </Section>
          <View style={styles.buttonContainer}>
            <Button title="Hindi" onPress={() => handleChangeLang('hi')} />
            <Button title="English" onPress={() => handleChangeLang('en')} />
          </View>
          <Section title="Redux Saga">
            <View>
              <Text>
                {userData?.user?.firstName} {userData?.user?.lastName}
              </Text>
              <Button title="Get User" onPress={getUser} />
            </View>
          </Section>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>Home.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
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
