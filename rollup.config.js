import commonjs from '@rollup/plugin-commonjs';
import resolver from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		entry: 'src/entry.js',
		external: ['styled-components'],
		output: {
			name: 'maillard',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
      resolver(),
      babel({ 
        exclude: 'node_modules/**',
				presets: ['@babel/env', '@babel/preset-react'],
				babelHelpers: 'bundled'
			}),
			scss(),
      commonjs()
		]
	},
];