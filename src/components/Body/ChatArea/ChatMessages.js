import React from 'react';
import { useSelector } from 'react-redux';
import { BubbleChat } from '@gotitinc/design-system';
import { chatMessagesSelector } from '../../../redux/selectors';
import './styles/ChatMessages.css';

export function ChatMessages() {
  const messages = useSelector(chatMessagesSelector);
  const messageBubbles = messages.map(({ type, avatar, text }) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={text} />
  ));

  return (
    <div className="chat-messages">
      {messageBubbles}
    </div>
  );
}
