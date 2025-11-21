import React from 'react';
import { Notification } from '../../src/components/Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Notification do Design System Interstellar. Componente de notificação/alerta com ícone, título, texto de suporte, botão de ação e botão de fechar.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['brand', 'gray', 'destructive', 'warning', 'success'],
      description: 'Cor da notificação',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Hierarquia da notificação',
    },
    title: {
      control: { type: 'text' },
      description: 'Título da notificação',
    },
    supportingText: {
      control: { type: 'text' },
      description: 'Texto de suporte',
    },
    icon: {
      control: { type: 'text' },
      description: 'Nome do ícone Lucide (opcional)',
    },
    actionButtonLabel: {
      control: { type: 'text' },
      description: 'Label do botão de ação',
    },
    showActionButton: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o botão de ação',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o botão de fechar',
    },
  },
};

// Template básico
const Template = (args) => (
  <div className="w-[800px]">
    <Notification {...args} />
  </div>
);

// Story padrão
export const Default = Template.bind({});
Default.args = {
  color: 'gray',
  hierarchy: 'secondary',
  title: 'Titulo do Alerta',
  supportingText: 'Isso é um texto de suporte.',
  showActionButton: true,
  showClose: true,
};

// Cores - Secondary
export const ColorsSecondary = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="gray"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="brand"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="destructive"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="warning"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="success"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
    </div>
  );
};
ColorsSecondary.parameters = {
  docs: {
    description: {
      story: 'Notificações com diferentes cores (hierarquia Secondary - fundo claro)',
    },
  },
};

// Cores - Primary
export const ColorsPrimary = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="gray"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="brand"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="destructive"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="warning"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
      <Notification
        color="success"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
      />
    </div>
  );
};
ColorsPrimary.parameters = {
  docs: {
    description: {
      story: 'Notificações com diferentes cores (hierarquia Primary - fundo escuro)',
    },
  },
};

// Sem texto de suporte
export const WithoutSupportingText = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="brand"
        hierarchy="secondary"
        title="Titulo do Alerta"
        showActionButton={true}
        showClose={true}
      />
      <Notification
        color="destructive"
        hierarchy="primary"
        title="Titulo do Alerta"
        showActionButton={true}
        showClose={true}
      />
    </div>
  );
};
WithoutSupportingText.parameters = {
  docs: {
    description: {
      story: 'Notificações sem texto de suporte',
    },
  },
};

// Sem botão de ação
export const WithoutActionButton = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="brand"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
        showActionButton={false}
        showClose={true}
      />
      <Notification
        color="warning"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
        showActionButton={false}
        showClose={true}
      />
    </div>
  );
};
WithoutActionButton.parameters = {
  docs: {
    description: {
      story: 'Notificações sem botão de ação',
    },
  },
};

// Sem botão de fechar
export const WithoutClose = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="success"
        hierarchy="secondary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
        showActionButton={true}
        showClose={false}
      />
      <Notification
        color="brand"
        hierarchy="primary"
        title="Titulo do Alerta"
        supportingText="Isso é um texto de suporte."
        showActionButton={true}
        showClose={false}
      />
    </div>
  );
};
WithoutClose.parameters = {
  docs: {
    description: {
      story: 'Notificações sem botão de fechar',
    },
  },
};

// Ícones customizados
export const CustomIcons = () => {
  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Notification
        color="success"
        hierarchy="secondary"
        title="Sucesso!"
        supportingText="Operação realizada com sucesso."
        icon="CheckCircle"
      />
      <Notification
        color="warning"
        hierarchy="secondary"
        title="Atenção"
        supportingText="Verifique os dados antes de continuar."
        icon="AlertTriangle"
      />
      <Notification
        color="destructive"
        hierarchy="secondary"
        title="Erro"
        supportingText="Ocorreu um erro ao processar sua solicitação."
        icon="XCircle"
      />
      <Notification
        color="brand"
        hierarchy="secondary"
        title="Informação"
        supportingText="Nova atualização disponível."
        icon="Info"
      />
    </div>
  );
};
CustomIcons.parameters = {
  docs: {
    description: {
      story: 'Notificações com ícones customizados',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  color: 'brand',
  hierarchy: 'secondary',
  title: 'Titulo do Alerta',
  supportingText: 'Isso é um texto de suporte.',
  actionButtonLabel: 'Ação',
  showActionButton: true,
  showClose: true,
  onActionClick: () => alert('Botão de ação clicado!'),
  onClose: () => alert('Notificação fechada!'),
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Notificação interativa com callbacks',
    },
  },
};

