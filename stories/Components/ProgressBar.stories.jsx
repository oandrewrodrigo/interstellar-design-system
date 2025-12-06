import React from 'react';
import { ProgressBar } from '../../src/components/ProgressBar';

export default {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente ProgressBar do Design System Interstellar. Barra de progresso com múltiplos tamanhos e opções de label.',
      },
    },
  },
  argTypes: {
    progression: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor de progresso de 0 a 100',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho da barra de progresso',
    },
    label: {
      control: { type: 'select' },
      options: ['None', 'Bottom', 'Right'],
      description: 'Posição do label',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'warning', 'success', 'gray'],
      description: 'Cor da barra de progresso',
    },
  },
};

// Template básico
const Template = (args) => (
  <div style={{ width: '320px' }}>
    <ProgressBar {...args} />
  </div>
);

// Story padrão
export const Default = Template.bind({});
Default.args = {
  progression: 50,
  size: 'md',
  label: 'None',
  color: 'brand',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-6 items-start" style={{ width: '320px' }}>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Small (4px)</span>
      <ProgressBar progression={50} size="sm" label="None" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Medium (8px)</span>
      <ProgressBar progression={50} size="md" label="None" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Large (12px)</span>
      <ProgressBar progression={50} size="lg" label="None" color="brand" />
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho: sm (4px), md (8px), lg (12px)',
    },
  },
};

// Progressões
export const Progressions = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '320px' }}>
    <ProgressBar progression={0} size="md" label="None" color="brand" />
    <ProgressBar progression={10} size="md" label="None" color="brand" />
    <ProgressBar progression={20} size="md" label="None" color="brand" />
    <ProgressBar progression={30} size="md" label="None" color="brand" />
    <ProgressBar progression={40} size="md" label="None" color="brand" />
    <ProgressBar progression={50} size="md" label="None" color="brand" />
    <ProgressBar progression={60} size="md" label="None" color="brand" />
    <ProgressBar progression={70} size="md" label="None" color="brand" />
    <ProgressBar progression={80} size="md" label="None" color="brand" />
    <ProgressBar progression={90} size="md" label="None" color="brand" />
    <ProgressBar progression={100} size="md" label="None" color="brand" />
  </div>
);
Progressions.parameters = {
  docs: {
    description: {
      story: 'Diferentes valores de progressão de 0% a 100%',
    },
  },
};

// Labels
export const Labels = () => (
  <div className="flex flex-col gap-6 items-start" style={{ width: '320px' }}>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Sem Label</span>
      <ProgressBar progression={50} size="md" label="None" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Label Abaixo</span>
      <ProgressBar progression={50} size="md" label="Bottom" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Label à Direita</span>
      <ProgressBar progression={50} size="md" label="Right" color="brand" />
    </div>
  </div>
);
Labels.parameters = {
  docs: {
    description: {
      story: 'Diferentes posições de label: None, Bottom, Right',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '320px' }}>
    <ProgressBar progression={60} size="md" label="None" color="brand" />
    <ProgressBar progression={60} size="md" label="None" color="destructive" />
    <ProgressBar progression={60} size="md" label="None" color="warning" />
    <ProgressBar progression={60} size="md" label="None" color="success" />
    <ProgressBar progression={60} size="md" label="None" color="gray" />
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor: Brand, Destructive, Warning, Success, Gray',
    },
  },
};

// Com labels e diferentes progressões
export const WithLabels = () => (
  <div className="flex flex-col gap-6 items-start" style={{ width: '320px' }}>
    <div className="flex flex-col gap-4 w-full">
      <span className="text-sm font-semibold text-gray-90">Label Abaixo</span>
      <ProgressBar progression={0} size="md" label="Bottom" color="brand" />
      <ProgressBar progression={25} size="md" label="Bottom" color="brand" />
      <ProgressBar progression={50} size="md" label="Bottom" color="brand" />
      <ProgressBar progression={75} size="md" label="Bottom" color="brand" />
      <ProgressBar progression={100} size="md" label="Bottom" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <span className="text-sm font-semibold text-gray-90">Label à Direita</span>
      <ProgressBar progression={0} size="md" label="Right" color="brand" />
      <ProgressBar progression={25} size="md" label="Right" color="brand" />
      <ProgressBar progression={50} size="md" label="Right" color="brand" />
      <ProgressBar progression={75} size="md" label="Right" color="brand" />
      <ProgressBar progression={100} size="md" label="Right" color="brand" />
    </div>
  </div>
);
WithLabels.parameters = {
  docs: {
    description: {
      story: 'ProgressBar com labels em diferentes posições e valores de progressão',
    },
  },
};

// Todas as variações
export const AllVariations = () => (
  <div className="flex flex-col gap-8 items-start p-8" style={{ width: '400px' }}>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Small (4px)</h3>
      <ProgressBar progression={50} size="sm" label="None" color="brand" />
      <ProgressBar progression={50} size="sm" label="Bottom" color="brand" />
      <ProgressBar progression={50} size="sm" label="Right" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Medium (8px)</h3>
      <ProgressBar progression={50} size="md" label="None" color="brand" />
      <ProgressBar progression={50} size="md" label="Bottom" color="brand" />
      <ProgressBar progression={50} size="md" label="Right" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Large (12px)</h3>
      <ProgressBar progression={50} size="lg" label="None" color="brand" />
      <ProgressBar progression={50} size="lg" label="Bottom" color="brand" />
      <ProgressBar progression={50} size="lg" label="Right" color="brand" />
    </div>
  </div>
);
AllVariations.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story: 'Todas as variações de tamanho e posição de label',
    },
  },
};
