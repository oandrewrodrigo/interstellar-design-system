import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de espaçamento do Design System Interstellar',
      },
    },
  },
};

const SpacingExample = ({ name, value }) => (
  <div className="mb-4 flex items-center gap-4">
    <div className="w-[200px] text-sm font-semibold">{name}</div>
    <div className="w-[300px]">
      <div
        className="h-6 bg-brand-50 rounded"
        style={{ width: `${value}px` }}
      />
    </div>
    <div className="text-xs text-gray-50 font-mono">
      {value}px
    </div>
  </div>
);

export const AllSpacing = () => {
  const spacingTokens = tokensData.spacing;
  const sortedTokens = Object.entries(spacingTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );

  return (
    <div className="p-6 max-w-[800px]">
      <h1 className="text-[32px] font-bold mb-8">
        Sistema de Espaçamento
      </h1>
      {sortedTokens.map(([name, token]) => (
        <SpacingExample key={name} name={name} value={token.$value} />
      ))}
    </div>
  );
};

