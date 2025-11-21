import React, { useState } from 'react';
import { Textarea } from '../../src/components/Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Textarea do Design System Interstellar. Suporta múltiplas variações de estado, contador de caracteres e texto de ajuda.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'filled', 'focused', 'disabled', 'error'],
      description: 'Estado do textarea',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do textarea',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do textarea',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto complementar abaixo do textarea',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Mensagem de erro (mostrada quando state="error")',
    },
    showCounter: {
      control: { type: 'boolean' },
      description: 'Se deve mostrar o contador de caracteres',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Número máximo de caracteres',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o textarea está desabilitado',
    },
    rows: {
      control: { type: 'number' },
      description: 'Número de linhas (altura inicial)',
    },
  },
};

// Template básico
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="w-[320px]">
      <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: 'Label',
  placeholder: 'Coloque o seu texto aqui...',
  helperText: 'Isso é um texto complementar',
  showCounter: true,
  maxLength: 300,
};

// Estados
export const States = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('Texto preenchido no textarea');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Textarea
        state="default"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Textarea
        state="hover"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Textarea
        state="filled"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <Textarea
        state="focused"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
      <Textarea
        state="disabled"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
      />
      <Textarea
        state="error"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        errorMessage="This is a validation text."
        showCounter={true}
        maxLength={300}
        value={value6}
        onChange={(e) => setValue6(e.target.value)}
      />
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do textarea: Default, Hover, Filled, Focused, Disabled e Error',
    },
  },
};

// Com e sem contador
export const WithCounter = () => {
  const [value1, setValue1] = useState('Texto de exemplo com contador');
  const [value2, setValue2] = useState('Texto de exemplo sem contador');
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Textarea
        state="default"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Textarea
        state="default"
        label="Label"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={false}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
    </div>
  );
};
WithCounter.parameters = {
  docs: {
    description: {
      story: 'Textarea com e sem contador de caracteres',
    },
  },
};

// Diferentes tamanhos de texto
export const TextLengths = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('Texto curto');
  const [value3, setValue3] = useState('Este é um texto médio que ocupa algumas linhas do textarea para demonstrar como ele se comporta com conteúdo mais extenso.');
  const [value4, setValue4] = useState('Este é um texto muito longo que está próximo do limite máximo de caracteres permitidos. Ele demonstra como o contador funciona quando o usuário está digitando e se aproxima do limite. O textarea deve continuar funcionando normalmente mesmo com textos extensos.');
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Textarea
        state="default"
        label="Vazio"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Textarea
        state="filled"
        label="Texto curto"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Textarea
        state="filled"
        label="Texto médio"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <Textarea
        state="filled"
        label="Texto longo"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
    </div>
  );
};
TextLengths.parameters = {
  docs: {
    description: {
      story: 'Textarea com diferentes tamanhos de texto para demonstrar o contador',
    },
  },
};

// Diferentes números de linhas
export const DifferentRows = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Textarea
        state="default"
        label="2 linhas"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        rows={2}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Textarea
        state="default"
        label="4 linhas (padrão)"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        rows={4}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Textarea
        state="default"
        label="6 linhas"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        rows={6}
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <Textarea
        state="default"
        label="8 linhas"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={300}
        rows={8}
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
    </div>
  );
};
DifferentRows.parameters = {
  docs: {
    description: {
      story: 'Textarea com diferentes números de linhas (rows)',
    },
  },
};

// Sem label e helper text
export const Minimal = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Textarea
        state="default"
        placeholder="Coloque o seu texto aqui..."
        showCounter={true}
        maxLength={300}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
Minimal.parameters = {
  docs: {
    description: {
      story: 'Textarea minimalista sem label e helper text',
    },
  },
};

// Com maxLength
export const WithMaxLength = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Textarea
        state="default"
        label="Limite de 100 caracteres"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={100}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <Textarea
        state="default"
        label="Limite de 500 caracteres"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        maxLength={500}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Textarea
        state="default"
        label="Sem limite (apenas contador)"
        placeholder="Coloque o seu texto aqui..."
        helperText="Isso é um texto complementar"
        showCounter={true}
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
    </div>
  );
};
WithMaxLength.parameters = {
  docs: {
    description: {
      story: 'Textarea com diferentes limites de caracteres (maxLength)',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  state: 'default',
  label: 'Label',
  placeholder: 'Digite algo...',
  helperText: 'Este é um textarea interativo',
  showCounter: true,
  maxLength: 300,
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Textarea interativo com controle de valor',
    },
  },
};

