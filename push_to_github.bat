@echo off
title Push Nairi Ventures to GitHub
set PATH=C:\Users\shubh\AppData\Local\Programs\Git\cmd;%PATH%
echo ========================================================
echo   NAIRI VENTURES - GITHUB SYNC & PUSH
echo ========================================================
echo.
echo Target Repository: https://github.com/quicktech-spec/nairi-ventures1.git
echo Branch: main
echo.
echo Launching git push...
echo (If prompted, your browser will open to authorize GitHub)
echo.
git push origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   [SUCCESS] Code pushed successfully to GitHub!
    echo   View online: https://github.com/quicktech-spec/nairi-ventures1
    echo ========================================================
) else (
    echo ========================================================
    echo   [NOTICE] Git push encountered an authentication step.
    echo   Please make sure you are logged into GitHub in your browser.
    echo ========================================================
)
echo.
pause
