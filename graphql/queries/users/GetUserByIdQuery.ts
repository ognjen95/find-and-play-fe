import { gql } from '@apollo/client';

const GET_USER_BY_ID = gql`
  query getUserById($id: String!) {
    getUserById(id: $id){
    id
    firstName
    lastName
    email
    description
    sports
    stamina
    reliability
    location {
        lng
        lat
        city
        state
    }
    } 
  }
`;

export default GET_USER_BY_ID;
