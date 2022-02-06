import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <AppStack />;
  }
  return <AuthStack />;
};

export default RootStack;
