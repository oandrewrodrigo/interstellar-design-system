import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';

/**
 * Componente Slider do Design System Interstellar
 * Slider single ou range com múltiplos tamanhos e opções de label
 *
 * @param {number} value - Valor do slider (0-100) para single slider
 * @param {Array} range - Array [min, max] para range slider (0-100 cada)
 * @param {string} type - Tipo do slider: 'single' | 'range'
 * @param {string} size - Tamanho do slider: 'sm' | 'md' | 'lg'
 * @param {boolean} isLabel - Se deve mostrar o label abaixo do handle
 * @param {boolean} isIcon - Se deve mostrar o ícone no handle
 * @param {string|React.ReactNode} icon - Nome do ícone Lucide (string) ou elemento React
 * @param {string} labelText - Texto do label (padrão: "Slider Label")
 * @param {string} color - Cor do slider: 'brand' | 'destructive' | 'warning' | 'success' | 'gray'
 * @param {function} onChange - Função de callback quando o valor muda
 * @param {boolean} disabled - Se o slider está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Slider = ({
  value: controlledValue,
  range: controlledRange,
  type = 'single',
  size = 'md',
  isLabel = true,
  isIcon = true,
  icon,
  labelText = 'Slider Label',
  color = 'brand',
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  // Estado interno para valores não controlados
  const [internalValue, setInternalValue] = useState(controlledValue ?? 0);
  const [internalRange, setInternalRange] = useState(controlledRange ?? [0, 25]);
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState(null); // 'min' | 'max' | null para range slider

  // Refs para elementos
  const trackRef = useRef(null);
  const isControlled = controlledValue !== undefined || controlledRange !== undefined;

  // Usar valores controlados ou internos
  const value = isControlled ? (controlledValue ?? 0) : internalValue;
  const range = isControlled ? (controlledRange ?? [0, 25]) : internalRange;

  // Garantir que valores estão entre 0 e 100
  const clampedValue = Math.max(0, Math.min(100, value));
  const clampedRange = [
    Math.max(0, Math.min(100, range[0])),
    Math.max(0, Math.min(100, range[1])),
  ].sort((a, b) => a - b);

  // Refs para valores atuais (evitar problemas de closure no useEffect)
  const draggingRef = useRef(false);
  const activeThumbRef = useRef(null);
  const typeRef = useRef(type);
  const isControlledRef = useRef(isControlled);
  const onChangeRef = useRef(onChange);
  const rangeRef = useRef(clampedRange);
  const valueRef = useRef(clampedValue);

  // Atualizar refs quando valores mudam
  useEffect(() => {
    typeRef.current = type;
    isControlledRef.current = isControlled;
    onChangeRef.current = onChange;
    rangeRef.current = clampedRange;
    valueRef.current = clampedValue;
  }, [type, isControlled, onChange, clampedRange, clampedValue]);

  // Mapeamento de tamanhos para classes Tailwind (usando tokens)
  // sm: 4px track, 16px thumb; md: 8px track, 20px thumb; lg: 12px track, 24px thumb
  const sizeClasses = {
    sm: {
      trackHeight: 'h-1', // 4px
      thumbSize: 'w-4 h-4', // 16px
      thumbSizeValue: 16, // 16px
      thumbBorder: 'border-[1.6px]',
      iconSize: '2xs', // 12px (size-icon-2xs)
      labelTypography: 'text-md font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium
      containerHeight: 'h-4', // 16px
    },
    md: {
      trackHeight: 'h-2', // 8px
      thumbSize: 'w-5 h-5', // 20px
      thumbSizeValue: 20, // 20px
      thumbBorder: 'border-[3.333px]',
      iconSize: 'xs', // 16px (size-icon-xs)
      labelTypography: 'text-md font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium
      containerHeight: 'h-5', // 20px
    },
    lg: {
      trackHeight: 'h-3', // 12px
      thumbSize: 'w-6 h-6', // 24px
      thumbSizeValue: 24, // 24px
      thumbBorder: 'border-4',
      iconSize: 'sm', // 20px (size-icon-sm)
      labelTypography: 'text-md font-medium leading-[22px] tracking-[-0.112px]', // text-md-medium
      containerHeight: 'h-6', // 24px
    },
  };

  // Função para obter classes de cor
  const getColorClasses = () => {
    if (color === 'brand') {
      return {
        track: 'bg-brand-60',
        thumb: 'bg-brand-60',
        thumbBorder: 'border-gray-0',
      };
    }
    if (color === 'destructive') {
      return {
        track: 'bg-destructive-60',
        thumb: 'bg-destructive-60',
        thumbBorder: 'border-gray-0',
      };
    }
    if (color === 'warning') {
      return {
        track: 'bg-warning-60',
        thumb: 'bg-warning-60',
        thumbBorder: 'border-gray-0',
      };
    }
    if (color === 'success') {
      return {
        track: 'bg-success-60',
        thumb: 'bg-success-60',
        thumbBorder: 'border-gray-0',
      };
    }
    if (color === 'gray') {
      return {
        track: 'bg-gray-60',
        thumb: 'bg-gray-60',
        thumbBorder: 'border-gray-0',
      };
    }
    return {
      track: 'bg-brand-60',
      thumb: 'bg-brand-60',
      thumbBorder: 'border-gray-0',
    };
  };

  const sizeConfig = sizeClasses[size];
  const colors = getColorClasses();

  // Função para calcular o valor baseado na posição do mouse
  const getValueFromPosition = (clientX) => {
    if (!trackRef.current) return 0;

    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.max(0, Math.min(100, Math.round(percentage)));
  };

  // Handler para iniciar o arrasto
  const handleMouseDown = (e, thumbType = null) => {
    if (disabled) return;

    e.preventDefault();
    setIsDragging(true);
    draggingRef.current = true;

    if (type === 'range' && thumbType) {
      setActiveThumb(thumbType);
      activeThumbRef.current = thumbType;
    }

    // Atualizar valor imediatamente ao clicar
    const newValue = getValueFromPosition(e.clientX);

    if (type === 'single') {
      valueRef.current = newValue;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      if (onChange) {
        onChange(newValue);
      }
    } else {
      const [minValue, maxValue] = clampedRange;
      let newRange;

      if (thumbType === 'min') {
        newRange = [Math.min(newValue, maxValue), maxValue];
        activeThumbRef.current = 'min';
        setActiveThumb('min');
      } else if (thumbType === 'max') {
        newRange = [minValue, Math.max(newValue, minValue)];
        activeThumbRef.current = 'max';
        setActiveThumb('max');
      } else {
        // Clicou na track, determinar qual thumb mover
        const distanceToMin = Math.abs(newValue - minValue);
        const distanceToMax = Math.abs(newValue - maxValue);

        if (distanceToMin < distanceToMax) {
          newRange = [Math.min(newValue, maxValue), maxValue];
          activeThumbRef.current = 'min';
          setActiveThumb('min');
        } else {
          newRange = [minValue, Math.max(newValue, minValue)];
          activeThumbRef.current = 'max';
          setActiveThumb('max');
        }
      }

      rangeRef.current = newRange;
      if (!isControlled) {
        setInternalRange(newRange);
      }
      if (onChange) {
        onChange(newRange);
      }
    }
  };

  // Handler para mover durante o arrasto
  const handleMouseMove = (e) => {
    if (!draggingRef.current || disabled) return;

    const newValue = getValueFromPosition(e.clientX);

    if (typeRef.current === 'single') {
      valueRef.current = newValue;
      if (!isControlledRef.current) {
        setInternalValue(newValue);
      }
      if (onChangeRef.current) {
        onChangeRef.current(newValue);
      }
    } else {
      // Para range slider, usar o ref atualizado
      const [minValue, maxValue] = rangeRef.current;
      let newRange;

      if (activeThumbRef.current === 'min') {
        newRange = [Math.min(newValue, maxValue), maxValue];
      } else if (activeThumbRef.current === 'max') {
        newRange = [minValue, Math.max(newValue, minValue)];
      } else {
        return;
      }

      // Atualizar o ref
      rangeRef.current = newRange;

      if (!isControlledRef.current) {
        setInternalRange(newRange);
      }
      if (onChangeRef.current) {
        onChangeRef.current(newRange);
      }
    }
  };

  // Handler para finalizar o arrasto
  const handleMouseUp = () => {
    if (draggingRef.current) {
      setIsDragging(false);
      setActiveThumb(null);
      draggingRef.current = false;
      activeThumbRef.current = null;
    }
  };

  // Adicionar listeners globais para mouse move e up
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Renderizar ícone no handle
  const renderIcon = () => {
    if (!isIcon) return null;

    if (icon) {
      if (typeof icon === 'string') {
        return <Icon name={icon} size={sizeConfig.iconSize} color="gray-0" />;
      }
      return icon;
    }

    // Ícone padrão: DotsSixVertical (6 pontos verticais)
    // Usando um SVG simples para representar os pontos
    return (
      <div className="flex flex-col gap-0.5 items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-0.5 h-0.5 bg-gray-0 rounded-full" />
        ))}
      </div>
    );
  };

  // Renderizar label abaixo do handle
  const renderHandleLabel = (labelValue) => {
    if (!isLabel) return null;

    return (
      <p
        className={`${sizeConfig.labelTypography} text-gray-60 text-center font-primary whitespace-nowrap`}
      >
        {labelValue}%
      </p>
    );
  };

  // Renderizar single slider
  const renderSingleSlider = () => {
    const fillWidth = `${clampedValue}%`;
    const thumbPosition = clampedValue;

    return (
      <div className="flex flex-col gap-xs items-start justify-center">
        {/* Slider Track */}
        <div
          ref={trackRef}
          className="relative w-full cursor-pointer"
          style={{ height: size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px' }}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          {/* Track Background */}
          <div
            className={`absolute top-1/2 left-0 -translate-y-1/2 w-full ${sizeConfig.trackHeight} bg-gray-20 rounded-full`}
          />

          {/* Filled Track */}
          {clampedValue > 0 && (
            <div
              className={`absolute top-1/2 left-0 -translate-y-1/2 ${sizeConfig.trackHeight} ${colors.track} rounded-full ${isDragging ? '' : 'transition-all duration-300 ease-out'}`}
              style={{ width: fillWidth }}
            />
          )}

          {/* Thumb */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${sizeConfig.thumbSize} ${colors.thumb} ${colors.thumbBorder} ${sizeConfig.thumbBorder} border-solid rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing ${isDragging ? 'cursor-grabbing' : 'transition-all duration-300 ease-out'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ left: `calc(${thumbPosition}% - ${sizeConfig.thumbSizeValue / 2}px)` }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e);
            }}
          >
            {renderIcon()}
          </div>
        </div>

        {/* Label do slider (texto + porcentagem fixa) */}
        {isLabel && (
          <div className="flex gap-sm items-start w-full">
            <p className="flex-1 text-md font-bold leading-[22px] tracking-[-0.112px] text-gray-60 font-primary whitespace-pre-wrap">
              {labelText}
            </p>
            <p className={`${sizeConfig.labelTypography} text-gray-60 text-center font-primary`}>
              {clampedValue}%
            </p>
          </div>
        )}
      </div>
    );
  };

  // Renderizar range slider
  const renderRangeSlider = () => {
    const [minValue, maxValue] = clampedRange;
    const fillLeft = minValue;
    const fillWidth = maxValue - minValue;

    return (
      <div className="flex flex-col gap-xs items-start justify-center">
        {/* Slider Track */}
        <div
          ref={trackRef}
          className={`relative w-full cursor-pointer ${sizeConfig.containerHeight}`}
          onMouseDown={(e) => handleMouseDown(e)}
        >
          {/* Track Background */}
          <div
            className={`absolute top-1/2 left-0 -translate-y-1/2 w-full ${sizeConfig.trackHeight} bg-gray-20 rounded-full`}
          />

          {/* Filled Track */}
          {fillWidth > 0 && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${sizeConfig.trackHeight} ${colors.track} rounded-full ${isDragging ? '' : 'transition-all duration-300 ease-out'}`}
              style={{
                left: `${fillLeft}%`,
                width: `${fillWidth}%`,
              }}
            />
          )}

          {/* Thumb Min */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${sizeConfig.thumbSize} ${colors.thumb} ${colors.thumbBorder} ${sizeConfig.thumbBorder} border-solid rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing ${isDragging && activeThumb === 'min' ? 'cursor-grabbing' : 'transition-all duration-300 ease-out'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ left: `calc(${minValue}% - ${sizeConfig.thumbSizeValue / 2}px)` }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, 'min');
            }}
          >
            {renderIcon()}
          </div>

          {/* Thumb Max */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${sizeConfig.thumbSize} ${colors.thumb} ${colors.thumbBorder} ${sizeConfig.thumbBorder} border-solid rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing ${isDragging && activeThumb === 'max' ? 'cursor-grabbing' : 'transition-all duration-300 ease-out'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ left: `calc(${maxValue}% - ${sizeConfig.thumbSizeValue / 2}px)` }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, 'max');
            }}
          >
            {renderIcon()}
          </div>

          {/* Labels abaixo dos thumbs (apenas para range slider) */}
          {isLabel && (
            <>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center ${size === 'sm' ? 'mt-1' : 'mt-2'}`}
                style={{
                  left: `${minValue}%`,
                }}
              >
                {renderHandleLabel(minValue)}
              </div>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 flex flex-col gap-2 items-center ${size === 'sm' ? 'mt-1' : 'mt-2'}`}
                style={{
                  left: `${maxValue}%`,
                }}
              >
                {renderHandleLabel(maxValue)}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // Classes do container
  const containerClasses = `
    flex flex-col
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {type === 'single' ? renderSingleSlider() : renderRangeSlider()}
    </div>
  );
};

export default Slider;
