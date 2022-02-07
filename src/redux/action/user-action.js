import {USER_WATCHER, USER_REQUEST, USER_SUCCESS} from '../constants';

export const userWatcher = () => {
  return {
    type: USER_WATCHER,
  };
};

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    payload: user,
  };
};
