import { gql } from '@apollo/client';

const CREATE_EVENT_MUTATION = gql`
  mutation createEvent($CreateEventInput: CreateEventInput!) {
    createEvent(CreateEventInput: $CreateEventInput) {
      id
      name
      description
      startTime
      endTime
      sports
      location {
        lng
        lat
        city
        state
      }
    }
  }
`;

export default CREATE_EVENT_MUTATION;
