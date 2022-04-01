/* eslint-disable default-param-last */
import {USER_REQUEST, USER_SUCCESS} from '../constants';

const initialState = {
  timeStamp: null,
  deviceId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_APP_INIT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
