import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'
import tsconfig from './tsconfig.json' with { type: 'json' }
import packageJson from './package.json' with { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
      },
      {
        file: packageJson.main,
        format: 'cjs',
      },
    ],
    plugins: [
      peerDepsExternal(),
      json(),
      typescript(),
      sass({ api: 'modern' }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.types,
    },
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: tsconfig.compilerOptions.baseUrl,
          paths: tsconfig.compilerOptions.paths,
        },
      }),
    ],
    external: [/\.scss$/],
  },
]
