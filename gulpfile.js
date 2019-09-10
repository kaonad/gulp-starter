const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css

function style() {
  //scss location
  return (
    gulp
      .src("./app/scss/**/*.scss")
      // pass that file through the compiler
      .pipe(sass().on("error", sass.logError))
      //output location
      .pipe(gulp.dest("./app/css"))
      //stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./app/"
    }
  });
  gulp.watch("./app/scss/**/*.scss", style);
  gulp.watch("./app/*.html").on("change", browserSync.reload);
  gulp.watch("./app/js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
