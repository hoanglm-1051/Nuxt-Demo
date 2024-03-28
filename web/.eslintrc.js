module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier'],
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 0,
        'prefer-destructuring': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'vue/no-v-model-argument': 'off',
        'prettier/prettier': ['error'],
    },
}
