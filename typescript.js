const rules = require.resolve('./rules/typescript');

module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        require.resolve('./index'),
        rules,
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
};
