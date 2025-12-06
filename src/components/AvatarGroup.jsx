import React from 'react';
import { Avatar } from './Avatar';

/**
 * Componente AvatarGroup do Design System Interstellar
 * Grupo de avatares sobrepostos
 *
 * @param {Array} avatars - Array de objetos com { src, alt } ou URLs de imagens
 * @param {number} maxVisible - Número máximo de avatares visíveis (padrão: 5)
 * @param {string} size - Tamanho dos avatares: 'sm' | 'md' | 'lg'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const AvatarGroup = ({
  avatars = [],
  maxVisible = 5,
  size = 'md',
  className = '',
  ...props
}) => {
  if (!avatars || avatars.length === 0) {
    return null;
  }

  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;

  // Classes do container
  const containerClasses = `
    flex items-center
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {visibleAvatars.map((avatar, index) => {
        const avatarProps =
          typeof avatar === 'string' ? { src: avatar, alt: `Avatar ${index + 1}` } : avatar;

        return (
          <div
            key={index}
            className={`${index > 0 ? '-ml-2' : ''} relative`}
            style={{ zIndex: visibleAvatars.length - index }}
          >
            <div className="border-2 border-gray-0 rounded-full">
              <Avatar {...avatarProps} size={size} />
            </div>
          </div>
        );
      })}
      {remainingCount > 0 && (
        <div className={`-ml-2 relative`} style={{ zIndex: 0 }}>
          <div
            className={`border-2 border-gray-0 rounded-full bg-brand-10 ${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center`}
          >
            <span className="text-sm font-extrabold leading-5 tracking-[-0.084px] text-brand-60 font-primary">
              +{remainingCount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
