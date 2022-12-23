import React, { FC, useCallback } from 'react';
import TuneIcon from '@mui/icons-material/TuneOutlined';
import SlideInDialog from '../../components/dialogs/SlideInDialog';
import useToggleDialog from '../../hooks/useToggleDialog';
import Filters from '../../components/filters/Filter';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import Paper from '@mui/material/Paper/Paper';
import IconButton from '@mui/material/IconButton/IconButton';
import MuiButton from '@mui/material/Button/Button';
import Button from '../../ui-components/buttons/Button';
import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form';
import Form from '../../components/form/Form';
import { ISearchAndFilterModel } from './SearchAndFilterFeature';

interface IProps {
  placeholder: string;
  form: UseFormReturn<ISearchAndFilterModel>;
  onSubmit: SubmitHandler<ISearchAndFilterModel>;
}

const SearchWithFilterForm: FC<IProps> = ({ placeholder, form, onSubmit }) => {
  const { isOpen, handleClose, handleOpen } = useToggleDialog();

  const ActionBar = useCallback(
    () => (
      <div style={{ marginBottom: '.5rem' }}>
        <MuiButton
          sx={{ color: 'white', marginRight: '.5rem' }}
          onClick={handleClose}
        >
          Clear Filters
        </MuiButton>
        <Button type="submit">Filter</Button>
      </div>
    ),
    [handleClose]
  );

  return (
    <Form<ISearchAndFilterModel> form={form} onSubmit={onSubmit}>
      {({ control }) => (
        <>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <>
                <Search elevation={8}>
                  <StyledInputBase
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'search' }}
                    {...field}
                  />
                  <SearchIconWrapper>
                    <Paper elevation={5} sx={{ borderRadius: '30px' }}>
                      <IconButton size="large" onClick={handleOpen}>
                        <TuneIcon />
                      </IconButton>
                    </Paper>
                  </SearchIconWrapper>
                </Search>
              </>
            )}
          />
          <SlideInDialog
            handleClose={handleClose}
            open={isOpen}
            title="Filters"
            content={<Filters form={form} onSubmit={onSubmit} />}
            actions={<ActionBar />}
          />
        </>
      )}
    </Form>
  );
};

export default SearchWithFilterForm;
