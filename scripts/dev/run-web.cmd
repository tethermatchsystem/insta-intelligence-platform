@echo off
cd /d %~dp0..\..
npm run dev --workspace apps/web
