import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Tab do Design System Interstellar
 * Tab individual com suporte a ícone, texto e badge
 * 
 * @param {React.ReactNode} children - Conteúdo do tab (texto)
 * @param {string} size - Tamanho do tab: 'sm' | 'md' | 'lg'
 * @param {string} style - Estilo do tab: 'default' | 'outlined' | 'bottomBorder' | 'leftBorder'
 * @param {string} state - Estado do tab: 'default' | 'hover' | 'active' | 'disabled'
 * @param {string} width - Largura do tab: 'hug' | 'fixed'
 * @param {string|React.ReactNode} leftIcon - Nome do ícone Lucide (string) ou elemento React à esquerda
 * @param {string|number} badge - Badge numérico ou texto
 * @param {function} onClick - Função de callback ao clicar
 * @param {boolean} disabled - Se o tab está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Tab = ({
  children,
  size = 'md',
  style = 'default',
  state = 'default',
  width = 'hug',
  leftIcon,
  badge,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || state === 'disabled';
  const isActive = state === 'active';
  const isHover = state === 'hover' && !isDisabled && !isActive;

  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 36px altura, md: 40px altura, lg: 48px altura
  const sizeClasses = {
    sm: {
      height: 'h-9', // 36px (size-9)
      paddingX: 'px-sm', // 12px (spacing-sm)
      paddingY: 'py-xs', // 8px (spacing-xs)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'xs', // 16px (size-icon-xs)
      typography: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold
      badgeSize: 'sm',
    },
    md: {
      height: 'h-md', // 40px (size-md)
      paddingX: 'px-sm', // 12px (spacing-sm)
      paddingY: 'py-xs', // 8px (spacing-xs)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'sm', // 20px (size-icon-sm)
      typography: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold
      badgeSize: 'sm',
    },
    lg: {
      height: 'h-lg', // 48px (size-lg)
      paddingX: 'px-md', // 16px (spacing-md)
      paddingY: 'py-sm', // 12px (spacing-sm)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'sm', // 20px (size-icon-sm)
      typography: 'text-md font-bold leading-6 tracking-[-0.112px]', // text-md-bold
      badgeSize: 'md',
    },
  };

  // Função para obter classes de estado e estilo
  const getStateClasses = () => {
    if (isDisabled) {
      return {
        text: 'text-gray-30',
        background: 'bg-transparent',
        border: '',
        shadow: '',
        badgeBackground: 'bg-gray-10',
        badgeText: 'text-gray-30',
        iconColor: 'gray-30',
      };
    }

    if (isActive) {
      if (style === 'default') {
        return {
          text: 'text-gray-80',
          background: 'bg-gray-0',
          border: '',
          shadow: 'shadow-md',
          badgeBackground: 'bg-brand-10',
          badgeText: 'text-brand-60',
          iconColor: 'brand-60',
        };
      }
      if (style === 'outlined') {
        return {
          text: 'text-brand-60',
          background: 'bg-transparent',
          border: 'border border-brand-60',
          shadow: '',
          badgeBackground: 'bg-brand-60',
          badgeText: 'text-gray-0',
          iconColor: 'brand-60',
        };
      }
      if (style === 'bottomBorder') {
        return {
          text: 'text-brand-60',
          background: 'bg-transparent',
          border: 'border-b-2 border-brand-60',
          shadow: '',
          badgeBackground: 'bg-brand-60',
          badgeText: 'text-gray-0',
          iconColor: 'brand-60',
        };
      }
      if (style === 'leftBorder') {
        return {
          text: 'text-brand-60',
          background: 'bg-transparent',
          border: 'border-l-2 border-brand-60',
          shadow: '',
          badgeBackground: 'bg-brand-60',
          badgeText: 'text-gray-0',
          iconColor: 'brand-60',
        };
      }
    }

    if (isHover) {
      return {
        text: 'text-gray-80',
        background: 'bg-gray-5',
        border: '',
        shadow: '',
        badgeBackground: 'bg-brand-10',
        badgeText: 'text-brand-60',
        iconColor: 'gray-60',
      };
    }

    // Default
    // No Figma, o badge no estado Default usa brand-10 e brand-60
    return {
      text: 'text-gray-60',
      background: 'bg-transparent',
      border: '',
      shadow: '',
      badgeBackground: 'bg-brand-10',
      badgeText: 'text-brand-60',
      iconColor: 'gray-60',
    };
  };

  // Função helper para renderizar ícone
  const renderIcon = () => {
    if (!leftIcon) return null;

    if (typeof leftIcon === 'string') {
      const stateClasses = getStateClasses();
      return (
        <Icon
          name={leftIcon}
          size={sizeClasses[size].iconSize}
          color={stateClasses.iconColor}
        />
      );
    }

    return leftIcon;
  };

  // Função helper para renderizar badge
  const renderBadge = () => {
    if (!badge && badge !== 0) return null;

    const stateClasses = getStateClasses();
    const badgeSizeClasses = {
      sm: 'px-2xs py-4xs text-xs font-semibold leading-4 tracking-[0.36px]', // px-6px py-2px
      md: 'px-xs py-2xs text-xs font-semibold leading-4 tracking-[0.36px]', // px-8px py-4px
      lg: 'px-xs py-2xs text-xs font-semibold leading-4 tracking-[0.36px]', // px-8px py-4px
    };

    return (
      <div
        className={`
          ${badgeSizeClasses[sizeClasses[size].badgeSize]}
          ${stateClasses.badgeBackground}
          ${stateClasses.badgeText}
          rounded-full
          flex items-center justify-center
          font-primary
        `.trim().replace(/\s+/g, ' ')}
      >
        {badge}
      </div>
    );
  };

  const sizeConfig = sizeClasses[size];
  const stateConfig = getStateClasses();

  // Classes do container
  // Corner radius deve ser 8px (rounded-md) conforme design do Figma
  const containerClasses = `
    inline-flex
    items-center
    justify-center
    ${sizeConfig.height}
    ${sizeConfig.paddingX}
    ${sizeConfig.paddingY}
    ${sizeConfig.gap}
    ${sizeConfig.typography}
    ${stateConfig.text}
    ${stateConfig.background}
    ${stateConfig.border}
    ${stateConfig.shadow}
    ${width === 'fixed' ? 'w-full' : ''}
    rounded-md
    font-primary
    transition-colors
    ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={containerClasses}
      onClick={handleClick}
      role="tab"
      aria-selected={isActive}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isDisabled) {
          e.preventDefault();
          handleClick();
        }
      }}
      {...props}
    >
      {renderIcon()}
      {children && <span>{children}</span>}
      {renderBadge()}
    </div>
  );
};

export default Tab;
