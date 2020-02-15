import React from 'react';
import { ButtonWithModal } from '../../shared';

export function FlagSessionButton() {
  return (
    <ButtonWithModal
      buttonProps={{
        className: 'flag-session',
        variant: 'negative',
      }}
      buttonAction="Flag session"
      modalBody="You are flagging this chat session as inappropriate. Your student will be notified and this session will be terminated! Do you want to continue?"
      onConfirm={() => window.location.reload()}
    />
  );
}
