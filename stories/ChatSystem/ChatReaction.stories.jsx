import React, { useState } from 'react';
import { ChatReaction } from '../../src/components/ChatReaction';

export default {
  title: 'Chat System/ChatReaction',
  component: ChatReaction,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Reação a uma mensagem (emoji ou texto) com diferentes tamanhos.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho da reação',
    },
    isText: {
      control: { type: 'boolean' },
      description: 'Se a reação é texto (emoji)',
    },
    isSelected: {
      control: { type: 'boolean' },
      description: 'Se a reação está selecionada',
    },
  },
};

export const Small = () => {
  return (
    <div className="space-x-2 flex items-center">
      <ChatReaction reaction="👍" size="sm" isText={false} />
      <ChatReaction reaction="❤️" size="sm" isText={true} />
    </div>
  );
};

export const Medium = () => {
  return (
    <div className="space-x-2 flex items-center">
      <ChatReaction reaction="👍" size="md" isText={false} />
      <ChatReaction reaction="❤️" size="md" isText={true} />
    </div>
  );
};

export const Large = () => {
  return (
    <div className="space-x-2 flex items-center">
      <ChatReaction reaction="👍" size="lg" isText={false} />
      <ChatReaction reaction="❤️" size="lg" isText={true} />
    </div>
  );
};

export const AllSizes = () => {
  return (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <span className="text-sm text-gray-60 w-20">Small:</span>
        <ChatReaction reaction="👍" size="sm" isText={false} />
        <ChatReaction reaction="❤️" size="sm" isText={true} />
      </div>
      <div className="space-x-2 flex items-center">
        <span className="text-sm text-gray-60 w-20">Medium:</span>
        <ChatReaction reaction="👍" size="md" isText={false} />
        <ChatReaction reaction="❤️" size="md" isText={true} />
      </div>
      <div className="space-x-2 flex items-center">
        <span className="text-sm text-gray-60 w-20">Large:</span>
        <ChatReaction reaction="👍" size="lg" isText={false} />
        <ChatReaction reaction="❤️" size="lg" isText={true} />
      </div>
    </div>
  );
};

export const Selected = () => {
  return (
    <div className="space-x-2 flex items-center">
      <ChatReaction reaction="👍" size="md" isSelected={false} />
      <ChatReaction reaction="❤️" size="md" isSelected={true} />
      <ChatReaction reaction="😄" size="md" isSelected={false} />
    </div>
  );
};

export const Clickable = () => {
  const [selected, setSelected] = useState(false);
  
  return (
    <div className="space-x-2 flex items-center">
      <ChatReaction
        reaction="👍"
        size="md"
        isSelected={selected}
        onClick={() => setSelected(!selected)}
      />
      <span className="text-sm text-gray-60">Clique para selecionar</span>
    </div>
  );
};

export const MultipleReactions = () => {
  const reactions = ['👍', '❤️', '😄', '🎉', '🔥'];
  
  return (
    <div className="flex flex-wrap gap-2">
      {reactions.map((reaction, index) => (
        <ChatReaction
          key={index}
          reaction={reaction}
          size="md"
          onClick={() => console.log('Reação:', reaction)}
        />
      ))}
    </div>
  );
};

export const Interactive = (args) => {
  return <ChatReaction {...args} />;
};

Interactive.args = {
  reaction: '👍',
  size: 'md',
  isText: true,
  isSelected: false,
};

