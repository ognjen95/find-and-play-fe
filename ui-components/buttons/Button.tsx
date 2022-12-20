import React from 'react';
import { ButtonProps, Button as MuiButton, styled } from '@mui/material';
import { FCWithChildren } from '../../common/types';

const StyledButton = styled(MuiButton)`
  border-radius: 50px;
  padding: 15px 40px;
  background: ${({ theme }) => theme.palette?.gradient.main};
  font-weight: bold;
  letter-spacing: 0.2ch;
  &:active {
    transform: scale(0.95);
  }
`;

const Button: FCWithChildren<ButtonProps> = ({
  onClick,
  variant = 'contained',
  children,
  ...props
}) => {
  return (
    <StyledButton
      color="primary"
      size="large"
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
