module.exports = {
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'turbo',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',

    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
