import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Input do Design System Interstellar
 *
 * @param {string} size - Tamanho do input: 'md' | 'lg'
 * @param {string} type - Tipo do input: 'default' | 'action' | 'currency' | 'credit-card' | 'date' | 'link' | 'password' | 'phone' | 'number'
 * @param {string} state - Estado do input: 'default' | 'hover' | 'filled' | 'focused' | 'disabled' | 'error'
 * @param {string} label - Label do input (opcional)
 * @param {string} placeholder - Placeholder do input
 * @param {string} helperText - Texto complementar abaixo do input (opcional)
 * @param {string} errorMessage - Mensagem de erro (mostrada quando state='error')
 * @param {string|React.ReactNode} leftIcon - Nome do ícone Lucide (string) ou elemento React à esquerda
 * @param {string|React.ReactNode} rightIcon - Nome do ícone Lucide (string) ou elemento React à direita
 * @param {string} leftAdornment - Texto ou elemento à esquerda (ex: "R$", "https://")
 * @param {string} rightAdornment - Texto ou elemento à direita (ex: "VISA")
 * @param {string} value - Valor do input
 * @param {function} onChange - Função de callback ao alterar o valor
 * @param {boolean} disabled - Se o input está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento input
 */
export const Input = ({
  size = 'md',
  type = 'default',
  state = 'default',
  label,
  placeholder = '',
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  leftAdornment,
  rightAdornment,
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos para classes Tailwind
  const sizeClasses = {
    md: 'h-10 px-3', // 40px altura, 12px padding horizontal
    lg: 'h-12 px-3', // 48px altura, 12px padding horizontal
  };

  // Mapeamento de tipografia por tamanho
  const typographyClasses = {
    md: 'text-base font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium: 16px, 22px line-height
    lg: 'text-base font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium: 16px, 22px line-height
  };

  // Classes de tipografia para label
  const labelTypographyClasses = {
    md: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold: 14px, 20px line-height
    lg: 'text-sm font-bold leading-5 tracking-[-0.084px]', // text-sm-bold: 14px, 20px line-height
  };

  // Classes de tipografia para helper text
  const helperTextTypographyClasses = {
    md: 'text-sm font-medium leading-5 tracking-[-0.084px]', // text-sm-medium: 14px, 20px line-height
    lg: 'text-sm font-medium leading-5 tracking-[-0.084px]', // text-sm-medium: 14px, 20px line-height
  };

  // Função para obter classes de estado do input
  const getInputStateClasses = () => {
    const isDisabled = disabled || state === 'disabled';
    const isHover = state === 'hover' && !isDisabled;
    const isFocused = state === 'focused' && !isDisabled;
    const isError = state === 'error' && !isDisabled;

    // Background
    let bgClass = 'bg-gray-0';
    if (isDisabled) {
      bgClass = 'bg-gray-0';
    }

    // Border
    let borderClass = 'border border-gray-30';
    if (isError) {
      borderClass = 'border border-destructive-60';
    } else if (isFocused) {
      borderClass = 'border border-brand-60';
    } else if (isHover) {
      borderClass = 'border border-gray-40';
    } else if (isDisabled) {
      borderClass = 'border border-gray-30';
    }

    // Text color
    let textColorClass = 'text-gray-80';
    if (isDisabled) {
      textColorClass = 'text-gray-50';
    }

    // Placeholder color
    let placeholderClass = 'placeholder:text-gray-60';
    if (isDisabled) {
      placeholderClass = 'placeholder:text-gray-50';
    }

    // Focus ring
    let focusRingClass = '';
    if (isFocused && !isError) {
      focusRingClass = 'focus:ring-2 focus:ring-brand-60 focus:ring-offset-0';
    } else if (isFocused && isError) {
      focusRingClass = 'focus:ring-2 focus:ring-destructive-60 focus:ring-offset-0';
    }

    return `${bgClass} ${borderClass} ${textColorClass} ${placeholderClass} ${focusRingClass}`;
  };

  // Classes base do container do input
  const inputContainerClasses = `
    flex items-center gap-3
    ${sizeClasses[size]}
    ${typographyClasses[size]}
    ${getInputStateClasses()}
    rounded-md
    transition-colors
    ${disabled || state === 'disabled' ? 'cursor-not-allowed' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Classes do label
  const labelClasses = `
    ${labelTypographyClasses[size]}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-80'}
    ${disabled || state === 'disabled' ? 'text-gray-50' : ''}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Classes do helper text
  const helperTextClasses = `
    ${helperTextTypographyClasses[size]}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-60'}
    ${disabled || state === 'disabled' ? 'text-gray-50' : ''}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Determinar o tipo HTML do input baseado no type prop
  const getInputType = () => {
    if (type === 'password') return 'password';
    if (type === 'number') return 'number';
    if (type === 'date') return 'date';
    if (type === 'link') return 'url';
    if (type === 'phone') return 'tel';
    return 'text';
  };

  // Handler para keyDown (validação de entrada para tipos específicos)
  const handleKeyDown = (e) => {
    if (type === 'number' || type === 'currency' || type === 'credit-card' || type === 'phone') {
      const char = e.key;
      // Permitir números (0-9)
      const isNumber = /[0-9]/.test(char);
      // Permitir alguns caracteres de formatação para telefone e cartão
      const isFormatChar = [' ', '-', '(', ')', '.', ','].includes(char);
      // Permitir teclas de controle (Backspace, Delete, Tab, Arrow keys, etc.)
      const isControlKey =
        e.ctrlKey ||
        e.metaKey ||
        [
          'Backspace',
          'Delete',
          'Tab',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'ArrowDown',
          'Home',
          'End',
          'Enter',
          'Escape',
        ].includes(e.key);
      // Permitir colar (Ctrl+V, Cmd+V)
      const isPaste = (e.ctrlKey || e.metaKey) && e.key === 'v';
      // Permitir copiar/cortar/selecionar tudo
      const isCopyCutSelect =
        (e.ctrlKey || e.metaKey) && ['c', 'x', 'a'].includes(e.key.toLowerCase());

      if (!isNumber && !isFormatChar && !isControlKey && !isPaste && !isCopyCutSelect) {
        e.preventDefault();
      }
    }

    // Chamar handler customizado se fornecido
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
  };

  // Handler para onChange (filtragem de valores)
  const handleChange = (e) => {
    let newValue = e.target.value;
    // Para tipos numéricos, remover caracteres não numéricos (exceto formatação)
    if (type === 'number' || type === 'currency') {
      // Para number e currency, permitir apenas números e ponto/vírgula decimal
      newValue = newValue.replace(/[^0-9.,]/g, '');
    } else if (type === 'phone') {
      // Para phone, permitir números e caracteres de formatação comuns
      newValue = newValue.replace(/[^0-9\s\-()]/g, '');
    }

    // Só atualizar se o valor mudou (para evitar loops)
    if (newValue !== e.target.value) {
      // Criar novo evento com valor filtrado
      const syntheticEvent = {
        ...e,
        target: {
          ...e.target,
          value: newValue,
        },
      };

      if (onChange) {
        onChange(syntheticEvent);
      }
    } else {
      if (onChange) {
        onChange(e);
      }
    }
  };

  // Renderizar ícone à esquerda
  const renderLeftIcon = () => {
    if (leftIcon) {
      if (typeof leftIcon === 'string') {
        return (
          <Icon
            name={leftIcon}
            size="sm"
            color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
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
            color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
            className="flex-shrink-0"
          />
        );
      }
      return <span className="flex-shrink-0">{rightIcon}</span>;
    }
    return null;
  };

  // Renderizar adornment à esquerda
  const renderLeftAdornment = () => {
    if (leftAdornment) {
      return (
        <span
          className={`${helperTextTypographyClasses[size]} ${state === 'disabled' ? 'text-gray-50' : 'text-gray-60'} flex-shrink-0`}
        >
          {leftAdornment}
        </span>
      );
    }
    return null;
  };

  // Renderizar adornment à direita
  const renderRightAdornment = () => {
    if (rightAdornment) {
      return (
        <span
          className={`${helperTextTypographyClasses[size]} ${state === 'disabled' ? 'text-gray-50' : 'text-gray-60'} flex-shrink-0`}
        >
          {rightAdornment}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && <label className={labelClasses}>{label}</label>}

      {/* Input Container */}
      <div className={inputContainerClasses}>
        {/* Left Icon */}
        {renderLeftIcon()}

        {/* Left Adornment */}
        {renderLeftAdornment()}

        {/* Input Field */}
        <input
          type={getInputType()}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || state === 'disabled'}
          className="flex-1 min-w-0 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 p-0"
          {...props}
        />

        {/* Right Adornment */}
        {renderRightAdornment()}

        {/* Right Icon */}
        {renderRightIcon()}
      </div>

      {/* Helper Text ou Error Message */}
      {(helperText || errorMessage) && (
        <p className={helperTextClasses}>
          {state === 'error' && errorMessage ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
