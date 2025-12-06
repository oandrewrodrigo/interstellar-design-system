import React from 'react';
import { Loader } from '../../src/components/Loader';

export default {
  title: 'Components/Feedback/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Loader do Design System Interstellar. Indicador de carregamento com múltiplos tipos e tamanhos, com animações suaves.',
      },
    },
  },
  argTypes: {
    isLabel: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o label abaixo do loader',
    },
    labelDescription: {
      control: { type: 'text' },
      description: 'Text do label (padrão: "Loading...")',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Tamanho do loader',
    },
    type: {
      control: { type: 'select' },
      options: [
        'Circle Single',
        'Circle Multi',
        'Spinner Thick',
        'Spinner Thin',
        'Spinner Dot',
        'Box',
      ],
      description: 'Tipo do loader',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'warning', 'success', 'gray'],
      description: 'Cor do loader',
    },
  },
};

// Template básico
const Template = (args) => <Loader {...args} />;

// Story padrão
export const Default = Template.bind({});
Default.args = {
  isLabel: true,
  labelDescription: 'Loading...',
  size: 'md',
  type: 'Circle Single',
  color: 'brand',
};

// Tamanhos
export const Sizes = () => (
  <div className="flex flex-col gap-8 items-center">
    <div className="flex gap-8 items-end">
      <Loader size="xs" type="Circle Single" color="brand" />
      <Loader size="sm" type="Circle Single" color="brand" />
      <Loader size="md" type="Circle Single" color="brand" />
      <Loader size="lg" type="Circle Single" color="brand" />
      <Loader size="xl" type="Circle Single" color="brand" />
      <Loader size="2xl" type="Circle Single" color="brand" />
    </div>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story:
        'Variações de tamanho do loader: xs (32px), sm (40px), md (48px), lg (56px), xl (64px), 2xl (80px)',
    },
  },
};

// Tipos
export const Types = () => (
  <div className="flex flex-col gap-8 items-center">
    <div className="flex gap-8 items-center">
      <Loader size="md" type="Circle Single" color="brand" />
      <Loader size="md" type="Circle Multi" color="brand" />
      <Loader size="md" type="Spinner Thick" color="brand" />
      <Loader size="md" type="Spinner Thin" color="brand" />
      <Loader size="md" type="Spinner Dot" color="brand" />
      <Loader size="md" type="Box" color="brand" />
    </div>
  </div>
);
Types.parameters = {
  docs: {
    description: {
      story:
        'Diferentes tipos de loader: Circle Single, Circle Multi, Spinner Thick, Spinner Thin, Spinner Dot, Box',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-8 items-center">
    <div className="flex gap-8 items-center">
      <Loader size="md" type="Circle Single" color="brand" />
      <Loader size="md" type="Circle Single" color="destructive" />
      <Loader size="md" type="Circle Single" color="warning" />
      <Loader size="md" type="Circle Single" color="success" />
      <Loader size="md" type="Circle Single" color="gray" />
    </div>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor do loader: Brand, Destructive, Warning, Success, Gray',
    },
  },
};

// Sem label
export const WithoutLabel = () => (
  <div className="flex flex-col gap-8 items-center">
    <div className="flex gap-8 items-center">
      <Loader size="md" type="Circle Single" color="brand" isLabel={false} />
      <Loader size="md" type="Circle Multi" color="brand" isLabel={false} />
      <Loader size="md" type="Spinner Thick" color="brand" isLabel={false} />
      <Loader size="md" type="Spinner Thin" color="brand" isLabel={false} />
      <Loader size="md" type="Spinner Dot" color="brand" isLabel={false} />
      <Loader size="md" type="Box" color="brand" isLabel={false} />
    </div>
  </div>
);
WithoutLabel.parameters = {
  docs: {
    description: {
      story: 'Loaders sem label',
    },
  },
};

// Label customizado
export const CustomLabel = () => (
  <div className="flex flex-col gap-8 items-center">
    <Loader size="md" type="Circle Single" color="brand" labelDescription="Carregando dados..." />
    <Loader size="md" type="Circle Multi" color="brand" labelDescription="Processando..." />
    <Loader size="md" type="Spinner Thick" color="brand" labelDescription="Aguarde..." />
  </div>
);
CustomLabel.parameters = {
  docs: {
    description: {
      story: 'Loaders com labels customizados',
    },
  },
};

// Todas as variações
export const AllVariations = () => (
  <div className="flex flex-col gap-12 items-center p-8">
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Circle Single</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Circle Single" color="brand" />
        <Loader size="sm" type="Circle Single" color="brand" />
        <Loader size="md" type="Circle Single" color="brand" />
        <Loader size="lg" type="Circle Single" color="brand" />
        <Loader size="xl" type="Circle Single" color="brand" />
        <Loader size="2xl" type="Circle Single" color="brand" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Circle Multi</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Circle Multi" color="brand" />
        <Loader size="sm" type="Circle Multi" color="brand" />
        <Loader size="md" type="Circle Multi" color="brand" />
        <Loader size="lg" type="Circle Multi" color="brand" />
        <Loader size="xl" type="Circle Multi" color="brand" />
        <Loader size="2xl" type="Circle Multi" color="brand" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Spinner Thick</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Spinner Thick" color="brand" />
        <Loader size="sm" type="Spinner Thick" color="brand" />
        <Loader size="md" type="Spinner Thick" color="brand" />
        <Loader size="lg" type="Spinner Thick" color="brand" />
        <Loader size="xl" type="Spinner Thick" color="brand" />
        <Loader size="2xl" type="Spinner Thick" color="brand" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Spinner Thin</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Spinner Thin" color="brand" />
        <Loader size="sm" type="Spinner Thin" color="brand" />
        <Loader size="md" type="Spinner Thin" color="brand" />
        <Loader size="lg" type="Spinner Thin" color="brand" />
        <Loader size="xl" type="Spinner Thin" color="brand" />
        <Loader size="2xl" type="Spinner Thin" color="brand" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Spinner Dot</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Spinner Dot" color="brand" />
        <Loader size="sm" type="Spinner Dot" color="brand" />
        <Loader size="md" type="Spinner Dot" color="brand" />
        <Loader size="lg" type="Spinner Dot" color="brand" />
        <Loader size="xl" type="Spinner Dot" color="brand" />
        <Loader size="2xl" type="Spinner Dot" color="brand" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-90">Box</h3>
      <div className="flex gap-6 items-center">
        <Loader size="xs" type="Box" color="brand" />
        <Loader size="sm" type="Box" color="brand" />
        <Loader size="md" type="Box" color="brand" />
        <Loader size="lg" type="Box" color="brand" />
        <Loader size="xl" type="Box" color="brand" />
        <Loader size="2xl" type="Box" color="brand" />
      </div>
    </div>
  </div>
);
AllVariations.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story: 'Todas as variações de tipo e tamanho do loader',
    },
  },
};
