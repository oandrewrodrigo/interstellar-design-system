// Script CommonJS para converter JSON para JS puro
const fs = require('fs');
const path = require('path');

// Usar process.cwd() para garantir que funciona independente de onde o script é executado
// O script deve ser executado da raiz do projeto
const projectRoot = process.cwd();
const jsonPath = path.join(projectRoot, 'tokens', 'index.json');
const jsPath = path.join(projectRoot, 'tokens', 'index.js');

console.log('Lendo tokens/index.json...');
const jsonContent = fs.readFileSync(jsonPath, 'utf8');
const tokens = JSON.parse(jsonContent);

console.log('Convertendo para JavaScript puro...');
const jsContent = `// Tokens do Design System Interstellar
// Este arquivo é gerado automaticamente a partir de index.json
// Para atualizar, execute: node scripts/build-tokens.cjs
// NÃO edite este arquivo manualmente

const tokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;
`;

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('✓ Arquivo tokens/index.js criado com sucesso!');

