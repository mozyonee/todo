@echo off

cd ./client

cls
echo Installing client dependencies...
call npm install

cls
echo Building client...
call npm run build:win

cd ../server

cls
echo Installing server dependencies...
call npm install

cls
echo Building server...
call npm run build

cls
echo Running server in a new terminal...
start cmd /k npm run start:prod

cd ../client/dist

cls
echo Running executable...
timeout /t 5 /nobreak
call ToDo-setup.exe

cd ../..

pause