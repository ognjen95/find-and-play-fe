import { gql } from '@apollo/client';

const ACCEPT_EVENT_REQUEST = gql`
  mutation approveEventRequest($eventRequestId: String!) {
    approveEventRequest(eventRequestId: $eventRequestId) {
      id
    }
  }
`;

export default ACCEPT_EVENT_REQUEST;
