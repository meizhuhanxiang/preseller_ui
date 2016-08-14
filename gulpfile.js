var gulp = require("gulp");
var less = require("gulp-less");
var flatten = require("gulp-flatten");
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var headerfooter = require('gulp-headerfooter');
gulp.task("less", function() {
  return gulp.src("develop/**/*.less")
    .pipe(less())
    .pipe(flatten())
    .pipe(gulp.dest("static/css"))
//     .pipe(rev())
//     .pipe(gulp.dest("static/css"))
//     .pipe(rev.manifest({
//       merge: true,
//       base: "static"
//     }))
//     .pipe(gulp.dest("static/css"))
 })



gulp.task("html", function() {
  return gulp.src("develop/**/*.html")
    .pipe(flatten())
    .pipe(headerfooter.header('./develop/common/header.html'))
    .pipe(headerfooter.footer('./develop/common/footer.html'))
    .pipe(gulp.dest("gstep_bangbang"))
})

// 发布的时候加md5
gulp.task("js", function() {
  return gulp.src("develop/**/*.js")
    .pipe(flatten())
    .pipe(gulp.dest("static/js"))
    // .pipe(rev())
    // .pipe(gulp.dest("static/js"))
    // .pipe(rev.manifest({
    //   merge: true,
    //   base: "static"
    // }))
    // .pipe(gulp.dest("static/js"))
})
gulp.task("jade", function() {
  return gulp.src("develop/**/*.jade")
    .pipe(flatten())
    .pipe(gulp.dest("views"))
})
gulp.task("image", function() {
  return gulp.src("develop/**/*.png")
    .pipe(flatten())
    .pipe(gulp.dest("static/img"))
})
gulp.task('templates', function() {
  gulp.src('develop/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'gstep.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('static/js'));
});
gulp.task("start", function() {
  gulp.watch("develop/**/*.html", ['html']);
  gulp.watch("develop/**/*.less", ['less']);
  
  gulp.watch("develop/**/*.js", ['js']);
  // gulp.watch("develop/**/*.jade", ['jade']);
  gulp.watch("develop/**/*.hbs", ['templates']);
  gulp.watch("develop/**/*.png", ['image']);
})
gulp.task("rev", function() {
  return gulp.src(["static/**/*.json", "gstep_bangbang/*.html"])
    .pipe(revCollector({
      replaceReved: true,
      dirReplacements: {
        'css': 'css',
        'js': 'js',
      }
    }))
    .pipe(gulp.dest('gstep_bangbang'))
})
gulp.task("default", ['html', 'less', 'js', 'templates', 'image'], function() {
  gulp.start('start');
})