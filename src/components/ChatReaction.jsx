import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ChatReaction do Design System Interstellar
 * Reação a uma mensagem (emoji ou texto)
 *
 * @param {string} reaction - Texto ou emoji da reação
 * @param {string} size - Tamanho: 'sm' | 'md' | 'lg'
 * @param {boolean} isText - Se a reação é texto (emoji) ou não
 * @param {function} onClick - Função de callback ao clicar
 * @param {boolean} isSelected - Se a reação está selecionada
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatReaction = ({
  reaction = '👍',
  size = 'md',
  isText = true,
  onClick,
  isSelected = false,
  className = '',
  ...props
}) => {
  // Mapeamento de tamanhos
  const sizeClasses = {
    sm: {
      container: isText ? 'h-7 px-2' : 'w-[31px] h-7',
      text: 'text-xs',
    },
    md: {
      container: isText ? 'h-[30px] px-2.5' : 'w-[33px] h-[30px]',
      text: 'text-sm',
    },
    lg: {
      container: isText ? 'h-8 px-3' : 'w-[35px] h-8',
      text: 'text-base',
    },
  };

  const sizeConfig = sizeClasses[size];

  // Classes do container
  const containerClasses = `
    ${sizeConfig.container}
    rounded-full
    flex items-center justify-center
    ${isSelected ? 'bg-brand-10 border border-brand-60' : 'bg-gray-0 border border-gray-30'}
    ${onClick ? 'cursor-pointer hover:bg-gray-5 transition-colors' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div
      className={containerClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(e);
        }
      }}
      {...props}
    >
      {isText ? (
        <span className={sizeConfig.text}>{reaction}</span>
      ) : (
        <span className={sizeConfig.text}>{reaction}</span>
      )}
    </div>
  );
};

ChatReaction.propTypes = {
  reaction: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isText: PropTypes.bool,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
};

ChatReaction.defaultProps = {
  reaction: '👍',
  size: 'md',
  isText: true,
  isSelected: false,
  className: '',
};

export default ChatReaction;
