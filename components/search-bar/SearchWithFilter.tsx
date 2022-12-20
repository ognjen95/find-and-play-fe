import { IconButton, Paper } from '@mui/material';
import React, { FC } from 'react';
import TuneIcon from '@mui/icons-material/TuneOutlined';
import SlideInDialog from '../dialogs/SlideInDialog';
import useToggleDialog from '../../hooks/useToggleDialog';
import Filter from '../filters/Filter';
import Button from '../../ui-components/buttons/Button';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';

const SearchWithFilter: FC = () => {
  const { isOpen, handleClose, handleOpen } = useToggleDialog();

  const ActionBar = () => (
    <div style={{ marginBottom: '.5rem' }}>
      <Button onClick={handleClose}>Filter</Button>
    </div>
  );

  return (
    <>
      {/*SEARCH  */}
      <Search>
        <StyledInputBase
          placeholder="Search for Player..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIconWrapper>
          <Paper elevation={6} sx={{ borderRadius: '30px' }}>
            <IconButton size="large" onClick={handleOpen}>
              <TuneIcon />
            </IconButton>
          </Paper>
        </SearchIconWrapper>
      </Search>

      {/* FILTERS */}
      <SlideInDialog
        handleClose={handleClose}
        isOpen={isOpen}
        title="Filters"
        content={<Filter />}
        actions={<ActionBar />}
      />
    </>
  );
};

export default SearchWithFilter;
