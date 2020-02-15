/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */

import React, { useState } from 'react';
import { Button, Modal } from '@gotitinc/design-system';
import PropTypes from 'prop-types';

export function ButtonWithModal({
  buttonProps,
  buttonAction,
  modalSize,
  modalTitle,
  modalBody,
  confirmButtonText,
  onConfirm,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const confirmAndClose = () => {
    onConfirm();
    hideModal();
  };

  return (
    <>
      <Button {...buttonProps} onClick={showModal}>
        {buttonAction}
      </Button>

      <Modal size={modalSize} show={modalVisible} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle || buttonAction}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalBody}
        </Modal.Body>

        <Modal.Footer className="u-flex">
          <Button variant="secondary" className="cancel" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="primary" className="confirm" onClick={confirmAndClose}>
            {confirmButtonText || buttonAction}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ButtonWithModal.propTypes = {
  buttonProps: PropTypes.object,
  buttonAction: PropTypes.string,
  modalSize: PropTypes.string,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  confirmButtonText: PropTypes.string,
  onConfirm: PropTypes.func,
};

ButtonWithModal.defaultProps = {
  buttonProps: {},
  buttonAction: 'Action',
  modalSize: 'small',
  modalTitle: '',
  modalBody: 'Are you sure?',
  confirmButtonText: '',
  onConfirm: () => {},
};
