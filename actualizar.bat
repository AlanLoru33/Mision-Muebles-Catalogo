@echo off
title Actualizador Mision Mueble - Alan Loru
echo ---------------------------------------------------
echo INICIANDO ACTUALIZACION DEL CATALOGO...
echo ---------------------------------------------------

:: Paso 1: Agregar cambios al area de preparacion
git add .
echo [+] Archivos preparados...

:: Paso 2: Crear el punto de restauracion (Commit)
git commit -m "Actualizacion de catalogo y correccion de mapa"
echo [+] Cambios registrados localmente...

:: Paso 3: Subir al repositorio forzando para evitar conflictos
echo [+] Subiendo a GitHub (Main)...
git push origin main --force

:: Paso 4: Publicar los cambios en la web (GitHub Pages)
echo [+] Publicando cambios en la web del cliente...
npm run deploy

echo ---------------------------------------------------
echo ¡PROCESO FINALIZADO CON EXITO!
echo La web de Ema Cabanas ya esta actualizada.
echo ---------------------------------------------------
pause