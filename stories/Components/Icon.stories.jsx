import React from 'react';
import { Icon } from '../../src/components/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Icon do Design System Interstellar. Wrapper para ícones Lucide que obedece os tokens de tamanho do design system.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Nome do ícone Lucide (ex: User, ArrowRight, Check)',
    },
    size: {
      control: { type: 'select' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg'],
      description: 'Tamanho do ícone (usa tokens size-icon)',
    },
    color: {
      control: { type: 'text' },
      description: 'Cor do ícone (usa tokens de cores, ex: brand-60, gray-90)',
    },
  },
};

// Template básico
const Template = (args) => <Icon {...args} />;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  name: 'User',
  size: 'md',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size="2xs" />
        <span className="text-xs text-gray-60">2xs (12px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size="xs" />
        <span className="text-xs text-gray-60">xs (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size="sm" />
        <span className="text-xs text-gray-60">sm (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size="md" />
        <span className="text-xs text-gray-60">md (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="User" size="lg" />
        <span className="text-xs text-gray-60">lg (32px)</span>
      </div>
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do ícone usando tokens size-icon: 2xs (12px), xs (16px), sm (20px), md (24px), lg (32px)',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-6 items-start">
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <Icon name="Heart" size="md" color="brand-60" />
        <span className="text-xs text-gray-60">Brand</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Heart" size="md" color="destructive-60" />
        <span className="text-xs text-gray-60">Destructive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Heart" size="md" color="gray-90" />
        <span className="text-xs text-gray-60">Gray</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Heart" size="md" color="success-60" />
        <span className="text-xs text-gray-60">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="Heart" size="md" color="warning-60" />
        <span className="text-xs text-gray-60">Warning</span>
      </div>
    </div>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Ícones com diferentes cores usando tokens de cores do design system',
    },
  },
};

// Ícones comuns
export const CommonIcons = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Ações</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Icon name="Plus" size="md" color="brand-60" />
        <Icon name="Minus" size="md" color="brand-60" />
        <Icon name="Edit" size="md" color="brand-60" />
        <Icon name="Trash2" size="md" color="destructive-60" />
        <Icon name="Save" size="md" color="brand-60" />
        <Icon name="Download" size="md" color="brand-60" />
        <Icon name="Upload" size="md" color="brand-60" />
        <Icon name="Copy" size="md" color="brand-60" />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Navegação</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Icon name="ArrowLeft" size="md" color="gray-90" />
        <Icon name="ArrowRight" size="md" color="gray-90" />
        <Icon name="ChevronLeft" size="md" color="gray-90" />
        <Icon name="ChevronRight" size="md" color="gray-90" />
        <Icon name="ChevronUp" size="md" color="gray-90" />
        <Icon name="ChevronDown" size="md" color="gray-90" />
        <Icon name="Home" size="md" color="gray-90" />
        <Icon name="Menu" size="md" color="gray-90" />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Status</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Icon name="Check" size="md" color="success-60" />
        <Icon name="X" size="md" color="destructive-60" />
        <Icon name="AlertCircle" size="md" color="warning-60" />
        <Icon name="Info" size="md" color="brand-60" />
        <Icon name="CheckCircle" size="md" color="success-60" />
        <Icon name="XCircle" size="md" color="destructive-60" />
        <Icon name="AlertTriangle" size="md" color="warning-60" />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Usuário</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Icon name="User" size="md" color="gray-90" />
        <Icon name="Users" size="md" color="gray-90" />
        <Icon name="UserPlus" size="md" color="brand-60" />
        <Icon name="UserMinus" size="md" color="destructive-60" />
        <Icon name="Settings" size="md" color="gray-90" />
        <Icon name="LogOut" size="md" color="gray-90" />
      </div>
    </div>
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-90">Comunicação</h3>
      <div className="flex gap-4 items-center flex-wrap">
        <Icon name="Mail" size="md" color="gray-90" />
        <Icon name="MessageSquare" size="md" color="gray-90" />
        <Icon name="Bell" size="md" color="gray-90" />
        <Icon name="BellOff" size="md" color="gray-90" />
        <Icon name="Send" size="md" color="brand-60" />
        <Icon name="Phone" size="md" color="gray-90" />
      </div>
    </div>
  </div>
);
CommonIcons.parameters = {
  docs: {
    description: {
      story: 'Exemplos de ícones comuns organizados por categoria. Todos os ícones da biblioteca Lucide estão disponíveis.',
    },
  },
};

// Tamanhos em contexto (com texto)
export const SizesInContext = () => (
  <div className="flex flex-col gap-4 items-start">
    <div className="flex items-center gap-2">
      <Icon name="User" size="xs" color="gray-90" />
      <span className="text-xs">Texto pequeno com ícone xs</span>
    </div>
    <div className="flex items-center gap-2">
      <Icon name="User" size="sm" color="gray-90" />
      <span className="text-sm">Texto médio com ícone sm</span>
    </div>
    <div className="flex items-center gap-2">
      <Icon name="User" size="md" color="gray-90" />
      <span className="text-base">Texto normal com ícone md</span>
    </div>
    <div className="flex items-center gap-2">
      <Icon name="User" size="lg" color="gray-90" />
      <span className="text-lg">Texto grande com ícone lg</span>
    </div>
  </div>
);
SizesInContext.parameters = {
  docs: {
    description: {
      story: 'Ícones em contexto com texto, mostrando como os tamanhos se relacionam com o texto',
    },
  },
};

