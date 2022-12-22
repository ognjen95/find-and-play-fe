import React, { FC } from 'react';
import SlideInDialog from '../../components/dialogs/SlideInDialog';
import FloatingButton from '../../ui-components/buttons/FloatingButton';
import CreateEventForm from './CreateEventForm';
import useCreateEventForm from './useCreateEventForm';

const CreatePlayer: FC = () => {
  const { form, onSubmit, dialog, loading, error } = useCreateEventForm();
  const { isOpen, handleClose, handleOpen } = dialog || {};

  return (
    <>
      <SlideInDialog
        title="Create Event"
        open={isOpen}
        handleClose={handleClose}
        content={
          <CreateEventForm
            form={form}
            loading={loading}
            error={error}
            onSubmit={onSubmit}
          />
        }
      />

      <FloatingButton onClick={handleOpen} />
    </>
  );
};

export default CreatePlayer;
