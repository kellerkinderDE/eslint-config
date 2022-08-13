const vue = require.resolve('./rules/vue');

module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        require.resolve('./typescript'),
        vue,
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: [
        '@typescript-eslint',
    ],
};
