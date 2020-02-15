import React from 'react';
import { ButtonWithModal } from '../shared';

export function StopWorkingButton() {
  return (
    <ButtonWithModal
      buttonProps={{
        variant: 'white_outline',
        size: 'small',
        width: 'full',
        className: 'stop-working',
      }}
      buttonAction="Stop working"
      modalBody="Are you sure you want to stop working?"
      onConfirm={() => window.location.reload()}
    />
  );
}
