import { styled } from '@mui/material';

export const SideBarWrapper = styled('div')`
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SideBarList = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
