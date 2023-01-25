import { gql } from '@apollo/client';

const GET_MANY_EVENTS_QUERY = gql`
  query getManyEvents($QueryOptionsInput: QueryOptionsInput) {
    getManyEvents(QueryOptionsInput: $QueryOptionsInput) {
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
      participants {
        id
        firstName
        lastName
        image
      }
    }
  }
`;

export default GET_MANY_EVENTS_QUERY;
