import { expect, it } from 'vitest';
import { ESLint } from 'eslint';

export const createEngine = (baseConfig) => {
    return new ESLint({
        useEslintrc: false,
        baseConfig,
    });
};

export const checkValidity = (engine) => {
    it('is valid configuration', () => {
        expect(async () => await engine.lintText('')).not.toThrow();
    });
};

export const checkLintingErrors = (engine) => {
    it('does not produce linting errors', async () => {
        const lintResults = await engine.lintText('');
        expect(lintResults[0].errorCount).toBe(0);
    });
};
