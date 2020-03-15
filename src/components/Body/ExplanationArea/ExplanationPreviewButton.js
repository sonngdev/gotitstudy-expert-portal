import React from 'react';
import PropTypes from 'prop-types';
import { TinyEditor } from './TinyEditor';
import { ButtonWithModal } from '../../shared';

export function ExplanationPreviewButton({ explanations }) {
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
          value={(
            `<strong>Theory or Concept</strong>${explanations[0]}`
            + `<strong>Step By Step Instructions</strong>${explanations[1]}`
            + `<strong>Final Answer</strong>${explanations[2]}`
          )}
        />
      )}
      confirmButtonText="Submit"
      onConfirm={() => window.location.reload()}
    />
  );
}

ExplanationPreviewButton.propTypes = {
  explanations: PropTypes.arrayOf(PropTypes.string),
};

ExplanationPreviewButton.defaultProps = {
  explanations: ['', '', ''],
};
