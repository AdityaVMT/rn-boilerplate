import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {
  API_URL,
  STORAGE_KEYS,
  getItemFromAsyncStorage,
  setMultipleItemsInAsyncStorage,
  removeMultipleItemsFromAsyncStorage,
  getMultipleItemsFromAsyncStorage,
} from '../../utils';

// https://www.npmjs.com/package/react-native-get-random-values

const useAuthProvider = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const [authToken, setAuthToken] = useState(null);
  const [timeStamp, setTimeStamp] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

  const getAuthTokens = useCallback(async () => {
    const authInfo = await getMultipleItemsFromAsyncStorage([
      STORAGE_KEYS.AUTH_TOKEN_KEY,
      STORAGE_KEYS.TIME_STAMP_KEY,
      STORAGE_KEYS.DEVICE_ID_KEY,
    ]);

    if (authInfo) {
      setAuthToken(authInfo.authToken);
      setTimeStamp(authInfo.timeStamp);
      setDeviceId(authInfo.deviceId);
    }
  }, []);

  useEffect(() => {
    getAuthTokens();
    return () => {};
  }, []);

  /* generating a random identifier for `deviceId` */
  const generateDeviceId = () => setDeviceId(uuid());

  /* generate a timestamp when user signup & login */
  const generateTimeStamp = () => new Date().getTime();

  const login = async (data) => {
    const params = {
      ...data,
    };

    const isDeviceIdExist = await getItemFromAsyncStorage(
      STORAGE_KEYS.DEVICE_ID_KEY
    );

    if (isDeviceIdExist && isDeviceIdExist.length > 0) {
      params.deviceId = isDeviceIdExist;
    } else {
      params.deviceId = generateDeviceId();
    }

    setAuthLoading(true);
    try {
      const response = await axios.post(API_URL.LOGIN(), params);
      if (response.status === 200) {
        setAuthToken(response.data.token);
        setTimeStamp(generateTimeStamp());
        setDeviceId(params.deviceId);

        const preserveValues = [
          [STORAGE_KEYS.AUTH_TOKEN_KEY, JSON.stringify(authToken)],
          [STORAGE_KEYS.TIME_STAMP_KEY, JSON.stringify(timeStamp)],
          [STORAGE_KEYS.DEVICE_ID_KEY, JSON.stringify(deviceId)],
        ];

        await setMultipleItemsInAsyncStorage(preserveValues);
      }
    } catch (error) {
      setAuthLoading(false);
      setAuthError(error.message);
    }
  };

  const signup = async (data) => {
    const params = {
      ...data,
      deviceId: generateDeviceId(),
    };

    setAuthLoading(true);
    try {
      const response = await axios.post(API_URL.SIGNUP(), params);
      if (response.status === 201) {
        setAuthToken(response.data.token);
        setTimeStamp(generateTimeStamp());
        setDeviceId(params.deviceId);

        const preserveValues = [
          [STORAGE_KEYS.AUTH_TOKEN_KEY, JSON.stringify(authToken)],
          [STORAGE_KEYS.TIME_STAMP_KEY, JSON.stringify(timeStamp)],
          [STORAGE_KEYS.DEVICE_ID_KEY, JSON.stringify(deviceId)],
        ];

        await setMultipleItemsInAsyncStorage(preserveValues);
      }
      setAuthLoading(false);
    } catch (error) {
      setAuthLoading(false);
      setAuthError(error.message);
    }
  };

  const logout = async () => {
    /* Do not remove deviceId, it should clear after clearing data of application */
    await removeMultipleItemsFromAsyncStorage([
      STORAGE_KEYS.AUTH_TOKEN_KEY,
      STORAGE_KEYS.TIME_STAMP_KEY,
    ]);
  };

  return {
    authLoading,
    authError,
    authToken,
    timeStamp,
    deviceId,
    login,
    logout,
    signup,
  };
};

export default useAuthProvider;
