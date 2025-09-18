# Quiz de Relacionamento - GitHub Pages

Um quiz interativo e responsivo baseado no design original do Relatio, criado para ser hospedado no GitHub Pages e incorporado via iframe.

## 🚀 Como usar

### 1. Fazer fork ou baixar os arquivos
- Faça fork deste repositório ou baixe os arquivos
- Coloque no seu repositório GitHub
- Ative o GitHub Pages nas configurações do repositório

### 2. Incorporar no WordPress
```html
<iframe 
    src="https://seuusuario.github.io/nome-do-repositorio/" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border-radius: 10px;">
</iframe>
```

### 3. Personalizar o quiz
Edite o arquivo `config.js` para personalizar:

## ⚙️ Configurações Principais

### Links de Redirecionamento
```javascript
redirects: {
    // Para onde redirecionar após completar o quiz
    finish: "https://seusite.com/obrigado",
    
    // Opções de redirecionamento:
    // finish: "https://seusite.com/produto", 
    // finish: "mailto:contato@seusite.com?subject=Plano%20Personalizado",
    // finish: "https://wa.me/5511999999999?text=Olá,%20completei%20o%20quiz!",
    
    // Abrir em nova aba (true/false)
    openInNewTab: false
}
```

### Cores e Branding
```javascript
brand: {
    name: "Seu Negócio",
    colors: {
        primary: "#3a78e6",        // Cor principal
        secondary: "#d53090",      // Cor secundária  
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
}
```

### Personalizar Perguntas
Você pode alterar todas as perguntas e respostas no arquivo `config.js`:

```javascript
slide1: {
    title: "Sua pergunta personalizada aqui <span class='highlight'>destacada</span>",
    answers: [
        { text: "Opção 1", value: "opcao1" },
        { text: "Opção 2", value: "opcao2" }
    ]
}
```

## 📁 Estrutura de arquivos

```
quiz-relacionamento/
├── index.html          # Arquivo principal do quiz
├── config.js          # Configurações personalizáveis
├── README.md          # Este arquivo
└── assets/            # (opcional) Imagens personalizadas
    ├── logo.png
    └── backgrounds/
```

## 🎨 Recursos incluídos

- ✅ **Totalmente responsivo** - funciona em desktop e mobile
- ✅ **Animações suaves** - progress bar circular animado
- ✅ **Sistema de navegação** - botão voltar, barra de progresso
- ✅ **Validações** - email, campos obrigatórios
- ✅ **Depoimentos rotativos** - slider de testimonials
- ✅ **Fácil personalização** - via config.js
- ✅ **Performance otimizada** - carregamento rápido
- ✅ **SEO friendly** - estrutura semântica

## 🔧 Personalizações Avançadas

### Alterar número de slides
1. Modifique `totalSlides` no config.js
2. Adicione os novos slides no index.html
3. Atualize a lógica de navegação se necessário

### Integrar com seu sistema
No final do quiz, os dados ficam disponíveis no objeto `answers`:

```javascript
function finishQuiz() {
    console.log('Dados coletados:', answers);
    
    // Exemplo: enviar para sua API
    fetch('https://sua-api.com/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
    });
    
    // Redirecionar
    handleFinishQuiz();
}
```

### Adicionar Google Analytics
Adicione no `<head>` do index.html:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Responsividade

O quiz é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px) 
- Mobile (até 767px)

## 🛠️ Solução de problemas

### Quiz não carrega no WordPress
- Verifique se o GitHub Pages está ativo
- Teste a URL diretamente no navegador
- Alguns temas podem ter conflitos com iframes

### Botões não funcionam
- Verifique se não há erros no console do navegador
- Confirme que o config.js está sendo carregado corretamente

### Personalização não aparece
- Limpe o cache do navegador
- Verifique se as mudanças foram salvas no GitHub
- O GitHub Pages pode demorar alguns minutos para atualizar

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README primeiro
2. Teste em um navegador diferente
3. Verifique o console do navegador por erros
4. Confirme que todos os arquivos estão no repositório

## 🔄 Atualizações

Para atualizar o quiz:
1. Edite os arquivos no GitHub
2. Faça commit das mudanças  
3. Aguarde alguns minutos para o GitHub Pages atualizar
4. Teste a nova versão

---

**Versão:** 1.0  
**Compatibilidade:** Todos os navegadores modernos  
**Licença:** Uso livre para projetos pessoais e comerciais
