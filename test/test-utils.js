const { ESLint } = require('eslint');

const baseConfig = require('..');

const createEngine = (baseConfig) => {
    return new ESLint({
        useEslintrc: false,
        baseConfig,
    });
};

const checkValidity = (engine) => {
    it('is valid configuration', () => {
        expect(async () => await engine.lintText('')).not.toThrow();
    });
};

const checkLintingErrors = (engine) => {
    it('does not produce linting errors', async () => {
        const lintResults = await engine.lintText('');
        expect(lintResults[0].errorCount).toBe(0);
    });
};

module.exports = {
    createEngine,
    checkValidity,
    checkLintingErrors,
};
