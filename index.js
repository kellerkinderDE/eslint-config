const style = require.resolve('./rules/style');

const rules = [
    './rules/style',
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
