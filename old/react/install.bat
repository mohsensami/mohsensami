@echo off
openfiles >nul 2>nul
if not %errorlevel%==0 (
    echo This script must be run as Administrator.
    echo Please right-click on this script and select 'Run as Administrator'.
    pause
    exit /b
)

where runflare >nul 2>nul
if %errorlevel%==0 (
    pip uninstall -y runflare >nul 2>nul
)

if "%1"=="" (
    set "version=latest"
) else (
    set "version=%1"
)

set "binaryName=runflare-windows-amd64.exe"
set "binarySaveName=runflare.exe"
set "downloadUrl=https://get.runflare.com/%version%/%binaryName%"
set "installPath=C:\Program Files\runflare"

if not exist "%installPath%" (
    mkdir "%installPath%"
)

echo Downloading runflare version %version%...
powershell -Command "Invoke-WebRequest -Uri '%downloadUrl%' -OutFile '%installPath%\%binarySaveName%'"

if not exist "%installPath%\%binarySaveName%" (
    echo Download failed. Please check the download URL or network connection.
    exit /b 1
)

for /f "tokens=* delims=" %%A in ('powershell -Command "[System.Environment]::GetEnvironmentVariable('PATH', 'Machine')"') do set "oldPath=%%A"

echo Adding %installPath% to PATH...
setx /M PATH "%oldPath%;%installPath%"

if not %errorlevel%==0 (
    echo Failed to update PATH.
)

"%installPath%\%binarySaveName%" version

if not %errorlevel%==0 (
    echo Failed to run "%installPath%\%binarySaveName%" version. Please check the installation or Submit Ticket on Runflare.com.
    exit /b 1
)

echo runflare version %version% has been installed at %installPath% and added to the PATH.
echo You may need to restart your terminal or system for changes to take effect.

echo.
echo To ensure that the changes take effect, please close this Command Prompt window and open a new one.
pause >nul
exit
