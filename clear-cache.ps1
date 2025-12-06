# Script para limpar cache do Storybook no Windows
Write-Host "Parando processos Node.js e Storybook..." -ForegroundColor Yellow

# Parar processos Node
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Limpar cache
Write-Host "Limpando cache..." -ForegroundColor Yellow

if (Test-Path ".\node_modules\.cache") {
    Remove-Item -Path ".\node_modules\.cache" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Cache do node_modules limpo!" -ForegroundColor Green
}

if (Test-Path ".\.storybook\.cache") {
    Remove-Item -Path ".\.storybook\.cache" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "Cache do Storybook limpo!" -ForegroundColor Green
}

Write-Host "Cache limpo com sucesso! Agora você pode executar: npm run storybook" -ForegroundColor Green

