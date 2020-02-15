import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWithModal } from '../../shared';

export function EndSessionButton({ className }) {
  return (
    <ButtonWithModal
      buttonProps={{ className: `end-session ${className}` }}
      buttonAction="End session"
      modalBody="Are you sure you want to end this session? This action cannot be undone."
      onConfirm={() => window.location.reload()}
    />
  );
}

EndSessionButton.propTypes = {
  className: PropTypes.string,
};

EndSessionButton.defaultProps = {
  className: '',
}
