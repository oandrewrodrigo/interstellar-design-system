import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente DropdownAccount do Design System Interstellar
 * Menu dropdown para conta do usuário com header, itens de menu e atalhos de teclado
 * 
 * @param {string} triggerType - Tipo de trigger: 'avatar' | 'button' | 'button-icon'
 * @param {string} state - Estado do dropdown: 'default' | 'hover' | 'opened' | 'disabled'
 * @param {object} user - Objeto com informações do usuário { name, email, avatar?, status? }
 * @param {array} menuItems - Array de itens do menu { value, label, icon, shortcut?, divider? }
 * @param {function} onItemClick - Função de callback ao clicar em um item
 * @param {function} onLogout - Função de callback ao clicar em logout
 * @param {boolean} disabled - Se o dropdown está desabilitado
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const DropdownAccount = ({
  triggerType = 'avatar',
  state = 'default',
  user = {
    name: 'Cara do Marketing',
    email: 'ocaradomarketing@gmail.com',
    avatar: null,
    status: 'online'
  },
  menuItems = [],
  onItemClick,
  onLogout,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(state === 'opened');
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Atualizar estado baseado na prop state
  // Sincronização controlada - necessário usar useEffect para sincronizar com prop externa
  useEffect(() => {
    if (state === 'opened') {
      setIsOpen(true);
    } else if (state !== 'opened' && state !== 'hover') {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Sincronização controlada necessária
  }, [state]);

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
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handler para clicar em item (memoizado com useCallback)
  const handleItemClick = useCallback((item) => {
    if (disabled || state === 'disabled') return;
    
    if (item.value === 'logout' && onLogout) {
      onLogout();
    } else if (onItemClick) {
      onItemClick(item);
    }
    
    setIsOpen(false);
  }, [disabled, state, onLogout, onItemClick]);

  // Formatar atalho de teclado
  const formatShortcut = (shortcut) => {
    if (!shortcut) return null;
    // Substituir Command por Ctrl
    return shortcut.replace(/Command/gi, 'Ctrl').replace(/⌘/g, 'Ctrl');
  };

  // Classes de tipografia
  const nameTypographyClasses = 'text-base font-bold leading-[22px] tracking-[-0.112px]'; // text-md-bold: 16px, 22px line-height
  const emailTypographyClasses = 'text-sm font-medium leading-5 tracking-[-0.084px]'; // text-sm-medium: 14px, 20px line-height
  const itemTypographyClasses = 'text-sm font-semibold leading-5 tracking-[-0.084px]'; // text-sm-semibold: 14px, 20px line-height
  const shortcutTypographyClasses = 'text-sm font-medium leading-5 tracking-[-0.084px]'; // text-sm-medium: 14px, 20px line-height
  const buttonTypographyClasses = 'text-sm font-bold leading-5 tracking-[-0.084px]'; // text-sm-bold: 14px, 20px line-height

  // Renderizar trigger baseado no tipo
  const renderTrigger = () => {
    if (triggerType === 'avatar') {
      return (
        <div
          ref={triggerRef}
          onClick={() => !disabled && state !== 'disabled' && setIsOpen(!isOpen)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-20 flex items-center justify-center overflow-hidden">
              {user.avatar ? (
                typeof user.avatar === 'string' ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.avatar
                )
              ) : (
                <Icon name="User" size="md" color="gray-60" />
              )}
            </div>
            {user.status && user.status === 'online' && (
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success-50 border-2 border-gray-0 rounded-full" />
            )}
          </div>
          <Icon
            name="ChevronDown"
            size="xs"
            color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      );
    }

    if (triggerType === 'button') {
      return (
        <div
          ref={triggerRef}
          onClick={() => !disabled && state !== 'disabled' && setIsOpen(!isOpen)}
          className={`
            flex items-center gap-2
            px-4 py-2.5
            border border-gray-30
            rounded-md
            cursor-pointer
            transition-colors
            ${buttonTypographyClasses}
            ${disabled || state === 'disabled' ? 'text-gray-50 cursor-not-allowed' : 'text-gray-60 hover:border-gray-40'}
          `.trim().replace(/\s+/g, ' ')}
        >
          <span>Conta</span>
          <Icon
            name="ChevronDown"
            size="xs"
            color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      );
    }

    if (triggerType === 'button-icon') {
      return (
        <div
          ref={triggerRef}
          onClick={() => !disabled && state !== 'disabled' && setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center
            w-10 h-10
            rounded-full
            border border-gray-30
            cursor-pointer
            transition-colors
            ${disabled || state === 'disabled' ? 'text-gray-50 cursor-not-allowed' : 'text-gray-60 hover:border-gray-40'}
          `.trim().replace(/\s+/g, ' ')}
        >
          <Icon
            name="MoreHorizontal"
            size="sm"
            color={disabled || state === 'disabled' ? 'gray-50' : 'gray-60'}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`relative ${className}`} {...props}>
      {/* Trigger */}
      <div
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        tabIndex={disabled || state === 'disabled' ? -1 : 0}
      >
        {renderTrigger()}
      </div>

      {/* Dropdown Panel */}
      {isOpen && !disabled && state !== 'disabled' && (
        <div
          ref={dropdownRef}
          role="menu"
          className="absolute top-full right-0 mt-2 w-80 bg-gray-0 border border-gray-20 rounded-md shadow-lg z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-20">
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-20 flex items-center justify-center overflow-hidden">
                {user.avatar ? (
                  typeof user.avatar === 'string' ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.avatar
                  )
                ) : (
                  <Icon name="User" size="md" color="gray-60" />
                )}
              </div>
              {user.status && user.status === 'online' && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success-50 border-2 border-gray-0 rounded-full" />
              )}
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className={`${nameTypographyClasses} text-gray-80 truncate`}>
                {user.name}
              </span>
              {user.email && (
                <span className={`${emailTypographyClasses} text-gray-50 truncate`}>
                  {user.email}
                </span>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.value || index}>
                {item.divider && index > 0 && (
                  <div className="h-px bg-gray-20 my-1" />
                )}
                <div
                  onClick={() => handleItemClick(item)}
                  className={`
                    flex items-center gap-3
                    px-4 py-2.5
                    cursor-pointer
                    transition-colors
                    ${item.value === 'logout' ? 'hover:bg-gray-5' : 'hover:bg-gray-5'}
                  `.trim().replace(/\s+/g, ' ')}
                >
                  {/* Icon */}
                  {item.icon && (
                    <div className="flex-shrink-0">
                      {typeof item.icon === 'string' ? (
                        <Icon
                          name={item.icon}
                          size="sm"
                          color={item.value === 'logout' ? 'destructive-60' : 'gray-60'}
                        />
                      ) : (
                        item.icon
                      )}
                    </div>
                  )}

                  {/* Label */}
                  <span className={`${itemTypographyClasses} ${item.value === 'logout' ? 'text-destructive-60' : 'text-gray-80'} flex-1`}>
                    {item.label}
                  </span>

                  {/* Shortcut */}
                  {item.shortcut && (
                    <span className={`${shortcutTypographyClasses} text-gray-40 flex-shrink-0`}>
                      {formatShortcut(item.shortcut)}
                    </span>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownAccount.propTypes = {
  triggerType: PropTypes.oneOf(['avatar', 'button', 'button-icon']),
  state: PropTypes.oneOf(['default', 'hover', 'opened', 'disabled']),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    status: PropTypes.oneOf(['online', 'offline', 'busy']),
  }),
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    shortcut: PropTypes.string,
    divider: PropTypes.bool,
  })),
  onItemClick: PropTypes.func,
  onLogout: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

DropdownAccount.defaultProps = {
  triggerType: 'avatar',
  state: 'default',
  user: {
    name: 'Cara do Marketing',
    email: 'ocaradomarketing@gmail.com',
    avatar: null,
    status: 'online'
  },
  menuItems: [],
  disabled: false,
  className: '',
};

export default DropdownAccount;

