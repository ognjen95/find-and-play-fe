import React from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { styled } from '@mui/material/styles';
import RegisterUserFeature from '../features/authentication/register-user/RegisterUserFeature';

const PageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: ${({ theme }) => `calc(100vh - ${theme.navHeight - 10}px)`};
  color: white;
`;

const AuthenticationPage = () => {
  return (
    <DefaultLayout>
      <PageWrapper>
        <RegisterUserFeature />
      </PageWrapper>
    </DefaultLayout>
  );
};

export default AuthenticationPage;
