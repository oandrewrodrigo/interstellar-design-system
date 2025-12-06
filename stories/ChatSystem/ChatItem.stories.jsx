import React from 'react';
import { ChatItem } from '../../src/components/ChatItem';

export default {
  title: 'Chat System/ChatItem',
  component: ChatItem,
  parameters: {
    layout: 'fullwidth',
    docs: {
      description: {
        component:
          'Item da lista de conversas/chats com avatar, nome, última mensagem, hora e indicador de não lidas.',
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active'],
      description: 'Estado do item',
    },
    avatarType: {
      control: { type: 'select' },
      options: ['person', 'logo'],
      description: 'Tipo de avatar',
    },
    hasUnread: {
      control: { type: 'boolean' },
      description: 'Tem mensagens não lidas',
    },
    isOnline: {
      control: { type: 'boolean' },
      description: 'Usuário está online (apenas para tipo person)',
    },
  },
};

export const Default = (args) => {
  return (
    <div className="w-[400px]">
      <ChatItem
        {...args}
        name="Andrew Rodrigo"
        lastMessage="Última mensagem do chat"
        time="11:25"
        onClick={() => console.log('Clicou no item')}
      />
    </div>
  );
};

Default.args = {
  name: 'Andrew Rodrigo',
  lastMessage: 'Última mensagem do chat',
  time: '11:25',
  avatar: 'https://via.placeholder.com/48',
  avatarType: 'person',
  state: 'default',
  hasUnread: false,
  isOnline: true,
};

export const States = () => {
  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      <ChatItem
        name="Estado Default"
        lastMessage="Item em estado padrão"
        time="11:25"
        state="default"
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Estado Hover"
        lastMessage="Item em estado hover"
        time="11:26"
        state="hover"
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Estado Active"
        lastMessage="Item em estado ativo (selecionado)"
        time="11:27"
        state="active"
        avatar="https://via.placeholder.com/48"
      />
    </div>
  );
};

export const WithUnread = () => {
  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      <ChatItem
        name="Conversa 1"
        lastMessage="Nova mensagem não lida"
        time="11:25"
        hasUnread={true}
        unreadCount={3}
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Conversa 2"
        lastMessage="Várias mensagens não lidas"
        time="11:20"
        hasUnread={true}
        unreadCount={12}
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Conversa 3"
        lastMessage="Sem mensagens não lidas"
        time="10:15"
        hasUnread={false}
        avatar="https://via.placeholder.com/48"
      />
    </div>
  );
};

export const OnlineStatus = () => {
  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      <ChatItem
        name="Usuário Online"
        lastMessage="Usuário está online"
        time="11:25"
        isOnline={true}
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Usuário Offline"
        lastMessage="Usuário está offline"
        time="10:15"
        isOnline={false}
        avatar="https://via.placeholder.com/48"
      />
    </div>
  );
};

export const PersonVsLogo = () => {
  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      <ChatItem
        name="Chat Pessoal"
        lastMessage="Conversa com pessoa"
        time="11:25"
        avatarType="person"
        isOnline={true}
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Chat de Empresa"
        lastMessage="Conversa com empresa/grupo"
        time="11:20"
        avatarType="logo"
        avatar="https://via.placeholder.com/48"
      />
    </div>
  );
};

export const LongMessages = () => {
  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      <ChatItem
        name="Nome Muito Longo de Usuário que Pode Quebrar a Linha"
        lastMessage="Esta é uma mensagem muito longa que deve ser truncada para não quebrar o layout do componente"
        time="11:25"
        avatar="https://via.placeholder.com/48"
      />
      <ChatItem
        name="Chat Normal"
        lastMessage="Mensagem curta"
        time="11:24"
        avatar="https://via.placeholder.com/48"
      />
    </div>
  );
};

export const FullList = () => {
  const chats = [
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Olá, como você está?',
      time: '11:25',
      isOnline: true,
      hasUnread: true,
      unreadCount: 2,
      state: 'active',
    },
    {
      name: 'Maria Silva',
      lastMessage: 'Vou enviar o documento hoje',
      time: '10:15',
      isOnline: true,
      hasUnread: false,
      state: 'default',
    },
    {
      name: 'João Santos',
      lastMessage: 'Reunião às 15h',
      time: '09:30',
      isOnline: false,
      hasUnread: true,
      unreadCount: 1,
      state: 'default',
    },
    {
      name: 'Suporte Técnico',
      lastMessage: 'Sua solicitação foi resolvida',
      time: 'Ontem',
      isOnline: true,
      hasUnread: false,
      state: 'default',
    },
  ];

  return (
    <div className="w-[400px] space-y-0 border border-gray-20 rounded-md overflow-hidden">
      {chats.map((chat, index) => (
        <ChatItem
          key={index}
          name={chat.name}
          lastMessage={chat.lastMessage}
          time={chat.time}
          isOnline={chat.isOnline}
          hasUnread={chat.hasUnread}
          unreadCount={chat.unreadCount}
          state={chat.state}
          avatar={`https://via.placeholder.com/48?text=${chat.name[0]}`}
          onClick={() => console.log('Clicou em:', chat.name)}
        />
      ))}
    </div>
  );
};
