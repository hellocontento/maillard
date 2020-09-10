import commonjs from '@rollup/plugin-commonjs';
import resolver from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
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
      commonjs()
		]
	},
];