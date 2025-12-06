import React from 'react';
import * as LucideIcons from 'lucide-react';
import tokensData from '../../tokens/index.js';

/**
 * Componente Icon do Design System Interstellar
 * Wrapper para ícones Lucide que obedece os tokens de tamanho do design system
 * 
 * @param {string} name - Nome do ícone Lucide (ex: 'User', 'ArrowRight', 'Check')
 * @param {string} size - Tamanho do ícone: '2xs' | 'xs' | 'sm' | 'md' | 'lg' (usa tokens size-icon)
 * @param {string} color - Cor do ícone (usa tokens de cores, ex: 'brand-60', 'gray-90', 'destructive-60')
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do ícone Lucide
 */
export const Icon = ({
  name,
  size = 'md',
  color,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos para classes Tailwind (usando tokens size-icon)
  // 2xs: 12px, xs: 16px, sm: 20px, md: 24px, lg: 32px
  const sizeClasses = {
    '2xs': 'w-icon-2xs h-icon-2xs', // 12px
    'xs': 'w-icon-xs h-icon-xs',     // 16px
    'sm': 'w-icon-sm h-icon-sm',     // 20px
    'md': 'w-icon-md h-icon-md',      // 24px
    'lg': 'w-icon-lg h-icon-lg',      // 32px
  };

  // Obter o componente do ícone do Lucide
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado na biblioteca Lucide.`);
    return null;
  }

  // Função para obter valor da cor do token
  const getColorValue = (colorToken) => {
    if (!colorToken) return undefined;
    
    // Se for 'currentColor', retornar como está
    if (colorToken === 'currentColor') {
      return 'currentColor';
    }
    
    // Parse do token (ex: 'brand-60' -> palette: 'brand', shade: '60')
    const [palette, shade] = colorToken.split('-');
    if (!palette || !shade) return undefined;
    
    // Buscar no tokens
    const paletteName = palette.charAt(0).toUpperCase() + palette.slice(1);
    const colors = tokensData.colors?.[paletteName];
    if (!colors) return undefined;
    
    const colorTokenData = colors[shade];
    return colorTokenData?.$value || undefined;
  };

  const colorValue = getColorValue(color);
  const colorStyle = colorValue ? { color: colorValue } : {};

  const classes = `
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <IconComponent
      className={classes}
      style={colorStyle}
      {...props}
    />
  );
};

/**
 * Helper para obter todos os nomes de ícones disponíveis
 * Útil para autocomplete e documentação
 */
export const getAvailableIcons = () => {
  return Object.keys(LucideIcons).filter(
    (key) => typeof LucideIcons[key] === 'function' && key[0] === key[0].toUpperCase()
  );
};

export default Icon;

