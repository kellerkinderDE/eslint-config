const vue = require.resolve('./rules/vue');

module.exports = {
    extends: [
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
