import type { NextPage } from 'next';
import { useState } from 'react';
import { IUser } from '../common/user.types';
import MainPageLayout from '../components/layouts/MainPageLayout';
import MapView from '../components/map/MapView';
import PlayersList from '../features/Players/PlayersList';
import useGetManyUsers from '../graphql/services/hooks/users/queries/useGetManyUsers';

interface IProps {}

export interface ISelectedData {
  data: IUser;
  component: string;
}

const Home: NextPage<IProps> = () => {
  const { data } = useGetManyUsers();
  const [selectedData, setSelectedData] = useState<ISelectedData | null>(null);

  const handleSelectData = (data: ISelectedData) => {
    setSelectedData({ data: data?.data, component: data?.component });
  };

  const handleClearData = () => {
    setSelectedData(null);
  };

  return (
    <MainPageLayout
      sideBar={
        <PlayersList
          users={data}
          selectedData={selectedData}
          setSelected={handleSelectData}
          clearSelected={handleClearData}
        />
      }
      main={
        <MapView
          selectedData={selectedData}
          setSelected={handleSelectData}
          clearSelected={handleClearData}
          data={data}
          borderRadius
        />
      }
    />
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
