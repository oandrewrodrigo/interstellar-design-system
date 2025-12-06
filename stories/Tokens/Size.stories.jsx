import React from 'react';
import tokensData from '../../tokens/index.js';

export default {
  title: 'Tokens/Size',
  parameters: {
    docs: {
      description: {
        component: 'Sistema de tamanhos do Design System Interstellar. Compatível com a escala padrão do Tailwind CSS, cobrindo de 0px até 384px. Todos os tokens são automaticamente convertidos para classes Tailwind (removendo o prefixo `size-`).',
      },
    },
  },
};

const SizeExample = ({ name, value, description, isIcon = false }) => (
  <div className="mb-6 flex items-center gap-6">
    <div className="w-[250px] text-sm font-semibold">{name}</div>
    <div
      className={`flex items-center justify-center text-white text-xs font-semibold ${
        isIcon ? 'bg-brand-50 rounded' : 'bg-purple-50 rounded-lg'
      }`}
      style={{ width: `${value}px`, height: `${value}px` }}
    >
      {value}px
    </div>
    <div className="w-[120px] text-xs text-gray-50 font-mono">
      {value}px × {value}px
    </div>
    {description && (
      <div className="flex-1 text-xs text-gray-60">
        {description}
      </div>
    )}
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
    <div className="p-6 max-w-[1200px]">
      <div className="mb-8">
        <h1 className="text-[32px] font-bold mb-4">
          Sistema de Tamanhos
        </h1>
        <p className="text-md text-gray-60 mb-2">
          Todos os tamanhos são compatíveis com a escala padrão do Tailwind CSS.
        </p>
        <p className="text-sm text-gray-50">
          <strong>Uso no Tailwind:</strong> O prefixo <code className="bg-gray-10 px-1 rounded">size-</code> é removido automaticamente. 
          Use <code className="bg-gray-10 px-1 rounded">w-sm</code>, <code className="bg-gray-10 px-1 rounded">h-md</code>, <code className="bg-gray-10 px-1 rounded">w-2xl</code>, etc.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6 mt-8">
        Tamanhos Gerais
      </h2>
      <div className="mb-4 pb-4 border-b border-gray-20 flex items-center gap-6">
        <div className="w-[250px] text-sm font-bold text-gray-90">Token</div>
        <div className="w-[120px] text-sm font-bold text-gray-90">Visualização</div>
        <div className="w-[120px] text-sm font-bold text-gray-90">Valor</div>
        <div className="flex-1 text-sm font-bold text-gray-90">Descrição</div>
      </div>
      {sortedSizes.map(([name, token]) => (
        <SizeExample 
          key={name} 
          name={name} 
          value={token.$value} 
          description={token.$description}
        />
      ))}

      <h2 className="text-2xl font-semibold mb-6 mt-12">
        Tamanhos de Ícones
      </h2>
      <div className="mb-4 pb-4 border-b border-gray-20 flex items-center gap-6">
        <div className="w-[250px] text-sm font-bold text-gray-90">Token</div>
        <div className="w-[120px] text-sm font-bold text-gray-90">Visualização</div>
        <div className="w-[120px] text-sm font-bold text-gray-90">Valor</div>
        <div className="flex-1 text-sm font-bold text-gray-90">Descrição</div>
      </div>
      {sortedIconSizes.map(([name, token]) => (
        <SizeExample 
          key={name} 
          name={name} 
          value={token.$value} 
          description={token.$description}
          isIcon={true} 
        />
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
        <SizeExample 
          key={name} 
          name={name} 
          value={token.$value} 
          description={token.$description}
        />
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
        <SizeExample 
          key={name} 
          name={name} 
          value={token.$value} 
          description={token.$description}
          isIcon={true} 
        />
      ))}
    </div>
  );
};

