import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' with { type: 'json' }
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      typescript(),
      postcss({
        modules: true,
        extract: false,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types }],
    plugins: [dts()],
    external: ['react', 'react-dom'],
  },
]
