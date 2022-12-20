import { styled } from '@mui/material/styles';
import { FCWithChildren } from '../../common/types';

import NavBar from '../../ui-components/navbar/NavBar';

const AppWrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const LayoutWrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin-top: ${({ theme }) => theme.navHeight}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-top: ${({ theme }) => theme.navHeight - 10}px;
  }
`;

const DefaultLayout: FCWithChildren = ({ children }) => {
  return (
    <AppWrapper>
      <NavBar />
      <LayoutWrapper>{children}</LayoutWrapper>
    </AppWrapper>
  );
};

export default DefaultLayout;
