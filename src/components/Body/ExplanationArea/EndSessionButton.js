import React from 'react';
import { ButtonWithModal } from '../../shared';

export function EndSessionButton() {
  return (
    <ButtonWithModal
      buttonProps={{ className: 'end-session' }}
      buttonAction="End session"
      modalBody="Are you sure you want to end this session? This action cannot be undone."
      onConfirm={() => window.location.reload()}
    />
  );
}
