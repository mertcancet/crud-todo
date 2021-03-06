import React, { useState } from 'react';
import Modal from './Modal';

function Edit({ todo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    console.log('tık');
  };
  return (
    <>
      <button className='btn btn-primary' onClick={() => setIsModalOpen(true)}>
        Edit
      </button>

      <Modal open={isModalOpen} onClose={() => closeModal()} todo={todo} />
    </>
  );
}

export default Edit;
