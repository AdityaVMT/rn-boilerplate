module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          'json',
          '.ios.js',
          '.android.js',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@action': './src/redux/action',
          '@utils': './src/utils',
          '@theme': './assets/constants/theme',
          '@icons': './assets/constants/icons',
        },
      },
    ],
  ],
};
