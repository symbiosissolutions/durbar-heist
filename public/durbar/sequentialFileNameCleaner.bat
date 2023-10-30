:sequentialFileNameCleaner  [/R]  [D:\Extras\GithubRepos\Symbiosis-Plays\durbar-game\public\durbar]
setlocal enabledelayedexpansion
for %%a in (*.jpg) do (
set f=%%a
set f=!f:^(=!
set f=!f:^)=!
ren "%%a" "!f!"
)
@echo off
setlocal disableDelayedExpansion
if /i "%~1"=="/R" (
  set "forOption=%~1 %2"
  set "inPath="
) else (
  set "forOption="
  if "%~1" neq "" (set "inPath=%~1\") else set "inPath="
)
for %forOption% %%F in ("%inPath%* *") do (
  if /i "%~f0" neq "%%~fF" (
    set "folder=%%~dpF"
    set "file=%%~nxF"
    setlocal enableDelayedExpansion
    echo ren "!folder!!file!" "!file: =!"
    ren "!folder!!file!" "!file: =!"
    endlocal
  )

)