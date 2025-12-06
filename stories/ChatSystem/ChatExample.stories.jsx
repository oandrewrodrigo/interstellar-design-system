import React, { useState } from 'react';
import { ChatTopNav } from '../../src/components/ChatTopNav';
import { ChatMessage } from '../../src/components/ChatMessage';
import { ChatTimeIndicator } from '../../src/components/ChatTimeIndicator';
import { ChatInput } from '../../src/components/ChatInput';
import { ChatItem } from '../../src/components/ChatItem';
import { ChatStatus } from '../../src/components/ChatStatus';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';

export default {
  title: 'Chat System/Chat Example',
  component: ChatTopNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Exemplo completo de chat exatamente como no design do Figma, com sidebar de conversas e área de mensagens.',
      },
    },
  },
};

export const FullChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'recipient', // Mensagem que EU recebo = branca
      messageType: 'text',
      text: 'Fala Diegão, tudo bem?',
      time: '11:25',
      status: 'read',
      avatar: 'https://via.placeholder.com/40?text=AR',
    },
    {
      id: 2,
      type: 'sender', // Mensagem que EU envio = azul
      messageType: 'text',
      text: 'Oi Andrew, como você tá?',
      time: '11:25',
      status: 'read',
      avatar: 'https://via.placeholder.com/40?text=AD',
    },
    {
      id: 3,
      type: 'recipient', // Mensagem que EU recebo = branca
      messageType: 'text',
      text: 'Cara, você consegue me ajudar me mandando o vídeo dos Nichos médicos?',
      time: '11:25',
      status: 'read',
      avatar: 'https://via.placeholder.com/40?text=AR',
    },
    {
      id: 4,
      type: 'sender', // Mensagem que EU envio = azul
      messageType: 'video',
      text: '',
      time: '11:25',
      status: 'read',
      mediaUrl: 'https://via.placeholder.com/320x240',
      avatar: 'https://via.placeholder.com/40?text=AD',
    },
  ]);

  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'sender',
      messageType: 'text',
      text,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
      avatar: 'https://via.placeholder.com/40?text=AD',
    };
    setMessages([...messages, newMessage]);
  };

  const chats = [
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Cara, o interstellar é demais,...',
      time: '12:25',
      isOnline: true,
      hasUnread: true,
      unreadCount: 2,
      state: 'active',
      avatar: 'https://via.placeholder.com/48?text=AR',
    },
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Cara, o interstellar é demais,...',
      time: '12:25',
      isOnline: false,
      hasUnread: true,
      unreadCount: 2,
      state: 'default',
      avatar: 'https://via.placeholder.com/48?text=AR',
    },
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Cara, o interstellar é demais,...',
      time: '12:25',
      isOnline: false,
      hasUnread: true,
      unreadCount: 2,
      state: 'default',
      avatar: 'https://via.placeholder.com/48?text=AR',
    },
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Cara, o interstellar é demais,...',
      time: '12:25',
      isOnline: false,
      hasUnread: true,
      unreadCount: 2,
      state: 'default',
      avatar: 'https://via.placeholder.com/48?text=AR',
    },
    {
      name: 'Andrew Rodrigo',
      lastMessage: 'Cara, o interstellar é demais,...',
      time: '12:25',
      isOnline: false,
      hasUnread: true,
      unreadCount: 2,
      state: 'default',
      avatar: 'https://via.placeholder.com/48?text=AR',
    },
  ];

  return (
    <div className="h-screen flex bg-gray-0">
      {/* Sidebar Esquerda - Lista de Chats */}
      <div className="w-[318px] border-r border-gray-20 flex flex-col bg-gray-0">
        {/* Header da Sidebar */}
        <div className="px-3 py-3.5 border-b border-gray-20">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold leading-7 tracking-[-0.2px] text-gray-80">Chat</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-gray-5 rounded transition-colors"
                aria-label="Mais opções"
              >
                <Icon name="MoreHorizontal" size="sm" color="gray-60" />
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-gray-5 rounded transition-colors"
                aria-label="Buscar"
              >
                <Icon name="Search" size="sm" color="gray-60" />
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-gray-5 rounded transition-colors"
                aria-label="Nova conversa"
              >
                <Icon name="PencilSquare" size="sm" color="gray-60" />
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-gray-5 rounded transition-colors"
                aria-label="Dropdown"
              >
                <Icon name="ChevronDown" size="sm" color="gray-60" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-gray-10 rounded-md p-1">
            <button
              type="button"
              className="flex-1 px-4 py-2 rounded-md bg-gray-0 text-sm font-semibold leading-5 tracking-[-0.084px] text-gray-80 transition-colors"
            >
              Mensagens
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 rounded-md text-sm font-semibold leading-5 tracking-[-0.084px] text-gray-60 hover:bg-gray-5 transition-colors"
            >
              Grupos
            </button>
          </div>
        </div>

        {/* Lista de Chats */}
        <div className="flex-1 overflow-y-auto">
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
              avatar={chat.avatar}
              onClick={() => console.log('Clicou em:', chat.name)}
            />
          ))}
        </div>
      </div>

      {/* Área Principal - Chat */}
      <div className="flex-1 flex flex-col bg-gray-0">
        {/* Top Nav */}
        <div className="bg-gray-5 border-b border-gray-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative shrink-0 w-12 h-12">
              <div className="relative rounded-full w-12 h-12 overflow-hidden bg-gray-20">
                <img
                  src="https://via.placeholder.com/48?text=AD"
                  alt="Andreza Rodrigues"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success-50 border-2 border-gray-0 rounded-full" />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <h3 className="text-base font-bold leading-[22px] tracking-[-0.112px] text-gray-80 truncate">
                Andreza Rodrigues
              </h3>
              <p className="text-sm font-medium leading-5 tracking-[-0.084px] text-gray-60 truncate">
                @andrezarodrigues • online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button size="md" color="gray" hierarchy="outlined" rightIcon="Video">
              Video conferência
            </Button>
            <Button size="md" color="brand" hierarchy="primary">
              Ver perfil
            </Button>
            <button
              type="button"
              className="w-12 h-12 rounded-full border border-gray-30 flex items-center justify-center hover:bg-gray-0 transition-colors"
              aria-label="Mais opções"
            >
              <Icon name="MoreVertical" size="md" color="gray-60" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-0">
          {/* Time Indicator */}
          <ChatTimeIndicator text="12 de Fevereiro" />

          {/* Messages */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.type === 'sender'
                    ? 'flex flex-col items-end gap-1'
                    : 'flex flex-col items-start gap-1'
                }
              >
                <ChatMessage
                  type={message.type}
                  messageType={message.messageType}
                  text={message.text}
                  time={message.time}
                  status={message.status}
                  avatar={message.avatar}
                  mediaUrl={message.mediaUrl}
                />
                {/* Status abaixo da mensagem (apenas para mensagens enviadas) */}
                {message.type === 'sender' && (
                  <div className="px-2">
                    <ChatStatus status={message.status} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-6 bg-gray-5 border-t border-gray-30">
          <div className="max-w-2xl mx-auto">
            <ChatInput
              placeholder="Mensagem"
              onSend={handleSend}
              onAttach={() => console.log('Anexar')}
              onRecord={() => console.log('Gravar')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
