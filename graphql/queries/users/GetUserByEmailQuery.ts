import { gql } from '@apollo/client';

const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email){
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

export default GET_USER_BY_EMAIL;
