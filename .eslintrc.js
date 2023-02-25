module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'object-curly-spacing': ["error", "always"],
    'generator-star-spacing': 'off',
    "no-tabs":"off",
    "no-unused-vars":"off",
    "no-console":"off",
    "no-irregular-whitespace":"off",
    "no-debugger": "off",
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off'
  }
}
