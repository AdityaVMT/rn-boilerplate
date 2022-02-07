/* eslint-disable default-param-last */
import {USER_REQUEST, USER_SUCCESS} from '../constants';

const initialState = {
  loading: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
