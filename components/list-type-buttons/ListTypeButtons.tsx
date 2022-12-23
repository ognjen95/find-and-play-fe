import React, { FC } from 'react';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import { listOptions } from '../../pages';

interface IProps {
  handleToggleList: (e: React.MouseEvent) => void;
  selectedList: string;
}
const ListTypeButtons: FC<IProps> = ({ handleToggleList, selectedList }) => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          justifyContent: 'space-evenly',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <Button
          sx={{
            color: 'white',
            borderBottomLeftRadius: '20px',
          }}
          color="secondary"
          fullWidth
          onClick={handleToggleList}
          disabled={selectedList === listOptions.players}
        >
          Players
        </Button>

        {/* <Button color="secondary" fullWidth sx={{ color: 'white' }}>
      Clubs
    </Button> */}

        <Button
          color="secondary"
          sx={{ color: 'white', borderBottomRightRadius: '20px' }}
          fullWidth
          onClick={handleToggleList}
          disabled={selectedList === listOptions.events}
        >
          Events
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ListTypeButtons;
