import React, { useState } from 'react';
import { Tab } from '../../src/components/Tab';
import { TabGroup } from '../../src/components/TabGroup';

export default {
  title: 'Components/Navigation/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente Tab do Design System Interstellar. Suporta múltiplos estados, estilos, tamanhos e pode incluir ícone e badge.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Estado do tab',
    },
    style: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'bottomBorder', 'leftBorder'],
      description: 'Estilo do tab',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do tab',
    },
    width: {
      control: { type: 'select' },
      options: ['hug', 'fixed'],
      description: 'Largura do tab',
    },
  },
};

// Template básico
const Template = (args) => <Tab {...args}>Tab Text</Tab>;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  state: 'default',
  style: 'default',
  size: 'md',
  width: 'hug',
};

// Estados
export const States = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab state="default" size="md">Default</Tab>
      <Tab state="hover" size="md">Hover</Tab>
      <Tab state="active" size="md">Active</Tab>
      <Tab state="disabled" size="md">Disabled</Tab>
    </div>
  </div>
);

// Estilos
export const Styles = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab style="default" active size="md">Default</Tab>
      <Tab style="outlined" active size="md">Outlined</Tab>
      <Tab style="bottomBorder" active size="md">Bottom Border</Tab>
      <Tab style="leftBorder" active size="md">Left Border</Tab>
    </div>
  </div>
);

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab size="sm" active>Small</Tab>
      <Tab size="md" active>Medium</Tab>
      <Tab size="lg" active>Large</Tab>
    </div>
  </div>
);

// Com ícone
export const WithIcon = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab leftIcon="User" size="md">Profile</Tab>
      <Tab leftIcon="Settings" active size="md">Settings</Tab>
      <Tab leftIcon="CreditCard" size="md">Payment</Tab>
    </div>
  </div>
);

// Com badge
export const WithBadge = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab badge={5} size="md">Notifications</Tab>
      <Tab badge={12} active size="md">Messages</Tab>
      <Tab badge={99} size="md">Updates</Tab>
    </div>
  </div>
);

// Com ícone e badge
export const WithIconAndBadge = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4 items-center">
      <Tab leftIcon="User" badge={5} size="md">Profile</Tab>
      <Tab leftIcon="Bell" badge={12} active size="md">Notifications</Tab>
      <Tab leftIcon="Mail" badge={99} size="md">Messages</Tab>
    </div>
  </div>
);

// Largura fixed
export const FixedWidth = () => (
  <div className="flex flex-col gap-4 w-64">
    <Tab width="fixed" size="md">Fixed Width Tab</Tab>
    <Tab width="fixed" active size="md">Active Fixed Width</Tab>
  </div>
);

// TabGroup - Horizontal
export const GroupHorizontal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
    { id: 'payment', label: 'Payment', icon: 'CreditCard' },
    { id: 'subscription', label: 'Subscription', icon: 'Calendar' },
    { id: 'profile', label: 'Profile', icon: 'User', badge: 12 },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Default Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="horizontal"
          size="sm"
          style="default"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Outlined Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="horizontal"
          size="md"
          style="outlined"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Bottom Border Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="horizontal"
          size="md"
          style="bottomBorder"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Left Border Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="horizontal"
          size="lg"
          style="leftBorder"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

// TabGroup - Vertical
export const GroupVertical = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
    { id: 'payment', label: 'Payment', icon: 'CreditCard' },
    { id: 'subscription', label: 'Subscription', icon: 'Calendar' },
    { id: 'profile', label: 'Profile', icon: 'User', badge: 12 },
  ];

  return (
    <div className="flex gap-8">
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Default Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="vertical"
          size="sm"
          style="default"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Outlined Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="vertical"
          size="md"
          style="outlined"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Bottom Border Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="vertical"
          size="md"
          style="bottomBorder"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-4 text-gray-60">Left Border Style</h3>
        <TabGroup
          tabs={tabs}
          orientation="vertical"
          size="lg"
          style="leftBorder"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

// Exemplo completo
export const CompleteExample = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
    { id: 'payment', label: 'Payment', icon: 'CreditCard', badge: 3 },
    { id: 'subscription', label: 'Subscription', icon: 'Calendar' },
    { id: 'profile', label: 'Profile', icon: 'User', badge: 12 },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-60">Horizontal Tabs - All Styles</h3>
        <div className="flex flex-col gap-4">
          <TabGroup
            tabs={tabs}
            orientation="horizontal"
            size="sm"
            style="default"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="horizontal"
            size="md"
            style="outlined"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="horizontal"
            size="md"
            style="bottomBorder"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="horizontal"
            size="lg"
            style="leftBorder"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-60">Vertical Tabs - All Styles</h3>
        <div className="flex gap-4">
          <TabGroup
            tabs={tabs}
            orientation="vertical"
            size="sm"
            style="default"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="vertical"
            size="md"
            style="outlined"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="vertical"
            size="md"
            style="bottomBorder"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TabGroup
            tabs={tabs}
            orientation="vertical"
            size="lg"
            style="leftBorder"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

