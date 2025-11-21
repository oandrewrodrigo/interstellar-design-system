import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente ChatItem do Design System Interstellar
 * Item da lista de conversas/chats
 *
 * @param {string} name - Nome do contato/conversa
 * @param {string} lastMessage - Última mensagem enviada
 * @param {string} time - Hora da última mensagem
 * @param {string|React.ReactNode} avatar - URL ou elemento React do avatar
 * @param {string} avatarType - Tipo de avatar: 'person' | 'logo'
 * @param {boolean} isOnline - Se o usuário está online (apenas para tipo person)
 * @param {boolean} hasUnread - Se tem mensagens não lidas
 * @param {number} unreadCount - Número de mensagens não lidas
 * @param {string} state - Estado do item: 'default' | 'hover' | 'active'
 * @param {function} onClick - Função de callback ao clicar no item
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatItem = ({
  name = 'Andrew Rodrigo',
  lastMessage = 'Cara, o interstellar é demais,...',
  time = '12:25',
  avatar,
  avatarType = 'person', // 'person' | 'logo'
  isOnline = true,
  hasUnread = true,
  unreadCount = 2,
  state = 'default', // 'default' | 'hover' | 'active'
  onClick,
  className = '',
  ...props
}) => {
  const containerClasses = `
    flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors
    ${state === 'active' ? 'bg-brand-5' : 'hover:bg-gray-5'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const nameClasses = `
    text-sm font-bold leading-5 tracking-[-0.084px] truncate
    ${state === 'active' ? 'text-brand-60' : 'text-gray-80'}
  `.trim().replace(/\s+/g, ' ');

  const messageClasses = `
    text-xs font-medium leading-4 tracking-[-0.06px] truncate
    ${state === 'active' ? 'text-brand-60' : 'text-gray-60'}
  `.trim().replace(/\s+/g, ' ');

  const timeClasses = `
    text-xs font-medium leading-4 tracking-[-0.06px]
    ${state === 'active' ? 'text-brand-60' : 'text-gray-60'}
  `.trim().replace(/\s+/g, ' ');

  const unreadCountClasses = `
    flex items-center justify-center w-5 h-5 rounded-full text-2xs font-semibold leading-3 tracking-[-0.04px]
    ${state === 'active' || hasUnread ? 'bg-brand-60 text-gray-0' : 'bg-gray-30 text-gray-60'}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} onClick={onClick} {...props}>
      <div className="relative shrink-0 w-12 h-12">
        <div className="relative rounded-full w-12 h-12 overflow-hidden bg-gray-20 flex items-center justify-center">
          {avatar ? (
            typeof avatar === 'string' ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              avatar
            )
          ) : (
            avatarType === 'person' ? (
              <Icon name="User" size="md" color="gray-60" />
            ) : (
              <Icon name="Briefcase" size="md" color="gray-60" />
            )
          )}
        </div>
        {isOnline && avatarType === 'person' && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-50 border-2 border-gray-0 rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className={nameClasses}>{name}</h3>
          <span className={timeClasses}>{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className={messageClasses}>{lastMessage}</p>
          {hasUnread && unreadCount > 0 && (
            <span className={unreadCountClasses}>{unreadCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

ChatItem.propTypes = {
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  time: PropTypes.string,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  avatarType: PropTypes.oneOf(['person', 'logo']),
  isOnline: PropTypes.bool,
  hasUnread: PropTypes.bool,
  unreadCount: PropTypes.number,
  state: PropTypes.oneOf(['default', 'hover', 'active']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ChatItem.defaultProps = {
  name: 'Andrew Rodrigo',
  lastMessage: 'Cara, o interstellar é demais,...',
  time: '12:25',
  avatarType: 'person',
  isOnline: true,
  hasUnread: true,
  unreadCount: 2,
  state: 'default',
  className: '',
};

export default ChatItem;
