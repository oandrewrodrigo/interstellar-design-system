import React from 'react';
import Login from './screens/Login';

export default {
  title: 'Examples/CosmosPro/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tela de Login do Cosmos Pro - Exemplo de uso dos componentes do Design System Interstellar.',
      },
    },
  },
};

export const Default = () => {
  return <Login />;
};

Default.parameters = {
  layout: 'fullscreen',
};
