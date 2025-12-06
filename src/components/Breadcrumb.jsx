import React from 'react';
import { Icon } from './Icon';

/**
 * Componente Breadcrumb do Design System Interstellar
 * Navegação de migalhas de pão para indicar a localização atual na hierarquia
 *
 * @param {Array} items - Array de objetos com { label, href?, onClick? } ou strings simples
 * @param {string} style - Estilo dos itens: 'Default' | 'Fill' | 'Outlined'
 * @param {boolean} isBoxed - Se o breadcrumb deve estar dentro de um container com borda
 * @param {string} divider - Tipo de separador: 'Icon' | 'Slash' | 'Colon'
 * @param {boolean} showHomeIcon - Se deve mostrar o ícone de home inicial
 * @param {string|React.ReactNode} homeIcon - Nome do ícone Lucide (string) ou elemento React para o ícone home
 * @param {function} onItemClick - Callback quando um item é clicado (recebe item, index)
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Breadcrumb = ({
  items = [],
  style = 'Default',
  isBoxed = false,
  divider = 'Icon',
  showHomeIcon = true,
  homeIcon = 'Home',
  onItemClick,
  className = '',
  ...props
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  // Renderizar o separador entre itens
  const renderDivider = () => {
    if (divider === 'Icon') {
      return <Icon name="ChevronRight" size="sm" color="gray-30" className="shrink-0" />;
    }

    if (divider === 'Slash') {
      return (
        <span className="text-sm font-semibold leading-5 text-gray-30 shrink-0 w-5 h-5 flex items-center justify-center pb-1 whitespace-pre-wrap">
          /
        </span>
      );
    }

    if (divider === 'Colon') {
      return (
        <span className="text-sm font-semibold leading-5 text-gray-30 shrink-0 w-5 h-5 flex items-center justify-center pb-1">
          :
        </span>
      );
    }

    return null;
  };

  // Renderizar um item do breadcrumb
  const renderItem = (item, index, isLast) => {
    const itemLabel = typeof item === 'string' ? item : item.label || '';
    const itemHref = typeof item === 'object' ? item.href : undefined;
    const itemOnClick = typeof item === 'object' ? item.onClick : undefined;
    const isCurrent = isLast;

    // Classes base do item
    const baseItemClasses = 'flex gap-3xs items-center shrink-0';

    // Classes de estilo do item
    const getItemStyleClasses = () => {
      if (isCurrent) {
        // Item atual/ativo
        if (style === 'Default') {
          return 'text-brand-60';
        }
        if (style === 'Fill') {
          return 'bg-brand-10 text-brand-60 px-2 py-1.5 rounded-md';
        }
        if (style === 'Outlined') {
          return 'border border-brand-60 text-brand-60 px-2 py-1.5 rounded-md';
        }
      } else {
        // Itens não ativos
        if (style === 'Default') {
          return 'text-gray-60';
        }
        if (style === 'Fill') {
          return 'bg-gray-5 text-gray-60 px-2 py-1.5 rounded-md';
        }
        if (style === 'Outlined') {
          return 'border border-gray-30 text-gray-60 px-2 py-1.5 rounded-md';
        }
      }
      return '';
    };

    const itemClasses = `
      ${baseItemClasses}
      ${getItemStyleClasses()}
    `
      .trim()
      .replace(/\s+/g, ' ');

    const handleClick = (e) => {
      if (itemOnClick) {
        itemOnClick(e, item, index);
      }
      if (onItemClick) {
        onItemClick(item, index);
      }
    };

    const content = (
      <span className="text-sm font-bold leading-5 tracking-[-0.084px] font-primary">
        {itemLabel}
      </span>
    );

    if (itemHref && !isCurrent) {
      return (
        <a key={index} href={itemHref} onClick={handleClick} className={itemClasses}>
          {content}
        </a>
      );
    }

    return (
      <div
        key={index}
        onClick={handleClick}
        className={`${itemClasses} ${!isCurrent && itemHref ? 'cursor-pointer' : ''}`}
      >
        {content}
      </div>
    );
  };

  // Renderizar o ícone home
  const renderHomeIcon = () => {
    if (!showHomeIcon) return null;

    const homeIconClasses = `
      box-border flex items-center justify-center overflow-clip p-md
      rounded-full shrink-0 w-sm-old h-sm-old
    `
      .trim()
      .replace(/\s+/g, ' ');

    if (typeof homeIcon === 'string') {
      return (
        <div className={homeIconClasses}>
          <Icon name={homeIcon} size="xs" color="gray-60" />
        </div>
      );
    }

    return <div className={homeIconClasses}>{homeIcon}</div>;
  };

  // Classes do container principal
  const containerClasses = `
    flex gap-xs items-center relative
    ${isBoxed ? 'border border-gray-30 rounded-xl p-sm' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <nav className={containerClasses} aria-label="Breadcrumb" {...props}>
      {renderHomeIcon()}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <div className="shrink-0">{renderDivider()}</div>}
            {renderItem(item, index, isLast)}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
