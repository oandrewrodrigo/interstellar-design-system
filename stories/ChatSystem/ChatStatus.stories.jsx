import React from 'react';
import { ChatStatus } from '../../src/components/ChatStatus';

export default {
  title: 'Chat System/ChatStatus',
  component: ChatStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Indicador de status de mensagem (enviada, entregue, lida, falhou ao enviar).',
      },
    },
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['sent', 'delivered', 'read', 'failed'],
      description: 'Status da mensagem',
    },
  },
};

export const Sent = () => {
  return <ChatStatus status="sent" />;
};

export const Delivered = () => {
  return <ChatStatus status="delivered" />;
};

export const Read = () => {
  return <ChatStatus status="read" />;
};

export const Failed = () => {
  return <ChatStatus status="failed" />;
};

export const AllStatuses = () => {
  return (
    <div className="space-y-4">
      <ChatStatus status="sent" />
      <ChatStatus status="delivered" />
      <ChatStatus status="read" />
      <ChatStatus status="failed" />
    </div>
  );
};

export const Interactive = (args) => {
  return <ChatStatus {...args} />;
};

Interactive.args = {
  status: 'read',
};
