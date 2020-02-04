import React from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

export function ChatArea() {
  return (
    <div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
