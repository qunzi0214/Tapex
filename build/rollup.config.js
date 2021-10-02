import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/main.tsx',
  output: {
    file: 'lib/index.esm.js',
    format: 'esm',
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  external: ['react', 'antd', '/@babel/runtime/'],
}
