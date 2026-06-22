@echo off
cd /d %~dp0..\..\backend
cargo run -p api-gateway
