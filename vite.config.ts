import {
	dirname,
	extname,
	relative,
	resolve,
} from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react-swc';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			fileName: 'main',
			formats: ['es'],
			name: 'Main',
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob.sync('lib/**/*.{ts,tsx}', {
					ignore: ['lib/**/*.d.ts', 'lib/**/*.stories.tsx', '**/*.test.{ts,tsx}'],
				}).map((file) => [
					relative(
						'lib',
						file.slice(0, file.length - extname(file).length),
					),
					fileURLToPath(new URL(file, import.meta.url)),
				]),
			),
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
			},
		},
	},
	plugins: [
		dts({ tsconfigPath: resolve(__dirname, 'tsconfig.lib.json') }),
		libInjectCss(),
		react(),
	],
	resolve: {
		alias: {
			'@lib': resolve(__dirname, 'lib'),
			'@src': resolve(__dirname, 'src'),
		},
	},
});
