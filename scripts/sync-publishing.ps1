# Re-sync publishing/ from sibling postiz-fork (excludes node_modules/.git/dist/.next)
param(
  [string]$Source = (Join-Path (Split-Path $PSScriptRoot -Parent | Split-Path -Parent) "postiz-fork"),
  [string]$Dest = (Join-Path (Split-Path $PSScriptRoot -Parent) "publishing")
)
if (-not (Test-Path $Source)) {
  Write-Error "Source not found: $Source"
  exit 1
}
New-Item -ItemType Directory -Force -Path $Dest | Out-Null
robocopy $Source $Dest /E /XD node_modules .git .next dist coverage .turbo reports .claude .cursor .devcontainer /NFL /NDL /NJH /NJS /nc /ns /np
if ($LASTEXITCODE -ge 8) { exit $LASTEXITCODE }
Write-Host "Synced $Source -> $Dest"
exit 0
