module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    'max-len': ['error', 100],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
  },
};
