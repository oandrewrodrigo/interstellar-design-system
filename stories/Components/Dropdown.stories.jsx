import React, { useState } from 'react';
import { Dropdown } from '../../src/components/Dropdown';

export default {
  title: 'Components/Navigation/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Dropdown do Design System Interstellar. Suporta múltiplas variações de tipo de item, seleção única ou múltipla, busca e estados.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'opened', 'disabled', 'error'],
      description: 'Estado do dropdown',
    },
    itemType: {
      control: { type: 'select' },
      options: ['text', 'text-icon', 'avatar', 'dot', 'country'],
      description: 'Tipo de item do dropdown',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Se permite seleção múltipla (checkbox) ou única (radio)',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do dropdown',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do dropdown',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto complementar abaixo do dropdown',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Mensagem de erro (mostrada quando state="error")',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Se o dropdown tem campo de busca',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o dropdown está desabilitado',
    },
  },
};

// Template básico
const Template = (args) => {
  const [value, setValue] = useState(args.multiple ? [] : '');
  return (
    <div className="w-[320px]">
      <Dropdown {...args} value={value} onChange={setValue} />
    </div>
  );
};

// Story padrão
export const Default = Template.bind({});
Default.args = {
  state: 'default',
  itemType: 'text',
  multiple: false,
  label: 'Label',
  placeholder: 'Placeholder Text',
  searchable: true,
  options: [
    { value: 'apparel', label: 'Apparel' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'art', label: 'Art' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'books', label: 'Books' },
    { value: 'computers', label: 'Computers' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'jewelry', label: 'Jewelry' },
    { value: 'kitchenware', label: 'Kitchenware' },
  ],
};

// Estados
export const States = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  
  const options = [
    { value: 'option1', label: 'Opção 1' },
    { value: 'option2', label: 'Opção 2' },
    { value: 'option3', label: 'Opção 3' },
  ];
  
  return (
    <div className="flex flex-col gap-4 w-[320px]">
      <Dropdown
        state="default"
        label="Label"
        placeholder="Placeholder Text"
        options={options}
        value={value1}
        onChange={setValue1}
      />
      <Dropdown
        state="hover"
        label="Label"
        placeholder="Placeholder Text"
        options={options}
        value={value2}
        onChange={setValue2}
      />
      <Dropdown
        state="opened"
        label="Label"
        placeholder="Placeholder Text"
        options={options}
        value={value3}
        onChange={setValue3}
      />
      <Dropdown
        state="disabled"
        label="Label"
        placeholder="Placeholder Text"
        options={options}
        value={value4}
        onChange={setValue4}
      />
      <Dropdown
        state="error"
        label="Label"
        placeholder="Placeholder Text"
        helperText="Isso é um texto complementar"
        errorMessage="This is a validation text."
        options={options}
        value={value5}
        onChange={setValue5}
      />
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Estados do dropdown: Default, Hover, Opened, Disabled e Error',
    },
  },
};

// Tipos de item - Text Only
export const TextOnly = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        itemType="text"
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'apparel', label: 'Apparel' },
          { value: 'accessories', label: 'Accessories' },
          { value: 'art', label: 'Art' },
          { value: 'beauty', label: 'Beauty' },
          { value: 'books', label: 'Books' },
          { value: 'computers', label: 'Computers' },
          { value: 'electronics', label: 'Electronics' },
          { value: 'furniture', label: 'Furniture' },
          { value: 'jewelry', label: 'Jewelry' },
          { value: 'kitchenware', label: 'Kitchenware' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
TextOnly.parameters = {
  docs: {
    description: {
      story: 'Dropdown com itens apenas de texto',
    },
  },
};

// Tipos de item - Text + Icon
export const TextWithIcon = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        itemType="text-icon"
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'user1', label: 'User 1', icon: 'User', handle: '@user1' },
          { value: 'user2', label: 'User 2', icon: 'User', handle: '@user2' },
          { value: 'user3', label: 'User 3', icon: 'User', handle: '@user3' },
          { value: 'user4', label: 'User 4', icon: 'User', handle: '@user4' },
          { value: 'user5', label: 'User 5', icon: 'User', handle: '@user5' },
          { value: 'user6', label: 'User 6', icon: 'User', handle: '@user6' },
          { value: 'user7', label: 'User 7', icon: 'User', handle: '@user7' },
          { value: 'user8', label: 'User 8', icon: 'User', handle: '@user8' },
          { value: 'user9', label: 'User 9', icon: 'User', handle: '@user9' },
          { value: 'user10', label: 'User 10', icon: 'User', handle: '@user10' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
TextWithIcon.parameters = {
  docs: {
    description: {
      story: 'Dropdown com itens de texto e ícone',
    },
  },
};

// Tipos de item - Avatar
export const WithAvatar = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        itemType="avatar"
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'alice', label: 'Alice Smith', avatar: '👤', handle: '@alicesmith' },
          { value: 'bob', label: 'Bob Johnson', avatar: '👤', handle: '@bobjohnson' },
          { value: 'clara', label: 'Clara Garcia', avatar: '👤', handle: '@claragarcia' },
          { value: 'david', label: 'David Brown', avatar: '👤', handle: '@davidbrown' },
          { value: 'emma', label: 'Emma Lee', avatar: '👤', handle: '@emmalee' },
          { value: 'frank', label: 'Frank Wong', avatar: '👤', handle: '@frankwong' },
          { value: 'grace', label: 'Grace Taylor', avatar: '👤', handle: '@gracetaylor' },
          { value: 'henry', label: 'Henry Martinez', avatar: '👤', handle: '@henrymartinez' },
          { value: 'isabella', label: 'Isabella Clark', avatar: '👤', handle: '@isabellaclark' },
          { value: 'jack', label: 'Jack Nguyen', avatar: '👤', handle: '@jacknguyen' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
WithAvatar.parameters = {
  docs: {
    description: {
      story: 'Dropdown com itens contendo avatar',
    },
  },
};

// Tipos de item - Dot (Status)
export const WithDot = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        itemType="dot"
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'alice', label: 'Alice Smith', dot: 'online' },
          { value: 'bob', label: 'Bob Johnson', dot: 'offline' },
          { value: 'clara', label: 'Clara Garcia', dot: 'busy' },
          { value: 'david', label: 'David Brown', dot: 'error' },
          { value: 'emma', label: 'Emma Lee', dot: 'online' },
          { value: 'frank', label: 'Frank Wong', dot: 'offline' },
          { value: 'grace', label: 'Grace Taylor', dot: 'busy' },
          { value: 'henry', label: 'Henry Martinez', dot: 'online' },
          { value: 'isabella', label: 'Isabella Clark', dot: 'error' },
          { value: 'jack', label: 'Jack Nguyen', dot: 'online' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
WithDot.parameters = {
  docs: {
    description: {
      story: 'Dropdown com itens contendo indicador de status (dot)',
    },
  },
};

// Tipos de item - Country
export const WithCountry = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        itemType="country"
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'br', label: 'Brasil', flag: '🇧🇷', code: 'BR' },
          { value: 'au', label: 'Australia', flag: '🇦🇺', code: 'AU' },
          { value: 'ca', label: 'Canada', flag: '🇨🇦', code: 'CA' },
          { value: 'cn', label: 'China', flag: '🇨🇳', code: 'CN' },
          { value: 'fr', label: 'França', flag: '🇫🇷', code: 'FR' },
          { value: 'de', label: 'Alemanha', flag: '🇩🇪', code: 'DE' },
          { value: 'jp', label: 'Japão', flag: '🇯🇵', code: 'JP' },
          { value: 'es', label: 'Espanha', flag: '🇪🇸', code: 'ES' },
          { value: 'gb', label: 'Reino Unido', flag: '🇬🇧', code: 'GB' },
          { value: 'us', label: 'Estados Unidos', flag: '🇺🇸', code: 'US' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
WithCountry.parameters = {
  docs: {
    description: {
      story: 'Dropdown com itens de país contendo bandeira e código',
    },
  },
};

// Seleção múltipla
export const MultipleSelection = () => {
  const [value, setValue] = useState([]);
  
  return (
    <div className="w-[320px]">
      <Dropdown
        multiple={true}
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'apparel', label: 'Apparel' },
          { value: 'accessories', label: 'Accessories' },
          { value: 'art', label: 'Art' },
          { value: 'beauty', label: 'Beauty' },
          { value: 'books', label: 'Books' },
          { value: 'computers', label: 'Computers' },
          { value: 'electronics', label: 'Electronics' },
          { value: 'furniture', label: 'Furniture' },
          { value: 'jewelry', label: 'Jewelry' },
          { value: 'kitchenware', label: 'Kitchenware' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
MultipleSelection.parameters = {
  docs: {
    description: {
      story: 'Dropdown com seleção múltipla (checkbox)',
    },
  },
};

// Sem busca
export const WithoutSearch = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className="w-[320px]">
      <Dropdown
        searchable={false}
        label="Label"
        placeholder="Placeholder Text"
        options={[
          { value: 'option1', label: 'Opção 1' },
          { value: 'option2', label: 'Opção 2' },
          { value: 'option3', label: 'Opção 3' },
          { value: 'option4', label: 'Opção 4' },
          { value: 'option5', label: 'Opção 5' },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
WithoutSearch.parameters = {
  docs: {
    description: {
      story: 'Dropdown sem campo de busca',
    },
  },
};

// Interativo
export const Interactive = Template.bind({});
Interactive.args = {
  state: 'default',
  itemType: 'text',
  multiple: false,
  label: 'Label',
  placeholder: 'Selecione uma opção...',
  searchable: true,
  options: [
    { value: 'apparel', label: 'Apparel' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'art', label: 'Art' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'books', label: 'Books' },
  ],
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Dropdown interativo com controle de valor',
    },
  },
};

