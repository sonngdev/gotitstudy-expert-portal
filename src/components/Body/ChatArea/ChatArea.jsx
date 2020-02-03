import React from 'react';
import { useSelector } from 'react-redux';
import { BubbleChat } from '@gotitinc/design-system';

export function ChatArea() {
  const messages = useSelector((state) => state.chatMessages);
  const messageBubbles = messages.map(({ type, avatar, text }, i) => (
    <BubbleChat type={type} avatar={avatar} text={text} key={i} />
  ));

  return (
    <>
      {messageBubbles}
    </>
  );
}
