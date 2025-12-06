import React, { useState } from 'react';
import { ChatMessage } from '../../src/components/ChatMessage';

export default {
  title: 'Chat System/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente de mensagem do chat que suporta múltiplos tipos de conteúdo (texto, imagem, vídeo, arquivo, link, resposta, gravação, digitando).',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['sender', 'recipient'],
      description: 'Tipo de mensagem: sender (remetente) ou recipient (destinatário)',
    },
    messageType: {
      control: { type: 'select' },
      options: ['text', 'reply', 'image', 'video', 'file', 'link', 'recording', 'typing'],
      description: 'Tipo de conteúdo da mensagem',
    },
    status: {
      control: { type: 'select' },
      options: ['sent', 'delivered', 'read', 'failed'],
      description: 'Status da mensagem',
    },
  },
};

export const RecipientTextFill = () => {
  return (
    <div className="w-[400px]">
      <ChatMessage
        type="recipient"
        messageType="text"
        text="Mensagem"
        time="11:25"
        status="read"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const SenderTextFill = () => {
  return (
    <div className="w-[400px]">
      <ChatMessage
        type="sender"
        messageType="text"
        text="Mensagem"
        time="11:25"
        status="read"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const RecipientTextHug = () => {
  return (
    <div className="w-[400px]">
      <ChatMessage
        type="recipient"
        messageType="text"
        text="Oi!"
        time="11:25"
        status="delivered"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const SenderTextHug = () => {
  return (
    <div className="w-[400px]">
      <ChatMessage
        type="sender"
        messageType="text"
        text="Oi!"
        time="11:25"
        status="delivered"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const ReplyMessage = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="reply"
        text="Esta é uma resposta"
        time="11:25"
        status="read"
        replyTo="Mensagem original aqui"
        replyAuthor="Usuário"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="sender"
        messageType="reply"
        text="Resposta do remetente"
        time="11:26"
        status="read"
        replyTo="Outra mensagem"
        replyAuthor="Eu"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const ImageMessage = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="image"
        text="Olha só essa imagem!"
        time="11:25"
        status="read"
        mediaUrl="https://via.placeholder.com/320x240"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="sender"
        messageType="image"
        text="Muito legal!"
        time="11:26"
        status="read"
        mediaUrl="https://via.placeholder.com/320x240"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const VideoMessage = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="video"
        text="Vídeo interessante"
        time="11:25"
        status="read"
        mediaUrl="https://via.placeholder.com/320x240"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const FileMessage = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="file"
        text="Arquivo importante"
        time="11:25"
        status="read"
        fileName="documento.pdf"
        fileUrl="#"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="sender"
        messageType="file"
        fileName="relatorio.xlsx"
        fileUrl="#"
        time="11:26"
        status="delivered"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const LinkMessage = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="link"
        linkUrl="https://example.com"
        linkTitle="Título do Link"
        linkDescription="Descrição do link aqui"
        linkImage="https://via.placeholder.com/320x160"
        time="11:25"
        status="read"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="recipient"
        messageType="link"
        linkUrl="https://example.com"
        linkTitle="Link sem imagem"
        linkDescription="Este link não tem imagem de preview"
        time="11:26"
        status="read"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const RecordingMessage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="recording"
        recordingDuration={125}
        isPlaying={isPlaying}
        time="11:25"
        status="sent"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="sender"
        messageType="recording"
        recordingDuration={45}
        isPlaying={!isPlaying}
        time="11:26"
        status="delivered"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const TypingIndicator = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="recipient"
        messageType="typing"
        status="typing"
        avatar="https://via.placeholder.com/40"
      />
      <ChatMessage
        type="sender"
        messageType="typing"
        status="typing"
        avatar="https://via.placeholder.com/40"
      />
    </div>
  );
};

export const AllStatuses = () => {
  return (
    <div className="w-[400px] space-y-4">
      <ChatMessage
        type="sender"
        messageType="text"
        text="Mensagem enviada"
        time="11:25"
        status="sent"
      />
      <ChatMessage
        type="sender"
        messageType="text"
        text="Mensagem entregue"
        time="11:26"
        status="delivered"
      />
      <ChatMessage
        type="sender"
        messageType="text"
        text="Mensagem lida"
        time="11:27"
        status="read"
      />
      <ChatMessage
        type="sender"
        messageType="text"
        text="Mensagem falhou"
        time="11:28"
        status="failed"
      />
    </div>
  );
};

export const Interactive = (args) => {
  return (
    <div className="w-[400px]">
      <ChatMessage {...args} />
    </div>
  );
};

Interactive.args = {
  type: 'recipient',
  messageType: 'text',
  text: 'Mensagem',
  time: '11:25',
  status: 'read',
  avatar: 'https://via.placeholder.com/40',
};
