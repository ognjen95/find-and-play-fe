import Input from '@mui/material/Input/Input';
import styled from '@mui/material/styles/styled';
import React, { FC } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';

export const StyledInput = styled(Input)`
  min-width: 400px;
  margin: 1rem 0;

  & .MuiFormLabel-root.MuiInputLabel-root {
    color: white;
  }

  & .MuiInputBase-input.MuiInput-input {
    color: white;
  }
  &.MuiInputBase-root.MuiInput-root:before,
  &.MuiInputBase-root.MuiInput-root:after {
    border-bottom: 2px solid white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    min-width: 100%;
  }
`;

export interface ILocation {
  city: string;
  state: string;
  lng: number;
  lat: number;
}

const LocationSearch: FC<{ getLocation: (data: ILocation) => void }> = ({
  getLocation,
  ...props
}) => {
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyDD2jLDrNJxZzr0ANFdFpBa8pwnz2rGrMA',
    options: {
      componentRestrictions: { country: ['srb'] },
      types: ['address'],
    },
    onPlaceSelected: (place) => {
      getLocation({
        city:
          place?.formatted_address?.split(',')[0] +
            ', ' +
            place?.formatted_address?.split(',')[1] ?? '',
        state: place?.formatted_address?.split(',')[2] ?? '',
        lng: place?.geometry?.location?.lat() ?? 0,
        lat: place?.geometry?.location?.lng() ?? 0,
      });
    },
  });

  return (
    <StyledInput
      aria-label="Location"
      name="location"
      placeholder="Enter your city address"
      inputRef={ref}
      {...props}
    />
  );
};

export default LocationSearch;
