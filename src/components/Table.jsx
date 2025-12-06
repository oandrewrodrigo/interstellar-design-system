import React from 'react';
import { Checkbox } from './Checkbox';
import { Radio } from './Radio';
import { Toggle } from './Toggle';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import { Icon } from './Icon';
import { Button } from './Button';
import { Input } from './Input';
import { ProgressBar } from './ProgressBar';
import { Rating } from './Rating';
import { Trend } from './Trend';
import { Badge } from './Badge';
import { BadgeIcon } from './BadgeIcon';

/**
 * Componente Table do Design System Interstellar
 * Tabela com suporte a múltiplos tipos de células e form controls
 * 
 * @param {Array} columns - Array de objetos com { key, label, type }
 * @param {Array} data - Array de objetos com dados das linhas
 * @param {string} formControl - Tipo de form control: 'none' | 'checkbox' | 'radio' | 'toggle'
 * @param {Array} selectedRows - Array de índices das linhas selecionadas (para checkbox/radio)
 * @param {function} onRowSelect - Callback quando uma linha é selecionada
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const Table = ({
  columns = [],
  data = [],
  formControl = 'none',
  selectedRows = [],
  onRowSelect,
  className = '',
  ...props
}) => {
  // Função para renderizar conteúdo da célula baseado no tipo
  const renderCellContent = (column, row, rowIndex) => {
    const value = row[column.key];
    const cellType = column.type || 'text';

    switch (cellType) {
      case 'text':
        return (
          <div className="flex flex-col items-start gap-2xs">
            {column.primaryLabel && (
              <p className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-60 font-primary">
                {row[column.primaryLabel] || value}
              </p>
            )}
            {column.secondaryLabel && (
              <p className="text-sm font-normal leading-[22.4px] text-gray-60 font-primary">
                {row[column.secondaryLabel]}
              </p>
            )}
            {!column.primaryLabel && !column.secondaryLabel && (
              <p className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-60 font-primary">
                {value}
              </p>
            )}
          </div>
        );

      case 'avatar':
        return (
          <Avatar
            src={value?.src || value}
            alt={value?.alt || `Avatar ${rowIndex}`}
            size={column.size || 'md'}
          />
        );

      case 'avatarGroup':
        return (
          <AvatarGroup
            avatars={value || []}
            maxVisible={column.maxVisible || 5}
            size={column.size || 'md'}
          />
        );

      case 'icon':
        return (
          <div className="flex items-center">
            <Icon
              name={value || column.iconName || 'Info'}
              size={column.iconSize || 'sm'}
              color={column.iconColor || 'gray-30'}
            />
          </div>
        );

      case 'image':
        return (
          <img
            src={value}
            alt={column.alt || `Image ${rowIndex}`}
            className={`${column.size === 'sm' ? 'w-8 h-8' : column.size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'} rounded-md object-cover`}
          />
        );

      case 'button':
        return (
          <Button
            size={column.buttonSize || 'sm'}
            color={column.buttonColor || 'brand'}
            hierarchy={column.buttonHierarchy || 'link'}
            onClick={() => column.onButtonClick && column.onButtonClick(row, rowIndex)}
          >
            {value || column.buttonLabel}
          </Button>
        );

      case 'buttonIcon':
        return (
          <Button
            size={column.buttonSize || 'sm'}
            color={column.buttonColor || 'gray'}
            hierarchy={column.buttonHierarchy || 'secondary'}
            leftIcon={value || column.iconName || 'MoreVertical'}
            onClick={() => column.onButtonIconClick && column.onButtonIconClick(row, rowIndex)}
          />
        );

      case 'progress':
        return (
          <div className="flex items-center gap-sm flex-1">
            <ProgressBar
              progression={value || 0}
              size={column.progressSize || 'lg'}
              label={column.progressLabel || 'Right'}
              color={column.progressColor || 'brand'}
            />
          </div>
        );

      case 'input':
        return (
          <Input
            value={value || ''}
            placeholder={column.placeholder || 'Digite...'}
            size={column.inputSize || 'md'}
            onChange={(e) => column.onInputChange && column.onInputChange(e, row, rowIndex)}
          />
        );

      case 'rating':
        return (
          <Rating
            value={value || 0}
            size={column.ratingSize || 'md'}
            readonly={column.readonly !== false}
            onChange={(newValue) => column.onRatingChange && column.onRatingChange(newValue, row, rowIndex)}
          />
        );

      case 'trend':
        return (
          <Trend
            text={value?.text || value || 'Trend'}
            percentage={value?.percentage || 0}
            color={value?.color || column.trendColor || 'success'}
          />
        );

      case 'badge':
        return (
          <Badge
            size={column.badgeSize || 'md'}
            color={value?.color || column.badgeColor || 'brand'}
            hierarchy={value?.hierarchy || column.badgeHierarchy || 'secondary'}
            showDot={value?.showDot !== false}
            rightIcon={value?.rightIcon || column.badgeIcon}
          >
            {value?.text || value}
          </Badge>
        );

      case 'badgeIcon':
        return (
          <BadgeIcon
            content={value?.icon || value || 'Star'}
            size={column.badgeSize || 'md'}
            color={value?.color || column.badgeColor || 'brand'}
            hierarchy={value?.hierarchy || column.badgeHierarchy || 'secondary'}
          />
        );

      case 'payment':
        return (
          <div className="flex items-center gap-xs">
            <span className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-60 font-primary">
              {value}
            </span>
          </div>
        );

      case 'flag':
        return (
          <div className="flex items-center gap-xs">
            <Icon name="Flag" size="sm" color="gray-60" />
            {value && (
              <span className="text-sm font-bold leading-5 tracking-[-0.084px] text-gray-60 font-primary">
                {value}
              </span>
            )}
          </div>
        );

      default:
        return <span className="text-sm text-gray-60 font-primary">{value}</span>;
    }
  };

  // Função para renderizar form control
  const renderFormControl = (rowIndex, row) => {
    const isSelected = selectedRows.includes(rowIndex);

    switch (formControl) {
      case 'checkbox':
        return (
          <Checkbox
            checked={isSelected}
            onChange={() => onRowSelect && onRowSelect(rowIndex, !isSelected)}
            size="sm"
          />
        );

      case 'radio':
        return (
          <Radio
            checked={isSelected}
            onChange={() => onRowSelect && onRowSelect(rowIndex, !isSelected)}
            size="sm"
          />
        );

      case 'toggle':
        return (
          <Toggle
            checked={isSelected}
            onChange={() => onRowSelect && onRowSelect(rowIndex, !isSelected)}
            size="md"
          />
        );

      default:
        return null;
    }
  };

  // Classes da tabela
  const tableClasses = `
    w-full
    border-collapse
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Classes do header
  const headerClasses = `
    bg-gray-5
    border-b border-gray-20
  `.trim().replace(/\s+/g, ' ');

  // Classes da célula do header
  const headerCellClasses = `
    px-md
    py-sm
    text-left
    text-sm font-semibold leading-5 tracking-[-0.084px]
    text-gray-60
    font-primary
  `.trim().replace(/\s+/g, ' ');

  // Classes da linha
  const rowClasses = (rowIndex) => `
    border-b border-gray-20
    bg-gray-0
    hover:bg-gray-5
    transition-colors
  `.trim().replace(/\s+/g, ' ');

  // Classes da célula
  const cellClasses = `
    px-md
    py-sm
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full overflow-x-auto">
      <table className={tableClasses} {...props}>
        <thead className={headerClasses}>
          <tr>
            {formControl !== 'none' && (
              <th className={`${headerCellClasses} w-lg`}></th>
            )}
            {columns.map((column) => (
              <th key={column.key} className={headerCellClasses}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowClasses(rowIndex)}>
              {formControl !== 'none' && (
                <td className={cellClasses}>
                  {renderFormControl(rowIndex, row)}
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className={cellClasses}>
                  {renderCellContent(column, row, rowIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

