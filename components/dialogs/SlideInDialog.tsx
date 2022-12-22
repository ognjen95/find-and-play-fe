import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FCWithChildren } from '../../common/types';
import { styled } from '@mui/material/styles';
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

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.white};
  padding: 1rem 0.5rem;
`;

const StyledDialogActions = styled(DialogActions)`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.main};
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

interface IProps extends DialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
}

const SlideInDialog: FCWithChildren<IProps> = ({
  open = false,
  handleClose,
  title,
  content,
  actions,
  ...props
}) => {
  const isSmallScreen = useMediaQ('down', 'md');

  return (
    <StyledDialog
      {...props}
      fullScreen={isSmallScreen}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      scroll="paper"
      sx={{ borderRadius: '20px' }}
    >
      <StyledDialogTitle>
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
      </StyledDialogTitle>

      <StyledDialogContent>{content}</StyledDialogContent>

      {actions && <StyledDialogActions>{actions}</StyledDialogActions>}
    </StyledDialog>
  );
};

export default SlideInDialog;
