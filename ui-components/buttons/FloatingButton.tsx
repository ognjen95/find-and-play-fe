import Fab from '@mui/material/Fab/Fab';
import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

interface IProps {
  size?: 'large' | 'medium' | 'small';
  onClick: () => void;
}

const FloatingButton: FC<IProps> = ({ size = 'large', onClick, ...props }) => {
  return (
    <Fab
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: '50px',
        bottom: '50px',
      }}
      aria-label="add"
      size={size}
      {...props}
    >
      <AddIcon fontSize={size} />
    </Fab>
  );
};

export default FloatingButton;
