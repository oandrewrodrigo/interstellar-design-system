import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from './Icon';

/**
 * Componente ChatMessage do Design System Interstellar
 * 
 * @param {string} type - Tipo de mensagem: 'sender' | 'recipient'
 * @param {string} messageType - Tipo de conteúdo: 'text' | 'reply' | 'image' | 'video' | 'file' | 'link' | 'recording' | 'typing'
 * @param {string} text - Texto da mensagem
 * @param {string} time - Hora da mensagem (ex: "11:25")
 * @param {string} status - Status da mensagem: 'sent' | 'delivered' | 'read' | 'failed'
 * @param {string} avatar - URL ou path do avatar
 * @param {string} replyTo - Texto da mensagem respondida (para tipo 'reply')
 * @param {string} replyAuthor - Autor da mensagem respondida (para tipo 'reply')
 * @param {string} mediaUrl - URL da imagem/vídeo (para tipo 'image' ou 'video')
 * @param {string} fileUrl - URL do arquivo (para tipo 'file')
 * @param {string} fileName - Nome do arquivo (para tipo 'file')
 * @param {string} linkUrl - URL do link (para tipo 'link')
 * @param {string} linkTitle - Título do link (para tipo 'link')
 * @param {string} linkDescription - Descrição do link (para tipo 'link')
 * @param {string} linkImage - URL da imagem do link (para tipo 'link')
 * @param {number} recordingDuration - Duração da gravação em segundos (para tipo 'recording')
 * @param {boolean} isPlaying - Se a gravação está tocando (para tipo 'recording')
 * @param {string} className - Classes CSS adicionais
 * @param {object} props - Outras props do elemento
 */
export const ChatMessage = ({
  type = 'recipient',
  messageType = 'text',
  text = 'Mensagem',
  time,
  status = 'sent',
  avatar,
  replyTo,
  replyAuthor,
  mediaUrl,
  fileUrl: _fileUrl, // Renomeado para indicar que não é usado diretamente
  fileName,
  linkUrl,
  linkTitle,
  linkDescription,
  linkImage,
  recordingDuration,
  isPlaying = false,
  className = '',
  ...props
}) => {
  // Gerar hora padrão se não fornecida
  const displayTime = useMemo(() => {
    if (time) return time;
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  }, [time]);

  // Determinar ícone de status
  const statusIcon = useMemo(() => {
    if (status === 'failed') return 'X';
    if (status === 'read') return 'CheckCheck2';
    if (status === 'delivered') return 'CheckCheck2';
    return 'Check';
  }, [status]);

  // Cor do status
  // Sender (que EU envio) mostra status, Recipient (que EU recebo) também mostra status mas com cor diferente
  const statusColor = useMemo(() => {
    if (status === 'failed') return 'destructive-60';
    if (status === 'read') return type === 'sender' ? 'brand-30' : 'brand-60';
    if (status === 'delivered') return type === 'sender' ? 'brand-30' : 'gray-60';
    return type === 'sender' ? 'brand-30' : 'gray-60';
  }, [status, type]);

  // Classes base da mensagem
  // Sender (que EU envio) = avatar à DIREITA | Recipient (que EU recebo) = avatar à ESQUERDA
  const messageClasses = useMemo(() => {
    const isSender = type === 'sender';
    const baseClasses = 'flex gap-2 items-start';
    return `${baseClasses} ${isSender ? 'flex-row-reverse' : 'flex-row'} ${className}`.trim().replace(/\s+/g, ' ');
  }, [type, className]);

  // Classes do balão de mensagem
  // Sender (que EU envio) = AZUL, Recipient (que EU recebo) = BRANCO
  const bubbleClasses = useMemo(() => {
    const isSender = type === 'sender';
    if (isSender) {
      return 'bg-brand-60 rounded-xs flex-1 min-w-0';
    }
    return 'bg-gray-0 border border-gray-30 rounded-xs flex-1 min-w-0';
  }, [type]);

  // Classes de texto
  const textClasses = useMemo(() => {
    const isSender = type === 'sender';
    return isSender 
      ? 'text-sm font-medium leading-5 tracking-[-0.084px] text-gray-0'
      : 'text-sm font-medium leading-5 tracking-[-0.084px] text-gray-80';
  }, [type]);

  // Classes do tempo e status
  const timeStatusClasses = useMemo(() => {
    const isSender = type === 'sender';
    return isSender
      ? 'text-xs font-medium leading-4 tracking-[-0.06px] text-brand-30'
      : 'text-xs font-medium leading-4 tracking-[-0.06px] text-gray-60';
  }, [type]);

  // Renderizar avatar
  const renderAvatar = () => {
    if (!avatar) return null;
    
    return (
      <div className="relative rounded-full shrink-0 w-10 h-10 overflow-hidden bg-gray-20">
        {typeof avatar === 'string' ? (
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        ) : (
          avatar
        )}
      </div>
    );
  };

  // Renderizar status
  const renderStatus = () => {
    if (messageType === 'typing' || messageType === 'recording') return null;
    
    return (
      <div className="flex items-center gap-1 shrink-0">
        <span className={timeStatusClasses}>{displayTime}</span>
        {status !== 'typing' && (
          <Icon name={statusIcon} size="2xs" color={statusColor} />
        )}
      </div>
    );
  };

  // Renderizar conteúdo da mensagem baseado no tipo
  const renderContent = () => {
    switch (messageType) {
      case 'reply':
        return (
          <div className="flex flex-col gap-1 p-3">
            {/* Reply header */}
            <div className={`${type === 'sender' ? 'border-l-2 border-gray-0' : 'border-l-2 border-gray-40'} pl-2`}>
              <p className={`text-xs font-medium ${type === 'sender' ? 'text-gray-0' : 'text-gray-60'}`}>
                {replyAuthor || 'Usuário'}
              </p>
              <p className={`text-xs font-normal ${type === 'sender' ? 'text-gray-10' : 'text-gray-50'} line-clamp-1`}>
                {replyTo || 'Mensagem respondida'}
              </p>
            </div>
            {/* Message text */}
            <p className={textClasses}>{text}</p>
            {renderStatus()}
          </div>
        );

      case 'image':
      case 'video':
        return (
          <div className="flex flex-col gap-1">
            <div className="relative rounded-xs overflow-hidden bg-gray-20">
              {mediaUrl ? (
                <img 
                  src={mediaUrl} 
                  alt="" 
                  className="w-full h-auto max-h-60 object-cover"
                />
              ) : (
                <div className="w-full h-60 bg-gray-20 flex items-center justify-center">
                  <Icon name={messageType === 'video' ? 'Video' : 'Image'} size="md" color="gray-50" />
                </div>
              )}
              {messageType === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <Icon name="PlayCircle" size="lg" color="gray-0" />
                </div>
              )}
            </div>
            {text && (
              <div className="px-3 pb-3">
                <p className={textClasses}>{text}</p>
              </div>
            )}
            <div className="px-3 pb-3">
              {renderStatus()}
            </div>
          </div>
        );

      case 'file':
        return (
          <div className="flex flex-col gap-2 p-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-md flex items-center justify-center ${type === 'sender' ? 'bg-brand-50' : 'bg-gray-10'}`}>
                <Icon name="File" size="sm" color={type === 'sender' ? 'gray-0' : 'gray-60'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={textClasses}>{fileName || 'Arquivo.pdf'}</p>
                <p className={`text-xs font-normal ${type === 'sender' ? 'text-gray-10' : 'text-gray-50'}`}>
                  2.5 MB
                </p>
              </div>
              <Icon name="Download" size="sm" color={type === 'sender' ? 'gray-0' : 'gray-60'} />
            </div>
            {text && <p className={textClasses}>{text}</p>}
            {renderStatus()}
          </div>
        );

      case 'link':
        return (
          <div className="flex flex-col gap-0">
            {linkImage && (
              <div className="relative w-full h-40 overflow-hidden bg-gray-20 rounded-t-xs">
                <img src={linkImage} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-3 flex flex-col gap-1">
              <a 
                href={linkUrl || '#'} 
                className={`${textClasses} font-bold hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkTitle || 'Título do Link'}
              </a>
              {linkDescription && (
                <p className={`text-xs font-normal ${type === 'sender' ? 'text-gray-10' : 'text-gray-50'} line-clamp-2`}>
                  {linkDescription}
                </p>
              )}
              {text && <p className={textClasses}>{text}</p>}
              {renderStatus()}
            </div>
          </div>
        );

      case 'recording':
        return (
          <div className="flex items-center gap-3 p-3">
            <button 
              type="button"
              className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'sender' ? 'bg-brand-50' : 'bg-gray-10'}`}
            >
              <Icon 
                name={isPlaying ? 'PauseCircle' : 'PlayCircle'} 
                size="sm" 
                color={type === 'sender' ? 'gray-0' : 'gray-60'} 
              />
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full ${type === 'sender' ? 'bg-brand-50' : 'bg-gray-30'}`}>
                  <div 
                    className={`h-full rounded-full ${type === 'sender' ? 'bg-gray-0' : 'bg-brand-60'}`}
                    style={{ width: isPlaying ? '60%' : '0%' }}
                  />
                </div>
                <span className={timeStatusClasses}>
                  {recordingDuration !== undefined 
                    ? `${Math.floor(recordingDuration / 60)}:${(recordingDuration % 60).toString().padStart(2, '0')}`
                    : '0:00'
                  }
                </span>
              </div>
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="p-3 flex items-center gap-1">
            <div className="flex gap-1">
              <div className={`w-2 h-2 rounded-full ${type === 'sender' ? 'bg-gray-0' : 'bg-gray-60'} animate-bounce`} style={{ animationDelay: '0ms' }} />
              <div className={`w-2 h-2 rounded-full ${type === 'sender' ? 'bg-gray-0' : 'bg-gray-60'} animate-bounce`} style={{ animationDelay: '150ms' }} />
              <div className={`w-2 h-2 rounded-full ${type === 'sender' ? 'bg-gray-0' : 'bg-gray-60'} animate-bounce`} style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        );

      default: // 'text'
        return (
          <div className="flex flex-col gap-1 p-3">
            <p className={textClasses}>{text}</p>
            {renderStatus()}
          </div>
        );
    }
  };

  return (
    <div className={messageClasses} {...props}>
      {renderAvatar()}
      <div className={bubbleClasses}>
        {renderContent()}
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  type: PropTypes.oneOf(['sender', 'recipient']),
  messageType: PropTypes.oneOf(['text', 'reply', 'image', 'video', 'file', 'link', 'recording', 'typing']),
  text: PropTypes.string,
  time: PropTypes.string,
  status: PropTypes.oneOf(['sent', 'delivered', 'read', 'failed', 'typing']),
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  replyTo: PropTypes.string,
  replyAuthor: PropTypes.string,
  mediaUrl: PropTypes.string,
  fileUrl: PropTypes.string,
  fileName: PropTypes.string,
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  linkDescription: PropTypes.string,
  linkImage: PropTypes.string,
  recordingDuration: PropTypes.number,
  isPlaying: PropTypes.bool,
  className: PropTypes.string,
};

ChatMessage.defaultProps = {
  type: 'recipient',
  messageType: 'text',
  text: 'Mensagem',
  status: 'sent',
  isPlaying: false,
  className: '',
};

export default ChatMessage;

