# Lista de Personalizações Necessárias

## ✅ Checklist de Personalização

### 1. Foto Principal
- [ ] Adicionar foto do casal em `images/hero-photo.jpg`

### 2. Informações no HTML (index.html)

#### Nomes
- [ ] Substituir `[Noiva]` pelo nome da noiva (aparece 3 vezes)
- [ ] Substituir `[Noivo]` pelo nome do noivo (aparece 3 vezes)

#### Cerimônia
- [ ] `[Nome da Igreja/Local]` - Nome do local da cerimônia
- [ ] `[DD]` - Dia da cerimônia
- [ ] `[MÊS]` - Mês da cerimônia (ex: DEZ, JAN, FEV)
- [ ] `[00:00]` - Horário da cerimônia
- [ ] `[Endereço completo]` - Endereço completo da cerimônia

#### Celebração/Festa
- [ ] `[Nome do Local da Festa]` - Nome do local da festa
- [ ] `[DD]` - Dia da festa
- [ ] `[MÊS]` - Mês da festa
- [ ] `[00:00]` - Horário da festa
- [ ] `[Endereço completo]` - Endereço completo da festa

#### Dress Code
- [ ] Revisar se "Traje Social" está correto, ou mudar para "Passeio", "Esporte Fino", etc.

### 3. Data do Casamento (script.js)

- [ ] Linha 2: Atualizar `const weddingDate = new Date('2025-12-31T18:00:00').getTime();`
  - Formato: `YYYY-MM-DDTHH:MM:SS`
  - Exemplo: `2025-06-15T18:00:00` para 15 de junho de 2025 às 18:00

### 4. Links do Google Maps (script.js)

- [ ] Linhas 5-8: Atualizar URLs do Google Maps
  - Opção 1: `https://maps.google.com/?q=Rua+Exemplo+123+Cidade+Estado`
  - Opção 2: Copiar link direto do Google Maps

### 5. Meta Tag no HTML (Opcional, mas recomendado)

- [ ] Atualizar o `<title>` na linha 6 do index.html

## Dicas

1. **Para pegar link do Google Maps:**
   - Abra o Google Maps
   - Busque o endereço
   - Clique em "Compartilhar"
   - Copie o link

2. **Formato de data no JavaScript:**
   - Use sempre o formato ISO: `YYYY-MM-DDTHH:MM:SS`
   - Exemplo: 25 de março de 2025 às 19:30 = `2025-03-25T19:30:00`

3. **Testar localmente:**
   - Abra o arquivo `index.html` no navegador
   - Ou use: `python3 -m http.server 8000` e acesse `http://localhost:8000`

4. **Foto do casal:**
   - Formato recomendado: JPG ou PNG
   - Tamanho recomendado: pelo menos 1920x1080 pixels
   - Orientação: landscape (horizontal) funciona melhor

## Observações sobre Português

Algumas expressões mantidas em espanhol no template que você pode querer revisar:
- "¡Você está convidado!" → Pode mudar para "Você está convidado!"
- "¡Falta pouco!" → Pode mudar para "Falta pouco!"
- "¡Vista seu melhor look!" → Pode mudar para "Vista seu melhor look!" ou "Use seu melhor visual!"
- "¡Esperamos que você esteja lá!" → Pode mudar para "Esperamos que você esteja lá!"
- "¡O grande dia chegou!" → Pode mudar para "O grande dia chegou!"
