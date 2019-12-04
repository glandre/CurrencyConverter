module.exports = {
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'global-require': 'off', // React Native images uses the require syntax so we're turning it off so that we don't get any errors
    'import/no-extraneous-dependencies': [
      'error', { packageDir: ['./', './node_modules/expo']}
    ],
    'no-console': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: [ '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': ['error', 'never'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser'
}
