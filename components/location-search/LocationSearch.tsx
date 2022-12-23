import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Input, { InputProps } from '@mui/material/Input/Input';
import styled from '@mui/material/styles/styled';
import React, { FC, useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import { Controller } from 'react-hook-form';

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

interface IProps extends InputProps {
  getLocation: (keydata: ILocation) => void;
  control: any;
  name: string;
  errorMsg?: string;
}

const LocationSearch: FC<IProps> = ({
  getLocation,
  control,
  name,
  errorMsg,
  ...props
}) => {
  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? '',
    options: {
      componentRestrictions: { country: ['srb'] },
      types: ['address'],
    },
    onPlaceSelected: (place) => {
      const address = place?.formatted_address ?? '';
      const location = place?.geometry?.location;

      const street = address.split(',')[0];
      const city = address.split(',')[1];
      const state = address.split(',')[2];

      const lat = location?.lat() ?? 0;
      const lng = location?.lng() ?? 0;

      getLocation({
        city: street + ', ' + city,
        state,
        lat,
        lng,
      });
    },
  });

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <StyledInput
          {...props}
            aria-label="Location"
            name="location"
            placeholder="Enter your city address"
            inputRef={ref}
          />
        )}
      />

      <FormHelperText error>{errorMsg}</FormHelperText>
    </>
  );
};

export default LocationSearch;
