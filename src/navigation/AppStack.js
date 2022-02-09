/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, UserIcon} from '@icons';
import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';
import ROUTES from './ROUTES';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME_STACK}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: 'pink',
        headerShown: false,
      }}>
      <Tab.Screen
        name={ROUTES.HOME_STACK}
        options={{
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}>
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name={ROUTES.PROFILE_STACK}
        options={{
          tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
        }}>
        {() => <ProfileStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppStack;
