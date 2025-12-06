import React from 'react';
import { ButtonGroup } from '../../src/components/ButtonGroup';

export default {
  title: 'Components/Actions/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente ButtonGroup do Design System Interstellar. Agrupa múltiplos botões conectados, com bordas arredondadas apenas nas extremidades.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho dos botões',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'gray'],
      description: 'Cor dos botões',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined', 'link'],
      description: 'Hierarquia visual dos botões',
    },
  },
};

// Template básico
const Template = (args) => <ButtonGroup {...args} />;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  buttons: [{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }],
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Large</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Medium</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="md"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Small</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="sm"
        color="brand"
        hierarchy="primary"
      />
    </div>
  </div>
);
Sizes.parameters = {
  layout: 'padded',
};

// Hierarquias
export const Hierarchies = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Primary</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Secondary</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="brand"
        hierarchy="secondary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Outlined</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="brand"
        hierarchy="outlined"
      />
    </div>
  </div>
);
Hierarchies.parameters = {
  layout: 'padded',
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Brand</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Gray</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="gray"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Destructive</span>
      <ButtonGroup
        buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }, { children: 'Terceiro' }]}
        size="lg"
        color="destructive"
        hierarchy="primary"
      />
    </div>
  </div>
);
Colors.parameters = {
  layout: 'padded',
};

// Estados
export const States = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Default</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', state: 'default' },
          { children: 'Segundo', state: 'default' },
          { children: 'Terceiro', state: 'default' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Hover</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', state: 'hover' },
          { children: 'Segundo', state: 'hover' },
          { children: 'Terceiro', state: 'hover' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Focused</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', state: 'focused' },
          { children: 'Segundo', state: 'focused' },
          { children: 'Terceiro', state: 'focused' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Disabled</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', state: 'disabled' },
          { children: 'Segundo', state: 'disabled' },
          { children: 'Terceiro', state: 'disabled' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
  </div>
);
States.parameters = {
  layout: 'padded',
};

// Com ícones
export const WithIcons = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Com ícones à esquerda</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', leftIcon: 'Circle' },
          { children: 'Segundo', leftIcon: 'Circle' },
          { children: 'Terceiro', leftIcon: 'Circle' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Com ícones à direita</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', rightIcon: 'CaretDown' },
          { children: 'Segundo', rightIcon: 'CaretDown' },
          { children: 'Terceiro', rightIcon: 'CaretDown' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Com ícones em ambos os lados</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', leftIcon: 'Circle', rightIcon: 'CaretDown' },
          { children: 'Segundo', leftIcon: 'Circle', rightIcon: 'CaretDown' },
          { children: 'Terceiro', leftIcon: 'Circle', rightIcon: 'CaretDown' },
        ]}
        size="lg"
        color="brand"
        hierarchy="primary"
      />
    </div>
  </div>
);
WithIcons.parameters = {
  layout: 'padded',
};

// Botões individuais com props diferentes
export const MixedButtons = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Botões com props individuais</span>
      <ButtonGroup
        buttons={[
          { children: 'Primeiro', size: 'lg', color: 'brand', hierarchy: 'primary' },
          { children: 'Segundo', size: 'lg', color: 'brand', hierarchy: 'secondary' },
          { children: 'Terceiro', size: 'lg', color: 'brand', hierarchy: 'outlined' },
        ]}
      />
    </div>
  </div>
);
MixedButtons.parameters = {
  layout: 'padded',
};

// Apenas um botão
export const SingleButton = () => (
  <div className="flex flex-col gap-2">
    <ButtonGroup
      buttons={[{ children: 'Apenas um botão' }]}
      size="lg"
      color="brand"
      hierarchy="primary"
    />
  </div>
);
SingleButton.parameters = {
  layout: 'padded',
};

// Dois botões
export const TwoButtons = () => (
  <div className="flex flex-col gap-2">
    <ButtonGroup
      buttons={[{ children: 'Primeiro' }, { children: 'Segundo' }]}
      size="lg"
      color="brand"
      hierarchy="primary"
    />
  </div>
);
TwoButtons.parameters = {
  layout: 'padded',
};
