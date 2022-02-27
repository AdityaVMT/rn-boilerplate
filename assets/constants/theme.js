import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  h1m: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2m: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3m: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4m: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
};

export const THEME = {
  light: {
    primary: '',
    secondary: ' ',
    color: '#000',
    background: '#fff',
  },
  dark: {
    primary: '',
    secondary: ' ',
    color: '#fff',
    background: '#000',
  },
};
