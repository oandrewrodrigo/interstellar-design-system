import React from 'react';

/**
 * Componente Textarea do Design System Interstellar
 * 
 * @param {string} state - Estado do textarea: 'default' | 'hover' | 'filled' | 'focused' | 'disabled' | 'error'
 * @param {string} label - Label do textarea (opcional)
 * @param {string} placeholder - Placeholder do textarea
 * @param {string} helperText - Texto complementar abaixo do textarea (opcional)
 * @param {string} errorMessage - Mensagem de erro (mostrada quando state='error')
 * @param {boolean} showCounter - Se deve mostrar o contador de caracteres
 * @param {number} maxLength - Número máximo de caracteres (para o contador)
 * @param {string} value - Valor do textarea
 * @param {function} onChange - Função de callback ao alterar o valor
 * @param {boolean} disabled - Se o textarea está desabilitado
 * @param {number} rows - Número de linhas (altura inicial)
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento textarea
 */
export const Textarea = ({
  state = 'default',
  label,
  placeholder = '',
  helperText,
  errorMessage,
  showCounter = true,
  maxLength,
  value = '',
  onChange,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  // Calcular comprimento atual e texto do contador
  const currentLength = value ? value.length : 0;
  const counterText = maxLength ? `${currentLength}/${maxLength}` : `${currentLength}`;

  // Classes de tipografia para label
  const labelTypographyClasses = 'text-sm font-bold leading-5 tracking-[-0.084px]'; // text-sm-bold: 14px, 20px line-height

  // Classes de tipografia para o texto do textarea
  const textareaTypographyClasses = 'text-base font-normal leading-[1.6]'; // paragraph-md: 16px, line-height 1.6

  // Classes de tipografia para helper text
  const helperTextTypographyClasses = 'text-sm font-medium leading-5 tracking-[-0.084px]'; // text-sm-medium: 14px, 20px line-height

  // Classes de tipografia para contador
  const counterTypographyClasses = 'text-xs font-medium leading-4 tracking-[-0.06px]'; // text-xs-medium: 12px, 16px line-height

  // Função para obter classes de estado do textarea
  const getTextareaStateClasses = () => {
    const isDisabled = disabled || state === 'disabled';
    const isHover = state === 'hover' && !isDisabled;
    const isFocused = state === 'focused' && !isDisabled;
    const isFilled = state === 'filled' && !isDisabled;
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
    } else if (isFilled) {
      borderClass = 'border border-gray-60';
    } else if (isDisabled) {
      borderClass = 'border border-gray-30';
    }

    // Text color
    let textColorClass = 'text-gray-60';
    if (isDisabled) {
      textColorClass = 'text-gray-30';
    }

    // Placeholder color
    let placeholderClass = 'placeholder:text-gray-60';
    if (isDisabled) {
      placeholderClass = 'placeholder:text-gray-30';
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

  // Classes base do container do textarea
  const textareaContainerClasses = `
    flex flex-col gap-[10px]
    ${getTextareaStateClasses()}
    rounded-md
    transition-colors
    p-3
    min-h-[200px]
    ${disabled || state === 'disabled' ? 'cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Classes do label
  const labelClasses = `
    ${labelTypographyClasses}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-80'}
    ${disabled || state === 'disabled' ? 'text-gray-30' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Classes do helper text
  const helperTextClasses = `
    ${helperTextTypographyClasses}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-60'}
    ${disabled || state === 'disabled' ? 'text-gray-30' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Classes do contador
  const counterClasses = `
    ${counterTypographyClasses}
    ${disabled || state === 'disabled' ? 'text-gray-30' : 'text-gray-40'}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && (
        <label className={labelClasses}>
          {label}
        </label>
      )}

      {/* Textarea Container */}
      <div className={textareaContainerClasses}>
        {/* Textarea Field */}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || state === 'disabled'}
          rows={rows}
          maxLength={maxLength}
          className={`
            flex-1 min-w-0
            bg-transparent
            border-0
            outline-none
            focus:outline-none
            focus:ring-0
            resize-y
            ${textareaTypographyClasses}
            ${disabled || state === 'disabled' ? 'text-gray-30' : 'text-gray-60'}
            ${disabled || state === 'disabled' ? 'placeholder:text-gray-30' : 'placeholder:text-gray-60'}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />

        {/* Footer com contador e handle de redimensionamento */}
        <div className="flex gap-2 items-center justify-end w-full">
          {/* Counter */}
          {showCounter && (
            <p className={counterClasses}>
              {counterText}
            </p>
          )}

          {/* Resize Handle Icon */}
          <div className="flex-shrink-0 w-3 h-3 flex items-center justify-center">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={disabled || state === 'disabled' ? 'text-gray-30' : 'text-gray-40'}
            >
              <path
                d="M2 2L9 2M2 5.5L9 5.5M2 9L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
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

export default Textarea;

