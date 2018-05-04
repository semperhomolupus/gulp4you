"use strict";

// p = plugins, корневой объект нашей сборки для расширения области видимости
global.p = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(), //  Подключаем все плагины, начинающиеся с "gulp-".
  browserSync: require("browser-sync").create(),
  del: require("del"),

  paths: require("./gulp/config/paths.js"),
  tasks: require("./gulp/config/tasks.js")
};

p.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

p.gulp.task("default", p.gulp.series("build", "server"));
