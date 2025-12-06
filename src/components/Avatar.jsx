import React from 'react';

/**
 * Componente Avatar do Design System Interstellar
 *
 * @param {string} src - URL da imagem do avatar
 * @param {string} alt - Texto alternativo para a imagem
 * @param {string} size - Tamanho do avatar: 'sm' | 'md' | 'lg'
 * @param {string} className - Classes CSS adicionais
 */
export function Avatar({ src, alt, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-6 h-6', // 24px
    md: 'w-8 h-8', // 32px
    lg: 'w-10 h-10', // 40px
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-20 overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-brand-60 to-purple-60"></div>
      )}
    </div>
  );
}

export default Avatar;
