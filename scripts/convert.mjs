// Script simples para converter JSON para JS
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const jsonPath = join(rootDir, 'tokens', 'index.json');
const jsPath = join(rootDir, 'tokens', 'index.mjs');

const data = JSON.parse(readFileSync(jsonPath, 'utf8'));
const jsContent = `// Tokens do Design System Interstellar
// Este arquivo é gerado automaticamente a partir de index.json
// Para atualizar, execute: node scripts/convert.mjs

export default ${JSON.stringify(data, null, 2)};
`;

writeFileSync(jsPath, jsContent, 'utf8');
console.log('✓ Arquivo tokens/index.mjs criado com sucesso!');

