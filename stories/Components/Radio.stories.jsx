import React, { useState } from 'react';
import { Radio } from '../../src/components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Radio do Design System Interstellar. Suporta múltiplas variações de tamanho e estado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do radio',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'Estado do radio',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Se o radio está marcado',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o radio está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <Radio
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
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
        <Radio size="sm" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} name="sizes" value="sm" />
        <span className="text-sm text-gray-80">Small (16px)</span>
      </div>
      <div className="flex gap-4 items-center">
        <Radio size="md" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} name="sizes" value="md" />
        <span className="text-sm text-gray-80">Medium (20px)</span>
      </div>
      <div className="flex gap-4 items-center">
        <Radio size="lg" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} name="sizes" value="lg" />
        <span className="text-sm text-gray-80">Large (24px)</span>
      </div>
    </div>
  );
};
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do radio: sm (16px), md (20px), lg (24px)',
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
          <Radio size="md" state="default" checked={false} name="states-unchecked" value="default" />
          <Radio size="md" state="hover" checked={false} name="states-unchecked" value="hover" />
          <Radio size="md" state="focused" checked={false} name="states-unchecked" value="focused" />
          <Radio size="md" state="disabled" checked={false} name="states-unchecked" value="disabled" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-90">Checked</h3>
        <div className="flex gap-4 items-center">
          <Radio size="md" state="default" checked={true} name="states-checked" value="default" />
          <Radio size="md" state="hover" checked={true} name="states-checked" value="hover" />
          <Radio size="md" state="focused" checked={true} name="states-checked" value="focused" />
          <Radio size="md" state="disabled" checked={true} name="states-checked" value="disabled" />
        </div>
      </div>
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do radio: Default, Hover, Focused e Disabled',
    },
  },
};

// Todas as combinações
export const AllCombinations = () => {
  const sizes = ['sm', 'md', 'lg'];
  const states = ['default', 'hover', 'focused', 'disabled'];
  const variants = [
    { checked: false, label: 'Unchecked' },
    { checked: true, label: 'Checked' },
  ];

  return (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-90">
            Size: {size.toUpperCase()}
          </h3>
          {variants.map((variant) => (
            <div key={variant.label} className="flex flex-col gap-2">
              <h4 className="text-xs font-medium text-gray-60">{variant.label}</h4>
              <div className="flex gap-4 items-center">
                {states.map((state) => (
                  <div key={state} className="flex flex-col gap-2 items-center">
                    <Radio
                      size={size}
                      state={state}
                      checked={variant.checked}
                      name={`radio-${size}-${variant.label}`}
                      value={state}
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
      story: 'Todas as combinações de tamanhos e estados do radio',
    },
  },
};

// Grupo de radios
export const RadioGroup = () => {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div className="flex flex-col gap-4 items-start">
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          size="md"
          checked={selected === 'option1'}
          onChange={() => setSelected('option1')}
          name="group1"
          value="option1"
        />
        <span className="text-sm text-gray-80">Opção 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          size="md"
          checked={selected === 'option2'}
          onChange={() => setSelected('option2')}
          name="group1"
          value="option2"
        />
        <span className="text-sm text-gray-80">Opção 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          size="md"
          checked={selected === 'option3'}
          onChange={() => setSelected('option3')}
          name="group1"
          value="option3"
        />
        <span className="text-sm text-gray-80">Opção 3</span>
      </label>
    </div>
  );
};
RadioGroup.parameters = {
  docs: {
    description: {
      story: 'Grupo de radios funcionando juntos (seleção única)',
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
        <Radio
          size="sm"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          name="with-label"
          value="sm"
        />
        <span className="text-sm text-gray-80">Radio pequeno com label</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          size="md"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          name="with-label"
          value="md"
        />
        <span className="text-sm text-gray-80">Radio médio com label</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Radio
          size="lg"
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          name="with-label"
          value="lg"
        />
        <span className="text-sm text-gray-80">Radio grande com label</span>
      </label>
    </div>
  );
};
WithLabel.parameters = {
  docs: {
    description: {
      story: 'Radios com labels',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  size: 'md',
  state: 'default',
  checked: false,
  name: 'interactive',
  value: 'value1',
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Radio interativo com controle de estado',
    },
  },
};

