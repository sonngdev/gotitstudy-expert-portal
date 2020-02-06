import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { BubbleChat } from '@gotitinc/design-system';
import { chatMessagesSelector } from '../../../redux/selectors';
import { useScrollToBottom } from '../../../utils';
import './styles/ChatMessages.css';

export function ChatMessages() {
  const messages = useSelector(chatMessagesSelector);
  const messageWindow = useRef();
  const messageBubbles = messages.map(({ type, avatar, text }) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={text} />
  ));

  useScrollToBottom(messageWindow);

  return (
    <div className="chat-messages u-paddingRightSmall" ref={messageWindow}>
      {messageBubbles}
    </div>
  );
}
