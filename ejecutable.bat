@echo off
@REM set /p carpeta_principal="Ingresa el nombre de la carpeta: "
@REM md "%carpeta_principal%"
@REM md "%carpeta_principal%\css"
@REM md "%carpeta_principal%\js"
@REM set "ruta_carpeta=%cd%\%carpeta_principal%"
@REM echo La carpeta %ruta_carpeta% y sus subcarpetas han sido creadas correctamente.
@REM echo  index > "%ruta_carpeta%\index.html"
@REM echo  estilos > "%ruta_carpeta%\css\estilos.scss"
@REM echo  javascript > "%ruta_carpeta%\js\app.js"

for /L %%i in (8,1,50) do (
    echo Este es el ciclo %%i
    md "Dia %%i"
    md "Dia %%i\css"
    md "Dia %%i\js"
    echo  index > "Dia %%i\index.html"
    echo  estilos > "Dia %%i\css\estilos.scss"
    echo  javascript > "Dia %%i\js\app.js"
)

pause