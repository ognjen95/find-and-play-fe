import Avatar from '@mui/material/Avatar/Avatar';
import Paper from '@mui/material/Paper/Paper';
import { styled, alpha } from '@mui/material/styles';

export const Card = styled(Paper)`
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.1)};
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  transition: all ease-in-out 0.2s;
  color: #fafafa;

  h5 {
    font-weight: bold;
  }

  h6 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
  }
  hr {
    margin-top: 0.5rem;
  }
`;

export const HeaderWrapper = styled('div')`
  border-radius: 15px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

export const SAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 2px solid white;
  cursor: pointer;
`;

export const BottomBarWrapper = styled('div')`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  display: flex;
`;

export const DescriptionWrapper = styled('div')`
  margin-top: 0.5rem;
  height: 50px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
