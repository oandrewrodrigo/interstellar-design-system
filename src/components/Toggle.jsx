import React from 'react';

/**
 * Componente Toggle do Design System Interstellar
 * Switch/Toggle para alternar entre estados on/off
 *
 * @param {boolean} checked - Se o toggle está ativado
 * @param {function} onChange - Função de callback quando o estado muda
 * @param {boolean} disabled - Se o toggle está desabilitado
 * @param {string} size - Tamanho do toggle: 'sm' | 'md' | 'lg'
 * @param {string} color - Cor do toggle: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  color = 'brand',
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 36px largura, 20px thumb; md: 44px largura, 20px thumb; lg: 52px largura, 24px thumb
  const sizeClasses = {
    sm: {
      track: 'w-9 h-5', // 36px x 20px
      thumb: 'w-5 h-5', // 20px
      padding: 'p-0.5', // 2px
      translateX: 'translate-x-4', // 16px quando checked
    },
    md: {
      track: 'w-11 h-6', // 44px x 24px
      thumb: 'w-5 h-5', // 20px
      padding: 'p-0.5', // 2px
      translateX: 'translate-x-5', // 20px quando checked
    },
    lg: {
      track: 'w-13 h-7', // 52px x 28px
      thumb: 'w-6 h-6', // 24px
      padding: 'p-0.5', // 2px
      translateX: 'translate-x-6', // 24px quando checked
    },
  };

  // Função para obter classes de cor
  const getColorClasses = () => {
    if (disabled) {
      return {
        track: 'bg-gray-30',
        thumb: 'bg-gray-0',
      };
    }

    if (checked) {
      if (color === 'brand') {
        return {
          track: 'bg-brand-60',
          thumb: 'bg-gray-0',
        };
      }
      if (color === 'destructive') {
        return {
          track: 'bg-destructive-60',
          thumb: 'bg-gray-0',
        };
      }
      if (color === 'warning') {
        return {
          track: 'bg-warning-60',
          thumb: 'bg-gray-0',
        };
      }
      if (color === 'success') {
        return {
          track: 'bg-success-60',
          thumb: 'bg-gray-0',
        };
      }
      if (color === 'gray') {
        return {
          track: 'bg-gray-60',
          thumb: 'bg-gray-0',
        };
      }
    }

    return {
      track: 'bg-gray-20',
      thumb: 'bg-gray-0',
    };
  };

  const sizeConfig = sizeClasses[size];
  const colors = getColorClasses();

  // Classes do track
  const trackClasses = `
    relative
    ${sizeConfig.track}
    ${colors.track}
    rounded-full
    ${sizeConfig.padding}
    transition-colors
    duration-200
    ease-in-out
    cursor-pointer
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Classes do thumb
  const thumbClasses = `
    absolute
    ${sizeConfig.thumb}
    ${colors.thumb}
    rounded-full
    transition-transform
    duration-200
    ease-in-out
    shadow-sm
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Posição do thumb baseado no estado checked
  const thumbPosition = checked ? sizeConfig.translateX : 'translate-x-0';

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={trackClasses}
      onClick={handleClick}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
      {...props}
    >
      <div className={`${thumbClasses} ${thumbPosition}`} />
    </div>
  );
};

export default Toggle;
