import React from 'react';

/**
 * Componente ProgressBar do Design System Interstellar
 * Barra de progresso com múltiplos tamanhos e opções de label
 *
 * @param {number} progression - Valor de progresso de 0 a 100 (padrão: 0)
 * @param {string} size - Tamanho da barra: 'sm' | 'md' | 'lg'
 * @param {string} label - Posição do label: 'None' | 'Bottom' | 'Right'
 * @param {string} color - Cor da barra: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ProgressBar = ({
  progression = 0,
  size = 'md',
  label = 'None',
  color = 'brand',
  className = '',
  ...props
}) => {
  // Garantir que progression está entre 0 e 100
  const clampedProgression = Math.max(0, Math.min(100, progression));

  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 4px altura, md: 8px altura, lg: 12px altura
  const sizeClasses = {
    sm: {
      height: 'h-1', // 4px
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
    md: {
      height: 'h-xs', // 8px (spacing-xs)
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
    lg: {
      height: 'h-sm', // 12px (spacing-sm)
      typography: 'text-sm font-semibold leading-5 tracking-[-0.084px]', // text-sm-semibold
    },
  };

  // Função para obter classes de cor
  const getColorClasses = () => {
    if (color === 'brand') {
      return {
        background: 'bg-brand-60',
        track: 'bg-gray-20',
      };
    }
    if (color === 'destructive') {
      return {
        background: 'bg-destructive-60',
        track: 'bg-gray-20',
      };
    }
    if (color === 'warning') {
      return {
        background: 'bg-warning-60',
        track: 'bg-gray-20',
      };
    }
    if (color === 'success') {
      return {
        background: 'bg-success-60',
        track: 'bg-gray-20',
      };
    }
    if (color === 'gray') {
      return {
        background: 'bg-gray-60',
        track: 'bg-gray-20',
      };
    }
    return {
      background: 'bg-brand-60',
      track: 'bg-gray-20',
    };
  };

  const sizeConfig = sizeClasses[size];
  const colors = getColorClasses();

  // Calcular largura do preenchimento
  const fillWidth = `${clampedProgression}%`;

  // Renderizar label
  const renderLabel = () => {
    if (label === 'None') return null;

    const labelText = `${clampedProgression}%`;

    if (label === 'Bottom') {
      return (
        <p className={`${sizeConfig.typography} text-gray-60 text-center font-primary`}>
          {labelText}
        </p>
      );
    }

    if (label === 'Right') {
      return (
        <p
          className={`${sizeConfig.typography} text-gray-60 text-right font-primary whitespace-nowrap`}
        >
          {labelText}
        </p>
      );
    }

    return null;
  };

  // Classes do container baseado na posição do label
  const containerClasses =
    label === 'Right'
      ? `flex gap-xs items-center ${className}`
      : `flex flex-col gap-sm items-start ${className}`;

  // Classes da barra de progresso
  const progressBarClasses = `
    relative
    ${sizeConfig.height}
    w-full
    rounded-full
    ${colors.track}
    overflow-hidden
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Classes do preenchimento
  const fillClasses = `
    absolute
    left-0
    top-0
    ${sizeConfig.height}
    ${colors.background}
    rounded-full
    transition-all
    duration-300
    ease-out
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      <div className={label === 'Right' ? 'flex-1 min-w-0' : 'w-full'}>
        <div className={progressBarClasses}>
          <div
            className={fillClasses}
            style={{
              width: fillWidth,
            }}
          />
        </div>
        {label === 'Bottom' && renderLabel()}
      </div>
      {label === 'Right' && renderLabel()}
    </div>
  );
};

export default ProgressBar;
