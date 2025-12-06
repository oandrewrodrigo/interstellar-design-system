# Interstellar Design System

Sistema de design completo com tokens e componentes React documentados no Storybook.

## 📦 Instalação

```bash
npm install interstellar-design-system
```

## ⚙️ Pré-requisitos

O design system requer as seguintes dependências no seu projeto:

```bash
npm install react react-dom lucide-react
```

**Importante:** Estas dependências são **peer dependencies**, ou seja, não são instaladas automaticamente. Você precisa instalá-las no seu projeto.

## 🚀 Uso Rápido

### 1. Importar componentes

```javascript
import { Button, Input, Dropdown, Icon } from 'interstellar-design-system';
import 'interstellar-design-system/styles'; // Importar estilos CSS
```

### 2. Configurar Tailwind CSS

O design system usa Tailwind CSS. Você precisa configurar o Tailwind no seu projeto para usar os tokens.

Crie ou atualize seu `tailwind.config.js`:

```javascript
const fs = require('fs');
const path = require('path');

// Ler tokens do design system
const tokensPath = path.join(
  __dirname,
  'node_modules/interstellar-design-system/tokens/index.json'
);
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

// Função helper para extrair valores
const getTokenValue = (token) => token.$value || token;

// Converter cores para formato Tailwind
const colors = {};
Object.entries(tokens.colors || {}).forEach(([paletteName, palette]) => {
  colors[paletteName.toLowerCase()] = {};
  Object.entries(palette).forEach(([shade, token]) => {
    colors[paletteName.toLowerCase()][shade] = getTokenValue(token);
  });
});

// Converter spacing
const spacing = {};
Object.entries(tokens.spacing || {}).forEach(([key, token]) => {
  const name = key.replace('spacing-', '');
  spacing[name] = `${getTokenValue(token)}px`;
});

// Converter border-radius
const borderRadius = {};
Object.entries(tokens['border-radius'] || {}).forEach(([key, token]) => {
  const name = key.replace('radius-', '');
  borderRadius[name] = `${getTokenValue(token)}px`;
});

module.exports = {
  content: ['./src/**/*.{js,jsx}', './node_modules/interstellar-design-system/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        primary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### 3. Importar fonte Inter

Adicione a fonte Inter no seu HTML ou CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### 4. Exemplo de uso

```jsx
import React from 'react';
import { Button, Input, ChatMessage } from 'interstellar-design-system';
import 'interstellar-design-system/styles';

function App() {
  return (
    <div className="p-4">
      <Button size="md" color="brand" hierarchy="primary">
        Clique aqui
      </Button>

      <Input label="Email" placeholder="seu@email.com" leftIcon="Mail" />

      <ChatMessage type="sender" messageType="text" text="Olá!" time="11:25" status="read" />
    </div>
  );
}
```

## 📚 Componentes Disponíveis

### Componentes Básicos

- **Button** - Botão com múltiplas variações
- **Input** - Campo de entrada de texto
- **Textarea** - Área de texto
- **Checkbox** - Caixa de seleção
- **Radio** - Botão de opção
- **Dropdown** - Menu suspenso
- **DropdownAccount** - Menu de conta
- **Notification** - Notificação/Alert
- **Icon** - Ícones Lucide

### Componentes de Chat

- **ChatMessage** - Mensagem do chat
- **ChatInput** - Input para chat
- **ChatTopNav** - Barra superior do chat
- **ChatItem** - Item da lista de conversas
- **ChatStatus** - Status de mensagem
- **ChatReaction** - Reação a mensagem
- **ChatTimeIndicator** - Indicador de data/hora

## 🎨 Tokens

Os tokens podem ser importados diretamente:

```javascript
// ES Modules
import tokens from 'interstellar-design-system/tokens';

// CommonJS
const tokens = require('interstellar-design-system/tokens');
```

### Tokens Disponíveis

- **colors** - Paletas de cores (Gray, Brand, Destructive, Success, Warning, etc.)
- **spacing** - Espaçamentos (4xs até 6xl)
- **border-radius** - Raios de borda (none até full)
- **size** - Tamanhos de componentes
- **size-icon** - Tamanhos de ícones
- **typography** - Tipografia (Display, Heading, Text, Paragraph, Label)

## 📖 Documentação Completa

Para ver toda a documentação dos componentes e tokens, você pode:

1. **Ver online** (se publicado): Acesse a documentação do Storybook
2. **Executar localmente**:

```bash
git clone https://github.com/seu-usuario/interstellar-design-system.git
cd interstellar-design-system
npm install
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`

## 🛠️ Desenvolvimento

### Build da biblioteca

```bash
npm run build
```

Isso gerará os arquivos em `dist/` prontos para distribuição.

### Executar Storybook

```bash
npm run storybook
# ou
npm run dev
```

## 📝 Licença

MIT

## 🔗 Links

- [Documentação](https://github.com/seu-usuario/interstellar-design-system)
- [Issues](https://github.com/seu-usuario/interstellar-design-system/issues)

# interstellardesignsystemv1
