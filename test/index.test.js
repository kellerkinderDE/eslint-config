import { describe } from 'vitest';

import config from '..';
import {
    checkLintingErrors,
    checkValidity,
    createEngine,
} from './test-utils';

describe('base config', () => {
    const engine = createEngine(config);

    checkValidity(engine);
    checkLintingErrors(engine);
});
