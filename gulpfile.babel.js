import { src, dest } from 'gulp'
import standard from 'gulp-standard'
import webpack from 'gulp-webpack'

var merge = require('merge-stream');
var ghPages = require('gulp-gh-pages');



export function lint () {
  src([
    'app/**/*.js',
    'app/**/*.jsx',
    '*.js'
  ])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
}

export function build () {
  process.env.NODE_ENV = 'production'

  let files = src('app/main.jsx')
    .pipe(webpack(require('./webpack.production.config.js')))
    .pipe(dest('dist/'))

  let readme = src('./README.md')
    .pipe(dest('dist/'))

  return merge(files, readme)
}

export function deploy() {
  return src('./dist/**/*')
    .pipe(ghPages({branch: 'master'}));
}

export default lint
