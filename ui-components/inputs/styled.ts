import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField/TextField';

export const StyledTextField = styled(TextField)`
  min-width: 400px;

  & .MuiFormLabel-root.MuiInputLabel-root {
    color: white;
  }

  & .MuiInputBase-input.MuiInput-input {
    color: white;
  }

  & .MuiInputBase-root.MuiInput-root:before {
    &:hover {
      border-color: white;
    }
    border-color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    min-width: 100%;
  }
`;