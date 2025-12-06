import React from 'react';
import { Icon } from './Icon';

/**
 * Componente BadgeIcon do Design System Interstellar
 * Badge circular com apenas ícone ou número
 * 
 * @param {string|number|React.ReactNode} content - Conteúdo do badge: nome do ícone Lucide (string), número (number) ou elemento React
 * @param {string} size - Tamanho do badge: 'sm' | 'md' | 'lg'
 * @param {string} color - Cor do badge: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {string} hierarchy - Hierarquia do badge: 'primary' | 'secondary' | 'outlined'
 * @param {string} state - Estado do badge: 'default' | 'hover' | 'disabled'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const BadgeIcon = ({
  content,
  size = 'md',
  color = 'brand',
  hierarchy = 'primary',
  state = 'default',
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 20px, md: 24px, lg: 32px
  const sizeClasses = {
    sm: {
      size: 'w-icon-sm h-icon-sm', // 20px (size-icon-sm)
      iconSize: 'xs', // 16px (size-icon-xs)
      typography: 'text-xs font-semibold leading-4', // text-xs-semibold
    },
    md: {
      size: 'w-icon-md h-icon-md', // 24px (size-icon-md)
      iconSize: 'sm', // 20px (size-icon-sm)
      typography: 'text-xs font-semibold leading-4', // text-xs-semibold
    },
    lg: {
      size: 'w-icon-lg h-icon-lg', // 32px (size-icon-lg)
      iconSize: 'md', // 24px (size-icon-md)
      typography: 'text-sm font-semibold leading-5', // text-sm-semibold
    },
  };

  // Função para renderizar o conteúdo
  const renderContent = () => {
    if (!content) return null;

    // Se for número, renderizar como texto
    if (typeof content === 'number') {
      return (
        <span className={sizeClasses[size].typography}>
          {content}
        </span>
      );
    }

    // Se for string, assumir que é nome de ícone Lucide
    if (typeof content === 'string') {
      // Determinar cor do ícone baseado na hierarquia
      let iconColor = 'currentColor';
      if (hierarchy === 'primary') {
        iconColor = 'gray-0';
      } else if (hierarchy === 'secondary') {
        iconColor = `${color}-60`;
      } else if (hierarchy === 'outlined') {
        iconColor = `${color}-60`;
      }

      return (
        <Icon
          name={content}
          size={sizeClasses[size].iconSize}
          color={iconColor}
        />
      );
    }

    // Se for ReactNode, renderizar diretamente
    return content;
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

  const sizeConfig = sizeClasses[size];
  const colorClasses = getColorClasses();

  // Classes finais do badge
  const badgeClasses = `
    inline-flex
    items-center
    justify-center
    ${sizeConfig.size}
    ${colorClasses}
    rounded-full
    font-primary
    transition-colors
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={badgeClasses} {...props}>
      {renderContent()}
    </div>
  );
};

export default BadgeIcon;

