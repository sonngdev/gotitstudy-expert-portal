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
          config={{ toolbar: false, statusbar: false, readonly: false }}
          value={(
            `<h4>Theory or Concept</h4>
            ${explanations[0]}
            <br />
            <h4>Step By Step Instructions</h4>
            ${explanations[1]}
            <br />
            <h4>Final Answer</h4>
            ${explanations[2]}`
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
