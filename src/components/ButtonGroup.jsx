import React from 'react';
import { Icon } from './Icon';

/**
 * Componente ButtonGroup do Design System Interstellar
 * Agrupa múltiplos botões conectados, com bordas arredondadas apenas nas extremidades
 * Baseado no design do Figma - componente independente, não reutiliza Button
 *
 * @param {Array} buttons - Array de objetos com as props dos botões: { children, onClick, disabled, leftIcon, rightIcon, ...buttonProps }
 * @param {string} size - Tamanho dos botões: 'sm' | 'md' | 'lg'
 * @param {string} color - Cor dos botões: 'brand' | 'gray' | 'destructive'
 * @param {string} hierarchy - Hierarquia dos botões: 'primary' | 'secondary' | 'outlined'
 * @param {string} state - Estado dos botões: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do container
 */
export const ButtonGroup = ({
  buttons = [],
  size = 'md',
  color = 'brand',
  hierarchy = 'primary',
  state = 'default',
  className = '',
  ...props
}) => {
  if (!buttons || buttons.length === 0) {
    return null;
  }

  // Mapeamento de tamanhos para classes Tailwind (baseado no design do Figma)
  // sm: 32px altura, md: 40px altura, lg: 48px altura
  const sizeClasses = {
    sm: {
      height: 'h-8', // 32px
      paddingX: 'px-md', // 16px (spacing-md)
      paddingY: 'py-xs', // 8px (spacing-xs)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'sm', // 20px
      typography: 'text-xs font-bold leading-4 tracking-[-0.06px]', // text-xs-bold
    },
    md: {
      height: 'h-md', // 40px (size-md)
      paddingX: 'px-lg', // 20px (spacing-lg)
      paddingY: 'py-sm', // 12px (spacing-sm)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'md', // 24px
      typography: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold
    },
    lg: {
      height: 'h-lg', // 48px (size-lg)
      paddingX: 'px-lg', // 20px (spacing-lg)
      paddingY: 'py-sm', // 12px (spacing-sm)
      gap: 'gap-xs', // 8px (spacing-xs)
      iconSize: 'md', // 24px
      typography: 'text-base font-bold leading-6 tracking-[-0.112px]', // text-md-bold
    },
  };

  // Mapeamento de tamanho do botão para tamanho do ícone
  const iconSizeMap = {
    sm: 'sm', // 20px
    md: 'md', // 24px
    lg: 'md', // 24px
  };

  // Função helper para renderizar ícone
  const renderIcon = (icon, buttonSize, buttonHierarchy, buttonColor) => {
    if (!icon) return null;

    // Se for string, usar componente Icon
    if (typeof icon === 'string') {
      // Determinar cor do ícone baseado na hierarquia
      let iconColor = 'currentColor';
      if (buttonHierarchy === 'primary') {
        iconColor = 'gray-0';
      } else if (buttonHierarchy === 'secondary') {
        iconColor = `${buttonColor}-60`;
      } else if (buttonHierarchy === 'outlined') {
        iconColor = `${buttonColor}-60`;
      }

      return <Icon name={icon} size={iconSizeMap[buttonSize]} color={iconColor} />;
    }

    // Se for ReactNode, renderizar diretamente
    return icon;
  };

  // Função para obter classes de cor e hierarquia
  const getColorClasses = (buttonHierarchy, buttonColor, buttonState, isDisabled) => {
    const isHover = buttonState === 'hover' && !isDisabled;
    const isFocused = buttonState === 'focused' && !isDisabled;

    if (buttonHierarchy === 'primary') {
      if (buttonColor === 'brand') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed border-gray-30';
        if (isHover) return 'bg-brand-70 text-gray-0 border-brand-70';
        if (isFocused)
          return 'bg-brand-60 text-gray-0 border-brand-60 focus:ring-2 focus:ring-brand-60 focus:ring-offset-2';
        return 'bg-brand-60 text-gray-0 border-brand-70';
      }
      if (buttonColor === 'destructive') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed border-gray-30';
        if (isHover) return 'bg-destructive-70 text-gray-0 border-destructive-70';
        if (isFocused)
          return 'bg-destructive-60 text-gray-0 border-destructive-60 focus:ring-2 focus:ring-destructive-60 focus:ring-offset-2';
        return 'bg-destructive-60 text-gray-0 border-destructive-70';
      }
      if (buttonColor === 'gray') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed border-gray-30';
        if (isHover) return 'bg-gray-80 text-gray-0 border-gray-80';
        if (isFocused)
          return 'bg-gray-90 text-gray-0 border-gray-90 focus:ring-2 focus:ring-gray-90 focus:ring-offset-2';
        return 'bg-gray-90 text-gray-0 border-gray-80';
      }
    }

    if (buttonHierarchy === 'secondary') {
      if (buttonColor === 'brand') {
        if (isDisabled) return 'bg-brand-5 text-gray-50 cursor-not-allowed border-brand-5';
        if (isHover) return 'bg-brand-10 text-brand-70 border-brand-10';
        if (isFocused)
          return 'bg-brand-5 text-brand-60 border-brand-5 focus:ring-2 focus:ring-brand-60 focus:ring-offset-2';
        return 'bg-brand-5 text-brand-60 border-brand-10';
      }
      if (buttonColor === 'destructive') {
        if (isDisabled)
          return 'bg-destructive-5 text-gray-50 cursor-not-allowed border-destructive-5';
        if (isHover) return 'bg-destructive-10 text-destructive-70 border-destructive-10';
        if (isFocused)
          return 'bg-destructive-5 text-destructive-60 border-destructive-5 focus:ring-2 focus:ring-destructive-60 focus:ring-offset-2';
        return 'bg-destructive-5 text-destructive-60 border-destructive-10';
      }
      if (buttonColor === 'gray') {
        if (isDisabled) return 'bg-gray-5 text-gray-50 cursor-not-allowed border-gray-5';
        if (isHover) return 'bg-gray-10 text-gray-80 border-gray-10';
        if (isFocused)
          return 'bg-gray-5 text-gray-90 border-gray-5 focus:ring-2 focus:ring-gray-90 focus:ring-offset-2';
        return 'bg-gray-5 text-gray-90 border-gray-10';
      }
    }

    if (buttonHierarchy === 'outlined') {
      if (buttonColor === 'brand') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover) return 'border border-brand-60 text-brand-60 bg-transparent hover:bg-brand-5';
        if (isFocused)
          return 'border border-brand-60 text-brand-60 bg-transparent focus:ring-2 focus:ring-brand-60 focus:ring-offset-2';
        return 'border border-brand-60 text-brand-60 bg-transparent';
      }
      if (buttonColor === 'destructive') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover)
          return 'border border-destructive-60 text-destructive-60 bg-transparent hover:bg-destructive-5';
        if (isFocused)
          return 'border border-destructive-60 text-destructive-60 bg-transparent focus:ring-2 focus:ring-destructive-60 focus:ring-offset-2';
        return 'border border-destructive-60 text-destructive-60 bg-transparent';
      }
      if (buttonColor === 'gray') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover) return 'border border-gray-90 text-gray-90 bg-transparent hover:bg-gray-5';
        if (isFocused)
          return 'border border-gray-90 text-gray-90 bg-transparent focus:ring-2 focus:ring-gray-90 focus:ring-offset-2';
        return 'border border-gray-90 text-gray-90 bg-transparent';
      }
    }

    return '';
  };

  // Função para obter classes de border-radius baseado na posição
  const getBorderRadiusClasses = (index, totalButtons) => {
    const isFirst = index === 0;
    const isLast = index === totalButtons - 1;

    if (isFirst && isLast) {
      // Apenas um botão - todas as bordas arredondadas
      return 'rounded-md';
    }

    if (isFirst) {
      // Primeiro botão - apenas bordas esquerdas arredondadas
      return 'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none';
    }

    if (isLast) {
      // Último botão - apenas bordas direitas arredondadas
      return 'rounded-tr-md rounded-br-md rounded-tl-none rounded-bl-none';
    }

    // Botão do meio - sem bordas arredondadas
    return 'rounded-none';
  };

  // Função para obter classes de borda baseado na posição e hierarquia
  const getBorderClasses = (index, buttonHierarchy) => {
    // Para outlined, precisamos remover a borda interna entre botões
    if (buttonHierarchy === 'outlined') {
      const isFirst = index === 0;

      if (!isFirst) {
        // Remove a borda esquerda dos botões do meio e último
        return 'border-l-0';
      }
    }

    return '';
  };

  // Classes base do container
  const containerClasses = `
    inline-flex
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {buttons.map((button, index) => {
        const {
          children,
          onClick,
          disabled = false,
          leftIcon,
          rightIcon,
          size: buttonSize = size,
          color: buttonColor = color,
          hierarchy: buttonHierarchy = hierarchy,
          state: buttonState = state,
          className: buttonClassName = '',
          ...buttonProps
        } = button;

        const isDisabled = disabled || buttonState === 'disabled';
        const sizeConfig = sizeClasses[buttonSize];
        const borderRadiusClasses = getBorderRadiusClasses(index, buttons.length);
        const borderClasses = getBorderClasses(index, buttonHierarchy);
        const colorClasses = getColorClasses(buttonHierarchy, buttonColor, buttonState, isDisabled);

        // Classes finais do botão
        const buttonClasses = `
          inline-flex
          items-center
          justify-center
          ${sizeConfig.height}
          ${sizeConfig.paddingX}
          ${sizeConfig.paddingY}
          ${sizeConfig.gap}
          ${sizeConfig.typography}
          ${borderRadiusClasses}
          ${borderClasses}
          ${colorClasses}
          border
          font-primary
          transition-colors
          focus:outline-none
          ${buttonClassName}
        `
          .trim()
          .replace(/\s+/g, ' ');

        return (
          <button
            key={index}
            type="button"
            className={buttonClasses}
            onClick={onClick}
            disabled={isDisabled}
            {...buttonProps}
          >
            {renderIcon(leftIcon, buttonSize, buttonHierarchy, buttonColor) && (
              <span className="flex-shrink-0">
                {renderIcon(leftIcon, buttonSize, buttonHierarchy, buttonColor)}
              </span>
            )}
            {children && <span>{children}</span>}
            {renderIcon(rightIcon, buttonSize, buttonHierarchy, buttonColor) && (
              <span className="flex-shrink-0">
                {renderIcon(rightIcon, buttonSize, buttonHierarchy, buttonColor)}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
