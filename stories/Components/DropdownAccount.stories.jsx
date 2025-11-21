import React, { useState } from 'react';
import { DropdownAccount } from '../../src/components/DropdownAccount';

export default {
  title: 'Components/DropdownAccount',
  component: DropdownAccount,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente DropdownAccount do Design System Interstellar. Menu dropdown para conta do usuário com header, itens de menu e atalhos de teclado.',
      },
    },
  },
  argTypes: {
    triggerType: {
      control: { type: 'select' },
      options: ['avatar', 'button', 'button-icon'],
      description: 'Tipo de trigger do dropdown',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'opened', 'disabled'],
      description: 'Estado do dropdown',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o dropdown está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => {
  return (
    <div className="flex justify-end w-full p-8">
      <DropdownAccount {...args} />
    </div>
  );
};

// Menu items padrão
const defaultMenuItems = [
  { value: 'profile', label: 'Perfil', icon: 'Search', shortcut: 'Ctrl + F' },
  { value: 'settings', label: 'Configurações', icon: 'Settings', shortcut: 'Ctrl + G' },
  { value: 'payments', label: 'Pagamentos', icon: 'CreditCard', shortcut: 'Ctrl + Alt + D', divider: true },
  { value: 'time', label: 'Ponto digital', icon: 'Clock', shortcut: 'Ctrl + F' },
  { value: 'teams', label: 'Times', icon: 'Users', shortcut: 'Alt + N' },
  { value: 'users', label: '@ Usuários', icon: 'AtSign', shortcut: 'Ctrl + F' },
  { value: 'support', label: 'Suporte', icon: 'Headphones', shortcut: 'Alt + R' },
  { value: 'community', label: 'Comunidade', icon: 'MessageCircle', shortcut: 'Ctrl + Alt + P', divider: true },
  { value: 'logout', label: 'Sair', icon: 'LogOut', shortcut: 'Ctrl + F' },
];

// Story padrão
export const Default = Template.bind({});
Default.args = {
  triggerType: 'avatar',
  state: 'default',
  user: {
    name: 'Cara do Marketing',
    email: 'ocaradomarketing@gmail.com',
    status: 'online'
  },
  menuItems: defaultMenuItems,
  onItemClick: (item) => console.log('Item clicked:', item),
  onLogout: () => console.log('Logout clicked'),
};

// Tipos de trigger
export const TriggerTypes = () => {
  return (
    <div className="flex flex-col gap-8 items-end w-full p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Avatar</h3>
        <DropdownAccount
          triggerType="avatar"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Button</h3>
        <DropdownAccount
          triggerType="button"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Button Icon</h3>
        <DropdownAccount
          triggerType="button-icon"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
    </div>
  );
};
TriggerTypes.parameters = {
  docs: {
    description: {
      story: 'Diferentes tipos de trigger: Avatar, Button e Button Icon',
    },
  },
};

// Estados
export const States = () => {
  return (
    <div className="flex flex-col gap-8 items-end w-full p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Default</h3>
        <DropdownAccount
          triggerType="avatar"
          state="default"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Hover</h3>
        <DropdownAccount
          triggerType="avatar"
          state="hover"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Opened</h3>
        <DropdownAccount
          triggerType="avatar"
          state="opened"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Disabled</h3>
        <DropdownAccount
          triggerType="avatar"
          state="disabled"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do dropdown: Default, Hover, Opened e Disabled',
    },
  },
};

// Com diferentes status
export const WithStatus = () => {
  return (
    <div className="flex flex-col gap-8 items-end w-full p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Online</h3>
        <DropdownAccount
          triggerType="avatar"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'online'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Offline</h3>
        <DropdownAccount
          triggerType="avatar"
          user={{
            name: 'Cara do Marketing',
            email: 'ocaradomarketing@gmail.com',
            status: 'offline'
          }}
          menuItems={defaultMenuItems}
        />
      </div>
    </div>
  );
};
WithStatus.parameters = {
  docs: {
    description: {
      story: 'Dropdown com diferentes status de usuário (online/offline)',
    },
  },
};

// Sem email
export const WithoutEmail = () => {
  return (
    <div className="flex justify-end w-full p-8">
      <DropdownAccount
        triggerType="avatar"
        user={{
          name: 'Cara do Marketing',
          status: 'online'
        }}
        menuItems={defaultMenuItems}
      />
    </div>
  );
};
WithoutEmail.parameters = {
  docs: {
    description: {
      story: 'Dropdown sem email do usuário',
    },
  },
};

// Menu items customizados
export const CustomMenuItems = () => {
  const customItems = [
    { value: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', shortcut: 'Ctrl + D' },
    { value: 'projects', label: 'Projetos', icon: 'Folder', shortcut: 'Ctrl + P' },
    { value: 'tasks', label: 'Tarefas', icon: 'CheckSquare', shortcut: 'Ctrl + T', divider: true },
    { value: 'reports', label: 'Relatórios', icon: 'FileText', shortcut: 'Ctrl + R' },
    { value: 'analytics', label: 'Analytics', icon: 'BarChart', shortcut: 'Ctrl + A', divider: true },
    { value: 'logout', label: 'Sair', icon: 'LogOut', shortcut: 'Ctrl + Q' },
  ];

  return (
    <div className="flex justify-end w-full p-8">
      <DropdownAccount
        triggerType="avatar"
        user={{
          name: 'Cara do Marketing',
          email: 'ocaradomarketing@gmail.com',
          status: 'online'
        }}
        menuItems={customItems}
      />
    </div>
  );
};
CustomMenuItems.parameters = {
  docs: {
    description: {
      story: 'Dropdown com menu items customizados',
    },
  },
};

// Sem atalhos
export const WithoutShortcuts = () => {
  const itemsWithoutShortcuts = defaultMenuItems.map(item => ({
    ...item,
    shortcut: undefined
  }));

  return (
    <div className="flex justify-end w-full p-8">
      <DropdownAccount
        triggerType="avatar"
        user={{
          name: 'Cara do Marketing',
          email: 'ocaradomarketing@gmail.com',
          status: 'online'
        }}
        menuItems={itemsWithoutShortcuts}
      />
    </div>
  );
};
WithoutShortcuts.parameters = {
  docs: {
    description: {
      story: 'Dropdown sem atalhos de teclado',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  triggerType: 'avatar',
  state: 'default',
  user: {
    name: 'Cara do Marketing',
    email: 'ocaradomarketing@gmail.com',
    status: 'online'
  },
  menuItems: defaultMenuItems,
  onItemClick: (item) => alert(`Item clicado: ${item.label}`),
  onLogout: () => alert('Logout clicado'),
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Dropdown interativo com callbacks',
    },
  },
};

