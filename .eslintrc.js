module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    // This settinf is required as we are using rules
    // that required type information
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    // Disables a few of the recommended rules from the
    // previous set as are already covered in ts typechecker
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/extensions': [
      // Severity
      'error',
      // Enforces the use of extensions for all imports
      // except package imports
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        // List of extensions that will be parsed
        // modules and inspected for export's
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
