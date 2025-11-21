import React from 'react';
import { ChatTopNav } from '../../src/components/ChatTopNav';

export default {
  title: 'Chat System/ChatTopNav',
  component: ChatTopNav,
  parameters: {
    layout: 'fullwidth',
    docs: {
      description: {
        component: 'Barra superior do chat com informações do usuário/conversa e ações (buscar, mais opções, voltar).',
      },
    },
  },
  argTypes: {
    showSearch: {
      control: { type: 'boolean' },
      description: 'Mostrar botão de busca',
    },
    showMore: {
      control: { type: 'boolean' },
      description: 'Mostrar botão de mais opções',
    },
    showBack: {
      control: { type: 'boolean' },
      description: 'Mostrar botão de voltar',
    },
  },
};

export const Default = (args) => {
  return (
    <div className="w-full">
      <ChatTopNav
        {...args}
        name="Andrew Rodrigo"
        caption="@andrewrodrigo"
        avatar="https://via.placeholder.com/48"
        onSearch={() => console.log('Buscar')}
        onMore={() => console.log('Mais opções')}
        onBack={() => console.log('Voltar')}
      />
    </div>
  );
};

Default.args = {
  name: 'Andrew Rodrigo',
  caption: '@andrewrodrigo',
  showSearch: true,
  showMore: true,
  showBack: false,
};

export const WithoutCaption = () => {
  return (
    <div className="w-full">
      <ChatTopNav
        name="Grupo de Trabalho"
        avatar="https://via.placeholder.com/48"
        caption={null}
      />
    </div>
  );
};

export const WithBackButton = () => {
  return (
    <div className="w-full">
      <ChatTopNav
        name="Conversa"
        caption="online"
        showBack={true}
        onBack={() => console.log('Voltar')}
      />
    </div>
  );
};

export const Minimal = () => {
  return (
    <div className="w-full">
      <ChatTopNav
        name="Usuário"
        showSearch={false}
        showMore={false}
      />
    </div>
  );
};

export const WithLogo = () => {
  return (
    <div className="w-full">
      <ChatTopNav
        name="Suporte Técnico"
        caption="online • responde em até 2 horas"
        avatar={
          <div className="w-12 h-12 rounded-full bg-brand-60 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-0">ST</span>
          </div>
        }
      />
    </div>
  );
};

