module.exports = {
    rules: {
        'arrow-body-style': 'off',
        'prefer-numeric-literals': 'off',
        'no-confusing-arrow': ['warn', {
            allowParens: true,
        }],
        'no-useless-computed-key': 'warn',
        'prefer-destructuring': ['warn', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: false,
            },
        }, {
            enforceForRenamedProperties: false,
        }],
        'prefer-rest-params': 'warn',
        'prefer-template': 'warn',
    },
};
