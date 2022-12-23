import { gql } from '@apollo/client';

const GET_MANY_EVENTS_QUERY = gql`
  query getManyEvents {
    getManyEvents {
      id
      name
      startTime
      endTime
      sports
      description
      location {
        lng
        lat
        city
        state
      }
    }
  }
`;

export default GET_MANY_EVENTS_QUERY;
