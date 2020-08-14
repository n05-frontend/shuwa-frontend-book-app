module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ]
  }
}
