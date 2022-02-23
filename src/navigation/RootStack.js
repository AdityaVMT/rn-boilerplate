import React from 'react';
import AppStack from './AppStack';
import {useAuth} from './auth/AuthProvider';
import AuthStack from './AuthStack';

const RootStack = () => {
  const {authToken, timeStamp, deviceId} = useAuth();

  if (authToken && timeStamp && deviceId) {
    return <AppStack />;
  }

  return <AuthStack />;
};

export default RootStack;
