import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

const useMediaQ = (
  direction: 'up' | 'down',
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
): boolean => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints[direction](breakpoint));
};

export default useMediaQ;