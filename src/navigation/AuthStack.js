import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '@screens/Intro';
import LoginScreen from '@screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
