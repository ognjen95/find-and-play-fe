import { gql } from '@apollo/client';

const GET_MANY_USERS_QUERY = gql`
  query getManyUsers {
    getManyUsers{
    id
    firstName
    lastName
    email
    description
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

export default GET_MANY_USERS_QUERY;
