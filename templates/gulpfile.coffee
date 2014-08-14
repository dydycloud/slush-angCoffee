gulp = require("gulp")
coffee  = require 'gulp-coffee'
gutil   = require 'gulp-util'
plumber = require 'gulp-plumber'
connect = require 'gulp-connect'
concat = require 'gulp-concat'

gulp.task "default", ["watchCoff"]

gulp.task 'coffee', ->
  gulp.src('coffee/**/*.coffee')
  .pipe(plumber())
  .pipe(coffee({
    bare: true
   }))
  .pipe(gulp.dest('assets/js/script'))
  .on('error', gutil.log)

gulp.task 'scripts', ->
  gulp.src(['assets/js/script/app.js', 'assets/js/script/config.js', 'assets/js/script/**/*.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('assets/js'))


gulp.task 'watchCoff', ()->
  gulp.watch('coffee/**/*.coffee', ['coffee', 'scripts'])
  .on 'change', (event)->
    console.log 'Fichier Modifier '+event.path


gulp.task "serve", ->
  connect.server
    root: "./"
    port: "1881"
    livereload: true

  return
