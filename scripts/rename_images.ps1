$ErrorActionPreference='Stop'

# Rename home image
Rename-Item -LiteralPath 'assets\images\home\5884088243744082818.jpg' -NewName 'home-hero.jpg' -Force

# Rename proof images sequentially
$i = 1
Get-ChildItem -File 'assets\images\proof' | Sort-Object Name | ForEach-Object {
    Rename-Item $_.FullName -NewName ("proof-{0:D2}.jpg" -f $i)
    $i = $i + 1
}

# Rename testimonial images sequentially
$j = 1
Get-ChildItem -File 'assets\images\testimonials' | Sort-Object Name | ForEach-Object {
    Rename-Item $_.FullName -NewName ("testi-{0:D2}.jpg" -f $j)
    $j = $j + 1
}

# List renamed files
Get-ChildItem assets\images -Recurse | Select-Object FullName
