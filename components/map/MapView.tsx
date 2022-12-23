import GoogleMapReact from 'google-map-react';

import { Paper, styled, useTheme } from '@mui/material';
import { FCWithChildren } from '../../common/types';
import { IUser } from '../../common/user.types';

import { ISelectedData } from '../../pages';
import Marker from './Marker';
import { IEvent } from '../../types';
import { memo } from 'react';

interface IMappWrapper {
  height?: string;
  width?: string;
  borderRadius?: boolean;
}

const MapWrapper = styled(Paper)<IMappWrapper>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => (borderRadius ? '20px' : 0)};
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

interface IProps {
  height?: string;
  width?: string;
  borderRadius?: boolean;
  data: IUser[] & IEvent[];
  selectedData: ISelectedData | null;
  setSelected?: (data: ISelectedData) => void;
  clearSelected: () => void;
}

const MapView: FCWithChildren<IProps> = ({
  height = '100%',
  width = '100%',
  borderRadius = false,
  data,
  selectedData,
  setSelected,
  clearSelected,
}) => {
  const defaultProps = {
    center: {
      lat: 44.81357527648287,
      lng: 20.456190176806516,
    },
    zoom: 13,
  };

  const theme = useTheme();
  return (
    <MapWrapper
      elevation={16}
      height={height}
      width={width}
      borderRadius={borderRadius}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
          libraries: ['places'],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={{
          disableDefaultUI: true,
          backgroundColor: theme.palette.primary.main,
          clickableIcons: false,
        }}
        //   onClick={() => {
        //     console.log('op');
        //   }}
        //   onIdle={() => {
        //     console.log('op');
        //   }}
      >
        {data?.map((item) => {
          const setUser = () => {
            if (!setSelected) return;

            setSelected({ data: item, component: 'map' });
          };

          return (
            <Marker
              key={item.id}
              markerData={item}
              lat={item.location?.lat}
              lng={item.location?.lng}
              setUser={setUser}
              selectedId={selectedData?.data?.id}
            />
          );
        })}
      </GoogleMapReact>
    </MapWrapper>
  );
};

export default memo(MapView);
