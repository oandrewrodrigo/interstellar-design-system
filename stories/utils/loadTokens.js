// Helper para carregar tokens de forma robusta
// Tenta diferentes métodos de importação

let tokensCache = null;

export async function loadTokens() {
  if (tokensCache) {
    return tokensCache;
  }

  try {
    // Tentar importação estática
    const tokens = await import('../../tokens/index.js');
    tokensCache = tokens.default || tokens;
    return tokensCache;
  } catch (error) {
    console.error('Erro ao carregar tokens:', error);
    // Retornar objeto vazio como fallback
    return {};
  }
}

// Exportar também uma versão síncrona se possível
export function getTokensSync() {
  if (tokensCache) {
    return tokensCache;
  }
  
  try {
    // Tentar require (Node.js) - apenas para compatibilidade
    if (typeof require !== 'undefined') {
      // Nota: require não funciona bem com ESM, mas mantemos para compatibilidade
      tokensCache = require('../../tokens/index.js');
      return tokensCache;
    }
  } catch (e) {
    // Ignorar erro
  }
  
  return null;
}

