import React from 'react';
import { Tab } from './Tab';

/**
 * Componente TabGroup do Design System Interstellar
 * Grupo de tabs com orientação horizontal ou vertical
 * 
 * @param {Array} tabs - Array de objetos com { label, icon, badge, disabled, onClick }
 * @param {number} activeIndex - Índice do tab ativo
 * @param {function} onTabChange - Callback quando o tab muda (recebe o índice)
 * @param {string} orientation - Orientação: 'horizontal' | 'vertical'
 * @param {string} size - Tamanho dos tabs: 'sm' | 'md' | 'lg'
 * @param {string} style - Estilo dos tabs: 'default' | 'outlined' | 'bottomBorder' | 'leftBorder'
 * @param {string} width - Largura dos tabs: 'hug' | 'fixed'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const TabGroup = ({
  tabs = [],
  activeIndex = 0,
  onTabChange,
  orientation = 'horizontal',
  size = 'md',
  style = 'default',
  width = 'hug',
  className = '',
  ...props
}) => {
  // Classes do container baseado na orientação
  const containerClasses = `
    flex
    ${orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col items-stretch'}
    ${orientation === 'horizontal' ? 'gap-4xs' : 'gap-2xs'}
    ${orientation === 'horizontal' ? 'p-4xs' : 'p-2xs'}
    bg-gray-10
    rounded-md
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Classes do tab wrapper (para separadores verticais em horizontal)
  const tabWrapperClasses = (index) => {
    if (orientation === 'horizontal' && index > 0 && style === 'bottomBorder') {
      return 'border-l border-gray-20 pl-xs';
    }
    return '';
  };

  const handleTabClick = (index, tab) => {
    if (!tab.disabled && onTabChange) {
      onTabChange(index);
    }
    if (tab.onClick) {
      tab.onClick(index);
    }
  };

  return (
    <div className={containerClasses} role="tablist" {...props}>
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        const tabState = tab.disabled ? 'disabled' : isActive ? 'active' : 'default';

        return (
          <div key={index} className={tabWrapperClasses(index)}>
            <Tab
              size={size}
              style={style}
              state={tabState}
              width={width}
              leftIcon={tab.icon}
              badge={tab.badge}
              disabled={tab.disabled}
              onClick={() => handleTabClick(index, tab)}
            >
              {tab.label}
            </Tab>
          </div>
        );
      })}
    </div>
  );
};

export default TabGroup;
