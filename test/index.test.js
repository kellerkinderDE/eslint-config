const config = require('..');

const {
    createEngine,
    checkValidity,
    checkLintingErrors,
} = require('./test-utils');

describe('base config', () => {
    const engine = createEngine(config);

    checkValidity(engine);
    checkLintingErrors(engine);
});
