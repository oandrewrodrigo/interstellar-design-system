// Fallback helper com dados hardcoded dos tokens
// Usado apenas se a importação do JSON falhar

export const tokensFallback = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "border-radius": {
    "radius-full": { "$type": "number", "$value": 9999 },
    "radius-4xl": { "$type": "number", "$value": 64 },
    "radius-3xl": { "$type": "number", "$value": 48 },
    "radius-2xl": { "$type": "number", "$value": 32 },
    "radius-xl": { "$type": "number", "$value": 24 },
    "radius-lg": { "$type": "number", "$value": 16 },
    "radius-md": { "$type": "number", "$value": 8 },
    "radius-sm": { "$type": "number", "$value": 6 },
    "radius-xs": { "$type": "number", "$value": 4 },
    "radius-2xs": { "$type": "number", "$value": 2 },
    "radius-3xs": { "$type": "number", "$value": 1 },
    "radius-none": { "$type": "number", "$value": 0 }
  },
  "spacing": {
    "spacing-6xl": { "$type": "number", "$value": 80 },
    "spacing-5xl": { "$type": "number", "$value": 64 },
    "spacing-4xl": { "$type": "number", "$value": 48 },
    "spacing-3xl": { "$type": "number", "$value": 40 },
    "spacing-2xl": { "$type": "number", "$value": 32 },
    "spacing-xl": { "$type": "number", "$value": 24 },
    "spacing-lg": { "$type": "number", "$value": 20 },
    "spacing-md": { "$type": "number", "$value": 16 },
    "spacing-sm": { "$type": "number", "$value": 12 },
    "spacing-xs": { "$type": "number", "$value": 8 },
    "spacing-2xs": { "$type": "number", "$value": 6 },
    "spacing-3xs": { "$type": "number", "$value": 4 },
    "spacing-4xs": { "$type": "number", "$value": 2 }
  },
  "size": {
    "size-xl": { "$type": "number", "$value": 64 },
    "size-lg": { "$type": "number", "$value": 48 },
    "size-md": { "$type": "number", "$value": 40 },
    "size-sm": { "$type": "number", "$value": 32 },
    "size-xs": { "$type": "number", "$value": 24 },
    "size-2xs": { "$type": "number", "$value": 16 }
  },
  "size-icon": {
    "size-icon-lg": { "$type": "number", "$value": 32 },
    "size-icon-md": { "$type": "number", "$value": 24 },
    "size-icon-sm": { "$type": "number", "$value": 20 },
    "size-icon-xs": { "$type": "number", "$value": 16 },
    "size-icon-2xs": { "$type": "number", "$value": 12 }
  },
  // Nota: Este fallback contém apenas estrutura básica
  // Para uso completo, use tokens/index.js
  "colors": {},
  "font-family": {
    "font-family-primary": {
      "$type": "string",
      "$value": "Inter"
    }
  },
  "typography": {}
};

// Helper para carregar tokens com fallback
export async function loadTokensWithFallback() {
  try {
    const tokens = await import('../../tokens/index.js');
    return tokens.default || tokens;
  } catch (error) {
    console.warn('Erro ao carregar tokens, usando fallback:', error);
    return tokensFallback;
  }
}

