import React from 'react';
import ProfileScreen from '@screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from '@navigation/ROUTES';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.PROFILE}>
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
