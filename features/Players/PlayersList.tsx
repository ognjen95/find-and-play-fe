import React, { FC } from 'react';
import { IUser } from '../../common/user.types';
import FullScreenDialog from '../../components/dialogs/FullScreenDialog';
import SearchWithFilter from '../../components/search-bar/SearchWithFilter';
import SideBarCard from '../../components/side-bar-cards/SideBarCard';
import { ISelectedData } from '../../pages';
import { SideBarList, SideBarWrapper } from './styled';

interface IProps {
  users: IUser[];
  selectedData: ISelectedData | null;
  setSelected: (data: ISelectedData) => void;
  clearSelected: () => void;
}

const PlayersList: FC<IProps> = ({
  users,
  selectedData,
  setSelected,
  clearSelected,
}) => {
  return (
    <SideBarWrapper>
      <SearchWithFilter />
      <SideBarList>
        {users?.map((event) => {
          const handleSetEvent = () => {
            setSelected({ data: event, component: 'playersList' });
          };

          return (
            <SideBarCard key={event.id} data={event} onClick={handleSetEvent} />
          );
        })}
      </SideBarList>

      <FullScreenDialog
        isOpen={!!selectedData}
        handleClose={clearSelected}
        data={selectedData}
      />
    </SideBarWrapper>
  );
};

export default PlayersList;
