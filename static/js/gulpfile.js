var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
// gulp.task("testless", function() {
//   gulp.src(["src/less/index.less", "src/less/detail.less"])
//     .pipe(less())
//     .pipe(gulp.dest('src/css'));
// })

gulp.task("testless", function() {
  gulp.src(["src/less/*.less", "!src/less/**/{reset,test}.less"])
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(cssmin())
    .pipe(gulp.dest('src/css'));
})

gulp.task("testwatch", function() {
  gulp.watch("src/**/*.less", ['testless']);
})
