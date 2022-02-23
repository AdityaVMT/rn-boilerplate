import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import useAuthProvider from './useAuthProvider';

const defaultProps = {
  children: null,
};

const propTypes = {
  children: PropTypes.node,
};

const authContext = createContext();

const AuthProvider = ({children}) => {
  const {authToken, login, logout, signup} = useAuthProvider();

  return (
    <authContext.Provider value={(authToken, login, logout, signup)}>
      {children}
    </authContext.Provider>
  );
};

AuthProvider.defaultProps = defaultProps;
AuthProvider.propTypes = propTypes;

export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
