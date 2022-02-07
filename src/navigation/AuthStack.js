import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '@screens/Intro';
import LoginScreen from '@screens/Login';
import ROUTES from './ROUTES';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.INTRO}>
      <Stack.Screen
        name={ROUTES.INTRO}
        component={IntroScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        options={{
          headerShown: true,
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
