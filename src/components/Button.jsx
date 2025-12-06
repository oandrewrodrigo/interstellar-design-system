import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Button do Design System Interstellar
 *
 * @param {string} size - Tamanho do botão: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} color - Cor do botão: 'brand' | 'destructive' | 'gray'
 * @param {string} hierarchy - Hierarquia visual: 'primary' | 'secondary' | 'outlined' | 'link'
 * @param {string} state - Estado do botão: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {string|React.ReactNode} leftIcon - Nome do ícone Lucide (string) ou elemento React à esquerda
 * @param {string|React.ReactNode} rightIcon - Nome do ícone Lucide (string) ou elemento React à direita
 * @param {function} onClick - Função de callback ao clicar no botão
 * @param {boolean} disabled - Se o botão está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento button
 */
export const Button = ({
  size = 'md',
  color = 'brand',
  hierarchy = 'primary',
  state = 'default',
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const isDisabled = disabled || state === 'disabled';

  // Mapeamento de tamanhos
  const sizeClasses = {
    xs: 'h-6 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-5 text-lg',
    xl: 'h-14 px-6 text-xl',
  };

  // Mapeamento de cores e hierarquias
  const getColorClasses = () => {
    const isHover = state === 'hover' && !isDisabled;
    const isFocused = state === 'focused' && !isDisabled;

    if (hierarchy === 'primary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isFocused)
          return 'bg-brand-60 text-gray-0 shadow-[0px_0px_0px_4px_rgba(79,70,229,0.25)]';
        if (isHover) return 'bg-brand-70 text-gray-0';
        return 'bg-brand-60 text-gray-0';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isFocused)
          return 'bg-destructive-60 text-gray-0 shadow-[0px_0px_0px_4px_rgba(220,38,38,0.25)]';
        if (isHover) return 'bg-destructive-70 text-gray-0';
        return 'bg-destructive-60 text-gray-0';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isFocused) return 'bg-gray-80 text-gray-0 shadow-[0px_0px_0px_4px_rgba(0,0,0,0.25)]';
        if (isHover) return 'bg-gray-90 text-gray-0';
        return 'bg-gray-80 text-gray-0';
      }
    }

    if (hierarchy === 'secondary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-gray-5 text-gray-50 cursor-not-allowed';
        if (isFocused)
          return 'bg-brand-10 text-brand-60 shadow-[0px_0px_0px_4px_rgba(79,70,229,0.25)]';
        if (isHover) return 'bg-brand-10 text-brand-70';
        return 'bg-brand-10 text-brand-60';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-gray-5 text-gray-50 cursor-not-allowed';
        if (isFocused)
          return 'bg-destructive-10 text-destructive-60 shadow-[0px_0px_0px_4px_rgba(220,38,38,0.25)]';
        if (isHover) return 'bg-destructive-10 text-destructive-70';
        return 'bg-destructive-10 text-destructive-60';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-5 text-gray-50 cursor-not-allowed';
        if (isFocused) return 'bg-gray-10 text-gray-80 shadow-[0px_0px_0px_4px_rgba(0,0,0,0.25)]';
        if (isHover) return 'bg-gray-10 text-gray-90';
        return 'bg-gray-10 text-gray-80';
      }
    }

    if (hierarchy === 'outlined') {
      if (color === 'brand') {
        if (isDisabled) return 'border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused)
          return 'border-brand-60 text-brand-60 bg-transparent shadow-[0px_0px_0px_4px_rgba(79,70,229,0.25)]';
        if (isHover) return 'border-brand-70 text-brand-70 bg-transparent';
        return 'border-brand-60 text-brand-60 bg-transparent';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused)
          return 'border-destructive-60 text-destructive-60 bg-transparent shadow-[0px_0px_0px_4px_rgba(220,38,38,0.25)]';
        if (isHover) return 'border-destructive-70 text-destructive-70 bg-transparent';
        return 'border-destructive-60 text-destructive-60 bg-transparent';
      }
      if (color === 'gray') {
        if (isDisabled) return 'border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused)
          return 'border-gray-80 text-gray-80 bg-transparent shadow-[0px_0px_0px_4px_rgba(0,0,0,0.25)]';
        if (isHover) return 'border-gray-90 text-gray-90 bg-transparent';
        return 'border-gray-80 text-gray-80 bg-transparent';
      }
    }

    if (hierarchy === 'link') {
      if (color === 'brand') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused) return 'text-brand-60 bg-transparent underline';
        if (isHover) return 'text-brand-70 bg-transparent underline';
        return 'text-brand-60 bg-transparent';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused) return 'text-destructive-60 bg-transparent underline';
        if (isHover) return 'text-destructive-70 bg-transparent underline';
        return 'text-destructive-60 bg-transparent';
      }
      if (color === 'gray') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed';
        if (isFocused) return 'text-gray-80 bg-transparent underline';
        if (isHover) return 'text-gray-90 bg-transparent underline';
        return 'text-gray-80 bg-transparent';
      }
    }

    return '';
  };

  // Renderizar ícone à esquerda
  const renderLeftIcon = () => {
    if (leftIcon) {
      if (typeof leftIcon === 'string') {
        return (
          <Icon
            name={leftIcon}
            size="sm"
            color={
              isDisabled
                ? 'gray-50'
                : hierarchy === 'primary'
                  ? 'gray-0'
                  : color === 'brand'
                    ? 'brand-60'
                    : color === 'destructive'
                      ? 'destructive-60'
                      : 'gray-80'
            }
            className="flex-shrink-0"
          />
        );
      }
      return <span className="flex-shrink-0">{leftIcon}</span>;
    }
    return null;
  };

  // Renderizar ícone à direita
  const renderRightIcon = () => {
    if (rightIcon) {
      if (typeof rightIcon === 'string') {
        return (
          <Icon
            name={rightIcon}
            size="sm"
            color={
              isDisabled
                ? 'gray-50'
                : hierarchy === 'primary'
                  ? 'gray-0'
                  : color === 'brand'
                    ? 'brand-60'
                    : color === 'destructive'
                      ? 'destructive-60'
                      : 'gray-80'
            }
            className="flex-shrink-0"
          />
        );
      }
      return <span className="flex-shrink-0">{rightIcon}</span>;
    }
    return null;
  };

  const buttonClasses = `
    ${sizeClasses[size]}
    ${getColorClasses()}
    ${hierarchy === 'outlined' ? 'border' : ''}
    font-bold
    rounded-md
    transition-colors
    flex items-center justify-center gap-2
    ${isDisabled ? '' : 'cursor-pointer'}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={buttonClasses}
      {...props}
    >
      {renderLeftIcon()}
      {children}
      {renderRightIcon()}
    </button>
  );
};

export default Button;
