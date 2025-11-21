// Script para gerar tokens/index.ts a partir de tokens/index.json
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const jsonPath = join(rootDir, 'tokens', 'index.json');
const tsPath = join(rootDir, 'tokens', 'index.ts');

const data = JSON.parse(readFileSync(jsonPath, 'utf8'));

const tsContent = `// Tokens do Design System Interstellar
// Este arquivo é gerado automaticamente a partir de index.json
// Para atualizar, execute: npm run generate-tokens

export const tokens = ${JSON.stringify(data, null, 2)} as const;

export default tokens;
`;

writeFileSync(tsPath, tsContent, 'utf8');
console.log('✓ Arquivo tokens/index.ts criado com sucesso!');

