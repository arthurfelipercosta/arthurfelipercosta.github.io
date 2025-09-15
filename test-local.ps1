# Script PowerShell para testar localmente o menu hambúrguer
Write-Host "🔧 Testando implementação do menu hambúrguer..." -ForegroundColor Cyan

# Verificar se AsciiDoctor está instalado
try {
    $null = Get-Command asciidoctor -ErrorAction Stop
    Write-Host "✅ AsciiDoctor encontrado" -ForegroundColor Green
} catch {
    Write-Host "❌ AsciiDoctor não encontrado. Você precisa instalá-lo primeiro." -ForegroundColor Red
    Write-Host "Para instalar no Windows:" -ForegroundColor Yellow
    Write-Host "1. Instale Ruby: https://rubyinstaller.org/" -ForegroundColor Yellow
    Write-Host "2. Execute: gem install asciidoctor" -ForegroundColor Yellow
    exit 1
}

# Criar diretórios necessários
Write-Host "📁 Criando estrutura de diretórios..." -ForegroundColor Cyan
if (!(Test-Path "css")) { New-Item -ItemType Directory -Path "css" }
if (!(Test-Path "js")) { New-Item -ItemType Directory -Path "js" }

# Copiar arquivos CSS e JS
Write-Host "📋 Copiando arquivos de assets..." -ForegroundColor Cyan
if (Test-Path "assets\css") {
    Copy-Item -Path "assets\css\*" -Destination "css\" -Recurse -Force
    Write-Host "✅ CSS copiado" -ForegroundColor Green
} else {
    Write-Host "❌ Diretório assets\css não encontrado" -ForegroundColor Red
}

if (Test-Path "assets\js") {
    Copy-Item -Path "assets\js\*" -Destination "js\" -Recurse -Force
    Write-Host "✅ JavaScript copiado" -ForegroundColor Green
} else {
    Write-Host "❌ Diretório assets\js não encontrado" -ForegroundColor Red
}

# Converter AsciiDoc para HTML
Write-Host "🔄 Convertendo AsciiDoc para HTML..." -ForegroundColor Cyan
if (Test-Path "content\index.adoc") {
    asciidoctor -D . content\index.adoc
    Write-Host "✅ HTML gerado com sucesso" -ForegroundColor Green
} else {
    Write-Host "❌ Arquivo content\index.adoc não encontrado" -ForegroundColor Red
    exit 1
}

# Verificar arquivos gerados
Write-Host "📊 Verificando arquivos gerados..." -ForegroundColor Cyan
if (Test-Path "index.html") {
    Write-Host "✅ index.html criado" -ForegroundColor Green
    $size = (Get-Item "index.html").Length
    Write-Host "📏 Tamanho: $size bytes" -ForegroundColor Yellow
} else {
    Write-Host "❌ index.html não foi criado" -ForegroundColor Red
}

if (Test-Path "css") {
    Write-Host "✅ Diretório CSS existe" -ForegroundColor Green
    Get-ChildItem css
} else {
    Write-Host "❌ Diretório CSS não existe" -ForegroundColor Red
}

if (Test-Path "js") {
    Write-Host "✅ Diretório JS existe" -ForegroundColor Green
    Get-ChildItem js
} else {
    Write-Host "❌ Diretório JS não existe" -ForegroundColor Red
}

# Verificar se Font Awesome está incluído
Write-Host "🎨 Verificando Font Awesome..." -ForegroundColor Cyan
$htmlContent = Get-Content "index.html" -Raw
if ($htmlContent -match "font-awesome") {
    Write-Host "✅ Font Awesome incluído" -ForegroundColor Green
} else {
    Write-Host "⚠️  Font Awesome não encontrado no HTML" -ForegroundColor Yellow
}

# Verificar estrutura do menu
Write-Host "🍔 Verificando estrutura do menu..." -ForegroundColor Cyan
if ($htmlContent -match "hamburger-btn") {
    Write-Host "✅ Botão hambúrguer encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ Botão hambúrguer não encontrado" -ForegroundColor Red
}

if ($htmlContent -match "sidebar") {
    Write-Host "✅ Sidebar encontrada" -ForegroundColor Green
} else {
    Write-Host "❌ Sidebar não encontrada" -ForegroundColor Red
}

if ($htmlContent -match "hamburger-menu.js") {
    Write-Host "✅ JavaScript do menu incluído" -ForegroundColor Green
} else {
    Write-Host "❌ JavaScript do menu não encontrado" -ForegroundColor Red
}

Write-Host ""
Write-Host "🎉 Teste concluído!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Abra index.html no navegador para testar o menu" -ForegroundColor White
Write-Host "2. Verifique se o menu hambúrguer funciona" -ForegroundColor White
Write-Host "3. Teste a responsividade em diferentes tamanhos de tela" -ForegroundColor White
Write-Host "4. Faça commit e push das mudanças para o GitHub" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Para testar online:" -ForegroundColor Cyan
Write-Host "   Após o push, acesse: https://arthurfelipercosta.github.io" -ForegroundColor White
