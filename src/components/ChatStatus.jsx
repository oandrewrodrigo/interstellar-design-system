import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente ChatStatus do Design System Interstellar
 * Indicador de status de mensagem (enviada, entregue, lida, falhou)
 *
 * @param {string} status - Status da mensagem: 'sent' | 'delivered' | 'read' | 'failed'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatStatus = ({ status = 'sent', className = '', ...props }) => {
  // Determinar ícone e cor baseado no status
  const statusConfig = {
    sent: { icon: 'Check', color: 'gray-60' },
    delivered: { icon: 'CheckCheck2', color: 'gray-60' },
    read: { icon: 'CheckCheck2', color: 'brand-60' },
    failed: { icon: 'X', color: 'destructive-60' },
  };

  const config = statusConfig[status] || statusConfig.sent;

  return (
    <div className={`flex items-center gap-1 ${className}`} {...props}>
      <Icon name={config.icon} size="2xs" color={config.color} />
      <span className="text-xs font-medium leading-4 tracking-[-0.06px] text-gray-60">
        {status === 'sent' && 'Enviada'}
        {status === 'delivered' && 'Enviado'}
        {status === 'read' && 'Lida'}
        {status === 'failed' && 'Falhou ao enviar'}
      </span>
    </div>
  );
};

ChatStatus.propTypes = {
  status: PropTypes.oneOf(['sent', 'delivered', 'read', 'failed']),
  className: PropTypes.string,
};

ChatStatus.defaultProps = {
  status: 'sent',
  className: '',
};

export default ChatStatus;
