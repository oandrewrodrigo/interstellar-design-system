import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Size',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de tamanhos do Design System Interstellar',
      },
    },
  },
};

const SizeExample = ({ name, value, isIcon = false }) => (
  <div className="mb-6 flex items-center gap-6">
    <div className="w-[200px] text-sm font-semibold">{name}</div>
    <div
      className={`flex items-center justify-center text-white text-xs font-semibold ${
        isIcon ? 'bg-brand-50 rounded' : 'bg-purple-50 rounded-lg'
      }`}
      style={{ width: `${value}px`, height: `${value}px` }}
    >
      {value}px
    </div>
    <div className="text-xs text-gray-50 font-mono">
      {value}px × {value}px
    </div>
  </div>
);

export const AllSizes = () => {
  const sizeTokens = tokensData.size;
  const iconSizeTokens = tokensData['size-icon'];
  const sortedSizes = Object.entries(sizeTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );
  const sortedIconSizes = Object.entries(iconSizeTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );

  return (
    <div className="p-6 max-w-[800px]">
      <h1 className="text-[32px] font-bold mb-8">
        Sistema de Tamanhos
      </h1>
      
      <h2 className="text-2xl font-semibold mb-6 mt-8">
        Tamanhos Gerais
      </h2>
      {sortedSizes.map(([name, token]) => (
        <SizeExample key={name} name={name} value={token.$value} />
      ))}

      <h2 className="text-2xl font-semibold mb-6 mt-12">
        Tamanhos de Ícones
      </h2>
      {sortedIconSizes.map(([name, token]) => (
        <SizeExample key={name} name={name} value={token.$value} isIcon={true} />
      ))}
    </div>
  );
};

export const GeneralSizes = () => {
  const sizeTokens = tokensData.size;
  const sortedSizes = Object.entries(sizeTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Tamanhos Gerais
      </h2>
      {sortedSizes.map(([name, token]) => (
        <SizeExample key={name} name={name} value={token.$value} />
      ))}
    </div>
  );
};

export const IconSizes = () => {
  const iconSizeTokens = tokensData['size-icon'];
  const sortedIconSizes = Object.entries(iconSizeTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Tamanhos de Ícones
      </h2>
      {sortedIconSizes.map(([name, token]) => (
        <SizeExample key={name} name={name} value={token.$value} isIcon={true} />
      ))}
    </div>
  );
};

