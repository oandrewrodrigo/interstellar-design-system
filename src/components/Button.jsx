import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente Button do Design System Interstellar
 *
 * @param {string} size - Tamanho do botão: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} color - Cor do botão: 'brand' | 'destructive' | 'gray'
 * @param {string} hierarchy - Hierarquia do botão: 'primary' | 'secondary' | 'outlined' | 'link'
 * @param {string} state - Estado do botão: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {string|React.ReactNode} leftIcon - Nome do ícone Lucide (string) ou elemento React à esquerda
 * @param {string|React.ReactNode} rightIcon - Nome do ícone Lucide (string) ou elemento React à direita
 * @param {function} onClick - Função de callback ao clicar
 * @param {boolean} disabled - Se o botão está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento button
 */
export const Button = ({
  size = 'md',
  color = 'brand',
  hierarchy = 'primary',
  state = 'default',
  children,
  leftIcon,
  rightIcon,
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanho do botão para tamanho do ícone (constante, não precisa memoizar)
  const iconSizeMap = useMemo(() => ({
    xs: 'xs', // 16px
    sm: 'sm', // 20px
    md: 'md', // 24px
    lg: 'md', // 24px
    xl: 'lg', // 32px
  }), []);

  // Determinar cor do ícone baseado na hierarquia (memoizado)
  const iconColor = useMemo(() => {
    if (hierarchy === 'primary') {
      return 'gray-0';
    }
    return `${color}-60`;
  }, [hierarchy, color]);

  // Renderizar ícone uma única vez (memoizado)
  const leftIconElement = useMemo(() => {
    if (!leftIcon) return null;

    // Se for string, usar componente Icon
    if (typeof leftIcon === 'string') {
      return <Icon name={leftIcon} size={iconSizeMap[size]} color={iconColor} />;
    }

    // Se for ReactNode, renderizar diretamente
    return leftIcon;
  }, [leftIcon, size, iconColor, iconSizeMap]);

  const rightIconElement = useMemo(() => {
    if (!rightIcon) return null;

    // Se for string, usar componente Icon
    if (typeof rightIcon === 'string') {
      return <Icon name={rightIcon} size={iconSizeMap[size]} color={iconColor} />;
    }

    // Se for ReactNode, renderizar diretamente
    return rightIcon;
  }, [rightIcon, size, iconColor, iconSizeMap]);
  // Mapeamento de tamanhos para classes Tailwind (usando tokens de size)
  // xs: 24px, sm: 32px, md: 40px, lg: 48px, xl: 56px
  const sizeClasses = {
    xs: 'h-6 px-3', // 24px altura, 12px padding horizontal (spacing-sm)
    sm: 'h-8 px-3', // 32px altura, 12px padding horizontal
    md: 'h-10 px-4', // 40px altura, 16px padding horizontal (spacing-md)
    lg: 'h-12 px-4', // 48px altura, 16px padding horizontal
    xl: 'h-14 px-4', // 56px altura, 16px padding horizontal
  };

  // Mapeamento de tipografia por tamanho (usando tokens text-sm-bold, text-xs-bold, etc.)
  // Baseado nos tokens: text-2xs-bold (10px), text-xs-bold (12px), text-sm-bold (14px), text-md-bold (16px), text-lg-bold (18px)
  const typographyClasses = {
    xs: 'text-[10px] font-bold leading-[14px] tracking-[-0.04px]', // text-2xs-bold
    sm: 'text-xs font-bold leading-4 tracking-[-0.06px]', // text-xs-bold: 12px, 16px line-height
    md: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold: 14px, 20px line-height
    lg: 'text-base font-bold leading-6 tracking-[-0.112px]', // text-md-bold: 16px, 22px line-height
    xl: 'text-lg font-bold leading-7 tracking-[-0.144px]', // text-lg-bold: 18px, 24px line-height
  };

  // Classes base (usando tokens: border-radius-md = 8px, spacing-xs = 8px para gap)
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-md font-primary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Classes de cor e hierarquia
  const getColorClasses = () => {
    const isDisabled = disabled || state === 'disabled';
    const isHover = state === 'hover' && !isDisabled;
    const isFocused = state === 'focused' && !isDisabled;

    if (hierarchy === 'primary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-brand-70 text-gray-0 hover:bg-brand-70';
        if (isFocused) return 'bg-brand-60 text-gray-0 focus:ring-brand-60';
        return 'bg-brand-60 text-gray-0 hover:bg-brand-70 focus:ring-brand-60';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-destructive-70 text-gray-0 hover:bg-destructive-70';
        if (isFocused) return 'bg-destructive-60 text-gray-0 focus:ring-destructive-60';
        return 'bg-destructive-60 text-gray-0 hover:bg-destructive-70 focus:ring-destructive-60';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-30 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-gray-80 text-gray-0 hover:bg-gray-80';
        if (isFocused) return 'bg-gray-90 text-gray-0 focus:ring-gray-90';
        return 'bg-gray-90 text-gray-0 hover:bg-gray-80 focus:ring-gray-90';
      }
    }

    if (hierarchy === 'secondary') {
      if (color === 'brand') {
        if (isDisabled) return 'bg-brand-5 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-brand-10 text-brand-70 hover:bg-brand-10';
        if (isFocused) return 'bg-brand-5 text-brand-60 focus:ring-brand-60';
        return 'bg-brand-5 text-brand-60 hover:bg-brand-10 focus:ring-brand-60';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'bg-destructive-5 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-destructive-10 text-destructive-70 hover:bg-destructive-10';
        if (isFocused) return 'bg-destructive-5 text-destructive-60 focus:ring-destructive-60';
        return 'bg-destructive-5 text-destructive-60 hover:bg-destructive-10 focus:ring-destructive-60';
      }
      if (color === 'gray') {
        if (isDisabled) return 'bg-gray-5 text-gray-50 cursor-not-allowed';
        if (isHover) return 'bg-gray-10 text-gray-80 hover:bg-gray-10';
        if (isFocused) return 'bg-gray-5 text-gray-90 focus:ring-gray-90';
        return 'bg-gray-5 text-gray-90 hover:bg-gray-10 focus:ring-gray-90';
      }
    }

    if (hierarchy === 'outlined') {
      if (color === 'brand') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover) return 'border border-brand-60 text-brand-60 bg-transparent hover:bg-brand-5';
        if (isFocused)
          return 'border border-brand-60 text-brand-60 bg-transparent focus:ring-brand-60';
        return 'border border-brand-60 text-brand-60 bg-transparent hover:bg-brand-5 focus:ring-brand-60';
      }
      if (color === 'destructive') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover)
          return 'border border-destructive-60 text-destructive-60 bg-transparent hover:bg-destructive-5';
        if (isFocused)
          return 'border border-destructive-60 text-destructive-60 bg-transparent focus:ring-destructive-60';
        return 'border border-destructive-60 text-destructive-60 bg-transparent hover:bg-destructive-5 focus:ring-destructive-60';
      }
      if (color === 'gray') {
        if (isDisabled)
          return 'border border-gray-30 text-gray-50 bg-transparent cursor-not-allowed';
        if (isHover) return 'border border-gray-90 text-gray-90 bg-transparent hover:bg-gray-5';
        if (isFocused)
          return 'border border-gray-90 text-gray-90 bg-transparent focus:ring-gray-90';
        return 'border border-gray-90 text-gray-90 bg-transparent hover:bg-gray-5 focus:ring-gray-90';
      }
    }

    if (hierarchy === 'link') {
      if (color === 'brand') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed underline-offset-4';
        if (isHover) return 'text-brand-60 bg-transparent hover:text-brand-70 hover:underline';
        if (isFocused) return 'text-brand-60 bg-transparent focus:ring-brand-60 underline-offset-4';
        return 'text-brand-60 bg-transparent hover:text-brand-70 hover:underline focus:ring-brand-60 underline-offset-4';
      }
      if (color === 'destructive') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed underline-offset-4';
        if (isHover)
          return 'text-destructive-60 bg-transparent hover:text-destructive-70 hover:underline';
        if (isFocused)
          return 'text-destructive-60 bg-transparent focus:ring-destructive-60 underline-offset-4';
        return 'text-destructive-60 bg-transparent hover:text-destructive-70 hover:underline focus:ring-destructive-60 underline-offset-4';
      }
      if (color === 'gray') {
        if (isDisabled) return 'text-gray-50 bg-transparent cursor-not-allowed underline-offset-4';
        if (isHover) return 'text-gray-90 bg-transparent hover:text-gray-80 hover:underline';
        if (isFocused) return 'text-gray-90 bg-transparent focus:ring-gray-90 underline-offset-4';
        return 'text-gray-90 bg-transparent hover:text-gray-80 hover:underline focus:ring-gray-90 underline-offset-4';
      }
    }

    return '';
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${typographyClasses[size]}
    ${getColorClasses()}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled || state === 'disabled'}
      {...props}
    >
      {leftIconElement && <span className="flex-shrink-0">{leftIconElement}</span>}
      {children && <span>{children}</span>}
      {rightIconElement && <span className="flex-shrink-0">{rightIconElement}</span>}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['brand', 'destructive', 'gray']),
  hierarchy: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'link']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  children: PropTypes.node,
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
  state: 'default',
  disabled: false,
  className: '',
};

export default Button;
