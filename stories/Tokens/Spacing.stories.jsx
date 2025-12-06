import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de espaçamento do Design System Interstellar. Compatível com a escala padrão do Tailwind CSS, cobrindo de 0px até 384px. Todos os tokens são automaticamente convertidos para classes Tailwind (removendo o prefixo `spacing-`).',
      },
    },
  },
};

const SpacingExample = ({ name, value, description }) => (
  <div className="mb-4 flex items-center gap-4">
    <div className="w-[250px] text-sm font-semibold">{name}</div>
    <div className="w-[300px]">
      <div
        className="h-6 bg-brand-50 rounded"
        style={{ width: `${value}px` }}
      />
    </div>
    <div className="w-[120px] text-xs text-gray-50 font-mono">
      {value}px
    </div>
    {description && (
      <div className="flex-1 text-xs text-gray-60">
        {description}
      </div>
    )}
  </div>
);

export const AllSpacing = () => {
  const spacingTokens = tokensData.spacing;
  const sortedTokens = Object.entries(spacingTokens).sort(
    (a, b) => b[1].$value - a[1].$value
  );

  return (
    <div className="p-6 max-w-[1200px]">
      <div className="mb-8">
        <h1 className="text-[32px] font-bold mb-4">
          Sistema de Espaçamento
        </h1>
        <p className="text-md text-gray-60 mb-2">
          Todos os espaçamentos são compatíveis com a escala padrão do Tailwind CSS.
        </p>
        <p className="text-sm text-gray-50">
          <strong>Uso no Tailwind:</strong> O prefixo <code className="bg-gray-10 px-1 rounded">spacing-</code> é removido automaticamente. 
          Use <code className="bg-gray-10 px-1 rounded">p-2.5</code>, <code className="bg-gray-10 px-1 rounded">m-7</code>, <code className="bg-gray-10 px-1 rounded">gap-7xl</code>, etc.
        </p>
      </div>
      <div className="mb-4 pb-4 border-b border-gray-20 flex items-center gap-4">
        <div className="w-[250px] text-sm font-bold text-gray-90">Token</div>
        <div className="w-[300px] text-sm font-bold text-gray-90">Visualização</div>
        <div className="w-[120px] text-sm font-bold text-gray-90">Valor</div>
        <div className="flex-1 text-sm font-bold text-gray-90">Descrição</div>
      </div>
      {sortedTokens.map(([name, token]) => (
        <SpacingExample 
          key={name} 
          name={name} 
          value={token.$value} 
          description={token.$description}
        />
      ))}
    </div>
  );
};

