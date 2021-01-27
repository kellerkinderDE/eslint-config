module.exports = {
    rules: {
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'no-restricted-properties': 'off',
        'no-warning-comments': 'off',
        'prefer-promise-reject-errors': 'off',
        'max-classes-per-file': ['warn', 1],
        'no-else-return': ['warn', { allowElseIf: false }],
        'no-fallthrough': 'off',
        'vars-on-top': 'off',
        'no-extra-bind': 'warn',
        'no-loop-func': 'warn',
        'no-new': 'warn',
        'no-new-func': 'warn',
        'no-param-reassign': ['warn', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc',
                'accumulator',
                'res',
                'result',
                'response',
            ],
        }],
        'no-return-await': 'warn',
        'no-script-url': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-return': 'warn',
        radix: 'warn',
        yoda: 'warn',
    },
};
