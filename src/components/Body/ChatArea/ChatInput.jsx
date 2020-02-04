import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { chatMessagesAdd } from '../../../redux/actions/chatMessages';
import { Button, Form } from '@gotitinc/design-system';

export function ChatInput() {
  const [ input, setInput ] = useState('');
  const dispatch = useDispatch();
  const bindInput = (e) => setInput(e.target.value);
  const sendMessage = (e) => {
    e.preventDefault();
    const msg = { type: 'sender', avatar: 'expert', text: input };
    const action = chatMessagesAdd(msg);
    dispatch(action);
    setInput('');
  }

  return (
    <Form onSubmit={sendMessage}>
      <Form.InputGroup>
        <Form.Input placeholder="Message..."
          name="message"
          autocomplete="off"
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
