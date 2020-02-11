import React, { useState } from 'react';
import { Button, Form } from '@gotitinc/design-system';
import { useChatMessagesAdd } from '../../../utils';

export function ChatInput() {
  const [input, setInput] = useState('');
  const addMessage = useChatMessagesAdd();

  const bindInput = (e) => setInput(e.target.value);
  const sendMessage = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const message = { type: 'sender', avatar: 'expert', text: trimmedInput };
    addMessage(message);
    setInput('');
  };

  return (
    <Form onSubmit={sendMessage} className="u-paddingRightSmall">
      <Form.InputGroup>
        <Form.Input
          placeholder="Message..."
          name="message"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={bindInput}
        />
        <Form.InputGroup.Append className="u-flex">
          <Button>
            <Button.Label>Send</Button.Label>
          </Button>
        </Form.InputGroup.Append>
      </Form.InputGroup>
    </Form>
  );
}
