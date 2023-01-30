import React, { FC } from 'react';
import { Avatar, Box, Paper, styled, Typography } from '@mui/material';
import Button from '../../../ui-components/buttons/Button';
import { IUser } from '../../../common/types/user.types';
import generateFullName from '../../../helpers/generateFullName';
import generateLocation from '../../../helpers/generateLocation';

const SideBarWrapper = styled('div')`
  padding: 1rem;
  color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;

  h6,
  h5 {
    margin: 1rem 0;
  }

  button {
    margin-top: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SAvatar = styled(Avatar)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 2px solid white;
  cursor: pointer;
  &.MuiAvatar-root {
    height: 200px;
    width: 200px;
  }
`;

const StyledPaper = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  padding: 0 1rem 1rem 1rem;
  margin-top: 1rem;
  border-radius: 10px;
`;

interface IProps {
  user: IUser;
}

const UserProfileSidebar: FC<IProps> = ({ user }) => {
  const { id, firstName, lastName, email, location, stamina, reliability } =
    user || {};
  const city = location?.city;
  const state = location?.state;

  return (
    <SideBarWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <SAvatar
          alt={id}
          src={
            id &&
            `https://avatars.dicebear.com/api/avataaars/$user${id}.svg?mood[]=happy`
          }
          sx={{ width: 60, height: 60 }}
        />
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}
      >
        <Button fullWidth size="small">
          Follow
        </Button>
        <Button fullWidth size="small">
          Message
        </Button>
      </Box>
      <StyledPaper elevation={6}>
        <Typography fontWeight="bold" variant="h6">
          {generateFullName(firstName, lastName)}
        </Typography>
        <Typography variant="body1">
          Location:{' '}
          {city && state ? generateLocation(city, state) : 'Somewhere on Earth'}
        </Typography>
        <Typography variant="body1"> Email: {email}</Typography>
        <Typography variant="body1"> Stamina: {stamina}</Typography>
        <Typography variant="body1"> Reliability: {reliability}</Typography>
        <Typography variant="body1"> Played games: 12</Typography>
      </StyledPaper>
    </SideBarWrapper>
  );
};

export default UserProfileSidebar;
