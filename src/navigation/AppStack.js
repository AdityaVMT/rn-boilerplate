import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';
import ROUTES from './ROUTES';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME_STACK}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: 'cyan',
        headerShown: true,
      }}>
      <Tab.Screen
        name={ROUTES.HOME_STACK}
        options={{
          tabBarIcon: () => {},
        }}>
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.PROFILE_STACK}
        options={{
          tabBarIcon: () => {},
        }}>
        {() => <ProfileStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppStack;
