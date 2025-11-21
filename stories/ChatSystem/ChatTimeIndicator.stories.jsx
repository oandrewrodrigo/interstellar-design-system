import React from 'react';
import { ChatTimeIndicator } from '../../src/components/ChatTimeIndicator';

export default {
  title: 'Chat System/ChatTimeIndicator',
  component: ChatTimeIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Indicador de data/hora separando mensagens no chat.',
      },
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Texto do indicador',
    },
  },
};

export const Today = () => {
  return <ChatTimeIndicator text="Hoje" />;
};

export const Yesterday = () => {
  return <ChatTimeIndicator text="Ontem" />;
};

export const Date = () => {
  return <ChatTimeIndicator text="20 de Nov" />;
};

export const AllIndicators = () => {
  return (
    <div className="space-y-8 w-[600px]">
      <ChatTimeIndicator text="Hoje" />
      <ChatTimeIndicator text="Ontem" />
      <ChatTimeIndicator text="20 de Nov" />
      <ChatTimeIndicator text="15 de Nov" />
    </div>
  );
};

export const Interactive = (args) => {
  return <ChatTimeIndicator {...args} />;
};

Interactive.args = {
  text: 'Hoje',
};

