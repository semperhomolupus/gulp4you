## Gulp + Vue multitool by Egor Dyachenko

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Современная сборка на Gulp 4.0

> Для работы сборки у вас должны быть глобально установлены `node.js`, `gulp-cli`.

Поддерживается IE10+.

### Особенности сборки

* PUG
* SASS(SCSS)
* JS (Babel, Eslint, Prettier, uglify)
* Минификация изображений
* Спрайты PNG (вставляем миксином SCSS)
* Спрайты SVG (вставляем миксином PUG)
* Обработка SVG

### Запуск

1.  `npm install` / `yarn install`
2.  `gulp`

### Команды

* `gulp build` - собрать билд, выполнив все основные задачи в порядке очереди
* `gulp server` - запустить сервер с browserSync
* `gulp` - все сразу в порядке очереди

### Документация по таскам

Общий принцип сборки: у нас есть корневой `gulpfile.js`, в котором подключаются плагины. Затем через цикл в него добавляются наши таски, список которых находится в `tasks.js`, а также объект с путями `paths.js`. Все это находится в объекте `p` с глобальной областью видимости.

Далее запускаются два таска - `build`, который просто прогоняет все основные задачи, собирая проект, и `server`, параллельно запускающий `watch` для наблюдения за изменением файлов и `reload` для моментальной перезагрузки страницы с помощью плагина `browserSync`.

#### JavaScript

В таске `js` используются `babel` и `eslint` с настройками semistandard. Для автоматического форматирования при сохранении используется `prettier`. 
Протестировано в VS Code.

#### PNG-Sprite

Спрайт подключается SCSS миксином из генерируемого файла `_png-sprite`.

#### SVG-Sprite

Спрайт подключается PUG миксином из файла `_svg-sprite`. И добавляется на страницу в шаблоне `pug/template/_layout.pug`, нужно разкоммитить строчку с подключением.

#### SASS (SCSS)

* Пакет `normalize.scss` подключается и вызыватся в `templates/_base.scss`.
* Переменные находятся в `templates/_variables.scss`, там можно настроить такие вещи, как шрифт, его размер, параметры медиа-запросов и т.д.
* Глобальные стили (свой `reset.css`) находятся в `templates/_global.scss`, желательно настроить под проект. Там же сразу `прижимается футер`.
* Стили для конкретного проекта в соответствии с его UI-китом находятся в `templates/_ui.scss`.