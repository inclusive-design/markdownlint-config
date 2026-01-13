import config from '../index.js';
import test from 'node:test';
import assert from 'node:assert';

test('markdownlintConfig', async () => {
	assert.ok(typeof config === 'object');
});
