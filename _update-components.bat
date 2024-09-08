@echo off

echo ******************************************
echo ACTUALIZAR COMPONENTES
echo ******************************************
echo.
echo.

echo ******************************************
echo npm i typescript@5.0.4
echo ******************************************
call npm i typescript@5.0.4
echo.
echo.

echo ******************************************
echo npm i rxjs@7.4.0
echo ******************************************
call npm i rxjs@7.4.0
echo.
echo.

echo ******************************************
echo npm i native-run
echo ******************************************
call npm i native-run
echo.
echo.

echo ******************************************
echo npm i @capacitor/device
echo ******************************************
call npm i @capacitor/device
echo.
echo.

echo ******************************************
echo npm i @capacitor/camera
echo ******************************************
call npm i @capacitor/camera
echo.
echo.

echo ******************************************
echo npm i @capacitor/geolocation
echo ******************************************
call npm i @capacitor/geolocation
echo.
echo.

echo ******************************************
echo npm i @capacitor-community/barcode-scanner
echo ******************************************
call npm i @capacitor-community/barcode-scanner
echo.
echo.

echo ******************************************
echo npm i @capacitor-community/sqlite --save
echo ******************************************
call npm i @capacitor-community/sqlite --save
echo.
echo.

echo ******************************************
echo npm i @ionic/storage-angular
echo ******************************************
call npm i @ionic/storage-angular
echo.
echo.

echo ******************************************
echo npm i jsqr@latest --save
echo ******************************************
call npm i jsqr@latest --save
echo.
echo.

echo ******************************************
echo ng add @angular/material
echo ******************************************
call ng add @angular/material
echo.
echo.
