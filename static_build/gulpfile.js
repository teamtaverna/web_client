const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('build-styles', () => {
  gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// Watch task
gulp.task('default', () => {
  gulp.watch('scss/**/*.scss', ['build-styles']);
});
