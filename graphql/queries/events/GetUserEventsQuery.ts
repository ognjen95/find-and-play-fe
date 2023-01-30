import { gql } from '@apollo/client';

const GET_USER_EVENTS_QUERY = gql`
  query getUsersEvents($QueryOptionsInput: QueryOptionsInput) {
    getUsersEvents(QueryOptionsInput: $QueryOptionsInput) {
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
      eventRequests {
        id
        eventId
        userId
        isApproved
        requestFor {
          id
          firstName
          lastName
        }
        requestFrom {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export default GET_USER_EVENTS_QUERY;
