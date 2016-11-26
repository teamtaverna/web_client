/* eslint-disable */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build-styles', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css/'));
});

// Watch task
gulp.task('default', function() {
  gulp.watch('scss/**/*.scss', ['build-styles']);
});
