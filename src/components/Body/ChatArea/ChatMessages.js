import React from 'react';
import { useSelector } from 'react-redux';
import { BubbleChat } from '@gotitinc/design-system';
import { chatMessagesSelector } from '../../../redux/selectors';
import { useScrollToBottom } from '../../../hooks';
import './styles/ChatMessages.css';

export function ChatMessages() {
  const messages = useSelector(chatMessagesSelector);
  const messageBubbles = messages.map(({ type, avatar, text }) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={text} />
  ));

  useScrollToBottom('.chat-messages');

  return (
    <div className="chat-messages">
      {messageBubbles}
    </div>
  );
}
