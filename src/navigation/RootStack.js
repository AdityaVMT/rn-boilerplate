import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuth} from './auth/AuthProvider';

const RootStack = () => {
  const {authToken, timeStamp, deviceId} = useAuth();

  if (authToken && timeStamp && deviceId) {
    return <AppStack />;
  }

  return <AuthStack />;
};

export default RootStack;
