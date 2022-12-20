import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Box from '@mui/material/Box/Box';
import Chip from '@mui/material/Chip/Chip';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import Select from '@mui/material/Select/Select';
import { alpha } from '@mui/material/styles';
import styled from '@mui/material/styles/styled';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';

const StyledOutlinedInput = styled(OutlinedInput)`
  & .MuiOutlinedInput-notchedOutline,
  svg {
    border-color: white;
    color: white;
  }
`;

const MultiSelect: FC<{
  name: string;
  label: string;
  control?: any | undefined;
  data: string[];
  errorMsg?: string;
}> = ({ label, name, control = undefined, data, errorMsg, ...props }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl key="sports" sx={{ mt: 1, width: '100%' }}>
            <InputLabel sx={{ color: 'white' }} id="sports">
              {label}
            </InputLabel>
            <Select
              multiple
              {...props}
              {...field}
              input={<StyledOutlinedInput aria-label='sports'/>}
              renderValue={(selected: string[]) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      sx={{
                        color: 'white',
                        backgroundColor: alpha('#fff', 0.15),
                      }}
                      key={value}
                      label={value}
                    />
                  ))}
                </Box>
              )}
            >
              {data.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      {errorMsg && (
        <FormHelperText sx={{ alignItems: 'left' }} error>
          {errorMsg}
        </FormHelperText>
      )}
    </>
  );
};

export default MultiSelect;
