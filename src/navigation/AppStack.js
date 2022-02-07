import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: 'cyan',
        headerShown: true,
      }}>
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarIcon: () => {},
        }}>
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name="ProfileStack"
        options={{
          tabBarIcon: () => {},
        }}>
        {() => <ProfileStack />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AppStack;
