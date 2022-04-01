import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '@screens/Intro';
import LoginScreen from '@screens/Login';
import SignupScreen from '@screens/Signup';
import ROUTES from './ROUTES';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.INTRO}
        component={IntroScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ROUTES.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
