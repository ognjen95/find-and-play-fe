import { FunctionComponent } from 'react';
import { AvatarGroup, Divider, Tooltip, Typography } from '@mui/material';
import Button from '../../ui-components/buttons/Button';
import { IUser } from '../../common/user.types';
import generateFullName from '../../helpers/generateFullName';
import { useRouter } from 'next/router';
import {
  BottomBarWrapper,
  Card,
  DescriptionWrapper,
  HeaderWrapper,
  SAvatar,
} from './styled';

type Props = {
  data: IUser;
  type?: 'event' | 'club' | 'user';
  onClick: () => void;
};

const balls: any = {
  football: '/soccer-ball.png',
  basketball: '/basketball.png',
  tennis: '/tennisball.png',
  ['table-tennis']: '/table-tennis.png',
};

const SideBarCard: FunctionComponent<Props> = ({
  data,
  onClick,
  type = 'user',
}) => {
  const { push } = useRouter();

  const {
    firstName: name,
    lastName,
    location,
    description,
    image,
    sports,
    id,
  } = data;

  const pushToSpecificPage = () => {
    push(`/${type}/${id}`);
  };

  return (
    <Card elevation={6}>
      <div>
        <HeaderWrapper>
          <div>
            <Typography variant="h5">
              {generateFullName(name, lastName)}
            </Typography>
            <Typography>{`${location?.city}, ${location?.state}`}</Typography>
          </div>
          <>
            <SAvatar
              onClick={pushToSpecificPage}
              alt={name + location + id}
              src={
                id &&
                `https://avatars.dicebear.com/api/avataaars/$user${id}.svg?mood[]=happy`
              }
              sx={{ width: 60, height: 60 }}
            />
          </>
        </HeaderWrapper>
        <Divider />
        {/* <DescriptionWrapper>
          <Typography>{description}</Typography>
        </DescriptionWrapper> */}
      </div>

      <BottomBarWrapper>
        <div>
          <AvatarGroup max={4}>
            {sports.map((sport) => (
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
        <Button color="primary" size="small" onClick={onClick}>
          View
        </Button>
      </BottomBarWrapper>
    </Card>
  );
};

export default SideBarCard;
