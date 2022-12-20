import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import React, { FC } from 'react';
import { alpha } from '@mui/material/styles';
import { IUser } from '../../common/user.types';
import Typography from '@mui/material/Typography/Typography';
import generateFullName from '../../helpers/generateFullName';
import { SAvatar } from '../side-bar-cards/styled';

const Card = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px;
  padding: 1rem;
  margin-bottom: 1rem;
  z-index: 1;
  position: sticky;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all ease-in-out 0.2s;
  color: #fafafa;

  span {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.1)};
  }
`;

interface IProps {
  markerData: IUser;
  lng: number;
  lat: number;
  setUser: () => void;
  selectedId?: string;
}
const Marker: FC<IProps> = ({ markerData, lng, lat, selectedId, setUser }) => {
  if (!lng && !lat) return null;

  const { id, lastName, email, firstName, location } = markerData || {};

  if (id === selectedId) {
    return (
      <Card>
        <span>
          <Typography>
            {generateFullName(firstName ?? '', lastName ?? '')}
          </Typography>
          <Typography>{email}</Typography>
          <Typography>{location?.lat}</Typography>
          <Typography>{location?.lng}</Typography>
          <Typography>{location?.city}</Typography>
          <Typography>{location?.state}</Typography>
        </span>
      </Card>
    );
  } else {
    return (
      <SAvatar
        id={id}
        onClick={setUser}
        sizes="small"
        sx={{
          height: '25px',
          width: '25px',
          zIndex: 0,
        }}
        src={
          id &&
          `https://avatars.dicebear.com/api/avataaars/$user${id}.svg?mood[]=happy`
        }
      />
    );
  }
};

export default Marker;
