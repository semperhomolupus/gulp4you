module.exports = function() {
  plugins.gulp.task("img", function() {
    return plugins.gulp
      .src("src/img/*.{png,jpg,jpeg,gif}")
      .pipe(plugins.gp.cache(plugins.gp.tinypngNokey()))
      .pipe(plugins.gulp.dest("build/img"))
      .pipe(plugins.browserSync.reload({ stream: true }));
  });
};
