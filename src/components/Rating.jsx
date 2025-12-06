import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Rating do Design System Interstellar
 * Avaliação com estrelas
 *
 * @param {number} value - Valor da avaliação (0-5, pode ser decimal como 4.5)
 * @param {number} max - Valor máximo (padrão: 5)
 * @param {boolean} readonly - Se a avaliação é somente leitura
 * @param {function} onChange - Função de callback quando o valor muda (apenas se não for readonly)
 * @param {string} size - Tamanho das estrelas: 'sm' | 'md' | 'lg'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Rating = ({
  value = 0,
  max = 5,
  readonly = true,
  onChange,
  size = 'md',
  className = '',
  ...props
}) => {
  // Garantir que value está entre 0 e max
  const clampedValue = Math.max(0, Math.min(max, value));

  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  const sizeClasses = {
    sm: {
      starSize: 'w-icon-sm h-icon-sm', // 20px (size-icon-sm)
      gap: 'gap-xs', // 8px (spacing-xs)
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
    md: {
      starSize: 'w-icon-md h-icon-md', // 24px (size-icon-md)
      gap: 'gap-xs', // 8px (spacing-xs)
      typography: 'text-md font-semibold leading-[22px] tracking-[-0.112px]', // text-md-semibold
    },
    lg: {
      starSize: 'w-icon-lg h-icon-lg', // 32px (size-icon-lg)
      gap: 'gap-sm', // 12px (spacing-sm)
      typography: 'text-lg font-semibold leading-6 tracking-[-0.144px]', // text-lg-semibold
    },
  };

  const sizeConfig = sizeClasses[size];

  // Renderizar estrela
  const renderStar = (index) => {
    const starValue = index + 1;
    const isFilled = starValue <= Math.floor(clampedValue);
    const isHalfFilled = !isFilled && starValue - 0.5 <= clampedValue;

    return (
      <div
        key={index}
        className={`${sizeConfig.starSize} ${!readonly ? 'cursor-pointer' : ''} transition-colors`}
        onClick={() => {
          if (!readonly && onChange) {
            onChange(starValue);
          }
        }}
      >
        <Icon
          name="Star"
          size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
          color={isFilled || isHalfFilled ? 'warning-50' : 'gray-30'}
        />
      </div>
    );
  };

  // Classes do container
  const containerClasses = `
    flex items-center
    ${sizeConfig.gap}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      <div className="flex items-center gap-xs">
        {[...Array(max)].map((_, index) => renderStar(index))}
      </div>
      {clampedValue > 0 && (
        <span className={`${sizeConfig.typography} text-gray-60 font-primary`}>
          {clampedValue.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;
