import React, { FC } from 'react';
import TuneIcon from '@mui/icons-material/TuneOutlined';
import SlideInDialog from '../dialogs/SlideInDialog';
import useToggleDialog from '../../hooks/useToggleDialog';
import Filter from '../filters/Filter';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import Paper from '@mui/material/Paper/Paper';
import IconButton from '@mui/material/IconButton/IconButton';
import MuiButton from '@mui/material/Button/Button';
import Button from '../../ui-components/buttons/Button';

interface IProps {
  placeholder: string;
}
const SearchWithFilter: FC<IProps> = ({ placeholder }) => {
  const { isOpen, handleClose, handleOpen } = useToggleDialog();

  const ActionBar = () => (
    <div style={{ marginBottom: '.5rem' }}>
      <MuiButton
        sx={{ color: 'white', marginRight: '.5rem' }}
        onClick={handleClose}
      >
        Clear Filters
      </MuiButton>
      <Button onClick={handleClose}>Filter</Button>
    </div>
  );

  return (
    <>
      {/*SEARCH  */}
      <Search elevation={12}>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
        />
        <SearchIconWrapper>
          <Paper elevation={5} sx={{ borderRadius: '30px' }}>
            <IconButton size="large" onClick={handleOpen}>
              <TuneIcon />
            </IconButton>
          </Paper>
        </SearchIconWrapper>
      </Search>

      {/* FILTERS */}
      <SlideInDialog
        handleClose={handleClose}
        open={isOpen}
        title="Filters"
        content={<Filter />}
        actions={<ActionBar />}
      />
    </>
  );
};

export default SearchWithFilter;
