// Helper para carregar tokens de forma robusta
// Tenta múltiplas abordagens para garantir que funciona

let cachedTokens = null;

export async function getTokens() {
  if (cachedTokens) {
    return cachedTokens;
  }

  // Importar tokens do arquivo JS
  try {
    const tokens = await import('../../tokens/index.js');
    cachedTokens = tokens.default || tokens;
    return cachedTokens;
  } catch (error) {
    console.error('Erro ao carregar tokens:', error);
    // Retornar objeto vazio como último recurso
    return {};
  }
}

// Versão síncrona para uso em componentes React
export function getTokensSync() {
  if (cachedTokens) {
    return cachedTokens;
  }
  return null;
}

