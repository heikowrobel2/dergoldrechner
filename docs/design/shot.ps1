# Viewport screenshots with headless Edge: .\shot.ps1 <url> <out.png> <width> <height>
param([string]$Url, [string]$Out, [int]$W = 1366, [int]$H = 768)
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$prof = Join-Path $env:TEMP "edge-shot-profile"
& $edge --headless=new --disable-gpu --no-first-run --user-data-dir="$prof" --hide-scrollbars --virtual-time-budget=6000 --force-device-scale-factor=1 --window-size="$W,$H" --screenshot="$Out" $Url 2>$null | Out-Null
Start-Sleep -Seconds 3
if (-not (Test-Path $Out)) { Write-Output "FEHLT: $Out" } else { Write-Output "ok: $Out" }
