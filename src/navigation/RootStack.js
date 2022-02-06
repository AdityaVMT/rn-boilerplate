import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = () => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <AppStack />;
  }
  return <AuthStack />;
};

export default RootStack;
