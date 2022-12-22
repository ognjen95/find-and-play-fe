import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import styled from '@mui/material/styles/styled';
import { Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';

export const StyledTextField = styled(TextField)`
  min-width: 400px;
  & .MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  label {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    min-width: 100%;
  }
`;

interface IProps {
  name: string;
  label: string;
  control: any;
  errorMsg?: string;
}

const DateAndTimePicker: React.FC<IProps> = ({
  label,
  name,
  control,
  errorMsg,
}) => {
  return (
    <div style={{ marginTop: '1rem', position: 'relative' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <DateTimePicker
              onChange={(date) => {
                field.onChange(date);
              }}
              value={field.value}
              renderInput={(params) => (
                <StyledTextField
                  sx={{
                    input: {
                      color: 'white',
                    },
                    svg: {
                      color: 'white',
                    },
                  }}
                  {...params}
                  label={label}
                  fullWidth
                />
              )}
            />
          )}
        />
      </LocalizationProvider>

      <FormHelperText sx={{ my: '.5rem' }} error>
        {errorMsg}
      </FormHelperText>
    </div>
  );
};

export default DateAndTimePicker;
