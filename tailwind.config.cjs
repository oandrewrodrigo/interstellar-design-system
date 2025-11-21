/** @type {import('tailwindcss').Config} */
// Versão CommonJS do Tailwind config para garantir compatibilidade
const fs = require('fs');
const path = require('path');

// Ler tokens do JSON
let tokens;
try {
  const tokensPath = path.join(__dirname, 'tokens', 'index.json');
  tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
} catch (error) {
  console.error('Erro ao carregar tokens:', error);
  // Fallback para objeto vazio
  tokens = { colors: {}, spacing: {}, 'border-radius': {}, size: {}, 'size-icon': {}, 'font-family': {} };
}

// Função helper para extrair valores dos tokens
const getTokenValue = (token) => token.$value || token;

// Converter cores para formato Tailwind
const colors = {};
Object.entries(tokens.colors || {}).forEach(([paletteName, palette]) => {
  colors[paletteName.toLowerCase()] = {};
  Object.entries(palette).forEach(([shade, token]) => {
    colors[paletteName.toLowerCase()][shade] = getTokenValue(token);
  });
});

// Converter spacing para formato Tailwind
const spacing = {};
Object.entries(tokens.spacing || {}).forEach(([key, token]) => {
  const name = key.replace('spacing-', '');
  spacing[name] = `${getTokenValue(token)}px`;
});

// Converter border-radius para formato Tailwind
const borderRadius = {};
Object.entries(tokens['border-radius'] || {}).forEach(([key, token]) => {
  const name = key.replace('radius-', '');
  borderRadius[name] = `${getTokenValue(token)}px`;
});

// Converter sizes para formato Tailwind
const sizes = {};
Object.entries(tokens.size || {}).forEach(([key, token]) => {
  const name = key.replace('size-', '');
  sizes[name] = `${getTokenValue(token)}px`;
});

Object.entries(tokens['size-icon'] || {}).forEach(([key, token]) => {
  const name = key.replace('size-icon-', 'icon-');
  sizes[name] = `${getTokenValue(token)}px`;
});

module.exports = {
  content: [
    './stories/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      borderRadius,
      width: sizes,
      height: sizes,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        primary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

