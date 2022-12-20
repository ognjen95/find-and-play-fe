import React from 'react';
import SlideInDialog from '../../components/dialogs/SlideInDialog';
import useToggleDialog from '../../hooks/useToggleDialog';
import FloatingButton from '../../ui-components/buttons/FloatingButton';

const Content = () => {
  return <div>new</div>;
};

const CreatePlayer = () => {
  const { isOpen, handleClose, handleOpen } = useToggleDialog();
  
  return (
    <div>
      <FloatingButton onClick={handleOpen} />

      <SlideInDialog
        title="Create Player Dialog"
        isOpen={isOpen}
        handleClose={handleClose}
        content={<Content />}
      />
    </div>
  );
};

export default CreatePlayer;
