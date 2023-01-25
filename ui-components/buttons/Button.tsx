import React from 'react';
import { ButtonProps, Button as MuiButton, styled } from '@mui/material';
import { FCWithChildren } from '../../common/types/types';

const StyledButton = styled(MuiButton)`
  border-radius: 8px;
  padding: 13px 30px;
  background: ${({ theme }) => theme.palette?.gradient.main};
  font-weight: bold;
  letter-spacing: 0.2ch;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    opacity: 0.9;
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
