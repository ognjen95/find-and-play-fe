import { useState } from 'react';

interface IReturn {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const useToggleDialog = (): IReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
};

export default useToggleDialog;
