import { Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';
import React from 'react';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
  h4 {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const ProfileMain = () => {
  return (
    <Wrapper>
      <Typography variant="h4">
        You have no achievements yet, play your first game!
      </Typography>
    </Wrapper>
  );
};

export default ProfileMain;
