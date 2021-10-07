import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// package.json
import pkg from '../package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const name = 'Tapex'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    }, {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.browser,
      format: 'iife',
      name,
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    commonjs(),
    postcss({
      plugins: [autoprefixer, cssnano],
      extensions: ['.less', '.css'],
      use: ['less'],
      extract: 'style.css', // 输出路径
    }),
    babel({
      babelHelpers: 'bundled',
      extensions,
    }),
  ],
  external: ['react', 'antd', '/@babel/runtime/'],
}
