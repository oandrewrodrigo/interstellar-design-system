import { Icon } from './Icon';

/**
 * Componente Checkbox do Design System Interstellar
 * 
 * @param {string} size - Tamanho do checkbox: 'sm' | 'md' | 'lg'
 * @param {string} state - Estado do checkbox: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {boolean} checked - Se o checkbox está marcado
 * @param {boolean} indeterminate - Se o checkbox está em estado indeterminado
 * @param {function} onChange - Função de callback ao alterar o estado
 * @param {boolean} disabled - Se o checkbox está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento input
 */
export const Checkbox = ({
  size = 'sm',
  state = 'default',
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos
  const sizeClasses = {
    sm: {
      container: 'w-4 h-4', // 16px
      borderRadius: 'rounded-[6px]',
      iconSize: 'xs', // Para o ícone de check
    },
    md: {
      container: 'w-5 h-5', // 20px
      borderRadius: 'rounded-[8px]',
      iconSize: 'sm', // Para o ícone de check
    },
    lg: {
      container: 'w-6 h-6', // 24px
      borderRadius: 'rounded-[10px]',
      iconSize: 'sm', // Para o ícone de check
    },
  };

  const sizeConfig = sizeClasses[size];
  const isDisabled = disabled || state === 'disabled';
  const isHover = state === 'hover' && !isDisabled;
  const isFocused = state === 'focused' && !isDisabled;

  // Função para obter classes de estado
  const getStateClasses = () => {
    if (isDisabled) {
      if (checked || indeterminate) {
        return {
          container: 'bg-gray-5 border-gray-30',
          iconColor: 'gray-30',
        };
      }
      return {
        container: 'bg-gray-5 border-gray-30',
        iconColor: 'gray-30',
      };
    }

    if (checked || indeterminate) {
      if (isFocused) {
        return {
          container: 'bg-brand-60 border-brand-60 shadow-[0px_0px_0px_4px_rgba(79,70,229,0.25)]',
          iconColor: 'gray-0',
        };
      }
      return {
        container: 'bg-brand-60 border-brand-60',
        iconColor: 'gray-0',
      };
    }

    if (isHover || isFocused) {
      return {
        container: 'bg-brand-10 border-brand-60',
        iconColor: 'gray-0',
      };
    }

    return {
      container: 'bg-gray-0 border-gray-30',
      iconColor: 'gray-0',
    };
  };

  const stateClasses = getStateClasses();

    if (isDisabled) return;
    if (onChange) {
      onChange(e);
    }

  // Classes do container
  const containerClasses = `
    ${sizeConfig.container}
    ${sizeConfig.borderRadius}
    ${stateClasses.container}
    border
    flex items-center justify-center
    transition-colors
    ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
        className="sr-only"
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
        {...props}
      />
      <div className={containerClasses}>
        {/* Ícone de check ou menos */}
        {(checked || indeterminate) && (
          <div className="flex items-center justify-center">
            {indeterminate ? (
              <Icon
                name="Minus"
                size={sizeConfig.iconSize}
                color={stateClasses.iconColor}
              />
            ) : (
              <Icon
                name="Check"
                size={sizeConfig.iconSize}
                color={stateClasses.iconColor}
              />
            )}
          </div>
        )}
      </div>
    </label>
  );
};

export default Checkbox;

