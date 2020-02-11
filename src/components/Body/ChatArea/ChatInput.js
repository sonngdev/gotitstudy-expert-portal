import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from '@gotitinc/design-system';
import { chatMessagesAdd } from '../../../redux/actions';

export function ChatInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const bindInput = (e) => setInput(e.target.value);
  const sendMessage = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const msg = { type: 'sender', avatar: 'expert', text: trimmedInput };
    const action = chatMessagesAdd(msg);
    dispatch(action);
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
