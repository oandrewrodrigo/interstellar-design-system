import React, { useCallback, useId } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Radio do Design System Interstellar
 * 
 * @param {string} size - Tamanho do radio: 'sm' | 'md' | 'lg'
 * @param {string} state - Estado do radio: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {boolean} checked - Se o radio está marcado
 * @param {function} onChange - Função de callback ao alterar o estado
 * @param {boolean} disabled - Se o radio está desabilitado
 * @param {string} name - Nome do grupo de radio buttons (para agrupamento)
 * @param {string} value - Valor do radio button
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento input
 */
export const Radio = ({
  size = 'sm',
  state = 'default',
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  id,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos
  const sizeClasses = {
    sm: {
      container: 'w-4 h-4', // 16px
      innerCircle: 'w-1.5 h-1.5', // 6px
    },
    md: {
      container: 'w-5 h-5', // 20px
      innerCircle: 'w-2 h-2', // 8px
    },
    lg: {
      container: 'w-6 h-6', // 24px
      innerCircle: 'w-2.5 h-2.5', // 10px
    },
  };

  const sizeConfig = sizeClasses[size];
  const isDisabled = disabled || state === 'disabled';
  const isHover = state === 'hover' && !isDisabled;
  const isFocused = state === 'focused' && !isDisabled;

  // Função para obter classes de estado
  const getStateClasses = () => {
    if (isDisabled) {
      if (checked) {
        return {
          container: 'bg-gray-5 border-gray-30',
          innerCircle: 'bg-gray-30',
        };
      }
      return {
        container: 'bg-gray-5 border-gray-30',
        innerCircle: 'bg-transparent',
      };
    }

    if (checked) {
      if (isFocused) {
        return {
          container: 'bg-brand-10 border-brand-60',
          innerCircle: 'bg-brand-60',
        };
      }
      return {
        container: 'bg-brand-10 border-brand-60',
        innerCircle: 'bg-brand-60',
      };
    }

    if (isHover) {
      return {
        container: 'bg-brand-10 border-brand-60',
        innerCircle: 'bg-transparent',
      };
    }

    if (isFocused) {
      return {
        container: 'bg-gray-0 border-brand-60',
        innerCircle: 'bg-transparent',
      };
    }

    return {
      container: 'bg-gray-0 border-gray-30',
      innerCircle: 'bg-transparent',
    };
  };

  const stateClasses = getStateClasses();

  // Gerar ID único se não fornecido
  const generatedId = useId();
  const radioId = id || `radio-${generatedId}`;

  // Handler para mudança (usando useCallback)
  const handleChange = useCallback((e) => {
    if (isDisabled) return;
    if (onChange) {
      onChange(e);
    }
  }, [isDisabled, onChange]);

  // Classes do container
  const containerClasses = `
    ${sizeConfig.container}
    rounded-full
    ${stateClasses.container}
    border
    flex items-center justify-center
    transition-colors
    relative
    ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <label 
      htmlFor={radioId}
      className={`relative inline-flex ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <input
        type="radio"
        id={radioId}
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
        name={name}
        value={value}
        className="sr-only"
        {...props}
      />
      <div className={containerClasses}>
        {/* Círculo interno quando checked */}
        {checked && (
          <div className={`${sizeConfig.innerCircle} ${stateClasses.innerCircle} rounded-full absolute`} />
        )}
      </div>
    </label>
  );
};

Radio.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  id: PropTypes.string,
};

Radio.defaultProps = {
  size: 'sm',
  state: 'default',
  checked: false,
  disabled: false,
  className: '',
};

export default Radio;

