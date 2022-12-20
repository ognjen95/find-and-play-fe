import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { FCWithChildren } from '../../common/types';
import DefaultLayout from './DefaultLayout';
import CreatePlayer from '../../features/Players/CreatePlayer';

const LayoutWrapper = styled('div')`
  display: flex;
  overflow: hidden;
  height: calc(100vh - ${({ theme }) => theme.navHeight}px);

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    height: calc(100vh - ${({ theme }) => theme.navHeight - 10}px);
  }
`;

interface ISidebarProps {
  sideBarWidth: number;
}
const SideBarWrapper = styled('div')<ISidebarProps>`
  display: flex;
  transition: 0.1s all ease-in-out;
  width: ${({ sideBarWidth }) => sideBarWidth}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const MainWrapper = styled('div')`
  display: flex;
  flex: 1;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;

interface IProps {
  sideBar: ReactNode;
  main: ReactNode;
  sideBarWidth?: number;
}

const MainPageLayout: FCWithChildren<IProps> = ({
  sideBar,
  main,
  sideBarWidth = 520,
}) => {
  return (
    <>
      <DefaultLayout>
        <LayoutWrapper>
          <SideBarWrapper sideBarWidth={sideBarWidth}>{sideBar}</SideBarWrapper>

          <MainWrapper>{main}</MainWrapper>
        </LayoutWrapper>
      </DefaultLayout>

      <CreatePlayer />
    </>
  );
};

export default MainPageLayout;
