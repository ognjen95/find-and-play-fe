import { FC, forwardRef, ReactElement, Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
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
import { IEvent } from '../../types';
import { IUser } from '../../common/user.types';

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
  padding: 1rem;
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
  const { firstName, lastName, location, description, image, sports } =
    (data?.data as IUser & IEvent) || {};
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
          {generateFullName(firstName ?? '', lastName ?? '')}
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
          <ListItem button>
            <ListItemText
              primary="Location"
              secondary={generateLocation(
                location?.city ?? '',
                location?.state ?? ''
              )}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Sports"
              secondary={sports?.map((item) => item.toUpperCase() + ', ')}
            />
          </ListItem>
          <Divider />
          {/* {startTime && (
            <ListItem button>
              <ListItemText
                primary="Start Time"
                secondary={startTime?.toDateString()}
              />
            </ListItem>
          )}
          <Divider />
          {endTime && (
            <ListItem button>
              <ListItemText
                primary="Start Time"
                secondary={endTime?.toDateString()}
              />
            </ListItem>
          )} */}
          <Divider />
          <ListItem button>
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
        <Button>Message</Button>
        <Button>Apply</Button>
      </StyledDialogActions>
    </Dialog>
  );
};

export default FullScreenDialog;
