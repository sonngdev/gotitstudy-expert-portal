import React, { useState } from 'react';
import { Button, Modal } from '@gotitinc/design-system';

export function StopWorkingButton() {
	const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const stopWorking = () => window.location.reload();

	return (
		<>
			<Button
				variant="white_outline"
				size="small"
				width="full"
				className="stop-working"
				onClick={showModal}
			>
				<Button.Label>Stop working</Button.Label>
			</Button>

      <Modal show={modalVisible} size="small" onHide={hideModal}>
				<Modal.Header closeButton={true}>
					<Modal.Title>Stop working</Modal.Title>
				</Modal.Header>

				<Modal.Body>Are you sure you want to stop working?</Modal.Body>

				<Modal.Footer className="u-flex">
          <Button variant="secondary" className="cancel" onClick={hideModal}>
            <Button.Label>Cancel</Button.Label>
          </Button>

					<Button variant="primary" className="confirm" onClick={stopWorking}>
            <Button.Label>Stop working</Button.Label>
          </Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
