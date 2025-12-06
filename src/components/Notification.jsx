import React from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

/**
 * Componente Notification do Design System Interstellar
 * Componente de notificação/alerta com ícone, título, texto de suporte, botão de ação e botão de fechar
 * 
 * @param {string} color - Cor da notificação: 'brand' | 'gray' | 'destructive' | 'warning' | 'success'
 * @param {string} hierarchy - Hierarquia: 'primary' | 'secondary'
 * @param {string} title - Título da notificação
 * @param {string} supportingText - Texto de suporte (opcional)
 * @param {string|React.ReactNode} icon - Nome do ícone Lucide (string) ou elemento React (opcional, padrão: Info)
 * @param {string} actionButtonLabel - Label do botão de ação (opcional)
 * @param {function} onActionClick - Função de callback ao clicar no botão de ação
 * @param {function} onClose - Função de callback ao clicar no botão de fechar
 * @param {boolean} showActionButton - Se deve mostrar o botão de ação
 * @param {boolean} showClose - Se deve mostrar o botão de fechar
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Notification = ({
  color = 'gray',
  hierarchy = 'secondary',
  title = 'Titulo do Alerta',
  supportingText,
  icon,
  actionButtonLabel = 'Botão',
  onActionClick,
  onClose,
  showActionButton = true,
  showClose = true,
  className = '',
  ...props
}) => {
  // Classes de tipografia
  const titleTypographyClasses = 'text-base font-extrabold leading-[22px] tracking-[-0.112px]'; // text-md-extrabold: 16px, 22px line-height
  const supportingTextTypographyClasses = 'text-sm font-semibold leading-5 tracking-[-0.084px]'; // text-sm-semibold: 14px, 20px line-height

  // Função para obter classes de cor e hierarquia
  const getColorClasses = () => {
    if (hierarchy === 'primary') {
      // Primary: fundo escuro/saturado
      if (color === 'brand') {
        return {
          container: 'bg-brand-60 border-brand-30',
          title: 'text-gray-0',
          supportingText: 'text-gray-10',
          icon: 'gray-0',
          buttonColor: 'gray',
          buttonHierarchy: 'secondary',
          buttonTextColor: 'text-brand-60',
          closeIcon: 'gray-0',
        };
      }
      if (color === 'destructive') {
        return {
          container: 'bg-destructive-50 border-destructive-30',
          title: 'text-gray-0',
          supportingText: 'text-gray-10',
          icon: 'gray-0',
          buttonColor: 'gray',
          buttonHierarchy: 'secondary',
          buttonTextColor: 'text-destructive-50',
          closeIcon: 'gray-0',
        };
      }
      if (color === 'warning') {
        return {
          container: 'bg-warning-50 border-warning-30',
          title: 'text-gray-0',
          supportingText: 'text-gray-10',
          icon: 'gray-0',
          buttonColor: 'warning',
          buttonHierarchy: 'secondary',
          buttonBg: 'bg-warning-5',
          buttonTextColor: 'text-warning-50',
          buttonFocusRing: 'focus:ring-warning-50',
          closeIcon: 'gray-0',
        };
      }
      if (color === 'success') {
        return {
          container: 'bg-success-50 border-success-20',
          title: 'text-gray-0',
          supportingText: 'text-gray-10',
          icon: 'gray-0',
          buttonColor: 'success',
          buttonHierarchy: 'secondary',
          buttonBg: 'bg-success-5',
          buttonTextColor: 'text-success-50',
          buttonFocusRing: 'focus:ring-success-50',
          closeIcon: 'gray-0',
        };
      }
      // Gray Primary
      return {
        container: 'bg-gray-80 border-gray-60',
        title: 'text-gray-0',
        supportingText: 'text-gray-10',
        icon: 'gray-30',
        buttonColor: 'gray',
        buttonHierarchy: 'secondary',
        buttonTextColor: 'text-gray-80',
        closeIcon: 'gray-0',
      };
    } else {
      // Secondary: fundo claro
      if (color === 'brand') {
        return {
          container: 'bg-brand-10 border-brand-20',
          title: 'text-gray-80',
          supportingText: 'text-gray-60',
          icon: 'brand-60',
          buttonColor: 'brand',
          buttonHierarchy: 'primary',
          buttonTextColor: 'text-gray-0',
          closeIcon: 'gray-60',
        };
      }
      if (color === 'destructive') {
        return {
          container: 'bg-destructive-5 border-destructive-20',
          title: 'text-gray-80',
          supportingText: 'text-gray-60',
          icon: 'destructive-50',
          buttonColor: 'destructive',
          buttonHierarchy: 'primary',
          buttonTextColor: 'text-gray-0',
          closeIcon: 'gray-60',
        };
      }
      if (color === 'warning') {
        return {
          container: 'bg-warning-5 border-warning-20',
          title: 'text-gray-80',
          supportingText: 'text-gray-60',
          icon: 'warning-50',
          buttonColor: 'gray',
          buttonHierarchy: 'primary',
          buttonBg: 'bg-gray-90',
          buttonTextColor: 'text-gray-0',
          buttonFocusRing: 'focus:ring-gray-90',
          closeIcon: 'gray-60',
        };
      }
      if (color === 'success') {
        return {
          container: 'bg-success-5 border-success-20',
          title: 'text-gray-80',
          supportingText: 'text-gray-60',
          icon: 'success-50',
          buttonColor: 'success',
          buttonHierarchy: 'primary',
          buttonBg: 'bg-success-50',
          buttonTextColor: 'text-gray-0',
          buttonFocusRing: 'focus:ring-success-50',
          closeIcon: 'gray-60',
        };
      }
      // Gray Secondary
      return {
        container: 'bg-gray-5 border-gray-20',
        title: 'text-gray-80',
        supportingText: 'text-gray-60',
        icon: 'gray-60',
        buttonColor: 'gray',
        buttonHierarchy: 'primary',
        buttonTextColor: 'text-gray-0',
        closeIcon: 'gray-60',
      };
    }
  };

  const colorClasses = getColorClasses();

  // Renderizar ícone
  const renderIcon = () => {
    if (icon === null) return null;
    
    const defaultIcon = icon || 'Info';
    
    if (typeof defaultIcon === 'string') {
      return (
        <Icon
          name={defaultIcon}
          size="sm"
          color={colorClasses.icon}
        />
      );
    }
    
    return defaultIcon;
  };

  // Classes do container
  const containerClasses = `
    border rounded-md
    ${colorClasses.container}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {/* Conteúdo principal */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        {/* Título com ícone */}
        <div className="flex items-start gap-2">
          {renderIcon() && (
            <div className="flex-shrink-0">
              {renderIcon()}
            </div>
          )}
          <h3 className={`${titleTypographyClasses} ${colorClasses.title} flex-1`}>
            {title}
          </h3>
        </div>

        {/* Texto de suporte */}
        {supportingText && (
          <p className={`${supportingTextTypographyClasses} ${colorClasses.supportingText} pl-7`}>
            {supportingText}
          </p>
        )}
      </div>

      {/* Botão de ação */}
      {showActionButton && (
        <div className="flex-shrink-0">
          {colorClasses.buttonColor === 'warning' || colorClasses.buttonColor === 'success' ? (
            // Botão customizado para warning e success
            <button
              onClick={onActionClick}
              className={`
                inline-flex items-center justify-center
                h-8 px-4
                text-sm font-bold leading-5 tracking-[-0.084px]
                rounded-md
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${colorClasses.buttonBg || ''}
                ${colorClasses.buttonTextColor}
                ${colorClasses.buttonFocusRing || ''}
              `.trim().replace(/\s+/g, ' ')}
            >
              {actionButtonLabel}
            </button>
          ) : (
            <Button
              size="sm"
              color={colorClasses.buttonColor}
              hierarchy={colorClasses.buttonHierarchy}
              onClick={onActionClick}
            >
              {actionButtonLabel}
            </Button>
          )}
        </div>
      )}

      {/* Botão de fechar */}
      {showClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 p-0 border-0 bg-transparent cursor-pointer"
          aria-label="Fechar notificação"
        >
          <Icon
            name="X"
            size="sm"
            color={colorClasses.closeIcon}
          />
        </button>
      )}
    </div>
  );
};

export default Notification;

