import markdownlintConfig from './index.js';

export default {
	config: markdownlintConfig.config,
	ignores: ['node_modules', 'test', 'CHANGELOG.md'],
};
