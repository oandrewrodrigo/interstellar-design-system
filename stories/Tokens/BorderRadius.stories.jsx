import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Border Radius',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de raio de borda do Design System Interstellar',
      },
    },
  },
};

const BorderRadiusExample = ({ name, value }) => (
  <div className="mb-6 flex items-center gap-6">
    <div className="w-[200px] text-sm font-semibold">{name}</div>
    <div
      className="w-[120px] h-[120px] bg-brand-50 flex items-center justify-center text-white text-xs font-semibold"
      style={{ borderRadius: `${value}px` }}
    >
      {value === 9999 ? 'Full' : `${value}px`}
    </div>
    <div className="text-xs text-gray-50 font-mono">
      {value === 9999 ? '9999px (full)' : `${value}px`}
    </div>
  </div>
);

export const AllBorderRadius = () => {
  const borderRadiusTokens = tokensData['border-radius'];
  const sortedTokens = Object.entries(borderRadiusTokens).sort((a, b) => {
    if (a[0] === 'radius-full') return 1;
    if (b[0] === 'radius-full') return -1;
    return b[1].$value - a[1].$value;
  });

  return (
    <div className="p-6 max-w-[800px]">
      <h1 className="text-[32px] font-bold mb-8">Sistema de Raio de Borda</h1>
      {sortedTokens.map(([name, token]) => (
        <BorderRadiusExample key={name} name={name} value={token.$value} />
      ))}
    </div>
  );
};
