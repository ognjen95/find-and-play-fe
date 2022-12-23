import { useState, FC } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import Box from '@mui/material/Box/Box';
import Chip from '@mui/material/Chip/Chip';
import { SPORTS } from '../../common/constants';
import MenuItem from '@mui/material/MenuItem/MenuItem';

const StyledAccordion = styled(Accordion)`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  p,
  span,
  svg {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
const StyledAccordionDetails = styled(Accordion)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 1rem;
  p,
  span,
  svg {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const Filter: FC = () => {
  const [expanded, setExpanded] = useState<string[]>([
    'eventType',
    'sports',
    'days',
    'gender',
  ]);

  const [filters, setFilters] = useState({});

  const handleChange = (option: string) => () => {
    setExpanded((prev) => {
      if (prev.includes(option)) {
        const filtered = prev.filter((item) => item !== option);
        return filtered;
      }

      return [...prev, option];
    });
  };

  return (
    <div>
      <StyledAccordion
        expanded={expanded.includes('sports')}
        onChange={handleChange('sports')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>
            What sports interests You?
          </Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <FormControl sx={{ m: 1, width: '100%' }}>
            {/* <InputLabel sx={{ color: 'white' }} id="demo-multiple-chip-label">
              Sports
            </InputLabel> */}
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={[]}
              onChange={() => {}}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected: string[]) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              //   MenuProps={MenuProps}
            >
              {SPORTS.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  //   style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion
        expanded={expanded.includes('days')}
        onChange={handleChange('days')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>
            What day of the week suits you the best?
          </Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <FormControl component="fieldset">
            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
              {[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ].map((day) => (
                <FormControlLabel
                  sx={{ m: 1, display: 'flex' }}
                  key={day}
                  control={
                    <Checkbox
                      checked={true}
                      onChange={() => {}}
                      name={day.toLocaleLowerCase()}
                    />
                  }
                  label={day}
                />
              ))}
            </FormGroup>
          </FormControl>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion
        expanded={expanded.includes('gender')}
        onChange={handleChange('gender')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>
            Do you want to play with boys, girls or both?
          </Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="both" control={<Radio />} label="Both" />
            </RadioGroup>
          </FormControl>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default Filter;
