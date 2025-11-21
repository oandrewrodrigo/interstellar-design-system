import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';

/**
 * Componente Dropdown do Design System Interstellar
 * 
 * @param {string} state - Estado do dropdown: 'default' | 'hover' | 'opened' | 'disabled' | 'error'
 * @param {string} itemType - Tipo de item: 'text' | 'text-icon' | 'avatar' | 'dot' | 'country'
 * @param {boolean} multiple - Se permite seleção múltipla (checkbox) ou única (radio)
 * @param {string} label - Label do dropdown (opcional)
 * @param {string} placeholder - Placeholder do dropdown
 * @param {string} helperText - Texto complementar abaixo do dropdown (opcional)
 * @param {string} errorMessage - Mensagem de erro (mostrada quando state='error')
 * @param {array} options - Array de opções { value, label, icon?, avatar?, dot?, country?, code? }
 * @param {string|array} value - Valor selecionado (string para single, array para multiple)
 * @param {function} onChange - Função de callback ao alterar a seleção
 * @param {boolean} searchable - Se o dropdown tem campo de busca
 * @param {string} searchPlaceholder - Placeholder do campo de busca
 * @param {boolean} disabled - Se o dropdown está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Dropdown = ({
  state = 'default',
  itemType = 'text',
  multiple = false,
  label,
  placeholder = 'Placeholder Text',
  helperText,
  errorMessage,
  options = [],
  value,
  onChange,
  searchable = true,
  searchPlaceholder = 'Search',
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  
  // Gerar um ID único para o grupo de radios
  const generatedId = useId();
  const radioGroupName = props.id ? `dropdown-${props.id}` : `dropdown-${generatedId}`;

  // Filtrar opções baseado na busca
  const filteredOptions = searchable && searchQuery
    ? options.filter(option =>
        option.label?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.value?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Fechar dropdown ao clicar fora (melhorado com cleanup)
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Obter texto exibido no trigger
  const getDisplayText = () => {
    if (!value) return placeholder;
    
    if (multiple && Array.isArray(value)) {
      if (value.length === 0) return placeholder;
      if (value.length === 1) {
        const option = options.find(opt => opt.value === value[0]);
        return option?.label || placeholder;
      }
      return `${value.length} selecionados`;
    } else {
      const option = options.find(opt => opt.value === value);
      return option?.label || placeholder;
    }
  };

  // Verificar se um item está selecionado
  const isSelected = (optionValue) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  // Handler para selecionar item (memoizado com useCallback)
  const handleSelect = useCallback((optionValue) => {
    if (disabled || state === 'disabled') return;

    if (multiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(optionValue)
        ? currentValue.filter(v => v !== optionValue)
        : [...currentValue, optionValue];
      
      if (onChange) {
        onChange(newValue);
      }
    } else {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
    }
  }, [disabled, state, multiple, value, onChange]);

  // Classes de tipografia para label
  const labelTypographyClasses = 'text-sm font-bold leading-5 tracking-[-0.084px]'; // text-sm-bold: 14px, 20px line-height

  // Classes de tipografia para o texto do trigger
  const triggerTypographyClasses = 'text-base font-medium leading-[22px] tracking-[-0.112px]'; // text-md-medium: 16px, 22px line-height

  // Classes de tipografia para helper text
  const helperTextTypographyClasses = 'text-sm font-medium leading-5 tracking-[-0.084px]'; // text-sm-medium: 14px, 20px line-height

  // Classes de tipografia para itens
  const itemTypographyClasses = 'text-base font-semibold leading-[22px] tracking-[-0.112px]'; // text-md-semibold: 16px, 22px line-height

  // Função para obter classes de estado do trigger
  const getTriggerStateClasses = () => {
    const isDisabled = disabled || state === 'disabled';
    const isHover = (state === 'hover' || isOpen) && !isDisabled;
    const isError = state === 'error' && !isDisabled;

    // Background
    let bgClass = 'bg-gray-0';

    // Border
    let borderClass = 'border border-gray-30';
    if (isError) {
      borderClass = 'border border-destructive-60';
    } else if (isHover || isOpen) {
      borderClass = 'border border-gray-40';
    } else if (isDisabled) {
      borderClass = 'border border-gray-30';
    }

    // Text color
    let textColorClass = 'text-gray-60';
    if (isDisabled) {
      textColorClass = 'text-gray-50';
    }

    // Placeholder color
    let placeholderClass = 'placeholder:text-gray-60';
    if (isDisabled) {
      placeholderClass = 'placeholder:text-gray-50';
    }

    return `${bgClass} ${borderClass} ${textColorClass} ${placeholderClass}`;
  };

  // Classes do trigger
  const triggerClasses = `
    flex items-center gap-3
    h-12 px-3
    ${triggerTypographyClasses}
    ${getTriggerStateClasses()}
    rounded-md
    transition-colors
    cursor-pointer
    ${disabled || state === 'disabled' ? 'cursor-not-allowed' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Classes do label
  const labelClasses = `
    ${labelTypographyClasses}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-80'}
    ${disabled || state === 'disabled' ? 'text-gray-50' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Classes do helper text
  const helperTextClasses = `
    ${helperTextTypographyClasses}
    ${state === 'error' ? 'text-destructive-60' : 'text-gray-60'}
    ${disabled || state === 'disabled' ? 'text-gray-50' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Renderizar item do dropdown
  const renderItem = (option) => {
    const selected = isSelected(option.value);
    
    return (
      <div
        key={option.value}
        onClick={() => handleSelect(option.value)}
        className={`
          flex items-center gap-2
          min-h-10 px-2 py-2
          rounded-md
          cursor-pointer
          transition-colors
          ${selected ? 'bg-brand-5' : 'hover:bg-gray-5'}
        `.trim().replace(/\s+/g, ' ')}
      >
        {/* Checkbox ou Radio */}
        {multiple ? (
          <div className="flex-shrink-0">
            <Checkbox
              size="sm"
              checked={selected}
              onChange={() => {}}
              disabled={disabled || state === 'disabled'}
            />
          </div>
        ) : (
          <div className="flex-shrink-0">
            <Radio
              size="sm"
              checked={selected}
              onChange={() => {}}
              disabled={disabled || state === 'disabled'}
              name={radioGroupName}
              value={option.value}
            />
          </div>
        )}

        {/* Conteúdo do item baseado no tipo */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Avatar */}
          {itemType === 'avatar' && option.avatar && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-20 flex items-center justify-center overflow-hidden">
              {typeof option.avatar === 'string' ? (
                <img src={option.avatar} alt={option.label} className="w-full h-full object-cover" />
              ) : (
                option.avatar
              )}
            </div>
          )}

          {/* Dot (Status) */}
          {itemType === 'dot' && option.dot && (
            <div
              className={`flex-shrink-0 w-2 h-2 rounded-full ${
                option.dot === 'online' ? 'bg-success-60' :
                option.dot === 'offline' ? 'bg-gray-40' :
                option.dot === 'busy' ? 'bg-warning-60' :
                option.dot === 'error' ? 'bg-destructive-60' :
                'bg-brand-60'
              }`}
            />
          )}

          {/* Country Flag */}
          {itemType === 'country' && option.flag && (
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              {typeof option.flag === 'string' ? (
                <span className="text-lg">{option.flag}</span>
              ) : (
                option.flag
              )}
            </div>
          )}

          {/* Icon */}
          {itemType === 'text-icon' && option.icon && (
            <div className="flex-shrink-0">
              {typeof option.icon === 'string' ? (
                <Icon name={option.icon} size="sm" color="gray-60" />
              ) : (
                option.icon
              )}
            </div>
          )}

          {/* Label */}
          <span className={`${itemTypographyClasses} ${selected ? 'text-brand-60' : 'text-gray-60'} flex-1 min-w-0 truncate`}>
            {option.label}
          </span>

          {/* Handle/Code (para country) */}
          {itemType === 'country' && option.code && (
            <span className={`${itemTypographyClasses} text-gray-40 flex-shrink-0`}>
              {option.code}
            </span>
          )}

          {/* Handle (para text-icon com handle) */}
          {itemType === 'text-icon' && option.handle && (
            <span className={`${itemTypographyClasses} text-gray-40 flex-shrink-0`}>
              {option.handle}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-2 w-full relative ${className}`} {...props}>
      {/* Label */}
      {label && (
        <label className={labelClasses}>
          {label}
        </label>
      )}

      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={() => {
          if (!disabled && state !== 'disabled') {
            setIsOpen(!isOpen);
            if (!isOpen) {
              setSearchQuery('');
            }
          }
        }}
        className={triggerClasses}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={props.id ? `${props.id}-listbox` : undefined}
        tabIndex={disabled || state === 'disabled' ? -1 : 0}
      >
        <span className="flex-1 min-w-0 truncate">
          {getDisplayText()}
        </span>
        <Icon
          name="ChevronDown"
          size="sm"
          color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown Panel */}
      {isOpen && !disabled && state !== 'disabled' && (
        <div
          ref={dropdownRef}
          id={props.id ? `${props.id}-listbox` : undefined}
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 bg-gray-0 border border-gray-20 rounded-md shadow-lg z-50 max-h-80 overflow-hidden flex flex-col"
        >
          {/* Search */}
          {searchable && (
            <div className="p-2 border-b border-gray-20">
              <div className="[&>div]:!gap-0 [&>div>div]:!bg-gray-5 [&>div>div]:!border-0 [&>div>div]:!p-2 [&>div>div]:!min-h-10 [&>div>div]:!h-auto">
                <Input
                  type="default"
                  size="md"
                  state="default"
                  placeholder={searchPlaceholder}
                  leftIcon="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="overflow-y-auto p-1 flex flex-col gap-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map(renderItem)
            ) : (
              <div className="px-2 py-4 text-center text-gray-40 text-sm">
                Nenhum resultado encontrado
              </div>
            )}
          </div>
        </div>
      )}

      {/* Helper Text ou Error Message */}
      {(helperText || errorMessage) && (
        <p className={helperTextClasses}>
          {state === 'error' && errorMessage ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'opened', 'disabled', 'error']),
  itemType: PropTypes.oneOf(['text', 'text-icon', 'avatar', 'dot', 'country']),
  multiple: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    dot: PropTypes.oneOf(['online', 'offline', 'busy', 'error']),
    flag: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    code: PropTypes.string,
    handle: PropTypes.string,
  })),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  onChange: PropTypes.func,
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

Dropdown.defaultProps = {
  state: 'default',
  itemType: 'text',
  multiple: false,
  placeholder: 'Placeholder Text',
  options: [],
  searchable: true,
  searchPlaceholder: 'Search',
  disabled: false,
  className: '',
};

export default Dropdown;

