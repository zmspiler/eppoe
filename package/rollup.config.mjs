import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sass from 'rollup-plugin-sass'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs',
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
      file: 'dist/index.d.ts',
    },
    plugins: [dts()],
    external: [/\.scss$/],
  },
]
