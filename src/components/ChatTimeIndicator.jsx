import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente ChatTimeIndicator do Design System Interstellar
 * Indicador de data/hora separando mensagens
 *
 * @param {string} text - Texto do indicador (ex: "Hoje", "Ontem", "20 de Nov")
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatTimeIndicator = ({ text = 'Hoje', className = '', ...props }) => {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`} {...props}>
      <div className="bg-gray-5 border border-gray-20 rounded-full px-3 py-1">
        <span className="text-xs font-medium leading-4 tracking-[-0.06px] text-gray-60">
          {text}
        </span>
      </div>
    </div>
  );
};

ChatTimeIndicator.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

ChatTimeIndicator.defaultProps = {
  text: 'Hoje',
  className: '',
};

export default ChatTimeIndicator;
