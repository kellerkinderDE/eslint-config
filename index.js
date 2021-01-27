const rules = [
    './rules/style',
    './rules/best-practices',
    './rules/es6',
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
