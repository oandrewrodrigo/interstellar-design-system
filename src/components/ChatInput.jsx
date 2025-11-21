import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente ChatInput do Design System Interstellar
 *
 * @param {string} placeholder - Placeholder do input
 * @param {string} value - Valor do input
 * @param {function} onChange - Função de callback ao alterar o valor
 * @param {function} onSend - Função de callback ao enviar mensagem
 * @param {function} onAttach - Função de callback ao clicar em anexar
 * @param {function} onRecord - Função de callback ao clicar em gravar
 * @param {boolean} showAttach - Se deve mostrar botão de anexar
 * @param {boolean} showRecord - Se deve mostrar botão de gravar
 * @param {boolean} disabled - Se o input está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatInput = ({
  placeholder = 'Mensagem',
  value = '',
  onChange,
  onSend,
  onAttach,
  onRecord,
  showAttach = true,
  showRecord = true,
  disabled = false,
  className = '',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const handleSend = useCallback(() => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue);
      setInputValue('');
    }
  }, [inputValue, onSend]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleAttach = useCallback(() => {
    if (onAttach) {
      onAttach();
    }
  }, [onAttach]);

  const handleRecord = useCallback(() => {
    if (onRecord) {
      onRecord();
    }
  }, [onRecord]);

  // Classes do container
  const containerClasses = `
    bg-gray-0 border border-gray-30 rounded-md
    flex items-center gap-4
    p-3
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Classes do input
  const inputClasses = `
    flex-1 min-w-0
    bg-transparent
    border-0 outline-none
    text-base font-medium leading-[22px] tracking-[-0.112px]
    text-gray-80
    placeholder:text-gray-60
    focus:outline-none focus:ring-0
    ${disabled ? 'cursor-not-allowed' : ''}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {/* Botão Anexar */}
      {showAttach && (
        <button
          type="button"
          onClick={handleAttach}
          disabled={disabled}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-5 transition-colors shrink-0 disabled:cursor-not-allowed"
          aria-label="Anexar arquivo"
        >
          <Icon name="Plus" size="md" color="gray-60" />
        </button>
      )}

      {/* Input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
      />

      {/* Botões de ação */}
      <div className="flex items-center gap-1 shrink-0">
        {/* Botão Gravar */}
        {showRecord && (
          <button
            type="button"
            onClick={handleRecord}
            disabled={disabled}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-5 transition-colors disabled:cursor-not-allowed"
            aria-label="Gravar áudio"
          >
            <Icon name="Mic2" size="md" color="gray-60" />
          </button>
        )}

        {/* Botão Enviar */}
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled || !inputValue.trim()}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-70 transition-colors disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
          style={{ backgroundColor: inputValue.trim() && !disabled ? '#2656C8' : 'transparent' }}
          aria-label="Enviar mensagem"
        >
          <Icon
            name="Send"
            size="md"
            color={inputValue.trim() && !disabled ? 'gray-0' : 'gray-60'}
          />
        </button>
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSend: PropTypes.func,
  onAttach: PropTypes.func,
  onRecord: PropTypes.func,
  showAttach: PropTypes.bool,
  showRecord: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

ChatInput.defaultProps = {
  placeholder: 'Mensagem',
  value: '',
  showAttach: true,
  showRecord: true,
  disabled: false,
  className: '',
};

export default ChatInput;
