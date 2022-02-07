import axios from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {USER_WATCHER} from '../constants';
import {userRequest, userSuccess} from '../action';

const getUserApi = () => {
  return axios.request({
    method: 'get',
    url: 'https://my-json-server.typicode.com/AdityaTarale/demo/user',
  });
};

function* userEffect() {
  yield put(userRequest());
  try {
    const response = yield call(getUserApi);
    yield put(userSuccess(response.data));
  } catch (error) {
    /* catch error */
  }
}

function* userSagaWatcher() {
  yield takeLatest(USER_WATCHER, userEffect);
}

export default userSagaWatcher;
