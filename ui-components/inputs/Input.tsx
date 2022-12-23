import { TextFieldProps } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { StyledTextField } from './styled';

interface IProps {
  name: string;
  label: string;
  type?: string;
  control?: any;
  required?: boolean;
  errorMsg?: string;
}
const ControlledInput: FC<IProps & TextFieldProps> = ({
  label,
  type,
  name,
  required = false,
  control = undefined,
  errorMsg,
  ...props
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <StyledTextField
              label={label}
              variant="standard"
              {...props}
              {...field}
            />

            <FormHelperText error>{errorMsg}</FormHelperText>
          </>
        )}
      />
    </>
  );
};

export const Input: FC<Omit<IProps, 'control' & 'name'> & TextFieldProps> = ({
  label,
  errorMsg,
  inputRef,
  ...props
}) => {
  return (
    <>
      <StyledTextField label={label} variant="standard" {...props} />

      {<FormHelperText error>{errorMsg}</FormHelperText>}
    </>
  );
};

export default ControlledInput;
