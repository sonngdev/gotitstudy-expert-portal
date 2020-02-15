import React, { useState } from 'react';
import { Button, Modal } from '@gotitinc/design-system';

export function EndSessionButton() {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const endSession = () => window.location.reload();

  return (
    <>
      <Button className="end-session" onClick={showModal}>End session</Button>

      <Modal size="small" show={modalVisible}>
        <Modal.Header closeButton>
          <Modal.Title>Stop working</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to end this session? This action cannot be undone.
        </Modal.Body>

        <Modal.Footer className="u-flex">
          <Button variant="secondary" className="cancel" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="primary" className="confirm" onClick={endSession}>
            Stop working
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
