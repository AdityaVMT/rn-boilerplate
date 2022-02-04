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
          '@assets': './assets',
          '@constants': './assets/constants',
          '@icons': './assets/constants/icons',
          '@images': './assets/constants/images',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@screens': './src/screens',
          '@action': './src/redux/action/index.js',
          '@config': './src/config',
          '@context': './src/context',
          '@layout': './src/layout',
          '@utils': './src/utils',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
