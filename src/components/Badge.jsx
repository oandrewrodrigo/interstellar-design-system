import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Badge do Design System Interstellar
 * Badge com texto, dot opcional e ícone opcional
 * 
 * @param {React.ReactNode} children - Conteúdo do badge (texto)
 * @param {string} size - Tamanho do badge: 'sm' | 'md' | 'lg'
 * @param {string} color - Cor do badge: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {string} hierarchy - Hierarquia do badge: 'primary' | 'secondary' | 'outlined'
 * @param {string} state - Estado do badge: 'default' | 'hover' | 'disabled'
 * @param {boolean} showDot - Se deve mostrar o dot (círculo) à esquerda
 * @param {string|React.ReactNode} rightIcon - Nome do ícone Lucide (string) ou elemento React à direita
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 * 
 * @directive Uso em Tabelas: Sempre que o componente Badge for usado em uma tabela, utilize a hierarquia 'secondary'.
 */
export const Badge = ({
  children,
  size = 'md',
  color = 'brand',
  hierarchy = 'primary',
  state = 'default',
  showDot = true,
  rightIcon,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 24px altura, md: 28px altura, lg: 32px altura
  const sizeClasses = {
    sm: {
      height: 'h-6', // 24px
      paddingX: 'px-2', // 8px
      paddingY: 'py-1.5', // 6px
      gap: 'gap-1.5', // 6px
      dotSize: 'w-1.5 h-1.5', // 6px
      iconSize: 'xs', // 16px (size-icon-xs)
      typography: 'text-xs font-semibold leading-4 tracking-[0.36px]', // text-xs-semibold
    },
    md: {
      height: 'h-size-xs', // 24px (size-xs) - mais próximo disponível
      paddingX: 'px-sm', // 12px (spacing-sm)
      paddingY: 'py-2xs', // 6px (spacing-2xs)
      gap: 'gap-2xs', // 6px (spacing-2xs)
      dotSize: 'w-1.5 h-1.5', // 6px
      iconSize: 'xs', // 16px (size-icon-xs)
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
    lg: {
      height: 'h-8', // 32px
      paddingX: 'px-3', // 12px
      paddingY: 'py-1.5', // 6px
      gap: 'gap-2', // 8px
      dotSize: 'w-1.5 h-1.5', // 6px
      iconSize: 'sm', // 20px (size-icon-sm)
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
  };

  // Mapeamento de tamanho do badge para tamanho do ícone
  const iconSizeMap = {
    sm: 'xs',   // 16px
    md: 'xs',   // 16px
    lg: 'sm',   // 20px
  };

  // Função helper para renderizar ícone
  const renderIcon = (icon, badgeSize, badgeHierarchy, badgeColor) => {
    if (!icon) return null;
    
    // Se for string, usar componente Icon
    if (typeof icon === 'string') {
      // Determinar cor do ícone baseado na hierarquia
      let iconColor = 'currentColor';
      if (badgeHierarchy === 'primary') {
        iconColor = 'gray-0';
      } else if (badgeHierarchy === 'secondary') {
        iconColor = `${badgeColor}-60`;
      } else if (badgeHierarchy === 'outlined') {
        iconColor = `${badgeColor}-60`;
      }

      return (
        <Icon
          name={icon}
          size={iconSizeMap[badgeSize]}
          color={iconColor}
        />
      );
    }
    
    // Se for ReactNode, renderizar diretamente
    return icon;
  };

  // Função para obter classes de cor e hierarquia
  const getColorClasses = () => {
    const isDisabled = state === 'disabled';
    const isHover = state === 'hover' && !isDisabled;

    if (hierarchy === 'primary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-gray-30 text-gray-50';
        if (isHover) return 'bg-brand-70 text-gray-0';
        return 'bg-brand-60 text-gray-0';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-gray-30 text-gray-50';
        if (isHover) return 'bg-destructive-70 text-gray-0';
        return 'bg-destructive-60 text-gray-0';
      }
      if (color === 'warning') {
        if (isDisabled) return 'bg-gray-30 text-gray-50';
        if (isHover) return 'bg-warning-70 text-gray-0';
        return 'bg-warning-60 text-gray-0';
      }
      if (color === 'success') {
        if (isDisabled) return 'bg-gray-30 text-gray-50';
        if (isHover) return 'bg-success-70 text-gray-0';
        return 'bg-success-60 text-gray-0';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-30 text-gray-50';
        if (isHover) return 'bg-gray-80 text-gray-0';
        return 'bg-gray-90 text-gray-0';
      }
    }

    if (hierarchy === 'secondary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-brand-5 text-gray-50';
        if (isHover) return 'bg-brand-10 text-brand-70';
        return 'bg-brand-5 text-brand-60';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-destructive-5 text-gray-50';
        if (isHover) return 'bg-destructive-10 text-destructive-70';
        return 'bg-destructive-5 text-destructive-60';
      }
      if (color === 'warning') {
        if (isDisabled) return 'bg-warning-5 text-gray-50';
        if (isHover) return 'bg-warning-10 text-warning-70';
        return 'bg-warning-5 text-warning-60';
      }
      if (color === 'success') {
        if (isDisabled) return 'bg-success-5 text-gray-50';
        if (isHover) return 'bg-success-10 text-success-70';
        return 'bg-success-5 text-success-60';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-5 text-gray-50';
        if (isHover) return 'bg-gray-10 text-gray-80';
        return 'bg-gray-5 text-gray-90';
      }
    }

    if (hierarchy === 'outlined') {
      if (color === 'brand') {
        if (isDisabled) return 'border border-gray-30 text-gray-50 bg-transparent';
        if (isHover) return 'border border-brand-60 text-brand-60 bg-transparent hover:bg-brand-5';
        return 'border border-brand-60 text-brand-60 bg-transparent';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'border border-gray-30 text-gray-50 bg-transparent';
        if (isHover) return 'border border-destructive-60 text-destructive-60 bg-transparent hover:bg-destructive-5';
        return 'border border-destructive-60 text-destructive-60 bg-transparent';
      }
      if (color === 'warning') {
        if (isDisabled) return 'border border-gray-30 text-gray-50 bg-transparent';
        if (isHover) return 'border border-warning-60 text-warning-60 bg-transparent hover:bg-warning-5';
        return 'border border-warning-60 text-warning-60 bg-transparent';
      }
      if (color === 'success') {
        if (isDisabled) return 'border border-gray-30 text-gray-50 bg-transparent';
        if (isHover) return 'border border-success-60 text-success-60 bg-transparent hover:bg-success-5';
        return 'border border-success-60 text-success-60 bg-transparent';
      }
      if (color === 'gray') {
        if (isDisabled) return 'border border-gray-30 text-gray-50 bg-transparent';
        if (isHover) return 'border border-gray-90 text-gray-90 bg-transparent hover:bg-gray-5';
        return 'border border-gray-90 text-gray-90 bg-transparent';
      }
    }

    return '';
  };

  // Função para obter cor do dot baseado na hierarquia
  const getDotColor = () => {
    if (hierarchy === 'primary') {
      return 'bg-gray-0';
    } else if (hierarchy === 'secondary' || hierarchy === 'outlined') {
      return `bg-${color}-60`;
    }
    return 'bg-gray-0';
  };

  const sizeConfig = sizeClasses[size];
  const colorClasses = getColorClasses();
  const dotColor = getDotColor();

  // Classes finais do badge
  const badgeClasses = `
    inline-flex
    items-center
    justify-center
    ${sizeConfig.height}
    ${sizeConfig.paddingX}
    ${sizeConfig.paddingY}
    ${sizeConfig.gap}
    ${sizeConfig.typography}
    ${colorClasses}
    rounded-full
    font-primary
    transition-colors
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={badgeClasses} {...props}>
      {/* Dot à esquerda */}
      {showDot && (
        <div className={`${sizeConfig.dotSize} ${dotColor} rounded-full flex-shrink-0`} />
      )}
      
      {/* Conteúdo (texto) */}
      {children && <span className="text-center">{children}</span>}
      
      {/* Ícone à direita */}
      {renderIcon(rightIcon, size, hierarchy, color) && (
        <span className="flex-shrink-0">
          {renderIcon(rightIcon, size, hierarchy, color)}
        </span>
      )}
    </div>
  );
};

export default Badge;

