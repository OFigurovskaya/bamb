# bamb

Пэт-проект просмотр фотографий на Vue 3

Деплой: https://ofigurovskaya.github.io/bamb/

Данные загружаются с https://jsonplaceholder.typicode.com/guide/ (бесплатный API для получения данных (фотографий)), может понадобиться впн.
Также наблюдаются проблемы с сайтом https://via.placeholder.com/, поэтому сами фотографии и их миниатюры представлены ссылками.

Функционал:

При загрузке страницы уходит запрос на сервер за списком фотографий
В таблице можно фильтровать фотографии по возрастанию и убыванию по следующим параметрам (при клике по соответствующему заголовку таблицы):
id
id альбома
При вводе номера альбома в строку "поиск" отправляется запрос на API с учетом введенных ID альбомов. Поддерживается также отпрака формы при нажатии кнопки Enter. Поддерживается множественный ввод через пробел. 
На поле ввода установлена валидация: в случае неверно введенных данных появляется сообщение об ошибке. При отсутствии номера в поле ввода запрашиваются все альбомы. 
Кнопка 'dark theme' позволяет переключаться со светлой темы на темную и обратно.
Список фотографий хранится в LocalStorage.
Шапка таблицы прилипает к верхней части блока и видна при прокрутке

Стек

Vue3, pinia, tailwindcss, vite

Установка

Для запуска на локальной машине необходимо: Установить npm зависимости: npm install Запустить из папки project - npm run build
