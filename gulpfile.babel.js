import { src, dest, series, parallel } from 'gulp'
import standard from 'gulp-standard'
import webpack from 'gulp-webpack'
import ghPages from 'gulp-gh-pages'
import del from 'del'

export const lint = () =>
  src(['app/**/*.js', 'app/**/*.jsx', '*.js'])
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true,
    quiet: true
  }))

const buildFront = () =>
  src('app/main.jsx')
  .pipe(webpack(require('./webpack.production.config.js')))
  .pipe(dest('dist/'))

const copyFiles = () =>
  src('./README.md')
  .pipe(dest('dist/'))

const deploy = () =>
  src('./dist/**/*')
  .pipe(ghPages({branch: 'master'}));

export const clean = () => del(['dist'])

export const build = series(clean, parallel(buildFront, copyFiles))

export const all = series(build, deploy)

export default lint
