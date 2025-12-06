import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';

/**
 * Componente Trend do Design System Interstellar
 * Mostra texto principal com badge indicando tendência (percentual)
 *
 * @param {string} text - Texto principal
 * @param {number} percentage - Percentual da tendência (pode ser negativo)
 * @param {string} color - Cor da tendência: 'success' | 'destructive' | 'warning' | 'brand' | 'gray'
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Trend = ({ text, percentage = 0, color = 'success', className = '', ...props }) => {
  // Determinar cor baseado no percentual se não especificado
  const trendColor = color || (percentage >= 0 ? 'success' : 'destructive');

  // Ícone baseado na direção
  const iconName = percentage >= 0 ? 'TrendingUp' : 'TrendingDown';

  // Classes do container
  const containerClasses = `
    flex items-center gap-xs
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      <span className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-60 font-primary">
        {text}
      </span>
      <Badge
        size="sm"
        color={trendColor}
        hierarchy="secondary"
        showDot={false}
        rightIcon={iconName}
      >
        {Math.abs(percentage)}%
      </Badge>
    </div>
  );
};

export default Trend;
