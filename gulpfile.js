'use strict'

const gulp = require('gulp')
const spawn = require('child_process').spawn
const del = require('del')

// Requerirlo para que salte el error si no se hizo npm install
require('webpack')
require('webpack-dev-server')

gulp.task('build', ['clean'], (cb) => {
  spawn('node', [
    './node_modules/.bin/webpack',
    '-c'
  ], {stdio: 'inherit'})
  .on('exit', (error) => {
    if (error) {
      console.log('Hubo errores!!!')
    }
    cb()
  })
})

gulp.task('serve', ['clean'], (cb) => {
  let ip = '0.0.0.0'

  if (process.env.IP) {
    ip = process.env.IP
  }

  spawn('node', [
    './node_modules/.bin/webpack-dev-server',
    '--content-base', 'src',
    '--host', ip,
    '--hot',
    '--inline'
  ], {stdio: 'inherit'})
  .on('exit', (error) => {
    if (error) {
      console.log('Hubo errores!!!')
    }
    cb()
  })
})

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ])
})

gulp.task('deploy', ['build'], (cb) => {
  console.log('Implementar el despliegue en gh-pages')
  // TODO: Implementar esta tarea cuando tengamos algo más consisntente
  cb()
})
