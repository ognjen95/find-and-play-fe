import Typography from '@mui/material/Typography/Typography';
import styled from '@mui/material/styles/styled';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import IconButton from '@mui/material/IconButton/IconButton';
import Grow from '@mui/material/Grow/Grow';
import Divider from '@mui/material/Divider/Divider';
import SideBarCard from '../../side-bar-cards/SideBarCard';
import { IEvent } from '../../../common/types';
import useGetUserEventsQuery from '../../../graphql/services/hooks/events/queries/useGetUserEvents';
import generateFullName from '../../../helpers/generateFullName';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DeleteIcon from '@mui/icons-material/Delete';
import SlideInDialog from '../../../ui-components/dialogs/SlideInDialog';
import Button from '../../../ui-components/buttons/Button';
import MuiButton from '@mui/material/Button';
import useAcceptEventRequest from '../../../graphql/services/hooks/events/mutations/useAccpetEventRequestMutation';
import { toast } from 'react-toastify';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3rem;
  width: 100%;
  h4 {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const Request = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: ease-in-out 0.2s all;

  h4 {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const MainSection = styled('div')`
  margin: 3rem 0;
  width: 100%;
  h4 {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
type TSelectedReq = {
  eventText: string;
  requestId: string;
  fullName: string;
};

const ProfileMain = () => {
  const [tab, setTab] = React.useState(0);

  const [selectedRequest, setSelectedRequest] = useState<null | TSelectedReq>(
    null
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleClose = () => {
    setSelectedRequest(null);
  };

  const { data } = useGetUserEventsQuery();
  const [acceptEventRequest] = useAcceptEventRequest({
    refetchQueries:['getUsersEvents'],
    variables: {
      eventRequestId: selectedRequest?.requestId,
    },
  });

  const handleAcceptRequest = () => {
    try {
      acceptEventRequest();
      toast.success('Request Accepted');
    } catch (error) {
      toast.error('Failed to Accept Request');
    } finally {
      handleClose();
    }
  };

  return (
    <Wrapper>
      <Tabs
        textColor="secondary"
        value={tab}
        onChange={handleChange}
        sx={{ width: '100%', color: 'white' }}
      >
        <Tab sx={{ color: 'white' }} label="Your Events" />
        <Tab sx={{ color: 'white' }} label="Event Requests" />
        <Tab sx={{ color: 'white' }} label="Achievements" />
      </Tabs>

      <Divider color="primary" />
      <MainSection>
        {/* Your Events */}
        {tab === 0 && (
          <>
            <Typography variant="h4">Your Events</Typography>
            <div style={{ marginTop: '3rem' }}>
              {data?.getUsersEvents?.map((event: IEvent) => (
                <SideBarCard key={event.id} data={event} onClick={() => {}} />
              ))}
            </div>
          </>
        )}

        {/* Event Requests */}
        {tab === 1 && (
          <>
            <Typography variant="h4">Event Requests</Typography>
            <Grow in={tab === 1} timeout={500}>
              <div>
                <div style={{ marginTop: '3rem' }}>
                  {data?.getUsersEvents?.map((event: IEvent) =>
                    event.eventRequests.map((req) => {
                      const fullName = generateFullName(
                        req.requestFrom.firstName,
                        req.requestFrom.lastName
                      );

                      const handleOpen = () => {
                        setSelectedRequest({
                          eventText: event.name,
                          requestId: req.id,
                          fullName,
                        });
                      };

                      return (
                        <>
                          {!req.isApproved && (
                            <div key={req.id}>
                              <Request>
                                <Typography variant="h6" color="white">
                                  {`${fullName} wants to join "${event.name}" event.`}
                                </Typography>
                                <div>
                                  <IconButton color="secondary">
                                    <DeleteIcon
                                      fontSize="large"
                                      color="error"
                                    />
                                  </IconButton>
                                  {
                                    <IconButton
                                      color="secondary"
                                      disabled={!!req.isApproved}
                                      onClick={handleOpen}
                                    >
                                      <HowToRegIcon
                                        fontSize="large"
                                        color={
                                          req.isApproved
                                            ? 'disabled'
                                            : 'success'
                                        }
                                      />
                                    </IconButton>
                                  }
                                </div>
                              </Request>
                              <Divider
                                sx={{ margin: '.5rem 0' }}
                                color="primary"
                              />
                            </div>
                          )}
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </Grow>
          </>
        )}
      </MainSection>
      <SlideInDialog
        open={!!selectedRequest}
        title="Event Request Approval"
        content={
          <Typography color="white">
            {`  If you want to accept ${selectedRequest?.fullName} to join ${selectedRequest?.eventText} event please click Confirm
            button.`}
          </Typography>
        }
        actions={
          <div>
            <MuiButton
              sx={{ color: 'white', marginRight: '1rem' }}
              variant="text"
              onClick={handleClose}
            >
              Cancel
            </MuiButton>
            <Button onClick={handleAcceptRequest} size="small">
              Confirm
            </Button>
          </div>
        }
        handleClose={handleClose}
      />
    </Wrapper>
  );
};

export default ProfileMain;
