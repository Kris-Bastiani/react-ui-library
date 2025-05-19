import config from '@kris-bastiani/configs/eslint/react-ts';

export default [
	...config,
	{
		rules: {
			'import/no-absolute-path': 'off',
		},
		settings: {
			'import/resolver': {
				alias: {
					map: [
						['', './public'],
						['@lib', './lib'],
						['@src', './src'],
					],
				},
			},
		},
	},
	{
		files: ['eslint.config.js', 'vite.config.ts', '**/*.test.{ts,tsx}'],
		rules: {
			'import/no-extraneous-dependencies': 'off',
		},
	},
	{ ignores: ['**/dist/**'] },
];
