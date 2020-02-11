import React, { useRef } from 'react';
import { BubbleChat } from '@gotitinc/design-system';
import { useChatMessagesList, useScrollToBottom } from '../../../utils';
import './styles/ChatMessages.css';

export function ChatMessages() {
  const messages = useChatMessagesList();
  const messageBubbles = messages.map(({ type, avatar, text }) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={text} />
  ));

  const messageWindow = useRef();
  useScrollToBottom(messageWindow);

  return (
    <div className="chat-messages u-paddingRightSmall" ref={messageWindow}>
      {messageBubbles}
    </div>
  );
}
