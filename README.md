<details><summary>Українська</summary><pre>

- Інструкція по запуску на Windows

Перед запуском проекту, якщо ви хочете запустити проект на своєму комп'ютері - ви повинні мати Node.js та PostgreSQL встановленим та активними.
Перш за все, необхідно клонувати репозиторій у зручну директорію.

- Ручна установка

Вам потрібно додати скопійоване посилання на підключення до бази даних до файлу .env в папці сервера як DATABASE_URL.
Потім введіть наступні команди з терміналу його каталогу, щоб запустити сервер:
```
npm install
npm run build
npm run start:prod
```

Для клієнта потрібно налаштувати SERVER_URL в .env. Якщо ви запускаєте сервер на своєму комп'ютері, він буде працювати за адресою ``http://localhost:3001``, в іншому випадку використовуйте посилання на сервер, що працює в хмарі.
Тепер, щоб запустити клієнт, потрібно ввести ці команди в папці клієнта:
```
npm install
npm run build:win
dist\ToDo-setup.exe
```
Готово! Програма відкрилася та працює належним чином.

- Автоматична установка

Для автоматичного встановлення просто запустіть файл setup.bat у кореневій папці та попередньо налаштуйте файли .env в обох папках.
</pre></details>

# How to build and deploy? (Windows)

Before starting the project, if you want to run the project on your computer, you must have Node and PostgreSQL installed and active.

First of all, you need to clone the project repository to a convenient directory.

## Manual installation

You need to add the copied database connection link to the .env file in the server folder as DATABASE_URL.

Then, enter the following commands from the terminal of its directory to run the server:
```
npm install
npm run build
npm run start:prod
```

For the client, you need to configure SERVER_URL in .env. If you run the server on your computer, it will work at ``http://localhost:3001``, otherwise, use the link to the server running in the cloud.

Now, to run the client, you need to enter these commands in the client folder:
```
npm install
npm run build:win
dist\ToDo-setup.exe
```
Done! The application has opened and is working properly.

## Automatic installation
For automatic installation, simply run the setup.bat file in the root folder, and configure the .env files in both folders beforehand.
