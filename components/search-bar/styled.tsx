import InputBase from "@mui/material/InputBase/InputBase";
import { alpha, styled } from "@mui/material/styles";

export const Search = styled('div')`
  position: relative;
  color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.15)};

  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.25)};
  }
  margin: 1rem 0;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: auto;
  }
`;

export const SearchIconWrapper = styled('div')`
  padding: .5rem .8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
