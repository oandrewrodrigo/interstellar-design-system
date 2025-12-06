import React, { Suspense } from 'react';
import CosmosProApp from './CosmosProApp';

export default {
  title: 'Examples/CosmosPro/App',
  component: CosmosProApp,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Aplicação de exemplo Cosmos Pro demonstrando o uso de todos os componentes do Design System Interstellar em um contexto real de aplicação empresarial.',
      },
    },
  },
};

export const Default = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CosmosProApp />
    </Suspense>
  );
};

Default.parameters = {
  layout: 'fullscreen',
};
