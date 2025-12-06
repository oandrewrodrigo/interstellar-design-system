import React, { useState } from 'react';
import { Input } from '../../src/components/Input';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente Input do Design System Interstellar. Suporta múltiplas variações de tamanho, tipo e estado.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      description: 'Tamanho do input',
    },
    type: {
      control: { type: 'select' },
      options: [
        'default',
        'action',
        'currency',
        'credit-card',
        'date',
        'link',
        'password',
        'phone',
        'number',
      ],
      description: 'Tipo do input',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'filled', 'focused', 'disabled', 'error'],
      description: 'Estado do input',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto complementar abaixo do input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Mensagem de erro (mostrada quando state="error")',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o input está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="w-[320px]">
      <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  size: 'md',
  type: 'default',
  state: 'default',
  label: 'Label',
  placeholder: 'Texto placeholder',
  helperText: 'Isso é um texto complementar',
};

// Tamanhos
export const Sizes = () => {
  const [valueMd, setValueMd] = useState('');
  const [valueLg, setValueLg] = useState('');

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input
        size="md"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={valueMd}
        onChange={(e) => setValueMd(e.target.value)}
      />
      <Input
        size="lg"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={valueLg}
        onChange={(e) => setValueLg(e.target.value)}
      />
    </div>
  );
};
Sizes.parameters = {
  docs: {
    description: {
      story: 'Variações de tamanho do input: md (40px) e lg (48px)',
    },
  },
};

// Estados
export const States = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('Texto preenchido');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input
        size="md"
        type="default"
        state="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        state="hover"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        state="filled"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        state="focused"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        state="disabled"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        state="error"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        errorMessage="This is a validation text."
        value={value6}
        onChange={(e) => setValue6(e.target.value)}
      />
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do input: Default, Hover, Filled, Focused, Disabled e Error',
    },
  },
};

// Tipos
export const Types = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input
        size="lg"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        size="lg"
        type="action"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        rightIcon="Copy"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Input
        size="lg"
        type="currency"
        label="Label"
        placeholder="Quantia"
        helperText="Isso é um texto complementar"
        leftAdornment="R$"
        rightIcon="ChevronDown"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <Input
        size="lg"
        type="credit-card"
        label="Label"
        placeholder="0000 0000 0000 0000"
        helperText="Isso é um texto complementar"
        rightAdornment="VISA"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
      <Input
        size="lg"
        type="date"
        label="Label"
        placeholder="00/00/0000"
        helperText="Isso é um texto complementar"
        rightIcon="Calendar"
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
      />
      <Input
        size="lg"
        type="link"
        label="Label"
        placeholder="Texto do Link"
        helperText="Isso é um texto complementar"
        leftAdornment="https://"
        rightIcon="Link"
        value={value6}
        onChange={(e) => setValue6(e.target.value)}
      />
      <Input
        size="lg"
        type="password"
        label="Label"
        placeholder="**********"
        helperText="This is a validation text."
        leftIcon="Lock"
        value={value7}
        onChange={(e) => setValue7(e.target.value)}
      />
      <Input
        size="lg"
        type="phone"
        label="Label"
        placeholder="(000) 000-0000"
        helperText="Isso é um texto complementar"
        leftIcon="Check"
        leftAdornment="+55"
        value={value8}
        onChange={(e) => setValue8(e.target.value)}
      />
      <Input
        size="lg"
        type="number"
        label="Label"
        placeholder="Texto de Numero"
        helperText="Isso é um texto complementar"
        rightIcon="ChevronUp"
        value={value9}
        onChange={(e) => setValue9(e.target.value)}
      />
    </div>
  );
};
Types.parameters = {
  docs: {
    description: {
      story:
        'Diferentes tipos de input: Default, Action (com botão), Currency, Credit Card, Date, Link, Password, Phone e Number',
    },
  },
};

// Com ícones
export const WithIcons = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input
        size="md"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        leftIcon="User"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        rightIcon="Search"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Input
        size="md"
        type="default"
        label="Label"
        placeholder="Texto placeholder"
        helperText="Isso é um texto complementar"
        leftIcon="Mail"
        rightIcon="Check"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
    </div>
  );
};
WithIcons.parameters = {
  docs: {
    description: {
      story: 'Inputs com ícones Lucide à esquerda, direita ou ambos',
    },
  },
};

// Com adornments
export const WithAdornments = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Input
        size="md"
        type="currency"
        label="Label"
        placeholder="Quantia"
        helperText="Isso é um texto complementar"
        leftAdornment="R$"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Input
        size="md"
        type="link"
        label="Label"
        placeholder="Texto do Link"
        helperText="Isso é um texto complementar"
        leftAdornment="https://"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Input
        size="md"
        type="phone"
        label="Label"
        placeholder="(000) 000-0000"
        helperText="Isso é um texto complementar"
        leftAdornment="+55"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
    </div>
  );
};
WithAdornments.parameters = {
  docs: {
    description: {
      story: 'Inputs com adornments (texto prefixo ou sufixo) como moeda, URL ou código de país',
    },
  },
};

// Componente helper para Input com estado
const InputWithState = ({ state, typeConfig }) => {
  const [value, setValue] = useState(state === 'filled' ? 'Texto preenchido' : '');

  return (
    <div className="w-[320px]">
      <Input
        size="lg"
        type={typeConfig.type}
        state={state}
        label="Label"
        placeholder={typeConfig.placeholder}
        helperText={state === 'error' ? undefined : 'Isso é um texto complementar'}
        errorMessage={state === 'error' ? 'This is a validation text.' : undefined}
        leftIcon={typeConfig.leftIcon}
        rightIcon={typeConfig.rightIcon}
        leftAdornment={typeConfig.leftAdornment}
        rightAdornment={typeConfig.rightAdornment}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

// Estados com todos os tipos (lg)
export const AllTypesStates = () => {
  const states = ['default', 'hover', 'filled', 'focused', 'disabled', 'error'];
  const types = [
    { type: 'default', placeholder: 'Texto placeholder' },
    { type: 'action', placeholder: 'Texto placeholder', rightIcon: 'Copy' },
    { type: 'currency', placeholder: 'Quantia', leftAdornment: 'R$', rightIcon: 'ChevronDown' },
    { type: 'credit-card', placeholder: '0000 0000 0000 0000', rightAdornment: 'VISA' },
    { type: 'date', placeholder: '00/00/0000', rightIcon: 'Calendar' },
    { type: 'link', placeholder: 'Texto do Link', leftAdornment: 'https://', rightIcon: 'Link' },
    { type: 'password', placeholder: '**********', leftIcon: 'Lock' },
    { type: 'phone', placeholder: '(000) 000-0000', leftIcon: 'Check', leftAdornment: '+55' },
    { type: 'number', placeholder: 'Texto de Numero', rightIcon: 'ChevronUp' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {types.map((typeConfig, typeIndex) => (
        <div key={typeIndex} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-90">Type: {typeConfig.type}</h3>
          <div className="flex flex-wrap gap-4">
            {states.map((state) => (
              <InputWithState key={state} state={state} typeConfig={typeConfig} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
AllTypesStates.parameters = {
  docs: {
    description: {
      story: 'Todas as combinações de tipos e estados do input (tamanho lg)',
    },
  },
};

// Componente helper para Input com estado (md)
const InputWithStateMd = ({ state, typeConfig }) => {
  const [value, setValue] = useState(state === 'filled' ? 'Texto preenchido' : '');

  return (
    <div className="w-[320px]">
      <Input
        size="md"
        type={typeConfig.type}
        state={state}
        label="Label"
        placeholder={typeConfig.placeholder}
        helperText={state === 'error' ? undefined : 'Isso é um texto complementar'}
        errorMessage={state === 'error' ? 'This is a validation text.' : undefined}
        leftIcon={typeConfig.leftIcon}
        rightIcon={typeConfig.rightIcon}
        leftAdornment={typeConfig.leftAdornment}
        rightAdornment={typeConfig.rightAdornment}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

// Estados com todos os tipos (md)
export const AllTypesStatesMd = () => {
  const states = ['default', 'hover', 'filled', 'focused', 'disabled', 'error'];
  const types = [
    { type: 'default', placeholder: 'Texto placeholder' },
    { type: 'action', placeholder: 'Texto placeholder', rightIcon: 'Copy' },
    { type: 'currency', placeholder: 'Quantia', leftAdornment: 'R$', rightIcon: 'ChevronDown' },
    { type: 'credit-card', placeholder: '0000 0000 0000 0000', rightAdornment: 'VISA' },
    { type: 'date', placeholder: '00/00/0000', rightIcon: 'Calendar' },
    { type: 'link', placeholder: 'Texto do Link', leftAdornment: 'https://', rightIcon: 'Link' },
    { type: 'password', placeholder: '**********', leftIcon: 'Lock' },
    { type: 'phone', placeholder: '(000) 000-0000', leftIcon: 'Check', leftAdornment: '+55' },
    { type: 'number', placeholder: 'Texto de Numero', rightIcon: 'ChevronUp' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {types.map((typeConfig, typeIndex) => (
        <div key={typeIndex} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-90">Type: {typeConfig.type}</h3>
          <div className="flex flex-wrap gap-4">
            {states.map((state) => (
              <InputWithStateMd key={state} state={state} typeConfig={typeConfig} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
AllTypesStatesMd.parameters = {
  docs: {
    description: {
      story: 'Todas as combinações de tipos e estados do input (tamanho md)',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  size: 'md',
  type: 'default',
  state: 'default',
  label: 'Label',
  placeholder: 'Digite algo...',
  helperText: 'Este é um input interativo',
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Input interativo com controle de valor',
    },
  },
};
