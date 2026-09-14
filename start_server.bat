@echo off
echo Starting Nairi Ventures server at http://localhost:3300 ...
start "" "http://localhost:3300/sites.html"
node "%~dp0serve.js"
pause
