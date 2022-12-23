import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import MainPageLayout from '../../components/layouts/MainPageLayout';
import ProfileMain from '../../components/profile/main/ProfileMain';
import UserProfileSidebar from '../../components/profile/sidebar/UserProfileSidebar';
import useGetUserByIdQuery from '../../graphql/services/hooks/users/queries/useGetUserById';

const UserPage = () => {
  const {
    query: { userId },
  } = useRouter();

  const { data } = useGetUserByIdQuery(userId as string);
  console.log(userId);

  return (
    <MainPageLayout
      sideBarWidth={400}
      sideBar={<UserProfileSidebar user={data} />}
      main={<ProfileMain />}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default UserPage;
