var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync({
    server: 'src'
  });

  gulp.watch('src/*.html', ['reload']);
});
gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())

});

gulp.task('default',['serve']);
