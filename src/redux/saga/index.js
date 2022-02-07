import {all} from 'redux-saga/effects';
import userSagaWatcher from './user-saga';

export default function* rootSaga() {
  yield all([userSagaWatcher()]);
}
