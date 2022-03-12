module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  extends: [
    'plugin:react-native/all',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/prettier',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'import', 'react-native', 'unused-imports'],
  rules: {
    'global-require': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // turn off file extension rule in eslint
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          json: 'always',
        },
      },
    ],
    'import/no-unresolved': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'no-unsafe-optional-chaining': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      alias: {
        map: [
          ['@navigation', './src/navigation'],
          ['@screens', './src/screens'],
          ['@redux', './src/redux'],
          ['@action', './src/redux/action'],
          ['@utils', './src/utils'],
          ['@icons', './assets/constants/icons'],
        ],
      },
    },
    env: {
      'react-native/react-native': true,
      es6: true,
    },
  },
};
