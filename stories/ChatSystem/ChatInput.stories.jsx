import React, { useState } from 'react';
import { ChatInput } from '../../src/components/ChatInput';

export default {
  title: 'Chat System/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de input do chat com botões para anexar arquivos, gravar áudio e enviar mensagem.',
      },
    },
  },
  argTypes: {
    showAttach: {
      control: { type: 'boolean' },
      description: 'Mostrar botão de anexar',
    },
    showRecord: {
      control: { type: 'boolean' },
      description: 'Mostrar botão de gravar',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilitar o input',
    },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState('');

  return (
    <div className="w-[600px]">
      <ChatInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSend={(message) => {
          console.log('Enviar:', message);
          setValue('');
        }}
        onAttach={() => console.log('Anexar arquivo')}
        onRecord={() => console.log('Gravar áudio')}
      />
    </div>
  );
};

Default.args = {
  placeholder: 'Mensagem',
  showAttach: true,
  showRecord: true,
  disabled: false,
};

export const WithoutButtons = () => {
  const [value, setValue] = useState('');

  return (
    <div className="w-[600px]">
      <ChatInput
        placeholder="Digite sua mensagem..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSend={(message) => {
          console.log('Enviar:', message);
          setValue('');
        }}
        showAttach={false}
        showRecord={false}
      />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div className="w-[600px]">
      <ChatInput
        placeholder="Input desabilitado"
        disabled={true}
        showAttach={true}
        showRecord={true}
      />
    </div>
  );
};

export const WithValue = () => {
  const [value, setValue] = useState('Olá, como você está?');

  return (
    <div className="w-[600px]">
      <ChatInput
        placeholder="Mensagem"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSend={(message) => {
          console.log('Enviar:', message);
          setValue('');
        }}
      />
    </div>
  );
};
