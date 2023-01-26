import { gql } from '@apollo/client';

const CREATE_JOIN_EVENT_MUTATION = gql`
  mutation createJoinEventMutation($eventId: String!) {
    createJoinRequest(eventId: $eventId) {
      id
    }
  }
`;

export default CREATE_JOIN_EVENT_MUTATION;
