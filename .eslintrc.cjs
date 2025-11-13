module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-refresh/recommended',
    'plugin:react/jsx-runtime', // removes need for React import
    'prettier', // disables ESLint rules that conflict with Prettier
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Your overrides here
    'react/react-in-jsx-scope': 'off', // unnecessary with Vite
  },
}