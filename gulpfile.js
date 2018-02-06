var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('serve', ['sass'], function() {

  browserSync({
    server: 'src'
  });

  gulp.watch('src/*.html', ['reload']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
gulp.task('default', ['serve', 'sass']);

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
