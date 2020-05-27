var gulp = require('gulp');
var fileInline = require('gulp-file-inline');
//var clean = require('gulp-clean');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function(cb) {
  gulp.src('./build/fb-instant-games/*.html')
  .pipe(fileInline())
  .pipe(htmlmin({
      collapseWhitespace:true,
      removeComments: true
  }))
  .pipe(gulp.dest('./build/fb-instant-games/')
  .on('end', cb));
});