import React from 'react';
import { ButtonWithModal } from '../../shared';

export function PreviewButton() {
  return (
    <ButtonWithModal
      buttonProps={{
        className: 'flag-session',
        variant: 'positive',
      }}
      buttonAction="Preview ▶"
      modalSize="medium"
      modalTitle="Explanation preview"
      modalBody="Hello"
      confirmButtonText="Submit"
      onConfirm={() => window.location.reload()}
    />
  );
}
