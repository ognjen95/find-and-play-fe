import { FC, useEffect, useState } from 'react';

import Button from '../../ui-components/buttons/Button';
import { IUser } from '../../common/types/user.types';
import generateFullName from '../../helpers/generateFullName';
import { useRouter } from 'next/router';
import {
  BottomBarWrapper,
  Card,
  DescriptionWrapper,
  HeaderWrapper,
  SAvatar,
} from './styled';
import { IEvent } from '../../common/types';
import generateLocation from '../../helpers/generateLocation';
import { formatDateAndTime } from '../../helpers/formatDateAndTime';
import Typography from '@mui/material/Typography/Typography';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Divider from '@mui/material/Divider/Divider';
import AvatarGroup from '@mui/material/AvatarGroup/AvatarGroup';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';

type Props = {
  data: IUser | IEvent;
  type?: 'event' | 'club' | 'user';
  onClick: () => void;
};

export const balls: any = {
  football: '/soccer-ball.png',
  basketball: '/basketball.png',
  tennis: '/tennisball.png',
  ['table-tennis']: '/table-tennis.png',
};

const SideBarCard: FC<Props> = ({ data, onClick, type = 'user' }) => {
  const { push } = useRouter();

  const {
    name,
    firstName,
    lastName,
    location,
    description,
    image,
    sports,
    startTime,
    endTime,
    id,
  } = (data as IEvent & IUser) || {};
  const [isLoaded, setIsLoaded] = useState(false);
  const [elevation, setElevation] = useState(1);

  const pushToSpecificPage = () => {
    push(`/${type}/${id}`);
  };

  const isEvent = !!startTime;
  useEffect(() => {
    if (id) setIsLoaded(true);
  }, [id]);

  return (
    <Card
      color="primary"
      onMouseEnter={() => setElevation(6)}
      onMouseLeave={() => setElevation(1)}
      elevation={elevation}
      isLoaded={isLoaded}
    >
      <div>
        <HeaderWrapper>
          <div>
            <Typography variant="h5">
              {name ? name : generateFullName(firstName, lastName)}
            </Typography>
            <Typography>
              {generateLocation(location?.city, location?.state)}
            </Typography>
          </div>
          <>
            {isEvent ? (
              <div>
                <FormHelperText sx={{ color: 'white' }}>
                  {formatDateAndTime(startTime)}
                </FormHelperText>
                <FormHelperText sx={{ color: 'white' }}>
                  {formatDateAndTime(endTime)}
                </FormHelperText>
              </div>
            ) : (
              <SAvatar
                onClick={pushToSpecificPage}
                alt={name + location + id}
                src={
                  id &&
                  `https://avatars.dicebear.com/api/avataaars/$user${id}.svg?mood[]=happy`
                }
                sx={{ width: 60, height: 60 }}
              />
            )}
          </>
        </HeaderWrapper>
        <Divider />
        <DescriptionWrapper>
          <Typography>{description}</Typography>
        </DescriptionWrapper>
      </div>

      <BottomBarWrapper>
        <div>
          <AvatarGroup max={4}>
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
        </div>
        <Button
          color="primary"
          onClick={onClick}
          size="small"
          endIcon={<VisibilityIcon fontSize='large' />}
        >
          View
        </Button>
      </BottomBarWrapper>
    </Card>
  );
};

export default SideBarCard;
