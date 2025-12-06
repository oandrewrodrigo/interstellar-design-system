import React from 'react';
import { Slider } from '../../src/components/Slider';

export default {
  title: 'Components/Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Slider do Design System Interstellar. Slider single ou range com múltiplos tamanhos e opções de label.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor do slider (0-100) para single slider',
    },
    range: {
      control: 'object',
      description: 'Array [min, max] para range slider (0-100 cada)',
    },
    type: {
      control: { type: 'select' },
      options: ['single', 'range'],
      description: 'Tipo do slider',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do slider',
    },
    isLabel: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o label abaixo do handle',
    },
    isIcon: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o ícone no handle',
    },
    labelText: {
      control: { type: 'text' },
      description: 'Texto do label',
    },
    color: {
      control: { type: 'select' },
      options: ['brand', 'destructive', 'warning', 'success', 'gray'],
      description: 'Cor do slider',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o slider está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => (
  <div style={{ width: '343px' }}>
    <Slider {...args} />
  </div>
);

// Story padrão
export const Default = Template.bind({});
Default.args = {
  value: 50,
  type: 'single',
  size: 'md',
  isLabel: true,
  isIcon: true,
  labelText: 'Slider Label',
  color: 'brand',
  disabled: false,
};

// Tamanhos - Single
export const SizesSingle = () => (
  <div className="flex flex-col gap-6 items-start" style={{ width: '343px' }}>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Small (4px track, 16px thumb)</span>
      <Slider value={50} type="single" size="sm" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Medium (8px track, 20px thumb)</span>
      <Slider value={50} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Large (12px track, 24px thumb)</span>
      <Slider value={50} type="single" size="lg" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
  </div>
);
SizesSingle.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho para single slider: sm, md, lg',
    },
  },
};

// Progressões - Single
export const ProgressionsSingle = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <Slider value={0} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    <Slider value={25} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    <Slider value={50} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    <Slider value={75} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    <Slider value={100} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
  </div>
);
ProgressionsSingle.parameters = {
  docs: {
    description: {
      story: 'Diferentes valores de progressão para single slider: 0%, 25%, 50%, 75%, 100%',
    },
  },
};

// Range Slider
export const RangeSlider = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Start (0% - 25%)</span>
      <Slider range={[0, 25]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Center (25% - 75%)</span>
      <Slider range={[25, 75]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">End (75% - 100%)</span>
      <Slider range={[75, 100]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="text-sm text-gray-60">Full (0% - 100%)</span>
      <Slider range={[0, 100]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
    </div>
  </div>
);
RangeSlider.parameters = {
  docs: {
    description: {
      story: 'Range slider com diferentes configurações: Start, Center, End, Full',
    },
  },
};

// Sem label
export const WithoutLabel = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <Slider value={50} type="single" size="md" isLabel={false} isIcon={true} color="brand" />
    <Slider range={[25, 75]} type="range" size="md" isLabel={false} isIcon={true} color="brand" />
  </div>
);
WithoutLabel.parameters = {
  docs: {
    description: {
      story: 'Sliders sem label',
    },
  },
};

// Sem ícone
export const WithoutIcon = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <Slider value={50} type="single" size="md" isLabel={true} isIcon={false} labelText="Slider Label" color="brand" />
    <Slider range={[25, 75]} type="range" size="md" isLabel={true} isIcon={false} color="brand" />
  </div>
);
WithoutIcon.parameters = {
  docs: {
    description: {
      story: 'Sliders sem ícone no handle',
    },
  },
};

// Cores
export const Colors = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <Slider value={60} type="single" size="md" isLabel={true} isIcon={true} labelText="Brand" color="brand" />
    <Slider value={60} type="single" size="md" isLabel={true} isIcon={true} labelText="Destructive" color="destructive" />
    <Slider value={60} type="single" size="md" isLabel={true} isIcon={true} labelText="Warning" color="warning" />
    <Slider value={60} type="single" size="md" isLabel={true} isIcon={true} labelText="Success" color="success" />
    <Slider value={60} type="single" size="md" isLabel={true} isIcon={true} labelText="Gray" color="gray" />
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Variações de cor: Brand, Destructive, Warning, Success, Gray',
    },
  },
};

// Disabled
export const Disabled = () => (
  <div className="flex flex-col gap-4 items-start" style={{ width: '343px' }}>
    <Slider value={50} type="single" size="md" isLabel={true} isIcon={true} labelText="Disabled Single" color="brand" disabled={true} />
    <Slider range={[25, 75]} type="range" size="md" isLabel={true} isIcon={true} color="brand" disabled={true} />
  </div>
);
Disabled.parameters = {
  docs: {
    description: {
      story: 'Sliders desabilitados',
    },
  },
};

// Todas as variações
export const AllVariations = () => (
  <div className="flex flex-col gap-8 items-start p-8" style={{ width: '400px' }}>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Single Slider - Small</h3>
      <Slider value={0} type="single" size="sm" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={50} type="single" size="sm" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={100} type="single" size="sm" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Single Slider - Medium</h3>
      <Slider value={0} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={50} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={100} type="single" size="md" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Single Slider - Large</h3>
      <Slider value={0} type="single" size="lg" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={50} type="single" size="lg" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
      <Slider value={100} type="single" size="lg" isLabel={true} isIcon={true} labelText="Slider Label" color="brand" />
    </div>
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg font-semibold text-gray-90">Range Slider</h3>
      <Slider range={[0, 25]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
      <Slider range={[25, 75]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
      <Slider range={[75, 100]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
      <Slider range={[0, 100]} type="range" size="md" isLabel={true} isIcon={true} color="brand" />
    </div>
  </div>
);
AllVariations.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story: 'Todas as variações de tipo, tamanho e progressão',
    },
  },
};

