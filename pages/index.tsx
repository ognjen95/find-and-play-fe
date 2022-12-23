import type { GetStaticProps, NextPage } from 'next';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';
import { useState } from 'react';
import { IUser } from '../common/user.types';
import MainPageLayout from '../components/layouts/MainPageLayout';
import MapView from '../components/map/MapView';
import SearchWithFilter from '../components/search-bar/SearchWithFilter';
import PlayersList from '../features/Players/PlayersList';
import { SideBarWrapper } from '../features/Players/styled';
import useGetManyEventsQuery from '../graphql/services/hooks/events/queries/useGetManyEvents';
import useGetManyUsers from '../graphql/services/hooks/users/queries/useGetManyUsers';
import { IEvent } from '../types/events';

interface IProps {}

export interface ISelectedData {
  data: IUser | IEvent;
  component: string;
}

enum listOptions {
  players = 'players',
  events = 'events',
}

const Home: NextPage<IProps> = () => {
  const [selectedList, setList] = useState(listOptions.players);
  const [selectedData, setSelectedData] = useState<ISelectedData | null>(null);

  const { data: userData } = useGetManyUsers({
    skip: selectedList !== listOptions.players,
  });
  const { data: eventData } = useGetManyEventsQuery({
    skip: selectedList !== listOptions.events,
  });

  const handleSelectData = (data: ISelectedData) => {
    setSelectedData({ data: data?.data, component: data?.component });
  };

  const handleClearData = () => {
    setSelectedData(null);
  };

  const list = selectedList === 'players' ? userData : eventData;

  const handleToggleList = (e: React.MouseEvent) => {
    setList(
      (e.target as HTMLButtonElement).innerText.toLowerCase() as listOptions
    );
  };

  return (
    <MainPageLayout
      sideBar={
        <SideBarWrapper>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              justifyContent: 'space-evenly',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}
          >
            <Button
              sx={{ color: 'white', borderBottomLeftRadius: '20px' }}
              color="secondary"
              fullWidth
              onClick={handleToggleList}
              disabled={selectedList === listOptions.players}
            >
              Players
            </Button>

            {/* <Button color="secondary" fullWidth sx={{ color: 'white' }}>
              Clubs
            </Button> */}

            <Button
              color="secondary"
              sx={{ color: 'white', borderBottomRightRadius: '20px' }}
              fullWidth
              onClick={handleToggleList}
              disabled={selectedList === listOptions.events}
            >
              Events
            </Button>
          </ButtonGroup>

          <SearchWithFilter
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
