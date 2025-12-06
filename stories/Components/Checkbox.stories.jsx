import React, { useState } from 'react';
import { Checkbox } from '../../src/components/Checkbox';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Checkbox do Design System Interstellar. Suporta múltiplas variações de tamanho, estado e estado indeterminado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do checkbox',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Estado do checkbox',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Se o checkbox está marcado',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Se o checkbox está em estado indeterminado',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o checkbox está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  size: 'sm',
  state: 'default',
  checked: false,
};

// Tamanhos
export const Sizes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-4 items-center">
        <Checkbox size="sm" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
        <span className="text-sm text-gray-80">Small (16px)</span>
      </div>
      <div className="flex gap-4 items-center">
        <Checkbox size="md" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
        <span className="text-sm text-gray-80">Medium (20px)</span>
      </div>
      <div className="flex gap-4 items-center">
        <Checkbox size="lg" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} />
        <span className="text-sm text-gray-80">Large (24px)</span>
      </div>
    </div>
  );
};
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do checkbox: sm (16px), md (20px), lg (24px)',
    },
  },
};

// Estados
export const States = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Unchecked</h3>
        <div className="flex gap-4 items-center">
          <Checkbox size="md" state="default" checked={false} />
          <Checkbox size="md" state="hover" checked={false} />
          <Checkbox size="md" state="focused" checked={false} />
          <Checkbox size="md" state="disabled" checked={false} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Checked</h3>
        <div className="flex gap-4 items-center">
          <Checkbox size="md" state="default" checked={true} />
          <Checkbox size="md" state="hover" checked={true} />
          <Checkbox size="md" state="focused" checked={true} />
          <Checkbox size="md" state="disabled" checked={true} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Indeterminate</h3>
        <div className="flex gap-4 items-center">
          <Checkbox size="md" state="default" indeterminate={true} />
          <Checkbox size="md" state="hover" indeterminate={true} />
          <Checkbox size="md" state="focused" indeterminate={true} />
          <Checkbox size="md" state="disabled" indeterminate={true} />
        </div>
      </div>
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do checkbox: Default, Hover, Focused e Disabled',
    },
  },
};

// Todas as combinações
export const AllCombinations = () => {
  const sizes = ['sm', 'md', 'lg'];
  const states = ['default', 'hover', 'focused', 'disabled'];
  const variants = [
    { checked: false, indeterminate: false, label: 'Unchecked' },
    { checked: true, indeterminate: false, label: 'Checked' },
    { checked: false, indeterminate: true, label: 'Indeterminate' },
  ];

  return (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-90">Size: {size.toUpperCase()}</h3>
          {variants.map((variant) => (
            <div key={variant.label} className="flex flex-col gap-2">
              <h4 className="text-xs font-medium text-gray-60">{variant.label}</h4>
              <div className="flex gap-4 items-center">
                {states.map((state) => (
                  <div key={state} className="flex flex-col gap-2 items-center">
                    <Checkbox
                      size={size}
                      state={state}
                      checked={variant.checked}
                      indeterminate={variant.indeterminate}
                    />
                    <span className="text-xs text-gray-50">{state}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
AllCombinations.parameters = {
  docs: {
    description: {
      story: 'Todas as combinações de tamanhos, estados e variantes do checkbox',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  size: 'md',
  state: 'default',
  checked: false,
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Checkbox interativo com controle de estado',
    },
  },
};

// Com label
export const WithLabel = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-start">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="sm" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
        <span className="text-sm text-gray-80">Checkbox pequeno com label</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="md" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} />
        <span className="text-sm text-gray-80">Checkbox médio com label</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} />
        <span className="text-sm text-gray-80">Checkbox grande com label</span>
      </label>
    </div>
  );
};
WithLabel.parameters = {
  docs: {
    description: {
      story: 'Checkboxes com labels',
    },
  },
};
