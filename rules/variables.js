module.exports = {
    rules: {
        'no-restricted-globals': 'off',
        'no-undef-init': 'off',
        'no-delete-var': 'warn',
        'no-shadow': 'warn',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'warn',
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    },
};
