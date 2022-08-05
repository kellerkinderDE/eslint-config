const rules = [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/style',
    './rules/variables',
].map(file => require.resolve(file));

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        ...rules,
    ],
    env: {
        browser: true,
        node: true,
    },
    globals: {
        Shopware: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: ['@babel/plugin-proposal-class-properties'],
        },
    },
};
