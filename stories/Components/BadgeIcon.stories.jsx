import React from 'react';
import { BadgeIcon } from '../../src/components/BadgeIcon';

export default {
  title: 'Components/DataDisplay/BadgeIcon',
  component: BadgeIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente BadgeIcon do Design System Interstellar. Badge circular com apenas ícone ou número.',
      },
    },
  },
  argTypes: {
    content: {
      control: { type: 'text' },
      description:
        'Conteúdo do badge: nome do ícone Lucide (string), número (number) ou elemento React',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'warning', 'success', 'gray'],
      description: 'Cor do badge',
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outlined'],
      description: 'Hierarquia visual do badge',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled'],
      description: 'Estado do badge',
    },
  },
};

// Template básico
const Template = (args) => <BadgeIcon {...args} />;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  content: 'Info',
  size: 'md',
  color: 'brand',
  hierarchy: 'primary',
  state: 'default',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content="Info" size="sm" color="brand" hierarchy="primary" />
      <BadgeIcon content="Info" size="md" color="brand" hierarchy="primary" />
      <BadgeIcon content="Info" size="lg" color="brand" hierarchy="primary" />
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do badge: sm (20px), md (24px), lg (32px)',
    },
  },
};

// Com número
export const WithNumber = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content={2} size="sm" color="brand" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" />
      <BadgeIcon content={2} size="lg" color="brand" hierarchy="primary" />
    </div>
  </div>
);
WithNumber.parameters = {
  docs: {
    description: {
      story: 'BadgeIcon com número',
    },
  },
};

// Com ícone
export const WithIcon = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content="Info" size="sm" color="brand" hierarchy="primary" />
      <BadgeIcon content="Check" size="md" color="brand" hierarchy="primary" />
      <BadgeIcon content="AlertCircle" size="lg" color="brand" hierarchy="primary" />
    </div>
  </div>
);
WithIcon.parameters = {
  docs: {
    description: {
      story: 'BadgeIcon com diferentes ícones',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="destructive" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="warning" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="success" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="gray" hierarchy="primary" />
    </div>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor do badge: Brand, Destructive, Warning, Success, Gray',
    },
  },
};

// Hierarquias
export const Hierarchies = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" />
      <BadgeIcon content={2} size="md" color="brand" hierarchy="secondary" />
      <BadgeIcon content={2} size="md" color="brand" hierarchy="outlined" />
    </div>
  </div>
);
Hierarchies.parameters = {
  docs: {
    description: {
      story:
        'Variações de hierarquia: Primary (sólido), Secondary (fundo claro), Outlined (apenas borda)',
    },
  },
};

// Estados
export const States = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-4 items-center">
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" state="default" />
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" state="hover" />
      <BadgeIcon content={2} size="md" color="brand" hierarchy="primary" state="disabled" />
    </div>
  </div>
);
States.parameters = {
  docs: {
    description: {
      story: 'Estados do badge: Default, Hover, Disabled',
    },
  },
};

// Todas as variações
export const AllVariations = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Primary - Número</span>
      <div className="flex gap-4 items-center flex-wrap">
        <BadgeIcon content={2} size="sm" color="brand" hierarchy="primary" />
        <BadgeIcon content={2} size="sm" color="destructive" hierarchy="primary" />
        <BadgeIcon content={2} size="sm" color="warning" hierarchy="primary" />
        <BadgeIcon content={2} size="sm" color="success" hierarchy="primary" />
        <BadgeIcon content={2} size="sm" color="gray" hierarchy="primary" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Primary - Ícone</span>
      <div className="flex gap-4 items-center flex-wrap">
        <BadgeIcon content="Info" size="sm" color="brand" hierarchy="primary" />
        <BadgeIcon content="Info" size="sm" color="destructive" hierarchy="primary" />
        <BadgeIcon content="Info" size="sm" color="warning" hierarchy="primary" />
        <BadgeIcon content="Info" size="sm" color="success" hierarchy="primary" />
        <BadgeIcon content="Info" size="sm" color="gray" hierarchy="primary" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Secondary</span>
      <div className="flex gap-4 items-center flex-wrap">
        <BadgeIcon content={2} size="sm" color="brand" hierarchy="secondary" />
        <BadgeIcon content={2} size="sm" color="destructive" hierarchy="secondary" />
        <BadgeIcon content={2} size="sm" color="warning" hierarchy="secondary" />
        <BadgeIcon content={2} size="sm" color="success" hierarchy="secondary" />
        <BadgeIcon content={2} size="sm" color="gray" hierarchy="secondary" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-60">Outlined</span>
      <div className="flex gap-4 items-center flex-wrap">
        <BadgeIcon content={2} size="sm" color="brand" hierarchy="outlined" />
        <BadgeIcon content={2} size="sm" color="destructive" hierarchy="outlined" />
        <BadgeIcon content={2} size="sm" color="warning" hierarchy="outlined" />
        <BadgeIcon content={2} size="sm" color="success" hierarchy="outlined" />
        <BadgeIcon content={2} size="sm" color="gray" hierarchy="outlined" />
      </div>
    </div>
  </div>
);
AllVariations.parameters = {
  layout: 'padded',
};
