# Convite de Casamento - Website

Website estático para convite de casamento, pronto para ser hospedado no GitHub Pages.

## Estrutura do Projeto

```
convite_casamento/
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e design
├── script.js           # Funcionalidades JavaScript (countdown, etc)
├── images/
│   ├── hero-photo.jpg  # ADICIONE SUA FOTO PRINCIPAL AQUI
│   └── examples/       # Fotos de referência
└── README.md
```

## Como Personalizar

### 1. Adicionar Foto Principal

Adicione sua foto de casal como `images/hero-photo.jpg`. A foto será usada como imagem de fundo da seção hero.

### 2. Atualizar Informações no HTML (`index.html`)

Substitua os seguintes placeholders:

- `[Noiva]` - Nome da noiva
- `[Noivo]` - Nome do noivo
- `[Nome da Igreja/Local]` - Local da cerimônia
- `[DD]` - Dia do casamento
- `[MÊS]` - Mês do casamento (ex: DEZ, JAN)
- `[00:00]` - Horário dos eventos
- `[Endereço completo]` - Endereços dos locais
- `[Nome do Local da Festa]` - Nome do local da celebração

### 3. Configurar Data do Casamento (`script.js`)

No arquivo `script.js`, atualize a linha 2:

```javascript
const weddingDate = new Date('2025-12-31T18:00:00').getTime();
```

Altere para a data e hora real do seu casamento no formato: `YYYY-MM-DDTHH:MM:SS`

### 4. Adicionar Localizações no Mapa (`script.js`)

No arquivo `script.js`, atualize as linhas 5-8:

```javascript
const locations = {
    ceremony: 'https://maps.google.com/?q=[Endereço da Cerimônia]',
    celebration: 'https://maps.google.com/?q=[Endereço da Celebração]'
};
```

Você pode:
- Usar o formato: `https://maps.google.com/?q=Endereço+Completo`
- Ou copiar o link de compartilhamento do Google Maps diretamente

### 5. Convites Personalizados (Opcional)

Você pode enviar links personalizados para cada convidado adicionando o parâmetro `?nome=` na URL:

**Exemplos:**
- `https://seu-site.github.io/?nome=João` → "João, você está convidado!"
- `https://seu-site.github.io/?nome=Maria Silva` → "Maria Silva, você está convidado!"
- `https://seu-site.github.io/?nome=Família Santos` → "Família Santos, você está convidado!"

**Dica:** Use `%20` ou `+` para espaços na URL, ou deixe o navegador codificar automaticamente.

Sem o parâmetro, o site mostra: "Você está convidado!"

### 6. Personalizar Cores (Opcional)

No arquivo `style.css`, altere as cores na seção `:root` (linhas 8-13):

```css
:root {
    --primary-color: #8b9a8b;  /* Cor principal (verde sálvia) */
    --text-dark: #333;
    --text-light: #666;
    --background-light: #f5f5f5;
    --white: #ffffff;
}
```

## Testar Localmente

Para testar o site no seu computador:

1. Abra o arquivo `index.html` em um navegador web
2. Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000

   # Acesse: http://localhost:8000
   ```

## Deploy no GitHub Pages

### Opção 1: Usando a Interface do GitHub

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos (index.html, style.css, script.js, images/)
3. Vá em Settings > Pages
4. Em "Source", selecione "main" branch e pasta "/ (root)"
5. Clique em "Save"
6. Aguarde alguns minutos e seu site estará disponível em: `https://seu-usuario.github.io/nome-do-repositorio/`

### Opção 2: Usando Git

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Wedding invitation website"

# Adicionar repositório remoto
git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git

# Enviar para GitHub
git branch -M main
git push -u origin main

# Ativar GitHub Pages via Settings > Pages
```

## Funcionalidades

- ✅ Design responsivo (mobile-friendly)
- ✅ Contador regressivo em tempo real
- ✅ Convites personalizados via URL (adicione ?nome=NomeConvidado)
- ✅ Botão para adicionar ao Google Calendar
- ✅ Links para localização no Google Maps
- ✅ Animações suaves ao rolar a página
- ✅ Seções: Hero, Convite, Cerimônia, Celebração, Dress Code, Confirmação

## Customizações Futuras

Ideias para expandir o site:

- Adicionar galeria de fotos
- Integrar formulário de RSVP com backend (Formspree, Google Forms)
- Adicionar música de fundo
- Criar versão em múltiplos idiomas

## Suporte

Se precisar de ajuda para personalizar ou fazer deploy, consulte a documentação do GitHub Pages:
https://docs.github.com/pt/pages
