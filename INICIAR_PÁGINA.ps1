# Lista de scripts a ejecutar en nuevas ventanas de PowerShell
$scripts = @(
    ".\scripts_inicio\iniciar_clima.ps1",
    ".\scripts_inicio\iniciar_zip.ps1",
    ".\scripts_inicio\iniciar_movies.ps1",
    ".\scripts_inicio\iniciar_empleados.ps1",
    ".\scripts_inicio\iniciar_angular.ps1"	
)


# Función para ejecutar un script en una nueva ventana de PowerShell
function Start-NewPowerShellWindow {
    param (
        [string]$scriptPath
    )

    Start-Process powershell -ArgumentList "-NoExit -File `"$scriptPath`"" -WindowStyle Minimized
}

# Ejecutar cada script en una nueva ventana de PowerShell
foreach ($script in $scripts) {
    Start-NewPowerShellWindow -scriptPath $script
}