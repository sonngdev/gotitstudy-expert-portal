import React from 'react';
import { TinyEditor } from './TinyEditor';
import { ButtonWithModal } from '../../shared';

export function ExplanationPreviewButton() {
  return (
    <ButtonWithModal
      buttonProps={{
        className: 'flag-session',
        variant: 'positive',
      }}
      buttonAction="Preview ▶"
      modalSize="medium"
      modalTitle="Explanation preview"
      modalBody={(
        <TinyEditor
          config={{ toolbar: false, statusbar: false, readonly: true }}
          value="Hello"
        />
      )}
      confirmButtonText="Submit"
      onConfirm={() => window.location.reload()}
    />
  );
}
