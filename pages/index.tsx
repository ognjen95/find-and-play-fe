import { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { IUser } from '../common/types/user.types';
import MainPageLayout from '../components/layouts/MainPageLayout';
import MapView from '../components/map/MapView';
import PlayersList from '../features/Players/PlayersList';
import { SideBarWrapper } from '../features/Players/styled';
import useGetManyEventsQuery from '../graphql/services/hooks/events/queries/useGetManyEvents';
import useGetManyUsers from '../graphql/services/hooks/users/queries/useGetManyUsers';
import { IEvent } from '../common/types/events';
import SearchAndFilterFeature from '../features/search-and-filter/SearchAndFilterFeature';
import ListTypeButtons from '../components/list-type-buttons/ListTypeButtons';
import { ISearchAndFilterModel } from '../features/search-and-filter/useSearchAndFilter';

interface IProps {}

export interface ISelectedData {
  data: IUser | IEvent;
  component: string;
}

export enum listOptions {
  players = 'players',
  events = 'events',
}

const Home: NextPage<IProps> = () => {
  const [selectedList, setList] = useState(listOptions.players);
  const [selectedData, setSelectedData] = useState<ISelectedData | null>(null);

  const { data: userData, refetch: refetchUserData } = useGetManyUsers({
    skip: selectedList !== listOptions.players,
  });

  const { data: eventData, refetch: refetchEventData } = useGetManyEventsQuery({
    skip: selectedList !== listOptions.events,
  });

  const list = selectedList === listOptions.players ? userData : eventData;

  const handleSelectData = (data: ISelectedData) => {
    setSelectedData({ data: data?.data, component: data?.component });
  };

  const handleClearData = () => {
    setSelectedData(null);
  };

  const handleToggleList = (e: React.MouseEvent) => {
    setList(
      (e.target as HTMLButtonElement).innerText.toLowerCase() as listOptions
    );
  };

  const refetchData = (options: ISearchAndFilterModel) => {
    if (selectedList === listOptions.players) {
      refetchUserData({ QueryOptionsInput: options });
    } else {
      refetchEventData({ QueryOptionsInput: options });
    }
  };

  return (
    <MainPageLayout
      sideBar={
        <SideBarWrapper>
          <ListTypeButtons
            handleToggleList={handleToggleList}
            selectedList={selectedList}
          />

          <SearchAndFilterFeature
            fetchData={refetchData}
            placeholder={`Search for ${selectedList.toUpperCase()} ...`}
          />

          <PlayersList
            users={list}
            selectedData={selectedData}
            setSelected={handleSelectData}
            clearSelected={handleClearData}
          />
        </SideBarWrapper>
      }
      main={
        <MapView
          selectedData={selectedData}
          setSelected={handleSelectData}
          clearSelected={handleClearData}
          data={list}
          borderRadius
        />
      }
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
