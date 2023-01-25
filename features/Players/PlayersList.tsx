import React, { FC } from 'react';
import { IUser } from '../../common/types/user.types';
import FullScreenDialog from '../../components/dialogs/FullScreenDialog';
import SideBarCard from '../../components/side-bar-cards/SideBarCard';
import { ISelectedData } from '../../pages';
import { SideBarList } from './styled';

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
    <>
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
    </>
  );
};

export default PlayersList;
