import React, { useEffect } from 'react';

/**
 * Componente Loader do Design System Interstellar
 * Indicador de carregamento com múltiplos tipos e tamanhos
 *
 * @param {boolean} isLabel - Se deve mostrar o label abaixo do loader
 * @param {string} labelDescription - Texto do label (padrão: "Loading...")
 * @param {string} size - Tamanho do loader: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @param {string} type - Tipo do loader: 'Circle Single' | 'Circle Multi' | 'Spinner Thick' | 'Spinner Thin' | 'Spinner Dot' | 'Box'
 * @param {string} color - Cor do loader: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Loader = ({
  isLabel = true,
  labelDescription = 'Loading...',
  size = 'xs',
  type = 'Circle Single',
  color = 'brand',
  className = '',
  ...props
}) => {
  // Adicionar estilos de animação ao documento se ainda não existirem
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleId = 'loader-animations';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @keyframes loader-fade-in-out {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 1; }
          }
          @keyframes loader-pulse-box {
            0%, 100% { opacity: 0.3; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1); }
          }
          @keyframes loader-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // xs: 32px, sm: 40px, md: 48px, lg: 56px, xl: 64px, 2xl: 80px
  const sizeClasses = {
    xs: {
      size: 'w-8 h-8', // 32px
      typography: 'text-sm font-medium leading-5 tracking-[-0.084px]', // text-sm-medium
    },
    sm: {
      size: 'w-10 h-10', // 40px
      typography: 'text-sm font-medium leading-5 tracking-[-0.084px]', // text-sm-medium
    },
    md: {
      size: 'w-12 h-12', // 48px
      typography: 'text-md font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium
    },
    lg: {
      size: 'w-14 h-14', // 56px (size-14)
      typography: 'text-md font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium
    },
    xl: {
      size: 'w-xl h-xl', // 64px (size-xl)
      typography: 'text-lg font-medium leading-6 tracking-[-0.144px]', // text-lg-medium
    },
    '2xl': {
      size: 'w-2xl h-2xl', // 80px (size-2xl)
      typography: 'text-lg font-medium leading-6 tracking-[-0.144px]', // text-lg-medium
    },
  };

  // Função para obter classes de cor baseado no tipo
  const getColorClasses = () => {
    if (color === 'brand') {
      return {
        primary: 'text-brand-60',
        secondary: 'text-brand-30',
        tertiary: 'text-brand-20',
        quaternary: 'text-brand-10',
        background: 'bg-brand-60',
        backgroundLight: 'bg-brand-30',
        backgroundLighter: 'bg-brand-20',
        backgroundLightest: 'bg-brand-10',
      };
    }
    if (color === 'destructive') {
      return {
        primary: 'text-destructive-60',
        secondary: 'text-destructive-30',
        tertiary: 'text-destructive-20',
        quaternary: 'text-destructive-10',
        background: 'bg-destructive-60',
        backgroundLight: 'bg-destructive-30',
        backgroundLighter: 'bg-destructive-20',
        backgroundLightest: 'bg-destructive-10',
      };
    }
    if (color === 'warning') {
      return {
        primary: 'text-warning-60',
        secondary: 'text-warning-30',
        tertiary: 'text-warning-20',
        quaternary: 'text-warning-10',
        background: 'bg-warning-60',
        backgroundLight: 'bg-warning-30',
        backgroundLighter: 'bg-warning-20',
        backgroundLightest: 'bg-warning-10',
      };
    }
    if (color === 'success') {
      return {
        primary: 'text-success-60',
        secondary: 'text-success-30',
        tertiary: 'text-success-20',
        quaternary: 'text-success-10',
        background: 'bg-success-60',
        backgroundLight: 'bg-success-30',
        backgroundLighter: 'bg-success-20',
        backgroundLightest: 'bg-success-10',
      };
    }
    if (color === 'gray') {
      return {
        primary: 'text-gray-60',
        secondary: 'text-gray-30',
        tertiary: 'text-gray-20',
        quaternary: 'text-gray-10',
        background: 'bg-gray-60',
        backgroundLight: 'bg-gray-30',
        backgroundLighter: 'bg-gray-20',
        backgroundLightest: 'bg-gray-10',
      };
    }
    return {
      primary: 'text-brand-60',
      secondary: 'text-brand-30',
      tertiary: 'text-brand-20',
      quaternary: 'text-brand-10',
      background: 'bg-brand-60',
      backgroundLight: 'bg-brand-30',
      backgroundLighter: 'bg-brand-20',
      backgroundLightest: 'bg-brand-10',
    };
  };

  const sizeConfig = sizeClasses[size];
  const colors = getColorClasses();

  // Renderizar Circle Single
  const renderCircleSingle = () => (
    <div className={`${sizeConfig.size} relative`}>
      <svg
        className={`${sizeConfig.size} ${colors.primary}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: 'loader-spin 1s linear infinite',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="45"
          className="opacity-30"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="45"
        />
      </svg>
    </div>
  );

  // Renderizar Circle Multi
  const renderCircleMulti = () => (
    <div className={`${sizeConfig.size} relative`}>
      <svg
        className={`${sizeConfig.size} ${colors.primary}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: 'loader-spin 1s linear infinite',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="45"
          className="opacity-30"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="60"
          strokeDashoffset="45"
        />
      </svg>
    </div>
  );

  // Renderizar Spinner Thick
  const renderSpinnerThick = () => {
    // Valores de largura e altura das barras - usando tokens quando possível
    const barWidthMap = {
      xs: '3px', // Muito pequeno, mantido hardcoded
      sm: '3px',
      md: '4px', // spacing-3xs
      lg: '4px',
      xl: '5px',
      '2xl': '6px', // spacing-2.5xs
    };
    const barHeightMap = {
      xs: '8px', // spacing-xs
      sm: '10px', // spacing-1.5xs
      md: '12px', // spacing-sm
      lg: '14px', // spacing-3.5
      xl: '16px', // spacing-md
      '2xl': '20px', // size-sm
    };
    const radiusMap = {
      xs: '12px', // spacing-sm
      sm: '15px', // Aproximado - entre spacing-sm e spacing-3.5
      md: '18px', // Aproximado
      lg: '21px', // Aproximado
      xl: '24px', // spacing-xl
      '2xl': '30px', // Aproximado
    };
    const barWidth = barWidthMap[size];
    const barHeight = barHeightMap[size];
    const radius = radiusMap[size];

    return (
      <div className={`${sizeConfig.size} relative flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${colors.background} rounded-full`}
              style={{
                width: barWidth,
                height: barHeight,
                transformOrigin: 'center',
                transform: `rotate(${i * 30}deg) translateY(-${radius})`,
                opacity: 0.2 + (i % 3) * 0.4,
                animation: 'loader-fade-in-out 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // Renderizar Spinner Thin
  const renderSpinnerThin = () => {
    const barWidth = '2px'; // spacing-4xs
    const barHeightMap = {
      xs: '10px', // spacing-1.5xs
      sm: '12px', // spacing-sm
      md: '14px', // spacing-3.5
      lg: '16px', // spacing-md
      xl: '18px', // Aproximado
      '2xl': '22px', // Aproximado
    };
    const radiusMap = {
      xs: '12px', // spacing-sm
      sm: '15px', // Aproximado
      md: '18px', // Aproximado
      lg: '21px', // Aproximado
      xl: '24px', // spacing-xl
      '2xl': '30px', // Aproximado
    };
    const barHeight = barHeightMap[size];
    const radius = radiusMap[size];

    return (
      <div className={`${sizeConfig.size} relative flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${colors.background} rounded-full`}
              style={{
                width: barWidth,
                height: barHeight,
                transformOrigin: 'center',
                transform: `rotate(${i * 30}deg) translateY(-${radius})`,
                opacity: 0.2 + (i % 3) * 0.4,
                animation: 'loader-fade-in-out 1.2s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // Renderizar Spinner Dot
  const renderSpinnerDot = () => {
    const dotSizeMap = {
      xs: '4px', // spacing-3xs
      sm: '5px', // Aproximado
      md: '6px', // spacing-2.5xs
      lg: '7px', // Aproximado
      xl: '8px', // spacing-2xs
      '2xl': '10px', // spacing-1.5xs
    };
    const radiusMap = {
      xs: '12px', // spacing-sm
      sm: '15px', // Aproximado
      md: '18px', // Aproximado
      lg: '21px', // Aproximado
      xl: '24px', // spacing-xl
      '2xl': '30px', // Aproximado
    };
    const dotSize = dotSizeMap[size];
    const radius = radiusMap[size];

    return (
      <div className={`${sizeConfig.size} relative flex items-center justify-center`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${colors.background} rounded-full`}
              style={{
                width: dotSize,
                height: dotSize,
                transformOrigin: 'center',
                transform: `rotate(${i * 45}deg) translateY(-${radius})`,
                opacity: 0.3 + (i % 2) * 0.5,
                animation: 'loader-fade-in-out 1s ease-in-out infinite',
                animationDelay: `${i * 0.125}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // Renderizar Box
  const renderBox = () => {
    const boxSize =
      size === 'xs'
        ? '14.667px'
        : size === 'sm'
          ? '18.333px'
          : size === 'md'
            ? '22px'
            : size === 'lg'
              ? '25.667px'
              : size === 'xl'
                ? '29.333px'
                : '36.667px';

    return (
      <div className={`${sizeConfig.size} relative`}>
        <div className="absolute left-0 top-0" style={{ width: boxSize, height: boxSize }}>
          <div
            className={`${colors.background} animate-pulse`}
            style={{
              width: '100%',
              height: '100%',
              animation: 'loader-pulse-box 1.4s ease-in-out infinite',
              animationDelay: '0s',
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0" style={{ width: boxSize, height: boxSize }}>
          <div
            className={`${colors.backgroundLight} animate-pulse`}
            style={{
              width: '100%',
              height: '100%',
              animation: 'loader-pulse-box 1.4s ease-in-out infinite',
              animationDelay: '0.35s',
            }}
          />
        </div>
        <div className="absolute right-0 top-0" style={{ width: boxSize, height: boxSize }}>
          <div
            className={`${colors.backgroundLighter} animate-pulse`}
            style={{
              width: '100%',
              height: '100%',
              animation: 'loader-pulse-box 1.4s ease-in-out infinite',
              animationDelay: '0.7s',
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0" style={{ width: boxSize, height: boxSize }}>
          <div
            className={`${colors.backgroundLightest} animate-pulse`}
            style={{
              width: '100%',
              height: '100%',
              animation: 'loader-pulse-box 1.4s ease-in-out infinite',
              animationDelay: '1.05s',
            }}
          />
        </div>
      </div>
    );
  };

  // Renderizar loader baseado no tipo
  const renderLoader = () => {
    switch (type) {
      case 'Circle Single':
        return renderCircleSingle();
      case 'Circle Multi':
        return renderCircleMulti();
      case 'Spinner Thick':
        return renderSpinnerThick();
      case 'Spinner Thin':
        return renderSpinnerThin();
      case 'Spinner Dot':
        return renderSpinnerDot();
      case 'Box':
        return renderBox();
      default:
        return renderCircleSingle();
    }
  };

  // Classes do container
  const containerClasses = `
    flex flex-col gap-md items-center justify-center
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {renderLoader()}
      {isLabel && (
        <p className={`${sizeConfig.typography} text-gray-60 text-center font-primary`}>
          {labelDescription}
        </p>
      )}
    </div>
  );
};

export default Loader;
