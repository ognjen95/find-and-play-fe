import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FCWithChildren } from '../../common/types';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import IconButton from '@mui/material/IconButton/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQ from '../../hooks/useMediaQ';

const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.palette.primary.main};

    @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      border-radius: 0;
    }
  }
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const SlideInDialog: FCWithChildren<IProps> = ({
  isOpen = false,
  handleClose,
  title,
  content,
  actions,
}) => {
  const isSmallScreen = useMediaQ('down', 'md');

  return (
    <StyledDialog
      fullScreen={isSmallScreen}
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      scroll="paper"
      sx={{ borderRadius: '20px' }}
    >
      <DialogTitle style={{ padding: 0 }}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar sx={{ py: 1 }}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
              {title}
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
          </Toolbar>
        </AppBar>
      </DialogTitle>

      <StyledDialogContent>{content}</StyledDialogContent>

      {actions && <StyledDialogActions>{actions}</StyledDialogActions>}
    </StyledDialog>
  );
};

export default SlideInDialog;
