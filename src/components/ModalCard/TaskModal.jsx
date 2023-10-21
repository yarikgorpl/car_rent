import React from 'react';
import Modal from 'components/Modal/Modal';
import { ModalCard } from 'components/ModalCard/ModalCard/ModalCard';

export const TaskModal = ({ category, task, onClose, isOpen }) => {
  const closeButtonPosition = { top: '16px', right: '16px' };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeButtonPosition={closeButtonPosition}
    >
      <ModalCard onClose={onClose} category={category} task={task} />
    </Modal>
  );
};
