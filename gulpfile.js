const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const stylus = require('gulp-stylus')
const pug = require('gulp-pug')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')

gulp.task('serve', ['stylus', 'pug', 'js'], () => {
  browserSync.init({
    server: {
      baseDir: './',
      index: './index.html'
    }
  })

  gulp.watch('./pug/*.pug', ['pug'])
  gulp.watch('./stylus/*.styl', ['stylus'])
  gulp.watch('./js/*.js', ['js', 'uglifyJS'])
  gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('stylus', () => {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

gulp.task('pug', () => {
  return gulp.src('./pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('js', () => {
  return gulp.src('./js/*.js')
    .pipe(browserSync.stream())
})

gulp.task('uglifyJS', () => {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['serve', 'stylus', 'pug', 'js', 'uglifyJS'])