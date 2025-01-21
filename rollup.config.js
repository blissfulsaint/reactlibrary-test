import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts', // Entry file
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies like react
    resolve(),          // Resolve node_modules
    commonjs(),         // Convert CommonJS to ESModules
    typescript({        // Handle TypeScript files
      tsconfig: './tsconfig.json',
    }),
  ],
  external: ['react', 'react-dom'], // Mark these as external
};