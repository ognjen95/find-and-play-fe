import { FC, forwardRef, ReactElement, Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider, { dividerClasses } from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '../../ui-components/buttons/Button';
import MapView from '../map/MapView';
import generateLocation from '../../helpers/generateLocation';
import generateFullName from '../../helpers/generateFullName';
import { styled } from '@mui/material/styles';
import { ISelectedData } from '../../pages';
import { IEvent } from '../../common/types';
import { IUser } from '../../common/types/user.types';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { SAvatar } from '../side-bar-cards/styled';
import { useRouter } from 'next/router';
import AvatarGroup from '@mui/material/AvatarGroup/AvatarGroup';
import { balls } from '../side-bar-cards/SideBarCard';
import { formatDateAndTime } from '../../helpers/formatDateAndTime';
import SendIcon from '@mui/icons-material/Send';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  height: '100px';
  padding: 1rem;
  align-items: center;
`;

const StyledDialogActions = styled(DialogActions)`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: '100px';
  padding: 1rem 1.5rem;
`;

const StyledDialogContent = styled(DialogContent)`
  &.MuiDialogContent-root {
    background-color: ${({ theme }) => theme.palette.primary.main};
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const StyledList = styled(List)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 20px;
  margin: 1rem 0 0 0;
  padding-bottom: 0;
  overflow: hidden;

  p,
  span {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProp {
  isOpen: boolean;
  data: ISelectedData | null;
  handleClose: () => void;
}

const FullScreenDialog: FC<IProp> = ({ isOpen, handleClose, data }) => {
  const {
    name,
    firstName,
    lastName,
    location,
    description,
    image,
    participants,
    sports,
    startTime,
    endTime,
  } = (data?.data as IUser & IEvent) || {};
  const { push } = useRouter();

  if (data?.component !== 'playersList') return null;

  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      scroll="paper"
    >
      <StyledDialogTitle>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
          {name ? name : generateFullName(firstName ?? '', lastName ?? '')}
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          size="large"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        <StyledList>
          <ListItem>
            <ListItemText
              primary="Location"
              secondary={generateLocation(
                location?.city ?? '',
                location?.state ?? ''
              )}
            />
          </ListItem>
          <Divider />

          {startTime && (
            <ListItem>
              <ListItemText
                primary="Start Time"
                secondary={formatDateAndTime(startTime)}
              />
            </ListItem>
          )}
          <Divider />
          {endTime && (
            <ListItem>
              <ListItemText
                primary="End Time"
                secondary={formatDateAndTime(endTime)}
              />
            </ListItem>
          )}
          <Divider />

          <ListItem>
            <div style={{ paddingRight: '1rem' }}>
              <ListItemText primary="Sports" />
            </div>

            <AvatarGroup>
              {sports.map((sport: string) => (
                <Tooltip title={sport} key={sport}>
                  <SAvatar
                    alt={sport}
                    src={balls[sport.toLowerCase()]}
                    sx={{ width: 30, height: 30, cursor: 'default' }}
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          </ListItem>
          <Divider />

          {!!participants?.length && (
            <ListItem>
              <div style={{ paddingRight: '1rem' }}>
                <ListItemText primary="Participants" />
              </div>
              {participants?.map((participant) => {
                const fullName = generateFullName(
                  participant.firstName,
                  participant.lastName
                );

                const pushToSpecificPage = () => {
                  push(`/user/${participant.id}`);
                };

                return (
                  <Tooltip title={fullName} key={fullName}>
                    <SAvatar
                      onClick={pushToSpecificPage}
                      alt={fullName}
                      src={
                        participant.id &&
                        `https://avatars.dicebear.com/api/avataaars/$user${participant.id}.svg?mood[]=happy`
                      }
                      sx={{ width: 30, height: 30, cursor: 'pointer' }}
                    />
                  </Tooltip>
                );
              })}
            </ListItem>
          )}
          <Divider />
          <ListItem>
            <ListItemText primary="Description" secondary={description} />
          </ListItem>
          <Divider />
          <MapView
            data={[data.data] as IUser[] & IEvent[]}
            selectedData={null}
            height="400px"
          />

          <Divider />
        </StyledList>
      </StyledDialogContent>

      <Divider />

      <StyledDialogActions>
        <Button endIcon={<SendIcon fontSize="inherit" />}>Message</Button>
        <Button endIcon={<PersonAddAlt1Icon fontSize="inherit" />}>Join</Button>
      </StyledDialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
