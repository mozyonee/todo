<details>
    <summary>Українська</summary>
    <pre>
Інструкція по запуску

Перш за все, проект необхідно клонувати репозиторій у зручну директорію.

Перед запуском проекту, якщо ви хочете запустити проект на своєму комп'ютері, без використання хмар - ви маєте мати PostgreSQL встановленим та запущеним.
Далі, скопійовану для підключення до бази даних потрібно додати у .env файл сервера.
Для запуску сервера, у терміналі його папки потрібно ввести наступні команди:
```
npm install
npm run build
npm run start:prod
```

Далі - клієнт. Для нього також треба налаштувати SERVER_URL у .env. Якщо ви запускаєте сервер на своєму комп'ютері - він запуститься на ```http://localhost:3000```, інакше - посилання до сервера, запущеного у хмарі.
Тепер, для запуску проекта так само потрібно ввести ці команди з папки клієнта:
```
npm install
npm run build:win
dist\ToDo-setup.exe
```
Готово! Програма відкрилася та працює належним чином.
    </pre>
</details>

# How to build and deploy?

First of all, you need to clone the project repository to a convenient directory.

Before launching the project, if you want to run the database on your own computer, without using the cloud, you must have PostgreSQL installed and running.
Then you need to add the copied database connection link to the .env file in the server folder.
To run the server, enter the following commands from the terminal of its directory:
```
npm install
npm run build
npm run start:prod
```

Next is the client. For it, you need to configure SERVER_URL in .env. If you run the server on your computer, it will work at ``http://localhost:3001``, otherwise, use the link to the server running in the cloud.
Now, to run the client, you need to enter these commands in the client folder:
```
npm install
npm run build:win
dist\ToDo-setup.exe
```
Done! The application has opened and is working properly.
