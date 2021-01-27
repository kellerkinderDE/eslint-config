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
        ...rules,
    ],
    globals: {
        Shopware: true,
    },
};
