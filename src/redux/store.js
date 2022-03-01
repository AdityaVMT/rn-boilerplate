import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsDenylist, actionsCreators and other options if needed
});

/**
 * !Why redux-persist?
 * Redux-persist does a very simple yet very powerful job of persisting
 * your application state across different user sessions
 */

/* Redux-Persist */

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ---- Redux Configuration ---- */

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
