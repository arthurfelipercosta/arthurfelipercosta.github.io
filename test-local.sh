#!/bin/bash

# Script para testar localmente o menu hambúrguer
echo "🔧 Testando implementação do menu hambúrguer..."

# Verificar se AsciiDoctor está instalado
if ! command -v asciidoctor &> /dev/null; then
    echo "❌ AsciiDoctor não encontrado. Instalando..."
    
    # Para Ubuntu/Debian
    if command -v apt-get &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y asciidoctor
    # Para macOS
    elif command -v brew &> /dev/null; then
        brew install asciidoctor
    else
        echo "❌ Sistema não suportado. Instale AsciiDoctor manualmente."
        exit 1
    fi
fi

# Criar diretórios necessários
echo "📁 Criando estrutura de diretórios..."
mkdir -p css js

# Copiar arquivos CSS e JS
echo "📋 Copiando arquivos de assets..."
if [ -d "assets/css" ]; then
    cp -r assets/css/* css/
    echo "✅ CSS copiado"
else
    echo "❌ Diretório assets/css não encontrado"
fi

if [ -d "assets/js" ]; then
    cp -r assets/js/* js/
    echo "✅ JavaScript copiado"
else
    echo "❌ Diretório assets/js não encontrado"
fi

# Converter AsciiDoc para HTML
echo "🔄 Convertendo AsciiDoc para HTML..."
if [ -f "content/index.adoc" ]; then
    asciidoctor -D . content/index.adoc
    echo "✅ HTML gerado com sucesso"
else
    echo "❌ Arquivo content/index.adoc não encontrado"
    exit 1
fi

# Verificar arquivos gerados
echo "📊 Verificando arquivos gerados..."
if [ -f "index.html" ]; then
    echo "✅ index.html criado"
    echo "📏 Tamanho: $(wc -c < index.html) bytes"
else
    echo "❌ index.html não foi criado"
fi

if [ -d "css" ]; then
    echo "✅ Diretório CSS existe"
    ls -la css/
else
    echo "❌ Diretório CSS não existe"
fi

if [ -d "js" ]; then
    echo "✅ Diretório JS existe"
    ls -la js/
else
    echo "❌ Diretório JS não existe"
fi

# Verificar se Font Awesome está incluído
echo "🎨 Verificando Font Awesome..."
if grep -q "font-awesome" index.html; then
    echo "✅ Font Awesome incluído"
else
    echo "⚠️  Font Awesome não encontrado no HTML"
fi

# Verificar estrutura do menu
echo "🍔 Verificando estrutura do menu..."
if grep -q "hamburger-btn" index.html; then
    echo "✅ Botão hambúrguer encontrado"
else
    echo "❌ Botão hambúrguer não encontrado"
fi

if grep -q "sidebar" index.html; then
    echo "✅ Sidebar encontrada"
else
    echo "❌ Sidebar não encontrada"
fi

if grep -q "hamburger-menu.js" index.html; then
    echo "✅ JavaScript do menu incluído"
else
    echo "❌ JavaScript do menu não encontrado"
fi

echo ""
echo "🎉 Teste concluído!"
echo ""
echo "📋 Próximos passos:"
echo "1. Abra index.html no navegador para testar o menu"
echo "2. Verifique se o menu hambúrguer funciona"
echo "3. Teste a responsividade em diferentes tamanhos de tela"
echo "4. Faça commit e push das mudanças para o GitHub"
echo ""
echo "🌐 Para testar online:"
echo "   Após o push, acesse: https://arthurfelipercosta.github.io"
