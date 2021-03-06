import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { name, version, description, author, license } from './package.json'
import components from './src/index.js'

const banner = `/**\n * ${name} | v${version}\n * ${description}\n * (c) ${new Date().getFullYear()} ${author}\n * @license ${license}\n */`

const createConfig = (component, module) => {
  return {
    input: `./src/${component + '/'}index.js`,
    output: {
      banner,
      file: `./${component}/index` + (module ? '.mjs' : '.js'),
      format: module ? 'es' : 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      peerDepsExternal(),
      resolve({ modulesOnly: true }),
      json(),
      sass(),
    ]
  }
}

const config = []
// When developing, you can use this to only rebuild the components you're working on
let dev = false
let only = ['Workbench']
for (let component of components) {
  if (!dev || only.indexOf(component) !== -1) config.push(createConfig(component, false))
  // Using .mjs causes problems. See #1079
  //config.push(createConfig(component, true));
}
export default config
