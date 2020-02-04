import React from 'react';
import { useSelector } from 'react-redux';
import { BubbleChat } from '@gotitinc/design-system';
import './styles/ChatMessages.css';

export function ChatMessages() {
  const messages = useSelector((state) => state.chatMessages);
  const messageBubbles = messages.map(({ type, avatar, text }, i) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={i} />
  ));

  return (
    <div className="chat-messages">
      {messageBubbles}
    </div>
  );
}
