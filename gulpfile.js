const gulp      = require('gulp'),
      imagemin  = require('gulp-imagemin');

// Image optimization, do not include in general build
gulp.task('images', function() {
  return gulp.src('images/**/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
});