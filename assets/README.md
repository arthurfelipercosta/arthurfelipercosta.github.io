# Menu Hambúrguer para Site AsciiDoc

Este projeto implementa um menu hambúrguer moderno e responsivo para sites gerados com AsciiDoc, similar ao estilo mostrado nas imagens de referência.

## Estrutura de Arquivos

```
assets/
├── css/
│   └── custom.css          # Estilos do menu hambúrguer e sidebar
├── js/
│   └── hamburger-menu.js   # Funcionalidade JavaScript do menu
└── README.md               # Este arquivo
```

## Características do Menu

### Design
- **Botão hambúrguer**: Estilo arredondado com sombra, cor cinza escuro (#5C5C5C)
- **Sidebar**: Background escuro com gradiente, largura de 280px
- **Ícones**: Font Awesome para ícones de navegação
- **Responsivo**: Adapta-se a dispositivos móveis

### Funcionalidades
- **Toggle**: Clique no botão hambúrguer para abrir/fechar
- **Overlay**: Clique fora da sidebar para fechar
- **Teclado**: Tecla ESC para fechar
- **Touch**: Suporte a gestos de swipe em dispositivos móveis
- **Busca**: Campo de busca integrado na sidebar
- **Navegação**: Links âncora para seções da página

### Animações
- Transições suaves (0.3s ease)
- Animação do ícone hambúrguer quando ativo
- Efeitos hover nos itens de menu
- Loading spinner durante carregamento

## Como Usar

### 1. Estrutura HTML no AsciiDoc

```asciidoc
// Menu Hambúrguer e Sidebar
++++
<!-- Header com Menu Hambúrguer -->
<div class="header-container">
    <button id="hamburger-btn" class="hamburger-btn" aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
    </button>
</div>

<!-- Overlay para fechar sidebar -->
<div id="sidebar-overlay" class="sidebar-overlay"></div>

<!-- Sidebar -->
<nav id="sidebar" class="sidebar">
    <div class="sidebar-header">
        <h2 class="sidebar-title">Menu</h2>
    </div>
    
    <div class="sidebar-nav">
        <a href="#home" class="nav-item">
            <i class="fa fa-home"></i> Home
        </a>
        <a href="#about" class="nav-item">
            <i class="fa fa-user"></i> Sobre Mim
        </a>
        <!-- Mais itens de menu... -->
    </div>
</nav>

<!-- Conteúdo Principal -->
<div class="main-content">
++++
```

### 2. Configuração AsciiDoc

```asciidoc
:stylesheet: custom.css
:linkcss:
:copycss:
```

### 3. Inclusão do JavaScript

```asciidoc
++++
<script src="js/hamburger-menu.js"></script>
++++
```

## Personalização

### Cores
As cores principais podem ser alteradas no arquivo `custom.css`:

```css
/* Cores principais */
.hamburger-btn {
    background-color: #5C5C5C; /* Cor do botão */
}

.sidebar {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
}

.nav-item.active {
    background-color: #4CAF50; /* Cor de destaque */
}
```

### Itens de Menu
Adicione ou remova itens de menu editando a seção `sidebar-nav`:

```html
<a href="#secao" class="nav-item">
    <i class="fa fa-icone"></i> Nome do Item
</a>
```

### Ícones Font Awesome
Use qualquer ícone do Font Awesome:
- `fa-home` - Casa
- `fa-user` - Usuário
- `fa-folder` - Pasta
- `fa-graduation-cap` - Formatura
- `fa-book` - Livro
- `fa-envelope` - Email

## Workflow GitHub Actions

O workflow foi atualizado para:
1. Converter AsciiDoc para HTML
2. Copiar arquivos CSS e JS para o diretório de saída
3. Criar estrutura de diretórios necessária
4. Fazer commit e push das mudanças

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, mobile
- **AsciiDoc**: Compatível com AsciiDoctor
- **GitHub Pages**: Funciona perfeitamente com GitHub Actions

## Troubleshooting

### Menu não aparece
- Verifique se o CSS está sendo carregado
- Confirme que os arquivos estão no diretório correto
- Verifique o console do navegador para erros

### JavaScript não funciona
- Confirme que o arquivo JS está sendo carregado
- Verifique se não há erros no console
- Teste em diferentes navegadores

### Estilos não aplicados
- Verifique o caminho do CSS no AsciiDoc
- Confirme que `:copycss:` está definido
- Verifique se os arquivos foram copiados pelo workflow

## Próximos Passos

1. **Commit e Push**: Faça commit das mudanças e push para o repositório
2. **Verificar Build**: Monitore o GitHub Actions para garantir que o build foi bem-sucedido
3. **Testar Site**: Acesse o site no GitHub Pages para testar o menu
4. **Personalizar**: Ajuste cores, ícones e conteúdo conforme necessário

## Suporte

Para dúvidas ou problemas:
- Verifique os logs do GitHub Actions
- Teste localmente com AsciiDoctor
- Consulte a documentação do AsciiDoc
- Verifique a compatibilidade do navegador
