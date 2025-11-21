import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente ChatTopNav do Design System Interstellar
 * Barra superior do chat com informações do usuário e ações
 * 
 * @param {string} name - Nome do usuário/conversa
 * @param {string} caption - Caption/username abaixo do nome
 * @param {string} avatar - URL ou path do avatar
 * @param {boolean} showSearch - Se deve mostrar botão de busca
 * @param {boolean} showMore - Se deve mostrar botão de mais opções
 * @param {function} onSearch - Função de callback ao clicar em buscar
 * @param {function} onMore - Função de callback ao clicar em mais opções
 * @param {function} onBack - Função de callback ao clicar em voltar
 * @param {boolean} showBack - Se deve mostrar botão de voltar
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatTopNav = ({
  name = 'Andrew Rodrigo',
  caption = '@andrewrodrigo',
  avatar,
  showSearch = true,
  showMore = true,
  onSearch,
  onMore,
  onBack,
  showBack = false,
  className = '',
  ...props
}) => {
  // Classes do container
  const containerClasses = `
    bg-gray-5 border-b border-gray-30
    px-6 py-4
    flex items-center justify-between
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Renderizar avatar
  const renderAvatar = () => {
    if (avatar) {
      return (
        <div className="relative rounded-full shrink-0 w-12 h-12 overflow-hidden bg-gray-20">
          {typeof avatar === 'string' ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            avatar
          )}
        </div>
      );
    }
    
    return (
      <div className="relative rounded-full shrink-0 w-12 h-12 overflow-hidden bg-gray-20 flex items-center justify-center">
        <Icon name="User" size="md" color="gray-60" />
      </div>
    );
  };

  return (
    <div className={containerClasses} {...props}>
      {/* Lado Esquerdo - Avatar e Info */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Botão Voltar */}
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-10 transition-colors shrink-0"
            aria-label="Voltar"
          >
            <Icon name="ChevronLeft" size="md" color="gray-60" />
          </button>
        )}

        {/* Avatar */}
        {renderAvatar()}

        {/* Nome e Caption */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <h3 className="text-base font-bold leading-[22px] tracking-[-0.112px] text-gray-80 truncate">
            {name}
          </h3>
          {caption && (
            <p className="text-sm font-medium leading-5 tracking-[-0.084px] text-gray-60 truncate">
              {caption}
            </p>
          )}
        </div>
      </div>

      {/* Lado Direito - Ações */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Botão Buscar */}
        {showSearch && (
          <button
            type="button"
            onClick={onSearch}
            className="w-12 h-12 rounded-full border border-gray-30 flex items-center justify-center hover:bg-gray-0 transition-colors"
            aria-label="Buscar"
          >
            <Icon name="Search" size="md" color="gray-60" />
          </button>
        )}

        {/* Botão Mais Opções */}
        {showMore && (
          <button
            type="button"
            onClick={onMore}
            className="w-12 h-12 rounded-full border border-gray-30 flex items-center justify-center hover:bg-gray-0 transition-colors"
            aria-label="Mais opções"
          >
            <Icon name="MoreVertical" size="md" color="gray-60" />
          </button>
        )}
      </div>
    </div>
  );
};

ChatTopNav.propTypes = {
  name: PropTypes.string,
  caption: PropTypes.string,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showSearch: PropTypes.bool,
  showMore: PropTypes.bool,
  onSearch: PropTypes.func,
  onMore: PropTypes.func,
  onBack: PropTypes.func,
  showBack: PropTypes.bool,
  className: PropTypes.string,
};

ChatTopNav.defaultProps = {
  name: 'Andrew Rodrigo',
  caption: '@andrewrodrigo',
  showSearch: true,
  showMore: true,
  showBack: false,
  className: '',
};

export default ChatTopNav;

