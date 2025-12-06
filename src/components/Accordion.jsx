import React, { useState } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

/**
 * Componente Accordion do Design System Interstellar
 * Painel expansível/retrátil com header e conteúdo opcional
 * 
 * @param {string} title - Título do accordion
 * @param {React.ReactNode} children - Conteúdo do accordion (exibido quando aberto)
 * @param {string} contentText - Texto do conteúdo (alternativa a children)
 * @param {boolean} isOpened - Se o accordion está aberto inicialmente
 * @param {function} onChange - Callback quando o estado de abertura muda
 * @param {string} state - Estado do accordion: 'default' | 'hover' | 'focused' | 'disabled'
 * @param {string} breakpoint - Breakpoint: 'desktop' | 'mobile'
 * @param {boolean} isStartIcon - Se deve mostrar o ícone inicial
 * @param {string|React.ReactNode} startIcon - Nome do ícone Lucide (string) ou elemento React à esquerda
 * @param {boolean} isEndIcon - Se deve mostrar o ícone final (chevron)
 * @param {string|React.ReactNode} endIcon - Nome do ícone Lucide (string) ou elemento React à direita
 * @param {boolean} isBadge - Se deve mostrar o badge
 * @param {string|number} badgeText - Texto do badge
 * @param {boolean} isCtaButton - Se deve mostrar o botão CTA no conteúdo
 * @param {string} ctaButtonText - Texto do botão CTA
 * @param {function} onCtaClick - Callback ao clicar no botão CTA
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Accordion = ({
  title = 'Insira seu título aqui',
  children,
  contentText,
  isOpened: controlledIsOpened,
  onChange,
  state = 'default',
  breakpoint = 'desktop',
  isStartIcon = true,
  startIcon = 'HelpCircle',
  isEndIcon = true,
  endIcon = 'ChevronDown',
  isBadge = true,
  badgeText = 'Label',
  isCtaButton = true,
  ctaButtonText = 'Botão',
  onCtaClick,
  className = '',
  ...props
}) => {
  const [internalIsOpened, setInternalIsOpened] = useState(false);
  const isControlled = controlledIsOpened !== undefined;
  const isOpened = isControlled ? controlledIsOpened : internalIsOpened;
  const isDisabled = state === 'disabled';

  const handleToggle = () => {
    if (isDisabled) return;
    
    if (isControlled) {
      if (onChange) {
        onChange(!isOpened);
      }
    } else {
      setInternalIsOpened(!internalIsOpened);
    }
  };

  // Mapeamento de breakpoints para classes Tailwind (usando tokens)
  const breakpointClasses = {
    desktop: {
      gap: 'gap-md', // 16px (spacing-md)
      padding: 'p-md', // 16px (spacing-md)
      width: 'w-full',
    },
    mobile: {
      gap: 'gap-sm', // 12px (spacing-sm)
      padding: 'p-md', // 16px (spacing-md)
      width: 'w-full max-w-[343px]', // 343px conforme Figma
    },
  };

  // Função para obter classes de estado
  const getStateClasses = () => {
    if (isDisabled) {
      return {
        background: 'bg-gray-5',
        border: 'border-b border-gray-30',
        text: 'text-gray-30',
        iconColor: 'gray-30',
        contentText: 'text-gray-30',
      };
    }

    if (state === 'focused') {
      return {
        background: 'bg-gray-5',
        border: isOpened ? 'border-b border-brand-30' : 'border border-brand-30',
        text: 'text-gray-80',
        iconColor: 'gray-60',
        contentText: 'text-gray-60',
      };
    }

    if (state === 'hover') {
      return {
        background: 'bg-gray-5',
        border: 'border-b border-gray-30',
        text: 'text-gray-80',
        iconColor: 'gray-60',
        contentText: 'text-gray-60',
      };
    }

    // Default
    return {
      background: 'bg-gray-0',
      border: 'border-b border-gray-30',
      text: 'text-gray-80',
      iconColor: 'gray-60',
      contentText: 'text-gray-60',
    };
  };

  // Função helper para renderizar ícone
  const renderIcon = (icon, isVisible) => {
    if (!isVisible || !icon) return null;

    const stateClasses = getStateClasses();

    if (typeof icon === 'string') {
      return (
        <Icon
          name={icon}
          size="md"
          color={stateClasses.iconColor}
        />
      );
    }

    return icon;
  };

  // Função helper para renderizar badge
  const renderBadge = () => {
    if (!isBadge || !badgeText) return null;

    return (
      <div
        className={`
          px-xs py-2xs
          bg-brand-10
          text-brand-60
          rounded-full
          flex items-center justify-center
          text-xs font-semibold leading-4 tracking-[0.36px]
          font-primary
        `.trim().replace(/\s+/g, ' ')}
      >
        {badgeText}
      </div>
    );
  };

  const breakpointConfig = breakpointClasses[breakpoint];
  const stateConfig = getStateClasses();

  // Classes do container principal
  // Sempre flex-col para manter estrutura consistente
  const containerClasses = `
    ${breakpointConfig.width}
    ${stateConfig.background}
    ${stateConfig.border}
    flex
    flex-col
    items-start
    transition-colors
    ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Classes do header
  // Header sempre em linha com padding
  const headerClasses = `
    flex
    flex-row
    items-center
    ${breakpointConfig.gap}
    ${breakpointConfig.padding}
    w-full
  `.trim().replace(/\s+/g, ' ');

  // Classes do título
  const titleClasses = `
    flex-1
    text-md font-extrabold leading-[22px] tracking-[-0.112px]
    ${stateConfig.text}
    font-primary
    ${breakpoint === 'mobile' ? 'whitespace-pre-wrap' : ''}
  `.trim().replace(/\s+/g, ' ');

  // Classes do conteúdo
  // Conteúdo expande abaixo do header com padding horizontal
  const contentClasses = `
    flex flex-col
    ${breakpointConfig.gap}
    items-start
    px-md
    pb-md
    w-full
  `.trim().replace(/\s+/g, ' ');

  // Classes do texto do conteúdo
  const contentTextClasses = `
    text-sm font-normal leading-[22.4px]
    ${stateConfig.contentText}
    font-primary
    whitespace-pre-wrap
  `.trim().replace(/\s+/g, ' ');

  // Rotação do chevron quando aberto
  const chevronRotation = isOpened ? 'rotate-180' : 'rotate-0';

  return (
    <div
      className={containerClasses}
      onClick={handleToggle}
      role="button"
      aria-expanded={isOpened}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isDisabled) {
          e.preventDefault();
          handleToggle();
        }
      }}
      {...props}
    >
      {/* Header - sempre na mesma linha */}
      <div className={headerClasses}>
        {/* Ícone inicial */}
        {renderIcon(startIcon, isStartIcon)}

        {/* Título */}
        <p className={titleClasses}>
          {title}
        </p>

        {/* Badge */}
        {renderBadge()}

        {/* Ícone final (chevron) - sempre na mesma linha */}
        {renderIcon(endIcon, isEndIcon) && (
          <div className={`ml-auto transition-transform duration-200 ${chevronRotation}`}>
            {renderIcon(endIcon, isEndIcon)}
          </div>
        )}
      </div>

      {/* Conteúdo (quando aberto) - expande abaixo do header */}
      {isOpened && (
        <div className={contentClasses}>
          {/* Texto do conteúdo */}
          {(contentText || children) && (
            <p className={contentTextClasses}>
              {contentText || children}
            </p>
          )}

          {/* Botão CTA */}
          {isCtaButton && (
            <Button
              size="sm"
              color="brand"
              hierarchy="primary"
              onClick={(e) => {
                e.stopPropagation();
                if (onCtaClick) {
                  onCtaClick();
                }
              }}
            >
              {ctaButtonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;

