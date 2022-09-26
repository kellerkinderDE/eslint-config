import { describe } from 'vitest';

import config from '../vue';
import {
    createEngine,
    checkValidity,
    checkLintingErrors,
} from './test-utils';

describe('base config', () => {
    const engine = createEngine(config);

    checkValidity(engine);
    checkLintingErrors(engine);
});
