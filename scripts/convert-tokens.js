// Script para converter tokens/index.json para tokens/index.mjs
// Este script lê o JSON e cria um arquivo JavaScript puro

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonPath = join(__dirname, '../tokens/index.json');
const jsPath = join(__dirname, '../tokens/index.mjs');

try {
  console.log('Lendo tokens/index.json...');
  const jsonContent = readFileSync(jsonPath, 'utf8');
  const tokens = JSON.parse(jsonContent);

  console.log('Convertendo para JavaScript...');
  const jsContent = `// Tokens do Design System Interstellar
// Este arquivo é gerado automaticamente a partir de index.json
// Para atualizar, execute: node scripts/convert-tokens.js

export default ${JSON.stringify(tokens, null, 2)};
`;

  writeFileSync(jsPath, jsContent, 'utf8');
  console.log('✓ Arquivo tokens/index.mjs criado com sucesso!');
} catch (error) {
  console.error('Erro ao converter tokens:', error);
  process.exit(1);
}
