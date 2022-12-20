import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation createUser($CreateUserInput: CreateUserInput!){
    createUser(CreateUserInput: $CreateUserInput){
    id
    firstName
    lastName
    email
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

export default CREATE_USER_MUTATION;
