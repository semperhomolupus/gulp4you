## Gulp multitool by Egor Dyachenko

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Современная сборка на Gulp 4.0

> Для работы сборки у вас должны быть глобально установлены `npm (last version)`, `node.js`, `gulp-cli`.

Поддерживается IE10+.

### Особенности сборки

* PUG
* SASS(SCSS)
* JS (Babel, Webpack, uglify)
* Минификация изображений
* Спрайты PNG (вставляем миксином SCSS)
* Спрайты SVG (вставляем миксином PUG)
* Обработка SVG

В сборке 2 глобальных таска - `gulp --dev` и `gulp --prod`. Главным образом, в первом нет минификации всего и вся и есть sourcemaps.

### Запуск

1.  `npm install` / `yarn install`
2.  `gulp`

### Команды

* `gulp --dev` - полная сборка проекта в рабочем режиме + сервер
* `gulp --prod` - сборка на продакшен, без сервера

### Документация по таскам

Общий принцип сборки: у нас есть корневой `gulpfile.js`, в котором подключаются плагины. Затем через цикл в него добавляются наши таски, список которых находится в `tasks.js`, а также объект с путями `paths.js`. Все это находится в объекте `p` с глобальной областью видимости.

Далее запускаются два таска - `build`, который просто прогоняет все основные задачи, собирая проект, и `server`, параллельно запускающий `watch` для наблюдения за изменением файлов и `reload` для моментальной перезагрузки страницы с помощью плагина `browserSync`.

#### JavaScript

В таске `js` используются `webpack` и `babel`.
<!--  Для автоматического форматирования при сохранении используется `prettier` (одноименный плагин для VS Code можно отключить). 

Для того, чтобы в VS Code при сохранении файла происходило автоматическое исправление в соответствии с настройками `eslint` и `prettier`, в параметрах необходимо отключить автоформатирование для javascript и добавить форматирование eslint, для этого можно использовать следующие параметры:

    "editor.formatOnSave": true, 
    "[javascript]": { 
    "editor.formatOnSave": false, 
    }, 
    "eslint.autoFixOnSave": true, 
    "eslint.alwaysShowStatus": true -->

#### PNG-Sprite

Спрайт подключается SCSS миксином из генерируемого файла `_png-sprite`.

#### SVG-Sprite

Спрайт подключается PUG миксином из копонента `svg-sprite`. И добавляется на страницу в шаблоне `src/pages/template/_layout.pug`, нужно разкоммитить строчку с подключением.

#### SASS (SCSS)

* Пакет `normalize.scss` подключается и вызыватся в `src/static/sass/_base.scss`.
* Переменные находятся в `src/static/sass/_variables.scss`, там можно настроить такие вещи, как шрифт, его размер, параметры медиа-запросов и т.д.
* Глобальные стили (свой `reset.css`) находятся в `src/static/sass/_global.scss`, желательно настроить под проект. Там же сразу `прижимается футер`.
* Стили для конкретного проекта в соответствии с его UI-китом находятся в `src/static/sass/_ui.scss`.

#### Add-Module

Добавляем компоненты одной командой `gulp add-module --name YourModuleName`.

#### FTP

Параметры для FTP прописываются в `paths.js`.

```
    host: "site.com" - хостинг
    user: "admin" - логин
    password: "123456" - пароль
    sitePath: "/htdocs" - путь на хостинге
```
После просто вводим в консоль `gulp ftp` и все само заливается на сервер.

Спасибо за ознакомление!